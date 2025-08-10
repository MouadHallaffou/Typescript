// =====================================
// Exercice 14: Composition de fonctions
// =====================================

console.log("🔗 Exercice 14: Composition de fonctions");
console.log("=========================================");

console.log("\n📚 La composition de fonctions permet:");
console.log(
  "• Combiner des fonctions simples pour créer des fonctions complexes"
);
console.log("• Créer du code réutilisable et modulaire");
console.log("• Appliquer le principe de responsabilité unique");
console.log("• Faciliter les tests et la maintenance");

// TODO 1: Composition basique avec compose et pipe
console.log("\n✅ Exercice 1: Compose et Pipe");

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
const add = (x) => (y) => x + y;
const multiply = (x) => (y) => x * y;
const square = (x) => x * x;
const double = (x) => x * 2;
const addOne = (x) => x + 1;
const toString = (x) => x.toString();
const toUpperCase = (str) => str.toUpperCase();
const split = (separator) => (str) => str.split(separator);
const join = (separator) => (arr) => arr.join(separator);
const filter = (predicate) => (arr) => arr.filter(predicate);
const map = (transform) => (arr) => arr.map(transform);

// Test de compose et pipe
console.log("\n🧪 Test compose et pipe:");
try {
  // Composition mathématique: square(double(addOne(x)))
  // const mathCompose = compose(square, double, addOne);
  // const mathPipe = pipe(addOne, double, square);

  // console.log('Compose (square ∘ double ∘ addOne)(3):');
  // console.log('= square(double(addOne(3))) = square(double(4)) = square(8) = 64');
  // console.log('Résultat:', mathCompose(3)); // 64

  // console.log('\nPipe (addOne → double → square)(3):');
  // console.log('= square(double(addOne(3))) = square(double(4)) = square(8) = 64');
  // console.log('Résultat:', mathPipe(3)); // 64

  // // Composition de traitement de chaînes
  // const processText = pipe(
  //   split(' '),
  //   map(toUpperCase),
  //   filter(word => word.length > 2),
  //   join('-')
  // );

  // console.log('\nTraitement de texte avec pipe:');
  // const text = 'hello world from javascript';
  // console.log('Texte original:', text);
  // console.log('Résultat:', processText(text)); // "HELLO-WORLD-FROM-JAVASCRIPT"

  console.log("⏳ Implémentez compose() et pipe()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 2: Composition avec fonctions async
console.log("\n✅ Exercice 2: Composition asynchrone");

// function asyncCompose(...functions) {
//   return async function(value) {
//     let result = value;
//     for (let i = functions.length - 1; i >= 0; i--) {
//       result = await functions[i](result);
//     }
//     return result;
//   };
// }

// function asyncPipe(...functions) {
//   return async function(value) {
//     let result = value;
//     for (const fn of functions) {
//       result = await fn(result);
//     }
//     return result;
//   };
// }

// Fonctions async pour les tests
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const asyncDouble = async (x) => {
  await delay(100);
  console.log(`🔢 Double: ${x} → ${x * 2}`);
  return x * 2;
};

const asyncSquare = async (x) => {
  await delay(100);
  console.log(`📐 Square: ${x} → ${x * x}`);
  return x * x;
};

const asyncAddTen = async (x) => {
  await delay(100);
  console.log(`➕ Add 10: ${x} → ${x + 10}`);
  return x + 10;
};

const fetchUserData = async (userId) => {
  await delay(200);
  console.log(`👤 Fetching user ${userId}...`);
  return {
    id: userId,
    name: `User${userId}`,
    email: `user${userId}@example.com`,
  };
};

const enrichUserData = async (user) => {
  await delay(150);
  console.log(`🔍 Enriching user ${user.id}...`);
  return {
    ...user,
    role: "user",
    active: true,
    lastLogin: new Date().toISOString(),
  };
};

const validateUser = async (user) => {
  await delay(100);
  console.log(`✅ Validating user ${user.id}...`);
  if (!user.email.includes("@")) {
    throw new Error("Invalid email");
  }
  return { ...user, validated: true };
};

// Test composition async
console.log("\n🧪 Test composition asynchrone:");
try {
  // // Composition mathématique async
  // const asyncMathPipeline = asyncPipe(asyncDouble, asyncSquare, asyncAddTen);

  // asyncMathPipeline(3)
  //   .then(result => {
  //     console.log('🎯 Résultat final pipeline math:', result); // (3*2)^2 + 10 = 46
  //   });

  // // Pipeline de traitement utilisateur
  // const userProcessingPipeline = asyncPipe(
  //   fetchUserData,
  //   enrichUserData,
  //   validateUser
  // );

  // setTimeout(() => {
  //   console.log('\n👥 Test pipeline utilisateur:');
  //   userProcessingPipeline(123)
  //     .then(result => {
  //       console.log('🎉 Utilisateur traité:', result);
  //     })
  //     .catch(error => {
  //       console.log('❌ Erreur pipeline:', error.message);
  //     });
  // }, 1000);

  console.log("⏳ Implémentez asyncCompose() et asyncPipe()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 3: Composition avec gestion d'erreurs
console.log("\n✅ Exercice 3: Composition avec gestion d'erreurs");

// function safeCompose(...functions) {
//   return async function(value) {
//     let result = value;
//     const errors = [];

//     for (let i = functions.length - 1; i >= 0; i--) {
//       try {
//         result = await functions[i](result);
//       } catch (error) {
//         errors.push({
//           function: functions[i].name || `Function ${functions.length - i}`,
//           error: error.message,
//           input: result
//         });
//         // Continue avec la valeur précédente ou une valeur par défaut
//         console.log(`⚠️ Erreur dans ${functions[i].name}: ${error.message}`);
//       }
//     }

//     return { result, errors };
//   };
// }

// function resilientPipe(...functions) {
//   return async function(value) {
//     let result = value;
//     const executionLog = [];

//     for (let i = 0; i < functions.length; i++) {
//       const startTime = Date.now();
//       try {
//         const newResult = await functions[i](result);
//         const endTime = Date.now();

//         executionLog.push({
//           function: functions[i].name || `Function ${i + 1}`,
//           status: 'success',
//           input: result,
//           output: newResult,
//           duration: endTime - startTime
//         });

//         result = newResult;
//       } catch (error) {
//         const endTime = Date.now();

//         executionLog.push({
//           function: functions[i].name || `Function ${i + 1}`,
//           status: 'error',
//           input: result,
//           error: error.message,
//           duration: endTime - startTime
//         });

//         console.log(`❌ Arrêt du pipeline à l'étape ${i + 1}: ${error.message}`);
//         break;
//       }
//     }

//     return { result, log: executionLog };
//   };
// }

// Fonctions qui peuvent échouer
const riskyDouble = async (x) => {
  await delay(50);
  if (x > 10) {
    throw new Error("Nombre trop grand pour doubler");
  }
  return x * 2;
};

const riskySquare = async (x) => {
  await delay(50);
  if (x < 0) {
    throw new Error("Impossible de calculer le carré d'un nombre négatif");
  }
  return x * x;
};

// Test composition avec gestion d'erreurs
console.log("\n🧪 Test composition avec gestion d'erreurs:");
try {
  // const resilientMathPipeline = resilientPipe(riskyDouble, riskySquare, asyncAddTen);

  // // Test avec valeur normale
  // console.log('Test 1: Valeur normale (5)');
  // resilientMathPipeline(5)
  //   .then(result => {
  //     console.log('Résultat:', result.result);
  //     console.log('Log d\'exécution:', result.log);
  //   });

  // // Test avec valeur qui cause une erreur
  // setTimeout(() => {
  //   console.log('\nTest 2: Valeur qui cause une erreur (15)');
  //   resilientMathPipeline(15)
  //     .then(result => {
  //       console.log('Résultat final:', result.result);
  //       console.log('Erreurs détectées:', result.log.filter(entry => entry.status === 'error'));
  //     });
  // }, 500);

  console.log("⏳ Implémentez safeCompose() et resilientPipe()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 4: Composition avec transformations de données
console.log("\n✅ Exercice 4: Transformations de données complexes");

// const transform = {
//   // Transformations d'objets
//   pick: (keys) => (obj) => {
//     const result = {};
//     keys.forEach(key => {
//       if (key in obj) result[key] = obj[key];
//     });
//     return result;
//   },

//   omit: (keys) => (obj) => {
//     const result = { ...obj };
//     keys.forEach(key => delete result[key]);
//     return result;
//   },

//   rename: (mapping) => (obj) => {
//     const result = { ...obj };
//     Object.entries(mapping).forEach(([oldKey, newKey]) => {
//       if (oldKey in result) {
//         result[newKey] = result[oldKey];
//         delete result[oldKey];
//       }
//     });
//     return result;
//   },

//   addField: (field, value) => (obj) => ({
//     ...obj,
//     [field]: typeof value === 'function' ? value(obj) : value
//   }),

//   // Transformations de tableaux
//   groupBy: (keyFn) => (arr) => {
//     return arr.reduce((groups, item) => {
//       const key = keyFn(item);
//       groups[key] = groups[key] || [];
//       groups[key].push(item);
//       return groups;
//     }, {});
//   },

//   sortBy: (keyFn, direction = 'asc') => (arr) => {
//     return [...arr].sort((a, b) => {
//       const aVal = keyFn(a);
//       const bVal = keyFn(b);
//       const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
//       return direction === 'asc' ? comparison : -comparison;
//     });
//   },

//   // Transformations de chaînes
//   slugify: (str) => str
//     .toLowerCase()
//     .replace(/[^a-z0-9\s-]/g, '')
//     .replace(/\s+/g, '-')
//     .replace(/-+/g, '-')
//     .trim('-'),

//   // Validations
//   validate: (schema) => (obj) => {
//     const errors = [];
//     Object.entries(schema).forEach(([field, rules]) => {
//       const value = obj[field];
//       rules.forEach(rule => {
//         try {
//           rule(value, field);
//         } catch (error) {
//           errors.push({ field, message: error.message });
//         }
//       });
//     });
//     if (errors.length > 0) {
//       throw new Error(`Validation failed: ${errors.map(e => `${e.field}: ${e.message}`).join(', ')}`);
//     }
//     return obj;
//   }
// };

// Données de test
const rawUserData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email_address: "john.doe@example.com",
    age: 30,
    department: "Engineering",
    salary: 75000,
    joining_date: "2020-01-15",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email_address: "jane.smith@example.com",
    age: 28,
    department: "Marketing",
    salary: 65000,
    joining_date: "2021-03-10",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    email_address: "bob.johnson@example.com",
    age: 35,
    department: "Engineering",
    salary: 85000,
    joining_date: "2019-07-22",
  },
];

// Test transformations complexes
console.log("\n🧪 Test transformations de données:");
try {
  // Pipeline de transformation d'utilisateurs
  // const userTransformPipeline = pipe(
  //   // Nettoyer et renommer les champs
  //   map(transform.rename({ email_address: 'email', joining_date: 'joinDate' })),
  //   // Ajouter des champs calculés
  //   map(transform.addField('fullName', user => `${user.firstName} ${user.lastName}`)),
  //   map(transform.addField('experience', user => new Date().getFullYear() - new Date(user.joinDate).getFullYear())),
  //   // Supprimer les champs non nécessaires
  //   map(transform.omit(['firstName', 'lastName'])),
  //   // Trier par salaire
  //   transform.sortBy(user => user.salary, 'desc'),
  //   // Grouper par département
  //   transform.groupBy(user => user.department)
  // );

  // console.log('🔄 Transformation des données utilisateurs...');
  // const transformedData = userTransformPipeline(rawUserData);
  // console.log('📊 Données transformées:', JSON.stringify(transformedData, null, 2));

  // // Pipeline de création de profil public
  // const publicProfilePipeline = pipe(
  //   transform.pick(['id', 'fullName', 'department']),
  //   transform.addField('profileSlug', user => transform.slugify(user.fullName)),
  //   transform.addField('publicId', user => `pub_${user.id}`),
  //   transform.omit(['id'])
  // );

  // console.log('\n👥 Profils publics:');
  // const publicProfiles = rawUserData
  //   .map(transform.rename({ email_address: 'email' }))
  //   .map(transform.addField('fullName', user => `${user.firstName} ${user.lastName}`))
  //   .map(publicProfilePipeline);

  // console.log(JSON.stringify(publicProfiles, null, 2));

  console.log("⏳ Implémentez les transformations de données");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 5: Composition avec memoization
console.log("\n✅ Exercice 5: Composition avec memoization");

// function memoizeComposition(composedFunction, keyGenerator = JSON.stringify) {
//   const cache = new Map();

//   return function(...args) {
//     const key = keyGenerator(args);

//     if (cache.has(key)) {
//       console.log(`📋 Cache hit pour: ${key}`);
//       return cache.get(key);
//     }

//     console.log(`🔄 Calcul pour: ${key}`);
//     const result = composedFunction(...args);
//     cache.set(key, result);
//     return result;
//   };
// }

// Fonctions coûteuses pour tester la memoization
const expensiveCalculation = (n) => {
  console.log(`💻 Calcul coûteux pour ${n}...`);
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += Math.sqrt(n * i);
  }
  return result;
};

const formatNumber = (n) => {
  console.log(`🔢 Formatage du nombre ${n}...`);
  return n.toLocaleString("fr-FR", { maximumFractionDigits: 2 });
};

// Test memoization
console.log("\n🧪 Test composition avec memoization:");
try {
  // const expensivePipeline = pipe(
  //   x => x * 2,
  //   expensiveCalculation,
  //   formatNumber
  // );

  // const memoizedPipeline = memoizeComposition(expensivePipeline);

  // console.log('Premier appel (5):');
  // console.time('Premier appel');
  // const result1 = memoizedPipeline(5);
  // console.timeEnd('Premier appel');
  // console.log('Résultat 1:', result1);

  // console.log('\nDeuxième appel (5) - devrait utiliser le cache:');
  // console.time('Deuxième appel');
  // const result2 = memoizedPipeline(5);
  // console.timeEnd('Deuxième appel');
  // console.log('Résultat 2:', result2);

  // console.log('\nTroisième appel (7) - nouveau calcul:');
  // console.time('Troisième appel');
  // const result3 = memoizedPipeline(7);
  // console.timeEnd('Troisième appel');
  // console.log('Résultat 3:', result3);

  console.log("⏳ Implémentez la memoization de composition");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// BONUS: Composition fonctionnelle avancée
console.log("\n🏆 BONUS: Patterns avancés de composition");

// // Condition dans la composition
// const when = (predicate, fn) => (value) => predicate(value) ? fn(value) : value;
// const unless = (predicate, fn) => (value) => !predicate(value) ? fn(value) : value;

// // Composition parallèle
// const parallel = (...functions) => async (value) => {
//   const results = await Promise.all(functions.map(fn => fn(value)));
//   return results;
// };

// // Composition avec options
// const optional = (fn, defaultValue = null) => (value) => {
//   try {
//     return fn(value);
//   } catch (error) {
//     console.log(`⚠️ Fonction optionnelle échouée, retour de la valeur par défaut`);
//     return defaultValue;
//   }
// };

// // Tap pour debugging
// const tap = (fn) => (value) => {
//   fn(value);
//   return value;
// };

console.log("\n🧪 Test patterns avancés:");
try {
  // const advancedPipeline = pipe(
  //   tap(x => console.log(`🔍 Debug: input = ${x}`)),
  //   x => x * 2,
  //   when(x => x > 10, x => x + 100),
  //   tap(x => console.log(`🔍 Debug: after condition = ${x}`)),
  //   unless(x => x < 0, x => Math.sqrt(x)),
  //   optional(x => x.toFixed(2), 'N/A')
  // );

  // console.log('Test avec 3:', advancedPipeline(3));
  // console.log('Test avec 8:', advancedPipeline(8));

  console.log("⏳ Explorez les patterns avancés de composition");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// PATTERNS COURANTS
console.log("\n📋 PATTERNS DE COMPOSITION:");
console.log("✅ Compose/Pipe - Composition de base");
console.log("✅ Async composition - Gestion de l'asynchrone");
console.log("✅ Error handling - Composition robuste");
console.log("✅ Data transformation - Pipelines de données");
console.log("✅ Memoization - Optimisation des performances");
console.log("✅ Conditional composition - Logique conditionnelle");
console.log("✅ Parallel composition - Exécution parallèle");

// QUESTIONS DE RÉFLEXION
console.log("\n❓ Questions:");
console.log("• Quand préférer compose vs pipe?");
console.log("• Comment déboguer une composition complexe?");
console.log("• Quels sont les impacts performance de la composition?");
console.log("• Comment tester des fonctions composées?");
