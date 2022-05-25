//var cash = document.getElementById("uca").value;
// var dp = document.getElementById("dp").value;
// var cc = document.getElementById("cc").value;
// var ir = document.getElementById("ir").value;
// var lt = document.getElementById("lt").value;

function check() {
    document.getElementById("icc").checked = true;
}

function check2() {
    document.getElementById("icc2").checked = true;
}

function check3() {
    document.getElementById("icc3").checked = true;
}

function calculate() {
    // document.getElementById("icc").checked = false;
    var cash = parseFloat(document.getElementById("uca").value);
    var dp = parseFloat(document.getElementById("dp").value);
    var cc = parseFloat(document.getElementById("cc").value);
    var ir = parseFloat(document.getElementById("ir").value);
    var lt = parseFloat(document.getElementById("lt").value);
    var hp = document.getElementById("hp");
    // var home_price = cash;
    var home_price = cash + (cash * Math.pow((1 + ir), (lt))) / (Math.pow((1 + ir), (lt - 1)));
    hp.innerHTML = home_price;
    var dp1 = document.getElementById("downpayment");
    dp1.innerHTML = home_price * dp / 100;
    var cc1 = document.getElementById("closingcosts");
    if (document.getElementById("icc").checked == true) {
        cc1.innerHTML = home_price * cc / 100;
    }
    var loan = document.getElementById("loanamount");
    loan.innerHTML = home_price * ir * lt / 100;
    var pay = document.getElementById("monthlypayment");
    pay.innerHTML = (home_price * ir * lt / 100) / 12;
}

function calculate2() {
    var cash = parseFloat(document.getElementById("homeprice").value);
    var dp = parseFloat(document.getElementById("dp2").value);
    var cc = parseFloat(document.getElementById("cc2").value);
    var ir = parseFloat(document.getElementById("ir2").value);
    var lt = parseFloat(document.getElementById("lt2").value);
    var hp = document.getElementById("hp2");
    // var home_price = cash;
    var home_price = cash - (cash * Math.pow((1 + ir), (lt))) / (Math.pow((1 + ir), (lt - 1)));
    hp.innerHTML = home_price;
    var dp1 = document.getElementById("downpayment2");
    dp1.innerHTML = home_price * dp / 100;
    var cc1 = document.getElementById("closingcosts2");
    if (document.getElementById("icc2").checked == true) {
        cc1.innerHTML = home_price * cc / 100;
    }
    var loan = document.getElementById("loanamount2");
    loan.innerHTML = home_price * ir * lt / 100;
    var pay = document.getElementById("monthlypayment2");
    pay.innerHTML = (home_price * ir * lt / 100) / 12;
}

function calculate3() {
    var cash = parseFloat(document.getElementById("homeprice3").value);
    var dp = parseFloat(document.getElementById("uca3").value);
    var cc = parseFloat(document.getElementById("cc3").value);
    var ir = parseFloat(document.getElementById("ir3").value);
    var lt = parseFloat(document.getElementById("lt3").value);
    // var hp = document.getElementById("hp2");
    // var home_price = cash;
    var home_price = cash - dp + (cash * Math.pow((1 + ir), (lt))) / (Math.pow((1 + ir), (lt - 1)));
    // hp.innerHTML = home_price;
    var dp1 = document.getElementById("downpayment3");
    dp1.innerHTML = home_price / 100;
    var cc1 = document.getElementById("closingcosts3");
    if (document.getElementById("icc3").checked == true) {
        cc1.innerHTML = home_price * cc / 100;
    }
    var loan = document.getElementById("loanamount3");
    loan.innerHTML = home_price * ir * lt / 100;
    var pay = document.getElementById("monthlypayment3");
    pay.innerHTML = (home_price * ir * lt / 100) / 12;
}