let cart = [];
let activeCategory = null;
const CONTACT_EMAIL = "service_7ke1md3@live.de";
const WHATSAPP_NUMBER = "905388343974";

function init() {
  setupNavigation();
  setupFilters();
  updateCartDisplay();
  setupEventListeners();
  showPage("home");
  renderProducts();
}

function showPage(page) {
  document.querySelectorAll(".page-section").forEach(s => s.classList.remove("active"));
  const el = document.getElementById(page);
  if (el) el.classList.add("active");
  document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
  if (page === "home") document.getElementById("homeLink")?.classList.add("active");
  if (page === "shop") document.getElementById("shopLinkNav")?.classList.add("active");
  if (page === "shop") renderProducts();
}

function setupNavigation() {
  document.getElementById("homeLink")?.addEventListener("click", e => { e.preventDefault(); showPage("home"); });
  document.getElementById("shopLinkNav")?.addEventListener("click", e => { e.preventDefault(); showPage("shop"); });
  document.getElementById("shopLink")?.addEventListener("click", e => { e.preventDefault(); showPage("shop"); });
}

function setupFilters() {
  document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      const category = button.getAttribute("data-category");
      activeCategory = category === "all" ? null : category;
      renderProducts();
    });
  });
}

function getProductImages(product) {
  if (product.images && product.images.length) return product.images;
  if (product.image) return [product.image];
  return [];
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatPrice(price) {
  if (typeof price !== "number") return "auf Anfrage";
  return price.toFixed(2) + " €";
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid || typeof products === "undefined") return;
  let list = activeCategory ? products.filter(p => p.category === activeCategory) : products.slice();
  list.sort((a,b) => (a.isSizeGuide ? -1 : 0) - (b.isSizeGuide ? -1 : 0) || a.id - b.id);
  grid.innerHTML = "";
  list.forEach(product => {
    const card = document.createElement("div");
    card.className = product.isSizeGuide ? "product-card size-guide-card" : "product-card";
    const imgs = getProductImages(product);
    const first = imgs[0] || "";
    const safeName = escapeHtml(product.name);
    const safeDescription = escapeHtml(product.description);
    let imageHTML = "";
    if (first.startsWith("img/")) {
      imageHTML = '<img src="' + escapeHtml(first) + '" alt="' + safeName + '" class="product-img">';
    } else {
      imageHTML = escapeHtml(first);
    }
    if (product.isSizeGuide) {
      card.innerHTML = '<div class="product-image-container" data-product-id="' + product.id + '"><div class="product-image">' + imageHTML + '</div></div><div class="product-info"><div class="product-name">' + safeName + '</div><div class="product-description">' + safeDescription + '</div></div>';
    } else {
      card.innerHTML = '<div class="product-image-container" data-product-id="' + product.id + '"><div class="product-image">' + imageHTML + '</div></div><div class="product-info"><div class="product-name">' + safeName + '</div><div class="product-description">' + safeDescription + '</div><div class="product-price">' + escapeHtml(formatPrice(product.price)) + '</div><button class="add-to-cart-btn" type="button" data-id="' + product.id + '">In die Auswahl</button></div>';
    }
    grid.appendChild(card);
  });
  grid.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"), 10);
      const product = products.find(p => p.id === id);
      if (!product) return;
      const existing = cart.find(i => i.id === id);
      if (existing) existing.quantity += 1; else cart.push(Object.assign({}, product, { quantity: 1 }));
      updateCartDisplay();
      btn.classList.add("added");
      btn.textContent = "Hinzugefügt";
      setTimeout(() => { btn.classList.remove("added"); btn.textContent = "In die Auswahl"; }, 1200);
    });
  });
}

function updateCartDisplay() {
  const count = cart.reduce((s,i) => s + (i.quantity||1), 0);
  const el = document.getElementById("cartCount");
  if (el) el.textContent = String(count);
}

function setupEventListeners() {
  document.getElementById("cartHeaderBtn")?.addEventListener("click", openCart);
  document.getElementById("closeCartBtn")?.addEventListener("click", closeCart);
  document.getElementById("cartPopupBackground")?.addEventListener("click", closeCart);
  document.getElementById("clearCartBtn")?.addEventListener("click", () => { cart = []; updateCartDisplay(); openCart(); });
  document.getElementById("contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName")?.value || "";
    const email = document.getElementById("contactEmail")?.value || "";
    const msg = document.getElementById("contactMessage")?.value || "";
    const subject = encodeURIComponent("Anfrage von " + name);
    const body = encodeURIComponent("Name: " + name + "\nE-Mail: " + email + "\n\n" + msg);
    window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
  });
  const wa = document.getElementById("whatsappDirectBtn");
  if (wa) wa.href = "https://wa.me/" + WHATSAPP_NUMBER;
  document.getElementById("sendRequestBtn")?.addEventListener("click", () => {
    const lines = cart.map(i => "- " + i.name + " (" + formatPrice(i.price) + ") x" + (i.quantity||1));
    const body = encodeURIComponent("Hallo, ich möchte folgende Artikel anfragen:\n\n" + lines.join("\n") + "\n\nBitte um Rückmeldung zur Personalisierung.");
    window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent("Produktanfrage Plottelier") + "&body=" + body;
  });
  document.getElementById("whatsappRequestBtn")?.addEventListener("click", () => {
    const lines = cart.map(i => "- " + i.name + " (" + formatPrice(i.price) + ") x" + (i.quantity||1));
    const text = encodeURIComponent("Hallo, ich möchte folgende Artikel anfragen:\n\n" + lines.join("\n"));
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text, "_blank");
  });
}

function openCart() {
  const popup = document.getElementById("cartPopup");
  const items = document.getElementById("cartItems");
  if (!popup || !items) return;
  if (!cart.length) {
    items.innerHTML = '<p class="empty-cart">Ihr Warenkorb ist leer</p>';
    document.getElementById("cartNotice").style.display = "none";
    document.getElementById("requestButtons").style.display = "none";
    document.getElementById("clearCartBtn").style.display = "none";
  } else {
    items.innerHTML = cart.map(i => '<div class="cart-item"><div class="cart-item-info"><div class="cart-item-name">' + escapeHtml(i.name) + '</div><div class="cart-item-price">' + escapeHtml(formatPrice(i.price)) + " × " + (i.quantity||1) + '</div></div></div>').join("");
    document.getElementById("cartNotice").style.display = "block";
    document.getElementById("requestButtons").style.display = "flex";
    document.getElementById("clearCartBtn").style.display = "block";
  }
  popup.classList.add("active");
}

function closeCart() {
  document.getElementById("cartPopup")?.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", init);
