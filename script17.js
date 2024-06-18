let is24HourFormat = true; // Start with 24-hour format

  function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    if (!is24HourFormat) {
    
      let meridiem = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${meridiem}`;
    } else {
      // Display time in 24-hour format
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    }
  }
  
 
  function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    updateTime();
  }
  
  setInterval(updateTime, 1000);

  updateTime();


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
    fetchEvents();
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