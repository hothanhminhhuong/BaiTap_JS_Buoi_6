// Bài 1
document.getElementById("calc1").onclick = function () {
    let result1El = document.getElementById("result1");
    let sumA = 1;
    let i = 1;
    while (true) {
        if (sumA + i > 10000) {
            break;
        }
        sumA += i;
        i++;
    }
    result1El.innerHTML = i;
}

//Bài 2
document.getElementById("calc2").onclick = function () {
    let no1 = +document.getElementById("no1").value;
    let no2 = +document.getElementById("no2").value;
    const result2El = document.getElementById("result2");
    let sum = 0;
    for (k = 1; k <= no2; k++) {
        sum += Math.pow(no1, k);
    }
    result2El.innerHTML = `${sum}`;
}

// Bài 3
document.getElementById("calc3").onclick = function () {
    const no3 = +document.getElementById("no3").value;
    const result3El = document.getElementById("result3");
    if (no3 <= 0) {
        result3El.innerHTML = `Nhập số lớn hơn 0`;
    }
    let total = 1;
    let l = 1;
    while (l <= no3) {
        if (no3 >= 1) {
            total *= l;
            l++;
        }
        result3El.innerHTML = `${total}`;
    }
}

document.getElementById("calc4").onclick = function () {
    const tbodyEl = document.getElementById("result4");
    for (u=1; u<=10; u++){
        if(u%2 !== 0){ // Ktr div lẻ và tô màu
            tbodyEl.innerHTML +=`<div style ="background-color: blue; color: white">Div Lẻ</div>`;
        }
        if(u%2 == 0){ // Ktr div chẵn và tô màu
            tbodyEl.innerHTML +=`<div style ="background-color: red; color: white">Div Chẵn</div>`;
        }
    }
}