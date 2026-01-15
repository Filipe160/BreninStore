const cartItemsDiv = document.getElementById("cartItems");
const totalDiv = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItemsDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <strong>${item.nome}</strong> - R$ ${item.preco.toFixed(2)}
      <button class="remove-btn" onclick="removeItem(${index})">Remover</button>
    `;

    cartItemsDiv.appendChild(div);
    total += item.preco;
  });

  totalDiv.innerText = `Total: R$ ${total.toFixed(2)}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function clearCart() {
  if (!confirm("Deseja limpar todo o carrinho?")) return;
  cart = [];
  localStorage.removeItem("cart");
  renderCart();
}

function finalizarCompra() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  let mensagem = "Olá, gostaria de finalizar a compra:%0A%0A";
  let total = 0;

  cart.forEach(item => {
    mensagem += `- ${item.nome} | R$ ${item.preco.toFixed(2)}%0A`;
    total += item.preco;
  });

  mensagem += `%0ATotal: R$ ${total.toFixed(2)}`;

  const telefone = "5531999999999"; // COLOQUE SEU NÚMERO
  window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
}

renderCart();
