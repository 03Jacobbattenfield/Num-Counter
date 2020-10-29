
var count = 0;
var button = document.getElementById("b");
var display = document.getElementById("count-display");
function addnum(){
    count++;
}
button.onclick = function(){
    count++;
    display.innerHTML = count;
}

