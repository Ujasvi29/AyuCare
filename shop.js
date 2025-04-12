const products = [
  { name: "Brahmi Powder", category: "herbs", img: "images/Brahmi.jpeg", price: "₹150" },
  { name: "Amla Powder", category: "herbs", img: "images/AmlaP.png", price: "₹120" },
  { name: "Neem Powder", category: "herbs", img: "images/NeemP.png", price: "₹130" },
  { name: "Tulsi Powder", category: "herbs", img: "images/TulsiP.png", price: "₹140" },
  { name: "Ginger Powder", category: "herbs", img: "images/GingerP.png", price: "₹160" },
  { name: "Turmeric Powder", category: "herbs", img: "images/TumericP.png", price: "₹110" },
  { name: "Ashwagandha Capsules", category: "herbs", img: "images/Ashwagandha.jpeg", price: "₹250" },
  { name: "Coconut Hair Oil", category: "oils", img: "images/Coconut.jpeg", price: "₹120" },
  { name: "Castor Oil", category: "oils", img: "images/CastorOil.png", price: "₹180" },
  { name: "Amla Candy", category: "food", img: "images/AmlaCandy.png", price: "₹90" },
  { name: "Chyawanprash", category: "food", img: "images/Chyawa.png", price: "₹280" },
  { name: "Tulsi Green Tea", category: "tea", img: "images/TulsiT.png", price: "₹130" },
  { name: "Ginger Herbal Tea", category: "tea", img: "images/GingerT.pNg", price: "₹110" }
];

  
  // 🛍️ Retrieve cart from localStorage or initialize empty
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  const productContainer = document.getElementById("productContainer");
  const categoryFilter = document.getElementById("categoryFilter");
  const searchInput = document.getElementById("searchInput");
  
  // 🖼️ Display products
  function displayProducts(filteredProducts) {
    productContainer.innerHTML = "";
    filteredProducts.forEach(product => {
      productContainer.innerHTML += `
        <div class="bg-white rounded shadow p-4 flex flex-col items-center text-center">
          <img src="${product.img}" alt="${product.name}" class="mb-2 w-32 h-32 object-cover">
          <h2 class="text-xl font-semibold">${product.name}</h2>
          <p class="text-yellow-700 mb-2">${product.price}</p>
          <button onclick="addToCart('${product.name}')" 
            class="bg-yellow-300 px-4 py-2 rounded hover:bg-yellow-400">Add to Cart</button>
        </div>
      `;
    });
  }
  
  // 🧃 Filter products by category and search
  function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const searchValue = searchInput.value.toLowerCase();
  
    const filtered = products.filter(product =>
      (selectedCategory === "all" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchValue)
    );
  
    displayProducts(filtered);
  }
  
  // 🔍 Triggered on input
  function searchProducts() {
    filterProducts();
  }
  
  // ➕ Add to cart with actual product
  function addToCart(productName) {
    const product = products.find(p => p.name === productName);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showCartMessage();
  }
  
  // 🎉 Temporary message when item is added
  function showCartMessage() {
    const cartMsg = document.getElementById("cartMessage");
    cartMsg.classList.remove("hidden");
    setTimeout(() => cartMsg.classList.add("hidden"), 1500);
  }
  
  // 🧮 Update cart icon count
  function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    if (cartCount) {
      cartCount.textContent = cart.length;
    }
  }
  
  // 🔁 On page load
  window.onload = () => {
    displayProducts(products);
    updateCartCount();
  };
  
  

  
