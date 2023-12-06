let count = 30;

    function startCountdown() {
      const countdownInterval = setInterval(function () {
        document.body.setAttribute("data-color", count === 0 ? "0" : (count % 2 === 0 ? "1" : "2"));

        document.getElementById("countdown").textContent = count;

        if (count === 0) {
          clearInterval(countdownInterval);
          console.log("Countdown complete!");
        } else {
          count--;
        }
      }, 1000); // Update every second (1000 milliseconds)
    }

    startCountdown();