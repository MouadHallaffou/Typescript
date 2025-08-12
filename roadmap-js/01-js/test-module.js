// =====================================
// Script de test - Module JavaScript ES6+
// =====================================

console.log("🧪 VERIFICATION DES EXERCICES JAVASCRIPT ES6+");
console.log("===============================================");

const fs = require("fs");
const path = require("path");

// Liste des exercices attendus
const expectedExercises = [
  "01-variables-scope.js",
  "02-arrow-functions.js",
  "03-template-literals.js",
  "04-destructuring.js",
  "05-spread-rest.js",
  "06-filter-map.js",
  "07-reduce.js",
  "08-find-some.js",
  "09-closure.js",
  "10-higher-order-functions.js",
  "11-promises.js",
  "12-async-await.js",
  "13-error-handling.js",
  "14-function-composition.js",
  "15-immutability.js",
];

const exercicesDir = path.join(__dirname, "exercices");

console.log("\n📋 Vérification des fichiers d'exercices:");

let allExercisesExist = true;
const exerciseInfo = [];

expectedExercises.forEach((fileName, index) => {
  const filePath = path.join(exercicesDir, fileName);
  const exists = fs.existsSync(filePath);

  if (exists) {
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(1);
    console.log(
      `✅ ${String(index + 1).padStart(2, "0")}. ${fileName} (${sizeKB} KB)`
    );
    exerciseInfo.push({ name: fileName, size: sizeKB, exists: true });
  } else {
    console.log(
      `❌ ${String(index + 1).padStart(2, "0")}. ${fileName} - MANQUANT`
    );
    exerciseInfo.push({ name: fileName, exists: false });
    allExercisesExist = false;
  }
});

console.log("\n📊 STATISTIQUES:");
console.log(
  `✅ Exercices créés: ${exerciseInfo.filter((e) => e.exists).length}/15`
);
console.log(
  `❌ Exercices manquants: ${exerciseInfo.filter((e) => !e.exists).length}/15`
);

if (allExercisesExist) {
  const totalSize = exerciseInfo.reduce(
    (sum, ex) => sum + parseFloat(ex.size || 0),
    0
  );
  console.log(`📦 Taille totale: ${totalSize.toFixed(1)} KB`);
}

console.log("\n🎯 CONTENU DU MODULE:");
console.log("📚 Variables et portée - let, const, var, hoisting");
console.log("🏹 Fonctions fléchées - syntaxe, this, limitations");
console.log("📝 Template literals - interpolation, multilignes");
console.log("📦 Destructuring - objets, tableaux, paramètres");
console.log("🌟 Spread/Rest - expansion, collecte, clonage");
console.log("🔍 Filter/Map - transformation de données");
console.log("🧮 Reduce - accumulation et agrégation");
console.log("🎯 Find/Some - recherche et validation");
console.log("🔒 Closures - encapsulation et persistance");
console.log("⚡ Fonctions d'ordre supérieur - composition");
console.log("🔄 Promises - gestion asynchrone");
console.log("⏰ Async/Await - syntaxe moderne");
console.log("🛡️ Gestion d'erreurs - robustesse");
console.log("🔗 Composition de fonctions - modularité");
console.log("🧊 Immutabilité - sécurité des données");

console.log("\n🚀 PROCHAINES ÉTAPES:");
console.log("1. Créer les fichiers solutions/");
console.log("2. Implémenter les tests automatisés");
console.log("3. Étendre aux modules Node.js, TypeScript et React");

if (allExercisesExist) {
  console.log("\n🎉 MODULE JAVASCRIPT ES6+ COMPLET!");
  console.log("   Tous les exercices sont prêts pour l'apprentissage");
} else {
  console.log("\n⚠️  MODULE JAVASCRIPT ES6+ INCOMPLET");
  console.log("   Certains exercices doivent encore être créés");
}
