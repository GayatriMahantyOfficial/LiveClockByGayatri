// function calculateDiffence(){
//     var selectedDateTime = new Date(document.getElementById("datetime-picker").value);
//     var currentDateTime = new Date();
//      var timedifference = selectedDateTime.getTime()- currentDateTime.getTime();
//      var minutesDifference = Math,floor(timedifference / (1000 * 60));
//      var timedifferenceDisplay;
//      if(minutesDifference >= 0){
//         timedifferenceDisplay ="Selected time is "+ minutesDifference + "minutes ahead of current time.";
//      } else {
//         timedifferenceDisplay ="Selected time is "+ Math.abs(minutesDifference) + "minutes behind current time.";
//      }

//      document.getElementById("time-difference").innerHTML = timedifferenceDisplay;


//     //  Displaying Important EventSource(Dummy Data)
//     var events = [
//         {time:"09:00 AM",event:"Meeting with Client"}
//         {time:"12:30 AM",event:"Lunch with Client"}
//         {time:"03:00 AM",event:"project Deadline"}
//     ];
//     var eventsList = document.getElementById("events-list");
//     events.forEach(function(event){
//         var li=document.createElement("li");
//         li.textContent = event.time + "-" + event.event;
//         eventsList.appendChild(li)
//     });
// }