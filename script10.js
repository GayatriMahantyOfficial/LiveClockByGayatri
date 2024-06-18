function getDateTime() {
    var datetime = document.getElementById('datetime-picker').value;
    document.getElementById('result').innerHTML = "Selected Date and Time: " + datetime;
  }