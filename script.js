let cart = [];
let currentCategory = null;
const CONTACT_EMAIL = "service_7ke1md3@live.de";
const WHATSAPP_NUMBER = "905388343974";

const CATEGORIES = [
  { id: "taschen", label: "Taschen", exampleId: 1 },
  { id: "textilien", label: "Textilien", exampleId: 18 },
  { id: "geschenke", label: "Geschenke", exampleId: 31 },
  { id: "events", label: "Events", exampleId: 50 }
];

function init() {
  const wa = document.getElementById("whatsappDirectBtn");
  if (wa) wa.href = "https://wa.me/" + WHATSAPP_NUMBER;
  renderEntries();
  setupEventListeners();
  updateCartDisplay();
  const start = location.hash.replace(/^#/, "");
  if (CATEGORIES.some(category => category.id === start)) {
    history.replaceState({ view: "category", category: start }, "", "#" + start);
    openCategory(start, { historyMode: "none" });
  } else {
    history.replaceState({ view: "overview" }, "", location.pathname + location.search);
    showOverview({ historyMode: "none" });
    if (start === "anfrage") document.getElementById("anfrage")?.scrollIntoView();
  }
}

function getProductImages(product) {
  if (product.images && product.images.length) return product.images;
  if (product.image) return [product.image];
  return [];
}

function formatPrice(price) {
  if (typeof price !== "number") return "auf Anfrage";
  return price.toFixed(2) + " €";
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function productsIn(categoryId) {
  return products
    .filter(product => product.category === categoryId)
    .sort((a, b) => (a.isSizeGuide ? -1 : 0) - (b.isSizeGuide ? -1 : 0) || a.id - b.id);
}

function renderEntries() {
  const grid = document.getElementById("entryGrid");
  if (!grid || typeof products === "undefined") return;
  grid.replaceChildren();
  CATEGORIES.forEach(category => {
    const product = products.find(item => item.id === category.exampleId);
    if (!product) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "entry-card";
    button.dataset.category = category.id;
    const images = getProductImages(product);
    const source = images.find(src => typeof src === "string" && src.startsWith("img/"));
    if (source) {
      const image = document.createElement("img");
      image.src = source;
      image.alt = "";
      button.append(image);
    }
    const body = element("span", "entry-body");
    body.append(
      element("span", "entry-kicker", category.label),
      element("span", "entry-name", product.name),
      element("span", "entry-price", formatPrice(product.price)),
      element("span", "entry-action", "Kategorie öffnen")
    );
    button.append(body);
    button.addEventListener("click", () => openCategory(category.id, { historyMode: "push", focusBack: true }));
    grid.append(button);
  });
}

function renderSwitch(activeId) {
  const nav = document.getElementById("categorySwitch");
  if (!nav) return;
  nav.replaceChildren();
  CATEGORIES.forEach(category => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "switch-btn";
    button.textContent = category.label;
    button.dataset.category = category.id;
    if (category.id === activeId) button.setAttribute("aria-current", "true");
    button.addEventListener("click", () => {
      if (category.id !== currentCategory) openCategory(category.id, { historyMode: "push", focusBack: false });
    });
    nav.append(button);
  });
}

function renderProducts(list) {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;
  grid.replaceChildren();
  list.forEach(product => {
    const card = document.createElement("article");
    card.className = product.isSizeGuide ? "product-card size-guide-card" : "product-card";
    const images = getProductImages(product);
    const frame = element("div", images.length > 1 ? "product-image product-image-natural" : "product-image");
    images.forEach((src, index) => {
      if (typeof src === "string" && src.startsWith("img/")) {
        const image = document.createElement("img");
        image.src = src;
        image.alt = (product.alts && product.alts[index]) || product.name;
        image.className = "product-img";
        frame.append(image);
      } else {
        frame.append(element("span", "product-emoji", String(src)));
      }
    });
    const info = element("div", "product-info");
    info.append(element("h3", "product-name", product.name), element("p", "product-description", product.description));
    if (!product.isSizeGuide) {
      info.append(element("p", "product-price", formatPrice(product.price)));
      const add = document.createElement("button");
      add.type = "button";
      add.className = "add-to-cart-btn";
      add.dataset.id = String(product.id);
      add.textContent = "In die Auswahl";
      add.addEventListener("click", () => addToCart(product, add));
      info.append(add);
    }
    card.append(element("div", "product-image-container"), info);
    card.querySelector(".product-image-container").append(frame);
    grid.append(card);
  });
}

function addToCart(product, button) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.quantity += 1;
  else cart.push(Object.assign({}, product, { quantity: 1 }));
  updateCartDisplay();
  if (!button) return;
  button.classList.add("added");
  button.textContent = "Hinzugefügt";
  setTimeout(() => {
    button.classList.remove("added");
    button.textContent = "In die Auswahl";
  }, 1200);
}

function openCategory(id, options) {
  const settings = options || {};
  const category = CATEGORIES.find(item => item.id === id);
  if (!category || typeof products === "undefined") return;
  const list = productsIn(id);
  currentCategory = id;
  document.getElementById("uebersicht").hidden = true;
  document.getElementById("kategorie").hidden = false;
  document.getElementById("categoryTitle").textContent = category.label;
  const countText = list.length === 1 ? "1 Beispiel" : list.length + " Beispiele";
  document.getElementById("categoryLead").textContent = "Alle " + countText + " aus diesem Bereich.";
  renderSwitch(id);
  renderProducts(list);
  if (settings.historyMode === "push") {
    history.pushState({ view: "category", category: id }, "", "#" + id);
  }
  window.scrollTo(0, 0);
  if (settings.focusBack) document.getElementById("backToOverview")?.focus();
}

function showOverview(options) {
  const settings = options || {};
  const returnTo = settings.focusCategory ? currentCategory : null;
  currentCategory = null;
  document.getElementById("uebersicht").hidden = false;
  document.getElementById("kategorie").hidden = true;
  document.getElementById("productsGrid")?.replaceChildren();
  if (settings.historyMode === "push") {
    history.pushState({ view: "overview" }, "", location.pathname + location.search);
  }
  if (returnTo) document.querySelector('.entry-card[data-category="' + returnTo + '"]')?.focus();
  else window.scrollTo(0, 0);
}

function updateCartDisplay() {
  const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const el = document.getElementById("cartCount");
  const button = document.getElementById("cartHeaderBtn");
  if (el) el.textContent = String(count);
  if (button) {
    button.classList.toggle("has-items", count > 0);
    const piece = count === 1 ? "Stück" : "Stücke";
    button.setAttribute("aria-label", "Deine Auswahl, " + count + " " + piece);
  }
}

function openCart() {
  const popup = document.getElementById("cartPopup");
  const items = document.getElementById("cartItems");
  if (!popup || !items) return;
  if (!cart.length) {
    items.replaceChildren(element("p", "empty-cart", "Deine Auswahl ist leer"));
    document.getElementById("cartNotice").style.display = "none";
    document.getElementById("requestButtons").style.display = "none";
    document.getElementById("clearCartBtn").style.display = "none";
  } else {
    items.replaceChildren();
    cart.forEach(item => {
      const row = element("div", "cart-item");
      const info = element("div", "cart-item-info");
      info.append(
        element("div", "cart-item-name", item.name),
        element("div", "cart-item-price", formatPrice(item.price) + " × " + (item.quantity || 1))
      );
      row.append(info);
      items.append(row);
    });
    document.getElementById("cartNotice").style.display = "block";
    document.getElementById("requestButtons").style.display = "flex";
    document.getElementById("clearCartBtn").style.display = "block";
  }
  popup.classList.add("active");
  document.getElementById("closeCartBtn")?.focus();
}

function closeCart() {
  document.getElementById("cartPopup")?.classList.remove("active");
  document.getElementById("cartHeaderBtn")?.focus();
}

function setupEventListeners() {
  document.getElementById("homeLink")?.addEventListener("click", event => {
    event.preventDefault();
    if (currentCategory) showOverview({ historyMode: "push" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.getElementById("backToOverview")?.addEventListener("click", () => {
    showOverview({ historyMode: "push", focusCategory: true });
  });
  window.addEventListener("popstate", event => {
    const state = event.state;
    if (state && state.view === "category") openCategory(state.category, { historyMode: "none" });
    else showOverview({ historyMode: "none" });
  });
  document.getElementById("cartHeaderBtn")?.addEventListener("click", openCart);
  document.getElementById("closeCartBtn")?.addEventListener("click", closeCart);
  document.getElementById("cartPopupBackground")?.addEventListener("click", closeCart);
  document.getElementById("clearCartBtn")?.addEventListener("click", () => {
    cart = [];
    updateCartDisplay();
    openCart();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && document.getElementById("cartPopup")?.classList.contains("active")) {
      closeCart();
    }
  });
  document.getElementById("contactForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("contactName")?.value || "";
    const email = document.getElementById("contactEmail")?.value || "";
    const msg = document.getElementById("contactMessage")?.value || "";
    const subject = encodeURIComponent("Anfrage von " + name);
    const body = encodeURIComponent("Name: " + name + "\nE-Mail: " + email + "\n\n" + msg);
    window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
  });
  document.getElementById("sendRequestBtn")?.addEventListener("click", () => {
    const lines = cart.map(item => "- " + item.name + " (" + formatPrice(item.price) + ") x" + (item.quantity || 1));
    const body = encodeURIComponent("Hallo, ich möchte folgende Artikel anfragen:\n\n" + lines.join("\n") + "\n\nBitte um Rückmeldung zur Personalisierung.");
    window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent("Produktanfrage Plottelier") + "&body=" + body;
  });
  document.getElementById("whatsappRequestBtn")?.addEventListener("click", () => {
    const lines = cart.map(item => "- " + item.name + " (" + formatPrice(item.price) + ") x" + (item.quantity || 1));
    const text = encodeURIComponent("Hallo, ich möchte folgende Artikel anfragen:\n\n" + lines.join("\n"));
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text, "_blank", "noopener");
  });
}

document.addEventListener("DOMContentLoaded", init);
