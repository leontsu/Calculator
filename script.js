const display = document.getElementById("out");

function displayChange(input) {
    if (display.value == 'Error') {
        clearDisplay();
    }
    
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculateValue() {
    try{
        let result = display.value.replace(/x/g, '*').replace(/÷/g, '/');
        console.log(result); 

        display.value = eval(result);
    }
    catch(error) {
        display.value = 'Error';
    }
}