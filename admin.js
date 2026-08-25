/**
 * SUNU SOLUTION - ADMIN & MANAGEMENT LOGIC
 * Espace d'Administration & Gestion des Stocks (FCFA)
 */

// Default Configuration & Passwords
const DEFAULT_ADMIN_USER = "admin";
const DEFAULT_ADMIN_PASS = "admin123";

// State
let products = [];
let sales = [];

// Helper Currency Formatter (Francs CFA)
function formatFCFA(amount) {
  if (isNaN(amount) || amount === null || amount === undefined) return "0 FCFA";
  return Math.round(amount).toLocaleString('fr-FR') + " FCFA";
}

// ==========================================================================
// 1. AUTHENTICATION & SESSION MANAGEMENT
// ==========================================================================

function checkAuthStatus() {
  const isLogged = sessionStorage.getItem("sunu_admin_logged") === "true";
  const loginScreen = document.getElementById("adminLoginScreen");
  const dashboardLayout = document.getElementById("adminDashboardLayout");

  if (isLogged) {
    loginScreen.style.display = "none";
    dashboardLayout.style.display = "block";
    loadData();
    renderDashboard();
  } else {
    loginScreen.style.display = "flex";
    dashboardLayout.style.display = "none";
  }
}

window.handleAdminLogin = function(e) {
  e.preventDefault();
  const username = document.getElementById("adminUsernameInput").value.trim();
  const password = document.getElementById("adminPasswordInput").value;

  const storedPass = localStorage.getItem("sunu_admin_password") || DEFAULT_ADMIN_PASS;

  if (username === DEFAULT_ADMIN_USER && password === storedPass) {
    sessionStorage.setItem("sunu_admin_logged", "true");
    sessionStorage.setItem("sunu_admin_user", username);
    showToast("Connexion réussie ! Bienvenue dans votre espace de gestion.", "success");
    
    // Update logged user text
    const loggedNameEl = document.getElementById("loggedAdminName");
    if (loggedNameEl) loggedNameEl.textContent = username;

    checkAuthStatus();
  } else {
    showToast("Identifiant ou mot de passe incorrect.", "error");
  }
};

window.handleAdminLogout = function() {
  if (confirm("Voulez-vous vraiment vous déconnecter de l'administration ?")) {
    sessionStorage.removeItem("sunu_admin_logged");
    sessionStorage.removeItem("sunu_admin_user");
    showToast("Vous avez été déconnecté avec succès.", "info");
    checkAuthStatus();
  }
};

window.togglePasswordVisibility = function(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";
  btn.innerHTML = isPassword ? '<i class="fa-solid fa-eye-slash"></i>' : '<i class="fa-solid fa-eye"></i>';
};

window.handleChangePassword = function(e) {
  e.preventDefault();
  const currentPass = document.getElementById("currentPassword").value;
  const newPass = document.getElementById("newPassword").value;
  const storedPass = localStorage.getItem("sunu_admin_password") || DEFAULT_ADMIN_PASS;

  if (currentPass !== storedPass) {
    showToast("Le mot de passe actuel est incorrect.", "error");
    return;
  }

  if (newPass.length < 4) {
    showToast("Le nouveau mot de passe doit comporter au moins 4 caractères.", "warning");
    return;
  }

  localStorage.setItem("sunu_admin_password", newPass);
  document.getElementById("changePasswordForm").reset();
  showToast("Mot de passe mis à jour avec succès !", "success");
};

// ==========================================================================
// 2. DATA MANAGEMENT (LOCALSTORAGE SYNC)
// ==========================================================================

function loadData() {
  const savedProducts = localStorage.getItem("phonepulse_products");
  const savedSales = localStorage.getItem("phonepulse_sales");

  products = savedProducts ? JSON.parse(savedProducts) : [];
  sales = savedSales ? JSON.parse(savedSales) : [];
}

function saveProducts() {
  localStorage.setItem("phonepulse_products", JSON.stringify(products));
}

function saveSales() {
  localStorage.setItem("phonepulse_sales", JSON.stringify(sales));
}

// ==========================================================================
// 3. DASHBOARD RENDERING & KPIS
// ==========================================================================

function renderDashboard() {
  // 1. Calculate KPI Metrics
  const totalStockValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);
  const totalUnits = products.reduce((sum, p) => sum + p.stock, 0);
  const totalSalesCount = sales.length;
  const totalSalesRevenue = sales.reduce((sum, s) => sum + s.total, 0);
  const lowStockCount = products.filter(p => p.stock < 5).length;

  document.getElementById("kpiStockValue").textContent = formatFCFA(totalStockValue);
  document.getElementById("kpiTotalUnits").textContent = totalUnits;
  document.getElementById("kpiTotalProductsRef").textContent = `${products.length} références`;
  document.getElementById("kpiTotalSales").textContent = totalSalesCount;
  document.getElementById("kpiSalesRevenue").textContent = `${formatFCFA(totalSalesRevenue)} encaissés`;
  document.getElementById("kpiLowStockAlerts").textContent = lowStockCount;

  document.getElementById("tabStockCount").textContent = products.length;
  document.getElementById("tabSalesCount").textContent = sales.length;

  // 2. Render Stock Table
  renderStockTable();

  // 3. Render Sales Table
  renderSalesTable();
}

function renderStockTable(query = "") {
  const tbody = document.getElementById("adminStockTableBody");
  if (!tbody) return;

  const filtered = products.filter(p => {
    if (!query) return true;
    const q = query.toLowerCase();
    return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #94a3b8; padding: 2rem;">Aucun article ne correspond à votre recherche.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(p => {
    let statusBadge = `<span class="badge-stock-in">En stock (${p.stock})</span>`;
    if (p.stock === 0) statusBadge = `<span class="badge-stock-out">Rupture (0)</span>`;
    else if (p.stock < 5) statusBadge = `<span class="badge-stock-low">Stock Faible (${p.stock})</span>`;

    const catLabels = {
      telephonie: "📱 Téléphonie",
      smartphones: "📱 Téléphonie",
      accessoires: "🎧 Accessoires",
      coques: "🎧 Accessoires",
      chargeurs: "🎧 Accessoires",
      audio: "🎧 Accessoires",
      montres: "🎧 Accessoires",
      electromenager: "📺 Électroménager"
    };
    const categoryDisplay = catLabels[p.category] || p.category;

    return `
      <tr>
        <td>
          <div class="table-product-cell">
            <img src="${p.image}" alt="${p.name}" class="table-product-thumb">
            <div>
              <strong>${p.name}</strong>
              <div style="font-size: 0.75rem; color: #64748b;">Réf: #${p.id}</div>
            </div>
          </div>
        </td>
        <td><span style="font-weight: 600; color: #1e40af;">${categoryDisplay}</span></td>
        <td><strong>${formatFCFA(p.price)}</strong></td>
        <td>${p.oldPrice ? `<span style="text-decoration: line-through; color: #94a3b8;">${formatFCFA(p.oldPrice)}</span>` : '-'}</td>
        <td><strong>${p.stock}</strong> unités</td>
        <td>${statusBadge}</td>
        <td>
          <div class="table-action-btns">
            <button class="btn-tbl-action" onclick="openEditProductModal(${p.id})" title="Modifier prix/stock"><i class="fa-solid fa-pen"></i></button>
            <button class="btn-tbl-action delete" onclick="deleteProduct(${p.id})" title="Supprimer"><i class="fa-solid fa-trash"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function renderSalesTable() {
  const tbody = document.getElementById("adminSalesTableBody");
  if (!tbody) return;

  if (sales.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: #94a3b8; padding: 2rem;">Aucune vente enregistrée pour le moment.</td></tr>`;
    return;
  }

  tbody.innerHTML = sales.map(s => `
    <tr>
      <td><strong>${s.id}</strong></td>
      <td>${s.date}</td>
      <td>
        <div><strong>${s.customer}</strong></div>
        <div style="font-size: 0.75rem; color: #64748b;"><i class="fa-solid fa-phone"></i> ${s.phone || 'Non renseigné'}</div>
      </td>
      <td style="max-width: 250px; white-space: normal; font-size: 0.8rem;">${s.items}</td>
      <td><strong style="color: #2563eb;">${formatFCFA(s.total)}</strong></td>
      <td><span class="spec-chip">${s.paymentMethod}</span></td>
      <td><span class="badge-stock-in">${s.status}</span></td>
      <td>
        <button class="btn-tbl-action" onclick="printReceipt('${s.id}')" title="Imprimer le ticket de caisse"><i class="fa-solid fa-receipt"></i></button>
      </td>
    </tr>
  `).join("");
}

// Switch tabs in Admin
window.switchAdminTab = function(tabId) {
  document.querySelectorAll(".admin-tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".admin-tab-content").forEach(content => content.classList.remove("active"));

  const targetContent = document.getElementById(tabId);
  if (targetContent) targetContent.classList.add("active");

  const btnIndex = ['stockTab', 'addTab', 'salesTab', 'settingsTab'].indexOf(tabId);
  const btns = document.querySelectorAll(".admin-tab-btn");
  if (btns[btnIndex]) btns[btnIndex].classList.add("active");
};

// ==========================================================================
// 4. ADD & EDIT PRODUCT LOGIC
// ==========================================================================

document.getElementById("addProductForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("newProdName").value.trim();
  const category = document.getElementById("newProdCategory").value;
  const price = parseFloat(document.getElementById("newProdPrice").value);
  const oldPrice = parseFloat(document.getElementById("newProdOldPrice").value) || null;
  const stock = parseInt(document.getElementById("newProdStock").value, 10);
  const badge = document.getElementById("newProdBadge").value;
  const image = document.getElementById("newProdImage").value.trim();
  const specsRaw = document.getElementById("newProdSpecs").value.trim();
  const desc = document.getElementById("newProdDesc").value.trim();

  const newProd = {
    id: Date.now(),
    name,
    category,
    price,
    oldPrice,
    stock,
    badge,
    rating: 5.0,
    reviewsCount: 1,
    image: image || "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",
    specs: specsRaw ? specsRaw.split(",").map(s => s.trim()) : ["Garantie 12 Mois"],
    description: desc || "Article neuf disponible chez SUNU SOLUTION à Dalifort-Foirail."
  };

  products.unshift(newProd);
  saveProducts();
  renderDashboard();

  this.reset();
  showToast(`Le produit "${name}" (${formatFCFA(price)}) a été ajouté avec succès !`, "success");
  switchAdminTab("stockTab");
});

window.setPresetImage = function() {
  const cat = document.getElementById("newProdCategory").value;
  const presets = {
    telephonie: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",
    smartphones: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",
    accessoires: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    coques: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=700&q=80",
    chargeurs: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
    electromenager: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=80"
  };
  document.getElementById("newProdImage").value = presets[cat] || presets.telephonie;
};

// Edit Product Modal
window.openEditProductModal = function(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  document.getElementById("editProdId").value = prod.id;
  document.getElementById("editProdName").value = prod.name;
  document.getElementById("editProdPrice").value = prod.price;
  document.getElementById("editProdOldPrice").value = prod.oldPrice || "";
  document.getElementById("editProdStock").value = prod.stock;
  document.getElementById("editProdCategory").value = prod.category;

  document.getElementById("editProductModal").style.display = "flex";
};

window.closeEditProductModal = function() {
  document.getElementById("editProductModal").style.display = "none";
};

window.saveEditedProduct = function(e) {
  e.preventDefault();
  const id = parseInt(document.getElementById("editProdId").value, 10);
  const prod = products.find(p => p.id === id);
  if (!prod) return;

  prod.name = document.getElementById("editProdName").value.trim();
  prod.price = parseFloat(document.getElementById("editProdPrice").value);
  prod.oldPrice = parseFloat(document.getElementById("editProdOldPrice").value) || null;
  prod.stock = parseInt(document.getElementById("editProdStock").value, 10);
  prod.category = document.getElementById("editProdCategory").value;

  saveProducts();
  renderDashboard();
  closeEditProductModal();
  showToast(`Mise à jour effectuée pour "${prod.name}" (${formatFCFA(prod.price)})`, "success");
};

window.deleteProduct = function(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  if (confirm(`Êtes-vous sûr de vouloir supprimer "${prod.name}" du catalogue ?`)) {
    products = products.filter(p => p.id !== productId);
    saveProducts();
    renderDashboard();
    showToast(`Produit "${prod.name}" supprimé de l'inventaire.`, "info");
  }
};

// ==========================================================================
// 5. MANUAL POS SALE RECORDING
// ==========================================================================

window.openManualSaleModal = function() {
  const select = document.getElementById("saleProductSelect");
  select.innerHTML = products.map(p => `
    <option value="${p.id}" ${p.stock <= 0 ? 'disabled' : ''}>
      ${p.name} - ${formatFCFA(p.price)} (Stock: ${p.stock})
    </option>
  `).join("");

  document.getElementById("manualSaleModal").style.display = "flex";
};

window.closeManualSaleModal = function() {
  document.getElementById("manualSaleModal").style.display = "none";
};

window.submitManualSale = function(e) {
  e.preventDefault();
  const prodId = parseInt(document.getElementById("saleProductSelect").value, 10);
  const qty = parseInt(document.getElementById("saleQuantity").value, 10);
  const custName = document.getElementById("saleCustName").value.trim() || "Client Comptoir Dalifort";
  const payment = document.getElementById("salePaymentMethod").value;

  const prod = products.find(p => p.id === prodId);
  if (!prod) return;

  if (prod.stock < qty) {
    showToast(`Stock insuffisant (${prod.stock} disponibles).`, "error");
    return;
  }

  prod.stock -= qty;
  saveProducts();

  const totalAmount = prod.price * qty;

  const newSale = {
    id: `SUNU-${new Date().getFullYear()}-${String(sales.length + 1).padStart(3, '0')}`,
    date: new Date().toISOString().replace('T', ' ').substring(0, 16),
    customer: custName,
    phone: "Comptoir",
    items: `${prod.name} (${qty}x)`,
    total: totalAmount,
    paymentMethod: payment,
    status: "Payé & Emporté"
  };

  sales.unshift(newSale);
  saveSales();

  renderDashboard();
  closeManualSaleModal();
  showToast(`Vente enregistrée : ${formatFCFA(totalAmount)} encaissés !`, "success");
};

window.printReceipt = function(saleId) {
  const sale = sales.find(s => s.id === saleId);
  if (!sale) return;

  const receiptContent = `
=============================================
             SUNU SOLUTION
         Dalifort-Foirail, Dakar
    Tél / WhatsApp: +221 76 314 33 33
    Facebook: @sunusolutionshop
=============================================
Facture N°: ${sale.id}
Date: ${sale.date}
Client: ${sale.customer}
Règlement: ${sale.paymentMethod}
---------------------------------------------
Articles:
${sale.items}

TOTAL NET : ${formatFCFA(sale.total)}
Statut: ${sale.status}
=============================================
Merci pour votre confiance chez SUNU SOLUTION !
Garantie jusqu'à 24 mois avec ce ticket.
=============================================
  `;
  alert(receiptContent);
};

// Data Backup & Export
window.exportDatabaseJSON = function() {
  const backupData = {
    store: "SUNU SOLUTION",
    facebook: "https://www.facebook.com/sunusolutionshop",
    currency: "FCFA",
    exportedAt: new Date().toISOString(),
    products,
    sales
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `sunusolution_backup_${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Sauvegarde JSON SUNU SOLUTION exportée.", "success");
};

window.exportStockCSV = function() {
  let csv = "ID,Nom,Categorie,Prix_FCFA,Prix_Barre_FCFA,Stock,Note\n";
  products.forEach(p => {
    csv += `"${p.id}","${p.name}","${p.category}",${p.price},${p.oldPrice || ''},${p.stock},${p.rating}\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `inventaire_sunusolution_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast("Fichier CSV d'inventaire généré.", "success");
};

window.resetToDefaultData = function() {
  if (confirm("Voulez-vous réinitialiser le catalogue par défaut de SUNU SOLUTION en FCFA ?")) {
    localStorage.removeItem("phonepulse_products");
    localStorage.removeItem("phonepulse_sales");
    localStorage.removeItem("phonepulse_cart");
    localStorage.setItem("sunu_currency_ver", "v3_sunusolution");
    
    // Redirect to reinit through app
    location.reload();
  }
};

// ==========================================================================
// 6. TOAST NOTIFICATION SYSTEM
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

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  checkAuthStatus();

  const adminStockSearch = document.getElementById("adminStockSearch");
  if (adminStockSearch) {
    adminStockSearch.addEventListener("input", (e) => {
      renderStockTable(e.target.value);
    });
  }
});
