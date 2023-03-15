const colorDiv=document.querySelector('.colorChangingDiv');
const button0 = document.querySelector(".button");
const button1 = document.querySelector(".plussButton");
const button2 = document.querySelector(".minusButton");
const button3 = document.querySelector(".clearNumButton");
const button4 = document.querySelector(".clearColorButton");
const button5 = document.querySelector(".clearButton");
const button6 = document.querySelector(".submitButton");
let clickNumber = 0;
let red = document.getElementById("Red").value;
let green = document.getElementById("Green").value;
let blue = document.getElementById("Blue").value;
let color = 'rgb(' + red + ',' + green + ',' + blue + ')';

// let inputR = document.querySelector("#rgbR").value;
// let inputG = document.querySelector("#rgbG").value;
// let inputB = document.querySelector("#rgbB").value;

function magic_color_changer(){
    let red = document.getElementById("Red").value;
    let green = document.getElementById("Green").value;
    let blue = document.getElementById("Blue").value;
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    colorDiv.style.backgroundColor = color;
    // document.getElementById("rgbR").value=red;
    // document.getElementById("rgbG").value=green;
    // document.getElementById("rgbB").value=blue;
    document.getElementById("colorIs").innerText=color;
    if(red == 0 && blue == 0 && green == 0){
        document.getElementById("colorIs").innerText=`Black ${color}`;
    }else if(red == 255 && blue == 255 && green == 255){
        document.getElementById("colorIs").innerText = `White ${color}`;
    }else if(red == 255 && blue == 0 && green == 0){
        document.getElementById("colorIs").innerText = `Red ${color}`;
    }else if(red == 0 && blue == 255 && green == 0){
        document.getElementById("colorIs").innerText = `Blue ${color}`;
    }else if(red == 0 && blue == 0 && green == 255){
        document.getElementById("colorIs").innerText = `Green ${color}`;
    }
    console.log(red, green, blue)
}

function numPluss(){
    clickNumber ++
    document.getElementById("count").innerText=clickNumber;
    console.log(clickNumber)
}
function numMinus(){
    clickNumber --
    document.getElementById("count").innerText=clickNumber;
    console.log(clickNumber)
}
function numClear(){
    clickNumber = 0
    document.getElementById("count").innerText=clickNumber;
    console.log(clickNumber)
}
function colorClear(){
    colorDiv.style.backgroundColor = color;
    document.getElementById("Red").value = 0;
    document.getElementById("Green").value = 0;
    document.getElementById("Blue").value = 0;
    console.log(red, green, blue)
    document.getElementById("colorIs").innerText = "white"
}
function allClear(){
    colorClear()
    numClear()
    console.log(red, green, blue, clickNumber);
}

document.getElementById("Red").addEventListener("input",  magic_color_changer);
document.getElementById("Green").addEventListener("input", magic_color_changer);
document.getElementById("Blue").addEventListener("input", magic_color_changer);

button1.addEventListener("click", (e) => {
    numPluss()
})
button2.addEventListener("click", (e) => {
    numMinus()
})
button3.addEventListener("click", (e) => {
    numClear()
})
button4.addEventListener("click", (e) => {
    colorClear()
})
button5.addEventListener("click", (e) => {
    allClear()
})
button6.addEventListener("click", (e) => {

})


