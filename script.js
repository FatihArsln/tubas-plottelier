let cart = [];
let currentCategory = null;
const CONTACT_EMAIL = "service_7ke1md3@live.de";
const WHATSAPP_NUMBER = "905388343974";

const CATEGORIES = [
  { id: "taschen", label: "Taschen", exampleId: 1 },
  { id: "textilien", label: "Textilien", exampleId: 18 },
  { id: "geschenke", label: "Geschenke", exampleId: 31 },
  { id: "events", label: "Events", exampleId: 50 },
  { id: "aufkleber", label: "Aufkleber", exampleId: 56, priceHint: "ab 9,90 €", blurb: "Auto- und Wandaufkleber nach Maß zum Selbstanbringen. Ein einfacher Schriftzug samt Entwurf ist inklusive." }
];

const STICKER_TIERS = {
  auto: [
    { max: 20, cents: 990 },
    { max: 30, cents: 1290 },
    { max: 50, cents: 1690 },
    { max: 80, cents: 2290 }
  ],
  wand: [
    { max: 40, cents: 1490 },
    { max: 60, cents: 1890 },
    { max: 100, cents: 2490 },
    { max: 150, cents: 3490 }
  ]
};

function init() {
  document.querySelectorAll("#whatsappDirectBtn, a.js-whatsapp").forEach(link => {
    link.href = "https://wa.me/" + WHATSAPP_NUMBER;
  });
  mountHeroSlides();
  setupSlideshow();
  renderCategoryBar();
  setupEventListeners();
  updateCartDisplay();
  const start = location.hash.replace(/^#/, "");
  if (CATEGORIES.some(category => category.id === start)) {
    history.replaceState({ view: "category", category: start }, "", "#" + start);
    openCategory(start, { historyMode: "none" });
  } else {
    history.replaceState({ view: "overview" }, "", location.pathname + location.search);
    showOverview({ historyMode: "none" });
    if (start === "anfrage" || start === "bestellung" || start === "faq") {
      document.getElementById(start)?.scrollIntoView();
    }
  }
}

function setupSlideshow() {
  const root = document.getElementById("heroSlideshow");
  const dots = document.getElementById("heroDots");
  const pauseBtn = document.getElementById("heroPause");
  if (!root || !dots || !pauseBtn) return;
  const slides = [...root.querySelectorAll(".hero-slide")];
  if (slides.length < 2) return;
  let index = Math.max(0, slides.findIndex(slide => slide.classList.contains("is-active")));
  let timer = null;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let paused = reduce;

  slides.forEach((slide, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "hero-dot";
    dot.setAttribute("aria-label", "Bild " + (i + 1) + " von " + slides.length);
    dot.addEventListener("click", () => show(i));
    dots.append(dot);
  });

  function show(next) {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle("is-active", active);
      slide.toggleAttribute("aria-hidden", !active);
      if (active) ensureSlide(slide);
    });
    [...dots.children].forEach((dot, i) => {
      if (i === index) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
    if (timer) restart();
  }

  function stop() {
    clearInterval(timer);
    timer = null;
  }

  function start() {
    if (paused || reduce) return;
    stop();
    timer = setInterval(() => show(index + 1), 5000);
  }

  function restart() {
    stop();
    start();
  }

  function setPaused(next) {
    paused = next;
    pauseBtn.setAttribute("aria-pressed", paused ? "true" : "false");
    pauseBtn.textContent = paused ? "Weiter" : "Pause";
    if (paused) stop();
    else start();
  }

  document.getElementById("heroPrev")?.addEventListener("click", () => show(index - 1));
  document.getElementById("heroNext")?.addEventListener("click", () => show(index + 1));
  pauseBtn.addEventListener("click", () => setPaused(!paused));
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", () => { if (!root.contains(document.activeElement)) start(); });
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", event => {
    if (!root.contains(event.relatedTarget)) start();
  });
  root.addEventListener("keydown", event => {
    if (lightboxOpen()) return;
    if (event.key === "ArrowRight") { event.preventDefault(); show(index + 1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); show(index - 1); }
  });
  const stage = root.querySelector(".hero-slides");
  if (stage) {
    stage.tabIndex = 0;
    stage.setAttribute("role", "button");
    stage.setAttribute("aria-label", "Großansicht des Bildes");
    const openHero = () => openLightbox({
      images: slides.map(slideJpg),
      alts: slides.map(slide => slide.querySelector("img")?.alt || slide.dataset.alt || ""),
      name: slides[index].querySelector("img")?.alt || slides[index].dataset.alt || "",
      index: index
    }, stage);
    stage.addEventListener("click", openHero);
    stage.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openHero();
      }
    });
  }
  show(index);
  if (reduce) setPaused(true);
  else start();
}

const HERO_EXTRAS = [
  { src: "img/IMG-20251108-WA0006.jpg", alt: "Personalisierte Jutetasche mit Initiale und Namen" },
  { src: "img/IMG-20251108-WA0012.jpg", alt: "T-Shirt mit individuellem Plot-Motiv" },
  { src: "img/IMG-20251108-WA0035.jpg", alt: "Schmuckkästchen mit Blumenmotiv" }
];

function slideJpg(slide) {
  const image = slide.querySelector ? slide.querySelector("img") : null;
  return (image && image.getAttribute("src")) || slide.dataset.src || "";
}

function ensureSlide(picture) {
  if (!picture || picture.querySelector("img") || !picture.dataset.src) return;
  const src = picture.dataset.src;
  const source = document.createElement("source");
  source.type = "image/webp";
  const stem = src.replace(/\.jpe?g$/i, "");
  source.srcset = stem + "-640.webp 640w, " + stem + "-1280.webp 1280w";
  source.sizes = "(max-width: 959px) 92vw, 460px";
  const image = document.createElement("img");
  image.src = src;
  image.alt = picture.dataset.alt || "";
  image.decoding = "async";
  picture.append(source, image);
}

function mountHeroSlides() {
  const stage = document.querySelector("#heroSlideshow .hero-slides");
  if (!stage) return;
  HERO_EXTRAS.forEach(item => {
    const picture = document.createElement("picture");
    picture.className = "hero-slide";
    picture.dataset.src = item.src;
    picture.dataset.alt = item.alt;
    picture.setAttribute("aria-hidden", "true");
    stage.append(picture);
  });
}

function photoElement(src, alt, options) {
  const opts = options || {};
  const picture = document.createElement("picture");
  const source = document.createElement("source");
  source.type = "image/webp";
  const stem = src.replace(/\.jpe?g$/i, "");
  source.srcset = stem + "-640.webp 640w, " + stem + "-1280.webp 1280w";
  source.sizes = opts.sizes || "(max-width: 720px) 92vw, 320px";
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt || "";
  image.decoding = "async";
  image.loading = opts.eager ? "eager" : "lazy";
  if (opts.className) image.className = opts.className;
  picture.append(source, image);
  return picture;
}

function getProductImages(product) {
  if (product.images && product.images.length) return product.images;
  if (product.image) return [product.image];
  return [];
}

function formatPrice(value) {
  const product = value && typeof value === "object" ? value : { price: value };
  if (typeof product.price !== "number") return "auf Anfrage";
  const amount = product.price.toFixed(2).replace(".", ",") + " €";
  const text = (product.priceFrom ? "ab " : "") + amount;
  return product.priceNote ? text + " " + product.priceNote : text;
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

function renderCategoryBar() {
  const nav = document.getElementById("kategorien");
  if (!nav) return;
  nav.replaceChildren();
  CATEGORIES.forEach(category => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-link";
    button.dataset.category = category.id;
    button.append(element("span", "category-name", category.label));
    if (category.priceHint) button.append(element("span", "category-price", category.priceHint));
    button.addEventListener("click", () => {
      if (currentCategory !== category.id) openCategory(category.id, { historyMode: "push", focusBack: false });
    });
    nav.append(button);
  });
}

function markCategory(id) {
  document.querySelectorAll(".category-link").forEach(button => {
    const active = button.dataset.category === id;
    if (active) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  });
  if (!id) return;
  document.querySelector('.category-link[data-category="' + id + '"]')?.scrollIntoView({ inline: "nearest", block: "nearest" });
}

function stickerMark(className) {
  const wrap = element("div", className);
  wrap.setAttribute("aria-hidden", "true");
  wrap.append(element("span", "sticker-glyph"));
  return wrap;
}

function formatEuro(cents) {
  const abs = Math.abs(cents);
  const euros = Math.floor(abs / 100);
  const rest = String(abs % 100).padStart(2, "0");
  return (cents < 0 ? "-" : "") + euros + "," + rest + " €";
}

function parseCm(value) {
  const match = String(value || "").trim().replace(",", ".").match(/^\d+(?:\.\d+)?/);
  if (!match) return null;
  const number = Number(match[0]);
  if (!Number.isFinite(number) || number <= 0 || number > 1000) return null;
  return number;
}

function formatCm(value) {
  const rounded = Math.round(value * 10) / 10;
  return String(rounded).replace(".", ",") + " cm";
}

function cmFieldText(value) {
  const trimmed = String(value || "").trim();
  if (!trimmed) return "—";
  return /cm\s*$/i.test(trimmed) ? trimmed : trimmed + " cm";
}

function textLineCount(value) {
  return String(value || "").split(/\r?\n/).map(line => line.trim()).filter(Boolean).length;
}

function extraColorCount(value) {
  const parts = String(value || "").trim().split(/\s*(?:,|;|\/|\bund\b)\s*/i).map(part => part.trim()).filter(Boolean);
  if (parts.length < 2 || parts.some(part => part.length > 24)) return 0;
  return parts.length - 1;
}

function stickerQuote(input) {
  const type = input.type === "wand" ? "wand" : "auto";
  const width = parseCm(input.width);
  const height = parseCm(input.height);
  const measure = type === "auto"
    ? width
    : (width == null && height == null ? null : Math.max(width || 0, height || 0));
  const extraLines = type === "auto" ? Math.max(0, textLineCount(input.text) - 1) : 0;
  const extraColors = extraColorCount(input.color);
  const design = input.design === "motiv" || input.design === "datei" ? input.design : "schrift";
  const film = input.film === "reflex" || input.film === "glitzer" ? input.film : "standard";
  const limit = type === "auto" ? 80 : 150;

  if (measure != null && measure > limit) {
    return {
      kind: "request",
      label: "auf Anfrage",
      parts: [],
      note: type === "auto"
        ? "Über 80 cm Breite gibt es keinen Staffelpreis. Den Preis bekommst du auf Anfrage, vor der Fertigung."
        : "Über 150 cm an der größeren Seite gibt es keinen Staffelpreis. Den Preis bekommst du auf Anfrage, vor der Fertigung."
    };
  }

  const tiers = STICKER_TIERS[type];
  const tier = measure == null ? tiers[0] : tiers.find(item => measure <= item.max);
  const parts = [(measure == null ? "Startpreis bis " : "Staffel bis ") + tier.max + " cm: " + formatEuro(tier.cents)];
  let cents = tier.cents;
  if (extraLines) {
    const add = extraLines * 200;
    cents += add;
    parts.push(extraLines + (extraLines === 1 ? " weitere Textzeile: " : " weitere Textzeilen: ") + formatEuro(add));
  }
  if (extraColors) {
    const add = extraColors * 690;
    cents += add;
    parts.push(extraColors + (extraColors === 1 ? " Zusatzfarbe: " : " Zusatzfarben: ") + formatEuro(add));
  }
  if (measure != null && film !== "standard") {
    const add = measure <= (type === "auto" ? 50 : 100) ? 490 : 790;
    cents += add;
    parts.push("Spezialfolie: " + formatEuro(add));
  }
  if (design === "motiv") {
    cents += 2490;
    parts.push("aufwendiges Motiv oder Logo: " + formatEuro(2490));
  }

  const notes = [];
  if (measure == null) {
    notes.push(type === "auto"
      ? "Ohne Breite gilt der Startpreis der Autostaffel."
      : "Ohne Maß gilt der Startpreis der Wandstaffel.");
  } else if (type === "auto") {
    notes.push("Gerechnet mit " + formatCm(measure) + " Breite.");
  } else {
    notes.push("Gerechnet mit " + formatCm(measure) + ", der größeren Seite.");
  }
  if (measure == null && film !== "standard") {
    notes.push("Spezialfolie kommt je nach Größe noch dazu: 4,90 € oder 7,90 €.");
  }
  if (design === "motiv") {
    notes.push("In den 24,90 € sind 2 Korrekturen enthalten. Jede weitere kostet 10,00 € und fehlt in diesem Richtpreis.");
  }
  notes.push("Unverbindlich. Der endgültige Preis kommt vor der Fertigung.");
  return { kind: "price", label: "ab " + formatEuro(cents), parts: parts, note: notes.join(" ") };
}

function stickerFilmLabel(film) {
  if (film === "reflex") return "Reflexfolie";
  if (film === "glitzer") return "Glitzer oder Hologramm";
  return "Standardfolie";
}

function stickerDesignLabel(design) {
  if (design === "motiv") return "Ja, aufwendiges Motiv oder Logo";
  if (design === "datei") return "Nein, eigene schnittfähige Datei";
  return "Nein, einfacher Schriftzug (inklusive)";
}

function stickerInquiry(input, quote) {
  const lines = [
    "Hallo, ich möchte einen Aufkleber nach Maß anfragen.",
    "",
    "Typ: " + (input.type === "wand" ? "Wandaufkleber" : "Autoaufkleber"),
    "Breite: " + cmFieldText(input.width),
    "Höhe: " + cmFieldText(input.height),
    "Text oder Motiv: " + (String(input.text || "").trim() || "—"),
    "Farbe: " + (String(input.color || "").trim() || "—"),
    "Folie: " + stickerFilmLabel(input.film),
    "Design: " + stickerDesignLabel(input.design),
    "Richtpreis: " + quote.label
  ];
  if (quote.parts.length) lines.push("Zusammensetzung: " + quote.parts.join("; "));
  lines.push("", "Der Richtpreis ist unverbindlich. Versand mit DHL kommt dazu.");
  return lines.join("\n");
}

function readStickerForm(form) {
  const data = new FormData(form);
  return {
    type: data.get("type") === "wand" ? "wand" : "auto",
    width: String(data.get("width") || ""),
    height: String(data.get("height") || ""),
    text: String(data.get("text") || ""),
    color: String(data.get("color") || ""),
    film: String(data.get("film") || "standard"),
    design: String(data.get("design") || "schrift")
  };
}

function stickerControl(tag, id, name, options) {
  const control = document.createElement(tag);
  control.id = id;
  control.name = name;
  if (options.rows) control.rows = options.rows;
  if (options.placeholder) control.placeholder = options.placeholder;
  if (options.inputMode) control.inputMode = options.inputMode;
  if (tag === "input") {
    control.type = "text";
    control.autocomplete = "off";
  }
  return control;
}

function stickerField(id, labelText, control, hint) {
  const wrap = element("div", "sticker-field");
  const label = document.createElement("label");
  label.htmlFor = id;
  label.textContent = labelText;
  wrap.append(label, control);
  if (hint) wrap.append(element("p", "sticker-hint", hint));
  return wrap;
}

function stickerSelect(id, name, options) {
  const select = document.createElement("select");
  select.id = id;
  select.name = name;
  options.forEach(option => {
    const node = document.createElement("option");
    node.value = option.value;
    node.textContent = option.label;
    select.append(node);
  });
  return select;
}

function stickerPriceTable(type, title, caption) {
  const block = element("section", "sticker-table-block");
  const heading = element("h3", null, title);
  heading.id = "stickerTitle-" + type;
  const table = document.createElement("table");
  table.className = "sticker-table";
  table.setAttribute("aria-labelledby", heading.id);
  const headRow = document.createElement("tr");
  ["Größe", "Preis"].forEach(text => {
    const cell = document.createElement("th");
    cell.scope = "col";
    cell.textContent = text;
    headRow.append(cell);
  });
  const head = document.createElement("thead");
  head.append(headRow);
  const body = document.createElement("tbody");
  STICKER_TIERS[type].forEach(tier => {
    const row = document.createElement("tr");
    const size = document.createElement("th");
    size.scope = "row";
    size.textContent = "bis " + tier.max + " cm";
    const price = document.createElement("td");
    price.textContent = "ab " + formatEuro(tier.cents);
    row.append(size, price);
    body.append(row);
  });
  const over = document.createElement("tr");
  const overSize = document.createElement("th");
  overSize.scope = "row";
  overSize.textContent = "darüber";
  const overPrice = document.createElement("td");
  overPrice.textContent = "auf Anfrage";
  over.append(overSize, overPrice);
  body.append(over);
  table.append(head, body);
  block.append(heading, element("p", "sticker-caption", caption), table);
  return block;
}

function stickerRule(title, items) {
  const block = element("div");
  block.append(element("h3", null, title));
  const list = document.createElement("ul");
  items.forEach(item => list.append(element("li", null, item)));
  block.append(list);
  return block;
}

function buildStickerPanel() {
  const panel = element("div", "sticker-panel");
  panel.append(element("p", "sticker-intro", "Einfarbig, inklusive Transferfolie und einer kurzen Anleitung. Alle Preise sind Endpreise in Euro, ohne Umsatzsteuer (Kleinunternehmer nach § 19 UStG). Versand mit DHL kommt dazu."));

  const tables = element("div", "sticker-tables");
  const auto = stickerPriceTable("auto", "Autoaufkleber", "Nach der Breite des Motivs");
  auto.append(element("p", "sticker-footnote", "Jede weitere Textzeile +2,00 €."));
  tables.append(auto, stickerPriceTable("wand", "Wandaufkleber", "Nach der größeren Seite"));
  panel.append(tables);

  const rules = element("div", "sticker-rules");
  rules.append(
    stickerRule("Design", [
      "Einfacher Schriftzug inklusive Entwurf zur Freigabe: inklusive",
      "Aufwendiges Motiv oder Logo: 24,90 € Pauschale, inklusive 2 Korrekturen. Jede weitere Korrektur 10,00 €",
      "Fertige schnittfähige Datei von dir: kein Aufpreis"
    ]),
    stickerRule("Extras", [
      "Jede Zusatzfarbe +6,90 €",
      "Spezialfolie, Reflex oder Glitzer/Hologramm: +4,90 € bis 50 cm beim Auto und bis 100 cm an der Wand, darüber +7,90 €",
      "Chromfolie gibt es nicht"
    ])
  );
  panel.append(rules);

  const form = document.createElement("form");
  form.id = "stickerForm";
  form.className = "sticker-form";
  form.autocomplete = "off";
  form.append(element("h3", null, "Anfrage"));

  const types = document.createElement("fieldset");
  types.className = "sticker-types";
  const legend = document.createElement("legend");
  legend.textContent = "Typ";
  const options = element("div", "sticker-type-options");
  [["auto", "Auto"], ["wand", "Wand"]].forEach((pair, index) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "type";
    input.value = pair[0];
    input.checked = index === 0;
    label.append(input, document.createTextNode(pair[1]));
    options.append(label);
  });
  types.append(legend, options);
  form.append(types);

  const sizeRow = element("div", "sticker-row");
  sizeRow.append(
    stickerField("stickerWidth", "Breite in cm", stickerControl("input", "stickerWidth", "width", { inputMode: "decimal", placeholder: "z. B. 25" })),
    stickerField("stickerHeight", "Höhe in cm", stickerControl("input", "stickerHeight", "height", { inputMode: "decimal", placeholder: "z. B. 8" }))
  );
  form.append(sizeRow, element("p", "sticker-hint", "Beim Auto zählt die Breite für den Richtpreis, bei der Wand die größere Seite."));
  form.append(stickerField("stickerText", "Text oder Motiv", stickerControl("textarea", "stickerText", "text", { rows: 3, placeholder: "Name, Spruch oder Motiv. Jede Zeile zählt." }), "Beim Autoaufkleber kostet jede weitere Textzeile +2,00 €."));
  form.append(stickerField("stickerColor", "Farbe", stickerControl("input", "stickerColor", "color", { placeholder: "z. B. Schwarz" }), "Mehrere Farben mit Komma trennen. Jede weitere Farbe +6,90 €."));
  form.append(stickerField("stickerFilm", "Folie", stickerSelect("stickerFilm", "film", [
    { value: "standard", label: "Standardfolie, inklusive" },
    { value: "reflex", label: "Reflexfolie" },
    { value: "glitzer", label: "Glitzer oder Hologramm" }
  ]), "Chromfolie gibt es nicht."));
  form.append(stickerField("stickerDesign", "Design gewünscht?", stickerSelect("stickerDesign", "design", [
    { value: "schrift", label: "Nein, einfacher Schriftzug (inklusive)" },
    { value: "motiv", label: "Ja, aufwendiges Motiv oder Logo (24,90 €)" },
    { value: "datei", label: "Nein, eigene schnittfähige Datei" }
  ]), "Beim Motiv sind 2 Korrekturen dabei. Jede weitere kostet 10,00 € und steht nicht im Richtpreis."));

  const quote = element("div", "sticker-quote");
  const price = element("p", "sticker-quote-price", "ab 9,90 €");
  price.id = "stickerQuotePrice";
  price.setAttribute("aria-live", "polite");
  const detail = element("p", "sticker-quote-detail");
  detail.id = "stickerQuoteDetail";
  quote.append(element("p", "sticker-quote-kicker", "Richtpreis"), price, detail);

  const actions = element("div", "category-cta sticker-actions");
  const whatsapp = document.createElement("a");
  whatsapp.id = "stickerWhatsapp";
  whatsapp.className = "whatsapp-direct-btn";
  whatsapp.target = "_blank";
  whatsapp.rel = "noopener";
  whatsapp.textContent = "Per WhatsApp anfragen";
  const mail = document.createElement("a");
  mail.id = "stickerMail";
  mail.className = "text-link";
  mail.textContent = "Per E-Mail anfragen";
  actions.append(whatsapp, mail);
  form.append(quote, actions);
  panel.append(form);
  return panel;
}

function bindStickerForm(form) {
  const price = form.querySelector("#stickerQuotePrice");
  const detail = form.querySelector("#stickerQuoteDetail");
  const whatsapp = form.querySelector("#stickerWhatsapp");
  const mail = form.querySelector("#stickerMail");
  const refresh = () => {
    const input = readStickerForm(form);
    const quote = stickerQuote(input);
    const text = stickerInquiry(input, quote);
    price.textContent = quote.label;
    detail.textContent = (quote.parts.length > 1 ? quote.parts.join(", ") + ". " : "") + quote.note;
    whatsapp.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
    mail.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent("Anfrage Aufkleber nach Maß") + "&body=" + encodeURIComponent(text);
  };
  form.addEventListener("input", refresh);
  form.addEventListener("change", refresh);
  form.addEventListener("submit", event => event.preventDefault());
  refresh();
}

function renderOffer(category) {
  const box = document.getElementById("categoryOffer");
  if (!box) return;
  box.replaceChildren();
  if (category.id !== "aufkleber") {
    box.hidden = true;
    return;
  }
  const panel = buildStickerPanel();
  box.append(panel);
  box.hidden = false;
  bindStickerForm(panel.querySelector("#stickerForm"));
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
    const photos = [];
    images.forEach((src, index) => {
      if (typeof src === "string" && src.startsWith("img/")) {
        const alt = (product.alts && product.alts[index]) || product.name;
        frame.append(photoElement(src, alt, { className: "product-img", sizes: "(max-width: 720px) 92vw, 320px" }));
        photos.push({ src: src, alt: alt });
      } else if (src === "sticker") {
        frame.append(stickerMark("product-sticker-mark"));
      } else {
        frame.append(element("span", "product-emoji", String(src)));
      }
    });
    const info = element("div", "product-info");
    info.append(element("h3", "product-name", product.name), element("p", "product-description", product.description));
    if (product.note) info.append(element("p", "product-note", product.note));
    if (!product.isSizeGuide) {
      info.append(element("p", "product-price", formatPrice(product)));
      const add = document.createElement("button");
      add.type = "button";
      add.className = "add-to-cart-btn";
      add.dataset.id = String(product.id);
      add.textContent = "In die Auswahl";
      add.addEventListener("click", () => addToCart(product, add));
      info.append(add);
    }
    const container = element("div", "product-image-container");
    container.append(frame);
    if (photos.length) {
      container.tabIndex = 0;
      container.setAttribute("role", "button");
      container.setAttribute("aria-label", "Großansicht: " + product.name);
      const open = () => openLightbox({
        images: photos.map(photo => photo.src),
        alts: photos.map(photo => photo.alt),
        name: product.name,
        index: 0
      }, container);
      container.addEventListener("click", open);
      container.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          open();
        }
      });
    }
    card.append(container, info);
    grid.append(card);
  });
}

let lightboxItems = [];
let lightboxIndex = 0;
let lightboxOpener = null;

function lightboxOpen() {
  return document.getElementById("imagePopup")?.classList.contains("active");
}

function showLightboxImage() {
  const popupImage = document.getElementById("popupImage");
  const item = lightboxItems[lightboxIndex];
  if (!popupImage || !item) return;
  const image = document.createElement("img");
  image.src = item.src.replace(/\.jpe?g$/i, "-1280.webp");
  image.alt = item.alt;
  image.addEventListener("error", () => {
    if (image.getAttribute("src") !== item.src) image.src = item.src;
  }, { once: true });
  image.className = "popup-img";
  popupImage.replaceChildren(image);
  const multi = lightboxItems.length > 1;
  document.getElementById("prevImageBtn").hidden = !multi;
  document.getElementById("nextImageBtn").hidden = !multi;
}

function openLightbox(detail, opener) {
  const popup = document.getElementById("imagePopup");
  if (!popup) return;
  const items = (detail.images || [])
    .map((src, index) => ({ src: src, alt: (detail.alts && detail.alts[index]) || detail.name || "" }))
    .filter(item => typeof item.src === "string" && item.src.startsWith("img/"));
  if (!items.length) return;
  lightboxItems = items;
  lightboxIndex = Math.min(Math.max(detail.index || 0, 0), items.length - 1);
  lightboxOpener = opener || null;
  document.getElementById("popupProductName").textContent = detail.name || items[lightboxIndex].alt;
  showLightboxImage();
  popup.classList.add("active");
  document.body.classList.add("popup-open");
  document.getElementById("closeLightboxBtn")?.focus();
}

function closeLightbox() {
  const popup = document.getElementById("imagePopup");
  popup?.classList.remove("active");
  document.body.classList.remove("popup-open");
  document.getElementById("popupImage")?.replaceChildren();
  lightboxItems = [];
  if (lightboxOpener) lightboxOpener.focus();
  lightboxOpener = null;
}

function stepLightbox(delta) {
  if (lightboxItems.length < 2) return;
  lightboxIndex = (lightboxIndex + delta + lightboxItems.length) % lightboxItems.length;
  showLightboxImage();
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
  document.getElementById("categoryLead").textContent = category.blurb || ("Alle " + countText + " aus diesem Bereich.");
  renderOffer(category);
  renderProducts(list);
  markCategory(id);
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
  markCategory(null);
  document.getElementById("uebersicht").hidden = false;
  document.getElementById("kategorie").hidden = true;
  document.getElementById("productsGrid")?.replaceChildren();
  if (settings.historyMode === "push") {
    history.pushState({ view: "overview" }, "", location.pathname + location.search);
  }
  if (returnTo) document.querySelector('.category-link[data-category="' + returnTo + '"]')?.focus();
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
    document.getElementById("cartNotice").hidden = true;
    document.getElementById("requestButtons").hidden = true;
    document.getElementById("clearCartBtn").hidden = true;
  } else {
    items.replaceChildren();
    cart.forEach(item => {
      const row = element("div", "cart-item");
      const info = element("div", "cart-item-info");
      info.append(
        element("div", "cart-item-name", item.name),
        element("div", "cart-item-price", formatPrice(item) + " × " + (item.quantity || 1))
      );
      row.append(info);
      items.append(row);
    });
    document.getElementById("cartNotice").hidden = false;
    document.getElementById("requestButtons").hidden = false;
    document.getElementById("clearCartBtn").hidden = false;
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
  document.getElementById("closeLightboxBtn")?.addEventListener("click", closeLightbox);
  document.getElementById("popupBackground")?.addEventListener("click", closeLightbox);
  document.getElementById("prevImageBtn")?.addEventListener("click", () => stepLightbox(-1));
  document.getElementById("nextImageBtn")?.addEventListener("click", () => stepLightbox(1));
  document.addEventListener("keydown", event => {
    if (lightboxOpen()) {
      if (event.key === "Escape") closeLightbox();
      else if (event.key === "ArrowRight") { event.preventDefault(); stepLightbox(1); }
      else if (event.key === "ArrowLeft") { event.preventDefault(); stepLightbox(-1); }
      return;
    }
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
    const lines = cart.map(item => "- " + item.name + " (" + formatPrice(item) + ") x" + (item.quantity || 1));
    const body = encodeURIComponent("Hallo, ich möchte folgende Artikel anfragen:\n\n" + lines.join("\n") + "\n\nBitte um Rückmeldung zur Personalisierung.");
    window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent("Produktanfrage Plottelier") + "&body=" + body;
  });
  document.getElementById("whatsappRequestBtn")?.addEventListener("click", () => {
    const lines = cart.map(item => "- " + item.name + " (" + formatPrice(item) + ") x" + (item.quantity || 1));
    const text = encodeURIComponent("Hallo, ich möchte folgende Artikel anfragen:\n\n" + lines.join("\n"));
    const popup = window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text, "_blank", "noopener,noreferrer");
    if (popup) popup.opener = null;
  });
}

document.addEventListener("DOMContentLoaded", init);
