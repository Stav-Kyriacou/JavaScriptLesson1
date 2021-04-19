function LightOn() {                                                                //change the src image
    document.getElementById("light").src = 'images/light_on.gif'
}

function LightOff() {                                                               //change the src image
    document.getElementById("light").src = 'images/light_off.gif'
}


var fontsizeClicked = true;

function ChangeFontSize() {                                                         //toggles the font size of the element
    if (fontsizeClicked) {
        document.getElementById("fontsize").style.fontSize = "32px";
        fontsizeClicked = false;
    }
    else {
        document.getElementById("fontsize").style.fontSize = "16px";
        fontsizeClicked = true;
    }
}

function HideElement() {                                                            //toggles the visibility of the element
    var element = document.getElementById("hide");

    if (element.style.display == "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function Sum(a, b) {                                                                //adds 2 numbers
    document.getElementById("test").innerHTML = "2 + 2 = " + (a + b);
}

function Calculate() {                                                              //calculator, takes 2 numbers and an operator
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var operator = document.getElementById("op").value;
    var answer = 0;

    switch (operator) {
        case "+":
                answer = num1 + num2;
            break;
        case "-":
                answer = num1 - num2;
            break;
        case "/":
                answer = num1 / num2;
            break;
        case "*":
                answer = num1 * num2;
            break;
        default:
            break;
    }

    document.getElementById("answer").innerHTML = "Answer: " + answer;
    console.log(answer);
}