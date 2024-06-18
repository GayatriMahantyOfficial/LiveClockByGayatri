const hrs =document.getElementById("hrs")
const min =document.getElementById("min")
const sec =document.getElementById("sec")


if(hrs < 10){
    hrs ="0" + hrs;
}
if(min < 10){
    min ="0" + min;
}
if(sec < 10){
    sec ="0" + sec;
}

setInterval(()=>{
    const currentTime= new Date()
    hrs.innerHTML = currentTime.getHours()
    min.innerHTML = currentTime.getMinutes()
    sec.innerHTML = currentTime.getSeconds()
},1000)


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