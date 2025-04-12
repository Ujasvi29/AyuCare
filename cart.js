const cartItemsContainer = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");
const checkoutBtn = document.getElementById("checkoutBtn"); // Grab the Checkout button

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const price = parseInt(item.price.replace("₹", ""));
    total += price;

    cartItemsContainer.innerHTML += `
      <div class="flex justify-between items-center bg-white p-4 rounded shadow">
        <div>
          <h2 class="text-lg font-semibold">${item.name}</h2>
          <p class="text-yellow-700">${item.price}</p>
        </div>
        <button onclick="removeItem(${index})" class="text-red-500 font-semibold hover:underline">Remove</button>
      </div>
    `;
  });

  totalPriceElement.textContent = total;
}

// 🗑️ Remove item by index
function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// ✅ Checkout button functionality
checkoutBtn.addEventListener("click", function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("🛒 Your cart is empty!");
    return;
  }

  // Clear cart
  localStorage.removeItem("cart");

  // Confirm purchase
  alert("✅ Thank you for your purchase!");

  // Redirect to shop page
  window.location.href = "shop.html";
});

window.onload = loadCart;
