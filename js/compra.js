
function pfinal() {
    let total = 0;
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'));
    cartItem.forEach(item => {
        total += item.price;
    });
    console.log(total);
    document.querySelector('.total').textContent = total;
}
pfinal();