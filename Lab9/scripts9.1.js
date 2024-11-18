var start = new Date();

function stopTime() {
    var stop = new Date();

    var elapsedMilliseconds = stop.getTime() - start.getTime();

    var elapsedSeconds = elapsedMilliseconds / 1000;

    alert("The page has been loaded for " + elapsedSeconds.toFixed(2) + " seconds.");
}
