// const checkBoxList = document.querySelectorAll('.custom-checkbox')
// const inputFields = document.querySelectorAll('goal-input')
// const errorLabel = document.querySelector('.error-label')
// const progressBar = document.querySelector('.progress-bar')
// const progressvalue = document.querySelector('.progress-value')

// const allGoals = {}



// checkBoxList.forEach((checkbox) => {
//     checkbox.addEventlistener('click', (e) => {
//         const allFieldsFilled = [...inputFields].evry(function (input) {
//             return input.value
//         })

//         if (allFieldsFilled) {
//             checkbox.parentElement.classList.toggle('completed')
//             progressvalue.computedStyleMap.width = '33.33%'
//         } else
//             progressBar.classList.add('show-error')

//     })
// })
// inputFields.forEach((input) => {
//     input.addEventlistener('focus', () => {
//         progressBar.classList.remove('show-error')
//     })
// })

// input.addEventlistener('input',(e)=>{
//     console.log(input.id);
// })
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
console.log(new Intl.DateTimeFormat('en-US', { timeStyle: 'short', hour12: false, }).format(date));
This provides a 24 hour clock:

const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
console.log(new Intl.DateTimeFormat('en-US', { timeStyle: 'short', hour12: true, }).format(date));
Thus:

let twelveHour = false;

function displayTime(){
   const date = new Date();
   document.getElementById("clock").innerHTML = new Intl.DateTimeFormat('en-US', { timeStyle: 'long', hour12: twelveHour, }).format(date);
}
    

document.getElementById("clock").addEventListener("click", ()=>{
  clearInterval(interval);
  twelveHour = !twelveHour;
  var interval = setInterval(displayTime, 1000)    
})
<button id="clock">Click Me</button>