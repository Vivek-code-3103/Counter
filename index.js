  
let countId = document.getElementById("count-el");
let saveId = document.getElementById("save-el");
let count =0 ;
function increment(){
    count+=1;
    countId.textContent = count;
 }

 function save(){
    let countStr = count + " - ";
    saveId.textContent += countStr;
    countId.textContent = 0;
    count=0;
 }
