

function fetchEvents() {
fetch('https://api.sampleapis.com/fakebank/accounts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON response
    })
    .then(data => {
        console.log(data); // Process the JSON data here
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
  