var secondsPassed = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString() + " " + d.toLocaleDateString();;
    document.getElementById("time").innerHTML = t;
}