function hidden() {
    let element = document.getElementById("capital");
    let hidden = document.getAttribute("hidden");

    if (hidden) {
        element.removeAttribute("hidden");
    } else {
        element.setAttribute("hidden", "hidden");
    }
}

function show() {
    let x = document.getElementById("capital");
    let show = document.getAttribute("show");

    if (show) {
        x.removeAttribute("show")
    } else {
       x.setAttribute("show", "show"); 
    };
}

function toggle() {
    var b = document.getElementById("capitial");
    if(b.style.document === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none"
    };
}

function hoverOver() {
    var hover = document.getElementById("hover");
    var mouseOverFunction = function () {
        this.style.color = '#ffff000';
    };
    hover.onmouseover = mouseOverFunction;
}

var click_down = document.getElementById("click");

function changeColor(color) {
    document.body.style.background = color;
}

function clickHere() {
    changeColor('yellow');
    click_down.innerHTML = "Background Color Changed";
}