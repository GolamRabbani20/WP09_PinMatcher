
const pinGenerator = document.getElementById('pinGenerator')
const getPinInput = document.getElementById('getPin');

pinGenerator.onclick = () => {
    let randomNumber = String(Math.floor(Math.random()*1000000))
    getPinInput.value = String(randomNumber.length === 5 && `${randomNumber}${Math.floor(Math.random() * 10)}` || randomNumber)
}

document.getElementById('zero').addEventListener('click', function() {
    calculate(document.getElementById('zero').innerText)
})

document.getElementById('one').addEventListener('click', function() {
    calculate(document.getElementById('one').innerText)
})

document.getElementById('two').addEventListener('click', function() {
    calculate(document.getElementById('two').innerText)
})

document.getElementById('three').addEventListener('click', function() {
    calculate(document.getElementById('three').innerText)
})

document.getElementById('four').addEventListener('click', function() {
    calculate(document.getElementById('four').innerText)
})

document.getElementById('five').addEventListener('click', function() {
    calculate(document.getElementById('five').innerText)
})

document.getElementById('six').addEventListener('click', function() {
    calculate(document.getElementById('six').innerText)
})

document.getElementById('seven').addEventListener('click', function() {
    calculate(document.getElementById('seven').innerText)
})

document.getElementById('eight').addEventListener('click', function() {
    calculate(document.getElementById('eight').innerText)
})
document.getElementById('nine').addEventListener('click', function() {
    calculate(document.getElementById('nine').innerText)
})

document.getElementById('clean').addEventListener('click', function(){
    Display.value = ""
})

document.getElementById('arro').addEventListener('click', function(){
    if (Display.value.length>1){
        Display.value = String(Math.floor(Number(Display.value)/10))
    }
    else{
        Display.value = ""
    }
})

const Display = document.getElementById('display')
function calculate(Btn_value){
    Display.value += Btn_value 
}

var k = 3
document.getElementById('submit').addEventListener('click', function(){
    if (k>=1 && getPinInput.value == Display.value){ 
        document.getElementById('match').style.display = 'block'
        document.getElementById('notMatch').style.display = 'none'
        document.getElementById('tryLeft').style.display = 'none'
    }   
        
    else if(k>1 && getPinInput.value != Display.value){
        document.getElementById('notMatch').style.display = 'block'
        document.getElementById('match').style.display = 'none'
        document.getElementById('tryLeft').innerText =  k-1 + ' try left'
        k--
    }          
    else{
        document.getElementById('tryLeft').innerText = 'Sorry!!! No more try left.'
        //document.getElementById('wholeSection').style.display = 'none'
        document.getElementById('tryLeft').style.fontWeight = 'bold'
        document.getElementById('tryLeft').style.color = 'tomato'
        document.getElementById('tryLeft').style.fontSize = '25px'
    }  
})
