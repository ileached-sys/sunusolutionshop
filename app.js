/**
 * SUNU SOLUTION (@sunusolutionshop) - BOUTIQUE & GESTION DE VENTE
 * Rayons : Téléphonie, Accessoires & Électroménager
 * Dalifort-Foirail, Dakar, Sénégal • Tél: +221 76 314 33 33 / +221 78 257 99 99
 */

// ==========================================================================
// 1. DATA INITIALIZATION & LOCALSTORAGE MANAGEMENT
// ==========================================================================

const DEFAULT_PRODUCTS = [
  // ----------------- RAYON TÉLÉPHONIE -----------------
  {
    id: 1,
    name: "Tecno Spark 20 (128 Go + 8 Go RAM)",
    category: "telephonie",
    price: 85000,
    oldPrice: 95000,
    stock: 15,
    badge: "Best Seller SUNU",
    rating: 4.9,
    reviewsCount: 168,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",
    specs: ["128 Go ROM", "8 Go RAM (4+4)", "Batterie 5000 mAh", "Garantie 12 Mois", "Caméra 50 MP"],
    description: "Le best-seller de SUNU SOLUTION : 128 Go de mémoire, 8 Go de RAM, autonomie exceptionnelle et appareil photo 50 Mpx. Garanti 12 mois avec SAV à Dakar."
  },
  {
    id: 2,
    name: "Samsung Galaxy A05 (64 Go / 128 Go)",
    category: "telephonie",
    price: 65000,
    oldPrice: 75000,
    stock: 18,
    badge: "Promo Spéciale",
    rating: 4.8,
    reviewsCount: 134,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=700&q=80",
    specs: ["Écran HD+ 6.7\"", "Batterie 5000 mAh", "Charge 25W", "Appareil 50 Mpx", "Dual SIM"],
    description: "Qualité et fiabilité Samsung avec un grand écran de 6.7 pouces, une batterie de 5000 mAh et une caméra 50 Mpx au meilleur prix chez SUNU SOLUTION."
  },
  {
    id: 3,
    name: "Tecno Spark 40 (128 Go + 8 Go RAM)",
    category: "telephonie",
    price: 115000,
    oldPrice: 130000,
    stock: 9,
    badge: "Nouveau Arrivage",
    rating: 4.9,
    reviewsCount: 82,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80",
    specs: ["Charge Rapide 45W", "Batterie 5200 mAh", "Écran 120Hz", "Norme IP64", "Design Slim"],
    description: "Le dernier modèle Spark 40 avec recharge ultra-rapide 45W, batterie renforcée de 5200 mAh, écran 120Hz ultra-fluide et protection IP64."
  },
  {
    id: 4,
    name: "Samsung Galaxy A15 (128 Go + 6 Go RAM)",
    category: "telephonie",
    price: 105000,
    oldPrice: 120000,
    stock: 11,
    badge: "Best Seller",
    rating: 4.9,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=700&q=80",
    specs: ["Super AMOLED 90Hz", "Triple Caméra 50 MP", "Puce Octa-Core", "Garantie 24 Mois"],
    description: "Écran Super AMOLED éclatant 90Hz, 128 Go de stockage et triple capteur photo ultra-net pour immortaliser tous vos moments."
  },
  {
    id: 5,
    name: "Infinix Hot 40 Pro (256 Go + 8 Go RAM)",
    category: "telephonie",
    price: 110000,
    oldPrice: 125000,
    stock: 8,
    badge: "Promo -15%",
    rating: 4.8,
    reviewsCount: 75,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=700&q=80",
    specs: ["256 Go ROM", "Appareil 108 MP", "Charge Rapide 33W", "Processeur Helio G99"],
    description: "Smartphone gaming et photo haute résolution 108 Mpx avec processeur puissant Helio G99 et mémoire géante de 256 Go."
  },
  {
    id: 6,
    name: "Xiaomi Redmi 13C (128 Go + 6 Go RAM)",
    category: "telephonie",
    price: 80000,
    oldPrice: 92000,
    stock: 14,
    badge: "Promo",
    rating: 4.7,
    reviewsCount: 96,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=700&q=80",
    specs: ["Écran 90Hz 6.74\"", "Capteur 50 MP IA", "Batterie 5000 mAh", "Port USB-C"],
    description: "Design élégant et moderne, batterie longue durée 5000 mAh avec charge rapide et double capteur photo 50 Mpx."
  },
  {
    id: 7,
    name: "iPhone 13 (128 Go - Neuf Scellé)",
    category: "telephonie",
    price: 330000,
    oldPrice: 375000,
    stock: 5,
    badge: "Apple Certifié",
    rating: 4.9,
    reviewsCount: 150,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=700&q=80",
    specs: ["128 Go", "Puce A15 Bionic", "Mode Cinématique 4K", "Écran Super Retina XDR"],
    description: "L'incontournable iPhone 13 d'Apple : autonomie améliorée, puissance de la puce A15 Bionic et enregistrement vidéo cinématographique."
  },
  {
    id: 8,
    name: "iPhone 15 Pro Max (256 Go Titane)",
    category: "telephonie",
    price: 780000,
    oldPrice: 900000,
    stock: 4,
    badge: "Haut de Gamme",
    rating: 5.0,
    reviewsCount: 98,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=700&q=80",
    specs: ["256 Go", "Titane Naturel", "Puce A17 Pro", "Zoom Optique 5x"],
    description: "Le sommet de la technologie avec boîtier en titane ultra-résistant, bouton Action et téléobjectif 5x d'exception."
  },

  // ----------------- RAYON ACCESSOIRES -----------------
  {
    id: 9,
    name: "Écouteurs Sans Fil TWS Pro Bluetooth 5.3",
    category: "accessoires",
    price: 15000,
    oldPrice: 20000,
    stock: 40,
    badge: "Best Seller",
    rating: 4.8,
    reviewsCount: 180,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    specs: ["Bluetooth 5.3", "Réduction de bruit", "Autonomie 24h", "Boîtier tactile"],
    description: "Qualité audio haute fidélité avec basses puissantes, réduction de bruit passive et synchronisation ultra-rapide avec Android & iPhone."
  },
  {
    id: 10,
    name: "Chargeur Rapide 45W Type-C + Câble Original",
    category: "accessoires",
    price: 10000,
    oldPrice: 15000,
    stock: 55,
    badge: "Essentiel",
    rating: 4.9,
    reviewsCount: 220,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
    specs: ["Fast Charge 45W", "Protection Surtension", "Câble Type-C renforcé 1m"],
    description: "Chargeur secteur officiel avec technologie Fast Charge compatible Tecno, Samsung Galaxy, Xiaomi et iPhone."
  },
  {
    id: 11,
    name: "Power Bank 20 000 mAh Fast Charge Double Sortie",
    category: "accessoires",
    price: 18000,
    oldPrice: 25000,
    stock: 28,
    badge: "Best Seller",
    rating: 4.9,
    reviewsCount: 145,
    image: "https://images.unsplash.com/photo-1609592426504-d533604f86d8?auto=format&fit=crop&w=700&q=80",
    specs: ["20 000 mAh Réels", "2x USB + 1x Type-C", "Affichage LED %", "Charge 22.5W"],
    description: "Batterie externe haute capacité permettant jusqu'à 5 à 6 recharges complètes de votre smartphone. Idéal pour les déplacements."
  },
  {
    id: 12,
    name: "Pack Coque Antichoc + 2 Verres Trempés 9H",
    category: "accessoires",
    price: 7500,
    oldPrice: 12000,
    stock: 60,
    badge: "Pack Promo",
    rating: 4.8,
    reviewsCount: 190,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=700&q=80",
    specs: ["Coque silicone antichoc", "Verre trempé 9H", "Protection intégrale 360°"],
    description: "Protection 360 degrés contre les chocs et les rayures disponible pour tous les modèles Tecno, Samsung et iPhone."
  },
  {
    id: 13,
    name: "Smartwatch Ultra Connectée HD (Appels Bluetooth)",
    category: "accessoires",
    price: 22000,
    oldPrice: 30000,
    stock: 16,
    badge: "Exclusivité",
    rating: 4.8,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
    specs: ["Appels & Notifs WhatsApp", "Cardio / SpO2 / Sommeil", "Boîtier Métal", "Autonomie 7j"],
    description: "Montre intelligente complète : répondez directement à vos appels téléphoniques et suivez votre santé au quotidien."
  },

  // ----------------- RAYON ÉLECTROMÉNAGER -----------------
  {
    id: 14,
    name: "Téléviseur Deska 42\" Smart Android Full HD",
    category: "electromenager",
    price: 120000,
    oldPrice: 140000,
    stock: 7,
    badge: "Best Seller SUNU",
    rating: 4.9,
    reviewsCount: 145,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=80",
    specs: ["Smart Android TV", "Écran 42\" Full HD", "Wi-Fi / YouTube / Netflix", "Récepteur Satellite Intégré"],
    description: "Téléviseur intelligent Deska 42 pouces avec Android TV, applications préinstallées (YouTube, Netflix, Prime), Wi-Fi et décodeur intégré."
  },
  {
    id: 15,
    name: "Téléviseur Smart Android 32\" HD Sans Bordure",
    category: "electromenager",
    price: 75000,
    oldPrice: 90000,
    stock: 10,
    badge: "Promo Spéciale",
    rating: 4.8,
    reviewsCount: 98,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=700&q=80",
    specs: ["Écran 32\" HD Frameless", "Smart Android TV", "HDMI & USB Multimédia", "TNT HD Intégrée"],
    description: "Écran LED 32 pouces sans bordure avec connectivité Android TV, idéal pour salon ou chambre avec un son surround immersif."
  },
  {
    id: 16,
    name: "Mini Filtre à Eau de Robinet 5 Couches Charbon Actif",
    category: "electromenager",
    price: 3000,
    oldPrice: 5000,
    stock: 80,
    badge: "Nouveau Arrivage",
    rating: 4.9,
    reviewsCount: 210,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=80",
    specs: ["5 Niveaux de Filtration", "Charbon Actif Purifiant", "Fixation Universelle Robinet", "Élimine Chlore & Rouille"],
    description: "Purificateur d'eau compact à charbon actif pour robinet de cuisine ou salle de bain. Élimine les impuretés, odeurs et bactéries."
  },
  {
    id: 17,
    name: "Mixeur Blender Multifonction 2-en-1 avec Moulin",
    category: "electromenager",
    price: 18500,
    oldPrice: 25000,
    stock: 22,
    badge: "Promo",
    rating: 4.8,
    reviewsCount: 64,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=700&q=80",
    specs: ["Bol 1.5L Incassable", "Lames Inox Renforcées", "Moulin Épices & Café", "Moteur Puissant 500W"],
    description: "Robot mixeur multifonction parfait pour jus frais, smoothies, soupes, et moulin séparé pour moudre café, piment et épices."
  },
  {
    id: 18,
    name: "Fer à Repasser à Vapeur Céramique 2200W",
    category: "electromenager",
    price: 14000,
    oldPrice: 19000,
    stock: 19,
    badge: "Essentiel",
    rating: 4.7,
    reviewsCount: 52,
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=700&q=80",
    specs: ["Puissance 2200W", "Semelle Céramique Glisse Parfaite", "Vapeur Continue & Jet Pressing", "Système Anticalcaire"],
    description: "Repassage rapide et soigné de tous vos vêtements avec débit vapeur haute pression et semelle céramique antiadhésive."
  }
];

const DEFAULT_SALES = [
  {
    id: "CMD-2024-001",
    date: "2024-05-18 14:32",
    customer: "Moussa Diop (Dakar, Médina)",
    phone: "77 654 32 10",
    items: "Tecno Spark 20 128Go (1x), Pack Coque + Verre (1x)",
    total: 92500,
    paymentMethod: "Wave",
    status: "Livré"
  },
  {
    id: "CMD-2024-002",
    date: "2024-05-19 11:15",
    customer: "Aïssatou Ndiaye (Pikine)",
    phone: "76 314 33 33",
    items: "Téléviseur Deska 42\" Smart (1x), Mini Filtre Robinet (1x)",
    total: 123000,
    paymentMethod: "Paiement à la livraison",
    status: "Livré"
  },
  {
    id: "CMD-2024-003",
    date: "2024-05-20 16:40",
    customer: "Ibrahima Sarr (Dalifort)",
    phone: "78 257 99 99",
    items: "Écouteurs TWS Pro (1x), Power Bank 20000mAh (1x)",
    total: 33000,
    paymentMethod: "Orange Money",
    status: "Payé"
  }
];

// App State
let products = [];
let sales = [];
let cart = [];
let currentCategory = "all";
let currentSearch = "";
let currentSort = "featured";
let currentStockFilter = "all";

// Helper Currency Formatter (Francs CFA)
function formatFCFA(amount) {
  if (isNaN(amount) || amount === null || amount === undefined) return "0 FCFA";
  return Math.round(amount).toLocaleString('fr-FR') + " FCFA";
}

// Initialize data from LocalStorage or defaults
function initData() {
  const currencyVersion = localStorage.getItem("sunu_currency_ver");
  
  // If first time or upgraded to Sunu Solution categories, reinit
  if (currencyVersion !== "v4_electromenager") {
    localStorage.removeItem("phonepulse_products");
    localStorage.removeItem("phonepulse_sales");
    localStorage.removeItem("phonepulse_cart");
    localStorage.setItem("sunu_currency_ver", "v4_electromenager");
  }

  const savedProducts = localStorage.getItem("phonepulse_products");
  const savedSales = localStorage.getItem("phonepulse_sales");
  const savedCart = localStorage.getItem("phonepulse_cart");

  products = savedProducts ? JSON.parse(savedProducts) : [...DEFAULT_PRODUCTS];
  sales = savedSales ? JSON.parse(savedSales) : [...DEFAULT_SALES];
  cart = savedCart ? JSON.parse(savedCart) : [];

  saveProducts();
  saveSales();
  saveCart();
}

function saveProducts() {
  localStorage.setItem("phonepulse_products", JSON.stringify(products));
}

function saveSales() {
  localStorage.setItem("phonepulse_sales", JSON.stringify(sales));
}

function saveCart() {
  localStorage.setItem("phonepulse_cart", JSON.stringify(cart));
}

// Normalize categories for backward compatibility
function normalizeCategory(cat) {
  if (cat === "smartphones" || cat === "telephonie") return "telephonie";
  if (cat === "coques" || cat === "chargeurs" || cat === "audio" || cat === "montres" || cat === "accessoires") return "accessoires";
  if (cat === "electromenager" || cat === "maison") return "electromenager";
  return cat;
}

// ==========================================================================
// 2. PRODUCT RENDERING & CATALOG FILTERS
// ==========================================================================

function renderCatalog() {
  const gridContainer = document.getElementById("productsGridContainer");
  const resultsCount = document.getElementById("productResultsCount");
  const emptyState = document.getElementById("noProductsFound");

  if (!gridContainer) return;

  // Filter products
  let filtered = products.filter(prod => {
    const prodCat = normalizeCategory(prod.category);
    // Category filter
    const matchesCategory = (currentCategory === "all") || (prodCat === currentCategory);
    
    // Search query filter
    const q = currentSearch.toLowerCase().trim();
    const matchesSearch = !q || 
      prod.name.toLowerCase().includes(q) || 
      prodCat.toLowerCase().includes(q) ||
      (prod.specs && prod.specs.some(s => s.toLowerCase().includes(q))) ||
      (prod.description && prod.description.toLowerCase().includes(q));

    // Stock / Promo filter
    let matchesStock = true;
    if (currentStockFilter === "in-stock") {
      matchesStock = prod.stock > 0;
    } else if (currentStockFilter === "promo") {
      matchesStock = prod.oldPrice && prod.oldPrice > prod.price;
    }

    return matchesCategory && matchesSearch && matchesStock;
  });

  // Sort products
  filtered.sort((a, b) => {
    if (currentSort === "price-asc") return a.price - b.price;
    if (currentSort === "price-desc") return b.price - a.price;
    if (currentSort === "rating") return b.rating - a.rating;
    return a.id - b.id; // Featured / Default
  });

  // Update counter
  resultsCount.innerHTML = `<i class="fa-solid fa-circle-check"></i> <strong>${filtered.length}</strong> article(s) trouvé(s) chez SUNU SOLUTION`;

  // Empty state handling
  if (filtered.length === 0) {
    gridContainer.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  // Build HTML
  gridContainer.innerHTML = filtered.map(prod => {
    // Stock status calculation
    let stockClass = "stock-in";
    let stockText = `${prod.stock} en stock`;
    let barClass = "in";
    let barPercent = Math.min(100, Math.max(15, (prod.stock / 20) * 100));

    if (prod.stock <= 0) {
      stockClass = "stock-out";
      stockText = "Rupture de stock";
      barClass = "out";
      barPercent = 100;
    } else if (prod.stock <= 4) {
      stockClass = "stock-low";
      stockText = `Stock limité (${prod.stock} restants)`;
      barClass = "low";
    }

    // Badge HTML
    let badgeHtml = "";
    if (prod.badge) {
      let badgeTypeClass = "badge-new";
      if (prod.badge.includes("Promo")) badgeTypeClass = "badge-promo";
      else if (prod.badge.includes("Best")) badgeTypeClass = "badge-bestseller";
      else if (prod.badge.includes("Exclusi")) badgeTypeClass = "badge-exclusive";
      badgeHtml = `<span class="product-badge-tag ${badgeTypeClass}">${prod.badge}</span>`;
    }

    // Category label
    const categoryLabels = {
      telephonie: "Téléphonie",
      smartphones: "Téléphonie",
      accessoires: "Accessoires",
      coques: "Accessoires",
      chargeurs: "Accessoires",
      audio: "Accessoires",
      montres: "Accessoires",
      electromenager: "Électroménager"
    };
    const categoryLabel = categoryLabels[prod.category] || "Rayon SUNU";

    // Specs chips
    const specsHtml = (prod.specs || []).slice(0, 3).map(s => `<span class="spec-chip">${s}</span>`).join("");

    return `
      <div class="product-card" data-id="${prod.id}">
        ${badgeHtml}
        
        <div class="product-img-holder" onclick="openProductModal(${prod.id})">
          <img src="${prod.image}" alt="${prod.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80'">
          <span class="quick-view-trigger"><i class="fa-solid fa-eye"></i> Spécifications</span>
        </div>

        <div class="product-card-body">
          <span class="product-category-label">${categoryLabel}</span>
          <h3 class="product-title" onclick="openProductModal(${prod.id})">${prod.name}</h3>

          <div class="product-specs-chips">
            ${specsHtml}
          </div>

          <div class="product-rating-row">
            <span class="product-stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </span>
            <strong>${prod.rating}</strong>
            <span class="rating-count">(${prod.reviewsCount} avis)</span>
          </div>

          <div class="stock-status-bar">
            <div class="stock-indicator-text">
              <span>Disponibilité</span>
              <span class="${stockClass}">${stockText}</span>
            </div>
            <div class="stock-progress">
              <div class="stock-progress-bar ${barClass}" style="width: ${barPercent}%"></div>
            </div>
          </div>

          <div class="product-pricing-box">
            <div>
              <span class="price-main">${formatFCFA(prod.price)}</span>
              ${prod.oldPrice ? `<span class="price-struck">${formatFCFA(prod.oldPrice)}</span>` : ''}
            </div>
          </div>

          <div class="card-actions-row">
            <button class="btn btn-primary" onclick="addToCart(${prod.id})" ${prod.stock <= 0 ? 'disabled' : ''}>
              <i class="fa-solid fa-cart-plus"></i> ${prod.stock <= 0 ? 'Rupture' : 'Ajouter au Panier'}
            </button>
            <button class="btn-whatsapp-icon" onclick="orderSingleViaWhatsApp(${prod.id})" title="Commander directement sur WhatsApp (+221 76 314 33 33)">
              <i class="fa-brands fa-whatsapp"></i>
            </button>
          </div>

        </div>
      </div>
    `;
  }).join("");
}

// Category filter
window.filterByCategory = function(category) {
  currentCategory = category;
  
  // Update UI Pills
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.classList.remove("active");
  });
  const activePill = Array.from(document.querySelectorAll(".cat-pill")).find(p => 
    (category === 'all' && p.textContent.includes('Tous')) ||
    (category === 'telephonie' && p.textContent.includes('Téléphonie')) ||
    (category === 'accessoires' && p.textContent.includes('Accessoires')) ||
    (category === 'electromenager' && p.textContent.includes('Électroménager'))
  );
  if (activePill) activePill.classList.add("active");

  renderCatalog();
};

// Nav menu filter + scroll helper
window.navFilterCategory = function(category) {
  window.filterByCategory(category);
  const catEl = document.getElementById("catalogue");
  if (catEl) {
    catEl.scrollIntoView({ behavior: "smooth" });
  }
};

window.resetFilters = function() {
  currentCategory = "all";
  currentSearch = "";
  currentSort = "featured";
  currentStockFilter = "all";

  const searchInput = document.getElementById("catalogSearchInput");
  if (searchInput) searchInput.value = "";
  const headerSearch = document.getElementById("headerSearchInput");
  if (headerSearch) headerSearch.value = "";
  const sortSelect = document.getElementById("priceSortSelect");
  if (sortSelect) sortSelect.value = "featured";
  const stockFilterSelect = document.getElementById("stockFilterSelect");
  if (stockFilterSelect) stockFilterSelect.value = "all";

  window.filterByCategory("all");
};

// ==========================================================================
// 3. CART SYSTEM & DRAWER MANAGEMENT
// ==========================================================================

window.addToCart = function(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  if (prod.stock <= 0) {
    showToast("Désolé, cet article est actuellement en rupture de stock.", "error");
    return;
  }

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    if (existing.quantity >= prod.stock) {
      showToast(`Stock maximum atteint (${prod.stock} unités) pour cet article.`, "warning");
      return;
    }
    existing.quantity += 1;
  } else {
    cart.push({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      image: prod.image,
      quantity: 1,
      stock: prod.stock
    });
  }

  saveCart();
  updateCartUI();
  showToast(`"${prod.name}" ajouté à votre panier !`, "success");
};

window.quickAddToCart = function(productId) {
  window.addToCart(productId);
  window.openCartDrawer();
};

window.updateCartQuantity = function(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  const product = products.find(p => p.id === productId);
  const maxStock = product ? product.stock : 99;

  const newQty = item.quantity + delta;
  if (newQty > maxStock) {
    showToast(`Quantité limitée au stock disponible (${maxStock}).`, "warning");
    return;
  }

  if (newQty <= 0) {
    removeFromCart(productId);
  } else {
    item.quantity = newQty;
    saveCart();
    updateCartUI();
  }
};

window.removeFromCart = function(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  showToast("Article retiré du panier.", "info");
};

function updateCartUI() {
  const countBadge = document.getElementById("cartCountBadge");
  const drawerCount = document.getElementById("cartDrawerCount");
  const itemsList = document.getElementById("cartItemsList");
  const subtotalEl = document.getElementById("cartSubtotal");
  const totalEl = document.getElementById("cartTotal");
  const shippingTag = document.getElementById("cartShippingTag");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (countBadge) countBadge.textContent = totalItems;
  if (drawerCount) drawerCount.textContent = totalItems;

  if (!itemsList) return;

  if (cart.length === 0) {
    itemsList.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: #94a3b8;">
        <i class="fa-solid fa-basket-shopping" style="font-size: 3rem; margin-bottom: 1rem; color: #cbd5e1;"></i>
        <h4 style="color: #475569; margin-bottom: 0.5rem;">Votre panier est vide</h4>
        <p style="font-size: 0.875rem;">Ajoutez des smartphones, accessoires ou appareils électroménagers.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "0 FCFA";
    if (totalEl) totalEl.textContent = "0 FCFA";
    return;
  }

  itemsList.innerHTML = cart.map(item => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <div class="cart-item-price">${formatFCFA(item.price * item.quantity)} <span style="font-size: 0.75rem; color: #94a3b8; font-weight: 400;">(${formatFCFA(item.price)} / u)</span></div>
        <div class="cart-qty-ctrl">
          <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
          <span class="qty-count">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="btn-remove-item" onclick="removeFromCart(${item.id})" title="Supprimer">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join("");

  if (subtotalEl) subtotalEl.textContent = formatFCFA(subtotal);
  
  // Shipping calculation in FCFA (Free over 35 000 FCFA, else 2 000 FCFA Dakar)
  const isShippingFree = subtotal >= 35000 || subtotal === 0;
  const shippingCost = isShippingFree ? 0 : 2000;

  if (shippingTag) {
    shippingTag.textContent = isShippingFree ? "Offerte (Dès 35 000 FCFA)" : "2 000 FCFA";
    shippingTag.style.color = isShippingFree ? "#10b981" : "#475569";
  }

  if (totalEl) {
    totalEl.textContent = formatFCFA(subtotal + shippingCost);
  }
}

window.openCartDrawer = function() {
  document.getElementById("cartDrawer").classList.add("active");
  document.getElementById("cartOverlay").classList.add("active");
};

window.closeCartDrawer = function() {
  document.getElementById("cartDrawer").classList.remove("active");
  document.getElementById("cartOverlay").classList.remove("active");
};

// ==========================================================================
// 4. CHECKOUT & WHATSAPP ORDERS (SUNU SOLUTION DAKAR)
// ==========================================================================

window.openCheckoutModal = function() {
  if (cart.length === 0) {
    showToast("Votre panier est vide. Ajoutez des articles avant de valider.", "warning");
    return;
  }
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const isFree = total >= 35000;
  const finalTotal = total + (isFree ? 0 : 2000);

  document.getElementById("modalRecapTotal").textContent = `${formatFCFA(finalTotal)} (avec livraison ${isFree ? 'offerte' : '2 000 FCFA'})`;
  document.getElementById("checkoutModal").style.display = "flex";
  window.closeCartDrawer();
};

window.closeCheckoutModal = function() {
  document.getElementById("checkoutModal").style.display = "none";
};

window.submitOrder = function(event) {
  event.preventDefault();
  const name = document.getElementById("orderCustName").value.trim();
  const phone = document.getElementById("orderCustPhone").value.trim();
  const city = document.getElementById("orderCustCity").value.trim();
  const address = document.getElementById("orderCustAddress").value.trim();
  const payment = document.getElementById("orderPaymentMethod").value;

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const finalTotal = total + (total >= 35000 ? 0 : 2000);
  const itemsSummary = cart.map(i => `${i.name} (${i.quantity}x)`).join(", ");

  // Deduct stock
  cart.forEach(item => {
    const prod = products.find(p => p.id === item.id);
    if (prod) {
      prod.stock = Math.max(0, prod.stock - item.quantity);
    }
  });
  saveProducts();

  // Create new sale record
  const newOrder = {
    id: `SUNU-${new Date().getFullYear()}-${String(sales.length + 1).padStart(3, '0')}`,
    date: new Date().toISOString().replace('T', ' ').substring(0, 16),
    customer: `${name} (${city})`,
    phone: phone,
    items: itemsSummary,
    total: finalTotal,
    paymentMethod: payment,
    status: "En attente de livraison"
  };

  sales.unshift(newOrder);
  saveSales();

  // Reset cart
  cart = [];
  saveCart();
  updateCartUI();
  renderCatalog();

  window.closeCheckoutModal();
  showToast(`Commande ${newOrder.id} (${formatFCFA(finalTotal)}) validée ! Merci ${name}.`, "success");
};

// WhatsApp Order Generator
window.checkoutViaWhatsApp = function() {
  if (cart.length === 0) {
    showToast("Votre panier est vide.", "warning");
    return;
  }
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const finalTotal = total + (total >= 35000 ? 0 : 2000);

  let message = `Bonjour SUNU SOLUTION ! 👋\nJe souhaite passer une commande sur votre boutique :\n\n`;
  cart.forEach((i, idx) => {
    message += `${idx + 1}. *${i.name}* (Qté: ${i.quantity}) - ${formatFCFA(i.price * i.quantity)}\n`;
  });
  message += `\n💰 *Total estimé :* ${formatFCFA(finalTotal)} (Livraison comprise)\n\nPouvez-vous me confirmer la disponibilité et le délai de livraison à Dakar ? Merci !`;

  const encodedUrl = `https://wa.me/221763143333?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, "_blank");
};

window.orderSingleViaWhatsApp = function(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  const msg = `Bonjour SUNU SOLUTION ! 👋\nJe souhaite commander le produit suivant :\n\n📱/📺 *${prod.name}*\n🏷️ Prix : *${formatFCFA(prod.price)}*\n\nEst-il disponible en boutique à Dalifort pour livraison aujourd'hui ? Merci !`;
  window.open(`https://wa.me/221763143333?text=${encodeURIComponent(msg)}`, "_blank");
};

// ==========================================================================
// 5. PRODUCT DETAILS MODAL (Spécifications)
// ==========================================================================

window.openProductModal = function(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById("productModal");
  const modalBody = document.getElementById("productModalBody");

  const specsList = (prod.specs || []).map(s => `
    <li style="margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem;">
      <i class="fa-solid fa-circle-check" style="color: #2563eb;"></i> ${s}
    </li>
  `).join("");

  modalBody.innerHTML = `
    <div class="product-modal-grid">
      <div style="background-color: #f8fafc; border-radius: 16px; padding: 2rem; display: flex; justify-content: center; align-items: center;">
        <img src="${prod.image}" alt="${prod.name}" class="prod-modal-img">
      </div>
      <div>
        <span class="product-category-label">${normalizeCategory(prod.category).toUpperCase()} • SUNU SOLUTION</span>
        <h2 style="font-size: 1.6rem; margin-bottom: 0.5rem;">${prod.name}</h2>
        
        <div class="product-rating-row" style="margin-bottom: 1rem;">
          <span class="product-stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </span>
          <strong>${prod.rating} / 5</strong>
          <span class="rating-count">(${prod.reviewsCount} retours clients)</span>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <span class="price-main" style="font-size: 1.8rem;">${formatFCFA(prod.price)}</span>
          ${prod.oldPrice ? `<span class="price-struck" style="font-size: 1rem;">${formatFCFA(prod.oldPrice)}</span>` : ''}
        </div>

        <p style="font-size: 0.95rem; color: #475569; line-height: 1.6; margin-bottom: 1.25rem;">
          ${prod.description || "Produit authentique garanti chez SUNU SOLUTION avec SAV direct."}
        </p>

        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-size: 0.95rem; margin-bottom: 0.6rem;">Fiche technique & Détails :</h4>
          <ul style="list-style: none; padding: 0;">
            ${specsList}
          </ul>
        </div>

        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <button class="btn btn-primary btn-lg" style="flex: 1;" onclick="addToCart(${prod.id}); closeProductModal();">
            <i class="fa-solid fa-cart-shopping"></i> Ajouter au Panier
          </button>
          <button class="btn btn-whatsapp btn-lg" onclick="orderSingleViaWhatsApp(${prod.id})">
            <i class="fa-brands fa-whatsapp"></i> WhatsApp
          </button>
        </div>
      </div>
    </div>
  `;

  modal.style.display = "flex";
};

window.closeProductModal = function() {
  document.getElementById("productModal").style.display = "none";
};

// ==========================================================================
// 6. ADMIN PASSWORD GATEWAY & MODAL DIALOG
// ==========================================================================

const DEFAULT_ADMIN_PASS = "admin123";

window.openAdminAccessModal = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  
  // If already authenticated in this session, open admin.html directly
  if (sessionStorage.getItem("sunu_admin_logged") === "true") {
    window.location.href = "admin.html";
    return;
  }

  const modal = document.getElementById("adminAccessModal");
  if (modal) {
    modal.style.display = "flex";
    const passInput = document.getElementById("quickAdminPassInput");
    if (passInput) {
      passInput.value = "";
      setTimeout(() => passInput.focus(), 150);
    }
  }
};

window.closeAdminAccessModal = function() {
  const modal = document.getElementById("adminAccessModal");
  if (modal) modal.style.display = "none";
};

window.toggleQuickPasswordVisibility = function(btn) {
  const input = document.getElementById("quickAdminPassInput");
  if (!input) return;
  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";
  btn.innerHTML = isPassword ? '<i class="fa-solid fa-eye-slash"></i>' : '<i class="fa-solid fa-eye"></i>';
};

window.submitAdminQuickLogin = function(e) {
  e.preventDefault();
  const passInput = document.getElementById("quickAdminPassInput");
  const enteredPass = passInput ? passInput.value : "";
  const storedPass = localStorage.getItem("sunu_admin_password") || DEFAULT_ADMIN_PASS;

  if (enteredPass === storedPass) {
    sessionStorage.setItem("sunu_admin_logged", "true");
    sessionStorage.setItem("sunu_admin_user", "admin");
    showToast("Accès autorisé ! Redirection vers le panneau d'administration...", "success");
    
    setTimeout(() => {
      window.location.href = "admin.html";
    }, 600);
  } else {
    showToast("Mot de passe incorrect. Veuillez réessayer.", "error");
    if (passInput) {
      passInput.value = "";
      passInput.focus();
    }
  }
};

// ==========================================================================
// 7. TOAST NOTIFICATION SYSTEM
// ==========================================================================

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const icons = {
    success: '<i class="fa-solid fa-circle-check" style="color: #10b981;"></i>',
    error: '<i class="fa-solid fa-circle-exclamation" style="color: #ef4444;"></i>',
    warning: '<i class="fa-solid fa-triangle-exclamation" style="color: #f59e0b;"></i>',
    info: '<i class="fa-solid fa-circle-info" style="color: #38bdf8;"></i>'
  };

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    ${icons[type] || icons.info}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.remove();
    }
  }, 3000);
}

// ==========================================================================
// 8. EVENT LISTENERS & DOM HOOKS
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initData();
  renderCatalog();
  updateCartUI();

  // Search input listeners
  const catalogSearch = document.getElementById("catalogSearchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  const headerSearch = document.getElementById("headerSearchInput");

  if (catalogSearch) {
    catalogSearch.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      if (clearBtn) clearBtn.style.display = currentSearch ? "block" : "none";
      renderCatalog();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      catalogSearch.value = "";
      currentSearch = "";
      clearBtn.style.display = "none";
      renderCatalog();
    });
  }

  if (headerSearch) {
    headerSearch.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      if (catalogSearch) catalogSearch.value = currentSearch;
      renderCatalog();
      // Scroll to catalog if not there
      const catEl = document.getElementById("catalogue");
      if (catEl) catEl.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Sort & stock filters
  const sortSelect = document.getElementById("priceSortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderCatalog();
    });
  }

  const stockFilterSelect = document.getElementById("stockFilterSelect");
  if (stockFilterSelect) {
    stockFilterSelect.addEventListener("change", (e) => {
      currentStockFilter = e.target.value;
      renderCatalog();
    });
  }

  // Cart Button
  const cartBtn = document.getElementById("cartBtn");
  if (cartBtn) {
    cartBtn.addEventListener("click", window.openCartDrawer);
  }

  // Mobile menu toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // Nav link click smooth close on mobile
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu) navMenu.classList.remove("open");
    });
  });

  // Hero Quick Order Btn
  const heroBtn = document.getElementById("heroQuickOrderBtn");
  if (heroBtn) {
    heroBtn.addEventListener("click", () => {
      const msg = "Bonjour SUNU SOLUTION ! 👋 Je souhaite commander un produit (téléphonie, accessoires, électroménager).";
      window.open(`https://wa.me/221763143333?text=${encodeURIComponent(msg)}`, "_blank");
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("newsletterEmail").value;
      showToast(`Merci ! Vos coordonnées (${email}) ont été enregistrées pour les offres SUNU SOLUTION.`, "success");
      newsletterForm.reset();
    });
  }

  // View Grid / List buttons
  const viewGridBtn = document.getElementById("viewGridBtn");
  const viewListBtn = document.getElementById("viewListBtn");
  const gridContainer = document.getElementById("productsGridContainer");

  if (viewGridBtn && viewListBtn && gridContainer) {
    viewGridBtn.addEventListener("click", () => {
      viewGridBtn.classList.add("active");
      viewListBtn.classList.remove("active");
      gridContainer.classList.remove("list-view");
    });
    viewListBtn.addEventListener("click", () => {
      viewListBtn.classList.add("active");
      viewGridBtn.classList.remove("active");
      gridContainer.classList.add("list-view");
    });
  }
});
