/**
 * Crochet & Co. - Checkout Page & Order Placement Simulation
 */

document.addEventListener('DOMContentLoaded', () => {
  renderCheckoutSummary();
  initCheckoutForm();
});

function renderCheckoutSummary() {
  const summaryItems = document.getElementById('checkout-items-list');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const discountRow = document.getElementById('checkout-discount-row');
  const discountEl = document.getElementById('checkout-discount-amount');
  const shippingEl = document.getElementById('checkout-shipping');
  const totalEl = document.getElementById('checkout-total');
  const placeOrderBtn = document.getElementById('btn-place-order');

  const cart = getCart();

  if (cart.length === 0) {
    if (summaryItems) {
      summaryItems.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--color-text-muted);">
          <i class="fa-solid fa-basket-shopping" style="font-size: 2rem; margin-bottom: 0.8rem; color: var(--color-soft-pink);"></i>
          <p>Your cart is empty.</p>
          <a href="shop.html" class="btn btn-primary btn-sm" style="margin-top: 1rem;">Go to Shop</a>
        </div>
      `;
    }
    if (placeOrderBtn) {
      placeOrderBtn.disabled = true;
      placeOrderBtn.style.opacity = '0.5';
    }
    return;
  }

  const subtotal = getCartSubtotal();
  const discount = getCouponDiscount(subtotal);
  const shipping = getCartShipping(subtotal);
  const finalTotal = getCartTotal();

  if (summaryItems) {
    summaryItems.innerHTML = cart.map(item => `
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 0.8rem 0; border-bottom: 1px solid var(--color-border);">
        <div style="display: flex; align-items: center; gap: 0.8rem;">
          <img src="${item.image}" alt="${item.name}" style="width: 48px; height: 48px; border-radius: var(--radius-xs); object-fit: cover;">
          <div>
            <div style="font-weight: 600; font-size: 0.88rem; color: var(--color-text-dark);">${item.name}</div>
            <div style="font-size: 0.78rem; color: var(--color-text-muted);">${item.color} × ${item.quantity}</div>
          </div>
        </div>
        <div style="font-weight: 600; font-size: 0.9rem;">${formatPrice(item.price * item.quantity)}</div>
      </div>
    `).join('');
  }

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);

  if (discountRow && discountEl) {
    if (discount > 0) {
      discountRow.style.display = 'flex';
      discountEl.textContent = `- ${formatPrice(discount)}`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  if (shippingEl) {
    shippingEl.innerHTML = shipping === 0 ? '<strong style="color: #2E7D32;">FREE</strong>' : formatPrice(shipping);
  }

  if (totalEl) totalEl.textContent = formatPrice(finalTotal);
}

function initCheckoutForm() {
  const form = document.getElementById('checkout-order-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const cart = getCart();
    if (cart.length === 0) {
      showToast('Your cart is empty! Please add products before checking out.', 'error');
      return;
    }

    // Reset errors
    document.querySelectorAll('.form-group').forEach(fg => fg.classList.remove('has-error'));

    let isValid = true;

    // Full Name
    const nameInput = document.getElementById('checkout-name');
    if (!nameInput || nameInput.value.trim().length < 3) {
      showError(nameInput, 'Please enter your full name (at least 3 characters).');
      isValid = false;
    }

    // Phone Number (Pakistan mobile numbers: 03XX-XXXXXXX or 11 digits)
    const phoneInput = document.getElementById('checkout-phone');
    const phoneVal = phoneInput ? phoneInput.value.trim().replace(/[-\s]/g, '') : '';
    if (!phoneVal || !/^(03\d{9}|\+923\d{9})$/.test(phoneVal)) {
      showError(phoneInput, 'Please enter a valid Pakistani phone number (e.g., 03001234567).');
      isValid = false;
    }

    // Address
    const addressInput = document.getElementById('checkout-address');
    if (!addressInput || addressInput.value.trim().length < 10) {
      showError(addressInput, 'Please enter a complete delivery address with house/street details.');
      isValid = false;
    }

    // City
    const cityInput = document.getElementById('checkout-city');
    if (!cityInput || !cityInput.value.trim()) {
      showError(cityInput, 'Please enter your delivery city.');
      isValid = false;
    }

    // Province
    const provinceSelect = document.getElementById('checkout-province');
    if (!provinceSelect || !provinceSelect.value) {
      showError(provinceSelect, 'Please select your province / region.');
      isValid = false;
    }

    if (!isValid) {
      showToast('Please fix the highlighted errors in the form.', 'error');
      return;
    }

    // Simulate Processing Order
    const submitBtn = document.getElementById('btn-place-order');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Demo Order...';

    setTimeout(() => {
      // Generate Order ID
      const orderId = '#CC-' + Math.floor(10000 + Math.random() * 90000);
      const customerData = {
        name: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: document.getElementById('checkout-email')?.value.trim() || 'N/A',
        address: `${addressInput.value.trim()}, ${cityInput.value.trim()}, ${provinceSelect.value}`,
        orderId: orderId,
        date: new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'short', day: 'numeric' }),
        items: [...cart],
        subtotal: getCartSubtotal(),
        discount: getCouponDiscount(getCartSubtotal()),
        shipping: getCartShipping(getCartSubtotal()),
        total: getCartTotal()
      };

      // Show Order Success View/Modal
      showOrderSuccessModal(customerData);

      // Clear the cart
      clearCart();

      // Reset button
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }, 1200);
  });
}

function showError(inputElement, message) {
  if (!inputElement) return;
  const parent = inputElement.closest('.form-group');
  if (parent) {
    parent.classList.add('has-error');
    const errText = parent.querySelector('.form-error');
    if (errText) errText.textContent = message;
  }
}

function showOrderSuccessModal(order) {
  let modal = document.getElementById('order-success-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'order-success-modal';
    modal.className = 'success-modal';
    document.body.appendChild(modal);
  }

  const itemsListMarkup = order.items.map(item => `
    <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.88rem; padding: 0.4rem 0;">
      <span>${item.name} (${item.color}) × ${item.quantity}</span>
      <strong>${formatPrice(item.price * item.quantity)}</strong>
    </div>
  `).join('');

  modal.innerHTML = `
    <div class="success-card">
      <div class="success-icon">
        <i class="fa-solid fa-check"></i>
      </div>
      <h2 style="font-size: 1.85rem; margin-bottom: 0.4rem;">Order Placed Successfully! ♡</h2>
      <p style="color: var(--color-text-muted); font-size: 0.95rem;">
        Thank you, <strong>${order.name}</strong>! Your demo order has been recorded.
      </p>

      <div class="order-id-tag">Order ID: ${order.orderId}</div>

      <!-- Demo Disclaimer Alert -->
      <div style="background: #FFF3CD; border: 1px solid #FFEEBA; border-radius: var(--radius-sm); padding: 0.9rem 1.1rem; text-align: left; margin: 1.2rem 0; font-size: 0.84rem; color: #856404; line-height: 1.5;">
        <i class="fa-solid fa-circle-info" style="margin-right: 0.4rem;"></i>
        <strong>Important Notice:</strong> This is an interactive frontend demo for <em>Crochet & Co.</em> Real orders are not sent to the business yet. A real backend and payment gateway will be connected later.
      </div>

      <!-- Order Receipt Details -->
      <div style="background: var(--color-warm-cream); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 1.25rem; text-align: left; margin-bottom: 1.5rem;">
        <h4 style="font-size: 0.95rem; margin-bottom: 0.6rem; border-bottom: 1px dashed var(--color-border); padding-bottom: 0.4rem;">
          Order Summary (${order.items.length} unique items)
        </h4>
        ${itemsListMarkup}
        <div style="border-top: 1px solid var(--color-border); margin-top: 0.6rem; padding-top: 0.6rem; display: flex; justify-content: space-between; font-size: 1.05rem; font-weight: 700; color: var(--color-pink-dark);">
          <span>Final Total (Cash on Delivery):</span>
          <span>${formatPrice(order.total)}</span>
        </div>
        <div style="margin-top: 0.8rem; font-size: 0.82rem; color: var(--color-text-muted);">
          <strong>Deliver to:</strong> ${order.address}<br>
          <strong>Contact:</strong> ${order.phone}
        </div>
      </div>

      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="index.html" class="btn btn-secondary">
          <i class="fa-solid fa-house"></i> Return to Home
        </a>
        <a href="shop.html" class="btn btn-primary">
          <i class="fa-solid fa-basket-shopping"></i> Continue Shopping
        </a>
      </div>
    </div>
  `;

  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}
