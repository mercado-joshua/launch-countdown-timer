let clock;

$(document).ready(() => {

    // Grab the current date
    const currentDate = new Date();

    // Set some date in the future. In this case, it's always Jan 1
    const futureDate  = new Date(currentDate.getFullYear() + 1, 0, 1);

    // Calculate the difference in seconds between the future and current date
    const diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    // Instantiate a coutdown FlipClock
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
    });
});
