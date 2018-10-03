document.addEventListener("DOMContentLoaded", function () {
    for (var i = 0; i < 3080; i++) {
        var boxes = document.createElement("main")
        var container = document.querySelector(".pixBox")
        container.appendChild(boxes)
        boxes.setAttribute("class", "box")
    }
    var button = document.getElementById("newBttn")

    button.addEventListener("click", Button)
    function Button() {
        alert("You Don't Get More Colorz!")
    }
    var box1 = document.querySelector(".box1")
    var box2 = document.querySelector(".box2")
    var box3 = document.querySelector(".box3")
    var box4 = document.querySelector(".box4")
    var box5 = document.querySelector(".box5")
    var box6 = document.querySelector(".box6")
    var box7 = document.querySelector(".box7")
    var currCol1 = document.querySelector(".currCol1")
    var allFill = document.querySelector(".allFill")
    var box = document.querySelectorAll(".box")

    box1.addEventListener("click", blue)
    function blue() {
        document.querySelector(".currCol1").style.backgroundColor = "blue"
    }
    box2.addEventListener("click", red)
    function red() {
        document.querySelector(".currCol1").style.backgroundColor = "red"
    }
    box3.addEventListener("click", green)
    function green() {
        document.querySelector(".currCol1").style.backgroundColor = "green"
    }
    box4.addEventListener("click", yellow)
    function yellow() {
        document.querySelector(".currCol1").style.backgroundColor = "yellow"
    }
    box5.addEventListener("click", orange)
    function orange() {
        document.querySelector(".currCol1").style.backgroundColor = "orange"
    }
    box6.addEventListener("click", purple)
    function purple() {
        document.querySelector(".currCol1").style.backgroundColor = "purple"
    }
    box7.addEventListener("click", black)
    function black() {
        document.querySelector(".currCol1").style.backgroundColor = "black"
    }

    allFill.addEventListener("click", fillAll)
    function fillAll() {
        for (var i = 0; i < container.children.length; i++) {
            var brush = document.querySelector(".currCol1").style.backgroundColor
            container.children[i].style.backgroundColor = brush
        }
    }
    container.addEventListener("click", fillBox)
    function fillBox() {
        for (var i = 0; i < container.children.length; i++) {
            event.target.style.backgroundColor = document.querySelector(".currCol1").style.backgroundColor
        }
    }
});

// if a button is pressed change the color of the current color. 
//Run all code through the current color box.
//fill color takes current color box and adds it to all boxes. 