let display = document.getElementById("display");

function show(input) {
    if (display.value === "error" ) {
        display.value = input;
    } if (isNaN(Number(display.value.charAt(display.value.length - 1))) && isNaN(Number(input))) {
        return;
    } else {
        display.value += input;
    };
};

function equal() {
    try {
        if (display.value != "") {
             display.value = eval(display.value);
        }
    } catch (error) {
        display.value = "error"
    };
};

function remove() {
    if (display.value === "error") {
        clearDisplay()
    } else {
        display.value =  display.value.substring(0, display.value.length - 1);
    }

};

function clearDisplay() {
    display.value = "";
};


