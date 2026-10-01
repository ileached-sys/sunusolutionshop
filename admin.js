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

const DEFAULT_PRODUCTS = [
  // ==========================================
  // 1. RAYON TÉLÉPHONIE (JUMIA SÉNÉGAL BEST-SELLERS)
  // ==========================================
  {
    id: 1,
    name: "Tecno Spark 20 (128 Go + 8 Go RAM)",
    category: "telephonie",
    purchasePrice: 65000,
    price: 84900,
    oldPrice: 95000,
    stock: 15,
    badge: "Best Seller Jumia",
    rating: 4.9,
    reviewsCount: 184,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",
    specs: ["128 Go ROM", "8 Go RAM (4+4)", "Batterie 5000 mAh", "Garantie 13 Mois", "Caméra 50 MP"],
    description: "Le n°1 des ventes à Dakar : 128 Go de stockage, 8 Go de RAM, appareil photo 50 Mpx ultra-net et batterie 5000 mAh. Garantie constructeur 13 mois."
  },
  {
    id: 2,
    name: "Tecno Pop 8 (64 Go + 3 Go RAM)",
    category: "telephonie",
    purchasePrice: 38000,
    price: 49900,
    oldPrice: 59000,
    stock: 22,
    badge: "Prix Mini",
    rating: 4.7,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=700&q=80",
    specs: ["64 Go ROM", "3 Go RAM", "Écran 90Hz 6.6\"", "Batterie 5000 mAh", "Haut-parleurs Stéréo"],
    description: "Le smartphone le plus accessible et endurant : écran 90Hz ultra-fluide, double haut-parleur DTS et batterie 5000 mAh longue durée."
  },
  {
    id: 3,
    name: "Tecno Camon 30 (256 Go + 8 Go RAM)",
    category: "telephonie",
    purchasePrice: 110000,
    price: 139000,
    oldPrice: 155000,
    stock: 8,
    badge: "Nouveau Arrivage",
    rating: 4.9,
    reviewsCount: 96,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80",
    specs: ["256 Go ROM", "Caméra 50 MP OIS", "Charge 70W Ultra", "Écran AMOLED 120Hz", "Design Cuir"],
    description: "Le roi de la photo de nuit : capteur 50 Mpx avec stabilisation optique OIS, charge ultra-rapide 70W et magnifique écran AMOLED 120Hz."
  },
  {
    id: 4,
    name: "Samsung Galaxy A05 (64 Go / 4 Go RAM)",
    category: "telephonie",
    purchasePrice: 46000,
    price: 59900,
    oldPrice: 69000,
    stock: 18,
    badge: "Promo Spéciale",
    rating: 4.8,
    reviewsCount: 156,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=700&q=80",
    specs: ["Écran HD+ 6.7\"", "Batterie 5000 mAh", "Charge 25W", "Appareil 50 MP", "Dual SIM"],
    description: "Qualité et fiabilité Samsung avec un grand écran de 6.7 pouces, une batterie de 5000 mAh et une caméra 50 Mpx au meilleur prix du marché."
  },
  {
    id: 5,
    name: "Samsung Galaxy A15 4G (128 Go + 6 Go RAM)",
    category: "telephonie",
    purchasePrice: 78000,
    price: 99900,
    oldPrice: 115000,
    stock: 14,
    badge: "Best Seller",
    rating: 4.9,
    reviewsCount: 210,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=700&q=80",
    specs: ["Super AMOLED 90Hz", "Triple Caméra 50 MP", "Puce Octa-Core Helio G99", "Garantie 24 Mois"],
    description: "Écran Super AMOLED éclatant 90Hz, 128 Go de stockage et triple capteur photo ultra-net pour immortaliser tous vos moments."
  },
  {
    id: 6,
    name: "Samsung Galaxy A25 5G (128 Go + 6 Go RAM)",
    category: "telephonie",
    purchasePrice: 115000,
    price: 145000,
    oldPrice: 165000,
    stock: 9,
    badge: "5G Ready",
    rating: 4.8,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=700&q=80",
    specs: ["Écran 120Hz Super AMOLED", "Caméra 50 MP OIS", "Connexion 5G Ultra Rapide", "Batterie 5000 mAh"],
    description: "Profitez de la vitesse 5G avec l'écran Super AMOLED 120Hz et la stabilisation optique photo de Samsung."
  },
  {
    id: 7,
    name: "Samsung Galaxy A55 5G (256 Go + 8 Go RAM)",
    category: "telephonie",
    purchasePrice: 185000,
    price: 235000,
    oldPrice: 265000,
    stock: 7,
    badge: "Haut de Gamme",
    rating: 5.0,
    reviewsCount: 115,
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=700&q=80",
    specs: ["256 Go ROM", "Finition Verre & Métal", "Résistance IP67 Eau/Poussière", "Caméra 50 MP 4K"],
    description: "Design premium en métal et verre, étanche IP67, processeur ultra-rapide et écran fluide 120Hz pour une expérience haut de gamme."
  },
  {
    id: 8,
    name: "Samsung Galaxy S24 Ultra (256 Go Titane)",
    category: "telephonie",
    purchasePrice: 560000,
    price: 685000,
    oldPrice: 790000,
    stock: 4,
    badge: "Flagship Galaxy AI",
    rating: 5.0,
    reviewsCount: 74,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=80",
    specs: ["Galaxy AI Intégrée", "Cadre Titane", "Zoom Optique 100x", "S-Pen Inclus", "Écran Dynamic AMOLED 2X"],
    description: "Le smartphone le plus puissant du monde avec intelligence artificielle Galaxy AI, capteur photo 200 Mpx et stylet S-Pen intégré."
  },
  {
    id: 9,
    name: "Xiaomi Redmi 13C (128 Go + 6 Go RAM)",
    category: "telephonie",
    purchasePrice: 58000,
    price: 74900,
    oldPrice: 85000,
    stock: 16,
    badge: "Bon Plan",
    rating: 4.8,
    reviewsCount: 130,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=80",
    specs: ["Écran 90Hz 6.74\"", "Capteur 50 MP IA", "Batterie 5000 mAh", "Port USB-C"],
    description: "Design élégant et moderne, batterie longue durée 5000 mAh avec charge rapide et double capteur photo 50 Mpx."
  },
  {
    id: 10,
    name: "Xiaomi Redmi Note 13 (256 Go + 8 Go RAM)",
    category: "telephonie",
    purchasePrice: 94000,
    price: 119000,
    oldPrice: 135000,
    stock: 12,
    badge: "Best Seller",
    rating: 4.9,
    reviewsCount: 165,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80",
    specs: ["256 Go ROM", "Écran AMOLED 120Hz", "Caméra 108 MP Ultra Claire", "Charge Rapide 33W"],
    description: "Appareil photo 108 Mpx ultra-détaillé, écran AMOLED aux bordures ultra-fines et processeur puissant pour le multitâche."
  },
  {
    id: 11,
    name: "Infinix Hot 40 Pro (256 Go + 8 Go RAM)",
    category: "telephonie",
    purchasePrice: 85000,
    price: 109000,
    oldPrice: 125000,
    stock: 10,
    badge: "Gaming Edition",
    rating: 4.8,
    reviewsCount: 92,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=700&q=80",
    specs: ["256 Go ROM", "Processeur Helio G99", "Appareil 108 MP", "Charge Rapide 33W"],
    description: "Smartphone gaming haute performance avec processeur Helio G99, mémoire géante 256 Go et caméra photo 108 Mpx."
  },
  {
    id: 12,
    name: "Itel A70 (128 Go + 4 Go RAM)",
    category: "telephonie",
    purchasePrice: 37000,
    price: 48500,
    oldPrice: 55000,
    stock: 25,
    badge: "Prix Choc",
    rating: 4.7,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=700&q=80",
    specs: ["128 Go ROM", "Écran 6.6\" HD+", "Batterie 5000 mAh", "Capteur Empreinte Digitale"],
    description: "128 Go de stockage à moins de 50 000 FCFA ! Idéal pour les études, le travail et les réseaux sociaux avec autonomie 2 jours."
  },
  {
    id: 13,
    name: "iPhone 13 (128 Go - Neuf Scellé)",
    category: "telephonie",
    purchasePrice: 260000,
    price: 325000,
    oldPrice: 370000,
    stock: 6,
    badge: "Apple Certifié",
    rating: 4.9,
    reviewsCount: 195,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=700&q=80",
    specs: ["128 Go", "Puce A15 Bionic", "Mode Cinématique 4K", "Écran Super Retina XDR"],
    description: "L'incontournable iPhone 13 d'Apple : autonomie améliorée, puissance de la puce A15 Bionic et enregistrement vidéo cinématographique."
  },
  {
    id: 14,
    name: "iPhone 15 Pro Max (256 Go Titane Naturel)",
    category: "telephonie",
    purchasePrice: 630000,
    price: 765000,
    oldPrice: 890000,
    stock: 5,
    badge: "Haut de Gamme",
    rating: 5.0,
    reviewsCount: 128,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=700&q=80",
    specs: ["256 Go", "Titane Naturel", "Puce A17 Pro", "Zoom Optique 5x", "Port USB-C"],
    description: "Le sommet de la technologie avec boîtier en titane ultra-résistant, bouton Action personnalisable et téléobjectif 5x d'exception."
  },

  // ==========================================
  // 2. RAYON ACCESSOIRES (JUMIA SÉNÉGAL BEST-SELLERS)
  // ==========================================
  {
    id: 15,
    name: "Écouteurs Sans Fil Oraimo FreePods 4 ANC TWS",
    category: "accessoires",
    purchasePrice: 14000,
    price: 21500,
    oldPrice: 28000,
    stock: 35,
    badge: "Best Seller",
    rating: 4.9,
    reviewsCount: 240,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    specs: ["Réduction Active du Bruit (ANC)", "Autonomie 35.5h", "Basses HavyBass", "Application Dédiée Oraimo"],
    description: "Les écouteurs sans fil de référence en Afrique : réduction de bruit active, basses profondes et autonomie record de 35h."
  },
  {
    id: 16,
    name: "Écouteurs TWS Pro 3 Wireless Bluetooth 5.3",
    category: "accessoires",
    purchasePrice: 7500,
    price: 12500,
    oldPrice: 18000,
    stock: 45,
    badge: "Promo -30%",
    rating: 4.8,
    reviewsCount: 195,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=700&q=80",
    specs: ["Bluetooth 5.3", "Son Spatial HD", "Autonomie 24h", "Boîtier Tactile & Recharge Rapide"],
    description: "Qualité audio haute fidélité avec basses percutantes, micro intégré pour vos appels et synchronisation instantanée Android & iPhone."
  },
  {
    id: 17,
    name: "Power Bank Oraimo 20 000 mAh Fast Charge 22.5W",
    category: "accessoires",
    purchasePrice: 11500,
    price: 17900,
    oldPrice: 24000,
    stock: 30,
    badge: "Best Seller",
    rating: 4.9,
    reviewsCount: 175,
    image: "https://images.unsplash.com/photo-1609592426504-d533604f86d8?auto=format&fit=crop&w=700&q=80",
    specs: ["20 000 mAh Réels", "Charge Rapide 22.5W", "2x USB + Type-C", "Affichage LED %"],
    description: "Batterie externe officielle Oraimo permettant 5 recharges complètes de smartphone. Compatible Quick Charge et Power Delivery."
  },
  {
    id: 18,
    name: "Power Bank Haute Capacité 30 000 mAh Double Sortie USB",
    category: "accessoires",
    purchasePrice: 15500,
    price: 23500,
    oldPrice: 30000,
    stock: 20,
    badge: "Voyage & Autonomie",
    rating: 4.8,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=700&q=80",
    specs: ["30 000 mAh Géant", "Lampe Torche Intégrée", "Indicateur Digital", "3 Ports de Sortie"],
    description: "L'autonomie absolute pour vos déplacements et voyages : jusqu'à 8 recharges de téléphone et lampe LED de secours intégrée."
  },
  {
    id: 19,
    name: "Chargeur Secteur Rapide GaN 45W Type-C + Câble Original",
    category: "accessoires",
    purchasePrice: 5500,
    price: 9500,
    oldPrice: 14000,
    stock: 60,
    badge: "Essentiel",
    rating: 4.9,
    reviewsCount: 260,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
    specs: ["Technologie GaN 45W", "Câble Type-C Tressé 1m", "Protection Contre Surtension"],
    description: "Chargeur secteur ultra-rapide compatible avec Samsung Super Fast Charge, Tecno Flash Charge, Xiaomi et iPhone."
  },
  {
    id: 20,
    name: "Smartwatch Ultra 2 AMOLED HD (Appels Bluetooth + Santé)",
    category: "accessoires",
    purchasePrice: 12000,
    price: 19900,
    oldPrice: 28000,
    stock: 22,
    badge: "Tendance 2024",
    rating: 4.8,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
    specs: ["Appels & Notifs WhatsApp", "Écran AMOLED HD", "Cardio / SpO2 / Sommeil", "2 Bracelets Offerts"],
    description: "Montre intelligente complète : répondez à vos appels au poignet, recevez vos messages WhatsApp et suivez vos performances sportives."
  },
  {
    id: 21,
    name: "Pack Protection 360° : Coque Silicone Antichoc + 2 Verres 9H",
    category: "accessoires",
    purchasePrice: 2500,
    price: 5000,
    oldPrice: 8500,
    stock: 75,
    badge: "Pack Promo",
    rating: 4.8,
    reviewsCount: 320,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=700&q=80",
    specs: ["Coque Silicone Renforcée", "2 Verres Trempés 9H", "Protection Intégrale 360°"],
    description: "La protection indispensable pour votre téléphone contre les chutes et rayures. Disponible pour tous modèles Tecno, Samsung, Xiaomi et iPhone."
  },
  {
    id: 22,
    name: "Câble de Charge Rapide 3-en-1 Nylon Tressé (Type-C / Lightning / Micro)",
    category: "accessoires",
    purchasePrice: 1500,
    price: 3500,
    oldPrice: 5000,
    stock: 90,
    badge: "Pratique",
    rating: 4.7,
    reviewsCount: 210,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80",
    specs: ["3 Connecteurs en 1", "Nylon Tressé Ultra Résistant", "Charge Rapide 3.1A", "Longueur 1.2m"],
    description: "Rechargez tous vos appareils avec un seul câble résistant et indéchirable en nylon tressé."
  },
  {
    id: 23,
    name: "Enceinte Bluetooth Portable Waterproof Bass Boost RGB",
    category: "accessoires",
    purchasePrice: 10000,
    price: 16500,
    oldPrice: 22000,
    stock: 24,
    badge: "Audio HD",
    rating: 4.9,
    reviewsCount: 85,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=700&q=80",
    specs: ["Son Stéréo Bass Boost", "Étanche IPX5", "Autonomie 12h", "Lumières LED Dynamiques"],
    description: "Enceinte nomade puissante avec basses renforcées, radio FM, lecteur carte mémoire/USB et jeu de lumières festif."
  },
  {
    id: 24,
    name: "Support Téléphone Magnétique Voiture Rotation 360°",
    category: "accessoires",
    purchasePrice: 2000,
    price: 4500,
    oldPrice: 7000,
    stock: 50,
    badge: "Auto & Conduite",
    rating: 4.8,
    reviewsCount: 140,
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=700&q=80",
    specs: ["Aimant Néodyme Puissant", "Fixation Grille Aération", "Rotation 360°", "Compatible tous téléphones"],
    description: "Fixez votre smartphone en un clin d'œil dans votre véhicule pour utiliser votre GPS en toute sécurité."
  },

  // ==========================================
  // 3. RAYON ÉLECTROMÉNAGER (JUMIA SÉNÉGAL BEST-SELLERS)
  // ==========================================
  {
    id: 25,
    name: "Téléviseur Deska 43\" Smart Android Full HD Sans Bordure",
    category: "electromenager",
    purchasePrice: 92000,
    price: 119000,
    oldPrice: 139000,
    stock: 8,
    badge: "Best Seller TV",
    rating: 4.9,
    reviewsCount: 162,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=80",
    specs: ["Smart Android TV 43\"", "Résolution Full HD 1080p", "YouTube / Netflix / Prime Video", "Décodeur TNT & Satellite"],
    description: "Téléviseur intelligent Deska 43 pouces Frameless : écran ultra-lumineux, Wi-Fi intégré, Google Play Store et décodeur intégré."
  },
  {
    id: 26,
    name: "Téléviseur Smart Android 32\" HD Sans Bordure Frameless",
    category: "electromenager",
    purchasePrice: 52000,
    price: 69900,
    oldPrice: 85000,
    stock: 14,
    badge: "Top Affaire",
    rating: 4.8,
    reviewsCount: 130,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=700&q=80",
    specs: ["Écran 32\" HD Frameless", "Smart Android TV", "Wi-Fi / HDMI / USB", "TNT HD Intégrée"],
    description: "Écran LED 32 pouces sans bordure avec système Android TV complet, idéal pour salon ou chambre avec un son immersif."
  },
  {
    id: 27,
    name: "Téléviseur 55\" 4K Ultra HD Smart TV HDR10+ Dolby Audio",
    category: "electromenager",
    purchasePrice: 155000,
    price: 199000,
    oldPrice: 240000,
    stock: 5,
    badge: "Cinéma Maison",
    rating: 5.0,
    reviewsCount: 78,
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=700&q=80",
    specs: ["55\" 4K UHD (3840x2160)", "HDR10+ & Dolby Audio", "Google TV & Chromecast", "Design Frameless Métal"],
    description: "Une image 4K spectaculaire avec des couleurs éclatantes et un son cinéma Dolby pour sublimer vos films et matchs de football."
  },
  {
    id: 28,
    name: "Mini Filtre à Eau de Robinet 5 Couches Charbon Actif",
    category: "electromenager",
    purchasePrice: 1000,
    price: 2500,
    oldPrice: 4500,
    stock: 95,
    badge: "Santé & Éco",
    rating: 4.9,
    reviewsCount: 280,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=80",
    specs: ["5 Niveaux de Filtration", "Charbon Actif Purifiant", "Fixation Universelle Robinet", "Élimine Chlore & Rouille"],
    description: "Purificateur d'eau compact à charbon actif pour robinet de cuisine ou salle de bain. Élimine impuretés, calcaire, odeurs et résidus."
  },
  {
    id: 29,
    name: "Friteuse Sans Huile Air Fryer Digitale 6.0L 1800W",
    category: "electromenager",
    purchasePrice: 23000,
    price: 34500,
    oldPrice: 45000,
    stock: 16,
    badge: "Cuisine Saine",
    rating: 4.9,
    reviewsCount: 145,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=80",
    specs: ["Capacité Familiale 6.0L", "Cuisson 85% moins de gras", "Écran Tactile 8 Programmes", "Minuteur 60 min"],
    description: "Cuisinez frites croustillantes, poulet doré, poissons et pâtisseries sans huile avec une cuisson rapide par circulation d'air chaud 360°."
  },
  {
    id: 30,
    name: "Robot Mixeur Blender 2-en-1 Bol Verre 1.5L + Moulin 500W",
    category: "electromenager",
    purchasePrice: 11500,
    price: 17500,
    oldPrice: 24000,
    stock: 25,
    badge: "Best Seller",
    rating: 4.8,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=700&q=80",
    specs: ["Bol 1.5L Incassable", "Lames Inox Renforcées", "Moulin Épices & Café Inclus", "Moteur Puissant 500W"],
    description: "Robot mixeur multifonction parfait pour jus frais, smoothies, soupes sénégalaises, et moulin séparé pour piment, café et épices."
  },
  {
    id: 31,
    name: "Fer à Repasser à Vapeur Céramique 2200W Anticalcaire",
    category: "electromenager",
    purchasePrice: 8500,
    price: 13500,
    oldPrice: 18000,
    stock: 20,
    badge: "Essentiel",
    rating: 4.8,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=700&q=80",
    specs: ["Puissance 2200W", "Semelle Céramique Glisse Parfaite", "Jet Vapeur Pressing", "Système Antigoutte"],
    description: "Repassage rapide et impeccable de vos boubous et vêtements avec débit vapeur haute pression et semelle céramique antiadhésive."
  },
  {
    id: 32,
    name: "Bouilloire Électrique Inox 2.0 Litres 1500W Arrêt Auto",
    category: "electromenager",
    purchasePrice: 4000,
    price: 6900,
    oldPrice: 9500,
    stock: 40,
    badge: "Prix Choc",
    rating: 4.7,
    reviewsCount: 155,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=700&q=80",
    specs: ["Capacité 2.0L", "Corps Inox Alimentaire", "Ébullition Rapide en 3 min", "Arrêt Automatique"],
    description: "Bouilloire robuste en acier inoxydable pour préparer café, thé et eau chaude en un temps record en toute sécurité."
  },
  {
    id: 33,
    name: "Ventilateur Sur Pied Silencieux 16 Pouces 3 Vitesses",
    category: "electromenager",
    purchasePrice: 10000,
    price: 15500,
    oldPrice: 20000,
    stock: 18,
    badge: "Confort & Fraîcheur",
    rating: 4.8,
    reviewsCount: 95,
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=700&q=80",
    specs: ["Diamètre 40cm (16\")", "Oscillation 90°", "Hauteur Réglable", "Moteur Cuivre Silencieux"],
    description: "Ventilation puissante et silencieuse pour rafraîchir efficacement vos pièces pendant les journées chaudes à Dakar."
  },
  {
    id: 34,
    name: "Tondeuse Professionnelle Cheveux & Barbe Vintage T9 Métal",
    category: "electromenager",
    purchasePrice: 4500,
    price: 7900,
    oldPrice: 12000,
    stock: 35,
    badge: "Coiffure Pro",
    rating: 4.8,
    reviewsCount: 170,
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=700&q=80",
    specs: ["Lames T-Blade Précision 0mm", "Corps Métal Gravé Dragon", "Batterie Lithium USB", "4 Sabots Inclus"],
    description: "Tondeuse de barbier professionnelle rechargeable par USB pour contours nets, barbe impeccable et coupe de cheveux sans irritation."
  }
];

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

  if (!loginScreen || !dashboardLayout) return;

  if (isLogged) {
    loginScreen.style.display = "none";
    dashboardLayout.style.display = "block";
    try {
      loadData();
      renderDashboard();
    } catch (err) {
      console.error("Erreur lors de l'initialisation du tableau de bord:", err);
    }
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
// EMAIL NOTIFICATION SETTINGS (COMMANDE PAR EMAIL)
// ==========================================================================

const DEFAULT_STORE_EMAIL = "ileached@gmail.com";

function loadOrderEmailSettings() {
  const emailInput = document.getElementById("orderNotificationEmailInput");
  if (!emailInput) return;
  const savedEmail = localStorage.getItem("sunu_admin_email") || DEFAULT_STORE_EMAIL;
  emailInput.value = savedEmail;
}

window.saveOrderEmailSettings = function(e) {
  if (e) e.preventDefault();
  const emailInput = document.getElementById("orderNotificationEmailInput");
  if (!emailInput) return;
  const email = emailInput.value.trim();
  if (!email || !email.includes("@")) {
    showToast("Veuillez saisir une adresse email valide.", "warning");
    return;
  }
  localStorage.setItem("sunu_admin_email", email);
  showToast(`Adresse email de réception enregistrée : ${email}`, "success");
};

window.testOrderEmailNotification = async function() {
  const emailInput = document.getElementById("orderNotificationEmailInput");
  const testBtn = document.getElementById("testEmailBtn");
  const feedbackDiv = document.getElementById("emailTestFeedback");
  const email = emailInput ? emailInput.value.trim() : (localStorage.getItem("sunu_admin_email") || DEFAULT_STORE_EMAIL);

  if (!email || !email.includes("@")) {
    showToast("Veuillez saisir une adresse email valide avant de tester.", "warning");
    return;
  }

  // Save current email value
  localStorage.setItem("sunu_admin_email", email);

  const originalContent = testBtn ? testBtn.innerHTML : "Tester";
  if (testBtn) {
    testBtn.disabled = true;
    testBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Envoi en cours...';
  }
  if (feedbackDiv) {
    feedbackDiv.style.display = "block";
    feedbackDiv.innerHTML = '<div style="font-size:0.85rem; padding:0.6rem; border-radius:6px; background:#eff6ff; color:#1e40af; border:1px solid #bfdbfe;"><i class="fa-solid fa-circle-notch fa-spin"></i> Envoi d\'un email de test vers <strong>' + email + '</strong>...</div>';
  }

  const payload = {
    _subject: `🧪 TEST DE CONNEXION SUNU SOLUTION SHOP - ${new Date().toLocaleTimeString()}`,
    _template: "table",
    _captcha: "false",
    "Statut": "Test de réception email réussi ✅",
    "Boutique": "SUNU SOLUTION Dakar",
    "Date & Heure": new Date().toLocaleString("fr-FR"),
    "Message": "Félicitations ! Votre site SUNU SOLUTION est correctement connecté à votre boîte email. Vous recevrez désormais les commandes du panier directement ici."
  };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => ({}));

    if (data.success === "true" || data.success === true) {
      showToast(`Email de test envoyé avec succès à ${email} !`, "success");
      if (feedbackDiv) {
        feedbackDiv.innerHTML = `
          <div style="font-size: 0.85rem; padding: 0.75rem; border-radius: 8px; background: #f0fdf4; color: #166534; border: 1px solid #86efac;">
            <strong style="display:flex; align-items:center; gap:0.5rem;"><i class="fa-solid fa-circle-check"></i> Connexion réussie !</strong>
            <p style="margin: 0.35rem 0 0 0;">L'email de test a bien été expédié. Vérifiez la boîte de réception (ou le dossier spams) de <strong>${email}</strong>.</p>
          </div>
        `;
      }
    } else if (data.message && data.message.toLowerCase().includes("activation")) {
      showToast("Activation requise par FormSubmit !", "warning");
      if (feedbackDiv) {
        feedbackDiv.innerHTML = `
          <div style="font-size: 0.85rem; padding: 0.75rem; border-radius: 8px; background: #fffbeb; color: #92400e; border: 1px solid #fde68a;">
            <strong style="display:flex; align-items:center; gap:0.5rem;"><i class="fa-solid fa-triangle-exclamation" style="color:#d97706;"></i> Action requise : Activez votre boîte email</strong>
            <p style="margin: 0.35rem 0 0 0;">FormSubmit vient de vous envoyer un email de confirmation à <strong>${email}</strong>. Ouvrez cet email et cliquez sur le bouton <strong>"Activate Form"</strong> pour commencer à recevoir les commandes.</p>
          </div>
        `;
      }
    } else if (data.message && data.message.includes("web server")) {
      showToast("Attention : FormSubmit requiert un serveur web (pas file://).", "warning");
      if (feedbackDiv) {
        feedbackDiv.innerHTML = `
          <div style="font-size: 0.85rem; padding: 0.75rem; border-radius: 8px; background: #fef2f2; color: #991b1b; border: 1px solid #fecaca;">
            <strong style="display:flex; align-items:center; gap:0.5rem;"><i class="fa-solid fa-circle-exclamation"></i> Exécution en local direct détectée</strong>
            <p style="margin: 0.35rem 0 0 0;">FormSubmit bloque les requêtes directes ouvertes en fichier (<code>file://</code>). Veuillez lancer le site avec un serveur local (ex: Live Server ou <code>python3 -m http.server</code>) ou le tester une fois déployé sur le web.</p>
          </div>
        `;
      }
    } else {
      const errMsg = data.message || "Erreur de transmission.";
      showToast(errMsg, "error");
      if (feedbackDiv) {
        feedbackDiv.innerHTML = `
          <div style="font-size: 0.85rem; padding: 0.75rem; border-radius: 8px; background: #fef2f2; color: #991b1b; border: 1px solid #fecaca;">
            <strong><i class="fa-solid fa-circle-xmark"></i> Erreur :</strong> ${errMsg}
          </div>
        `;
      }
    }
  } catch (err) {
    console.error("Test email exception:", err);
    showToast("Erreur réseau lors du test d'email.", "error");
    if (feedbackDiv) {
      feedbackDiv.innerHTML = `
        <div style="font-size: 0.85rem; padding: 0.75rem; border-radius: 8px; background: #fef2f2; color: #991b1b; border: 1px solid #fecaca;">
          <strong style="display:flex; align-items:center; gap:0.5rem;"><i class="fa-solid fa-circle-xmark"></i> Échec de connexion :</strong>
          <p style="margin: 0.35rem 0 0 0;">Impossible de joindre le service d'envoi. Vérifiez votre connexion internet ou assurez-vous d'utiliser un serveur HTTP local.</p>
        </div>
      `;
    }
  } finally {
    if (testBtn) {
      testBtn.disabled = false;
      testBtn.innerHTML = originalContent;
    }
  }
};

window.triggerDirectActivation = function() {
  const emailInput = document.getElementById("orderNotificationEmailInput");
  const email = emailInput ? emailInput.value.trim() : (localStorage.getItem("sunu_admin_email") || DEFAULT_STORE_EMAIL);

  if (!email || !email.includes("@")) {
    showToast("Veuillez saisir une adresse email valide.", "warning");
    return;
  }

  localStorage.setItem("sunu_admin_email", email);

  const form = document.getElementById("directFormSubmitForm");
  if (form) {
    form.action = `https://formsubmit.co/${email}`;
    form.submit();
    showToast("Page FormSubmit ouverte dans un nouvel onglet pour forcer l'envoi de l'activation.", "info");
  }
};

// ==========================================================================
// 2. DATA MANAGEMENT (LOCALSTORAGE SYNC)
// ==========================================================================

function loadData() {
  const currencyVersion = localStorage.getItem("sunu_currency_ver");
  let savedProducts = localStorage.getItem("phonepulse_products");
  
  if (!savedProducts || currencyVersion !== "v5_jumia_senegal") {
    if (typeof DEFAULT_PRODUCTS !== 'undefined' && DEFAULT_PRODUCTS.length) {
      localStorage.setItem("phonepulse_products", JSON.stringify(DEFAULT_PRODUCTS));
      localStorage.setItem("sunu_currency_ver", "v5_jumia_senegal");
      savedProducts = JSON.stringify(DEFAULT_PRODUCTS);
    }
  }

  const savedSales = localStorage.getItem("phonepulse_sales");

  try {
    const parsed = savedProducts ? JSON.parse(savedProducts) : null;
    products = Array.isArray(parsed) && parsed.length ? parsed : (typeof DEFAULT_PRODUCTS !== 'undefined' ? [...DEFAULT_PRODUCTS] : []);
  } catch (e) {
    console.error("Erreur lecture produits localStorage:", e);
    products = typeof DEFAULT_PRODUCTS !== 'undefined' ? [...DEFAULT_PRODUCTS] : [];
  }

  // Ensure each product has a purchasePrice (fall back to ~75% of price if omitted)
  products.forEach(p => {
    if (p && (!p.purchasePrice || isNaN(p.purchasePrice) || p.purchasePrice <= 0)) {
      p.purchasePrice = Math.round((p.price || 0) * 0.75);
    }
  });

  try {
    const parsedSales = savedSales ? JSON.parse(savedSales) : null;
    sales = Array.isArray(parsedSales) ? parsedSales : [];
  } catch (e) {
    console.error("Erreur lecture ventes localStorage:", e);
    sales = [];
  }
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
  if (!Array.isArray(products)) products = [];
  if (!Array.isArray(sales)) sales = [];

  // 1. Calculate KPI Metrics
  const totalPurchaseStockValue = products.reduce((sum, p) => sum + ((p.purchasePrice || Math.round((p.price || 0) * 0.75)) * (p.stock || 0)), 0);
  const totalStockValue = products.reduce((sum, p) => sum + ((p.price || 0) * (p.stock || 0)), 0);
  const estimatedMargin = totalStockValue - totalPurchaseStockValue;
  const totalUnits = products.reduce((sum, p) => sum + (p.stock || 0), 0);
  const totalSalesCount = sales.length;
  const totalSalesRevenue = sales.reduce((sum, s) => sum + (s.total || 0), 0);
  const lowStockCount = products.filter(p => (p.stock || 0) < 5).length;

  const setElText = (id, txt) => {
    const el = document.getElementById(id);
    if (el) el.textContent = txt;
  };

  setElText("kpiPurchaseStockValue", formatFCFA(totalPurchaseStockValue));
  setElText("kpiStockValue", formatFCFA(totalStockValue));
  setElText("kpiStockMarginTrend", `+${formatFCFA(estimatedMargin)} marge brute`);
  setElText("kpiTotalUnits", totalUnits);
  setElText("kpiTotalProductsRef", `${products.length} références`);
  setElText("kpiTotalSales", totalSalesCount);
  setElText("kpiSalesRevenue", `${formatFCFA(totalSalesRevenue)} encaissés`);
  setElText("kpiLowStockAlerts", lowStockCount);

  setElText("tabStockCount", products.length);
  setElText("tabSalesCount", sales.length);

  // 2. Render Stock Table
  renderStockTable();

  // 3. Render Sales Table
  renderSalesTable();

  // 4. Load Order Email Settings
  loadOrderEmailSettings();
}

function renderCategorySubtotals() {
  const container = document.getElementById("categorySubtotalsWrapper");
  if (!container) return;

  if (!Array.isArray(products)) products = [];

  const categories = [
    { key: "telephonie", label: "📱 Téléphonie", icon: "fa-mobile-screen" },
    { key: "accessoires", label: "🎧 Accessoires", icon: "fa-headphones" },
    { key: "electromenager", label: "📺 Électroménager", icon: "fa-tv" },
    { key: "ventilo", label: "🌀 Ventilateurs", icon: "fa-fan" },
    { key: "climatiseur", label: "❄️ Climatiseurs", icon: "fa-snowflake" }
  ];

  const select = document.getElementById("adminStockCategoryFilter");
  const activeCat = select ? select.value : "all";

  container.innerHTML = categories.map(cat => {
    const catProducts = products.filter(p => p && (p.category === cat.key || (cat.key === "electromenager" && (p.category === "maison" || p.category === "electromenager"))));
    const catUnits = catProducts.reduce((sum, p) => sum + (p.stock || 0), 0);
    const catPurchaseTotal = catProducts.reduce((sum, p) => sum + ((p.purchasePrice || Math.round((p.price || 0) * 0.75)) * (p.stock || 0)), 0);
    const catSellingTotal = catProducts.reduce((sum, p) => sum + ((p.price || 0) * (p.stock || 0)), 0);
    const isActive = activeCat === cat.key;

    return `
      <div class="cat-subtotal-chip ${isActive ? 'active' : ''}" onclick="selectCategorySubtotalFilter('${cat.key}')" title="Filtrer uniquement la catégorie ${cat.label}">
        <div class="cat-subtotal-header">
          <span>${cat.label}</span>
          <span style="background: rgba(79, 70, 229, 0.1); color: #4f46e5; padding: 0.15rem 0.45rem; border-radius: 99px; font-size: 0.7rem; font-weight: 700;">${catProducts.length} réf.</span>
        </div>
        <div class="cat-subtotal-amount">${formatFCFA(catPurchaseTotal)}</div>
        <div class="cat-subtotal-meta">
          <span>Achat total (${catUnits} u.)</span>
          <span style="color: #059669; font-weight: 600;">Vente: ${formatFCFA(catSellingTotal)}</span>
        </div>
      </div>
    `;
  }).join("");
}

window.selectCategorySubtotalFilter = function(catKey) {
  const select = document.getElementById("adminStockCategoryFilter");
  if (!select) return;
  
  // Toggle selection if already active
  if (select.value === catKey) {
    select.value = "all";
  } else {
    select.value = catKey;
  }
  
  const searchInput = document.getElementById("adminStockSearch");
  const query = searchInput ? searchInput.value : "";
  renderStockTable(query, select.value);
};

function renderStockTable(query = "", categoryFilter = "") {
  const tbody = document.getElementById("adminStockTableBody");
  if (!tbody) return;

  if (!Array.isArray(products)) products = [];

  const catSelect = document.getElementById("adminStockCategoryFilter");
  const selectedCat = categoryFilter || (catSelect ? catSelect.value : "all");

  // Render category breakdown chips
  renderCategorySubtotals();

  const filtered = products.filter(p => {
    if (!p) return false;

    // 1. Category Filter
    let matchesCategory = true;
    if (selectedCat !== "all") {
      if (selectedCat === "electromenager") {
        matchesCategory = (p.category === "electromenager" || p.category === "maison");
      } else {
        matchesCategory = (p.category === selectedCat);
      }
    }

    // 2. Text Search Query Filter
    if (!query) return matchesCategory;
    const q = query.toLowerCase().trim();
    const name = (p.name || "").toLowerCase();
    const cat = (p.category || "").toLowerCase();
    const matchesSearch = name.includes(q) || cat.includes(q);

    return matchesCategory && matchesSearch;
  });

  // Calculate Subtotals for the Filtered Selection
  const filteredPurchaseTotal = filtered.reduce((sum, p) => sum + ((p.purchasePrice || Math.round((p.price || 0) * 0.75)) * (p.stock || 0)), 0);
  const filteredSellingTotal = filtered.reduce((sum, p) => sum + ((p.price || 0) * (p.stock || 0)), 0);
  const filteredMargin = filteredSellingTotal - filteredPurchaseTotal;
  const filteredUnits = filtered.reduce((sum, p) => sum + (p.stock || 0), 0);

  // Render Filtered Subtotal Banner
  const banner = document.getElementById("filteredSubtotalBanner");
  if (banner) {
    const catLabels = {
      all: "Toutes les catégories",
      telephonie: "📱 Téléphonie",
      accessoires: "🎧 Accessoires",
      electromenager: "📺 Électroménager",
      ventilo: "🌀 Ventilateurs",
      climatiseur: "❄️ Climatiseurs"
    };
    const currentLabel = catLabels[selectedCat] || selectedCat;

    banner.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(99, 102, 241, 0.2); display: flex; align-items: center; justify-content: center; color: #818cf8; font-size: 1.25rem;">
          <i class="fa-solid fa-calculator"></i>
        </div>
        <div>
          <strong style="font-size: 1.05rem; color: #ffffff;">Sous-totaux d'Achat : ${currentLabel}</strong>
          <div style="font-size: 0.8rem; color: #cbd5e1;">${filtered.length} référence(s) sélectionnée(s) • ${filteredUnits} unités physiques en stock</div>
        </div>
      </div>
      
      <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
        <div class="subtotal-stat-item">
          <span class="subtotal-stat-label">Total Prix d'Achat (Coût)</span>
          <span class="subtotal-stat-value achat">${formatFCFA(filteredPurchaseTotal)}</span>
        </div>
        <div class="subtotal-stat-item">
          <span class="subtotal-stat-label">Total Prix de Vente (Valeur)</span>
          <span class="subtotal-stat-value vente">${formatFCFA(filteredSellingTotal)}</span>
        </div>
        <div class="subtotal-stat-item">
          <span class="subtotal-stat-label">Marge Brute Potentielle</span>
          <span class="subtotal-stat-value marge">+${formatFCFA(filteredMargin)}</span>
        </div>
      </div>
    `;
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: #94a3b8; padding: 2rem;">Aucun article ne correspond aux filtres de recherche.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(p => {
    const stock = p.stock || 0;
    const purchasePrice = p.purchasePrice || Math.round((p.price || 0) * 0.75);
    let statusBadge = `<span class="badge-stock-in">En stock (${stock})</span>`;
    if (stock === 0) statusBadge = `<span class="badge-stock-out">Rupture (0)</span>`;
    else if (stock < 5) statusBadge = `<span class="badge-stock-low">Stock Faible (${stock})</span>`;

    const catLabels = {
      telephonie: "📱 Téléphonie",
      smartphones: "📱 Téléphonie",
      accessoires: "🎧 Accessoires",
      coques: "🎧 Accessoires",
      chargeurs: "🎧 Accessoires",
      audio: "🎧 Accessoires",
      montres: "🎧 Accessoires",
      electromenager: "📺 Électroménager",
      ventilo: "🌀 Ventilateurs",
      climatiseur: "❄️ Climatiseurs"
    };
    const categoryDisplay = catLabels[p.category] || p.category || "Autre";

    return `
      <tr>
        <td>
          <div class="table-product-cell">
            <div style="position: relative; display: inline-block;">
              <img src="${p.image || ''}" alt="${p.name || ''}" class="table-product-thumb" onclick="openEditProductModal(${p.id})" style="cursor: pointer;" title="Cliquer pour modifier les photos ou infos">
              ${p.image2 ? `<span style="position: absolute; bottom: -2px; right: -2px; background: #059669; color: white; font-size: 0.6rem; font-weight: 800; padding: 0.1rem 0.25rem; border-radius: 4px; border: 1px solid white;" title="2 photos disponibles">2📷</span>` : ''}
            </div>
            <div>
              <strong style="cursor: pointer;" onclick="openEditProductModal(${p.id})" title="Modifier">${p.name || 'Produit sans nom'}</strong>
              <div style="font-size: 0.75rem; color: #64748b;">Réf: #${p.id || ''} ${p.image2 ? '• <span style="color:#059669; font-weight:600;"><i class="fa-solid fa-images"></i> 2 photos</span>' : ''}</div>
            </div>
          </div>
        </td>
        <td><span style="font-weight: 600; color: #1e40af;">${categoryDisplay}</span></td>
        <td><span style="font-weight: 600; color: #475569; background: #f1f5f9; padding: 0.25rem 0.5rem; border-radius: 6px; font-size: 0.85rem;">${formatFCFA(purchasePrice)}</span></td>
        <td><strong>${formatFCFA(p.price || 0)}</strong></td>
        <td>${p.oldPrice ? `<span style="text-decoration: line-through; color: #94a3b8;">${formatFCFA(p.oldPrice)}</span>` : '-'}</td>
        <td><strong>${stock}</strong> unités</td>
        <td>${statusBadge}</td>
        <td>
          <div class="table-action-btns">
            <button class="btn-tbl-action" onclick="openEditProductModal(${p.id})" title="Modifier le produit & l'image"><i class="fa-solid fa-pen"></i></button>
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

  if (!Array.isArray(sales) || sales.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: #94a3b8; padding: 2rem;">Aucune vente enregistrée pour le moment.</td></tr>`;
    return;
  }

  tbody.innerHTML = sales.filter(s => s != null).map(s => {
    let statusBadge = `<span class="badge-stock-in">${s.status || 'Payé'}</span>`;
    if (s.status === "Annulée") {
      statusBadge = `<span class="badge-stock-out">Annulée</span>`;
    } else if (s.status === "En cours") {
      statusBadge = `<span class="badge-stock-low">En cours</span>`;
    }

    const isCancelled = s.status === "Annulée";

    return `
      <tr>
        <td><strong>${s.id || ''}</strong></td>
        <td>${s.date || ''}</td>
        <td>
          <div><strong>${s.customer || 'Client'}</strong></div>
          <div style="font-size: 0.75rem; color: #64748b;"><i class="fa-solid fa-phone"></i> ${s.phone || 'Non renseigné'}</div>
        </td>
        <td style="max-width: 250px; white-space: normal; font-size: 0.8rem;">${s.items || ''}</td>
        <td><strong style="color: #2563eb;">${formatFCFA(s.total || 0)}</strong></td>
        <td><span class="spec-chip">${s.paymentMethod || 'Espèces'}</span></td>
        <td>${statusBadge}</td>
        <td>
          <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
            <button class="btn btn-outline btn-sm" onclick="printReceipt('${s.id}')" title="Imprimer le ticket de caisse" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;">
              <i class="fa-solid fa-receipt"></i> Ticket
            </button>
            ${isCancelled ? `
              <button class="btn btn-outline btn-sm" onclick="restoreSale('${s.id}')" title="Rétablir cette commande" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; color: #16a34a; border-color: #86efac;">
                <i class="fa-solid fa-rotate-left"></i> Rétablir
              </button>
            ` : `
              <button class="btn btn-sm" onclick="cancelSale('${s.id}')" title="Annuler cette commande" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; background-color: #fef3c7; color: #b45309; border: 1px solid #fcd34d; font-weight: 600; cursor: pointer;">
                <i class="fa-solid fa-ban"></i> Annuler
              </button>
            `}
            <button class="btn btn-sm" onclick="deleteSale('${s.id}')" title="Supprimer la commande" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; background-color: #fee2e2; color: #dc2626; border: 1px solid #fca5a5; font-weight: 600; cursor: pointer;">
              <i class="fa-solid fa-trash"></i> Supprimer
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

// Order Management Actions: Cancel, Restore & Delete
window.cancelSale = function(saleId) {
  if (!confirm(`Voulez-vous vraiment annuler la commande N° ${saleId} ?`)) return;
  const sale = sales.find(s => String(s.id) === String(saleId));
  if (sale) {
    sale.status = "Annulée";
    saveSales();
    renderDashboard();
    showToast(`La commande ${saleId} a été marquée comme annulée.`, "warning");
  }
};

window.restoreSale = function(saleId) {
  const sale = sales.find(s => String(s.id) === String(saleId));
  if (sale) {
    sale.status = "Payé";
    saveSales();
    renderDashboard();
    showToast(`La commande ${saleId} a été réactivée avec succès.`, "success");
  }
};

window.deleteSale = function(saleId) {
  if (!confirm(`Voulez-vous vraiment SUPPRIMER définitivement la commande N° ${saleId} ? Cette action est irréversible.`)) return;
  sales = sales.filter(s => String(s.id) !== String(saleId));
  saveSales();
  renderDashboard();
  showToast(`La commande ${saleId} a été supprimée définitivement.`, "success");
};

// Switch tabs in Admin
window.switchAdminTab = function(tabId) {
  document.querySelectorAll(".admin-tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".admin-tab-content").forEach(content => content.classList.remove("active"));

  const targetContent = document.getElementById(tabId);
  if (targetContent) targetContent.classList.add("active");

  const btnIndex = ['stockTab', 'addTab', 'salesTab', 'settingsTab'].indexOf(tabId);
  const btns = document.querySelectorAll(".admin-tab-btn");
  if (btns[btnIndex]) btns[btnIndex].classList.add("active");

  if (tabId === 'settingsTab') {
    loadOrderEmailSettings();
  }
};

// ==========================================================================
// 4. ADD & EDIT PRODUCT LOGIC WITH IMAGE UPLOADER & COMPRESSOR
// ==========================================================================

// Global state for uploaded images (Base64 data or URL)
// Global state for uploaded images (Base64 data or URL for 2 image slots)
const currentUploadedImages = {
  add1: null,
  add2: null,
  edit1: null,
  edit2: null
};

// Switch image mode (File upload vs URL)
window.switchImageSourceTab = function(context, mode) {
  const fileTab = document.getElementById(`${context}ImgFileTab`);
  const urlTab = document.getElementById(`${context}ImgUrlTab`);
  const dropzone = document.getElementById(`${context}ImgDropzone`);
  const urlPanel = document.getElementById(`${context}ImgUrlPanel`);

  if (mode === 'file') {
    if (fileTab) fileTab.classList.add("active");
    if (urlTab) urlTab.classList.remove("active");
    if (dropzone) dropzone.style.display = "block";
    if (urlPanel) urlPanel.style.display = "none";
  } else {
    if (urlTab) urlTab.classList.add("active");
    if (fileTab) fileTab.classList.remove("active");
    if (dropzone) dropzone.style.display = "none";
    if (urlPanel) urlPanel.style.display = "block";
  }
};

window.triggerFileInput = function(inputId) {
  const input = document.getElementById(inputId);
  if (input) input.click();
};

// Client-side Image Resizing & Compression (Max 800x800, quality 0.85)
function compressAndConvertImage(file, maxWidth = 800, maxHeight = 800, quality = 0.85) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.match(/image.*/)) {
      return reject(new Error("Veuillez sélectionner un fichier image valide (JPG, PNG, WEBP)."));
    }
    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error("Erreur lors de la lecture du fichier image."));
      img.src = readerEvent.target.result;
    };
    reader.onerror = () => reject(new Error("Impossible de lire ce fichier."));
    reader.readAsDataURL(file);
  });
}

// Handle File Selection (Camera / Disk / Gallery)
window.handleImageFileSelect = async function(event, context) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  try {
    const compressedDataUrl = await compressAndConvertImage(file);
    currentUploadedImages[context] = compressedDataUrl;

    const previewWrap = document.getElementById(`${context}ImgPreviewWrap`);
    const previewImg = document.getElementById(`${context}ImgPreview`);
    const statusText = document.getElementById(`${context}ImgStatusText`);

    if (previewImg) previewImg.src = compressedDataUrl;
    if (previewWrap) previewWrap.style.display = "flex";
    if (statusText) statusText.innerHTML = '<i class="fa-solid fa-circle-check"></i> Nouvelle photo chargée';

    showToast("Photo chargée et optimisée !", "success");
  } catch (err) {
    showToast(err.message || "Erreur lors du chargement de l'image.", "error");
  }
};

// Handle URL Input Live Preview
window.handleImageUrlInput = function(context) {
  let inputId = "newProdImage1";
  if (context === 'add2') inputId = "newProdImage2";
  if (context === 'edit1') inputId = "editProdImage1";
  if (context === 'edit2') inputId = "editProdImage2";

  const urlInput = document.getElementById(inputId);
  const url = urlInput ? urlInput.value.trim() : "";

  if (url && (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("data:image"))) {
    currentUploadedImages[context] = url;
    const previewWrap = document.getElementById(`${context}ImgPreviewWrap`);
    const previewImg = document.getElementById(`${context}ImgPreview`);
    if (previewImg) previewImg.src = url;
    if (previewWrap) previewWrap.style.display = "flex";
  }
};

// Clear image selection
window.clearImageSelection = function(context) {
  currentUploadedImages[context] = null;

  let fileInputId = "newProdFileInput1";
  let urlInputId = "newProdImage1";
  if (context === 'add2') { fileInputId = "newProdFileInput2"; urlInputId = "newProdImage2"; }
  if (context === 'edit1') { fileInputId = "editProdFileInput1"; urlInputId = "editProdImage1"; }
  if (context === 'edit2') { fileInputId = "editProdFileInput2"; urlInputId = "editProdImage2"; }

  const fileInput = document.getElementById(fileInputId);
  const urlInput = document.getElementById(urlInputId);
  const previewWrap = document.getElementById(`${context}ImgPreviewWrap`);
  const previewImg = document.getElementById(`${context}ImgPreview`);

  if (fileInput) fileInput.value = "";
  if (urlInput) urlInput.value = "";
  if (previewImg) previewImg.src = "";
  if (previewWrap) previewWrap.style.display = "none";
};

// Setup Drag and Drop Listeners for dropzones
function setupDropzones() {
  const contexts = ['add1', 'add2', 'edit1', 'edit2'];
  contexts.forEach(ctx => {
    const el = document.getElementById(`${ctx}ImgDropzone`);
    if (!el) return;

    ['dragenter', 'dragover'].forEach(eventName => {
      el.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        el.classList.add('dragover');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      el.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        el.classList.remove('dragover');
      }, false);
    });

    el.addEventListener('drop', async (e) => {
      const dt = e.dataTransfer;
      const file = dt.files && dt.files[0];
      if (file) {
        try {
          const compressedDataUrl = await compressAndConvertImage(file);
          currentUploadedImages[ctx] = compressedDataUrl;

          const previewWrap = document.getElementById(`${ctx}ImgPreviewWrap`);
          const previewImg = document.getElementById(`${ctx}ImgPreview`);
          if (previewImg) previewImg.src = compressedDataUrl;
          if (previewWrap) previewWrap.style.display = "flex";

          showToast("Photo importée par glisser-déposer !", "success");
        } catch (err) {
          showToast(err.message || "Erreur lors du dépôt de l'image.", "error");
        }
      }
    }, false);
  });
}

// Initialize Dropzones once DOM is ready
document.addEventListener("DOMContentLoaded", setupDropzones);
setTimeout(setupDropzones, 500);

// Add Product Form Submit
const addProductFormEl = document.getElementById("addProductForm");
if (addProductFormEl) {
  addProductFormEl.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("newProdName").value.trim();
  const category = document.getElementById("newProdCategory").value;
  const price = parseFloat(document.getElementById("newProdPrice").value);
  const purchasePriceInput = document.getElementById("newProdPurchasePrice");
  const purchasePrice = (purchasePriceInput && purchasePriceInput.value) ? parseFloat(purchasePriceInput.value) : Math.round(price * 0.75);
  const oldPrice = parseFloat(document.getElementById("newProdOldPrice").value) || null;
  const stock = parseInt(document.getElementById("newProdStock").value, 10);
  const badge = document.getElementById("newProdBadge").value;
  const urlImage1 = document.getElementById("newProdImage1") ? document.getElementById("newProdImage1").value.trim() : "";
  const urlImage2 = document.getElementById("newProdImage2") ? document.getElementById("newProdImage2").value.trim() : "";
  const specsRaw = document.getElementById("newProdSpecs").value.trim();
  const desc = document.getElementById("newProdDesc").value.trim();

  // Selected image 1 & 2 resolution priority
  const finalImage1 = currentUploadedImages.add1 || urlImage1 || getPresetImageForCategory(category);
  const finalImage2 = currentUploadedImages.add2 || urlImage2 || null;

  const newProd = {
    id: Date.now(),
    name,
    category,
    purchasePrice,
    price,
    oldPrice,
    stock,
    badge,
    rating: 5.0,
    reviewsCount: 1,
    image: finalImage1,
    image2: finalImage2,
    specs: specsRaw ? specsRaw.split(",").map(s => s.trim()) : ["Garantie 12 Mois"],
    description: desc || "Article neuf disponible chez SUNU SOLUTION à Dalifort-Foirail."
  };

  products.unshift(newProd);
  saveProducts();
  renderDashboard();

  this.reset();
  clearImageSelection('add1');
  clearImageSelection('add2');
  showToast(`Le produit "${name}" (${formatFCFA(price)}) a été ajouté avec succès !`, "success");
    switchAdminTab("stockTab");
  });
}

function getPresetImageForCategory(cat) {
  const presets = {
    telephonie: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",
    accessoires: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    electromenager: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=80"
  };
  return presets[cat] || presets.telephonie;
}

window.setPresetImage = function() {
  const cat = document.getElementById("newProdCategory").value;
  const preset = getPresetImageForCategory(cat);
  const input1 = document.getElementById("newProdImage1");
  if (input1) input1.value = preset;
  currentUploadedImages.add1 = preset;
  
  const previewWrap = document.getElementById("add1ImgPreviewWrap");
  const previewImg = document.getElementById("add1ImgPreview");
  if (previewImg) previewImg.src = preset;
  if (previewWrap) previewWrap.style.display = "flex";
};

// Edit Product Modal
window.openEditProductModal = function(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  document.getElementById("editProdId").value = prod.id;
  document.getElementById("editProdName").value = prod.name;
  const purchaseInput = document.getElementById("editProdPurchasePrice");
  if (purchaseInput) purchaseInput.value = prod.purchasePrice || Math.round((prod.price || 0) * 0.75);
  document.getElementById("editProdPrice").value = prod.price;
  document.getElementById("editProdOldPrice").value = prod.oldPrice || "";
  document.getElementById("editProdStock").value = prod.stock;
  document.getElementById("editProdCategory").value = prod.category;

  // Load existing images into edit state & preview
  currentUploadedImages.edit1 = prod.image || null;
  currentUploadedImages.edit2 = prod.image2 || null;

  const editImg1Input = document.getElementById("editProdImage1");
  if (editImg1Input) editImg1Input.value = (prod.image && !prod.image.startsWith("data:")) ? prod.image : "";

  const editImg2Input = document.getElementById("editProdImage2");
  if (editImg2Input) editImg2Input.value = (prod.image2 && !prod.image2.startsWith("data:")) ? prod.image2 : "";

  // Preview 1
  const previewWrap1 = document.getElementById("edit1ImgPreviewWrap");
  const previewImg1 = document.getElementById("edit1ImgPreview");
  if (previewImg1) previewImg1.src = prod.image || "";
  if (previewWrap1) previewWrap1.style.display = prod.image ? "flex" : "none";

  // Preview 2
  const previewWrap2 = document.getElementById("edit2ImgPreviewWrap");
  const previewImg2 = document.getElementById("edit2ImgPreview");
  if (previewImg2) previewImg2.src = prod.image2 || "";
  if (previewWrap2) previewWrap2.style.display = prod.image2 ? "flex" : "none";

  switchImageSourceTab('edit1', 'file');
  switchImageSourceTab('edit2', 'file');
  document.getElementById("editProductModal").style.display = "flex";
};

window.closeEditProductModal = function() {
  document.getElementById("editProductModal").style.display = "none";
  clearImageSelection('edit1');
  clearImageSelection('edit2');
};

window.saveEditedProduct = function(e) {
  e.preventDefault();
  const id = parseInt(document.getElementById("editProdId").value, 10);
  const prod = products.find(p => p.id === id);
  if (!prod) return;

  prod.name = document.getElementById("editProdName").value.trim();
  const purchaseInput = document.getElementById("editProdPurchasePrice");
  if (purchaseInput && purchaseInput.value) {
    prod.purchasePrice = parseFloat(purchaseInput.value);
  } else if (!prod.purchasePrice) {
    prod.purchasePrice = Math.round((prod.price || 0) * 0.75);
  }
  prod.price = parseFloat(document.getElementById("editProdPrice").value);
  prod.oldPrice = parseFloat(document.getElementById("editProdOldPrice").value) || null;
  prod.stock = parseInt(document.getElementById("editProdStock").value, 10);
  prod.category = document.getElementById("editProdCategory").value;

  // Save new or updated images if changed
  const urlVal1 = document.getElementById("editProdImage1") ? document.getElementById("editProdImage1").value.trim() : "";
  const urlVal2 = document.getElementById("editProdImage2") ? document.getElementById("editProdImage2").value.trim() : "";

  if (currentUploadedImages.edit1) {
    prod.image = currentUploadedImages.edit1;
  } else if (urlVal1) {
    prod.image = urlVal1;
  }

  if (currentUploadedImages.edit2) {
    prod.image2 = currentUploadedImages.edit2;
  } else if (urlVal2) {
    prod.image2 = urlVal2;
  } else if (urlVal2 === "") {
    // cleared image 2
    prod.image2 = null;
  }

  saveProducts();
  renderDashboard();
  closeEditProductModal();
  showToast(`Mise à jour effectuée avec succès pour "${prod.name}" !`, "success");
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
// 5. MANUAL POS SALE RECORDING (ENCAISSEMENT VENTE PAR CATÉGORIE ET PRIX DE VENTE)
// ==========================================================================

const POS_CATEGORY_MAP = {
  telephonie: "📱 Téléphonie",
  accessoires: "🎧 Accessoires",
  electromenager: "📺 Électroménager Général",
  ventilo: "🌀 Électroménager - Ventilateurs",
  climatiseur: "❄️ Électroménager - Climatiseurs",
  maison: "🏠 Équipement Maison"
};

window.renderSaleProductOptions = function() {
  const categoryFilterSelect = document.getElementById("saleCategoryFilter");
  const categoryFilter = categoryFilterSelect ? categoryFilterSelect.value : "all";
  const select = document.getElementById("saleProductSelect");
  if (!select) return;

  if (!Array.isArray(products)) products = [];

  let filtered = products;
  if (categoryFilter !== "all") {
    if (categoryFilter === "electromenager") {
      filtered = products.filter(p => p.category === "electromenager" || p.category === "maison");
    } else {
      filtered = products.filter(p => p.category === categoryFilter);
    }
  }

  if (filtered.length === 0) {
    select.innerHTML = `<option value="" disabled selected>Aucun produit disponible dans cette catégorie</option>`;
    return;
  }

  // Group products by category
  const groups = {};
  filtered.forEach(p => {
    const catKey = p.category || "autre";
    if (!groups[catKey]) groups[catKey] = [];
    groups[catKey].push(p);
  });

  let optionsHTML = "";
  for (const [catKey, prods] of Object.entries(groups)) {
    const groupLabel = POS_CATEGORY_MAP[catKey] || `📦 ${catKey.toUpperCase()}`;
    optionsHTML += `<optgroup label="${groupLabel}">`;
    prods.forEach(p => {
      const stockBadge = p.stock > 0 ? `Stock: ${p.stock}` : `Rupture de stock`;
      optionsHTML += `
        <option value="${p.id}" ${p.stock <= 0 ? 'disabled' : ''}>
          ${p.name} — Prix de vente: ${formatFCFA(p.price || 0)} (${stockBadge})
        </option>
      `;
    });
    optionsHTML += `</optgroup>`;
  }

  select.innerHTML = optionsHTML;
};

window.onSaleCategoryChange = function() {
  renderSaleProductOptions();
  onSaleProductChange();
};

window.onSaleProductChange = function() {
  const select = document.getElementById("saleProductSelect");
  const unitPriceInput = document.getElementById("saleUnitPrice");
  if (!select || !unitPriceInput) return;

  const prodId = parseInt(select.value, 10);
  const prod = products.find(p => p.id === prodId);
  if (prod) {
    unitPriceInput.value = prod.price || 0;
  } else {
    unitPriceInput.value = 0;
  }

  calculateSaleTotal();
};

window.calculateSaleTotal = function() {
  const unitPriceInput = document.getElementById("saleUnitPrice");
  const quantityInput = document.getElementById("saleQuantity");
  const totalDisplay = document.getElementById("saleTotalDisplay");
  const totalDetail = document.getElementById("saleTotalDetail");

  const unitPrice = parseFloat(unitPriceInput ? unitPriceInput.value : 0) || 0;
  const quantity = parseInt(quantityInput ? quantityInput.value : 1, 10) || 1;
  const total = unitPrice * quantity;

  if (totalDisplay) {
    totalDisplay.innerHTML = `<i class="fa-solid fa-money-bill-wave"></i> ${formatFCFA(total)}`;
  }
  if (totalDetail) {
    totalDetail.textContent = `${quantity} x ${formatFCFA(unitPrice)} (Prix de vente unitaire)`;
  }
};

window.openManualSaleModal = function() {
  const catFilter = document.getElementById("saleCategoryFilter");
  if (catFilter) catFilter.value = "all";

  const qtyInput = document.getElementById("saleQuantity");
  if (qtyInput) qtyInput.value = 1;

  renderSaleProductOptions();
  onSaleProductChange();

  document.getElementById("manualSaleModal").style.display = "flex";
};

window.closeManualSaleModal = function() {
  document.getElementById("manualSaleModal").style.display = "none";
};

window.submitManualSale = function(e) {
  e.preventDefault();
  const select = document.getElementById("saleProductSelect");
  const prodId = parseInt(select ? select.value : 0, 10);
  const qty = parseInt(document.getElementById("saleQuantity").value, 10) || 1;
  const custName = document.getElementById("saleCustName").value.trim() || "Client Comptoir Dalifort";
  const payment = document.getElementById("salePaymentMethod").value;

  const prod = products.find(p => p.id === prodId);
  if (!prod) {
    showToast("Veuillez sélectionner un produit valide.", "error");
    return;
  }

  if (prod.stock < qty) {
    showToast(`Stock insuffisant pour ${prod.name} (${prod.stock} disponibles).`, "error");
    return;
  }

  const unitPriceInput = document.getElementById("saleUnitPrice");
  const unitPrice = parseFloat(unitPriceInput ? unitPriceInput.value : prod.price) || prod.price || 0;
  const totalAmount = unitPrice * qty;

  // Deduct stock
  prod.stock -= qty;
  saveProducts();

  const newSale = {
    id: `SUNU-${new Date().getFullYear()}-${String(sales.length + 1).padStart(3, '0')}`,
    date: new Date().toISOString().replace('T', ' ').substring(0, 16),
    customer: custName,
    phone: "Comptoir",
    items: `${prod.name} (${qty}x @ ${formatFCFA(unitPrice)})`,
    total: totalAmount,
    unitPrice: unitPrice,
    paymentMethod: payment,
    status: "Payé & Emporté"
  };

  sales.unshift(newSale);
  saveSales();

  renderDashboard();
  closeManualSaleModal();
  showToast(`Encaissement réussi : ${formatFCFA(totalAmount)} enregistrés !`, "success");
};

window.printReceipt = function(saleId) {
  const sale = sales.find(s => s.id === saleId);
  if (!sale) return;

  const receiptContent = `
=============================================
             SUNU SOLUTION
         Dalifort-Foirail, Dakar
    Tél Fixe: +221 33 832 10 50
    Mobile / WhatsApp: +221 76 314 33 33
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
  let csv = "ID,Nom,Categorie,Prix_Achat_FCFA,Prix_Vente_FCFA,Prix_Barre_FCFA,Stock,Note\n";
  products.forEach(p => {
    const purchase = p.purchasePrice || Math.round((p.price || 0) * 0.75);
    csv += `"${p.id}","${p.name}","${p.category}",${purchase},${p.price},${p.oldPrice || ''},${p.stock},${p.rating}\n`;
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
  const adminStockCategoryFilter = document.getElementById("adminStockCategoryFilter");

  if (adminStockSearch) {
    adminStockSearch.addEventListener("input", (e) => {
      const catVal = adminStockCategoryFilter ? adminStockCategoryFilter.value : "all";
      renderStockTable(e.target.value, catVal);
    });
  }

  if (adminStockCategoryFilter) {
    adminStockCategoryFilter.addEventListener("change", (e) => {
      const queryVal = adminStockSearch ? adminStockSearch.value : "";
      renderStockTable(queryVal, e.target.value);
    });
  }
});
