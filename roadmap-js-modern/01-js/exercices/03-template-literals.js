// =========================================
// Exercice 3: Template literals
// =========================================

console.log("🟨 Exercice 3: Template literals");
console.log("=================================");

// DONNÉES DE TEST
const user = {
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  isActive: true,
};

console.log("\n📋 Données utilisateur:", user);

// TODO: Créez une fonction createCard(user) qui retourne du HTML
console.log("\n✅ Votre solution:");

// function createCard(user) {
//   return `votre template literal ici`;
// }

// RÉSULTAT ATTENDU:
const expectedHTML = `
<div class="user-card">
  <h2>Alice</h2>
  <p>Email: alice@example.com</p>
  <p>Age: 25 ans</p>
  <p>Status: Actif</p>
</div>`;

console.log("\n🎯 Résultat attendu:");
console.log(expectedHTML.trim());

// Tests automatiques
console.log("\n🧪 Tests:");
try {
  // Décommentez quand vous avez implémenté:
  // const result = createCard(user);
  // console.log('\n✅ Votre résultat:');
  // console.log(result);

  // Test avec un autre utilisateur
  // const user2 = { name: 'Bob', email: 'bob@test.com', age: 30, isActive: false };
  // console.log('\n✅ Test utilisateur inactif:');
  // console.log(createCard(user2));

  console.log("⏳ Implémentez createCard() pour voir les tests");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// BONUS: Fonction avec conditions
console.log("\n🏆 BONUS: Gestion du status");
console.log('Affichez "Actif" si isActive = true, "Inactif" sinon');

// TODO BONUS: createCardWithStatus(user)
// function createCardWithStatus(user) {
//   const status = user.isActive ? 'Actif' : 'Inactif';
//   return `votre template avec ${status}`;
// }
