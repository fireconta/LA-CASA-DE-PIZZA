const cartoes = JSON.parse(localStorage.getItem('cartoes')) || [];

function salvarCartoes() {
  localStorage.setItem('cartoes', JSON.stringify(cartoes));
}

if (!localStorage.getItem('cartoes')) {
  salvarCartoes();
}