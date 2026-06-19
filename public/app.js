// Funcionalidad compartida en el cliente para scbodycare

// Gestión de Carrito de Compras
let cart = JSON.parse(localStorage.getItem('sc_cart')) || [];

function saveCart() {
  localStorage.setItem('sc_cart', JSON.stringify(cart));
  updateCartCountHeader();
}

function addToCart(productId, name, price, quantity = 1, type = 'regular') {
  // Comprobar si el producto ya existe en el carrito con el mismo tipo de compra
  const existingItemIndex = cart.findIndex(item => item.productId === productId && item.type === type);
  
  let availableStock = 999;
  if (window.allProducts) {
    const p = window.allProducts.find(prod => prod.id === productId);
    if (p && p.stock !== undefined) {
      availableStock = p.stock;
    }
  }

  if (existingItemIndex > -1) {
    const newQty = cart[existingItemIndex].quantity + parseInt(quantity);
    if (newQty > availableStock) {
      cart[existingItemIndex].quantity = availableStock;
      const lang = localStorage.getItem('lang') || 'es';
      showToast(lang === 'en' ? `Limited to available stock (${availableStock})` : `Limitado al stock disponible (${availableStock})`);
    } else {
      cart[existingItemIndex].quantity = newQty;
    }
  } else {
    const finalQty = Math.min(parseInt(quantity), availableStock);
    cart.push({
      productId,
      name,
      price: parseFloat(price),
      quantity: finalQty,
      type
    });
  }
  
  saveCart();
  const lang = localStorage.getItem('lang') || 'es';
  const purchaseTypeStr = type === 'autoship' ? (lang === 'en' ? 'Autoship' : 'Autoship') : (lang === 'en' ? 'One-time Purchase' : 'Compra Única');
  showToast(lang === 'en' ? `Added to cart: ${name} (${purchaseTypeStr})!` : `¡Agregado al carrito: ${name} (${purchaseTypeStr})!`);
  
  // Disparar evento para actualizar la página del carrito si está abierta
  window.dispatchEvent(new Event('cartUpdated'));
}

function removeFromCart(productId, type) {
  cart = cart.filter(item => !(item.productId === productId && item.type === type));
  saveCart();
  const lang = localStorage.getItem('lang') || 'es';
  showToast(lang === 'en' ? "Item removed from cart" : "Artículo eliminado del carrito");
  window.dispatchEvent(new Event('cartUpdated'));
}

function clearCart() {
  cart = [];
  saveCart();
  window.dispatchEvent(new Event('cartUpdated'));
}

function getCartTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartCount() {
  return cart.reduce((count, item) => count + item.quantity, 0);
}

function updateCartCountHeader() {
  const count = getCartCount();
  
  const cartBadge = document.getElementById('cart-badge-count');
  if (cartBadge) {
    cartBadge.textContent = count;
    cartBadge.style.display = count > 0 ? 'inline-flex' : 'none';
  }
  
  const mobileCartBadge = document.getElementById('mobile-cart-badge-count');
  if (mobileCartBadge) {
    mobileCartBadge.textContent = count;
    mobileCartBadge.style.display = count > 0 ? 'inline-flex' : 'none';
  }
  
  const mobileTabCartBadge = document.getElementById('mobile-tab-cart-badge');
  if (mobileTabCartBadge) {
    mobileTabCartBadge.textContent = count;
    mobileTabCartBadge.style.display = count > 0 ? 'inline-flex' : 'none';
  }
}

// Mostrar notificaciones Toast Premium
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  
  toast.innerHTML = `<i class="fa fa-check-circle" style="color: #D4AF37; margin-right: 8px;"></i> ${message}`;
  toast.style.display = 'block';
  
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3500);
}

// Sesión de Usuario
let currentUser = JSON.parse(localStorage.getItem('sc_user')) || null;

function loginUser(user) {
  localStorage.setItem('sc_user', JSON.stringify(user));
  currentUser = user;
  updateUserHeader();
  const lang = localStorage.getItem('lang') || 'es';
  showToast(lang === 'en' ? `Welcome, ${user.name}!` : `¡Bienvenido/a, ${user.name}!`);
}

function logoutUser() {
  localStorage.removeItem('sc_user');
  currentUser = null;
  updateUserHeader();
  const lang = localStorage.getItem('lang') || 'es';
  showToast(lang === 'en' ? "Session closed" : "Sesión cerrada");
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
}

function updateUserHeader() {
  const loginLink = document.getElementById('nav-login-link');
  if (loginLink) {
    const lang = localStorage.getItem('lang') || 'es';
    if (currentUser) {
      const greeting = lang === 'en' ? 'Hello' : 'Hola';
      const logoutText = lang === 'en' ? 'Logout' : 'Salir';
      loginLink.innerHTML = `<i class="fa fa-user" style="color:#D4AF37;"></i> ${greeting}, ${currentUser.name} | <a href="#" onclick="logoutUser(); return false;" style="margin-left: 5px; color: #8E959A; font-weight: normal;">${logoutText}</a>`;
    } else {
      const loginText = lang === 'en' ? 'Login / Register' : 'Ingresar / Registrarse';
      loginLink.innerHTML = `<a href="login.html"><i class="fa fa-user"></i> ${loginText}</a>`;
    }
  }

  // Show or hide admin panel links dynamically
  const adminLinks = document.querySelectorAll('.admin-panel-link');
  adminLinks.forEach(link => {
    if (currentUser && currentUser.isAdmin) {
      if (link.tagName === 'A' && link.id === 'mobile-admin-panel-link') {
        link.style.display = 'inline-flex';
      } else {
        link.style.display = 'inline-block';
      }
    } else {
      link.style.display = 'none';
    }
  });
}

// Inicializar elementos comunes al cargar
document.addEventListener('DOMContentLoaded', () => {
  updateCartCountHeader();
  updateUserHeader();
  
  // Agregar FontAwesome de forma dinámica para iconos premium
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    document.head.appendChild(fontAwesomeLink);
  }
});
