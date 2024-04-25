

  // Check if local storage is supported
  if (typeof(Storage) !== "undefined") {
    // Check if there's a stored position
    var storedPosition = localStorage.getItem("audioPosition");
    var audio = document.getElementById("backgroundAudio");

    if (audio) {
      if (storedPosition) {
        // Set the stored position
        audio.currentTime = parseFloat(storedPosition);
      }

      // Update local storage with current position
      audio.addEventListener('timeupdate', function() {
        localStorage.setItem('audioPosition', audio.currentTime);
      });
    } else {
      console.error("Audio element not found.");
    }
  } else {
    console.error("Local storage not supported, cannot save audio position.");
  }
