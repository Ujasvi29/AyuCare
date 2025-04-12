document.getElementById("journalForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const remedy = document.getElementById("remedy").value;
    const symptoms = document.getElementById("symptoms").value;
    const diet = document.getElementById("diet").value;
    const mood = document.getElementById("mood").value;
  
    const entry = {
      date: new Date().toLocaleString(),
      remedy,
      symptoms,
      diet,
      mood
    };
  
    let entries = JSON.parse(localStorage.getItem("healthJournal")) || [];
    entries.push(entry);
    localStorage.setItem("healthJournal", JSON.stringify(entries));
  
    displayEntries();
    document.getElementById("journalForm").reset();
  });
  
  function displayEntries() {
    const entries = JSON.parse(localStorage.getItem("healthJournal")) || [];
    const container = document.getElementById("entries");
    container.innerHTML = "";
  
    entries.slice().reverse().forEach(entry => {
      container.innerHTML += `
        <div style="border-bottom: 1px solid #ddd; margin-bottom: 10px;">
          <p><strong>Date:</strong> ${entry.date}</p>
          <p><strong>Remedy:</strong> ${entry.remedy}</p>
          <p><strong>Symptoms:</strong> ${entry.symptoms}</p>
          <p><strong>Diet:</strong> ${entry.diet}</p>
          <p><strong>Mood:</strong> ${entry.mood}</p>
        </div>
      `;
    });
  }
  
  window.onload = displayEntries;
  