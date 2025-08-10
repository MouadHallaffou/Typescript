# 📖 Cours JavaScript ES6+ Moderne

## 1. 🆕 Syntaxe ES6+ moderne

### 1.1 `let`, `const` vs `var`

**Problème avec `var` :**

```javascript
// var a une portée de fonction, pas de bloc
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Affiche 3, 3, 3
}
```

**Solution avec `let` :**

```javascript
// let a une portée de bloc
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Affiche 0, 1, 2
}

// const pour les valeurs constantes
const API_URL = "https://api.example.com";
const user = { name: "Alice" };
user.name = "Bob"; // ✅ OK, on modifie le contenu
// user = {}; // ❌ Erreur, on ne peut pas réassigner
```

### 1.2 Arrow Functions

**Syntaxe classique vs moderne :**

```javascript
// Fonction traditionnelle
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Avec un seul paramètre
const double = (x) => x * 2;

// Avec plusieurs lignes
const processUser = (user) => {
  console.log(`Processing ${user.name}`);
  return { ...user, processed: true };
};

// Dans les méthodes de tableau
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2); // [2, 4, 6, 8, 10]
```

**Attention au `this` :**

```javascript
const obj = {
  name: "Alice",

  // ❌ Arrow function ne fonctionne pas ici
  greetWrong: () => {
    console.log(`Hello ${this.name}`); // undefined
  },

  // ✅ Fonction normale préserve le this
  greetRight() {
    console.log(`Hello ${this.name}`); // "Hello Alice"
  },
};
```

### 1.3 Template Literals

```javascript
const name = "Alice";
const age = 25;

// Ancienne méthode
const oldMessage =
  "Hello, my name is " + name + " and I am " + age + " years old.";

// Template literal
const newMessage = `Hello, my name is ${name} and I am ${age} years old.`;

// Multi-lignes
const html = `
  <div class="user">
    <h2>${name}</h2>
    <p>Age: ${age}</p>
  </div>
`;

// Expressions dans les templates
const price = 29.99;
const message = `Le prix final est ${price * 1.2}€ TTC`;
```

### 1.4 Destructuring

**Destructuring d'objets :**

```javascript
const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
  address: {
    city: "Paris",
    zipCode: "75001",
  },
};

// Extraction de propriétés
const { name, age } = user;

// Renommage
const { name: userName, age: userAge } = user;

// Valeurs par défaut
const { name, phone = "Non renseigné" } = user;

// Destructuring imbriqué
const {
  address: { city },
} = user;

// Dans les paramètres de fonction
function greetUser({ name, age }) {
  return `Hello ${name}, you are ${age} years old`;
}
```

**Destructuring de tableaux :**

```javascript
const fruits = ["pomme", "banane", "orange", "kiwi"];

// Extraction par position
const [first, second] = fruits; // 'pomme', 'banane'

// Ignorer des éléments
const [first, , third] = fruits; // 'pomme', 'orange'

// Rest operator
const [first, ...others] = fruits; // 'pomme', ['banane', 'orange', 'kiwi']

// Échange de variables
let a = 1,
  b = 2;
[a, b] = [b, a]; // a = 2, b = 1
```

### 1.5 Rest/Spread Operators

**Rest operator (...) :**

```javascript
// Dans les paramètres de fonction
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum(1, 2, 3, 4); // 10

// Dans le destructuring
const [first, ...rest] = [1, 2, 3, 4]; // first = 1, rest = [2, 3, 4]
```

**Spread operator (...) :**

```javascript
// Copie de tableau
const original = [1, 2, 3];
const copy = [...original]; // [1, 2, 3]

// Fusion de tableaux
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Copie d'objet
const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26 }; // { name: 'Alice', age: 26 }

// Passage d'arguments
function greet(name, age, city) {
  console.log(`${name}, ${age} ans, vit à ${city}`);
}
const userData = ["Alice", 25, "Paris"];
greet(...userData);
```

---

## 2. 🏗️ Types et structures avancées

### 2.1 Objets et méthodes modernes

```javascript
// Création d'objets avec propriétés dynamiques
const key = "name";
const value = "Alice";

const user = {
  [key]: value, // Propriété dynamique
  age: 25,

  // Méthode raccourcie
  greet() {
    return `Hello, I'm ${this.name}`;
  },

  // Getter/Setter
  get fullInfo() {
    return `${this.name}, ${this.age} ans`;
  },

  set updateAge(newAge) {
    if (newAge > 0) this.age = newAge;
  },
};

// Object.assign pour fusion
const defaults = { theme: "dark", lang: "fr" };
const userPrefs = { theme: "light" };
const finalPrefs = Object.assign({}, defaults, userPrefs);
// { theme: 'light', lang: 'fr' }

// Object.keys, Object.values, Object.entries
const data = { a: 1, b: 2, c: 3 };
Object.keys(data); // ['a', 'b', 'c']
Object.values(data); // [1, 2, 3]
Object.entries(data); // [['a', 1], ['b', 2], ['c', 3]]
```

### 2.2 Tableaux et méthodes modernes

```javascript
const numbers = [1, 2, 3, 4, 5];
const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Charlie", age: 35, active: true },
];

// find - premier élément qui correspond
const alice = users.find((user) => user.name === "Alice");

// filter - tous les éléments qui correspondent
const activeUsers = users.filter((user) => user.active);

// map - transformation de chaque élément
const names = users.map((user) => user.name);

// some - au moins un élément correspond
const hasMinor = users.some((user) => user.age < 18);

// every - tous les éléments correspondent
const allAdults = users.every((user) => user.age >= 18);

// reduce - accumulation
const totalAge = users.reduce((sum, user) => sum + user.age, 0);

// includes - vérifier la présence
numbers.includes(3); // true

// indexOf vs findIndex
numbers.indexOf(3); // 2 (position)
users.findIndex((user) => user.age > 30); // 2 (position de Charlie)
```

### 2.3 Map et Set

**Map - clés de tout type :**

```javascript
const userRoles = new Map();

// Ajout
userRoles.set("alice@example.com", "admin");
userRoles.set("bob@example.com", "user");

// Lecture
userRoles.get("alice@example.com"); // 'admin'

// Vérification
userRoles.has("charlie@example.com"); // false

// Suppression
userRoles.delete("bob@example.com");

// Iteration
for (const [email, role] of userRoles) {
  console.log(`${email}: ${role}`);
}

// Taille
userRoles.size; // 1
```

**Set - valeurs uniques :**

```javascript
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
console.log(uniqueNumbers); // Set {1, 2, 3, 4}

// Ajout
uniqueNumbers.add(5);

// Suppression de doublons dans un tableau
const numbers = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(numbers)]; // [1, 2, 3, 4]
```

---

## 3. 🎯 Fonctions avancées

### 3.1 Closures et portée

```javascript
// Closure - fonction qui "capture" son environnement
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (indépendant)

// Closure pour configuration
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

double(5); // 10
triple(5); // 15
```

### 3.2 Callbacks et fonctions d'ordre supérieur

```javascript
// Callback simple
function processData(data, callback) {
  const processed = data.map((item) => item * 2);
  callback(processed);
}

processData([1, 2, 3], (result) => console.log(result)); // [2, 4, 6]

// Fonction d'ordre supérieur
function withLogging(fn) {
  return function (...args) {
    console.log(`Appel de fonction avec:`, args);
    const result = fn(...args);
    console.log(`Résultat:`, result);
    return result;
  };
}

const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3); // Logs + retourne 5
```

### 3.3 `this`, `bind`, `call`, `apply`

```javascript
const user = {
  name: "Alice",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

// Problème : perte du contexte
const greetFunction = user.greet;
greetFunction(); // "Hello, I'm undefined"

// Solutions :

// 1. bind - lie définitivement le contexte
const boundGreet = user.greet.bind(user);
boundGreet(); // "Hello, I'm Alice"

// 2. call - appel immédiat avec contexte
user.greet.call(user); // "Hello, I'm Alice"

// 3. apply - comme call mais avec tableau d'arguments
function introduce(age, city) {
  console.log(`I'm ${this.name}, ${age} years old, from ${city}`);
}

introduce.call(user, 25, "Paris"); // arguments séparés
introduce.apply(user, [25, "Paris"]); // arguments en tableau

// 4. Arrow function préserve le contexte
const obj = {
  name: "Alice",
  delayedGreet() {
    setTimeout(() => {
      console.log(`Hello from ${this.name}`); // this = obj
    }, 1000);
  },
};
```

---

## 4. ⏰ Programmation asynchrone

### 4.1 `setTimeout` et `setInterval`

```javascript
// setTimeout - exécution différée
console.log("Avant");
setTimeout(() => {
  console.log("Après 2 secondes");
}, 2000);
console.log("Après");

// setInterval - exécution répétée
const intervalId = setInterval(() => {
  console.log("Toutes les secondes");
}, 1000);

// Arrêt
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
```

### 4.2 Promises

```javascript
// Création d'une Promise
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    // Simulation d'appel réseau
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "Alice" });
      } else {
        reject(new Error("ID utilisateur invalide"));
      }
    }, 1000);
  });
}

// Utilisation avec .then/.catch
fetchUserData(1)
  .then((user) => {
    console.log("Utilisateur reçu:", user);
    return fetchUserData(2); // Chaînage
  })
  .then((user2) => {
    console.log("Deuxième utilisateur:", user2);
  })
  .catch((error) => {
    console.error("Erreur:", error.message);
  })
  .finally(() => {
    console.log("Opération terminée");
  });

// Promise.all - attendre plusieurs promesses
Promise.all([fetchUserData(1), fetchUserData(2), fetchUserData(3)])
  .then((users) => {
    console.log("Tous les utilisateurs:", users);
  })
  .catch((error) => {
    console.error("Une des promesses a échoué:", error);
  });

// Promise.race - première promesse résolue
Promise.race([
  fetchUserData(1),
  new Promise((resolve) => setTimeout(() => resolve("timeout"), 500)),
]).then((result) => {
  console.log("Premier résultat:", result);
});
```

### 4.3 `async/await`

```javascript
// Fonction asynchrone
async function getUser(userId) {
  try {
    const user = await fetchUserData(userId);
    console.log("Utilisateur:", user);
    return user;
  } catch (error) {
    console.error("Erreur lors de la récupération:", error.message);
    throw error; // Re-lancer l'erreur
  }
}

// Appel séquentiel
async function getUsersSequentially() {
  try {
    const user1 = await fetchUserData(1);
    const user2 = await fetchUserData(2);
    return [user1, user2];
  } catch (error) {
    console.error("Erreur:", error);
  }
}

// Appel parallèle
async function getUsersInParallel() {
  try {
    const [user1, user2] = await Promise.all([
      fetchUserData(1),
      fetchUserData(2),
    ]);
    return [user1, user2];
  } catch (error) {
    console.error("Erreur:", error);
  }
}

// for await...of pour itération asynchrone
async function processUsers(userIds) {
  for (const userId of userIds) {
    try {
      const user = await fetchUserData(userId);
      console.log(`Traitement de ${user.name}`);
    } catch (error) {
      console.error(`Erreur pour l'utilisateur ${userId}:`, error.message);
    }
  }
}
```

---

## 5. 📦 Modules ES6

### 5.1 Export et Import

**math.js :**

```javascript
// Export nommé
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Export par défaut
function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return add(a, b);
    case "multiply":
      return multiply(a, b);
    default:
      throw new Error("Opération inconnue");
  }
}

export default calculate;
```

**app.js :**

```javascript
// Import nommé
import { PI, add, multiply } from "./math.js";

// Import par défaut
import calculate from "./math.js";

// Import avec alias
import { add as addition } from "./math.js";

// Import de tout
import * as Math from "./math.js";

// Utilisation
console.log(PI); // 3.14159
console.log(add(2, 3)); // 5
console.log(calculate("multiply", 4, 5)); // 20
console.log(Math.PI); // 3.14159
```

### 5.2 Import dynamique

```javascript
// Import conditionnel
async function loadMath() {
  if (needsMathOperations) {
    const mathModule = await import("./math.js");
    return mathModule.default; // Fonction calculate
  }
}

// Import avec gestion d'erreur
async function dynamicImport() {
  try {
    const { add } = await import("./math.js");
    return add(2, 3);
  } catch (error) {
    console.error("Erreur de chargement du module:", error);
  }
}
```

---

## 6. 🔄 Programmation fonctionnelle

### 6.1 Méthodes de tableau avancées

```javascript
const users = [
  { name: "Alice", age: 25, salary: 50000, department: "IT" },
  { name: "Bob", age: 30, salary: 60000, department: "Sales" },
  { name: "Charlie", age: 35, salary: 55000, department: "IT" },
  { name: "Diana", age: 28, salary: 65000, department: "Marketing" },
];

// Chaînage de méthodes
const result = users
  .filter((user) => user.department === "IT") // Filtrer IT
  .map((user) => ({ ...user, bonus: user.salary * 0.1 })) // Ajouter bonus
  .sort((a, b) => b.salary - a.salary); // Trier par salaire

// reduce pour transformations complexes
const departmentStats = users.reduce((stats, user) => {
  const dept = user.department;
  if (!stats[dept]) {
    stats[dept] = { count: 0, totalSalary: 0 };
  }
  stats[dept].count++;
  stats[dept].totalSalary += user.salary;
  return stats;
}, {});

// flatMap pour aplatir et transformer
const skills = [
  { name: "Alice", skills: ["JavaScript", "React"] },
  { name: "Bob", skills: ["Python", "Django"] },
];

const allSkills = skills.flatMap((person) => person.skills);
// ['JavaScript', 'React', 'Python', 'Django']
```

### 6.2 Composition de fonctions

```javascript
// Fonctions utilitaires
const add = (x) => (y) => x + y; // Fonction curriée
const multiply = (x) => (y) => x * y;
const square = (x) => x * x;

// Composition manuelle
const addThenSquare = (x) => square(add(2)(x));

// Fonction de composition générique
const compose =
  (...fns) =>
  (value) =>
    fns.reduceRight((acc, fn) => fn(acc), value);
const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((acc, fn) => fn(acc), value);

// Utilisation
const transform = pipe(add(2), multiply(3), square);

transform(4); // ((4 + 2) * 3)² = 324

// Fonctions pures vs impures
// ✅ Pure - même entrée, même sortie, pas d'effet de bord
const pureAdd = (a, b) => a + b;

// ❌ Impure - modifie l'état externe
let counter = 0;
const impureIncrement = () => ++counter;
```

### 6.3 Immutabilité

```javascript
// Modification d'objet sans mutation
const user = { name: "Alice", age: 25, address: { city: "Paris" } };

// ❌ Mutation
user.age = 26; // Modifie l'objet original

// ✅ Immutable
const updatedUser = { ...user, age: 26 };

// Modification imbriquée
const userWithNewCity = {
  ...user,
  address: {
    ...user.address,
    city: "Lyon",
  },
};

// Modification de tableau sans mutation
const numbers = [1, 2, 3, 4, 5];

// ❌ Mutation
numbers.push(6);

// ✅ Immutable
const newNumbers = [...numbers, 6];
const filtered = numbers.filter((n) => n > 2);
const mapped = numbers.map((n) => n * 2);

// Suppression d'élément
const withoutThird = numbers.filter((_, index) => index !== 2);

// Mise à jour d'élément
const updated = numbers.map((num, index) => (index === 1 ? num * 10 : num));
```

---

## 🎓 Récapitulatif

Vous avez maintenant vu tous les concepts fondamentaux de JavaScript moderne :

1. **Syntaxe ES6+** : `let/const`, arrow functions, destructuring, templates
2. **Structures avancées** : objets modernes, Map/Set, méthodes de tableau
3. **Fonctions avancées** : closures, callbacks, `this`, binding
4. **Asynchrone** : Promises, `async/await`, gestion d'erreurs
5. **Modules** : import/export, chargement dynamique
6. **Programmation fonctionnelle** : composition, immutabilité, pureté

Ces concepts sont la base pour comprendre Node.js, TypeScript et React que nous verrons dans les modules suivants.

**Prochaine étape :** Pratiquez avec les exercices pour valider votre compréhension ! 💪
