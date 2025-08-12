// ===============================
// Exercice 4: Arrays et Tuples
// ===============================

console.log("📊 Exercice 4: Arrays et Tuples TypeScript");
console.log("==========================================");

// TODO: Définissez les types pour ces structures
type Coordinates = [number, number, number];
type Matrix = number[][];
type RGB = [number, number, number];
type RGBA = [number, number, number, number];

// TODO: Implémentez la fonction calculateDistance
function calculateDistance(point1: Coordinates, point2: Coordinates): number {
  const [x1, y1, z1] = point1;
  const [x2, y2, z2] = point2;
  
  return Math.sqrt(
    Math.pow(x2 - x1, 2) + 
    Math.pow(y2 - y1, 2) + 
    Math.pow(z2 - z1, 2)
  );
}

// TODO: Implémentez la fonction transposeMatrix
function transposeMatrix(matrix: Matrix): Matrix {
  if (matrix.length === 0) return [];
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed: Matrix = [];
  
  for (let i = 0; i < cols; i++) {
    transposed[i] = [];
    for (let j = 0; j < rows; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  
  return transposed;
}

// Tests
console.log("📍 Tests des coordonnées:");
const pointA: Coordinates = [1, 2, 3];
const pointB: Coordinates = [4, 5, 6];
console.log("📏 Distance:", calculateDistance(pointA, pointB));

console.log("\n📐 Tests des matrices:");
const matrix: Matrix = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log("📊 Matrice originale:", matrix);
console.log("🔄 Matrice transposée:", transposeMatrix(matrix));

// TODO: Créez des fonctions pour manipuler les couleurs
function rgbToHex(rgb: RGB): string {
  const [r, g, b] = rgb;
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function rgbaToRgb(rgba: RGBA): RGB {
  const [r, g, b, a] = rgba;
  // Conversion simple (pour une vraie application, il faudrait gérer l'alpha blending)
  return [r, g, b];
}

function blendColors(color1: RGB, color2: RGB, ratio: number): RGB {
  const [r1, g1, b1] = color1;
  const [r2, g2, b2] = color2;
  
  return [
    Math.round(r1 * (1 - ratio) + r2 * ratio),
    Math.round(g1 * (1 - ratio) + g2 * ratio),
    Math.round(b1 * (1 - ratio) + b2 * ratio)
  ];
}

// Tests des couleurs
console.log("\n🎨 Tests des couleurs:");
const red: RGB = [255, 0, 0];
const blue: RGB = [0, 0, 255];
const transparentRed: RGBA = [255, 0, 0, 0.5];

console.log("🔴 Rouge en hex:", rgbToHex(red));
console.log("🔵 Bleu en hex:", rgbToHex(blue));
console.log("🔴 Rouge transparent vers RGB:", rgbaToRgb(transparentRed));
console.log("🟣 Mélange rouge/bleu:", rgbToHex(blendColors(red, blue, 0.5)));

// TODO: Créez des fonctions pour manipuler des tableaux typés
function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function zipArrays<T, U>(arr1: T[], arr2: U[]): [T, U][] {
  const minLength = Math.min(arr1.length, arr2.length);
  const result: [T, U][] = [];
  
  for (let i = 0; i < minLength; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  
  return result;
}

function groupBy<T, K extends keyof any>(arr: T[], keyFn: (item: T) => K): Record<K, T[]> {
  return arr.reduce((groups, item) => {
    const key = keyFn(item);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {} as Record<K, T[]>);
}

// Tests des manipulations de tableaux
console.log("\n📦 Tests des manipulations de tableaux:");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const letters = ['a', 'b', 'c', 'd'];

console.log("📦 Chunks de 3:", chunkArray(numbers, 3));
console.log("🤝 Zip arrays:", zipArrays(numbers, letters));

interface Person {
  name: string;
  age: number;
  city: string;
}

const people: Person[] = [
  { name: "Alice", age: 25, city: "Paris" },
  { name: "Bob", age: 30, city: "London" },
  { name: "Charlie", age: 25, city: "Paris" },
  { name: "Diana", age: 35, city: "London" }
];

console.log("👥 Group by age:", groupBy(people, person => person.age));
console.log("🏙️ Group by city:", groupBy(people, person => person.city));

// TODO: Créez des types pour des structures de données complexes
type Point2D = [number, number];
type Point3D = [number, number, number];
type Line = [Point2D, Point2D];
type Triangle = [Point2D, Point2D, Point2D];

// TODO: Implémentez des fonctions géométriques
function calculateLineLength(line: Line): number {
  const [[x1, y1], [x2, y2]] = line;
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function calculateTriangleArea(triangle: Triangle): number {
  const [[x1, y1], [x2, y2], [x3, y3]] = triangle;
  return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2);
}

function isPointInTriangle(point: Point2D, triangle: Triangle): boolean {
  const [p1, p2, p3] = triangle;
  const [px, py] = point;
  
  const area = calculateTriangleArea(triangle);
  const area1 = calculateTriangleArea([[px, py], p2, p3]);
  const area2 = calculateTriangleArea([p1, [px, py], p3]);
  const area3 = calculateTriangleArea([p1, p2, [px, py]]);
  
  return Math.abs(area - (area1 + area2 + area3)) < 0.001;
}

// Tests géométriques
console.log("\n📐 Tests géométriques:");
const line: Line = [[0, 0], [3, 4]];
const triangle: Triangle = [[0, 0], [4, 0], [2, 3]];
const point: Point2D = [2, 1];

console.log("📏 Longueur de ligne:", calculateLineLength(line));
console.log("📐 Aire du triangle:", calculateTriangleArea(triangle));
console.log("📍 Point dans triangle:", isPointInTriangle(point, triangle));

// TODO: Créez des types pour des structures de données imbriquées
type NestedArray<T> = T | NestedArray<T>[];
type Tree<T> = {
  value: T;
  children: Tree<T>[];
};

// TODO: Implémentez des fonctions pour les structures imbriquées
function flattenArray<T>(arr: NestedArray<T>): T[] {
  const result: T[] = [];
  
  function flatten(item: NestedArray<T>): void {
    if (Array.isArray(item)) {
      item.forEach(flatten);
    } else {
      result.push(item);
    }
  }
  
  flatten(arr);
  return result;
}

function treeToArray<T>(tree: Tree<T>): T[] {
  const result: T[] = [tree.value];
  
  for (const child of tree.children) {
    result.push(...treeToArray(child));
  }
  
  return result;
}

// Tests des structures imbriquées
console.log("\n🌳 Tests des structures imbriquées:");
const nestedArray: NestedArray<number> = [1, [2, 3, [4, 5]], 6];
const tree: Tree<string> = {
  value: "root",
  children: [
    {
      value: "child1",
      children: [
        { value: "grandchild1", children: [] },
        { value: "grandchild2", children: [] }
      ]
    },
    {
      value: "child2",
      children: []
    }
  ]
};

console.log("📦 Array aplati:", flattenArray(nestedArray));
console.log("🌳 Tree to array:", treeToArray(tree));

console.log("\n✅ Exercice 4 terminé !");
console.log("📝 Points clés appris :");
console.log("• Types de tuples avec des éléments typés");
console.log("• Manipulation de tableaux typés");
console.log("• Fonctions génériques pour les tableaux");
console.log("• Structures de données géométriques");
console.log("• Types récursifs pour les structures imbriquées");
console.log("• Groupement et transformation de données");
