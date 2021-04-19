function ChangeText() {
    document.getElementById("demo").innerHTML = "Changed Text";
}

function LightOn() {
    document.getElementById("light").src = 'images/light_on.gif'
}

function LightOff() {
    document.getElementById("light").src = 'images/light_off.gif'
}

var fontsizeClicked = true;

function ChangeFontSize() {
    if (fontsizeClicked) {
        document.getElementById("fontsize").style.fontSize = "32px";
        fontsizeClicked = false;
    }
    else {
        document.getElementById("fontsize").style.fontSize = "16px";
        fontsizeClicked = true;
    }
}

function HideElement() {
    var element = document.getElementById("hide");

    if (element.style.display == "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function Sum(a, b) {
    document.getElementById("test").innerHTML = "2 + 2 = " + (a + b);
}