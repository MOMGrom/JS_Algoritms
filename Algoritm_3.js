function multiplyBigNum(a, b) {
    let strA = a.toString(10);
    let strB = b.toString(10);

    let arrT = [];


    for (let i = strB.length - 1; i >= 0; i--) {
        let c = 0;
        let w = '';

        w = w + '0'.repeat(strB.length - 1 - i);


        for (let j = strA.length - 1; j >= 0; j--) {
            const product = parseInt(strA[j]) * parseInt(strB[i]) + c;
            c = Math.floor(product / 10);
            w = (product % 10).toString() + w;
        }


        if (c > 0) {
            w = c.toString() + w;
        }


        arrT.push(w);
    }


    let W = '0';
    for (const w of arrT) {
        W = sumBigNum(W, w);
    }

    return W;
}

function sumBigNum(a, b) {
    let maxLength = 0;
    a = a.toString(10)
    b = b.toString(10)
    if (a.length > b.length) {
        maxLength = a.length;
    } else {
        maxLength = b.length;
    }
    while (a.length < maxLength) {
        a = '0' + a;
    }
    while (b.length < maxLength) {
        b = '0' + b;
    }
    let s = 0;
    let c = 0;
    let t = 0;
    let w = 0;
    let W = '';

    for (let i = maxLength - 1; i >= 0; i--) {
        t = (Math.floor(a[i]) + Math.floor(b[i]) + s);
        c = t % 10;
        w = c;
        W = w.toString() + W;
        s = Math.floor(t / 10);
    }
    W = Number(W);
    return W.toString();
}



console.log(multiplyBigNum(1000000000000000000, 3));
