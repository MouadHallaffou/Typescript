# 💪 Exercices JavaScript ES6+ Moderne

## 📝 Instructions

- Résolvez chaque exercice dans l'ordre
- Testez votre code avant de passer au suivant
- Ne consultez les solutions qu'après avoir essayé
- Commentez votre code pour expliquer votre raisonnement

---

## 🟨 Niveau 1 - Syntaxe de base

### Exercice 1 : Variables et scope

```javascript
// Corrigez ce code pour qu'il affiche 0, 1, 2 au lieu de 3, 3, 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

### Exercice 2 : Arrow functions

Convertissez cette fonction en arrow function et simplifiez au maximum :

```javascript
function greetUser(name, age) {
  return "Hello " + name + ", you are " + age + " years old!";
}
```

### Exercice 3 : Template literals

Créez une fonction `createCard(user)` qui retourne du HTML en utilisant les template literals :

```javascript
const user = {
  name: "Alice",
  email: "alice@example.com",
  age: 25,
};

// Résultat attendu :
// <div class="user-card">
//   <h2>Alice</h2>
//   <p>Email: alice@example.com</p>
//   <p>Age: 25 ans</p>
// </div>
```

### Exercice 4 : Destructuring

À partir de cet objet, extrayez `title`, `author`, et `year` en utilisant le destructuring :

```javascript
const book = {
  title: "1984",
  author: "George Orwell",
  year: 1949,
  publisher: "Secker & Warburg",
  pages: 328,
};

// Bonus : renommez author en writer
// Bonus 2 : donnez une valeur par défaut à genre = "Fiction"
```

### Exercice 5 : Spread operator

Écrivez une fonction `mergeUsers(user1, user2)` qui fusionne deux objets utilisateur, avec les propriétés de `user2` qui écrasent celles de `user1` :

```javascript
const user1 = { name: "Alice", age: 25, city: "Paris" };
const user2 = { age: 26, country: "France" };

// Résultat : { name: 'Alice', age: 26, city: 'Paris', country: 'France' }
```

---

## 🟧 Niveau 2 - Méthodes de tableau

### Exercice 6 : Filter et Map

À partir de ce tableau de produits, créez un nouveau tableau contenant uniquement les produits en stock avec un prix supérieur à 10€, en ajoutant une propriété `priceWithTax` (prix + 20%) :

```javascript
const products = [
  { name: "Livre", price: 15, inStock: true },
  { name: "Stylo", price: 2, inStock: true },
  { name: "Ordinateur", price: 800, inStock: false },
  { name: "Souris", price: 25, inStock: true },
];
```

### Exercice 7 : Reduce

Calculez le total des ventes par catégorie :

```javascript
const sales = [
  { product: "Laptop", category: "Electronics", amount: 1200 },
  { product: "Phone", category: "Electronics", amount: 800 },
  { product: "Book", category: "Education", amount: 20 },
  { product: "Course", category: "Education", amount: 100 },
];

// Résultat attendu : { Electronics: 2000, Education: 120 }
```

### Exercice 8 : Find et Some

Écrivez deux fonctions :

- `findUserByEmail(users, email)` : trouve un utilisateur par son email
- `hasAdminUser(users)` : vérifie s'il y a au moins un utilisateur admin

```javascript
const users = [
  { name: "Alice", email: "alice@test.com", role: "user" },
  { name: "Bob", email: "bob@test.com", role: "admin" },
  { name: "Charlie", email: "charlie@test.com", role: "user" },
];
```

---

## 🟨 Niveau 3 - Fonctions avancées

### Exercice 9 : Closure

Créez une fonction `createBankAccount(initialBalance)` qui retourne un objet avec trois méthodes :

- `deposit(amount)` : ajoute de l'argent
- `withdraw(amount)` : retire de l'argent (si suffisant)
- `getBalance()` : retourne le solde actuel

```javascript
const account = createBankAccount(100);
account.deposit(50); // Solde : 150
account.withdraw(30); // Solde : 120
account.withdraw(200); // Erreur : fonds insuffisants
console.log(account.getBalance()); // 120
```

### Exercice 10 : Fonction d'ordre supérieur

Créez une fonction `retry(fn, maxAttempts)` qui exécute une fonction jusqu'à `maxAttempts` fois jusqu'à ce qu'elle réussisse :

```javascript
// Fonction qui échoue aléatoirement
function unreliableFunction() {
  if (Math.random() < 0.7) {
    throw new Error("Échec aléatoire");
  }
  return "Succès !";
}

const result = retry(unreliableFunction, 3);
```

---

## 🟦 Niveau 4 - Programmation asynchrone

### Exercice 11 : Promises

Créez une fonction `fetchWithTimeout(url, timeout)` qui simule un appel réseau avec un timeout :

```javascript
function simulateNetworkCall(url) {
  return new Promise((resolve) => {
    const delay = Math.random() * 3000; // 0-3 secondes
    setTimeout(() => {
      resolve(`Données de ${url}`);
    }, delay);
  });
}

// Votre fonction doit rejeter si l'appel dépasse le timeout
```

### Exercice 12 : Async/Await

Écrivez une fonction `getUserWithPosts(userId)` qui :

1. Récupère les données de l'utilisateur
2. Récupère ses posts
3. Retourne un objet combiné

```javascript
// Fonctions simulées
async function fetchUser(id) {
  return { id, name: `User${id}`, email: `user${id}@test.com` };
}

async function fetchUserPosts(userId) {
  return [
    { id: 1, title: "Post 1", userId },
    { id: 2, title: "Post 2", userId },
  ];
}

// Résultat attendu : { user: {...}, posts: [...] }
```

### Exercice 13 : Gestion d'erreurs asynchrones

Créez une fonction `processUrls(urls)` qui :

- Traite plusieurs URLs en parallèle
- Retourne les résultats réussis
- Log les erreurs sans faire planter le processus

```javascript
const urls = [
  "https://api.valid1.com",
  "https://api.invalid.com", // Cette URL va échouer
  "https://api.valid2.com",
];
```

---

## 🟪 Niveau 5 - Programmation fonctionnelle

### Exercice 14 : Composition de fonctions

Créez une fonction `pipe` qui permet de composer des fonctions, puis utilisez-la pour transformer des données :

```javascript
const users = [
  { name: "alice", age: 25 },
  { name: "bob", age: 17 },
  { name: "charlie", age: 30 },
];

// Transformations à appliquer :
// 1. Filtrer les adultes (≥18 ans)
// 2. Capitaliser les noms
// 3. Ajouter une propriété isAdult: true

const processUsers = pipe(filterAdults, capitalizeNames, addAdultFlag);

// Implémentez pipe() et les fonctions de transformation
```

### Exercice 15 : Immutabilité avancée

Créez des fonctions pour manipuler cet état sans le muter :

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

// Fonctions à implémenter :
// - updateUserName(state, newName)
// - updateUserTheme(state, newTheme)
// - addTodo(state, todo)
// - toggleTodo(state, todoId)
// - removeTodo(state, todoId)
```

---

## 🏆 Défi bonus : Debounce fonction

Implémentez une fonction `debounce(func, delay)` qui retarde l'exécution d'une fonction jusqu'à ce qu'elle ne soit plus appelée pendant `delay` millisecondes :

```javascript
// Utilisation :
const searchInput = document.getElementById("search");
const debouncedSearch = debounce((query) => {
  console.log(`Recherche: ${query}`);
}, 300);

searchInput.addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});

// La fonction de recherche ne s'exécute que 300ms après
// que l'utilisateur a arrêté de taper
```

---

## 📊 Auto-évaluation

Après avoir terminé tous les exercices, évaluez votre compréhension :

- [ ] Je maîtrise la syntaxe ES6+ (let/const, arrow functions, destructuring)
- [ ] Je comprends les méthodes de tableau modernes
- [ ] Je sais utiliser les closures et les fonctions d'ordre supérieur
- [ ] Je maîtrise la programmation asynchrone (Promises, async/await)
- [ ] Je comprends les concepts de programmation fonctionnelle
- [ ] Je peux écrire du code immutable
- [ ] Je sais composer des fonctions complexes

**Score :** \_\_\_/15 exercices résolus

Si vous avez moins de 12/15, relisez le cours et refaites les exercices difficiles.

**Prêt pour les solutions ?** Consultez `solutions.md` ! 🔍
