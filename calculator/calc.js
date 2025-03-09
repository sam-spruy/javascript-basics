function calc(op) {
    let a = parseFloat(document.getElementById("first_num").value);
    let b = parseFloat(document.getElementById("second_num").value);
    let r;

    if(op == '+') r = a + b;
    if(op == '-') r = a - b;
    if(op == '*') r = a * b;
    if(op == '/') r = a / b;

    document.getElementById("result").value = r;
}