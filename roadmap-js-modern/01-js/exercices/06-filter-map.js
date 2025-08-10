// =========================================
// Exercice 6: Filter et Map
// =========================================

console.log("🟧 Exercice 6: Filter et Map");
console.log("============================");

// DONNÉES DE TEST
const products = [
  { name: "Livre", price: 15, inStock: true, category: "education" },
  { name: "Stylo", price: 2, inStock: true, category: "bureau" },
  { name: "Ordinateur", price: 800, inStock: false, category: "tech" },
  { name: "Souris", price: 25, inStock: true, category: "tech" },
  { name: "Cahier", price: 5, inStock: true, category: "education" },
  { name: "Écran", price: 300, inStock: false, category: "tech" },
];

console.log("\n📋 Produits disponibles:");
console.table(products);

// TODO 1: Filtrer les produits en stock avec prix > 10€
console.log("\n✅ Exercice 1: Filtrer produits en stock (prix > 10€)");
// const expensiveInStock = products
//   .filter(product => product.inStock && product.price > 10);
// console.log('Produits chers en stock:', expensiveInStock);

// TODO 2: Ajouter une propriété priceWithTax (prix + 20%)
console.log("\n✅ Exercice 2: Ajouter TVA (20%)");
// const productsWithTax = products
//   .filter(product => product.inStock && product.price > 10)
//   .map(product => ({
//     ...product,
//     priceWithTax: product.price * 1.2
//   }));
// console.log('Avec TVA:', productsWithTax);

// TODO 3: Chaînage complexe - produits tech en stock avec remise
console.log("\n✅ Exercice 3: Chaînage complexe");
// const techDeals = products
//   .filter(product => product.category === 'tech' && product.inStock)
//   .map(product => ({
//     name: product.name,
//     originalPrice: product.price,
//     salePrice: product.price * 0.9, // 10% de remise
//     savings: product.price * 0.1
//   }));
// console.log('Offres tech:', techDeals);

// TODO 4: Transformation en format d'affichage
console.log("\n✅ Exercice 4: Format d'affichage");
// const displayFormat = products
//   .filter(product => product.inStock)
//   .map(product => `${product.name} - ${product.price}€ (${product.category})`);
// console.log('Format affichage:', displayFormat);

// BONUS: Fonction réutilisable
console.log("\n🏆 BONUS: Fonctions réutilisables");

// TODO: Créez des fonctions de filtrage réutilisables
// const isInStock = product => product.inStock;
// const isPriceAbove = minPrice => product => product.price > minPrice;
// const isCategory = category => product => product.category === category;

// const addTax = taxRate => product => ({
//   ...product,
//   priceWithTax: product.price * (1 + taxRate)
// });

// const formatDisplay = product =>
//   `${product.name} - ${product.price}€ (${product.category})`;

// Test des fonctions
try {
  // const result = products
  //   .filter(isInStock)
  //   .filter(isPriceAbove(10))
  //   .filter(isCategory('tech'))
  //   .map(addTax(0.2))
  //   .map(formatDisplay);
  // console.log('Résultat avec fonctions:', result);
  console.log("⏳ Implémentez les fonctions pour voir le résultat");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// Tests automatiques
console.log("\n🧪 Tests:");
console.log("1. Vérifiez que les produits filtrés sont bien en stock");
console.log("2. Vérifiez que la TVA est correctement calculée (prix * 1.2)");
console.log("3. Vérifiez que le chaînage preserve les données originales");
console.log("4. Testez avec différents critères de filtrage");

// QUESTIONS DE RÉFLEXION
console.log("\n❓ Questions:");
console.log("• Quelle est la différence entre map et forEach?");
console.log("• Pourquoi utiliser filter avant map?");
console.log("• Comment éviter les mutations dans map?");
console.log("• Quand utiliser des fonctions de filtrage réutilisables?");
