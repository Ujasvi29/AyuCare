// Yoga video data with extended filtering options
const videos = [
  {
    title: "Morning Energy Yoga",
    time: "morning",
    mood: "tired",
    goal: "energy",
    url: "https://www.youtube.com/embed/VaoV1PrYft4"
  },
  {
    title: "Back Pain Relief Yoga",
    time: "evening",
    mood: "okay",
    goal: "pain",
    url: "https://www.youtube.com/embed/sTANio_2E0Q"
  },
  {
    title: "Stress Relief Yoga",
    time: "afternoon",
    mood: "stressed",
    goal: "relief",
    url: "https://www.youtube.com/embed/4pLUleLdwY4"
  },
  {
    title: "Focus Flow Yoga",
    time: "morning",
    mood: "okay",
    goal: "focus",
    url: "https://www.youtube.com/embed/iu2WMtQZGQA"
  },
  {
    title: "Yoga for Digestion",
    time: "evening",
    mood: "tired",
    goal: "digestion",
    url: "https://www.youtube.com/embed/oMgT_fN3F20"
  },
  {
    title: "Bedtime Yoga for Sleep",
    time: "evening",
    mood: "stressed",
    goal: "sleep",
    url: "https://www.youtube.com/embed/EZkR3p6f2xg"
  },
  {
    title: "Full Body Flow (All-purpose)",
    time: "any",
    mood: "okay",
    goal: "energy",
    url: "https://www.youtube.com/embed/OQ6NfFIr2jw"
  },
    {
      title: "Morning Energy Yoga",
      time: "morning",
      mood: "tired",
      goal: "energy",
      url: "https://www.youtube.com/embed/VaoV1PrYft4"
    },
    {
      title: "Back Pain Relief Yoga",
      time: "evening",
      mood: "okay",
      goal: "pain",
      url: "https://www.youtube.com/embed/sTANio_2E0Q"
    },
    {
      title: "Stress Relief Yoga",
      time: "afternoon",
      mood: "stressed",
      goal: "relief",
      url: "https://www.youtube.com/embed/4pLUleLdwY4"
    },
    {
      title: "Focus Flow Yoga",
      time: "morning",
      mood: "okay",
      goal: "focus",
      url: "https://www.youtube.com/embed/iu2WMtQZGQA"
    },
    {
      title: "Yoga for Digestion",
      time: "evening",
      mood: "tired",
      goal: "digestion",
      url: "https://www.youtube.com/embed/oMgT_fN3F20"
    },
    {
      title: "Bedtime Yoga for Sleep",
      time: "evening",
      mood: "stressed",
      goal: "sleep",
      url: "https://www.youtube.com/embed/EZkR3p6f2xg"
    },
    {
      title: "Full Body Flow (Anytime)",
      time: "any",
      mood: "okay",
      goal: "energy",
      url: "https://www.youtube.com/embed/OQ6NfFIr2jw"
    }
  ];
  

// Handle form submission
document.getElementById("recommendationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const time = document.getElementById("timeOfDay").value;
  const mood = document.getElementById("mood").value;
  const goal = document.getElementById("goal").value;

  const matchedVideos = videos.filter(video =>
    (video.time === time || video.time === "any") &&
    video.mood === mood &&
    video.goal === goal
  );

  const resultDiv = document.getElementById("recommendationResult");
  const videoContainer = document.getElementById("videoContainer");
  videoContainer.innerHTML = ""; // Clear previous results

  if (matchedVideos.length > 0) {
    resultDiv.textContent = `✅ Showing recommended videos for your selection:`;
    matchedVideos.forEach(video => {
      const div = document.createElement("div");
      div.className = "bg-white p-4 rounded shadow";

      div.innerHTML = `
        <h2 class="text-lg font-semibold mb-2">${video.title}</h2>
        <iframe class="w-full h-56" src="${video.url}" frameborder="0" allowfullscreen></iframe>
      `;
      videoContainer.appendChild(div);
    });
  } else {
    resultDiv.textContent = "❌ No matching videos found. Try different filters.";
  }
});

// Show all videos initially
function showAllVideos() {
  const container = document.getElementById("videoContainer");
  container.innerHTML = "";

  videos.forEach(video => {
    const div = document.createElement("div");
    div.className = "bg-white p-4 rounded shadow";

    div.innerHTML = `
      <h2 class="text-lg font-semibold mb-2">${video.title}</h2>
      <iframe class="w-full h-56" src="${video.url}" frameborder="0" allowfullscreen></iframe>
    `;

    container.appendChild(div);
  });
}

showAllVideos();

  