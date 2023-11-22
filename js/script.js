const btn = document.getElementsByClassName("preco-e-botao")
const products = []

for(var i = 0; i < btn.length; i++){
    let cartBtn = btn[i]
    cartBtn.addEventListener("click", () => {
        let product = {
          img: event.target.parentElement.parentElement.parentElement.querySelector('.trailer-e-descricao .descricao img').getAttribute('src'),
          name: event.target.parentElement.parentElement.children[0].querySelector('h3').innerHTML,
          price: parseFloat(event.target.parentElement.parentElement.children[1].querySelector('h3').textContent.replace('R$', '').replace(',', '.')),        
          totalPrice: 0,
          quantity: 1
        }
        addItemTolocal(product)
    })
}

function addItemTolocal(product){
  let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
  if(cartItem === null){
    products.push(product)
    localStorage.setItem('prdInCart', JSON.stringify(products))
  } else {
    cartItem.forEach(item => {
      if(product.name == item.name){
          product.quantity = item.quantity += 1
          product.totalPrice = item.price * item.quantity
      }else {
        products.push(item)
      }
    });
    products.push(product)

  }
localStorage.setItem('prdInCart', JSON.stringify(products))
window.location.reload()
}

function cartNumber(){
  let cartNumbers = 0;
  let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
  cartItem.forEach(item => {
    cartNumbers = item.quantity += cartNumbers;
  });
  console.log(cartNumbers);
  document.querySelector('.carrinho span').textContent = cartNumbers
}
cartNumber()