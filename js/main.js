/**
 * Crochet & Co. - Main Application Script
 * Vanilla JavaScript UI/UX Interactions & Wishlist
 */

// Wishlist Storage Key
const WISHLIST_STORAGE_KEY = 'crochet_co_wishlist';

/* ==========================================================================
   WISHLIST LOGIC
   ========================================================================== */
function getWishlist() {
  try {
    const raw = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading wishlist', e);
    return [];
  }
}

function saveWishlist(wishlist) {
  try {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    updateWishlistBadges();
  } catch (e) {
    console.error('Error saving wishlist', e);
  }
}

function isInWishlist(productId) {
  const wishlist = getWishlist();
  const id = parseInt(productId, 10);
  return wishlist.includes(id);
}

function toggleWishlist(productId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const id = parseInt(productId, 10);
  const product = getProductById(id);
  if (!product) return;

  let wishlist = getWishlist();
  const index = wishlist.indexOf(id);
  let added = false;

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed "${product.name}" from your wishlist.`, 'info');
  } else {
    wishlist.push(id);
    added = true;
    showToast(`Saved "${product.name}" to your wishlist! ♡`, 'heart');
  }

  saveWishlist(wishlist);

  // Update all matching wishlist buttons on screen
  const buttons = document.querySelectorAll(`[data-wishlist-id="${id}"]`);
  buttons.forEach(btn => {
    if (added) {
      btn.classList.add('active');
      btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
    } else {
      btn.classList.remove('active');
      btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    }
  });

  // If on wishlist.html, re-render the page
  if (typeof renderWishlistPage === 'function') {
    renderWishlistPage();
  }
}

function updateWishlistBadges() {
  const wishlist = getWishlist();
  const count = wishlist.length;
  const badges = document.querySelectorAll('.wishlist-counter');
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}

/* ==========================================================================
   PRODUCT CARD COMPONENT GENERATOR
   ========================================================================== */
function createProductCardHTML(product) {
  const isWish = isInWishlist(product.id);
  const mainImg = getProductMainImage(product);

  let badgeMarkup = '';
  if (product.badge) {
    let badgeClass = 'badge-pink';
    if (product.badge === 'Sale') badgeClass = 'badge-peach';
    if (product.badge === 'Trending') badgeClass = 'badge-lavender';
    if (product.badge === 'Cozy' || product.badge === 'Dainty') badgeClass = 'badge-sage';
    badgeMarkup = `<span class="badge ${badgeClass} product-badge">${product.badge}</span>`;
  }

  return `
    <div class="product-card fade-in-section" data-product-id="${product.id}">
      <div class="product-media">
        ${badgeMarkup}
        <button type="button" class="btn-wishlist ${isWish ? 'active' : ''}" 
                data-wishlist-id="${product.id}" 
                onclick="toggleWishlist(${product.id}, event)" 
                title="${isWish ? 'Remove from Wishlist' : 'Add to Wishlist'}">
          <i class="${isWish ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
        <a href="product.html?id=${product.id}">
          <img src="${mainImg}" alt="${product.name}" loading="lazy">
        </a>
        <div class="quick-view-overlay">
          <button type="button" class="btn-quick-view" onclick="openQuickView(${product.id})">
            <i class="fa-regular fa-eye"></i> Quick View
          </button>
        </div>
      </div>
      <div class="product-content">
        <span class="product-category">${product.categoryName}</span>
        <h4 class="product-name">
          <a href="product.html?id=${product.id}">${product.name}</a>
        </h4>
        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <span style="font-weight: 600; color: var(--color-text-dark);">${product.rating.toFixed(1)}</span>
          <span class="rating-count">(${product.reviewsCount})</span>
        </div>
        <div class="product-bottom">
          <div class="product-price">
            <span class="current-price">${formatPrice(product.price)}</span>
            ${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
          </div>
          <button type="button" class="btn-add-cart" onclick="addToCart(${product.id}, 1)" title="Add to Cart">
            <i class="fa-solid fa-basket-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   TOAST NOTIFICATION COMPONENT
   ========================================================================== */
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';

  let iconMarkup = '<i class="fa-solid fa-check-circle toast-icon"></i>';
  if (type === 'heart') {
    iconMarkup = '<i class="fa-solid fa-heart toast-icon" style="color: var(--color-pink-dark);"></i>';
  } else if (type === 'cart') {
    iconMarkup = '<i class="fa-solid fa-bag-shopping toast-icon" style="color: var(--color-pink-dark);"></i>';
  } else if (type === 'info') {
    iconMarkup = '<i class="fa-solid fa-circle-info toast-icon" style="color: var(--color-text-muted);"></i>';
  } else if (type === 'error') {
    iconMarkup = '<i class="fa-solid fa-circle-exclamation toast-icon" style="color: #E55964;"></i>';
    toast.style.borderLeftColor = '#E55964';
  }

  toast.innerHTML = `
    ${iconMarkup}
    <div style="font-size: 0.88rem; font-weight: 500;">${message}</div>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Auto remove after 3.2 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

/* ==========================================================================
   QUICK VIEW MODAL
   ========================================================================== */
let currentQuickViewProduct = null;
let quickViewSelectedColor = null;

function openQuickView(productId) {
  const product = getProductById(productId);
  if (!product) return;

  currentQuickViewProduct = product;
  quickViewSelectedColor = product.colors && product.colors.length > 0 ? product.colors[0].name : 'Default';

  let modalBackdrop = document.getElementById('quick-view-modal-backdrop');
  if (!modalBackdrop) {
    modalBackdrop = document.createElement('div');
    modalBackdrop.id = 'quick-view-modal-backdrop';
    modalBackdrop.className = 'modal-backdrop';
    modalBackdrop.innerHTML = `
      <div class="quick-view-modal" id="quick-view-modal-box">
        <button type="button" class="modal-close-btn" onclick="closeQuickView()" aria-label="Close modal">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div id="quick-view-body" style="padding: 2rem;"></div>
      </div>
    `;
    document.body.appendChild(modalBackdrop);

    // Close when clicking outside content
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeQuickView();
    });
  }

  const modalBody = document.getElementById('quick-view-body');
  const mainImg = getProductMainImage(product);

  const colorsMarkup = (product.colors || []).map((col, idx) => `
    <button type="button" class="color-swatch ${idx === 0 ? 'active' : ''}" 
            style="background-color: ${col.hex};" 
            title="${col.name}" 
            onclick="selectQuickViewColor('${col.name}', this)"></button>
  `).join('');

  modalBody.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center;">
      <div style="border-radius: var(--radius-lg); overflow: hidden; background: var(--color-peach-light); height: 360px;">
        <img id="qv-main-image" src="${mainImg}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div>
        <span class="product-category">${product.categoryName}</span>
        <h3 style="font-size: 1.65rem; margin: 0.3rem 0 0.6rem 0;">${product.name}</h3>
        <div class="product-rating" style="margin-bottom: 0.8rem;">
          <i class="fa-solid fa-star"></i>
          <span style="font-weight: 600; color: var(--color-text-dark);">${product.rating.toFixed(1)}</span>
          <span class="rating-count">(${product.reviewsCount} customer reviews)</span>
        </div>
        <div style="display: flex; align-items: baseline; gap: 0.8rem; margin-bottom: 1rem;">
          <span style="font-size: 1.5rem; font-weight: 700; color: var(--color-text-dark);">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span style="font-size: 0.95rem; color: var(--color-text-light); text-decoration: line-through;">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
        <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.2rem;">${product.shortDesc}</p>
        
        <!-- Color Selector -->
        <div style="margin-bottom: 1.2rem;">
          <div style="font-size: 0.85rem; font-weight: 600; margin-bottom: 0.4rem;">Color: <span id="qv-color-label" style="font-weight: 400; color: var(--color-pink-dark);">${quickViewSelectedColor}</span></div>
          <div class="color-swatches">${colorsMarkup}</div>
        </div>

        <!-- Quantity & Add to Cart -->
        <div style="display: flex; align-items: center; gap: 1rem; margin-top: 1.5rem;">
          <div class="quantity-stepper">
            <button type="button" class="qty-btn" onclick="adjustQvQty(-1)"><i class="fa-solid fa-minus"></i></button>
            <input type="text" id="qv-qty-input" class="qty-input" value="1" readonly>
            <button type="button" class="qty-btn" onclick="adjustQvQty(1)"><i class="fa-solid fa-plus"></i></button>
          </div>
          <button type="button" class="btn btn-primary" onclick="submitQuickViewCart()" style="flex: 1;">
            <i class="fa-solid fa-basket-shopping"></i> Add to Cart
          </button>
        </div>

        <div style="margin-top: 1.2rem; text-align: center;">
          <a href="product.html?id=${product.id}" style="font-size: 0.85rem; color: var(--color-pink-dark); text-decoration: underline;">
            View Full Product Details →
          </a>
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const modalBackdrop = document.getElementById('quick-view-modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('show');
    document.body.style.overflow = '';
  }
}

function selectQuickViewColor(colorName, buttonElement) {
  quickViewSelectedColor = colorName;
  const label = document.getElementById('qv-color-label');
  if (label) label.textContent = colorName;

  const swatches = document.querySelectorAll('#quick-view-body .color-swatch');
  swatches.forEach(s => s.classList.remove('active'));
  if (buttonElement) buttonElement.classList.add('active');
}

function adjustQvQty(delta) {
  const input = document.getElementById('qv-qty-input');
  if (!input) return;
  let val = parseInt(input.value, 10) + delta;
  if (val < 1) val = 1;
  input.value = val;
}

function submitQuickViewCart() {
  if (!currentQuickViewProduct) return;
  const input = document.getElementById('qv-qty-input');
  const qty = input ? parseInt(input.value, 10) : 1;
  addToCart(currentQuickViewProduct.id, qty, quickViewSelectedColor);
  closeQuickView();
}

/* ==========================================================================
   SEARCH MODAL / LIVE SEARCH
   ========================================================================== */
function openSearchModal() {
  let searchBackdrop = document.getElementById('search-modal-backdrop');
  if (!searchBackdrop) {
    searchBackdrop = document.createElement('div');
    searchBackdrop.id = 'search-modal-backdrop';
    searchBackdrop.className = 'modal-backdrop';
    searchBackdrop.innerHTML = `
      <div style="background: #FFFFFF; border-radius: var(--radius-xl); max-width: 650px; width: 100%; padding: 2rem; box-shadow: var(--shadow-card); position: relative;">
        <button type="button" class="modal-close-btn" onclick="closeSearchModal()" aria-label="Close search">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <h3 style="font-size: 1.5rem; margin-bottom: 1.2rem; text-align: center;">Search Our Handmade Collection</h3>
        <div style="position: relative; margin-bottom: 1.5rem;">
          <input type="text" id="live-search-input" placeholder="Search by name, category, or floral type..." 
                 style="width: 100%; padding: 0.9rem 1.4rem; border: 2px solid var(--color-soft-pink); border-radius: var(--radius-full); font-size: 1rem; background: var(--color-warm-cream);">
        </div>
        <div id="live-search-results" style="max-height: 380px; overflow-y: auto; display: flex; flex-direction: column; gap: 0.8rem;">
          <p style="text-align: center; color: var(--color-text-muted); font-size: 0.9rem; padding: 1.5rem;">Type to search keychains, pouches, earrings, and clips...</p>
        </div>
      </div>
    `;
    document.body.appendChild(searchBackdrop);

    searchBackdrop.addEventListener('click', (e) => {
      if (e.target === searchBackdrop) closeSearchModal();
    });

    // Listen to live search keystrokes
    const input = document.getElementById('live-search-input');
    input.addEventListener('input', (e) => handleLiveSearch(e.target.value));
  }

  searchBackdrop.classList.add('show');
  document.body.style.overflow = 'hidden';
  const input = document.getElementById('live-search-input');
  if (input) {
    input.value = '';
    input.focus();
    handleLiveSearch('');
  }
}

function closeSearchModal() {
  const searchBackdrop = document.getElementById('search-modal-backdrop');
  if (searchBackdrop) {
    searchBackdrop.classList.remove('show');
    document.body.style.overflow = '';
  }
}

function handleLiveSearch(query) {
  const resultsContainer = document.getElementById('live-search-results');
  if (!resultsContainer) return;

  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) {
    resultsContainer.innerHTML = `
      <p style="text-align: center; color: var(--color-text-muted); font-size: 0.9rem; padding: 1.5rem;">
        Type to search across our 25+ handmade crochet creations...
      </p>
    `;
    return;
  }

  const matches = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(cleanQuery) ||
    p.categoryName.toLowerCase().includes(cleanQuery) ||
    p.shortDesc.toLowerCase().includes(cleanQuery)
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; color: var(--color-border); margin-bottom: 0.8rem;"></i>
        <p style="color: var(--color-text-muted);">No products found matching "${query}".</p>
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = matches.slice(0, 6).map(product => `
    <a href="product.html?id=${product.id}" style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); transition: background 0.2s;" onmouseover="this.style.background='var(--color-warm-cream)'" onmouseout="this.style.background='transparent'">
      <img src="${getProductMainImage(product)}" alt="${product.name}" style="width: 55px; height: 55px; border-radius: var(--radius-sm); object-fit: cover;">
      <div style="flex: 1;">
        <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-pink-dark); font-weight: 600;">${product.categoryName}</div>
        <div style="font-weight: 600; font-family: var(--font-heading); font-size: 0.95rem; color: var(--color-text-dark);">${product.name}</div>
      </div>
      <div style="font-weight: 700; color: var(--color-pink-dark); font-size: 0.95rem;">${formatPrice(product.price)}</div>
    </a>
  `).join('');
}

/* ==========================================================================
   NAVIGATION & MOBILE DRAWER SETUP
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');
  const drawerClose = document.getElementById('drawer-close');

  // Sticky header shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile menu open
  function openDrawer() {
    drawer?.classList.add('open');
    overlay?.classList.add('open');
    menuToggle?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Mobile menu close
  function closeDrawer() {
    drawer?.classList.remove('open');
    overlay?.classList.remove('open');
    menuToggle?.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuToggle?.addEventListener('click', () => {
    if (drawer?.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  drawerClose?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  // Close search and modals with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeQuickView();
      closeSearchModal();
    }
  });
}

/* ==========================================================================
   INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
   ========================================================================== */
function initScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in-section').forEach(el => {
    observer.observe(el);
  });
}

/* ==========================================================================
   NEWSLETTER & CONTACT DEMO SUBMISSIONS
   ========================================================================== */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast('Thank you for joining our Crochet Club! ♡', 'heart');
        input.value = '';
      }
    });
  }
}

/* ==========================================================================
   GLOBAL APP INIT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  updateWishlistBadges();
  initScrollObserver();
  initNewsletter();
});
