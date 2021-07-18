var calc;
calc = function (numOne, numTwo, operation) {
    if (operation === "add") {
        return numOne + numTwo;
    }
    else
        return 0;
};
console.log(calc(5, 5, "add"));
