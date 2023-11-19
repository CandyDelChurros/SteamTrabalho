const removerItem = document.getElementsByClassName("a-remover")
for (var i = 0; i < removerItem.length; i++) {
  removerItem[i].addEventListener("click", function(event) {
    console.log(event.target)
  })
}