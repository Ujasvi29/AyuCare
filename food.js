const tips = [
  "Start your day with a glass of warm water and lemon to detoxify.",
  "Use ghee instead of refined oils for better digestion.",
  "Include Triphala in your routine for gut health.",
  "Have your heaviest meal at noon, when digestion is strongest.",
  "Drink warm herbal teas like tulsi or ginger throughout the day.",
  "Eat seasonal and local foods to align with nature.",
  "Avoid cold drinks during meals to preserve digestive fire.",
  "Sleep before 10 PM for optimal repair and balance."
];

const recommendations = {
  headache: ["Brahmi Tea", "Shankhpushpi Syrup", "Ashwagandha Capsules"],
  constipation: ["Triphala Powder", "Warm water with lemon", "Castor Oil"],
  indigestion: ["Ginger Powder", "Ajwain Seeds", "Hing (Asafoetida)"],
  fatigue: ["Ashwagandha", "Chyawanprash", "Almond Milk"],
  cold: ["Tulsi Tea", "Honey + Ginger", "Turmeric Milk"],
  cough: ["Licorice Root", "Ginger & Honey", "Pippali Powder"],
  anxiety: ["Brahmi Oil", "Chamomile Tea", "Ashwagandha"],
  acidity: ["Coriander Seeds", "Jeera Water", "Amla Juice"],
  skin: ["Neem Capsules", "Aloe Vera Juice", "Turmeric Paste"],
  hairfall: ["Bhringraj Oil", "Amla Powder", "Coconut Oil"],
  insomnia: ["Warm Milk with Nutmeg", "Brahmi Tea", "Foot Massage with Ghee"],
  fever: ["Giloy Juice", "Tulsi Leaves", "Coriander Tea"],
sore_throat: ["Mulethi Powder", "Salt Water Gargle", "Clove Tea"],
pimples: ["Neem Paste", "Multani Mitti", "Tea Tree Oil"],
weight_loss: ["Lemon Honey Water", "Triphala Juice", "Green Tea with Ginger"],
diabetes: ["Karela Juice", "Fenugreek Seeds", "Jamun Powder"],
high_blood_pressure: ["Ashwagandha", "Arjuna Bark Powder", "Garlic Cloves"],
low_immunity: ["Chyawanprash", "Giloy Tablets", "Turmeric Milk"],
joint_pain: ["Castor Oil Massage", "Guggulu Tablets", "Turmeric & Ginger Decoction"],
menstrual_cramps: ["Sesame Seed Tea", "Aloe Vera Juice", "Cumin Water"],
eye_strain: ["Triphala Eye Wash", "Cucumber Slices", "Rose Water Drops"]

};

let currentTipIndex = Math.floor(Math.random() * tips.length);

function showNewTip() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * tips.length);
  } while (newIndex === currentTipIndex);
  currentTipIndex = newIndex;

  const tipElement = document.getElementById("dailyTip");
  tipElement.textContent = tips[newIndex];
  tipElement.style.color = "green"; // Green color applied
}

function recommendAyurvedicItems() {
  const input = document.getElementById("symptomInput").value.toLowerCase().trim();
  const resultDiv = document.getElementById("recommendationResult");

  if (recommendations[input]) {
    const items = recommendations[input].map(item => `• ${item}`).join("<br>");
    resultDiv.innerHTML = `<strong>Recommended Items for ${input}:</strong><br>${items}`;
    resultDiv.style.color = "green"; // Green color applied
  } else {
    resultDiv.innerHTML = "Sorry, no recommendation found for this symptom.";
    resultDiv.style.color = "red"; // Optional: red if not found
  }
}

function logSymptom() {
  const input = document.getElementById("symptomInput").value.toLowerCase().trim();
  if (!input) return;

  const items = recommendations[input] || ["No recommendation found."];
  const entry = {
    symptom: input,
    items,
    time: new Date().toLocaleString()
  };

  let logs = JSON.parse(localStorage.getItem("symptomLogs")) || [];
  logs.push(entry);
  localStorage.setItem("symptomLogs", JSON.stringify(logs));
  renderLog();
}

function renderLog() {
  const logs = JSON.parse(localStorage.getItem("symptomLogs")) || [];
  const logList = document.getElementById("symptomLog");
  logList.innerHTML = "";

  logs.forEach(log => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${log.symptom}</strong> (${log.time})<br>Items: ${log.items.join(", ")}`;
    li.style.color = "green"; // Green color applied to logs
    logList.appendChild(li);
  });
}

function clearSymptomLog() {
  if (confirm("Are you sure you want to clear all logs?")) {
    localStorage.removeItem("symptomLogs");
    renderLog();
  }
}

// Initial Load
window.onload = () => {
  showNewTip();
  renderLog();
};

