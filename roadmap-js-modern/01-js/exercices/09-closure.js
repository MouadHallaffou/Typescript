// =========================================
// Exercice 9: Closure
// =========================================

console.log("🟨 Exercice 9: Closure");
console.log("======================");

console.log(
  "\n📚 Rappel: Une closure permet à une fonction d'accéder aux variables"
);
console.log(
  "de son environnement lexical, même après que cette portée soit fermée."
);

// TODO 1: Créer createBankAccount
console.log("\n✅ Exercice 1: Compte bancaire");

// function createBankAccount(initialBalance) {
//   let balance = initialBalance;

//   return {
//     deposit(amount) {
//       if (amount > 0) {
//         balance += amount;
//         console.log(`Dépôt de ${amount}€. Nouveau solde: ${balance}€`);
//       } else {
//         console.log('Le montant doit être positif');
//       }
//     },

//     withdraw(amount) {
//       if (amount > 0) {
//         if (amount <= balance) {
//           balance -= amount;
//           console.log(`Retrait de ${amount}€. Nouveau solde: ${balance}€`);
//         } else {
//           console.log('Fonds insuffisants');
//         }
//       } else {
//         console.log('Le montant doit être positif');
//       }
//     },

//     getBalance() {
//       return balance;
//     }
//   };
// }

// Test du compte bancaire
console.log("\n🧪 Test compte bancaire:");
try {
  // const account = createBankAccount(100);
  // account.deposit(50);   // Dépôt de 50€. Nouveau solde: 150€
  // account.withdraw(30);  // Retrait de 30€. Nouveau solde: 120€
  // account.withdraw(200); // Fonds insuffisants
  // console.log('Solde final:', account.getBalance()); // 120

  // // Vérification de l'encapsulation
  // console.log('Variable balance accessible?', typeof balance); // undefined
  console.log("⏳ Implémentez createBankAccount()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 2: Compteur avec closure
console.log("\n✅ Exercice 2: Créateur de compteurs");

// function createCounter(start = 0, step = 1) {
//   let count = start;

//   return {
//     increment() {
//       count += step;
//       return count;
//     },

//     decrement() {
//       count -= step;
//       return count;
//     },

//     getValue() {
//       return count;
//     },

//     reset() {
//       count = start;
//       return count;
//     }
//   };
// }

// Test des compteurs
console.log("\n🧪 Test compteurs:");
try {
  // const counter1 = createCounter();     // Par défaut: start=0, step=1
  // const counter2 = createCounter(10, 2); // start=10, step=2

  // console.log('Counter1 increment:', counter1.increment()); // 1
  // console.log('Counter1 increment:', counter1.increment()); // 2
  // console.log('Counter2 increment:', counter2.increment()); // 12
  // console.log('Counter2 decrement:', counter2.decrement()); // 10

  // console.log('Les compteurs sont indépendants:');
  // console.log('Counter1 value:', counter1.getValue()); // 2
  // console.log('Counter2 value:', counter2.getValue()); // 10
  console.log("⏳ Implémentez createCounter()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 3: Cache avec closure
console.log("\n✅ Exercice 3: Système de cache");

// function createCache() {
//   const cache = new Map();

//   return {
//     set(key, value) {
//       cache.set(key, value);
//       console.log(`Cache: Clé "${key}" sauvegardée`);
//     },

//     get(key) {
//       if (cache.has(key)) {
//         console.log(`Cache: Hit pour "${key}"`);
//         return cache.get(key);
//       } else {
//         console.log(`Cache: Miss pour "${key}"`);
//         return undefined;
//       }
//     },

//     has(key) {
//       return cache.has(key);
//     },

//     clear() {
//       cache.clear();
//       console.log('Cache: Vidé');
//     },

//     size() {
//       return cache.size;
//     }
//   };
// }

// TODO 4: Configuration avec closure
console.log("\n✅ Exercice 4: Gestionnaire de configuration");

// function createConfig(defaults = {}) {
//   let config = { ...defaults };

//   return {
//     get(key) {
//       return key ? config[key] : { ...config };
//     },

//     set(key, value) {
//       if (typeof key === 'object') {
//         // Mise à jour multiple: set({key1: value1, key2: value2})
//         config = { ...config, ...key };
//       } else {
//         // Mise à jour simple: set('key', 'value')
//         config[key] = value;
//       }
//     },

//     reset() {
//       config = { ...defaults };
//     },

//     has(key) {
//       return key in config;
//     }
//   };
// }

// Tests avancés
console.log("\n🧪 Tests avancés:");
try {
  // const cache = createCache();
  // cache.set('user1', { name: 'Alice', age: 25 });
  // cache.set('user2', { name: 'Bob', age: 30 });
  // console.log('User1 du cache:', cache.get('user1'));
  // console.log('Taille du cache:', cache.size());

  // const config = createConfig({ theme: 'dark', lang: 'fr' });
  // console.log('Config initiale:', config.get());
  // config.set('theme', 'light');
  // config.set({ apiUrl: 'https://api.example.com', timeout: 5000 });
  // console.log('Config mise à jour:', config.get());
  console.log("⏳ Implémentez les fonctions pour voir les tests");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 5: Factory avec closure privée
console.log("\n✅ Exercice 5: Factory pattern avec méthodes privées");

// function createUser(name, email) {
//   // Variables privées
//   let _name = name;
//   let _email = email;
//   let _id = Math.random().toString(36).substr(2, 9);
//   let _loginCount = 0;

//   // Méthodes privées
//   function _validateEmail(email) {
//     return email.includes('@') && email.includes('.');
//   }

//   function _log(action) {
//     console.log(`User ${_id}: ${action}`);
//   }

//   // Interface publique
//   return {
//     // Getters
//     getName() {
//       return _name;
//     },

//     getEmail() {
//       return _email;
//     },

//     getId() {
//       return _id;
//     },

//     getLoginCount() {
//       return _loginCount;
//     },

//     // Setters avec validation
//     setName(newName) {
//       if (typeof newName === 'string' && newName.length > 0) {
//         _log(`Name changed from ${_name} to ${newName}`);
//         _name = newName;
//       } else {
//         throw new Error('Invalid name');
//       }
//     },

//     setEmail(newEmail) {
//       if (_validateEmail(newEmail)) {
//         _log(`Email changed from ${_email} to ${newEmail}`);
//         _email = newEmail;
//       } else {
//         throw new Error('Invalid email format');
//       }
//     },

//     // Actions
//     login() {
//       _loginCount++;
//       _log(`Logged in (${_loginCount} times total)`);
//     },

//     getProfile() {
//       return {
//         id: _id,
//         name: _name,
//         email: _email,
//         loginCount: _loginCount
//       };
//     }
//   };
// }

// BONUS: Closure avec état partagé
console.log("\n🏆 BONUS: État partagé entre instances");

// const UserManager = (function() {
//   let users = [];
//   let nextId = 1;

//   return {
//     createUser(name, email) {
//       const user = {
//         id: nextId++,
//         name,
//         email,
//         createdAt: new Date()
//       };
//       users.push(user);
//       return user;
//     },

//     getAllUsers() {
//       return [...users]; // Copie pour éviter les mutations
//     },

//     findUser(id) {
//       return users.find(user => user.id === id);
//     },

//     getUserCount() {
//       return users.length;
//     },

//     clearAllUsers() {
//       users = [];
//       nextId = 1;
//     }
//   };
// })();

// Tests finaux
console.log("\n🧪 Tests finaux:");
try {
  // const user1 = createUser('Alice', 'alice@test.com');
  // user1.login();
  // user1.setName('Alice Smith');
  // console.log('Profil user1:', user1.getProfile());

  // console.log('UserManager tests:');
  // UserManager.createUser('Bob', 'bob@test.com');
  // UserManager.createUser('Charlie', 'charlie@test.com');
  // console.log('Nombre d\'utilisateurs:', UserManager.getUserCount());
  // console.log('Tous les utilisateurs:', UserManager.getAllUsers());
  console.log(
    "⏳ Implémentez toutes les fonctions pour voir les tests complets"
  );
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// CONCEPTS CLÉS
console.log("\n📋 CONCEPTS CLÉS DES CLOSURES:");
console.log(
  "✅ Encapsulation - Variables privées inaccessibles de l'extérieur"
);
console.log("✅ Persistance - État conservé entre les appels");
console.log(
  "✅ Factory pattern - Création d'objets avec comportement similaire"
);
console.log(
  "✅ Module pattern - Organisation du code en modules privés/publics"
);

// QUESTIONS DE RÉFLEXION
console.log("\n❓ Questions:");
console.log("• Pourquoi les closures sont-elles utiles pour l'encapsulation?");
console.log("• Comment les closures diffèrent-elles des classes?");
console.log("• Quels sont les risques de mémoire avec les closures?");
console.log("• Dans quels cas préférer closures vs classes ES6?");
