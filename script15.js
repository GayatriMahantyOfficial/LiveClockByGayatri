// setInterval(() => {
//     const time = document.querySelector("#time");
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let day_night = "AM";
//     if (hours > 12) {
//          day_night = "PM";
//         hours = hours - 12;
//     }
//     if (hours < 10) {
//         hours = "0" + hours;
//     }
//     if (minutes < 10) {
//         minutes = "0" + minutes;
//     }
//     if (seconds < 10) {
//         seconds = "0" + seconds;
//     }
//     time.textContent = hours + ":" + minutes + ":" + seconds +" "+ day_night;

// },);



let is24HourFormat = true; // Start with 24-hour format

  function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    if (!is24HourFormat) {
      // Convert to 12-hour format
      let meridiem = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // Handle midnight (0 hours)
      document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${meridiem}`;
    } else {
      // Display time in 24-hour format
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    }
  }
  
  // Toggle between 24-hour and 12-hour formats
  function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    updateTime(); // Update time immediately after toggling format
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Initial call to display time
  updateTime();


function calculateDays() {
    var d1 = document.getElementById("d1").value;
    var d2 = document.getElementById("d2").value;
    const dateOne = new Date(d1);
    const dateTow = new Date(d2);
    const time = Math.abs(dateTow - dateOne);
    const days = Math.ceil(time / (1000 * 60 * 60 * 24));
    document.getElementById("output").innerHTML = days;
}
function fetchEvents() {
fetch('https://api.sampleapis.com/fakebank/accounts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(data => {
        console.log(data); 
       data.forEach(user =>{
        let markup =`<li>transactionDate:${user.transactionDate},description:${user.description},category:${user.category},debit:${user.debit},credit:${user.credit}</li>`

        document.querySelector('ul').insertAdjacentHTML('beforeend',markup)
       })

    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    })
}
    
    function updateEventsAtMidnight() {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0); 
        
        const timeUntilMidnight = midnight - now;
        setTimeout(function(){
            fetchEvents();
            updateEventsAtMidnight();
        }, timeUntilMidnight);
    }
    fetchEvents();
    updateEventsAtMidnight();

