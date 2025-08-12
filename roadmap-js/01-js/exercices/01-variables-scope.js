// =========================================
// Exercice 1: Variables et scope
// =========================================

console.log("🟨 Exercice 1: Variables et scope");
console.log("=====================================");

// PROBLÈME: Ce code affiche 3, 3, 3 au lieu de 0, 1, 2
// Corrigez-le pour qu'il affiche la bonne séquence

console.log("\n❌ Code problématique:");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(`Valeur: ${i}`), 100);
}

// TODO: Écrivez votre solution ici
console.log("\n✅ Votre solution:");
// for (...) {
//   ...
// }

// BONUS: Expliquez pourquoi votre solution fonctionne
console.log("\n📝 Explication:");
// Votre explication ici

// Tests automatiques (ne pas modifier)
setTimeout(() => {
  console.log("\n🧪 Tests:");
  console.log("Attendu: 0, 1, 2");
  console.log("Votre résultat sera affiché ci-dessus");
}, 200);
