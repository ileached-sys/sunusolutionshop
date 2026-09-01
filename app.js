/**
 * SUNU SOLUTION (@sunusolutionshop) - BOUTIQUE & GESTION DE VENTE
 * Rayons : Téléphonie, Accessoires & Électroménager
 * Dalifort-Foirail, Dakar, Sénégal • Tél: +221 76 314 33 33 / +221 78 257 99 99
 */

// ==========================================================================
// 1. DATA INITIALIZATION & LOCALSTORAGE MANAGEMENT
// ==========================================================================

const DEFAULT_PRODUCTS = [
  // ==========================================
  // 1. RAYON TÉLÉPHONIE (JUMIA SÉNÉGAL BEST-SELLERS)
  // ==========================================
  {
    id: 1,
    name: "Tecno Spark 20 (128 Go + 8 Go RAM)",
    category: "telephonie",
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
    price: 23500,
    oldPrice: 30000,
    stock: 20,
    badge: "Voyage & Autonomie",
    rating: 4.8,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=700&q=80",
    specs: ["30 000 mAh Géant", "Lampe Torche Intégrée", "Indicateur Digital", "3 Ports de Sortie"],
    description: "L'autonomie absolue pour vos déplacements et voyages : jusqu'à 8 recharges de téléphone et lampe LED de secours intégrée."
  },
  {
    id: 19,
    name: "Chargeur Secteur Rapide GaN 45W Type-C + Câble Original",
    category: "accessoires",
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
  
  // If first time or upgraded to Sunu Solution Jumia categories, reinit
  if (currencyVersion !== "v5_jumia_senegal") {
    localStorage.removeItem("phonepulse_products");
    localStorage.removeItem("phonepulse_sales");
    localStorage.removeItem("phonepulse_cart");
    localStorage.setItem("sunu_currency_ver", "v5_jumia_senegal");
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
    mobileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navMenu.classList.toggle("open");
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
        navMenu.classList.remove("open");
      }
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
