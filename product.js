// product.js

// Authentication form toggles
function showLoginForm() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  }
  
  function showSignupForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
  }
  
  function login() {
    const user = document.getElementById('login-username').value;
    const pass = document.getElementById('login-password').value;
    // Placeholder: you can integrate real auth here
    alert(`Logged in as ${user}`);
    document.getElementById('login-form').style.display = 'none';
  }
  
  function signup() {
    const user = document.getElementById('signup-username').value;
    const pass = document.getElementById('signup-password').value;
    // Placeholder: you can integrate real signup here
    alert(`Account created for ${user}`);
    document.getElementById('signup-form').style.display = 'none';
  }
  
  // Dark mode toggle
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  overallCart = [];
  
  // Add to cart functionality
  function addToCart(name, price) {
    overallCart.push({ name, price });
    updateCartCount();
  }
  
  function updateCartCount() {
    const count = overallCart.length;
    document.querySelector('.cart-button button').innerText = `Cart (${count})`;
  }
  
  // Cart modal toggle
  function toggleCart() {
    const modal = document.getElementById('cart-modal');
    if (modal.style.display === 'block') {
      modal.style.display = 'none';
    } else {
      renderCartItems();
      modal.style.display = 'block';
    }
  }
  
  function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
  }
  
  // Render cart contents
  function renderCartItems() {
    const container = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total-price');
    container.innerHTML = '';
    let total = 0;
    overallCart.forEach((item, idx) => {
      const div = document.createElement('div');
      div.innerText = `${item.name} — ₹${item.price}`;
      container.appendChild(div);
      total += item.price;
    });
    totalSpan.innerText = total;
  }
  
  enumSectionIds = [
    'food-products', 'electronics-products', 'hardware-products',
    'clothing-products', 'books-products', 'toys-products',
    'furniture-products', 'beauty-products', 'sports-products'
  ];
  
  // Filtering by category
  function filterProducts() {
    const category = document.getElementById('category-filter').value;
    enumSectionIds.forEach(id => {
      const section = document.getElementById(id).parentElement;
      // section is <section class="section">
      if (!category || id === `${category}-products`) {
        section.style.display = '';
      } else {
        section.style.display = 'none';
      }
    });
  }
  function updateDisplayImage() {
    const category = document.getElementById("category-filter").value || "default";
    const sort = document.getElementById("price-sort").value;

    const displayImage = document.getElementById("display-image");

    // Create image file name based on selected options
    const imageFileName = `${category}-${sort}.webp`;

    // Set image src (you must place these images in /img/)
    displayImage.src = `img/${imageFileName}`;
}
  
  // Sorting by price
  function sortProducts() {
    const direction = document.getElementById('price-sort').value; // 'asc' or 'desc'
    enumSectionIds.forEach(id => {
      const container = document.getElementById(id);
      const cards = Array.from(container.querySelectorAll('.product-card'));
      cards.sort((a, b) => {
        const pa = parseFloat(a.querySelector('.price').innerText.replace(/[^0-9.]/g, ''));
        const pb = parseFloat(b.querySelector('.price').innerText.replace(/[^0-9.]/g, ''));
        return direction === 'asc' ? pa - pb : pb - pa;
      });
      // Re-append in order
      cards.forEach(card => container.appendChild(card));
    });
  }
  
  // Initialize defaults
  document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    // Hide all auth forms
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
  });
  