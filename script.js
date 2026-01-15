let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cartCount").innerText = cart.length;

function addToCart(nome, preco) {
  cart.push({ nome, preco });
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cartCount").innerText = cart.length;
}

function scrollToProducts() {
  document.getElementById("produtos").scrollIntoView({
    behavior: "smooth"
  });
}
