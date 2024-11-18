// Create a variable to store the time when the page loads
var start = new Date();

function stopTime() {
    // Create a new Date object for the time when the button is pressed
    var stop = new Date();

    // Calculate the difference in milliseconds between stop and start times
    var elapsedMilliseconds = stop.getTime() - start.getTime();

    // Convert milliseconds to seconds
    var elapsedSeconds = elapsedMilliseconds / 1000;

    // Display the elapsed time in seconds with a pop-up
    alert("The page has been loaded for " + elapsedSeconds.toFixed(2) + " seconds.");
}
