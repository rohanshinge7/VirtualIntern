
    // Set the date we're counting down to
    const eventDate = new Date("January 1, 2025 00:00:00").getTime();

    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "Event has started!";
        }
    }

    function startCountdown() {
        interval = setInterval(updateCountdown, 1000);
    }

    function pauseCountdown() {
        clearInterval(interval);
    }

    function resetCountdown() {
        clearInterval(interval);
        updateCountdown();
    }
