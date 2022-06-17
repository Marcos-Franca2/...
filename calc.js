
var operador = ''
function insert(num) {
    var reg = /^\d*\.?\d*$/;
    var display = document.getElementById('result').innerHTML
    if (display.length == 0 && !reg.test(num)) {
        return;
    }
    if ((display.includes('+') || display.includes('-')) && !reg.test(num)) {
        if (!reg.test(display.slice(display.length - 1))) {
            return;
        }
        calc()
    }
    var number = document.getElementById("result").innerHTML;
    document.getElementById('result').innerHTML = number + num;
  }
function clean() {
    document.getElementById('result').innerHTML = "";
}

function calc() {
    var result = document.getElementById("result").innerHTML;
    if (result) {
        document.getElementById('result').innerHTML = eval(result);
    }
}
