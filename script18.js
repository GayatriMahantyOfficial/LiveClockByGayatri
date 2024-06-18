

// fetch('https://api.sampleapis.com/fakebank/accounts')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json(); // Parse JSON response
//     })
//     .then(data => {
//         console.log(data); // Process the JSON data here
//        data.forEach(user =>{
//         let markup =`<li>transactionDate:${user.transactionDate},description:${user.description},category:${user.category},debit:${user.debit},credit:${user.credit}</li>`

//         document.querySelector('ul').insertAdjacentHTML('beforeend',markup)
//        })

//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     })



//     let events = []; // Global variable to store fetched events
// let currentEventIndex = 0; // Global variable to track the current event index

function fetchEvents() {
    fetch('https://api.sampleapis.com/fakebank/accounts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON response
        })
        .then(data => {
            console.log(data); // For debugging
            events = data.map(user => ({
                transactionDate: user.transactionDate,
                description: user.description,
                category: user.category,
                debit: user.debit,
                credit: user.credit
            }));
            // Display the initial event
            displayEvent(currentEventIndex);
            // Schedule update for the next event after midnight
            scheduleNextEventUpdate();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        })
}
function displayEvent(index) {
    const event = events[index];
    if (event) {
        const markup = `<li>Transaction Date: ${event.transactionDate}, Description: ${event.description}, Category: ${event.category}, Debit: ${event.debit}, Credit: ${event.credit}</li>`;
        document.querySelector('ul').innerHTML = markup;
    }
}
function scheduleNextEventUpdate() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0); // Set to midnight of the next day

    const timeUntilMidnight = tomorrow - now;
    setTimeout(updateEventAfterMidnight, timeUntilMidnight);
}


function updateEventAfterMidnight() {
    currentEventIndex = (currentEventIndex + 1) % events.length;
    displayEvent(currentEventIndex);
    scheduleNextEventUpdate();
}


  
   

   
        

