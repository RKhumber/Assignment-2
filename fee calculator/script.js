function display(value) {
    document.getElementById("total").value += value;
    document.getElementById("withTax").value += value;

    var p = document.getElementById("total").value;
    var q = eval(p);
    document.getElementById("total").value = q;

    var a = document.getElementById("withTax").value;
    var b = eval(a);
    document.getElementById("withTax").value = b;
}