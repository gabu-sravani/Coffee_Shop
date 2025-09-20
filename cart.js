// script.js
let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

function removeFromCart(item) {
  const index = cart.findIndex(entry => entry.item === item);
  if (index !== -1) {
    cart.splice(index, 1);
    updateCart();
  }
}

function updateCart() {
  const cartList = document.getElementById('cart-list');
  const totalElement = document.getElementById('total');

  cartList.innerHTML = '';
  total = 0;

  cart.forEach((entry, i) => {
    const li = document.createElement('li');
    li.innerHTML = `${entry.item} - Rs.${entry.price} <button class="remove-btn" onclick="removeFromCart('${entry.item}')">Remove</button>`;
    cartList.appendChild(li);
    total += entry.price;
  });

  totalElement.textContent = `Total: Rs.${total}`;

  // Show Buy button if cart has items
  const buyBtn = document.getElementById('buy-btn');
  buyBtn.style.display = cart.length > 0 ? 'inline-block' : 'none';
}

function buyItems() {
  if (cart.length === 0) return alert('Your cart is empty.');
  alert(`Thank you for your purchase! Total: Rs.${total}`);
  cart = [];
  updateCart();
}
