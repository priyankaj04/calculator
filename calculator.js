const display1El = document.querySelector(".display1");
const display2El = document.querySelector(".display2");
const tempResultEl = document.querySelector(".temp-display");
const numbersEl = document.querySelectorAll(".numb");
const operationEl = document.querySelectorAll(".opt");
const equalEl = document.querySelector(".eql");
const clearAllEl = document.querySelector(".allclr");
const clearLastEl = document.querySelector(".lastelclr");
let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbersEl.forEach((numb) => {
        numb.addEventListener("click", (e) => {
                if (e.target.innerText === "." && !haveDot) {
                        haveDot = true;
                } else if (e.target.innerText === "." && haveDot) {
                        return;
                }
                dis2Num += e.target.innerText;
                display2El.innerText = dis2Num;
                // console.log();
        });
});

operationEl.forEach((opt) => {
        opt.addEventListener("click", (e) => {
                if (!dis2Num) return;
                haveDot = false;
                const operationName = e.target.innerText;
                if (dis1Num && dis2Num && lastOperation) {
                        mathOperation();
                } else {
                        result = parseFloat(dis2Num);
                }
                clearVar(operationName);
                lastOperation = operationName;
        });
});
function clearVar(name = "") {
        dis1Num += dis2Num + " " + name + " ";
        display1El.innerText = dis1Num;
        display2El.innerText = "";
        dis2Num = "";
        tempResultEl.innerText = result;
}

function mathOperation() {
        if (lastOperation === "*") {
                result = parseFloat(result) * parseFloat(dis2Num);
        } else if (lastOperation === "+") {
                result = parseFloat(result) + parseFloat(dis2Num);
        } else if (lastOperation === "-") {
                result = parseFloat(result) - parseFloat(dis2Num);
        } else if (lastOperation === "/") {
                result = parseFloat(result) / parseFloat(dis2Num);
        } else if (lastOperation === "%") {
                result = parseFloat(result) % parseFloat(dis2Num);
        }
}
// operation();

equalEl.addEventListener("click", () => {
        if (!dis2Num || !dis1Num) return;
        haveDot = false;
        mathOperation();
        clearVar();
        display2El.innerText = "=" + result;
        tempResultEl.innerText = "";
        dis2Num =  result;
        dis1Num = "";
});

clearAllEl.addEventListener("click", () => {
        dis1Num = "";
        dis2Num = "";
        display1El.innerText = "0";
        display2El.innerText = "0";
        result = "";
        tempResultEl.innerText = "0";
});

clearLastEl.addEventListener("click", () => {
        display2El.innerText = "0";
        dis2Num = "0";
});

window.addEventListener("keydown", (e) => {
        if (
                e.key === "0" ||
                e.key === "1" ||
                e.key === "2" ||
                e.key === "3" ||
                e.key === "4" ||
                e.key === "5" ||
                e.key === "6" ||
                e.key === "7" ||
                e.key === "8" ||
                e.key === "9" ||
                e.key === "."
        ) {
                clickButtonEl(e.key);
                // console.log(e.key)
        } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
                clickOperation(e.key);
        } else if (e.key === "*") {
                clickOperation("*");
                // console.log(e.key)
        } else if (e.key == "Enter" || e.key === "=") {
                clickEqual();
        }
        // console.log(e.key)
});
function clickButtonEl(key) {
        numbersEl.forEach((button) => {
                if (button.innerText === key) {
                        button.click();
                }
        });
}
function clickOperation(key) {
        operationEl.forEach((operation) => {
                if (operation.innerText === key) {
                        operation.click();
                }
        });
}
function clickEqual() {
        equalEl.click();
}
