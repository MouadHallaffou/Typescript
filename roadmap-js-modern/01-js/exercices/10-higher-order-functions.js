// =========================================
// Exercice 10: Fonction d'ordre supérieur
// =========================================

console.log("🟨 Exercice 10: Fonction d'ordre supérieur");
console.log("===========================================");

console.log("\n📚 Une fonction d'ordre supérieur:");
console.log("• Prend une ou plusieurs fonctions en paramètre");
console.log("• Et/ou retourne une fonction");
console.log("• Exemples: map, filter, setTimeout, addEventListener");

// TODO 1: Fonction retry
console.log("\n✅ Exercice 1: Fonction retry avec gestion d'erreurs");

// function retry(fn, maxAttempts = 3, delay = 1000) {
//   return async function(...args) {
//     let lastError;

//     for (let attempt = 1; attempt <= maxAttempts; attempt++) {
//       try {
//         console.log(`Tentative ${attempt}/${maxAttempts}`);
//         const result = await fn(...args);
//         console.log(`✅ Succès à la tentative ${attempt}`);
//         return result;
//       } catch (error) {
//         lastError = error;
//         console.log(`❌ Échec tentative ${attempt}: ${error.message}`);

//         if (attempt < maxAttempts) {
//           console.log(`⏳ Attente de ${delay}ms avant nouvelle tentative...`);
//           await new Promise(resolve => setTimeout(resolve, delay));
//         }
//       }
//     }

//     console.log(`💥 Échec après ${maxAttempts} tentatives`);
//     throw lastError;
//   };
// }

// Fonction de test qui échoue parfois
function unreliableFunction(shouldFail = false) {
  return new Promise((resolve, reject) => {
    if (shouldFail || Math.random() < 0.7) {
      reject(new Error("Erreur réseau simulée"));
    } else {
      resolve("Données récupérées avec succès!");
    }
  });
}

// Test de retry
console.log("\n🧪 Test de la fonction retry:");
try {
  // const reliableFunction = retry(unreliableFunction, 3, 500);

  // // Test 1: Function qui peut échouer
  // console.log('Test 1: Fonction aléatoire');
  // reliableFunction(false).then(result => {
  //   console.log('Résultat:', result);
  // }).catch(error => {
  //   console.log('Échec final:', error.message);
  // });

  // // Test 2: Function qui échoue toujours
  // setTimeout(() => {
  //   console.log('\nTest 2: Fonction qui échoue toujours');
  //   reliableFunction(true).catch(error => {
  //     console.log('Échec définitif:', error.message);
  //   });
  // }, 3000);

  console.log("⏳ Implémentez la fonction retry()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 2: Fonction memoize (cache de résultats)
console.log("\n✅ Exercice 2: Memoization");

// function memoize(fn) {
//   const cache = new Map();

//   return function(...args) {
//     const key = JSON.stringify(args);

//     if (cache.has(key)) {
//       console.log(`📋 Cache hit pour: ${key}`);
//       return cache.get(key);
//     }

//     console.log(`🔄 Calcul pour: ${key}`);
//     const result = fn(...args);
//     cache.set(key, result);
//     return result;
//   };
// }

// Fonction coûteuse à calculer
function expensiveCalculation(n) {
  console.log(`💻 Calcul de fibonacci(${n})...`);
  if (n <= 1) return n;
  return expensiveCalculation(n - 1) + expensiveCalculation(n - 2);
}

// Test de memoize
console.log("\n🧪 Test de memoization:");
try {
  // const memoizedFib = memoize(expensiveCalculation);

  // console.log('Premier appel fib(10):');
  // console.log('Résultat:', memoizedFib(10));

  // console.log('\nDeuxième appel fib(10) (devrait utiliser le cache):');
  // console.log('Résultat:', memoizedFib(10));

  // console.log('\nNouvel appel fib(12):');
  // console.log('Résultat:', memoizedFib(12));

  console.log("⏳ Implémentez la fonction memoize()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 3: Fonction throttle
console.log("\n✅ Exercice 3: Throttle (limitation de fréquence)");

// function throttle(fn, limit) {
//   let inThrottle;

//   return function(...args) {
//     if (!inThrottle) {
//       fn.apply(this, args);
//       inThrottle = true;
//       setTimeout(() => inThrottle = false, limit);
//     } else {
//       console.log('🚫 Appel throttlé (ignoré)');
//     }
//   };
// }

// TODO 4: Fonction debounce
console.log("\n✅ Exercice 4: Debounce (retarder l'exécution)");

// function debounce(fn, delay) {
//   let timeoutId;

//   return function(...args) {
//     clearTimeout(timeoutId);
//     console.log(`⏳ Debounce: nouveau timer de ${delay}ms`);

//     timeoutId = setTimeout(() => {
//       console.log('✅ Debounce: exécution de la fonction');
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// Test throttle et debounce
console.log("\n🧪 Test throttle et debounce:");

function logMessage(msg) {
  console.log(`📝 ${new Date().toLocaleTimeString()}: ${msg}`);
}

try {
  // const throttledLog = throttle(logMessage, 2000);
  // const debouncedLog = debounce(logMessage, 1000);

  // console.log('Test throttle (limite: 2 secondes):');
  // throttledLog('Message 1'); // Exécuté
  // throttledLog('Message 2'); // Ignoré
  // throttledLog('Message 3'); // Ignoré

  // setTimeout(() => {
  //   console.log('\nTest debounce (délai: 1 seconde):');
  //   debouncedLog('Message A'); // Timer démarré
  //   setTimeout(() => debouncedLog('Message B'), 500); // Timer reseté
  //   setTimeout(() => debouncedLog('Message C'), 800); // Timer reseté
  //   // Seul 'Message C' sera exécuté après 1800ms total
  // }, 3000);

  console.log("⏳ Implémentez throttle() et debounce()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 5: Fonction curry
console.log("\n✅ Exercice 5: Currying");

// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     } else {
//       return function(...nextArgs) {
//         return curried(...args, ...nextArgs);
//       };
//     }
//   };
// }

// Fonctions pour tester le currying
function add(a, b, c) {
  return a + b + c;
}

function multiply(a, b, c, d) {
  return a * b * c * d;
}

// Test du currying
console.log("\n🧪 Test currying:");
try {
  // const curriedAdd = curry(add);
  // const curriedMultiply = curry(multiply);

  // // Différentes façons d'utiliser les fonctions curryfiées
  // console.log('Add normal:', add(1, 2, 3)); // 6
  // console.log('Add curried (tous les args):', curriedAdd(1, 2, 3)); // 6
  // console.log('Add curried (partiel):', curriedAdd(1)(2)(3)); // 6
  // console.log('Add curried (mélangé):', curriedAdd(1, 2)(3)); // 6

  // // Création de fonctions spécialisées
  // const add5 = curriedAdd(5);
  // const add5And10 = add5(10);
  // console.log('Fonction spécialisée add5And10(3):', add5And10(3)); // 18

  // const multiply2 = curriedMultiply(2);
  // const multiply2By3 = multiply2(3);
  // console.log('multiply2By3(4)(5):', multiply2By3(4)(5)); // 120

  console.log("⏳ Implémentez la fonction curry()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// BONUS: Composition de fonctions d'ordre supérieur
console.log("\n🏆 BONUS: Composition de fonctions");

// function compose(...functions) {
//   return function(value) {
//     return functions.reduceRight((acc, fn) => fn(acc), value);
//   };
// }

// function pipe(...functions) {
//   return function(value) {
//     return functions.reduce((acc, fn) => fn(acc), value);
//   };
// }

// Fonctions utilitaires pour la composition
const double = (x) => x * 2;
const square = (x) => x * x;
const addOne = (x) => x + 1;

try {
  // const composedFunction = compose(square, double, addOne);
  // const pipedFunction = pipe(addOne, double, square);

  // console.log('Compose (square ∘ double ∘ addOne)(3):');
  // console.log('= square(double(addOne(3))) = square(double(4)) = square(8) = 64');
  // console.log('Résultat:', composedFunction(3)); // 64

  // console.log('Pipe (addOne → double → square)(3):');
  // console.log('= square(double(addOne(3))) = square(double(4)) = square(8) = 64');
  // console.log('Résultat:', pipedFunction(3)); // 64

  console.log("⏳ Implémentez compose() et pipe()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// PATTERNS COURANTS
console.log("\n📋 PATTERNS AVEC LES FONCTIONS D'ORDRE SUPÉRIEUR:");
console.log("✅ Retry - Gestion de la résilience");
console.log("✅ Memoize - Cache pour optimiser les performances");
console.log("✅ Throttle - Limitation de fréquence d'exécution");
console.log("✅ Debounce - Retard d'exécution pour éviter les appels répétés");
console.log("✅ Curry - Transformation en fonctions à un paramètre");
console.log("✅ Compose/Pipe - Composition de transformations");

// QUESTIONS DE RÉFLEXION
console.log("\n❓ Questions:");
console.log("• Quand utiliser throttle vs debounce?");
console.log("• Quels sont les avantages du currying?");
console.log("• Comment choisir entre compose et pipe?");
console.log("• Quelles sont les implications mémoire du memoize?");
