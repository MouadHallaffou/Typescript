// =========================================
// TESTS AUTOMATIQUES - Module JavaScript ES6+
// =========================================

console.log("🧪 SYSTÈME DE TESTS AUTOMATIQUES");
console.log("=================================");

// Utilitaire de test simple
class TestRunner {
  constructor() {
    this.tests = [];
    this.passed = 0;
    this.failed = 0;
  }

  test(description, testFunction) {
    try {
      const result = testFunction();
      if (result === true || result === undefined) {
        console.log(`✅ ${description}`);
        this.passed++;
      } else {
        console.log(`❌ ${description} - Résultat: ${result}`);
        this.failed++;
      }
    } catch (error) {
      console.log(`❌ ${description} - Erreur: ${error.message}`);
      this.failed++;
    }
  }

  assert(condition, message) {
    if (!condition) {
      throw new Error(message || "Assertion failed");
    }
    return true;
  }

  assertEqual(actual, expected, message) {
    const actualStr = JSON.stringify(actual);
    const expectedStr = JSON.stringify(expected);
    if (actualStr !== expectedStr) {
      throw new Error(message || `Expected ${expectedStr}, got ${actualStr}`);
    }
    return true;
  }

  summary() {
    console.log("\n📊 RÉSUMÉ DES TESTS:");
    console.log(`✅ Réussis: ${this.passed}`);
    console.log(`❌ Échoués: ${this.failed}`);
    console.log(
      `📈 Taux de réussite: ${Math.round(
        (this.passed / (this.passed + this.failed)) * 100
      )}%`
    );
  }
}

const test = new TestRunner();

// =========================================
// TESTS POUR EXERCICE 1: Variables et scope
// =========================================

console.log("\n🟨 Test Exercice 1: Variables et scope");

// Test basique let vs var
test.test("let crée une portée de bloc", () => {
  let results = [];
  for (let i = 0; i < 3; i++) {
    results.push(() => i);
  }
  return results[0]() === 0 && results[1]() === 1 && results[2]() === 2;
});

// =========================================
// TESTS POUR EXERCICE 2: Arrow functions
// =========================================

console.log("\n🟨 Test Exercice 2: Arrow functions");

// Test arrow function basique
const greetUserArrow = (name, age) =>
  `Hello ${name}, you are ${age} years old!`;

test.test("Arrow function fonctionne correctement", () => {
  const result = greetUserArrow("Alice", 25);
  return test.assertEqual(result, "Hello Alice, you are 25 years old!");
});

test.test("Arrow function avec un paramètre", () => {
  const double = (x) => x * 2;
  return test.assertEqual(double(5), 10);
});

// =========================================
// TESTS POUR EXERCICE 3: Template literals
// =========================================

console.log("\n🟨 Test Exercice 3: Template literals");

function createCard(user) {
  return `
<div class="user-card">
  <h2>${user.name}</h2>
  <p>Email: ${user.email}</p>
  <p>Age: ${user.age} ans</p>
</div>`.trim();
}

test.test("Template literal génère le bon HTML", () => {
  const user = { name: "Alice", email: "alice@test.com", age: 25 };
  const result = createCard(user);
  return test.assert(result.includes("Alice") && result.includes("25 ans"));
});

// =========================================
// TESTS POUR EXERCICE 4: Destructuring
// =========================================

console.log("\n🟨 Test Exercice 4: Destructuring");

test.test("Destructuring d'objet fonctionne", () => {
  const book = { title: "1984", author: "Orwell", year: 1949 };
  const { title, author } = book;
  return test.assertEqual(title, "1984") && test.assertEqual(author, "Orwell");
});

test.test("Destructuring avec renommage", () => {
  const book = { author: "Orwell" };
  const { author: writer } = book;
  return test.assertEqual(writer, "Orwell");
});

test.test("Destructuring de tableau", () => {
  const fruits = ["pomme", "banane", "orange"];
  const [first, second] = fruits;
  return test.assertEqual(first, "pomme") && test.assertEqual(second, "banane");
});

// =========================================
// TESTS POUR EXERCICE 5: Spread operator
// =========================================

console.log("\n🟨 Test Exercice 5: Spread operator");

function mergeUsers(user1, user2) {
  return { ...user1, ...user2 };
}

test.test("Spread fusionne correctement les objets", () => {
  const user1 = { name: "Alice", age: 25 };
  const user2 = { age: 26, city: "Paris" };
  const merged = mergeUsers(user1, user2);
  const expected = { name: "Alice", age: 26, city: "Paris" };
  return test.assertEqual(merged, expected);
});

test.test("Spread fusionne les tableaux", () => {
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const merged = [...arr1, ...arr2];
  return test.assertEqual(merged, [1, 2, 3, 4]);
});

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

test.test("Rest parameters fonctionnent", () => {
  return test.assertEqual(sum(1, 2, 3, 4, 5), 15);
});

// =========================================
// TESTS AVANCÉS
// =========================================

console.log("\n🏆 Tests avancés");

test.test("Immutabilité avec spread", () => {
  const original = { a: 1, b: 2 };
  const modified = { ...original, b: 3 };
  return original.b === 2 && modified.b === 3; // Original non muté
});

test.test("Chaînage de méthodes de tableau", () => {
  const numbers = [1, 2, 3, 4, 5];
  const result = numbers.filter((n) => n % 2 === 0).map((n) => n * 2);
  return test.assertEqual(result, [4, 8]);
});

// =========================================
// RÉSUMÉ FINAL
// =========================================

setTimeout(() => {
  test.summary();

  console.log("\n🎯 INSTRUCTIONS POUR VOS EXERCICES:");
  console.log(
    "1. Lancez chaque exercice: node exercices/01-variables-scope.js"
  );
  console.log("2. Implémentez vos solutions dans les fichiers d'exercices");
  console.log("3. Relancez ce fichier de test: node tests/test-runner.js");
  console.log(
    "4. Comparez avec les solutions: node solutions/01-variables-scope.js"
  );

  console.log("\n📁 STRUCTURE DES FICHIERS:");
  console.log("exercices/ - Vos fichiers de travail (à modifier)");
  console.log("solutions/ - Solutions complètes (à consulter après)");
  console.log("tests/ - Tests automatiques (ce fichier)");
}, 100);
