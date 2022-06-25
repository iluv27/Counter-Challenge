var Decrease = document.querySelector(".items").firstElementChild;

var Increase = document.querySelector(".items").lastElementChild;

var textSpan = document.querySelector("span")

var reset = document.querySelector(".reset")

var number = 0;

if (number === 0) {
    textSpan.style.color = "black";
}

if (Increase) {
    Increase.addEventListener("click", function () {
        number = number + 1
        // document.querySelector("span").style.color = "green"
        textSpan.textContent = number;
        if (number > 0) {
            textSpan.style.color = "green";
        }
    })
}

if (Decrease) {
    Decrease.addEventListener("click", function () {
        number = number - 1
        textSpan.textContent = number;
        if (number < 0) {
            textSpan.style.color = "red";
        }
    })
}

if (reset) {
    reset.addEventListener("click", function () {
        number = 0
        textSpan.textContent = number;
        if (number === 0) {
            textSpan.style.color = "black";
        }
    })
}
