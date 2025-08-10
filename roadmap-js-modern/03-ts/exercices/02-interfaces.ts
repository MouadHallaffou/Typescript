// ===============================
// Exercice 2: Interfaces et objets
// ===============================

console.log("🔗 Exercice 2: Interfaces et objets TypeScript");
console.log("=============================================");

// TODO: Créez une interface User
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

// TODO: Implémentez la fonction createUser
function createUser(data: any): User {
  // Validation des données
  if (!data.name || !data.email || !data.age) {
    throw new Error("Missing required fields: name, email, age");
  }
  
  if (typeof data.age !== "number" || data.age < 0) {
    throw new Error("Age must be a positive number");
  }
  
  if (!data.email.includes("@")) {
    throw new Error("Invalid email format");
  }
  
  return {
    id: data.id || Math.floor(Math.random() * 10000),
    name: data.name,
    email: data.email,
    age: data.age,
    isActive: data.isActive !== undefined ? data.isActive : true
  };
}

// Tests
console.log("✅ Test avec données valides:");
const userData = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  isActive: true
};

const user = createUser(userData);
console.log("👤 User créé:", user);

// Test avec données partielles
console.log("\n✅ Test avec données partielles:");
const partialUserData = {
  name: "Bob",
  email: "bob@example.com",
  age: 30
};

const partialUser = createUser(partialUserData);
console.log("👤 User partiel:", partialUser);

// TODO: Créez une interface pour un produit
interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  tags?: string[];
}

// TODO: Créez une interface pour un panier d'achat
interface CartItem {
  product: Product;
  quantity: number;
}

interface ShoppingCart {
  items: CartItem[];
  total: number;
  discount?: number;
}

// TODO: Implémentez des fonctions pour manipuler le panier
function addToCart(cart: ShoppingCart, product: Product, quantity: number = 1): ShoppingCart {
  const existingItem = cart.items.find(item => item.product.id === product.id);
  
  if (existingItem) {
    // Mettre à jour la quantité
    const updatedItems = cart.items.map(item =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
    
    return {
      ...cart,
      items: updatedItems,
      total: calculateTotal(updatedItems, cart.discount)
    };
  } else {
    // Ajouter un nouvel item
    const newItem: CartItem = { product, quantity };
    const updatedItems = [...cart.items, newItem];
    
    return {
      ...cart,
      items: updatedItems,
      total: calculateTotal(updatedItems, cart.discount)
    };
  }
}

function removeFromCart(cart: ShoppingCart, productId: string): ShoppingCart {
  const updatedItems = cart.items.filter(item => item.product.id !== productId);
  
  return {
    ...cart,
    items: updatedItems,
    total: calculateTotal(updatedItems, cart.discount)
  };
}

function calculateTotal(items: CartItem[], discount: number = 0): number {
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  return subtotal * (1 - discount / 100);
}

// Tests du panier
console.log("\n🛒 Tests du panier d'achat:");

const products: Product[] = [
  {
    id: "1",
    name: "Laptop",
    price: 999,
    category: "Electronics",
    inStock: true,
    tags: ["computer", "tech"]
  },
  {
    id: "2",
    name: "Mouse",
    price: 25,
    category: "Electronics",
    inStock: true
  }
];

let cart: ShoppingCart = {
  items: [],
  total: 0
};

// Ajouter des produits au panier
cart = addToCart(cart, products[0], 1);
cart = addToCart(cart, products[1], 2);
console.log("🛒 Panier après ajout:", cart);

// Appliquer une remise
cart.discount = 10;
cart.total = calculateTotal(cart.items, cart.discount);
console.log("🛒 Panier avec remise:", cart);

// Supprimer un produit
cart = removeFromCart(cart, "1");
console.log("🛒 Panier après suppression:", cart);

// TODO: Créez une interface pour une API Response
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  timestamp: Date;
}

// TODO: Implémentez une fonction qui simule un appel API
async function fetchUsers(): Promise<ApiResponse<User[]>> {
  // Simulation d'un appel API
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const mockUsers: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 25, isActive: true },
    { id: 2, name: "Bob", email: "bob@example.com", age: 30, isActive: false },
    { id: 3, name: "Charlie", email: "charlie@example.com", age: 35, isActive: true }
  ];
  
  return {
    data: mockUsers,
    status: 200,
    message: "Users fetched successfully",
    timestamp: new Date()
  };
}

// Test de l'API
console.log("\n🌐 Test de l'API:");
fetchUsers().then(response => {
  console.log("📡 Réponse API:", response);
  console.log("👥 Nombre d'utilisateurs:", response.data.length);
});

console.log("\n✅ Exercice 2 terminé !");
console.log("📝 Points clés appris :");
console.log("• Définition d'interfaces");
console.log("• Validation de données avec interfaces");
console.log("• Interfaces avec propriétés optionnelles");
console.log("• Interfaces imbriquées");
console.log("• Fonctions avec types d'interface");
console.log("• Gestion d'état immutable");
