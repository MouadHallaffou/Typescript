// =========================================
// Exercice 2: Arrow functions
// =========================================

console.log("🟨 Exercice 2: Arrow functions");
console.log("===============================");

// FONCTION ORIGINALE à convertir
function greetUser(name, age) {
  return "Hello " + name + ", you are " + age + " years old!";
}

console.log("\n📋 Fonction originale:");
console.log(greetUser("Alice", 25));

// TODO: Convertissez en arrow function ET utilisez template literals
console.log("\n✅ Votre solution:");

// const greetUserArrow = ... votre code ici

// Décommentez pour tester:
// console.log(greetUserArrow('Bob', 30));

// BONUS: Version ultra-simplifiée (une ligne)
// const greetUserSimple = ... votre code ici

// Tests automatiques
console.log("\n🧪 Tests:");
try {
  // Décommentez quand vous avez implémenté:
  // console.log('✅ Arrow function:', greetUserArrow('Charlie', 35));
  // console.log('✅ Version simple:', greetUserSimple('Diana', 28));
  console.log("⏳ Implémentez vos fonctions pour voir les tests");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// QUESTIONS DE RÉFLEXION:
console.log("\n❓ Questions:");
console.log(
  "1. Quelle est la différence entre arrow function et function normale?"
);
console.log("2. Dans quels cas éviter les arrow functions?");
console.log('3. Que signifie "lexical this" ?');
