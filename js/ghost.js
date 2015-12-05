$(document).ready(function() {
     $(".ghost-button").mouseover(function () {
           $(".ghost-button").text("For More");
         });
        
     $(".ghost-button").mouseout(function () {
           $(".ghost-button").text("Click Here");
         });
});