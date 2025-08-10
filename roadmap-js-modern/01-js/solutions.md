# ✅ Solutions JavaScript ES6+ Moderne

> **🔒 Fichier protégé** - Ce fichier contient les solutions détaillées et ne doit pas être partagé avec les apprenants avant qu'ils aient terminé leurs exercices.

## 📚 Guide pour l'instructeur

### Utilisation de ce fichier :

1. **Après les exercices** : Utilisez ces solutions pour corriger ou expliquer
2. **Explications détaillées** : Chaque solution inclut le "pourquoi" pas seulement le "comment"
3. **Alternatives proposées** : Plusieurs approches possibles sont présentées
4. **Bonnes pratiques** : Points d'attention et patterns recommandés

---

## 🟨 Niveau 1 - Syntaxe de base

### Solution 1 : Variables et scope

```javascript
// Problème : var a une portée de fonction, pas de bloc
// Solution : utiliser let qui a une portée de bloc
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Affiche 0, 1, 2
}

// Alternative avec closure
for (var i = 0; i < 3; i++) {
  ((index) => {
    setTimeout(() => console.log(index), 100);
  })(i);
}
```

### Solution 2 : Arrow functions

```javascript
// Version complète
const greetUser = (name, age) => {
  return `Hello ${name}, you are ${age} years old!`;
};

// Version simplifiée (une seule expression)
const greetUser = (name, age) => `Hello ${name}, you are ${age} years old!`;
```

### Solution 3 : Template literals

```javascript
function createCard(user) {
  return `
<div class="user-card">
  <h2>${user.name}</h2>
  <p>Email: ${user.email}</p>
  <p>Age: ${user.age} ans</p>
</div>`.trim();
}

// Test
const user = {
  name: "Alice",
  email: "alice@example.com",
  age: 25,
};
console.log(createCard(user));
```

### Solution 4 : Destructuring

```javascript
const book = {
  title: "1984",
  author: "George Orwell",
  year: 1949,
  publisher: "Secker & Warburg",
  pages: 328,
};

// Extraction simple
const { title, author, year } = book;

// Avec renommage
const { title, author: writer, year } = book;

// Avec valeur par défaut
const { title, author: writer, year, genre = "Fiction" } = book;

console.log(title, writer, year, genre); // "1984", "George Orwell", 1949, "Fiction"
```

### Solution 5 : Spread operator

```javascript
function mergeUsers(user1, user2) {
  return { ...user1, ...user2 };
}

// Test
const user1 = { name: "Alice", age: 25, city: "Paris" };
const user2 = { age: 26, country: "France" };
const merged = mergeUsers(user1, user2);
console.log(merged); // { name: 'Alice', age: 26, city: 'Paris', country: 'France' }

// Version alternative avec Object.assign
function mergeUsersAlt(user1, user2) {
  return Object.assign({}, user1, user2);
}
```

---

## 🟧 Niveau 2 - Méthodes de tableau

### Solution 6 : Filter et Map

```javascript
const products = [
  { name: "Livre", price: 15, inStock: true },
  { name: "Stylo", price: 2, inStock: true },
  { name: "Ordinateur", price: 800, inStock: false },
  { name: "Souris", price: 25, inStock: true },
];

const result = products
  .filter((product) => product.inStock && product.price > 10)
  .map((product) => ({
    ...product,
    priceWithTax: product.price * 1.2,
  }));

console.log(result);
// [
//   { name: 'Livre', price: 15, inStock: true, priceWithTax: 18 },
//   { name: 'Souris', price: 25, inStock: true, priceWithTax: 30 }
// ]
```

### Solution 7 : Reduce

```javascript
const sales = [
  { product: "Laptop", category: "Electronics", amount: 1200 },
  { product: "Phone", category: "Electronics", amount: 800 },
  { product: "Book", category: "Education", amount: 20 },
  { product: "Course", category: "Education", amount: 100 },
];

const totalByCategory = sales.reduce((acc, sale) => {
  const { category, amount } = sale;
  acc[category] = (acc[category] || 0) + amount;
  return acc;
}, {});

console.log(totalByCategory); // { Electronics: 2000, Education: 120 }

// Version alternative plus explicite
const totalByCategoryAlt = sales.reduce((acc, sale) => {
  if (!acc[sale.category]) {
    acc[sale.category] = 0;
  }
  acc[sale.category] += sale.amount;
  return acc;
}, {});
```

### Solution 8 : Find et Some

```javascript
const users = [
  { name: "Alice", email: "alice@test.com", role: "user" },
  { name: "Bob", email: "bob@test.com", role: "admin" },
  { name: "Charlie", email: "charlie@test.com", role: "user" },
];

function findUserByEmail(users, email) {
  return users.find((user) => user.email === email);
}

function hasAdminUser(users) {
  return users.some((user) => user.role === "admin");
}

// Tests
console.log(findUserByEmail(users, "bob@test.com"));
// { name: 'Bob', email: 'bob@test.com', role: 'admin' }

console.log(hasAdminUser(users)); // true

// Version avec optional chaining (ES2020)
function findUserByEmailSafe(users, email) {
  return users?.find((user) => user?.email === email) || null;
}
```

---

## 🟨 Niveau 3 - Fonctions avancées

### Solution 9 : Closure

```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Dépôt de ${amount}€. Nouveau solde: ${balance}€`);
      } else {
        console.log("Le montant doit être positif");
      }
    },

    withdraw(amount) {
      if (amount > 0) {
        if (amount <= balance) {
          balance -= amount;
          console.log(`Retrait de ${amount}€. Nouveau solde: ${balance}€`);
        } else {
          console.log("Fonds insuffisants");
        }
      } else {
        console.log("Le montant doit être positif");
      }
    },

    getBalance() {
      return balance;
    },
  };
}

// Test
const account = createBankAccount(100);
account.deposit(50); // Dépôt de 50€. Nouveau solde: 150€
account.withdraw(30); // Retrait de 30€. Nouveau solde: 120€
account.withdraw(200); // Fonds insuffisants
console.log(account.getBalance()); // 120

// Version avec méthodes privées (ES2022)
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}
```

### Solution 10 : Fonction d'ordre supérieur

```javascript
function retry(fn, maxAttempts) {
  let attempts = 0;

  function attempt() {
    attempts++;
    try {
      return fn();
    } catch (error) {
      if (attempts >= maxAttempts) {
        throw new Error(
          `Échec après ${maxAttempts} tentatives. Dernière erreur: ${error.message}`
        );
      }
      console.log(`Tentative ${attempts} échouée, retry...`);
      return attempt();
    }
  }

  return attempt();
}

// Version avec délai entre les tentatives
function retryWithDelay(fn, maxAttempts, delay = 1000) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    function attempt() {
      attempts++;
      try {
        const result = fn();
        resolve(result);
      } catch (error) {
        if (attempts >= maxAttempts) {
          reject(new Error(`Échec après ${maxAttempts} tentatives`));
        } else {
          console.log(
            `Tentative ${attempts} échouée, retry dans ${delay}ms...`
          );
          setTimeout(attempt, delay);
        }
      }
    }

    attempt();
  });
}

// Test
function unreliableFunction() {
  if (Math.random() < 0.7) {
    throw new Error("Échec aléatoire");
  }
  return "Succès !";
}

try {
  const result = retry(unreliableFunction, 3);
  console.log(result);
} catch (error) {
  console.error(error.message);
}
```

---

## 🟦 Niveau 4 - Programmation asynchrone

### Solution 11 : Promises

```javascript
function simulateNetworkCall(url) {
  return new Promise((resolve) => {
    const delay = Math.random() * 3000;
    setTimeout(() => {
      resolve(`Données de ${url}`);
    }, delay);
  });
}

function fetchWithTimeout(url, timeout) {
  return Promise.race([
    simulateNetworkCall(url),
    new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error(`Timeout de ${timeout}ms dépassé pour ${url}`));
      }, timeout);
    }),
  ]);
}

// Test
async function testTimeout() {
  try {
    const result = await fetchWithTimeout("https://api.example.com", 2000);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

// Version avec AbortController (plus moderne)
function fetchWithTimeoutAlt(url, timeout) {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  return simulateNetworkCall(url)
    .then((result) => {
      clearTimeout(timeoutId);
      return result;
    })
    .catch((error) => {
      clearTimeout(timeoutId);
      if (controller.signal.aborted) {
        throw new Error(`Timeout de ${timeout}ms dépassé`);
      }
      throw error;
    });
}
```

### Solution 12 : Async/Await

```javascript
async function fetchUser(id) {
  // Simulation d'un délai réseau
  await new Promise((resolve) => setTimeout(resolve, 100));
  return { id, name: `User${id}`, email: `user${id}@test.com` };
}

async function fetchUserPosts(userId) {
  // Simulation d'un délai réseau
  await new Promise((resolve) => setTimeout(resolve, 150));
  return [
    { id: 1, title: "Post 1", userId },
    { id: 2, title: "Post 2", userId },
  ];
}

async function getUserWithPosts(userId) {
  try {
    // Appels parallèles pour optimiser les performances
    const [user, posts] = await Promise.all([
      fetchUser(userId),
      fetchUserPosts(userId),
    ]);

    return {
      user,
      posts,
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    throw error;
  }
}

// Version séquentielle (moins optimale)
async function getUserWithPostsSequential(userId) {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchUserPosts(userId);

    return { user, posts };
  } catch (error) {
    console.error("Erreur:", error);
    throw error;
  }
}

// Test
getUserWithPosts(1)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

### Solution 13 : Gestion d'erreurs asynchrones

```javascript
// Simulation de fonctions réseau
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.includes("invalid")) {
        reject(new Error(`Erreur lors de l'appel à ${url}`));
      } else {
        resolve(`Données de ${url}`);
      }
    }, Math.random() * 1000);
  });
}

async function processUrls(urls) {
  const results = [];
  const errors = [];

  // Méthode 1 : Promise.allSettled (recommandée)
  const promises = urls.map((url) =>
    fetchData(url).catch((error) => ({ error, url }))
  );

  const responses = await Promise.allSettled(
    promises.map(async (promise, index) => {
      try {
        const result = await promise;
        if (result.error) {
          throw result.error;
        }
        return { url: urls[index], data: result };
      } catch (error) {
        console.error(`Erreur pour ${urls[index]}:`, error.message);
        return { url: urls[index], error: error.message };
      }
    })
  );

  responses.forEach((response) => {
    if (response.status === "fulfilled") {
      if (response.value.error) {
        errors.push(response.value);
      } else {
        results.push(response.value);
      }
    } else {
      errors.push({ url: "unknown", error: response.reason.message });
    }
  });

  return { results, errors };
}

// Méthode 2 : Gestion manuelle avec map
async function processUrlsManual(urls) {
  const results = [];

  const promises = urls.map(async (url) => {
    try {
      const data = await fetchData(url);
      return { success: true, url, data };
    } catch (error) {
      console.error(`Erreur pour ${url}:`, error.message);
      return { success: false, url, error: error.message };
    }
  });

  const responses = await Promise.all(promises);

  return {
    results: responses.filter((r) => r.success),
    errors: responses.filter((r) => !r.success),
  };
}

// Test
const urls = [
  "https://api.valid1.com",
  "https://api.invalid.com",
  "https://api.valid2.com",
];

processUrls(urls).then(({ results, errors }) => {
  console.log("Succès:", results);
  console.log("Erreurs:", errors);
});
```

---

## 🟪 Niveau 5 - Programmation fonctionnelle

### Solution 14 : Composition de fonctions

```javascript
// Fonction pipe générique
function pipe(...fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
}

// Fonctions de transformation
const filterAdults = (users) => users.filter((user) => user.age >= 18);

const capitalizeNames = (users) =>
  users.map((user) => ({
    ...user,
    name: user.name.charAt(0).toUpperCase() + user.name.slice(1),
  }));

const addAdultFlag = (users) =>
  users.map((user) => ({
    ...user,
    isAdult: true,
  }));

// Composition
const processUsers = pipe(filterAdults, capitalizeNames, addAdultFlag);

// Test
const users = [
  { name: "alice", age: 25 },
  { name: "bob", age: 17 },
  { name: "charlie", age: 30 },
];

const processed = processUsers(users);
console.log(processed);
// [
//   { name: 'Alice', age: 25, isAdult: true },
//   { name: 'Charlie', age: 30, isAdult: true }
// ]

// Alternative avec compose (ordre inverse)
const compose =
  (...fns) =>
  (value) =>
    fns.reduceRight((acc, fn) => fn(acc), value);

// Version fonctionnelle avancée avec currying
const filterBy = (predicate) => (array) => array.filter(predicate);
const mapWith = (transformer) => (array) => array.map(transformer);

const isAdult = (user) => user.age >= 18;
const capitalizeName = (user) => ({
  ...user,
  name: user.name.charAt(0).toUpperCase() + user.name.slice(1),
});
const addAdultProperty = (user) => ({ ...user, isAdult: true });

const processUsersFunctional = pipe(
  filterBy(isAdult),
  mapWith(capitalizeName),
  mapWith(addAdultProperty)
);
```

### Solution 15 : Immutabilité avancée

```javascript
const appState = {
  user: {
    name: "Alice",
    preferences: {
      theme: "dark",
      language: "fr",
    },
  },
  todos: [
    { id: 1, text: "Apprendre JS", completed: false },
    { id: 2, text: "Faire du sport", completed: true },
  ],
};

// Utilitaire pour mise à jour imbriquée
function updateNestedProperty(obj, path, value) {
  const keys = path.split(".");
  const lastKey = keys.pop();

  const nested = keys.reduce(
    (acc, key) => ({
      ...acc,
      [key]: { ...acc[key] },
    }),
    obj
  );

  let current = nested;
  for (let i = 0; i < keys.length - 1; i++) {
    current = current[keys[i]];
  }

  if (keys.length > 0) {
    current[keys[keys.length - 1]][lastKey] = value;
  } else {
    current[lastKey] = value;
  }

  return nested;
}

// Fonctions de mise à jour
function updateUserName(state, newName) {
  return {
    ...state,
    user: {
      ...state.user,
      name: newName,
    },
  };
}

function updateUserTheme(state, newTheme) {
  return {
    ...state,
    user: {
      ...state.user,
      preferences: {
        ...state.user.preferences,
        theme: newTheme,
      },
    },
  };
}

function addTodo(state, todo) {
  return {
    ...state,
    todos: [...state.todos, { ...todo, id: Date.now() }],
  };
}

function toggleTodo(state, todoId) {
  return {
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    ),
  };
}

function removeTodo(state, todoId) {
  return {
    ...state,
    todos: state.todos.filter((todo) => todo.id !== todoId),
  };
}

// Version avec immer (bibliothèque populaire)
/*
import { produce } from 'immer';

const updateUserNameImmer = (state, newName) =>
  produce(state, draft => {
    draft.user.name = newName;
  });

const updateUserThemeImmer = (state, newTheme) =>
  produce(state, draft => {
    draft.user.preferences.theme = newTheme;
  });
*/

// Tests
let state = appState;

state = updateUserName(state, "Bob");
console.log(state.user.name); // 'Bob'

state = updateUserTheme(state, "light");
console.log(state.user.preferences.theme); // 'light'

state = addTodo(state, { text: "Nouvelle tâche", completed: false });
console.log(state.todos.length); // 3

state = toggleTodo(state, 1);
console.log(state.todos.find((t) => t.id === 1).completed); // true

state = removeTodo(state, 2);
console.log(state.todos.length); // 2

// Vérification d'immutabilité
console.log(state !== appState); // true
console.log(state.user !== appState.user); // true
console.log(state.todos !== appState.todos); // true
```

---

## 🏆 Défi bonus : Debounce fonction

```javascript
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    const context = this;

    // Annuler le timeout précédent
    clearTimeout(timeoutId);

    // Programmer une nouvelle exécution
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// Version avec annulation
function debounceWithCancel(func, delay) {
  let timeoutId;

  const debounced = function (...args) {
    const context = this;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };

  debounced.cancel = function () {
    clearTimeout(timeoutId);
  };

  return debounced;
}

// Version avec exécution immédiate
function debounceImmediate(func, delay, immediate = false) {
  let timeoutId;

  return function (...args) {
    const context = this;
    const callNow = immediate && !timeoutId;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) func.apply(context, args);
    }, delay);

    if (callNow) func.apply(context, args);
  };
}

// Exemple d'utilisation complet
class SearchComponent {
  constructor() {
    this.searchInput = document.createElement("input");
    this.searchInput.type = "text";
    this.searchInput.placeholder = "Rechercher...";

    // Debounce la recherche
    this.debouncedSearch = debounce(this.performSearch.bind(this), 300);

    this.searchInput.addEventListener("input", (e) => {
      this.debouncedSearch(e.target.value);
    });
  }

  performSearch(query) {
    console.log(`Recherche pour: "${query}"`);
    // Simulation d'appel API
    if (query.length > 2) {
      console.log(`Résultats pour "${query}"`);
    }
  }
}

// Test simple
const simpleSearch = debounce((query) => {
  console.log(`Recherche: ${query}`);
}, 300);

// Simulation de saisie rapide
simpleSearch("a");
simpleSearch("ap");
simpleSearch("app");
simpleSearch("apple");
// Seule la dernière recherche "apple" sera exécutée après 300ms

// Throttle (bonus) - limite la fréquence d'exécution
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
```

---

## 🎯 Conseils pour bien comprendre les solutions

1. **Testez chaque solution** dans votre navigateur ou Node.js
2. **Modifiez les exemples** pour voir comment ils réagissent
3. **Comparez vos solutions** aux propositions
4. **Identifiez les patterns** récurrents (immutabilité, composition, etc.)
5. **Pratiquez les concepts difficiles** plusieurs fois

## 📊 Évaluation des solutions

- **Solutions 1-5** : Syntaxe ES6+ ✅
- **Solutions 6-8** : Méthodes de tableau ✅
- **Solutions 9-10** : Fonctions avancées ✅
- **Solutions 11-13** : Programmation asynchrone ✅
- **Solutions 14-15** : Programmation fonctionnelle ✅
- **Défi bonus** : Fonction utilitaire avancée ✅

**Prêt pour le projet final ?** Consultez `project.md` ! 🚀

---

## 🎓 Notes pédagogiques pour l'instructeur

### Points d'attention communs :

1. **Closure vs Scope** : Beaucoup confondent les deux concepts
2. **Arrow functions et `this`** : Expliquer le binding automatique
3. **Immutabilité** : Insister sur l'importance pour React
4. **Async/Await vs Promises** : Montrer les deux approches
5. **Composition de fonctions** : Concept avancé mais puissant

### Erreurs fréquentes à corriger :

- Mutations directes d'objets/tableaux
- Confusion entre `map` et `forEach`
- Mauvaise gestion des erreurs asynchrones
- Oubli du `return` dans les arrow functions
- Mauvaise utilisation du destructuring

### Extensions possibles :

- Web APIs (fetch, localStorage)
- Modules dynamiques
- Proxy et Reflect
- Generators et iterators
- Performance et optimisations

**Temps moyen par exercice :** 15-30 minutes
**Exercices les plus difficiles :** 9, 10, 14, 15, Bonus
