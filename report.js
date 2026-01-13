import { collection, addDoc, Timestamp } 
from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

document.getElementById("reportForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  await addDoc(collection(db, "reports"), {
    type: document.getElementById("type").value,
    who: document.getElementById("who").value,
    details: document.getElementById("details").value,
    createdAt: Timestamp.now()
  });

  alert("Your report has been submitted safely.");
  e.target.reset();
});
