// =========================================
// Exercice 4: Destructuring
// =========================================

console.log("🟨 Exercice 4: Destructuring");
console.log("=============================");

// DONNÉES DE TEST
const book = {
  title: "1984",
  author: "George Orwell",
  year: 1949,
  publisher: "Secker & Warburg",
  pages: 328,
  isbn: "978-0-452-28423-4",
};

console.log("\n📋 Livre de test:", book);

// TODO 1: Extraction simple
console.log("\n✅ Exercice 1: Extraction de base");
// const { ... } = book;
// console.log('Titre:', title);
// console.log('Auteur:', author);
// console.log('Année:', year);

// TODO 2: Renommage
console.log("\n✅ Exercice 2: Renommage");
// const { author: writer, year: publicationYear } = book;
// console.log('Écrivain:', writer);
// console.log('Année de publication:', publicationYear);

// TODO 3: Valeurs par défaut
console.log("\n✅ Exercice 3: Valeurs par défaut");
// const { title, genre = "Fiction", rating = "Non noté" } = book;
// console.log('Genre:', genre);
// console.log('Note:', rating);

// DONNÉES POUR DESTRUCTURING DE TABLEAUX
const fruits = ["pomme", "banane", "orange", "kiwi", "mangue"];
console.log("\n📋 Fruits:", fruits);

// TODO 4: Destructuring de tableau
console.log("\n✅ Exercice 4: Destructuring de tableau");
// const [first, second, , fourth] = fruits;
// console.log('Premier:', first);
// console.log('Deuxième:', second);
// console.log('Quatrième:', fourth);

// TODO 5: Rest operator avec tableaux
console.log("\n✅ Exercice 5: Rest operator");
// const [premier, ...autres] = fruits;
// console.log('Premier fruit:', premier);
// console.log('Autres fruits:', autres);

// EXERCICE AVANCÉ: Destructuring dans les paramètres de fonction
console.log("\n✅ Exercice 6: Paramètres de fonction");

const users = [
  { name: "Alice", age: 25, city: "Paris" },
  { name: "Bob", age: 30, city: "Lyon" },
  { name: "Charlie", age: 35, city: "Marseille" },
];

// TODO: Créez une fonction qui utilise le destructuring en paramètre
// function displayUser({ name, age, city }) {
//   return `${name} (${age} ans) habite à ${city}`;
// }

console.log("\n🧪 Tests:");
try {
  // Décommentez vos solutions pour tester:
  console.log("⏳ Décommentez vos solutions pour voir les résultats");

  // users.forEach(user => {
  //   console.log(displayUser(user));
  // });
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// BONUS: Destructuring imbriqué
const company = {
  name: "TechCorp",
  address: {
    street: "123 Main St",
    city: "Paris",
    country: "France",
  },
  employees: ["Alice", "Bob", "Charlie"],
};

console.log("\n🏆 BONUS: Destructuring imbriqué");
// TODO: Extrayez directement la ville de l'adresse
// const { address: { city: companyCity } } = company;
// console.log('Ville de l\'entreprise:', companyCity);
