// =========================================
// Exercice 7: Reduce
// =========================================

console.log("🟧 Exercice 7: Reduce");
console.log("=====================");

// DONNÉES DE TEST
const sales = [
  {
    product: "Laptop",
    category: "Electronics",
    amount: 1200,
    date: "2024-01-15",
  },
  {
    product: "Phone",
    category: "Electronics",
    amount: 800,
    date: "2024-01-16",
  },
  { product: "Book", category: "Education", amount: 20, date: "2024-01-17" },
  { product: "Course", category: "Education", amount: 100, date: "2024-01-18" },
  {
    product: "Tablet",
    category: "Electronics",
    amount: 500,
    date: "2024-01-19",
  },
  {
    product: "Magazine",
    category: "Education",
    amount: 15,
    date: "2024-01-20",
  },
];

console.log("\n📋 Données de ventes:");
console.table(sales);

// TODO 1: Total des ventes par catégorie
console.log("\n✅ Exercice 1: Total par catégorie");
// const totalByCategory = sales.reduce((acc, sale) => {
//   acc[sale.category] = (acc[sale.category] || 0) + sale.amount;
//   return acc;
// }, {});
// console.log('Total par catégorie:', totalByCategory);

// TODO 2: Vente la plus élevée
console.log("\n✅ Exercice 2: Vente maximale");
// const maxSale = sales.reduce((max, sale) =>
//   sale.amount > max.amount ? sale : max
// );
// console.log('Vente maximale:', maxSale);

// TODO 3: Calcul de statistiques complètes
console.log("\n✅ Exercice 3: Statistiques complètes");
// const statistics = sales.reduce((stats, sale) => {
//   stats.total += sale.amount;
//   stats.count += 1;
//   stats.min = Math.min(stats.min, sale.amount);
//   stats.max = Math.max(stats.max, sale.amount);
//   return stats;
// }, { total: 0, count: 0, min: Infinity, max: -Infinity });

// statistics.average = statistics.total / statistics.count;
// console.log('Statistiques:', statistics);

// TODO 4: Grouper par date (année-mois)
console.log("\n✅ Exercice 4: Grouper par mois");
// const salesByMonth = sales.reduce((acc, sale) => {
//   const month = sale.date.substring(0, 7); // "2024-01"
//   if (!acc[month]) {
//     acc[month] = { total: 0, sales: [] };
//   }
//   acc[month].total += sale.amount;
//   acc[month].sales.push(sale);
//   return acc;
// }, {});
// console.log('Ventes par mois:', salesByMonth);

// TODO 5: Créer un rapport de ventes
console.log("\n✅ Exercice 5: Rapport complet");
// const salesReport = sales.reduce((report, sale) => {
//   // Mise à jour du total général
//   report.grandTotal += sale.amount;

//   // Mise à jour par catégorie
//   if (!report.categories[sale.category]) {
//     report.categories[sale.category] = { total: 0, items: [] };
//   }
//   report.categories[sale.category].total += sale.amount;
//   report.categories[sale.category].items.push(sale.product);

//   // Produit le plus cher
//   if (sale.amount > report.highestSale.amount) {
//     report.highestSale = sale;
//   }

//   return report;
// }, {
//   grandTotal: 0,
//   categories: {},
//   highestSale: { amount: 0 }
// });
// console.log('Rapport complet:', salesReport);

// BONUS: Reduce avancé avec transformations
console.log("\n🏆 BONUS: Transformations avancées");

// TODO: Convertir un tableau en objet indexé
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 500 },
];

// const productsById = products.reduce((acc, product) => {
//   acc[product.id] = product;
//   return acc;
// }, {});
// console.log('Produits par ID:', productsById);

// TODO: Aplatir un tableau de tableaux
const nestedArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
// const flattened = nestedArrays.reduce((acc, arr) => acc.concat(arr), []);
// console.log('Tableau aplati:', flattened);

// TODO: Compter les occurrences
const letters = ["a", "b", "a", "c", "b", "a"];
// const letterCount = letters.reduce((count, letter) => {
//   count[letter] = (count[letter] || 0) + 1;
//   return count;
// }, {});
// console.log('Comptage lettres:', letterCount);

// Tests automatiques
console.log("\n🧪 Tests:");
try {
  console.log("⏳ Implémentez vos solutions pour voir les résultats");

  // Test de la logique reduce
  const testReduce = [1, 2, 3, 4, 5].reduce((sum, num) => sum + num, 0);
  console.log("✅ Test basique reduce (somme 1-5):", testReduce); // Devrait être 15
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// QUESTIONS DE RÉFLEXION
console.log("\n❓ Questions:");
console.log("• Quand utiliser reduce plutôt que map ou filter?");
console.log("• Pourquoi est-il important de retourner l'accumulateur?");
console.log("• Comment choisir la valeur initiale de l'accumulateur?");
console.log("• Quels sont les patterns courants avec reduce?");
