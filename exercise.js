const exerciseData = {
  backPain: [
    { name:"catcow" , img: "images/catcow.jpeg" },
    { name: "Child’s Pose", img: "images/Child.PNG" },
    { name: "Pelvic Tilt", img: "images/pelvict.png" },
    { name: "Arnica 200C (Homeopathy)", img: "images/Arnica-Montana.jpg" }
  ],
  anxiety: [
    { name: "Alternate Nostril Breathing", img: "images/nostrilb.png" },
    { name: "Yoga Nidra", img: "images/yoganidra.png" },
    { name: "Brisk Walking", img: "images/brikwalking.png" },
    { name: "Aconite 30C (Homeopathy)", img: "images/aconite 30c.png" }
  ],
  diabetes: [
    { name: "Pranayama", img: "images/Pranayama.png" },
    { name: "Leg Raises", img: "images/legraises.png" },
    { name: "Kapalbhati", img: "images/kapalbhati.png" },
    { name: "Syzygium Jambolanum (Homeopathy)", img: "images/syzygium.png" }
  ],
  obesity: [
    { name: "Surya Namaskar (12 rounds)", img: "images/surya-namaskar.png" },
    { name: "Plank Hold", img: "images/plankhold.png" },
    { name: "Walking 30 mins", img: "images/walking30.png" },
    { name: "Calcarea Carb 30C (Homeopathy)", img: "images/calcarea-carb.png" }
  ],
  acne: [
    { name: "Facial Yoga (Lion Pose)", img: "images/lion-pose.png" },
    { name: "Steam Inhalation", img: "images/steam.png" },
    { name: "Gentle Neck Exercises", img: "images/neck.png" },
    { name: "Berberis Aquifolium (Homeopathy)", img: "images/berberis-aquifolium.png" }
  ],
  pcos: [
    { name: "Butterfly Pose", img: "images/butterflypose.png" },
    { name: "Fertility Yoga Flow", img: "images/Fertility+Yoga.png" },
    { name: "15 min Power Walk", img: "images/walking30.png" },
    { name: "Pulsatilla 30C (Homeopathy)", img: "images/pulsatilla_30c.png" }
  ]
};

function showRecommendations() {
  const condition = document.getElementById("condition").value;
  const output = document.getElementById("recommendations");
  output.innerHTML = "";

  if (exerciseData[condition]) {
    let html = `<h2 class="text-xl font-semibold mb-2">Recommended:</h2><div class="space-y-4">`;

    html += exerciseData[condition].map(item => `
      <div class="flex items-center space-x-4 bg-white border border-green-200 p-3 rounded shadow">
        <img src="exercise/images/${catcow.PNG}" alt="${}" class="w-16 h-16 object-contain rounded" />
        <span class="text-green-900 font-medium">${item.name}</span>
      </div>
    `).join('');

    html += `</div>`;
    output.innerHTML = html;
  }
}
