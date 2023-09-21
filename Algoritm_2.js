function subtractBigNum(a, b, B) {

    let strA = a.toString(10);
    let strB = b.toString(10);


    let maxLength = 0;
    if (strA.length > strB.length) {
        maxLength = strA.length;
    } else if (strA.length < strB.length) {
        maxLength = strB.length;
    }

    strA = strA.padStart(maxLength, "0")
    strB = strB.padStart(maxLength, "0")

    let w = '';
    let borrow = 0;

    for (let i = maxLength - 1; i >= 0; i--) {
        let numA = Number(strA[i]);
        let numB = Number(strB[i]);

        let t = numA - numB - borrow;
        if (t < 0) {
            t = t + 10;
            borrow = 1;
        } else {
            borrow = 0;
        }

        w = t.toString() + w;
    }



    w = w.replace(/^0+/, '');
    w = parseInt(w)

    return w.toString(B) || "0"; 
}

console.log(subtractBigNum(0xC8, 0x21, 16));

