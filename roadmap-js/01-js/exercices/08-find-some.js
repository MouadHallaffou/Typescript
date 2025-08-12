// =========================================
// Exercice 8: Find et Some
// =========================================

console.log("🟧 Exercice 8: Find et Some");
console.log("===========================");

// DONNÉES DE TEST
const users = [
  {
    id: 1,
    name: "Alice",
    email: "alice@test.com",
    role: "user",
    age: 25,
    isActive: true,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@test.com",
    role: "admin",
    age: 30,
    isActive: true,
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@test.com",
    role: "user",
    age: 35,
    isActive: false,
  },
  {
    id: 4,
    name: "Diana",
    email: "diana@test.com",
    role: "moderator",
    age: 28,
    isActive: true,
  },
  {
    id: 5,
    name: "Eve",
    email: "eve@test.com",
    role: "user",
    age: 22,
    isActive: true,
  },
];

console.log("\n📋 Base d'utilisateurs:");
console.table(users);

// TODO 1: Fonction findUserByEmail
console.log("\n✅ Exercice 1: Trouver utilisateur par email");
// function findUserByEmail(users, email) {
//   return users.find(user => user.email === email);
// }

// Test de la fonction
try {
  // const foundUser = findUserByEmail(users, 'bob@test.com');
  // console.log('Utilisateur trouvé:', foundUser);

  // const notFound = findUserByEmail(users, 'inexistant@test.com');
  // console.log('Utilisateur inexistant:', notFound); // undefined
  console.log("⏳ Implémentez findUserByEmail()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 2: Fonction hasAdminUser
console.log("\n✅ Exercice 2: Vérifier présence admin");
// function hasAdminUser(users) {
//   return users.some(user => user.role === 'admin');
// }

// Test de la fonction
try {
  // const hasAdmin = hasAdminUser(users);
  // console.log('Y a-t-il un admin?', hasAdmin); // true

  // const usersOnly = users.filter(user => user.role === 'user');
  // const hasAdminInUsersOnly = hasAdminUser(usersOnly);
  // console.log('Admin dans users seulement?', hasAdminInUsersOnly); // false
  console.log("⏳ Implémentez hasAdminUser()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 3: Fonctions avancées avec find
console.log("\n✅ Exercice 3: Recherches avancées");

// function findOldestUser(users) {
//   return users.reduce((oldest, user) =>
//     user.age > oldest.age ? user : oldest
//   );
// }

// function findUserById(users, id) {
//   return users.find(user => user.id === id);
// }

// function findActiveUserByRole(users, role) {
//   return users.find(user => user.role === role && user.isActive);
// }

// TODO 4: Fonctions avec some et every
console.log("\n✅ Exercice 4: Vérifications avec some/every");

// function hasMinors(users) {
//   return users.some(user => user.age < 18);
// }

// function areAllActive(users) {
//   return users.every(user => user.isActive);
// }

// function hasUsersOlderThan(users, minAge) {
//   return users.some(user => user.age > minAge);
// }

// function areAllAdults(users) {
//   return users.every(user => user.age >= 18);
// }

// Tests avancés
console.log("\n🧪 Tests avancés:");
try {
  // console.log('Plus vieil utilisateur:', findOldestUser(users));
  // console.log('Utilisateur ID 3:', findUserById(users, 3));
  // console.log('Modérateur actif:', findActiveUserByRole(users, 'moderator'));

  // console.log('Y a-t-il des mineurs?', hasMinors(users));
  // console.log('Tous actifs?', areAllActive(users));
  // console.log('Utilisateurs > 30 ans?', hasUsersOlderThan(users, 30));
  // console.log('Tous majeurs?', areAllAdults(users));

  console.log("⏳ Implémentez toutes les fonctions pour voir les tests");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 5: Recherche complexe avec findIndex
console.log("\n✅ Exercice 5: Index et positions");

// function findUserIndex(users, email) {
//   return users.findIndex(user => user.email === email);
// }

// function findLastActiveUser(users) {
//   const activeUsers = users.filter(user => user.isActive);
//   return activeUsers[activeUsers.length - 1];
// }

// Alternative avec findIndex en partant de la fin
// function findLastActiveUserIndex(users) {
//   for (let i = users.length - 1; i >= 0; i--) {
//     if (users[i].isActive) {
//       return i;
//     }
//   }
//   return -1;
// }

// BONUS: Recherche avec critères multiples
console.log("\n🏆 BONUS: Recherche multi-critères");

// TODO: Fonction générique de recherche
// function findUserByCriteria(users, criteria) {
//   return users.find(user => {
//     return Object.keys(criteria).every(key =>
//       user[key] === criteria[key]
//     );
//   });
// }

// function findUsersByCriteria(users, criteria) {
//   return users.filter(user => {
//     return Object.keys(criteria).every(key =>
//       user[key] === criteria[key]
//     );
//   });
// }

// Test des fonctions bonus
try {
  // const criteria = { role: 'user', isActive: true };
  // const firstMatch = findUserByCriteria(users, criteria);
  // const allMatches = findUsersByCriteria(users, criteria);

  // console.log('Premier utilisateur actif:', firstMatch);
  // console.log('Tous les utilisateurs actifs:', allMatches);
  console.log("⏳ Implémentez les fonctions bonus");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// Comparaison des méthodes
console.log("\n📊 COMPARAISON DES MÉTHODES:");
console.log("find()     - Premier élément qui correspond");
console.log("findIndex() - Index du premier élément qui correspond");
console.log("some()     - true si AU MOINS UN élément correspond");
console.log("every()    - true si TOUS les éléments correspondent");
console.log("filter()   - TOUS les éléments qui correspondent");

// QUESTIONS DE RÉFLEXION
console.log("\n❓ Questions:");
console.log("• Quand utiliser find() vs filter()?");
console.log("• Quelle est la différence entre some() et includes()?");
console.log("• Comment optimiser les recherches sur de gros datasets?");
console.log("• Que retourne find() si aucun élément ne correspond?");
