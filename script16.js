setInterval(() => {
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if (hours > 12) {
         day_night = "PM";
        hours = hours - 12;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds +" "+ day_night;

},);

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
        // function updateEventsAtMidnight() {
        //     const now = new Date();
        //     const midnight = new Date();
        //     midnight.setHours(24, 0, 0, 0); 
            
        //     const timeUntilMidnight = midnight - now;
        //     setTimeout(function(){
        //         fetchEvents();
        //         updateEventsAtMidnight();
        //     }, timeUntilMidnight);
        // }
        // fetchEvents();
        // updateEventsAtMidnight();