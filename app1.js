function undateProduct(product, price, isIncreasing) {
    const productNumber = document.getElementById(product + '-number');
    let productConvert = productNumber.value;
    if (isIncreasing == true) {
        productConvert = parseInt(productConvert) + 1;
    }
    else if (productConvert > 0) {
        productConvert = parseInt(productConvert) - 1;
    }
    productNumber.value = productConvert;
    const productQuantity = document.getElementById(product + '-total');
    productQuantity.innerText = productConvert * price;
    calculateTotal();
}
function totalProductPrice(product) {
    const productNumber = document.getElementById(product + '-number');
    const productInput = parseInt(productNumber.value);
    return productInput;
}
function calculateTotal() {
    const caseTotal = totalProductPrice('case') * 59;
    const phoneTotal = totalProductPrice('phone') * 1219;
    const subTotal = caseTotal + phoneTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

    // document.getElementById('sub-total').innerText = subTotal;
    // document.getElementById('tax-amount').innerText = tax;
    // document.getElementById('total-price').innerText = totalPrice;
}
//case
document.getElementById('case-plus').addEventListener('click', function () {
    undateProduct('case', 59, true);


})

document.getElementById('case-minus').addEventListener('click', function () {
    undateProduct('case', 59, false);
})
//phone
document.getElementById('phone-plus').addEventListener('click', function () {
    undateProduct('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    undateProduct('phone', 1219, false);

})