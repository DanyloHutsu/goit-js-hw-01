function getElementWidth(content, padding, border) {
    let x = content;
    x = Number.parseInt(x);
    let y = padding;
    y = Number.parseInt(y);
    let z = border;
    z = Number.parseFloat(z);
    let Npx = x + y + y + z + z;
    console.log(Npx)
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
