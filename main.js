var current_number = '0';
var opt = '+';
var second_number = '';
var reset = 1;
var result;

function dis(val) {
    debugger;
    if (reset == 0) {
        document.getElementById("displayCalc").value = "";
        current_number = '0';
        opt = '+';
        second_number = '';
        reset = 1;
    }

    second_number += val;
    document.getElementById("displayCalc").value += val;

}

function dis1(val) {
    // debugger;
    if (reset == 0) {
        second_number = '';
        reset = 1;
    }

    if (opt == '+') {
        result = parseFloat(parseFloat(second_number) + parseFloat(current_number));

    } else if (opt == '-') {
        result = parseFloat(parseFloat(current_number) - parseFloat(second_number));
    }
    else if (opt == '/') {
        result = parseFloat(parseFloat(current_number) / parseFloat(second_number));
    }
    else if (opt == '*') {
        result = parseFloat(parseFloat(second_number) * parseFloat(current_number));
    }
    current_number = result;
    opt = val;
    second_number = '';
    if (opt == "=") {
        get = current_number;
        document.getElementById("displayCalc").value = get;
        reset = 0;

    }
    else {
        get = current_number + opt;
        document.getElementById("displayCalc").value = get;
    }

}

function clears() {
    // debugger;

    document.getElementById("displayCalc").value = " ";
    current_number = '0';
    opt = '+';
    second_number = '';

}

function del() {
    if (document.getElementById("displayCalc").value != 0) {
        d = document.getElementById("displayCalc").value;
        d1 = d.toString();
        d1 = d1.slice(0, -1);
        d1 = parseFloat(d1);
        document.getElementById("displayCalc").value = d1;

    } else if (document.getElementById("displayCalc").value == second_number) {

        second_number = second_number.slice(0, -1);
        second_number = parseFloat(second_number);
        document.getElementById("displayCalc").value = second_number;


    } else if (document.getElementById("displayCalc").value == get) {
        get = get.slice(0, -1);
        get=parseFloat(get);
        document.getElementById("displayCalc").value = get;
    }
    else {
        result1 = result.toString();
        result = result1.slice(0, -1);
        result = parseFloat(result);
        document.getElementById("displayCalc").value = result;

    }

}




