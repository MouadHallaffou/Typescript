// ==============================
// Exercice 15: Immutabilité
// ==============================

console.log("🧊 Exercice 15: Immutabilité");
console.log("=============================");

console.log("\n📚 L'immutabilité permet:");
console.log("• Éviter les effets de bord indésirables");
console.log("• Faciliter le debugging et les tests");
console.log("• Améliorer la prévisibilité du code");
console.log("• Optimiser les performances avec le memoization");
console.log("• Faciliter la programmation concurrente");

// TODO 1: Immutabilité avec les primitives et objets
console.log("\n✅ Exercice 1: Bases de l'immutabilité");

// Primitives (naturellement immutables en JavaScript)
let primitiveExample = 42;
let anotherPrimitive = primitiveExample;
anotherPrimitive = 100;

console.log("🔢 Primitives:");
console.log("Original:", primitiveExample); // 42
console.log("Copie modifiée:", anotherPrimitive); // 100

// Objets (mutables par défaut)
const mutableObject = { name: "John", age: 30, skills: ["JS", "React"] };
const referenceToSame = mutableObject;
referenceToSame.age = 31;

console.log("\n🔗 Référence d'objet:");
console.log("Objet original:", mutableObject); // { name: 'John', age: 31, skills: ['JS', 'React'] }
console.log("Référence:", referenceToSame); // Même objet!

// TODO 2: Copie superficielle (shallow copy)
console.log("\n✅ Exercice 2: Copie superficielle");

// function shallowCopy(obj) {
//   if (Array.isArray(obj)) {
//     return [...obj];
//   }
//   if (obj && typeof obj === 'object') {
//     return { ...obj };
//   }
//   return obj;
// }

// function updatePersonAge(person, newAge) {
//   return {
//     ...person,
//     age: newAge,
//     lastUpdated: new Date().toISOString()
//   };
// }

// function addSkill(person, skill) {
//   return {
//     ...person,
//     skills: [...person.skills, skill]
//   };
// }

// function removeSkill(person, skillToRemove) {
//   return {
//     ...person,
//     skills: person.skills.filter(skill => skill !== skillToRemove)
//   };
// }

// Test de copie superficielle
console.log("\n🧪 Test copie superficielle:");
try {
  const originalPerson = {
    name: "Alice",
    age: 28,
    skills: ["JavaScript", "Python"],
    address: { city: "Paris", country: "France" },
  };

  // const updatedPerson = updatePersonAge(originalPerson, 29);
  // const skilledPerson = addSkill(updatedPerson, 'TypeScript');
  // const finalPerson = removeSkill(skilledPerson, 'Python');

  // console.log('👤 Original:', originalPerson);
  // console.log('🎂 Âge mis à jour:', updatedPerson);
  // console.log('🎯 Compétence ajoutée:', skilledPerson);
  // console.log('🗑️ Compétence supprimée:', finalPerson);

  // // Problème de la copie superficielle avec les objets imbriqués
  // const modifiedAddress = { ...originalPerson, address: { ...originalPerson.address, city: 'Lyon' } };
  // console.log('\n🏠 Adresse modifiée (copie profonde nécessaire):');
  // console.log('Original address:', originalPerson.address);
  // console.log('Modified address:', modifiedAddress.address);

  console.log("⏳ Implémentez les fonctions de copie superficielle");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 3: Copie profonde (deep copy)
console.log("\n✅ Exercice 3: Copie profonde");

// function deepCopy(obj) {
//   // Gestion des cas simples
//   if (obj === null || typeof obj !== 'object') {
//     return obj;
//   }

//   // Gestion des dates
//   if (obj instanceof Date) {
//     return new Date(obj.getTime());
//   }

//   // Gestion des tableaux
//   if (Array.isArray(obj)) {
//     return obj.map(item => deepCopy(item));
//   }

//   // Gestion des objets
//   const copiedObj = {};
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       copiedObj[key] = deepCopy(obj[key]);
//     }
//   }

//   return copiedObj;
// }

// function updateNestedProperty(obj, path, value) {
//   const keys = path.split('.');
//   const copy = deepCopy(obj);

//   let current = copy;
//   for (let i = 0; i < keys.length - 1; i++) {
//     current = current[keys[i]];
//   }
//   current[keys[keys.length - 1]] = value;

//   return copy;
// }

// function mergeObjects(...objects) {
//   const result = {};

//   objects.forEach(obj => {
//     Object.keys(obj).forEach(key => {
//       if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
//         result[key] = mergeObjects(result[key] || {}, obj[key]);
//       } else {
//         result[key] = deepCopy(obj[key]);
//       }
//     });
//   });

//   return result;
// }

// Test de copie profonde
console.log("\n🧪 Test copie profonde:");
try {
  const complexObject = {
    id: 1,
    user: {
      name: "Bob",
      profile: {
        bio: "Developer",
        social: {
          twitter: "@bob",
          linkedin: "bob-dev",
        },
      },
      preferences: {
        theme: "dark",
        notifications: true,
      },
    },
    projects: [
      { name: "Project A", status: "active" },
      { name: "Project B", status: "completed" },
    ],
    metadata: {
      created: new Date("2023-01-01"),
      tags: ["important", "work"],
    },
  };

  // const deepCopied = deepCopy(complexObject);
  // const updatedSocial = updateNestedProperty(complexObject, 'user.profile.social.twitter', '@bob_new');

  // // Modification de la copie profonde
  // deepCopied.user.name = 'Robert';
  // deepCopied.projects.push({ name: 'Project C', status: 'planned' });

  // console.log('🔍 Original object unchanged:', complexObject.user.name); // 'Bob'
  // console.log('📝 Deep copy modified:', deepCopied.user.name); // 'Robert'
  // console.log('📊 Original projects count:', complexObject.projects.length); // 2
  // console.log('📊 Copy projects count:', deepCopied.projects.length); // 3

  // console.log('\n🔗 Nested property update:');
  // console.log('Original twitter:', complexObject.user.profile.social.twitter); // '@bob'
  // console.log('Updated twitter:', updatedSocial.user.profile.social.twitter); // '@bob_new'

  // // Test de fusion d'objets
  // const baseConfig = { api: { url: 'https://api.example.com', timeout: 5000 }, features: { auth: true } };
  // const userConfig = { api: { timeout: 10000 }, features: { darkMode: true }, ui: { theme: 'blue' } };
  // const merged = mergeObjects(baseConfig, userConfig);

  // console.log('\n🔀 Merged configuration:');
  // console.log('API URL:', merged.api.url); // Conservé de baseConfig
  // console.log('API timeout:', merged.api.timeout); // Écrasé par userConfig
  // console.log('Features:', merged.features); // { auth: true, darkMode: true }

  console.log(
    "⏳ Implémentez deepCopy(), updateNestedProperty() et mergeObjects()"
  );
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 4: Structures de données immutables
console.log("\n✅ Exercice 4: Structures de données immutables");

// class ImmutableList {
//   constructor(items = []) {
//     this._items = Object.freeze([...items]);
//   }

//   get(index) {
//     return this._items[index];
//   }

//   size() {
//     return this._items.length;
//   }

//   add(item) {
//     return new ImmutableList([...this._items, item]);
//   }

//   remove(index) {
//     return new ImmutableList([
//       ...this._items.slice(0, index),
//       ...this._items.slice(index + 1)
//     ]);
//   }

//   update(index, item) {
//     return new ImmutableList([
//       ...this._items.slice(0, index),
//       item,
//       ...this._items.slice(index + 1)
//     ]);
//   }

//   map(fn) {
//     return new ImmutableList(this._items.map(fn));
//   }

//   filter(predicate) {
//     return new ImmutableList(this._items.filter(predicate));
//   }

//   reduce(fn, initial) {
//     return this._items.reduce(fn, initial);
//   }

//   toArray() {
//     return [...this._items];
//   }

//   toString() {
//     return `ImmutableList(${this._items.length}) [${this._items.join(', ')}]`;
//   }
// }

// class ImmutableMap {
//   constructor(obj = {}) {
//     this._data = Object.freeze({ ...obj });
//   }

//   get(key) {
//     return this._data[key];
//   }

//   has(key) {
//     return key in this._data;
//   }

//   set(key, value) {
//     return new ImmutableMap({
//       ...this._data,
//       [key]: value
//     });
//   }

//   delete(key) {
//     const { [key]: deleted, ...rest } = this._data;
//     return new ImmutableMap(rest);
//   }

//   merge(other) {
//     const otherData = other instanceof ImmutableMap ? other._data : other;
//     return new ImmutableMap({
//       ...this._data,
//       ...otherData
//     });
//   }

//   keys() {
//     return Object.keys(this._data);
//   }

//   values() {
//     return Object.values(this._data);
//   }

//   entries() {
//     return Object.entries(this._data);
//   }

//   map(fn) {
//     const result = {};
//     Object.entries(this._data).forEach(([key, value]) => {
//       result[key] = fn(value, key);
//     });
//     return new ImmutableMap(result);
//   }

//   toObject() {
//     return { ...this._data };
//   }

//   toString() {
//     return `ImmutableMap {${Object.entries(this._data).map(([k, v]) => `${k}: ${v}`).join(', ')}}`;
//   }
// }

// Test des structures immutables
console.log("\n🧪 Test structures immutables:");
try {
  // // Test ImmutableList
  // console.log('📋 Test ImmutableList:');
  // const list1 = new ImmutableList([1, 2, 3]);
  // const list2 = list1.add(4);
  // const list3 = list2.remove(1);
  // const list4 = list3.update(0, 10);
  // const list5 = list4.map(x => x * 2);

  // console.log('Original:', list1.toString());
  // console.log('After add(4):', list2.toString());
  // console.log('After remove(1):', list3.toString());
  // console.log('After update(0, 10):', list4.toString());
  // console.log('After map(x => x * 2):', list5.toString());

  // // Test ImmutableMap
  // console.log('\n🗺️ Test ImmutableMap:');
  // const map1 = new ImmutableMap({ name: 'John', age: 30 });
  // const map2 = map1.set('city', 'Paris');
  // const map3 = map2.set('age', 31);
  // const map4 = map3.delete('name');
  // const map5 = map4.merge({ country: 'France', language: 'French' });

  // console.log('Original:', map1.toString());
  // console.log('After set city:', map2.toString());
  // console.log('After update age:', map3.toString());
  // console.log('After delete name:', map4.toString());
  // console.log('After merge:', map5.toString());

  console.log("⏳ Implémentez ImmutableList et ImmutableMap");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 5: Immutabilité avec Proxy
console.log("\n✅ Exercice 5: Immutabilité avancée avec Proxy");

// function createImmutable(obj) {
//   const immutableCache = new WeakMap();

//   function makeImmutable(target) {
//     if (immutableCache.has(target)) {
//       return immutableCache.get(target);
//     }

//     const proxy = new Proxy(target, {
//       set() {
//         throw new Error('Cannot modify immutable object');
//       },

//       deleteProperty() {
//         throw new Error('Cannot delete property from immutable object');
//       },

//       get(target, prop) {
//         const value = target[prop];

//         if (value && typeof value === 'object') {
//           return makeImmutable(value);
//         }

//         return value;
//       }
//     });

//     immutableCache.set(target, proxy);
//     return proxy;
//   }

//   return makeImmutable(obj);
// }

// function produce(baseState, recipe) {
//   const draft = JSON.parse(JSON.stringify(baseState)); // Deep clone simple
//   recipe(draft);
//   return draft;
// }

// Test immutabilité avec Proxy
console.log("\n🧪 Test immutabilité avec Proxy:");
try {
  const mutableData = {
    user: {
      name: "Alice",
      profile: {
        bio: "Developer",
        skills: ["JS", "React"],
      },
    },
    settings: {
      theme: "dark",
      notifications: true,
    },
  };

  // const immutableData = createImmutable(mutableData);

  // console.log('📖 Lecture des données immutables:');
  // console.log('User name:', immutableData.user.name);
  // console.log('Skills:', immutableData.user.profile.skills);

  // try {
  //   immutableData.user.name = 'Bob'; // Devrait lever une erreur
  // } catch (error) {
  //   console.log('🛡️ Modification bloquée:', error.message);
  // }

  // try {
  //   immutableData.user.profile.skills.push('Vue'); // Devrait lever une erreur
  // } catch (error) {
  //   console.log('🛡️ Modification du tableau bloquée:', error.message);
  // }

  // // Test du pattern "producer"
  // console.log('\n🔄 Test pattern producer:');
  // const nextState = produce(mutableData, draft => {
  //   draft.user.name = 'Bob';
  //   draft.user.profile.skills.push('Vue');
  //   draft.settings.theme = 'light';
  // });

  // console.log('État original inchangé:', mutableData.user.name); // 'Alice'
  // console.log('Nouvel état:', nextState.user.name); // 'Bob'
  // console.log('Nouvelles skills:', nextState.user.profile.skills); // ['JS', 'React', 'Vue']

  console.log("⏳ Implémentez createImmutable() et produce()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 6: Performance et optimisations
console.log("\n✅ Exercice 6: Optimisations de performance");

// class OptimizedImmutableList {
//   constructor(items = [], root = null, path = []) {
//     this._items = items;
//     this._root = root || this;
//     this._path = path;
//     this._memoizedResults = new Map();
//   }

//   _getMemoKey(method, ...args) {
//     return `${method}:${JSON.stringify(args)}`;
//   }

//   _memoize(method, fn, ...args) {
//     const key = this._getMemoKey(method, ...args);
//     if (this._memoizedResults.has(key)) {
//       console.log(`📋 Cache hit for ${method}`);
//       return this._memoizedResults.get(key);
//     }
//     const result = fn();
//     this._memoizedResults.set(key, result);
//     return result;
//   }

//   add(item) {
//     return this._memoize('add', () => {
//       console.log('🔄 Computing add operation');
//       return new OptimizedImmutableList([...this._items, item], this._root);
//     }, item);
//   }

//   map(fn) {
//     return this._memoize('map', () => {
//       console.log('🔄 Computing map operation');
//       return new OptimizedImmutableList(this._items.map(fn), this._root);
//     }, fn.toString());
//   }

//   filter(predicate) {
//     return this._memoize('filter', () => {
//       console.log('🔄 Computing filter operation');
//       return new OptimizedImmutableList(this._items.filter(predicate), this._root);
//     }, predicate.toString());
//   }

//   // Lazy evaluation pour les chaînes d'opérations
//   lazy() {
//     return new LazyImmutableList(this._items);
//   }

//   toArray() {
//     return [...this._items];
//   }

//   size() {
//     return this._items.length;
//   }
// }

// class LazyImmutableList {
//   constructor(items, operations = []) {
//     this._items = items;
//     this._operations = operations;
//   }

//   map(fn) {
//     return new LazyImmutableList(this._items, [...this._operations, { type: 'map', fn }]);
//   }

//   filter(predicate) {
//     return new LazyImmutableList(this._items, [...this._operations, { type: 'filter', fn: predicate }]);
//   }

//   take(count) {
//     return new LazyImmutableList(this._items, [...this._operations, { type: 'take', count }]);
//   }

//   // Evaluation paresseuse
//   realize() {
//     console.log('🚀 Evaluating lazy operations...');
//     let result = this._items;

//     for (const operation of this._operations) {
//       switch (operation.type) {
//         case 'map':
//           result = result.map(operation.fn);
//           break;
//         case 'filter':
//           result = result.filter(operation.fn);
//           break;
//         case 'take':
//           result = result.slice(0, operation.count);
//           break;
//       }
//     }

//     return new OptimizedImmutableList(result);
//   }

//   toArray() {
//     return this.realize().toArray();
//   }
// }

// Test optimisations
console.log("\n🧪 Test optimisations de performance:");
try {
  // console.log('⚡ Test memoization:');
  // const optimizedList = new OptimizedImmutableList([1, 2, 3, 4, 5]);

  // // Premier appel - calcul
  // const doubled1 = optimizedList.map(x => x * 2);
  // // Deuxième appel identique - cache
  // const doubled2 = optimizedList.map(x => x * 2);

  // console.log('Résultat 1:', doubled1.toArray());
  // console.log('Résultat 2 (cached):', doubled2.toArray());

  // console.log('\n🦥 Test lazy evaluation:');
  // const lazyResult = optimizedList
  //   .lazy()
  //   .map(x => {
  //     console.log(`  Mapping ${x}`);
  //     return x * 2;
  //   })
  //   .filter(x => {
  //     console.log(`  Filtering ${x}`);
  //     return x > 4;
  //   })
  //   .take(2);

  // console.log('Lazy chain created (no computation yet)');
  // console.log('Realizing result...');
  // const finalResult = lazyResult.toArray();
  // console.log('Final result:', finalResult);

  console.log("⏳ Implémentez les optimisations de performance");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// BONUS: Immutabilité avec des bibliothèques
console.log("\n🏆 BONUS: Bibliothèques d'immutabilité");

console.log("\n📚 Bibliothèques recommandées:");
console.log("• Immutable.js - Structures de données persistantes");
console.log("• Immer - API simple avec proxies");
console.log("• Ramda - Programmation fonctionnelle");
console.log("• Lodash/FP - Version fonctionnelle de Lodash");

console.log("\n💡 Exemple avec Immer (conceptuel):");
console.log(`
import produce from 'immer';

const nextState = produce(currentState, draft => {
  draft.user.name = 'New Name';
  draft.items.push(newItem);
});
`);

console.log("\n💡 Exemple avec Immutable.js (conceptuel):");
console.log(`
import { Map, List } from 'immutable';

const state = Map({
  users: List([
    Map({ name: 'John', age: 30 })
  ])
});

const newState = state.updateIn(['users', 0, 'age'], age => age + 1);
`);

// Utilitaires d'immutabilité personnalisés
console.log("\n🛠️ Utilitaires personnalisés:");

// const immutableHelpers = {
//   setIn: (obj, path, value) => {
//     const keys = Array.isArray(path) ? path : path.split('.');
//     if (keys.length === 1) {
//       return { ...obj, [keys[0]]: value };
//     }
//     const [head, ...tail] = keys;
//     return {
//       ...obj,
//       [head]: immutableHelpers.setIn(obj[head] || {}, tail, value)
//     };
//   },

//   updateIn: (obj, path, updater) => {
//     const keys = Array.isArray(path) ? path : path.split('.');
//     if (keys.length === 1) {
//       return { ...obj, [keys[0]]: updater(obj[keys[0]]) };
//     }
//     const [head, ...tail] = keys;
//     return {
//       ...obj,
//       [head]: immutableHelpers.updateIn(obj[head] || {}, tail, updater)
//     };
//   },

//   deleteIn: (obj, path) => {
//     const keys = Array.isArray(path) ? path : path.split('.');
//     if (keys.length === 1) {
//       const { [keys[0]]: deleted, ...rest } = obj;
//       return rest;
//     }
//     const [head, ...tail] = keys;
//     return {
//       ...obj,
//       [head]: immutableHelpers.deleteIn(obj[head] || {}, tail)
//     };
//   }
// };

try {
  // const state = {
  //   user: {
  //     profile: {
  //       name: 'John',
  //       settings: {
  //         theme: 'dark',
  //         notifications: true
  //       }
  //     }
  //   }
  // };

  // console.log('\n🔧 Test utilitaires personnalisés:');
  // const newState1 = immutableHelpers.setIn(state, 'user.profile.name', 'Jane');
  // const newState2 = immutableHelpers.updateIn(state, 'user.profile.settings.theme', theme => 'light');
  // const newState3 = immutableHelpers.deleteIn(state, 'user.profile.settings.notifications');

  // console.log('Original name:', state.user.profile.name);
  // console.log('Updated name:', newState1.user.profile.name);
  // console.log('Updated theme:', newState2.user.profile.settings.theme);
  // console.log('After deletion:', newState3.user.profile.settings);

  console.log("⏳ Explorez les utilitaires d'immutabilité");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// PATTERNS COURANTS
console.log("\n📋 PATTERNS D'IMMUTABILITÉ:");
console.log("✅ Spread operator - Copie superficielle simple");
console.log("✅ Deep clone - Copie profonde récursive");
console.log("✅ Structural sharing - Partage de structure pour l'efficacité");
console.log("✅ Persistent data structures - Structures persistantes");
console.log("✅ Copy-on-write - Copie à la modification");
console.log("✅ Lazy evaluation - Évaluation paresseuse");
console.log("✅ Memoization - Cache des résultats");

// QUESTIONS DE RÉFLEXION
console.log("\n❓ Questions:");
console.log("• Quand l'immutabilité est-elle vraiment nécessaire?");
console.log("• Comment équilibrer immutabilité et performance?");
console.log("• Quelles sont les alternatives aux deep clones coûteux?");
console.log("• Comment intégrer l'immutabilité dans une équipe?");
