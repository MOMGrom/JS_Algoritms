function divisionBigNum(a, b) {
    if (b == 0) {
        return console.log("Делить на 0 нельзя");
    }

    const strA = a.toString(10);

    let quotient = "";
    let remainder = 0;

    for (let i = 0; i < strA.length; i++) {
        let currentNum = parseInt(strA[i]) + remainder * 10;
        let q = Math.floor(currentNum / b);
        remainder = currentNum % b;
        quotient = quotient + q;
    }

    quotient = quotient.replace(/^0+/, "");

    if (quotient === "") {
        quotient = "0";
    }



    return { quotient: parseInt(quotient), remainder };
}

console.log(divisionBigNum(181, 21))
console.log(divisionBigNum(121, 11))