// =========================================
// Exercice 5: Spread operator
// =========================================

console.log("🟨 Exercice 5: Spread operator");
console.log("===============================");

// DONNÉES DE TEST
const user1 = { name: "Alice", age: 25, city: "Paris" };
const user2 = { age: 26, country: "France", profession: "Développeuse" };

console.log("\n📋 Utilisateur 1:", user1);
console.log("📋 Utilisateur 2:", user2);

// TODO 1: Fonction mergeUsers
console.log("\n✅ Exercice 1: Fusion d'objets");
// function mergeUsers(userA, userB) {
//   return { ...userA, ...userB };
// }

// Test de la fusion
try {
  // const merged = mergeUsers(user1, user2);
  // console.log('Résultat fusion:', merged);
  console.log("⏳ Implémentez mergeUsers() pour voir le résultat");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// DONNÉES POUR LES TABLEAUX
const fruits1 = ["pomme", "banane"];
const fruits2 = ["orange", "kiwi"];
const fruits3 = ["mangue", "ananas"];

console.log("\n📋 Tableaux de fruits:", { fruits1, fruits2, fruits3 });

// TODO 2: Fusion de tableaux
console.log("\n✅ Exercice 2: Fusion de tableaux");
// const allFruits = [...fruits1, ...fruits2, ...fruits3];
// console.log('Tous les fruits:', allFruits);

// TODO 3: Copie de tableau
console.log("\n✅ Exercice 3: Copie de tableau");
const originalNumbers = [1, 2, 3, 4, 5];
// const copiedNumbers = [...originalNumbers];
// copiedNumbers.push(6);
// console.log('Original:', originalNumbers);
// console.log('Copie modifiée:', copiedNumbers);

// TODO 4: Fonction avec rest parameters
console.log("\n✅ Exercice 4: Rest parameters");
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// Test de la fonction sum
try {
  // console.log('sum(1, 2, 3):', sum(1, 2, 3));
  // console.log('sum(1, 2, 3, 4, 5):', sum(1, 2, 3, 4, 5));
  // console.log('sum(...originalNumbers):', sum(...originalNumbers));
  console.log("⏳ Implémentez sum() pour voir les résultats");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 5: Spread avec fonctions existantes
console.log("\n✅ Exercice 5: Spread avec Math");
const scores = [85, 92, 78, 96, 88];
console.log("Scores:", scores);

// TODO: Trouvez le maximum et minimum avec Math.max et Math.min
// const maxScore = Math.max(...scores);
// const minScore = Math.min(...scores);
// console.log('Score max:', maxScore);
// console.log('Score min:', minScore);

// EXERCICE AVANCÉ: Ajout d'éléments au milieu
console.log("\n✅ Exercice 6: Insertion au milieu");
const letters = ["a", "b", "e", "f"];
console.log("Lettres originales:", letters);

// TODO: Insérez 'c' et 'd' entre 'b' et 'e' sans muter le tableau original
// const completeLetters = [...letters.slice(0, 2), 'c', 'd', ...letters.slice(2)];
// console.log('Lettres complètes:', completeLetters);

// BONUS: Fonction utilitaire pour mise à jour immutable
console.log("\n🏆 BONUS: Mise à jour immutable");
const todos = [
  { id: 1, text: "Apprendre JS", completed: false },
  { id: 2, text: "Faire du sport", completed: true },
  { id: 3, text: "Lire un livre", completed: false },
];

console.log("\n📋 Todos originales:", todos);

// TODO: Fonction pour marquer une todo comme complétée sans mutation
// function toggleTodo(todos, id) {
//   return todos.map(todo =>
//     todo.id === id
//       ? { ...todo, completed: !todo.completed }
//       : todo
//   );
// }

try {
  // const updatedTodos = toggleTodo(todos, 1);
  // console.log('Todos mises à jour:', updatedTodos);
  // console.log('Todos originales inchangées:', todos);
  console.log("⏳ Implémentez toggleTodo() pour voir le résultat");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}
