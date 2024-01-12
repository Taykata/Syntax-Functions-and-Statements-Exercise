function timeToWalk(steps, footprintLength, speed) {
    let metersPerKilometer = 1000;
    let minutesPerHour = 60;
    let secondsPerMinute = 60;

    let totalDistance = steps * footprintLength;

    let walkingTimeInSeconds = (totalDistance / metersPerKilometer) / speed * secondsPerMinute * minutesPerHour;

    let totalBreakTimeInSeconds = Math.floor(totalDistance / 500) * secondsPerMinute;

    let totalTimeInSeconds = walkingTimeInSeconds + totalBreakTimeInSeconds;

    let roundedTotalTimeInSeconds = Math.ceil(totalTimeInSeconds);

    let hours = Math.floor(roundedTotalTimeInSeconds / (minutesPerHour * secondsPerMinute));
    let minutes = Math.floor((roundedTotalTimeInSeconds % (minutesPerHour * secondsPerMinute)) / secondsPerMinute);
    let seconds = Math.floor(roundedTotalTimeInSeconds % secondsPerMinute);

    let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    console.log(formattedTime);
}

timeToWalk(2564, 0.70, 5.5);