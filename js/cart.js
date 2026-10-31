/**
 * Crochet & Co. - Shopping Cart Logic (Vanilla JS & LocalStorage)
 */

const CART_STORAGE_KEY = 'crochet_co_cart';
const COUPON_STORAGE_KEY = 'crochet_co_coupon';
const SHIPPING_STANDARD = 200; // PKR 200 standard shipping in Pakistan
const FREE_SHIPPING_THRESHOLD = 3000; // Free shipping over PKR 3000

// Retrieve cart array from LocalStorage
function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading cart from localStorage', e);
    return [];
  }
}

// Save cart array to LocalStorage
function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartBadges();
  } catch (e) {
    console.error('Error saving cart to localStorage', e);
  }
}

// Add an item to cart
function addToCart(productId, quantity = 1, selectedColor = null, showNotification = true) {
  const product = getProductById(productId);
  if (!product) return false;

  const cart = getCart();
  const colorToUse = selectedColor || (product.colors && product.colors.length > 0 ? product.colors[0].name : 'Default');

  // Check if item with same ID and color already in cart
  const existingIndex = cart.findIndex(item => item.id === product.id && item.color === colorToUse);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += Number(quantity);
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      image: getProductMainImage(product),
      categoryName: product.categoryName,
      color: colorToUse,
      quantity: Number(quantity)
    });
  }

  saveCart(cart);

  if (showNotification && typeof showToast === 'function') {
    showToast(`Added "${product.name}" to your cart! ♡`, 'cart');
  }

  // Animate cart badge
  const badges = document.querySelectorAll('.cart-counter');
  badges.forEach(b => {
    b.classList.remove('bounce');
    void b.offsetWidth; // trigger reflow
    b.classList.add('bounce');
  });

  return true;
}

// Remove item by index
function removeFromCart(index) {
  const cart = getCart();
  if (index >= 0 && index < cart.length) {
    const removed = cart.splice(index, 1);
    saveCart(cart);
    if (typeof showToast === 'function' && removed[0]) {
      showToast(`Removed "${removed[0].name}" from cart.`, 'info');
    }
    renderCartPage();
  }
}

// Update item quantity
function updateCartQuantity(index, deltaOrValue, isDirectValue = false) {
  const cart = getCart();
  if (index >= 0 && index < cart.length) {
    if (isDirectValue) {
      const val = parseInt(deltaOrValue, 10);
      cart[index].quantity = val > 0 ? val : 1;
    } else {
      cart[index].quantity += deltaOrValue;
      if (cart[index].quantity <= 0) {
        removeFromCart(index);
        return;
      }
    }
    saveCart(cart);
    renderCartPage();
  }
}

// Clear all items in cart
function clearCart() {
  localStorage.removeItem(CART_STORAGE_KEY);
  localStorage.removeItem(COUPON_STORAGE_KEY);
  updateCartBadges();
}

// Get total count of units in cart
function getCartCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.quantity || 1), 0);
}

// Calculate subtotal
function getCartSubtotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Calculate discount from coupon
function getCouponDiscount(subtotal) {
  const coupon = localStorage.getItem(COUPON_STORAGE_KEY);
  if (!coupon) return 0;

  if (coupon.toUpperCase() === 'CROCHET10') {
    return Math.round(subtotal * 0.10); // 10% off
  } else if (coupon.toUpperCase() === 'YARNLOVE') {
    return Math.min(300, subtotal); // Flat Rs. 300 off
  }
  return 0;
}

// Calculate delivery charge
function getCartShipping(subtotal) {
  if (subtotal === 0) return 0;
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_STANDARD;
}

// Calculate final total
function getCartTotal() {
  const subtotal = getCartSubtotal();
  if (subtotal === 0) return 0;
  const discount = getCouponDiscount(subtotal);
  const shipping = getCartShipping(subtotal);
  return Math.max(0, subtotal - discount + shipping);
}

// Update header badges
function updateCartBadges() {
  const count = getCartCount();
  const badges = document.querySelectorAll('.cart-counter');
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}

// Render Cart Page if on cart.html
function renderCartPage() {
  const cartContainer = document.getElementById('cart-items-container');
  const summaryContainer = document.getElementById('cart-summary-box');
  const emptyState = document.getElementById('cart-empty-state');
  const cartContent = document.getElementById('cart-content-wrapper');

  if (!cartContainer) return; // not on cart.html

  const cart = getCart();
  const subtotal = getCartSubtotal();
  const discount = getCouponDiscount(subtotal);
  const shipping = getCartShipping(subtotal);
  const finalTotal = getCartTotal();

  if (cart.length === 0) {
    if (cartContent) cartContent.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (cartContent) cartContent.style.display = 'grid';
  if (emptyState) emptyState.style.display = 'none';

  // Render items rows
  cartContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item-row">
      <div class="cart-item-info">
        <div class="cart-item-thumb">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div>
          <h4 class="cart-item-title">
            <a href="product.html?id=${item.id}">${item.name}</a>
          </h4>
          <span class="cart-item-color"><i class="fa-solid fa-palette"></i> ${item.color}</span>
        </div>
      </div>
      <div class="cart-item-price">${formatPrice(item.price)}</div>
      <div class="quantity-stepper">
        <button type="button" class="qty-btn" onclick="updateCartQuantity(${index}, -1)" aria-label="Decrease quantity">
          <i class="fa-solid fa-minus"></i>
        </button>
        <input type="text" class="qty-input" value="${item.quantity}" readonly>
        <button type="button" class="qty-btn" onclick="updateCartQuantity(${index}, 1)" aria-label="Increase quantity">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <div class="cart-item-subtotal">${formatPrice(item.price * item.quantity)}</div>
      <button type="button" class="btn-remove-cart" onclick="removeFromCart(${index})" title="Remove item">
        <i class="fa-regular fa-trash-can"></i>
      </button>
    </div>
  `).join('');

  // Render Order Summary
  if (summaryContainer) {
    const appliedCoupon = localStorage.getItem(COUPON_STORAGE_KEY) || '';
    const freeShippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
    const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

    summaryContainer.innerHTML = `
      <h3 class="summary-title">Order Summary</h3>

      <!-- Free Shipping Goal Tracker -->
      <div style="background: var(--color-warm-cream); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 1.25rem;">
        <div style="font-size: 0.82rem; margin-bottom: 0.4rem; color: var(--color-text-dark); display: flex; align-items: center; justify-content: space-between;">
          <span>${amountNeededForFreeShipping === 0 ? '🎉 You unlocked <strong>FREE Delivery!</strong>' : `Add <strong>${formatPrice(amountNeededForFreeShipping)}</strong> more for <strong>FREE Delivery</strong>`}</span>
        </div>
        <div style="height: 6px; background: #EADCD6; border-radius: var(--radius-full); overflow: hidden;">
          <div style="width: ${freeShippingProgress}%; height: 100%; background: var(--color-pink-dark); transition: width 0.4s ease;"></div>
        </div>
      </div>

      <div class="summary-row">
        <span>Subtotal (${getCartCount()} items)</span>
        <span>${formatPrice(subtotal)}</span>
      </div>

      ${discount > 0 ? `
        <div class="summary-row" style="color: #2E7D32;">
          <span>Coupon Discount (${appliedCoupon.toUpperCase()})</span>
          <span>- ${formatPrice(discount)}</span>
        </div>
      ` : ''}

      <div class="summary-row">
        <span>Estimated Delivery</span>
        <span>${shipping === 0 ? '<strong style="color: #2E7D32;">FREE</strong>' : formatPrice(shipping)}</span>
      </div>

      <div class="summary-row total-row">
        <span>Estimated Total</span>
        <span style="color: var(--color-pink-dark);">${formatPrice(finalTotal)}</span>
      </div>

      <!-- Coupon Form -->
      <div class="coupon-box">
        <input type="text" id="coupon-code-input" class="coupon-input" placeholder="Promo code (try CROCHET10)" value="${appliedCoupon}">
        <button type="button" class="btn btn-secondary btn-sm" onclick="applyCouponCode()">Apply</button>
      </div>

      <a href="checkout.html" class="btn btn-primary btn-lg btn-checkout-now">
        Proceed to Checkout <i class="fa-solid fa-arrow-right"></i>
      </a>

      <div style="text-align: center; margin-top: 1rem;">
        <a href="shop.html" style="font-size: 0.88rem; color: var(--color-text-muted); text-decoration: underline;">
          ← Continue Shopping
        </a>
      </div>
    `;
  }
}

// Coupon code application handler
function applyCouponCode() {
  const input = document.getElementById('coupon-code-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (!code) {
    localStorage.removeItem(COUPON_STORAGE_KEY);
    showToast('Coupon cleared.', 'info');
    renderCartPage();
    return;
  }

  if (code === 'CROCHET10') {
    localStorage.setItem(COUPON_STORAGE_KEY, 'CROCHET10');
    showToast('Success! 10% discount applied ♡', 'success');
    renderCartPage();
  } else if (code === 'YARNLOVE') {
    localStorage.setItem(COUPON_STORAGE_KEY, 'YARNLOVE');
    showToast('Success! Rs. 300 discount applied ♡', 'success');
    renderCartPage();
  } else {
    showToast('Invalid coupon code. Try CROCHET10', 'error');
  }
}

// Initialise cart listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadges();
  renderCartPage();
});
