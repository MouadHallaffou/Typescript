// ===============================
// Exercice 1: Types primitifs et annotations
// ===============================

console.log("🔤 Exercice 1: Types primitifs et annotations TypeScript");
console.log("======================================================");

// TODO: Corrigez ce code en ajoutant les types appropriés
function calculateArea(width: number, height: number): number {
  return width * height;
}

// Test avec des types corrects
const result1 = calculateArea(10, 5);
console.log("✅ Résultat correct:", result1); // 50

// Test avec des types incorrects (commenté pour éviter l'erreur)
// const result2 = calculateArea("10", 5); // Erreur : width devrait être un number
// console.log(result2);

// TODO: Créez une fonction avec des types appropriés
function greetUser(name: string, age: number): string {
  return `Hello ${name}, you are ${age} years old!`;
}

// Tests
console.log("👋 Test greetUser:", greetUser("Alice", 25));

// TODO: Créez une fonction avec des types optionnels
function createProfile(name: string, age?: number, city?: string): object {
  return {
    name,
    age: age || 0,
    city: city || "Unknown"
  };
}

// Tests
console.log("👤 Profile complet:", createProfile("Bob", 30, "Paris"));
console.log("👤 Profile partiel:", createProfile("Charlie"));

// TODO: Créez une fonction avec des types d'union
function processValue(value: string | number): string {
  if (typeof value === "string") {
    return `String: ${value.toUpperCase()}`;
  } else {
    return `Number: ${value * 2}`;
  }
}

// Tests
console.log("🔄 String:", processValue("hello"));
console.log("🔄 Number:", processValue(42));

// TODO: Créez une fonction avec des types littéraux
type Status = "pending" | "approved" | "rejected";

function updateStatus(currentStatus: Status, newStatus: Status): Status {
  return newStatus;
}

// Tests
console.log("📊 Status update:", updateStatus("pending", "approved"));

// TODO: Créez une fonction avec des types de tableau
function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Tests
console.log("➕ Sum array:", sumArray([1, 2, 3, 4, 5]));

// TODO: Créez une fonction avec des types de tuple
type Coordinates = [number, number, number];

function calculateDistance(point1: Coordinates, point2: Coordinates): number {
  const [x1, y1, z1] = point1;
  const [x2, y2, z2] = point2;
  
  return Math.sqrt(
    Math.pow(x2 - x1, 2) + 
    Math.pow(y2 - y1, 2) + 
    Math.pow(z2 - z1, 2)
  );
}

// Tests
const pointA: Coordinates = [1, 2, 3];
const pointB: Coordinates = [4, 5, 6];
console.log("📏 Distance:", calculateDistance(pointA, pointB));

console.log("\n✅ Exercice 1 terminé !");
console.log("📝 Points clés appris :");
console.log("• Annotations de types pour les paramètres et valeurs de retour");
console.log("• Types primitifs (string, number, boolean)");
console.log("• Types d'union (|)");
console.log("• Types littéraux");
console.log("• Types de tableau et tuples");
console.log("• Types optionnels (?)");
