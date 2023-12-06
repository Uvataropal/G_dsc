let button_text = document.querySelector(".text")
let button_1 = document.querySelector(".js-button-1")
let button_2 = document.querySelector(".js-button-2")
let button_3 = document.querySelector(".js-button-3")
let button_4 = document.querySelector(".js-button-4")
let button_5 = document.querySelector(".js-button-5")
let button_6 = document.querySelector(".js-button-6")
let button_7 = document.querySelector(".js-button-7")
let button_8 = document.querySelector(".js-button-8")
let button_9 = document.querySelector(".js-button-9")
let button_0 = document.querySelector(".js-button-zero")
let button_add = document.querySelector(".js-button-plus")
let button_sub = document.querySelector(".js-button-minus")
let button_mul = document.querySelector(".js-button-multiply")
let button_div = document.querySelector(".js-button-divide")
let button_clear = document.querySelector(".js-button-clear")
let button_equal = document.querySelector(".js-button-equal")
let button_del = document.querySelector(".js-button-backSpace")
let button_dot = document.querySelector(".js-button-dot")

let calculation = []
function display() {
  button_text.value = calculation.join("")
}
function addToCalculation(value) {
  calculation.push(value);
  display()
}
function clearDisplay() {
  calculation = []
  display()
}
function calculate() {
  calculation.push(eval(button_text.value))
  calculation = []
  display()
}
function back() {
  calculation.pop()
  display()
}




