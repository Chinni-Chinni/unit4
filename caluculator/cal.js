function clearScreen(){
document.querySelector("#result").value = "";
}
    
function display(key){
     document.querySelector("#result").value += key;

}

function calculate(){
var box_val = document.querySelector("#result").value;

var cal_value = eval(box_val);

document.querySelector("#result").value = cal_value;

}