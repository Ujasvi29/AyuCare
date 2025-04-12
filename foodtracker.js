function saveEntry() {
    const date = document.getElementById("logDate").value;
    const breakfast = document.getElementById("breakfast").value;
    const lunch = document.getElementById("lunch").value;
    const dinner = document.getElementById("dinner").value;
    const waterIntake = document.getElementById("waterIntake").value;
  
    if (!date) {
      alert("Please select a date.");
      return;
    }
  
    const entry = {
      breakfast,
      lunch,
      dinner,
      waterIntake
    };
  
    localStorage.setItem(`foodLog_${date}`, JSON.stringify(entry));
    alert("✅ Entry saved successfully!");
  
    // Auto-clear inputs
    document.getElementById("foodForm").reset();
  }
  
  function viewLog() {
    const logDisplay = document.getElementById("logDisplay");
    logDisplay.innerHTML = "<h2 class='text-xl font-bold mb-2'>📅 Food Log:</h2>";
    logDisplay.classList.remove("hidden");
  
    const keys = Object.keys(localStorage).filter(key => key.startsWith("foodLog_")).sort().reverse();
  
    if (keys.length === 0) {
      logDisplay.innerHTML += "<p class='text-gray-500'>No entries found.</p>";
      return;
    }
  
    keys.forEach(key => {
      const date = key.replace("foodLog_", "");
      const entry = JSON.parse(localStorage.getItem(key));
  
      logDisplay.innerHTML += `
        <div class="border border-green-200 p-4 mb-2 rounded bg-green-50">
          <h3 class="font-semibold text-lg">📆 ${date}</h3>
          <ul class="ml-4 list-disc text-sm mt-1">
            <li><strong>Breakfast:</strong> ${entry.breakfast}</li>
            <li><strong>Lunch:</strong> ${entry.lunch}</li>
            <li><strong>Dinner:</strong> ${entry.dinner}</li>
            <li><strong>Water Intake:</strong> ${entry.waterIntake} glasses</li>
          </ul>
        </div>
      `;
    });
  }
  
  function syncWithCalendar() {
    const date = document.getElementById("logDate").value;
    if (!date) {
      alert("Please select a date first.");
      return;
    }
  
    const title = "AyuCare Food Tracker Entry";
    const startDate = new Date(date).toISOString().replace(/[-:]|\.\d{3}/g, "").slice(0, 15);
    const endDate = startDate;
  
    const icsContent = `BEGIN:VCALENDAR
  VERSION:2.0
  BEGIN:VEVENT
  SUMMARY:${title}
  DTSTART:${startDate}
  DTEND:${endDate}
  DESCRIPTION=Don't forget to log your meals today on AyuCare!
  END:VEVENT
  END:VCALENDAR`;
  
    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `AyuCare_${date}_Reminder.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  