document.addEventListener('DOMContentLoaded', () => {
    // Set the date we're counting down to
    const countDownDate = new Date().getTime() + (4 * 24 * 60 * 60 * 1000) + (13 * 60 * 60 * 1000) + (56 * 60 * 1000) + (2 * 1000);

    // Update the count down every 1 second
    const countdownFunction = setInterval(() => {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.querySelector('.countdown').innerHTML = "EXPIRED";
        }
    }, 1000);
});
