# 🏗️ Projet Final - Module JavaScript ES6+

## 🎯 Objectif

Créer une **application de gestion de panier d'achat** interactive qui utilise tous les concepts JavaScript ES6+ appris dans ce module.

## 📋 Fonctionnalités à implémenter

### 1. 🛒 Gestion du panier

- Ajouter des produits au panier
- Modifier les quantités
- Supprimer des produits
- Vider le panier
- Calculer le total avec taxes

### 2. 🔍 Fonctionnalités avancées

- Recherche de produits avec debounce
- Filtrage par catégorie
- Sauvegarde automatique (localStorage)
- Historique des achats
- Notifications utilisateur

### 3. 🎮 Interface interactive

- Affichage temps réel du panier
- Animations simples
- Gestion des erreurs utilisateur
- Interface responsive

---

## 🏗️ Structure du projet

Créez les fichiers suivants :

```
shopping-cart/
├── index.html
├── styles.css
├── src/
│   ├── app.js           (point d'entrée)
│   ├── cart.js          (logique du panier)
│   ├── products.js      (gestion des produits)
│   ├── storage.js       (localStorage)
│   ├── ui.js           (interface utilisateur)
│   └── utils.js        (fonctions utilitaires)
```

---

## 🚀 Étapes de développement

### Étape 1 : Données et modèles

**Créez `src/products.js` :**

```javascript
// Base de données des produits
export const PRODUCTS_DB = [
  {
    id: 1,
    name: "MacBook Pro",
    price: 2499,
    category: "electronics",
    image: "https://via.placeholder.com/200x200",
    description: "Ordinateur portable haute performance",
  },
  {
    id: 2,
    name: "iPhone 15",
    price: 1199,
    category: "electronics",
    image: "https://via.placeholder.com/200x200",
    description: "Smartphone dernière génération",
  },
  {
    id: 3,
    name: "Livre JavaScript",
    price: 29,
    category: "books",
    image: "https://via.placeholder.com/200x200",
    description: "Guide complet du JavaScript moderne",
  },
  {
    id: 4,
    name: "Casque Audio",
    price: 299,
    category: "electronics",
    image: "https://via.placeholder.com/200x200",
    description: "Casque sans fil noise-cancelling",
  },
  {
    id: 5,
    name: "T-shirt",
    price: 25,
    category: "clothing",
    image: "https://via.placeholder.com/200x200",
    description: "T-shirt 100% coton bio",
  },
];

export const CATEGORIES = [
  { id: "all", name: "Toutes les catégories" },
  { id: "electronics", name: "Électronique" },
  { id: "books", name: "Livres" },
  { id: "clothing", name: "Vêtements" },
];

// Fonctions de gestion des produits
export class ProductManager {
  constructor() {
    this.products = [...PRODUCTS_DB];
  }

  // TODO: Implémenter ces méthodes
  getAllProducts() {
    // Retourner tous les produits
  }

  getProductById(id) {
    // Trouver un produit par ID
  }

  searchProducts(query) {
    // Rechercher des produits par nom ou description
  }

  filterByCategory(category) {
    // Filtrer par catégorie
  }

  getProductsByIds(ids) {
    // Récupérer plusieurs produits par leurs IDs
  }
}
```

### Étape 2 : Logique du panier

**Créez `src/cart.js` :**

```javascript
import { ProductManager } from "./products.js";

export class ShoppingCart {
  constructor() {
    this.items = new Map(); // Map<productId, {product, quantity}>
    this.productManager = new ProductManager();
    this.listeners = []; // Pour les notifications de changement
  }

  // TODO: Implémenter ces méthodes

  addItem(productId, quantity = 1) {
    // Ajouter un produit au panier
    // Si déjà présent, augmenter la quantité
    // Notifier les listeners
  }

  removeItem(productId) {
    // Supprimer complètement un produit
  }

  updateQuantity(productId, quantity) {
    // Mettre à jour la quantité
    // Si quantity <= 0, supprimer l'item
  }

  clear() {
    // Vider le panier
  }

  getItems() {
    // Retourner les items avec détails produit
    // Format: [{ product: {...}, quantity: 2 }, ...]
  }

  getTotalItems() {
    // Nombre total d'articles
  }

  getSubtotal() {
    // Sous-total sans taxes
  }

  getTax(rate = 0.2) {
    // Calcul des taxes (20% par défaut)
  }

  getTotal() {
    // Total TTC
  }

  // Pattern Observer pour les notifications
  subscribe(listener) {
    this.listeners.push(listener);
  }

  unsubscribe(listener) {
    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  notify(event, data) {
    this.listeners.forEach((listener) => listener(event, data));
  }
}
```

### Étape 3 : Stockage persistant

**Créez `src/storage.js` :**

```javascript
export class StorageManager {
  constructor(key = "shopping-cart") {
    this.storageKey = key;
  }

  // TODO: Implémenter ces méthodes

  saveCart(cartItems) {
    // Sauvegarder le panier dans localStorage
    // Format: [{ productId: 1, quantity: 2 }, ...]
  }

  loadCart() {
    // Charger le panier depuis localStorage
    // Gérer les erreurs (JSON invalide, etc.)
  }

  clearCart() {
    // Supprimer les données du panier
  }

  saveHistory(purchase) {
    // Sauvegarder un achat dans l'historique
    // Format: { date, items, total }
  }

  getHistory() {
    // Récupérer l'historique des achats
  }

  clearHistory() {
    // Vider l'historique
  }
}
```

### Étape 4 : Fonctions utilitaires

**Créez `src/utils.js` :**

```javascript
// TODO: Implémenter ces fonctions utilitaires

export function formatPrice(price) {
  // Formater un prix : 1234.56 → "1 234,56 €"
}

export function debounce(func, delay) {
  // Fonction debounce pour la recherche
}

export function throttle(func, limit) {
  // Fonction throttle pour les événements fréquents
}

export function createElement(tag, classes = [], attributes = {}) {
  // Créer un élément DOM avec classes et attributs
}

export function formatDate(date) {
  // Formater une date : "14/03/2024 à 15:30"
}

export function generateId() {
  // Générer un ID unique
}

export function validateQuantity(quantity) {
  // Valider une quantité (nombre entier positif)
}

export class NotificationManager {
  constructor() {
    this.container = this.createContainer();
  }

  createContainer() {
    // Créer le conteneur de notifications
  }

  show(message, type = "info", duration = 3000) {
    // Afficher une notification
    // Types: 'success', 'error', 'warning', 'info'
  }

  hide(notification) {
    // Masquer une notification
  }
}
```

### Étape 5 : Interface utilisateur

**Créez `src/ui.js` :**

```javascript
import { createElement, formatPrice, debounce } from "./utils.js";

export class UIManager {
  constructor(cart, productManager, storage) {
    this.cart = cart;
    this.productManager = productManager;
    this.storage = storage;
    this.currentCategory = "all";
    this.searchQuery = "";

    this.initializeElements();
    this.bindEvents();
    this.render();
  }

  initializeElements() {
    // Récupérer les éléments DOM principaux
    this.productGrid = document.getElementById("product-grid");
    this.cartItems = document.getElementById("cart-items");
    this.cartTotal = document.getElementById("cart-total");
    this.searchInput = document.getElementById("search-input");
    this.categorySelect = document.getElementById("category-select");
    this.cartBadge = document.getElementById("cart-badge");
  }

  bindEvents() {
    // TODO: Lier les événements
    // - Recherche avec debounce
    // - Filtrage par catégorie
    // - Clics sur boutons d'ajout
    // - Modifications de quantité
    // - Suppression d'items
  }

  // TODO: Implémenter ces méthodes

  renderProducts() {
    // Afficher la grille de produits
    // Filtrer selon catégorie et recherche
  }

  renderCart() {
    // Afficher le contenu du panier
  }

  renderCartSummary() {
    // Afficher le résumé (total, taxes)
  }

  renderCategories() {
    // Afficher les options de catégorie
  }

  updateCartBadge() {
    // Mettre à jour le badge du panier
  }

  createProductCard(product) {
    // Créer une carte produit
  }

  createCartItem(item) {
    // Créer un élément du panier
  }

  handleAddToCart(productId, quantity) {
    // Gérer l'ajout au panier
  }

  handleRemoveFromCart(productId) {
    // Gérer la suppression du panier
  }

  handleQuantityChange(productId, newQuantity) {
    // Gérer le changement de quantité
  }

  handleSearch(query) {
    // Gérer la recherche
  }

  handleCategoryChange(category) {
    // Gérer le changement de catégorie
  }

  render() {
    // Effectuer un rendu complet
  }
}
```

### Étape 6 : Point d'entrée principal

**Créez `src/app.js` :**

```javascript
import { ShoppingCart } from "./cart.js";
import { ProductManager } from "./products.js";
import { StorageManager } from "./storage.js";
import { UIManager } from "./ui.js";
import { NotificationManager } from "./utils.js";

class ShoppingApp {
  constructor() {
    this.productManager = new ProductManager();
    this.storage = new StorageManager();
    this.cart = new ShoppingCart();
    this.notifications = new NotificationManager();

    this.init();
  }

  init() {
    // TODO: Initialiser l'application
    // 1. Charger le panier depuis le storage
    // 2. Créer l'interface utilisateur
    // 3. S'abonner aux changements du panier
    // 4. Sauvegarder automatiquement
  }

  loadSavedCart() {
    // Charger le panier sauvegardé
  }

  setupAutoSave() {
    // Sauvegarder automatiquement les changements
  }

  handleCartChange(event, data) {
    // Gérer les changements du panier
    // Afficher des notifications
    // Sauvegarder automatiquement
  }
}

// Initialiser l'application au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  const app = new ShoppingApp();
});
```

### Étape 7 : Interface HTML

**Créez `index.html` :**

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shopping Cart - JavaScript ES6+</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="header">
      <div class="container">
        <h1>🛒 Shopping Cart</h1>
        <div class="cart-summary">
          <span id="cart-badge" class="cart-badge">0</span>
          <span id="cart-total" class="cart-total">0,00 €</span>
        </div>
      </div>
    </header>

    <main class="main">
      <div class="container">
        <div class="controls">
          <div class="search-container">
            <input
              type="text"
              id="search-input"
              placeholder="Rechercher des produits..."
              class="search-input"
            />
          </div>
          <select id="category-select" class="category-select">
            <!-- Options générées dynamiquement -->
          </select>
        </div>

        <div class="content">
          <section class="products-section">
            <h2>Produits</h2>
            <div id="product-grid" class="product-grid">
              <!-- Produits générés dynamiquement -->
            </div>
          </section>

          <aside class="cart-section">
            <h2>Panier</h2>
            <div id="cart-items" class="cart-items">
              <!-- Items du panier générés dynamiquement -->
            </div>
            <div class="cart-actions">
              <button id="clear-cart" class="btn btn-secondary">
                Vider le panier
              </button>
              <button id="checkout" class="btn btn-primary">Commander</button>
            </div>
          </aside>
        </div>
      </div>
    </main>

    <!-- Conteneur pour les notifications -->
    <div id="notifications" class="notifications-container"></div>

    <script type="module" src="src/app.js"></script>
  </body>
</html>
```

---

## 🎨 Bonus - Fonctionnalités avancées

### 1. 🎯 Système de promotion

```javascript
export class PromotionManager {
  constructor() {
    this.promotions = [
      {
        id: "bulk-discount",
        condition: (cart) => cart.getTotalItems() >= 5,
        discount: 0.1, // 10%
        message: "Réduction de 10% pour 5 articles ou plus",
      },
      {
        id: "electronics-promo",
        condition: (cart) => {
          const electronicsCount = cart
            .getItems()
            .filter((item) => item.product.category === "electronics")
            .reduce((sum, item) => sum + item.quantity, 0);
          return electronicsCount >= 2;
        },
        discount: 0.05, // 5%
        message: "Réduction de 5% sur l'électronique",
      },
    ];
  }

  getApplicablePromotions(cart) {
    // Retourner les promotions applicables
  }

  calculateDiscount(cart) {
    // Calculer la remise totale
  }
}
```

### 2. 🔄 Animation et transitions

```javascript
export class AnimationManager {
  static fadeIn(element, duration = 300) {
    // Animation d'apparition
  }

  static slideUp(element, duration = 300) {
    // Animation de glissement vers le haut
  }

  static pulse(element, duration = 600) {
    // Animation de pulsation
  }

  static addToCartAnimation(productElement, cartElement) {
    // Animation d'ajout au panier
  }
}
```

### 3. 📊 Statistiques et analytics

```javascript
export class AnalyticsManager {
  constructor() {
    this.events = [];
  }

  track(event, data) {
    // Enregistrer un événement
  }

  getPopularProducts() {
    // Produits les plus ajoutés
  }

  getAverageCartValue() {
    // Valeur moyenne du panier
  }

  getConversionRate() {
    // Taux de conversion
  }
}
```

---

## ✅ Critères d'évaluation

### 🎯 Fonctionnalités obligatoires (80 points)

- [ ] Affichage des produits (10 pts)
- [ ] Ajout/suppression du panier (15 pts)
- [ ] Calculs corrects (taxes, total) (10 pts)
- [ ] Recherche avec debounce (10 pts)
- [ ] Filtrage par catégorie (10 pts)
- [ ] Sauvegarde localStorage (10 pts)
- [ ] Interface responsive (10 pts)
- [ ] Gestion d'erreurs (5 pts)

### 🚀 Bonifications (20 points)

- [ ] Animations fluides (5 pts)
- [ ] Système de promotions (5 pts)
- [ ] Historique des achats (5 pts)
- [ ] Tests unitaires (5 pts)

### 💯 Excellence technique

- **ES6+ moderne** : arrow functions, destructuring, modules
- **Programmation fonctionnelle** : map, filter, reduce
- **Immutabilité** : pas de mutations directes
- **Separation of concerns** : classes spécialisées
- **Code propre** : nommage, commentaires, structure

---

## 🚀 Pour aller plus loin

1. **Tests** : Ajoutez des tests avec Jest
2. **PWA** : Transformez en Progressive Web App
3. **API** : Connectez à une vraie API produits
4. **TypeScript** : Convertissez en TypeScript (Module 3)
5. **React** : Recréez avec React (Module 4)

---

## 📚 Ressources utiles

- [MDN JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [ES6 Features](http://es6-features.org/)
- [localStorage API](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)
- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

**Temps estimé :** 10-15 heures

**Bon développement !** 🎉
