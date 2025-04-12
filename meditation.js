const meditations = [
  {
    category: 'sleep',
    title: 'Deep Sleep Meditation',
    video: 'https://www.youtube.com/embed/z6X5oEIg6Ak'
  },
  {
    category: 'focus',
    title: 'Focus & Clarity Meditation',
    video: 'https://www.youtube.com/embed/YFRZI3xMovM'
  },
  {
    category: 'anxiety',
    title: '5-Minute Anxiety Release',
    video: 'https://www.youtube.com/embed/MIr3RsUWrdo'
  },
  {
    category: 'anxiety',
    title: 'Breath Awareness for Calm',
    video: 'https://www.youtube.com/embed/9fEo9my03Ks'
  },
  {
    category: 'focus',
    title: 'Focus & Clarity Meditation',
    video: 'https://www.youtube.com/embed/1vx8iUvfyCY'
  }
];

// Meditation videos
const videos = [
  {
    title: "Mindfulness Meditation",
    url: "https://www.youtube.com/embed/inpok4MKVLM"
  },
  {
    title: "10-Minute Guided Meditation",
    url: "https://www.youtube.com/embed/ZToicYcHIOU"
  },
  {
    title: "Anxiety Relief Meditation",
    url: "https://www.youtube.com/embed/O-6f5wQXSu8"
  }
];

function displayVideos() {
  const container = document.getElementById("videoContainer");
  container.innerHTML = "";
  videos.forEach(video => {
    container.innerHTML += `
      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-lg font-semibold mb-2 text-green-800">${video.title}</h2>
        <iframe class="w-full h-56 rounded" src="${video.url}" frameborder="0" allowfullscreen></iframe>
      </div>
    `;
  });
}

// Run when page loads
window.onload = () => {
  displayVideos();
};

function displayMeditations(category) {
  const container = document.getElementById('meditationContainer');
  container.innerHTML = '';

  const filtered = category === 'all' ? meditations : meditations.filter(m => m.category === category);

  filtered.forEach(meditation => {
    const div = document.createElement('div');
    div.className = 'bg-white p-4 rounded shadow';
    div.innerHTML = `
      <h3 class="text-lg font-semibold mb-2">${meditation.title}</h3>
      <iframe width="100%" height="215" src="${meditation.video}" frameborder="0" allowfullscreen></iframe>
    `;
    container.appendChild(div);
  });
}

function filterMeditation(category) {
  displayMeditations(category);
}

// Breathing Timer Logic
const startBtn = document.getElementById('start-breathing');
const stopBtn = document.getElementById('stop-breathing');
const phaseLabel = document.getElementById('phase-label');
const countdownEl = document.getElementById('countdown');

const phases = [
  { name: "Inhale", duration: 4 },
  { name: "Hold", duration: 25 },
  { name: "Exhale", duration: 6 }
];

let currentPhase = 0;
let countdownValue = phases[currentPhase].duration;
let countdownInterval;

function startBreathingCycle() {
  clearInterval(countdownInterval);
  currentPhase = 0;
  runPhase();
}

function runPhase() {
  const phase = phases[currentPhase];
  phaseLabel.textContent = phase.name;
  countdownValue = phase.duration;
  countdownEl.textContent = countdownValue;

  countdownInterval = setInterval(() => {
    countdownValue--;
    countdownEl.textContent = countdownValue;

    if (countdownValue <= 0) {
      clearInterval(countdownInterval);
      currentPhase = (currentPhase + 1) % phases.length;
      runPhase();
    }
  }, 1000);
}

function stopBreathingCycle() {
  clearInterval(countdownInterval);
  phaseLabel.textContent = "Paused";
  countdownEl.textContent = "-";
}

startBtn.addEventListener('click', startBreathingCycle);
stopBtn.addEventListener('click', stopBreathingCycle);