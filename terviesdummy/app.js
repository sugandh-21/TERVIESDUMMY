// ============================================================
//  TerviesDummy – Main Application
// ============================================================

// ── STATE ────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('td_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('td_wish') || '[]');
let currentColor = null;
let currentPDPProduct = null;
let currentQty = 1;
let currentSize = null;
let heroSlideIndex = 0;
let heroTimer = null;
let currentPage = 1;
const ITEMS_PER_PAGE = 12;
let currentGridCols = 3;

// ── INIT ─────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  updateBadges();
  initNavbar();
  initHamburger();
  initSearchToggle();

  const page = location.pathname.split('/').pop();
  if (page === 'index.html' || page === '' || page === '/') {
    renderFeaturedProducts();
    renderBestsellers();
    startHeroSlider();
    startCountdown();
  }
});

// ── NAVBAR SCROLL ─────────────────────────────────────────────
function initNavbar() {
  const nb = document.getElementById('navbar');
  if (!nb) return;
  window.addEventListener('scroll', () => {
    nb.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ── HAMBURGER ─────────────────────────────────────────────────
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });
}

// ── SEARCH ────────────────────────────────────────────────────
function initSearchToggle() {
  const btn = document.getElementById('searchToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    document.getElementById('searchOverlay').classList.add('active');
    setTimeout(() => document.getElementById('searchInput').focus(), 100);
  });
}
function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('active');
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').innerHTML = '';
}
function liveSearch(q) {
  const box = document.getElementById('searchResults');
  if (!q.trim()) { box.innerHTML = ''; return; }
  const hits = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase()) ||
    p.category.toLowerCase().includes(q.toLowerCase()) ||
    p.fabric.toLowerCase().includes(q.toLowerCase())
  ).slice(0, 6);
  if (!hits.length) { box.innerHTML = '<p class="no-results">No products found</p>'; return; }
  box.innerHTML = hits.map(p => `
    <a href="product.html?id=${p.id}" class="search-hit" onclick="closeSearch()">
      <img src="${p.images[0]}" alt="${p.name}"/>
      <div>
        <strong>${p.name}</strong>
        <span>${formatPrice(p.price)}</span>
      </div>
    </a>
  `).join('');
}

// ── HERO SLIDER ───────────────────────────────────────────────
function startHeroSlider() {
  heroTimer = setInterval(() => changeSlide(1), 5000);
}
function changeSlide(dir) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return;
  slides[heroSlideIndex].classList.remove('active');
  dots[heroSlideIndex].classList.remove('active');
  heroSlideIndex = (heroSlideIndex + dir + slides.length) % slides.length;
  slides[heroSlideIndex].classList.add('active');
  dots[heroSlideIndex].classList.add('active');
}
function goSlide(i) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  slides[heroSlideIndex].classList.remove('active');
  dots[heroSlideIndex].classList.remove('active');
  heroSlideIndex = i;
  slides[i].classList.add('active');
  dots[i].classList.add('active');
}

// ── COUNTDOWN ─────────────────────────────────────────────────
function startCountdown() {
  const end = new Date();
  end.setHours(end.getHours() + 23, 59, 59);
  function tick() {
    const diff = end - new Date();
    if (diff <= 0) return;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const hEl = document.getElementById('cdHours');
    const mEl = document.getElementById('cdMins');
    const sEl = document.getElementById('cdSecs');
    if (hEl) hEl.textContent = String(h).padStart(2, '0');
    if (mEl) mEl.textContent = String(m).padStart(2, '0');
    if (sEl) sEl.textContent = String(s).padStart(2, '0');
  }
  tick();
  setInterval(tick, 1000);
}

// ── PRODUCT CARD ──────────────────────────────────────────────
function productCard(p) {
  const inWish = wishlist.includes(p.id);
  const disc = discountPct(p.price, p.originalPrice);
  const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(p.rating));
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        <a href="product.html?id=${p.id}">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy"/>
          ${p.images[1] ? `<img src="${p.images[1]}" alt="${p.name}" class="hover-img" loading="lazy"/>` : ''}
        </a>
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        ${disc > 0 ? `<span class="product-disc">-${disc}%</span>` : ''}
        <button class="product-wish ${inWish ? 'active' : ''}" onclick="toggleWish(${p.id}, this)" aria-label="Wishlist">
          ${inWish ? '♥' : '♡'}
        </button>
        <button class="product-quick" onclick="location.href='product.html?id=${p.id}'">Quick View</button>
      </div>
      <div class="product-info">
        <span class="product-cat">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</span>
        <a href="product.html?id=${p.id}"><h3>${p.name}</h3></a>
        <div class="product-rating"><span class="stars">${stars}</span><span class="rev-count">(${p.reviews})</span></div>
        <div class="product-price">
          <span class="price">${formatPrice(p.price)}</span>
          ${p.originalPrice > p.price ? `<span class="orig-price">${formatPrice(p.originalPrice)}</span>` : ''}
        </div>
        <button class="product-add-cart" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    </div>
  `;
}

// ── RENDER SECTIONS ───────────────────────────────────────────
function renderFeaturedProducts() {
  const el = document.getElementById('featuredGrid');
  if (!el) return;
  const featured = PRODUCTS.filter(p => p.badge === 'New' || p.badge === 'Bestseller').slice(0, 8);
  el.innerHTML = featured.map(productCard).join('');
}
function renderBestsellers() {
  const el = document.getElementById('bestsellersGrid');
  if (!el) return;
  const best = [...PRODUCTS].sort((a, b) => b.reviews - a.reviews).slice(0, 8);
  el.innerHTML = best.map(productCard).join('');
}

// ── COLLECTION PAGE ───────────────────────────────────────────
function applyFilters() {
  const cats = [...document.querySelectorAll('input[name="cat"]:checked')].map(i => i.value);
  const fabrics = [...document.querySelectorAll('input[name="fabric"]:checked')].map(i => i.value);
  const occasions = [...document.querySelectorAll('input[name="occasion"]:checked')].map(i => i.value);
  const priceEl = document.querySelector('input[name="price"]:checked');
  const priceVal = priceEl ? priceEl.value : '';
  const sort = document.getElementById('sortSelect')?.value || 'default';
  const sale = new URLSearchParams(window.location.search).get('sale');

  let filtered = [...PRODUCTS];

  if (sale) filtered = filtered.filter(p => p.sale);
  if (cats.length) filtered = filtered.filter(p => cats.includes(p.category));
  if (fabrics.length) filtered = filtered.filter(p => fabrics.includes(p.fabric));
  if (occasions.length) filtered = filtered.filter(p => occasions.includes(p.occasion));
  if (currentColor) filtered = filtered.filter(p => p.color === currentColor);
  if (priceVal) {
    const [lo, hi] = priceVal.split('-').map(Number);
    filtered = filtered.filter(p => p.price >= lo && p.price <= hi);
  }

  // Sort
  if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sort === 'newest') filtered.sort((a, b) => b.id - a.id);
  else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  currentPage = 1;
  renderCollectionGrid(filtered);
  renderActiveFilters(cats, fabrics, occasions, priceVal);
}

function renderCollectionGrid(products) {
  const grid = document.getElementById('collectionGrid');
  const countEl = document.getElementById('productCount');
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const page = products.slice(start, start + ITEMS_PER_PAGE);

  if (!grid) return;
  grid.innerHTML = page.length ? page.map(productCard).join('') : '<p class="no-results-msg">No products match your filters. <button onclick="clearFilters()" class="btn-link">Clear filters</button></p>';
  if (countEl) countEl.textContent = `Showing ${products.length} product${products.length !== 1 ? 's' : ''}`;

  renderPagination(products, totalPages);
}

function renderPagination(products, totalPages) {
  const el = document.getElementById('pagination');
  if (!el || totalPages <= 1) { if (el) el.innerHTML = ''; return; }
  let html = '';
  if (currentPage > 1) html += `<button onclick="gotoPage(${currentPage - 1}, event)">‹ Prev</button>`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="${i === currentPage ? 'active' : ''}" onclick="gotoPage(${i}, event)">${i}</button>`;
  }
  if (currentPage < totalPages) html += `<button onclick="gotoPage(${currentPage + 1}, event)">Next ›</button>`;
  el.innerHTML = html;
}

function gotoPage(n, e) {
  currentPage = n;
  applyFilters();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initCollectionPage() {
  setView(3);
}

function setView(cols) {
  currentGridCols = cols;
  const grid = document.getElementById('collectionGrid');
  if (!grid) return;
  grid.className = `products-grid cols-${cols}`;
  [2, 3, 4].forEach(c => {
    const btn = document.getElementById(`gridView${c}`);
    if (btn) btn.classList.toggle('active', c === cols);
  });
}

function filterColor(color) {
  currentColor = currentColor === color ? null : color;
  document.querySelectorAll('.swatch').forEach(s => s.classList.remove('selected'));
  if (currentColor) {
    event.target.classList.add('selected');
  }
  applyFilters();
}

function clearFilters() {
  document.querySelectorAll('input[name="cat"], input[name="fabric"], input[name="occasion"]').forEach(i => i.checked = false);
  const priceDefault = document.querySelector('input[name="price"][value=""]');
  if (priceDefault) priceDefault.checked = true;
  currentColor = null;
  document.querySelectorAll('.swatch').forEach(s => s.classList.remove('selected'));
  const sortEl = document.getElementById('sortSelect');
  if (sortEl) sortEl.value = 'default';
  applyFilters();
}

function renderActiveFilters(cats, fabrics, occasions, price) {
  const el = document.getElementById('activeFilters');
  if (!el) return;
  const tags = [];
  cats.forEach(c => tags.push({ label: c, type: 'cat', value: c }));
  fabrics.forEach(f => tags.push({ label: f, type: 'fabric', value: f }));
  occasions.forEach(o => tags.push({ label: o, type: 'occasion', value: o }));
  if (price) tags.push({ label: '₹' + price.replace('-', '–'), type: 'price', value: price });
  if (currentColor) tags.push({ label: currentColor, type: 'color', value: currentColor });

  el.innerHTML = tags.map(t =>
    `<span class="filter-tag">${t.label} <button onclick="removeFilter('${t.type}','${t.value}')">✕</button></span>`
  ).join('');
}

function removeFilter(type, value) {
  if (type === 'cat' || type === 'fabric' || type === 'occasion') {
    const cb = document.querySelector(`input[name="${type}"][value="${value}"]`);
    if (cb) cb.checked = false;
  } else if (type === 'price') {
    const rb = document.querySelector('input[name="price"][value=""]');
    if (rb) rb.checked = true;
  } else if (type === 'color') {
    currentColor = null;
    document.querySelectorAll('.swatch').forEach(s => s.classList.remove('selected'));
  }
  applyFilters();
}

function toggleFilterSidebar() {
  document.getElementById('filtersSidebar').classList.toggle('open');
}

// ── PRODUCT DETAIL PAGE ───────────────────────────────────────
function loadPDP(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) { document.getElementById('pdpLayout').innerHTML = '<p style="padding:2rem">Product not found.</p>'; return; }
  currentPDPProduct = p;
  currentQty = 1;

  document.title = `${p.name} – TerviesDummy`;
  const breadEl = document.getElementById('pdpBreadcrumb');
  if (breadEl) breadEl.textContent = p.name;

  // Images
  const mainImg = document.getElementById('pdpMainImg');
  mainImg.src = p.images[0];
  mainImg.alt = p.name;
  const thumbsEl = document.getElementById('pdpThumbs');
  thumbsEl.innerHTML = p.images.map((img, i) =>
    `<img src="${img}" alt="${p.name}" class="thumb ${i === 0 ? 'active' : ''}" onclick="setMainImg('${img}', this)"/>`
  ).join('');

  // Badge
  const badgeEl = document.getElementById('pdpBadge');
  badgeEl.textContent = p.badge || '';
  badgeEl.style.display = p.badge ? 'inline' : 'none';

  // Info
  document.getElementById('pdpName').textContent = p.name;

  // Rating
  const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '☆' : '') + '☆'.repeat(5 - Math.ceil(p.rating));
  document.getElementById('pdpRating').innerHTML = `<span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))}</span> <span>${p.rating} (${p.reviews} reviews)</span>`;

  // Price
  const disc = discountPct(p.price, p.originalPrice);
  document.getElementById('pdpPrice').innerHTML = `
    <span class="pdp-current-price">${formatPrice(p.price)}</span>
    ${p.originalPrice > p.price ? `<span class="pdp-orig-price">${formatPrice(p.originalPrice)}</span><span class="pdp-disc">${disc}% off</span>` : ''}
  `;

  document.getElementById('pdpDesc').textContent = p.description;

  // Meta
  const metaEl = document.getElementById('pdpMeta');
  metaEl.innerHTML = `
    <span>Category: <strong>${p.category}</strong></span>
    <span>Fabric: <strong>${p.fabric}</strong></span>
    <span>Occasion: <strong>${p.occasion}</strong></span>
  `;

  // Sizes
  const sizesEl = document.getElementById('sizeOptions');
  sizesEl.innerHTML = p.sizes.map(s =>
    `<button class="size-btn" onclick="selectSize('${s}', this)">${s}</button>`
  ).join('');

  // Details accordion
  if (p.details) {
    document.getElementById('pdpDetails').innerHTML =
      Object.entries(p.details).map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`).join('');
  }

  // Wishlist state
  updatePDPWishBtn();

  // Related
  const related = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
  const relEl = document.getElementById('relatedGrid');
  if (relEl) relEl.innerHTML = related.map(productCard).join('');
}

function setMainImg(src, thumbEl) {
  document.getElementById('pdpMainImg').src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}

function selectSize(size, btn) {
  currentSize = size;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function changeQty(dir) {
  currentQty = Math.max(1, currentQty + dir);
  const el = document.getElementById('pdpQty');
  if (el) el.textContent = currentQty;
}

function addToPDPCart() {
  if (!currentPDPProduct) return;
  const size = currentSize || currentPDPProduct.sizes[0];
  for (let i = 0; i < currentQty; i++) addToCartById(currentPDPProduct.id, size);
  showToast(`${currentPDPProduct.name} added to cart!`);
}

function buyNow() {
  addToPDPCart();
  location.href = 'checkout.html';
}

function toggleWishFromPDP() {
  if (!currentPDPProduct) return;
  toggleWish(currentPDPProduct.id);
  updatePDPWishBtn();
}

function updatePDPWishBtn() {
  if (!currentPDPProduct) return;
  const inWish = wishlist.includes(currentPDPProduct.id);
  const btn = document.getElementById('pdpWishBtn');
  const action = document.getElementById('pdpWishAction');
  if (btn) btn.textContent = inWish ? '♥' : '♡';
  if (action) { action.textContent = inWish ? '♥ Wishlisted' : '♡ Wishlist'; action.classList.toggle('active', inWish); }
}

function toggleAcc(btn) {
  const body = btn.nextElementSibling;
  const span = btn.querySelector('span');
  const isOpen = body.style.display === 'block';
  document.querySelectorAll('.acc-body').forEach(b => b.style.display = 'none');
  document.querySelectorAll('.acc-head span').forEach(s => s.textContent = '+');
  if (!isOpen) { body.style.display = 'block'; span.textContent = '−'; }
}

// ── CART ──────────────────────────────────────────────────────
function addToCart(id) {
  addToCartById(id, null);
  showToast('Added to cart!');
}

function addToCartById(id, size) {
  const existing = cart.find(c => c.id === id && c.size === (size || 'Default'));
  if (existing) { existing.qty++; }
  else { cart.push({ id, size: size || 'Default', qty: 1 }); }
  saveCart();
  updateBadges();
  renderCartSidebar();
}

function removeFromCart(id, size) {
  cart = cart.filter(c => !(c.id === id && c.size === size));
  saveCart();
  updateBadges();
  renderCartSidebar();
}

function changeCartQty(id, size, dir) {
  const item = cart.find(c => c.id === id && c.size === size);
  if (item) {
    item.qty += dir;
    if (item.qty <= 0) removeFromCart(id, size);
    else { saveCart(); renderCartSidebar(); }
  }
}

function clearCart() {
  cart = [];
  saveCart();
  updateBadges();
  renderCartSidebar();
}

function saveCart() {
  localStorage.setItem('td_cart', JSON.stringify(cart));
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('active');
  renderCartSidebar();
}

function renderCartSidebar() {
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const countEl = document.getElementById('cartCount');
  const badgeEl = document.getElementById('cartBadge');
  const totalEl = document.getElementById('cartTotal');

  const total = cart.reduce((sum, c) => {
    const p = PRODUCTS.find(x => x.id === c.id);
    return sum + (p ? p.price * c.qty : 0);
  }, 0);
  const itemCount = cart.reduce((s, c) => s + c.qty, 0);

  if (countEl) countEl.textContent = itemCount;
  if (badgeEl) badgeEl.textContent = itemCount;
  if (totalEl) totalEl.textContent = formatPrice(total);

  if (!cart.length) {
    if (itemsEl) itemsEl.innerHTML = `<div class="cart-empty"><p>🛍️ Your cart is empty</p><a href="collection.html" class="btn-primary" onclick="toggleCart()">Start Shopping</a></div>`;
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  if (footerEl) footerEl.style.display = 'block';
  if (itemsEl) {
    itemsEl.innerHTML = cart.map(c => {
      const p = PRODUCTS.find(x => x.id === c.id);
      if (!p) return '';
      return `
        <div class="cart-item">
          <a href="product.html?id=${p.id}"><img src="${p.images[0]}" alt="${p.name}"/></a>
          <div class="cart-item-info">
            <a href="product.html?id=${p.id}"><strong>${p.name}</strong></a>
            <span class="cart-item-size">Size: ${c.size}</span>
            <div class="cart-item-bottom">
              <div class="qty-control small">
                <button onclick="changeCartQty(${p.id},'${c.size}',-1)">−</button>
                <span>${c.qty}</span>
                <button onclick="changeCartQty(${p.id},'${c.size}',1)">+</button>
              </div>
              <span class="cart-item-price">${formatPrice(p.price * c.qty)}</span>
              <button class="cart-remove" onclick="removeFromCart(${p.id},'${c.size}')">✕</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

// ── WISHLIST ──────────────────────────────────────────────────
function toggleWish(id, btnEl) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    if (btnEl) { btnEl.textContent = '♡'; btnEl.classList.remove('active'); }
    showToast('Removed from wishlist');
  } else {
    wishlist.push(id);
    if (btnEl) { btnEl.textContent = '♥'; btnEl.classList.add('active'); }
    showToast('Added to wishlist! ♥');
  }
  localStorage.setItem('td_wish', JSON.stringify(wishlist));
  updateBadges();
}

function renderWishlistPage() {
  const grid = document.getElementById('wishlistGrid');
  const empty = document.getElementById('wishlistEmpty');
  const actions = document.getElementById('wishlistActions');
  const countEl = document.getElementById('wishlistCount');
  updateBadges();
  if (!grid) return;
  if (!wishlist.length) {
    grid.innerHTML = '';
    if (empty) empty.style.display = 'block';
    if (actions) actions.style.display = 'none';
    if (countEl) countEl.textContent = '0 items saved';
    return;
  }
  if (empty) empty.style.display = 'none';
  if (actions) actions.style.display = 'block';
  const items = wishlist.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  grid.innerHTML = items.map(productCard).join('');
  if (countEl) countEl.textContent = `${items.length} item${items.length !== 1 ? 's' : ''} saved`;
}

function addAllWishToCart() {
  wishlist.forEach(id => addToCartById(id, null));
  showToast('All wishlist items added to cart!');
}

function clearWishlist() {
  wishlist = [];
  localStorage.setItem('td_wish', JSON.stringify(wishlist));
  updateBadges();
  renderWishlistPage();
  showToast('Wishlist cleared');
}

// ── BADGES ────────────────────────────────────────────────────
function updateBadges() {
  const cartCount = cart.reduce((s, c) => s + c.qty, 0);
  const wishCount = wishlist.length;
  document.querySelectorAll('#cartBadge').forEach(el => el.textContent = cartCount);
  document.querySelectorAll('#wishBadge').forEach(el => el.textContent = wishCount);
}

// ── TOAST ─────────────────────────────────────────────────────
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2800);
}

// ── NEWSLETTER ────────────────────────────────────────────────
function subscribeNewsletter() {
  const inp = document.querySelector('.newsletter-form input');
  if (!inp || !inp.value.includes('@')) { showToast('Please enter a valid email'); return; }
  showToast('Thank you for subscribing! 🎉');
  inp.value = '';
}

// ── CHECKOUT ──────────────────────────────────────────────────
function initCheckout() {
  updateBadges();
  renderCheckoutSummary();

  // Payment option toggling
  document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.pay-opt').forEach(o => o.classList.remove('selected'));
      radio.parentElement.classList.add('selected');
      document.querySelectorAll('.pay-form').forEach(f => f.style.display = 'none');
      const target = document.getElementById(radio.value + 'Form');
      if (target) target.style.display = 'block';
    });
  });

  // Delivery option
  document.querySelectorAll('input[name="delivery"]').forEach(r => {
    r.addEventListener('change', () => {
      document.querySelectorAll('.delivery-opt').forEach(o => o.classList.remove('selected'));
      r.parentElement.classList.add('selected');
      const shipping = document.getElementById('summaryShipping');
      if (shipping) shipping.textContent = r.value === 'express' ? '₹149' : 'FREE';
      updateCheckoutTotal();
    });
  });
}

function renderCheckoutSummary() {
  const el = document.getElementById('checkoutItems');
  const subtotalEl = document.getElementById('summarySubtotal');
  const totalEl = document.getElementById('summaryTotal');
  if (!el) return;
  if (!cart.length) { el.innerHTML = '<p>No items in cart.</p>'; return; }

  let subtotal = 0;
  el.innerHTML = cart.map(c => {
    const p = PRODUCTS.find(x => x.id === c.id);
    if (!p) return '';
    subtotal += p.price * c.qty;
    return `
      <div class="checkout-item">
        <img src="${p.images[0]}" alt="${p.name}"/>
        <div>
          <strong>${p.name}</strong>
          <span>Size: ${c.size} × ${c.qty}</span>
        </div>
        <span>${formatPrice(p.price * c.qty)}</span>
      </div>
    `;
  }).join('');
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (totalEl) totalEl.textContent = formatPrice(subtotal);
}

function updateCheckoutTotal() {
  const subtotalEl = document.getElementById('summarySubtotal');
  const totalEl = document.getElementById('summaryTotal');
  const shippingEl = document.getElementById('summaryShipping');
  const discEl = document.getElementById('summaryDiscount');
  if (!subtotalEl || !totalEl) return;
  const subtotal = cart.reduce((s, c) => {
    const p = PRODUCTS.find(x => x.id === c.id);
    return s + (p ? p.price * c.qty : 0);
  }, 0);
  const shipping = (shippingEl?.textContent === '₹149') ? 149 : 0;
  const discStr = discEl?.textContent?.replace('-₹', '').replace(/,/g, '') || '0';
  const discount = parseInt(discStr) || 0;
  totalEl.textContent = formatPrice(subtotal + shipping - discount);
}

let discountApplied = 0;
function applyCoupon() {
  const code = document.getElementById('couponInput')?.value.trim().toUpperCase();
  const msgEl = document.getElementById('couponMsg');
  const rowEl = document.getElementById('summaryDiscountRow');
  const discEl = document.getElementById('summaryDiscount');

  const coupons = { 'TERVIES10': 0.10, 'WELCOME20': 0.20, 'FESTIVE15': 0.15 };

  if (!code) { if (msgEl) { msgEl.textContent = 'Enter a coupon code'; msgEl.style.color = '#e74c3c'; } return; }
  if (coupons[code]) {
    const subtotal = cart.reduce((s, c) => {
      const p = PRODUCTS.find(x => x.id === c.id);
      return s + (p ? p.price * c.qty : 0);
    }, 0);
    discountApplied = Math.round(subtotal * coupons[code]);
    if (msgEl) { msgEl.textContent = `✓ ${Math.round(coupons[code] * 100)}% discount applied!`; msgEl.style.color = '#27ae60'; }
    if (rowEl) rowEl.style.display = 'flex';
    if (discEl) discEl.textContent = `-${formatPrice(discountApplied)}`;
    updateCheckoutTotal();
  } else {
    if (msgEl) { msgEl.textContent = 'Invalid coupon code'; msgEl.style.color = '#e74c3c'; }
  }
}

let currentStep = 1;
function goStep(n) {
  if (n === 2) {
    const first = document.getElementById('firstName')?.value;
    const last = document.getElementById('lastName')?.value;
    const email = document.getElementById('email')?.value;
    const phone = document.getElementById('phone')?.value;
    const addr = document.getElementById('address')?.value;
    if (!first || !last || !email || !phone || !addr) {
      showToast('Please fill in all required fields'); return;
    }
  }
  if (n === 3) {
    const addr = [
      document.getElementById('firstName')?.value + ' ' + document.getElementById('lastName')?.value,
      document.getElementById('address')?.value,
      document.getElementById('city')?.value + ', ' + document.getElementById('state')?.value + ' – ' + document.getElementById('pin')?.value,
      document.getElementById('phone')?.value
    ].join('\n');
    const confirmAddr = document.getElementById('confirmAddr');
    if (confirmAddr) confirmAddr.innerHTML = addr.split('\n').join('<br/>');

    const confirmItems = document.getElementById('confirmItems');
    if (confirmItems) {
      confirmItems.innerHTML = cart.map(c => {
        const p = PRODUCTS.find(x => x.id === c.id);
        if (!p) return '';
        return `<div class="checkout-item"><img src="${p.images[0]}" alt="${p.name}"/><div><strong>${p.name}</strong><span>${c.size} × ${c.qty}</span></div><span>${formatPrice(p.price * c.qty)}</span></div>`;
      }).join('');
    }
  }

  document.querySelectorAll('.checkout-step-content').forEach(s => s.style.display = 'none');
  document.getElementById(`step${n}`).style.display = 'block';
  document.querySelectorAll('.step').forEach((s, i) => {
    s.classList.toggle('active', i + 1 === n);
    s.classList.toggle('done', i + 1 < n);
  });
  currentStep = n;
}

function placeOrder() {
  if (!cart.length) { showToast('Your cart is empty!'); return; }
  const orderNum = '#TD' + Math.random().toString(36).substr(2, 8).toUpperCase();
  document.getElementById('orderNumber').textContent = orderNum;
  cart = [];
  saveCart();
  updateBadges();
  document.querySelectorAll('.checkout-step-content').forEach(s => s.style.display = 'none');
  document.getElementById('orderSuccess').style.display = 'block';
  document.querySelectorAll('.step').forEach(s => { s.classList.add('done'); s.classList.remove('active'); });
}
