function updateProduct(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let caseAmount = parseInt(caseInput.value);
    if (isIncreasing == true) {
        caseAmount = caseAmount + 1;
    }
    else if (caseAmount > 0) {
        caseAmount = caseAmount - 1;
    }
    caseInput.value = caseAmount;
    const productPrice = document.getElementById(product + '-total');
    const productQuantity = productPrice.innerText;
    const totalPrice = caseAmount * price;
    productPrice.innerText = totalPrice
    updateValue();
}
// calculation
function getCalculate(product) {
    const caseInput = document.getElementById(product + '-number');
    const productValue = parseInt(caseInput.value);
    return productValue;
}
function updateValue() {
    const casePrice = getCalculate('case') * 59;
    const phonePrice = getCalculate('phone') * 1219;
    const subTotal = casePrice + phonePrice;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    // console.log(total);

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
}
// case increase and decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProduct('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProduct('case', 59, false);
})
// phone increase and decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProduct('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProduct('phone', 1219, false);
})