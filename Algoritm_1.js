function sumBigNum(a, b, B) {
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
    return W.toString(B);
}

console.log(sumBigNum(100, 200, 10)); 
