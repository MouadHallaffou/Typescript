# 💪 Exercices TypeScript

## 📝 Instructions

- Prérequis : TypeScript installé globalement (`npm install -g typescript`)
- Configurez un projet avec `tsconfig.json`
- Compilez avec `tsc` et testez vos solutions
- Ne consultez les solutions qu'après avoir essayé
- Commentez votre code pour expliquer votre raisonnement

---

## 🟨 Niveau 1 - Types de base

### Exercice 1 : Types primitifs et annotations

```typescript
// Corrigez ce code en ajoutant les types appropriés
function calculateArea(width, height) {
  return width * height;
}

const result = calculateArea("10", 5); // Erreur : width devrait être un number
console.log(result);
```

### Exercice 2 : Interfaces et objets

Créez une interface `User` et une fonction `createUser` qui valide les données :

```typescript
// Interface à créer
interface User {
  // Définissez les propriétés nécessaires
}

// Fonction à implémenter
function createUser(data: any): User {
  // Validez et retournez un objet User
}

// Test
const userData = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  isActive: true
};

const user = createUser(userData);
console.log(user);
```

### Exercice 3 : Types d'union et littéraux

Créez un système de gestion de statuts avec des types d'union :

```typescript
// Définissez les types pour un système de commande
type OrderStatus = /* définissez les statuts possibles */;

interface Order {
  id: number;
  status: OrderStatus;
  items: string[];
  total: number;
}

// Fonction à implémenter
function updateOrderStatus(order: Order, newStatus: OrderStatus): Order {
  // Retournez une nouvelle commande avec le statut mis à jour
}

// Test
const order: Order = {
  id: 1,
  status: "pending",
  items: ["Laptop", "Mouse"],
  total: 1200
};

const updatedOrder = updateOrderStatus(order, "shipped");
```

### Exercice 4 : Arrays et Tuples

Travaillez avec des tableaux typés et des tuples :

```typescript
// Définissez les types pour ces structures
type Coordinates = /* tuple pour x, y, z */;
type Matrix = /* tableau 2D de nombres */;

// Fonction à implémenter
function calculateDistance(point1: Coordinates, point2: Coordinates): number {
  // Calculez la distance euclidienne entre deux points 3D
}

// Fonction à implémenter
function transposeMatrix(matrix: Matrix): Matrix {
  // Transposez une matrice (échanger lignes et colonnes)
}

// Tests
const pointA: Coordinates = [1, 2, 3];
const pointB: Coordinates = [4, 5, 6];
console.log("Distance:", calculateDistance(pointA, pointB));

const matrix: Matrix = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log("Transposée:", transposeMatrix(matrix));
```

### Exercice 5 : Enums et const assertions

Créez un système de gestion des couleurs avec des enums :

```typescript
// Définissez un enum pour les couleurs
enum Color {
  // Définissez les couleurs primaires et secondaires
}

// Interface pour un produit
interface Product {
  id: number;
  name: string;
  color: Color;
  price: number;
}

// Fonction à implémenter
function filterProductsByColor(products: Product[], color: Color): Product[] {
  // Filtrez les produits par couleur
}

// Test
const products: Product[] = [
  { id: 1, name: "T-shirt", color: Color.RED, price: 25 },
  { id: 2, name: "Pantalon", color: Color.BLUE, price: 50 },
  { id: 3, name: "Chaussures", color: Color.RED, price: 80 }
];

const redProducts = filterProductsByColor(products, Color.RED);
console.log("Produits rouges:", redProducts);
```

---

## 🟧 Niveau 2 - Fonctions et génériques

### Exercice 6 : Fonctions génériques

Créez des fonctions génériques pour manipuler des tableaux :

```typescript
// Fonction à implémenter
function swap<T>(arr: T[], index1: number, index2: number): T[] {
  // Échangez deux éléments dans un tableau
}

// Fonction à implémenter
function chunk<T>(arr: T[], size: number): T[][] {
  // Divisez un tableau en chunks de taille donnée
}

// Fonction à implémenter
function unique<T>(arr: T[]): T[] {
  // Retournez un tableau sans doublons
}

// Tests
const numbers = [1, 2, 3, 4, 5];
console.log("Swap:", swap(numbers, 0, 4));
console.log("Chunk:", chunk(numbers, 2));
console.log("Unique:", unique([1, 2, 2, 3, 3, 4]));
```

### Exercice 7 : Types de fonctions

Définissez des types pour des fonctions complexes :

```typescript
// Types à définir
type MathFunction = /* fonction qui prend 2 numbers et retourne un number */;
type Predicate<T> = /* fonction qui prend T et retourne boolean */;
type Transformer<T, U> = /* fonction qui transforme T en U */;

// Fonction à implémenter
function compose<T, U, V>(f: Transformer<U, V>, g: Transformer<T, U>): Transformer<T, V> {
  // Composez deux fonctions
}

// Tests
const add: MathFunction = (a, b) => a + b;
const multiply: MathFunction = (a, b) => a * b;
const isEven: Predicate<number> = n => n % 2 === 0;
const double: Transformer<number, number> = n => n * 2;
const toString: Transformer<number, string> = n => n.toString();

const doubleThenToString = compose(toString, double);
console.log(doubleThenToString(5)); // "10"
```

### Exercice 8 : Surcharge de fonctions

Créez une fonction avec plusieurs signatures :

```typescript
// Fonction à implémenter avec surcharge
function formatValue(value: string): string;
function formatValue(value: number): string;
function formatValue(value: Date): string;
function formatValue(value: any): string {
  // Implémentez la logique pour chaque type
}

// Tests
console.log(formatValue("hello")); // "String: hello"
console.log(formatValue(42)); // "Number: 42"
console.log(formatValue(new Date())); // "Date: 2024-01-01"
```

---

## 🟨 Niveau 3 - Types avancés

### Exercice 9 : Type guards et narrowing

Implémentez des type guards personnalisés :

```typescript
// Types à définir
interface Circle {
  type: "circle";
  radius: number;
}

interface Rectangle {
  type: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Rectangle;

// Type guards à implémenter
function isCircle(shape: Shape): shape is Circle {
  // Vérifiez si c'est un cercle
}

function isRectangle(shape: Shape): shape is Rectangle {
  // Vérifiez si c'est un rectangle
}

// Fonction à implémenter
function calculateArea(shape: Shape): number {
  // Calculez l'aire selon le type de forme
}

// Tests
const shapes: Shape[] = [
  { type: "circle", radius: 5 },
  { type: "rectangle", width: 10, height: 20 }
];

shapes.forEach(shape => {
  console.log(`Aire de ${shape.type}:`, calculateArea(shape));
});
```

### Exercice 10 : Utility types

Utilisez les utility types de TypeScript :

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
  preferences: {
    theme: string;
    language: string;
  };
}

// Types à créer avec utility types
type UserWithoutId = /* User sans la propriété id */;
type UserOptional = /* User avec toutes les propriétés optionnelles */;
type UserReadonly = /* User avec toutes les propriétés en lecture seule */;
type UserPartial = /* User avec preferences optionnelles */;

// Fonction à implémenter
function createUser(data: UserWithoutId): User {
  // Créez un utilisateur avec un ID généré
}

// Tests
const userData: UserWithoutId = {
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  isActive: true,
  preferences: {
    theme: "dark",
    language: "fr"
  }
};

const newUser = createUser(userData);
console.log(newUser);
```

### Exercice 11 : Mapped types

Créez des types mappés personnalisés :

```typescript
interface Config {
  apiUrl: string;
  timeout: number;
  retries: number;
  debug: boolean;
}

// Types à créer avec mapped types
type ConfigOptional = /* Toutes les propriétés optionnelles */;
type ConfigReadonly = /* Toutes les propriétés en lecture seule */;
type ConfigGetters = /* Propriétés avec getters (getApiUrl, getTimeout, etc.) */;

// Fonction à implémenter
function createConfigGetters(config: Config): ConfigGetters {
  // Créez un objet avec des getters pour chaque propriété
}

// Tests
const config: Config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
  debug: true
};

const getters = createConfigGetters(config);
console.log(getters.getApiUrl()); // "https://api.example.com"
console.log(getters.getTimeout()); // 5000
```

---

## 🟦 Niveau 4 - Programmation asynchrone

### Exercice 12 : Types pour Promises

Travaillez avec des types pour les opérations asynchrones :

```typescript
// Types à définir
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

type AsyncResult<T> = /* Promise qui peut échouer avec une erreur */;

// Fonction à implémenter
async function fetchUser(id: number): Promise<ApiResponse<User>> {
  // Simulez un appel API
}

// Fonction à implémenter
async function fetchUserPosts(userId: number): Promise<ApiResponse<Post[]>> {
  // Simulez un appel API pour les posts
}

// Fonction à implémenter
function handleApiError(error: any): never {
  // Gérez les erreurs d'API
}

// Tests
async function loadUserData(userId: number) {
  try {
    const userResponse = await fetchUser(userId);
    const postsResponse = await fetchUserPosts(userId);
    
    return {
      user: userResponse.data,
      posts: postsResponse.data
    };
  } catch (error) {
    handleApiError(error);
  }
}
```

### Exercice 13 : Types pour async/await

Créez des types pour des opérations asynchrones complexes :

```typescript
// Types à définir
type AsyncFunction<T, U> = /* Fonction asynchrone qui prend T et retourne U */;
type AsyncPredicate<T> = /* Fonction asynchrone qui prend T et retourne boolean */;

// Fonction à implémenter
async function asyncFilter<T>(
  arr: T[], 
  predicate: AsyncPredicate<T>
): Promise<T[]> {
  // Filtrez un tableau avec une fonction asynchrone
}

// Fonction à implémenter
async function asyncMap<T, U>(
  arr: T[], 
  transformer: AsyncFunction<T, U>
): Promise<U[]> {
  // Transformez un tableau avec une fonction asynchrone
}

// Tests
const numbers = [1, 2, 3, 4, 5];

const asyncIsEven: AsyncPredicate<number> = async (n) => {
  await new Promise(resolve => setTimeout(resolve, 100));
  return n % 2 === 0;
};

const asyncDouble: AsyncFunction<number, number> = async (n) => {
  await new Promise(resolve => setTimeout(resolve, 100));
  return n * 2;
};

async function testAsync() {
  const evenNumbers = await asyncFilter(numbers, asyncIsEven);
  const doubledNumbers = await asyncMap(numbers, asyncDouble);
  
  console.log("Nombres pairs:", evenNumbers);
  console.log("Nombres doublés:", doubledNumbers);
}
```

---

## 🟪 Niveau 5 - Types avancés et patterns

### Exercice 14 : Conditional types

Implémentez des types conditionnels complexes :

```typescript
// Types conditionnels à définir
type NonNullable<T> = /* T sans null et undefined */;
type DeepPartial<T> = /* Version partielle profonde de T */;
type ExtractReturnType<T> = /* Type de retour d'une fonction */;

// Fonction à implémenter
function deepMerge<T extends object, U extends object>(
  target: T, 
  source: DeepPartial<U>
): T & U {
  // Fusionnez deux objets en profondeur
}

// Tests
interface Settings {
  theme: {
    primary: string;
    secondary: string;
  };
  user: {
    name: string;
    preferences: {
      language: string;
    };
  };
}

const defaultSettings: Settings = {
  theme: { primary: "#000", secondary: "#fff" },
  user: { name: "Guest", preferences: { language: "en" } }
};

const userSettings: DeepPartial<Settings> = {
  theme: { primary: "#007bff" },
  user: { preferences: { language: "fr" } }
};

const mergedSettings = deepMerge(defaultSettings, userSettings);
console.log(mergedSettings);
```

### Exercice 15 : Type inference et inference avancée

Créez des types qui s'infèrent automatiquement :

```typescript
// Types à définir
type InferFirst<T> = /* Premier élément d'un tuple */;
type InferLast<T> = /* Dernier élément d'un tuple */;
type InferParameters<T> = /* Paramètres d'une fonction */;

// Fonction à implémenter
function createEventEmitter<T extends Record<string, any>>() {
  // Créez un émetteur d'événements typé
  return {
    on<K extends keyof T>(event: K, handler: (data: T[K]) => void): void {
      // Implémentez l'écoute d'événements
    },
    emit<K extends keyof T>(event: K, data: T[K]): void {
      // Implémentez l'émission d'événements
    }
  };
}

// Tests
interface AppEvents {
  userLogin: { userId: number; username: string };
  userLogout: { userId: number };
  messageReceived: { message: string; from: string };
}

const eventEmitter = createEventEmitter<AppEvents>();

eventEmitter.on("userLogin", (data) => {
  console.log(`User ${data.username} logged in`);
});

eventEmitter.on("messageReceived", (data) => {
  console.log(`Message from ${data.from}: ${data.message}`);
});

eventEmitter.emit("userLogin", { userId: 1, username: "alice" });
eventEmitter.emit("messageReceived", { message: "Hello!", from: "bob" });
```

---

## 🏆 Défi bonus : Système de validation de types

Créez un système de validation de schémas avec TypeScript :

```typescript
// Types pour le système de validation
type ValidationRule<T> = (value: T) => boolean | string;
type Schema<T> = {
  [K in keyof T]: ValidationRule<T[K]>;
};

// Fonction à implémenter
function createValidator<T>(schema: Schema<T>) {
  return function validate(data: any): { valid: boolean; errors: string[] } {
    // Validez les données selon le schéma
  };
}

// Tests
interface UserForm {
  name: string;
  email: string;
  age: number;
}

const userSchema: Schema<UserForm> = {
  name: (value) => value.length >= 2 || "Name must be at least 2 characters",
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email",
  age: (value) => value >= 18 || "Must be at least 18 years old"
};

const validateUser = createValidator(userSchema);

const result = validateUser({
  name: "A",
  email: "invalid-email",
  age: 16
});

console.log(result);
```

---

## 📊 Auto-évaluation

Après avoir terminé tous les exercices, évaluez votre compréhension :

- [ ] Je maîtrise les types primitifs et les annotations de type
- [ ] Je comprends les interfaces et les types d'union
- [ ] Je sais utiliser les génériques et les fonctions typées
- [ ] Je maîtrise les type guards et le narrowing
- [ ] Je comprends les utility types et les mapped types
- [ ] Je sais travailler avec les types asynchrones
- [ ] Je comprends les conditional types et l'inference avancée
- [ ] Je peux créer des systèmes de validation typés

**Score :** \_\_\_/15 exercices résolus

Si vous avez moins de 12/15, relisez le cours et refaites les exercices difficiles.

**Prêt pour les solutions ?** Consultez `solutions.md` ! 🔍
