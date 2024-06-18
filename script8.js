


function calculateDifference() {
    var datetime1 = new Date(document.getElementById("datetime1").value);
    var datetime2 = new Date(document.getElementById("datetime2").value);

    var difference = datetime2 - datetime1;

    var milliseconds = parseInt((difference % 1000));
    var seconds = parseInt((difference / 1000) % 60);
    var minutes = parseInt((difference / (1000 * 60)) % 60);
    var hours = parseInt((difference / (1000 * 60 * 60)) % 24);
    var days = parseInt((difference / (1000 * 60 * 60 * 24)));

    document.getElementById("result").innerHTML = "Difference: " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds, " + milliseconds + " milliseconds";
}
