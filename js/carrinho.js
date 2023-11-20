function cart() {
    let cartHTML = ''
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))

    cartItem.forEach(item => {
        cartHTML += `
        <div class="main2-1">
            <div class="jogo">
                <img src="${item.img}" alt="">
                <a href="">${item.name}</a>
            </div>
            <div class="preco">
                <i class="fa-brands fa-windows"></i>
                <span>${item.price}</span>
                <a class="a-remover">Remover</a>
            </div>
        </div>`;
    });

    document.querySelector('.main2').innerHTML = cartHTML + document.querySelector('.main2').innerHTML;
}
cart();

const removeItem = document.getElementsByClassName('a-remover')
for (var i = 0;i < removeItem.length; i++){
    let removeBtn = removeItem[i]
    removeBtn.addEventListener('click', () => {
        let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
        console.log(event.target.parentElement.parentElement.children[0].querySelector('a').textContent)
    cartItem.forEach(item => {
        if (item.name != event.target.parentElement.parentElement.children[0].querySelector('a').textContent){
            products.push(item)
        }
    })
    localStorage.setItem('prdInCart', JSON.stringify(products))
    window.location.reload()
    })
}

function pfinal() {
    let total = 0;
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'));
    cartItem.forEach(item => {
        total += item.price;
    });
    console.log(total);
    document.querySelector('.total-e-preco #totalCarrinho').textContent = total;
}
pfinal();


