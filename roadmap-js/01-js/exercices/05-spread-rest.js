// ===============================
// Exercice 5: Spread et Rest
// ===============================

console.log("🌟 Exercice 5: Opérateurs Spread et Rest");
console.log("==========================================");

console.log("\n📚 Spread (...) permet:");
console.log("• Étendre les éléments d'un tableau ou objet");
console.log("• Cloner superficiellement");
console.log("• Passer des tableaux comme arguments");

console.log("\n📚 Rest (...) permet:");
console.log("• Collecter les arguments restants");
console.log("• Destructuring avec reste");
console.log("• Fonctions avec nombre variable d'arguments");

// TODO 1: Spread avec les tableaux
console.log("\n✅ Exercice 1: Spread avec les tableaux");

const fruits = ["pomme", "banane"];
const legumes = ["carotte", "brocoli"];
const epices = ["poivre", "sel"];

// Concaténation avec spread
// const tousLesIngredients = [...fruits, ...legumes, ...epices];
// console.log('🥗 Tous les ingrédients:', tousLesIngredients);

// Clonage de tableau
// const fruitsCopie = [...fruits];
// fruitsCopie.push('orange');
// console.log('🍎 Fruits originaux:', fruits);
// console.log('🍊 Fruits copiés:', fruitsCopie);

// Insertion d'éléments au milieu
// const nombres = [1, 2, 5, 6];
// const nombresCompletes = [0, ...nombres.slice(0, 2), 3, 4, ...nombres.slice(2)];
// console.log('🔢 Nombres avec insertion:', nombresCompletes);

console.log("⏳ Implémentez les exemples de spread avec tableaux");

// TODO 2: Spread avec les objets
console.log("\n✅ Exercice 2: Spread avec les objets");

const utilisateurBase = {
  nom: "Jean",
  age: 30,
  ville: "Paris",
};

const preferences = {
  theme: "sombre",
  langue: "fr",
  notifications: true,
};

// Fusion d'objets
// const utilisateurComplet = {
//   ...utilisateurBase,
//   ...preferences,
//   dateInscription: new Date().toISOString()
// };
// console.log('👤 Utilisateur complet:', utilisateurComplet);

// Écrasement de propriétés
// const utilisateurModifie = {
//   ...utilisateurBase,
//   age: 31,
//   ville: 'Lyon',
//   pays: 'France'
// };
// console.log('📝 Utilisateur modifié:', utilisateurModifie);

// Clonage d'objet
// const utilisateurClone = { ...utilisateurBase };
// utilisateurClone.age = 25;
// console.log('👤 Original:', utilisateurBase);
// console.log('👥 Clone:', utilisateurClone);

console.log("⏳ Implémentez les exemples de spread avec objets");

// TODO 3: Rest dans les paramètres de fonction
console.log("\n✅ Exercice 3: Rest parameters");

// function calculerSomme(...nombres) {
//   console.log('🔢 Nombres reçus:', nombres);
//   return nombres.reduce((somme, nombre) => somme + nombre, 0);
// }

// function creerMessage(salutation, ...noms) {
//   if (noms.length === 0) {
//     return `${salutation} tout le monde!`;
//   } else if (noms.length === 1) {
//     return `${salutation} ${noms[0]}!`;
//   } else {
//     const dernierNom = noms.pop();
//     return `${salutation} ${noms.join(', ')} et ${dernierNom}!`;
//   }
// }

// function logger(niveau, message, ...details) {
//   const timestamp = new Date().toISOString();
//   console.log(`[${timestamp}] ${niveau}: ${message}`);
//   if (details.length > 0) {
//     console.log('📋 Détails:', details);
//   }
// }

// Tests des fonctions rest
console.log("\n🧪 Test rest parameters:");
try {
  // console.log('Addition:', calculerSomme(1, 2, 3, 4, 5)); // 15
  // console.log('Addition vide:', calculerSomme()); // 0

  // console.log(creerMessage('Bonjour')); // "Bonjour tout le monde!"
  // console.log(creerMessage('Salut', 'Alice')); // "Salut Alice!"
  // console.log(creerMessage('Hello', 'Bob', 'Charlie', 'David')); // "Hello Bob, Charlie et David!"

  // logger('INFO', 'Application démarrée');
  // logger('ERROR', 'Erreur de connexion', 'host: localhost', 'port: 3000', 'timeout: 5000');

  console.log("⏳ Implémentez les fonctions avec rest parameters");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 4: Rest avec destructuring
console.log("\n✅ Exercice 4: Rest avec destructuring");

const equipe = ["Alice", "Bob", "Charlie", "David", "Eva"];
const scores = [95, 87, 92, 78, 85, 90, 88];

// Destructuring avec rest dans les tableaux
// const [capitaine, viceCaptaine, ...membres] = equipe;
// console.log('👑 Capitaine:', capitaine);
// console.log('🥈 Vice-capitaine:', viceCaptaine);
// console.log('👥 Autres membres:', membres);

// const [meilleurScore, deuxiemeScore, ...autresScores] = scores;
// console.log('🥇 Meilleur score:', meilleurScore);
// console.log('🥈 Deuxième score:', deuxiemeScore);
// console.log('📊 Autres scores:', autresScores);

// Destructuring avec rest dans les objets
const configuration = {
  host: "localhost",
  port: 3000,
  ssl: true,
  timeout: 5000,
  retries: 3,
  debug: true,
  cache: false,
};

// const { host, port, ...optionsAvancees } = configuration;
// console.log('🌐 Connexion:', { host, port });
// console.log('⚙️ Options avancées:', optionsAvancees);

console.log("⏳ Implémentez le destructuring avec rest");

// TODO 5: Spread pour les appels de fonction
console.log("\n✅ Exercice 5: Spread dans les appels de fonction");

// Fonction qui attend plusieurs paramètres séparés
function calculerMoyenne(a, b, c, d, e) {
  const valeurs = [a, b, c, d, e].filter((val) => val !== undefined);
  const somme = valeurs.reduce((acc, val) => acc + val, 0);
  return somme / valeurs.length;
}

// Math.max avec spread
const nombresAleatoires = [23, 67, 12, 89, 45, 34, 78];

// Tests spread dans appels
console.log("\n🧪 Test spread dans les appels:");
try {
  // const notesExamen = [85, 92, 78, 96, 88];
  // const moyenneExamen = calculerMoyenne(...notesExamen);
  // console.log('📊 Moyenne examen:', moyenneExamen.toFixed(2));

  // const maximum = Math.max(...nombresAleatoires);
  // const minimum = Math.min(...nombresAleatoires);
  // console.log('📈 Maximum:', maximum);
  // console.log('📉 Minimum:', minimum);

  // // Convertir string en tableau de caractères
  // const mot = 'JavaScript';
  // const caracteres = [...mot];
  // console.log('🔤 Caractères:', caracteres);

  // // Spread avec Date
  // const dateComponents = [2023, 11, 25, 14, 30, 0]; // Mois 11 = Décembre
  // const maDate = new Date(...dateComponents);
  // console.log('📅 Date créée:', maDate.toLocaleDateString());

  console.log("⏳ Implémentez spread dans les appels de fonction");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 6: Cas d'usage avancés
console.log("\n✅ Exercice 6: Cas d'usage avancés");

// Fonction utilitaire pour fusionner des configurations
// function fusionnerConfigs(configBase, ...configsSupplementaires) {
//   return configsSupplementaires.reduce((config, supplement) => {
//     return { ...config, ...supplement };
//   }, configBase);
// }

// Fonction pour créer un tableau sans doublons
// function supprimerDoublons(...tableaux) {
//   const tousElements = [].concat(...tableaux);
//   return [...new Set(tousElements)];
// }

// Fonction pour créer un middleware pattern
// function appliquerMiddlewares(donneeInitiale, ...middlewares) {
//   return middlewares.reduce((donnee, middleware) => {
//     return middleware(donnee);
//   }, donneeInitiale);
// }

// Tests avancés
console.log("\n🧪 Test cas d'usage avancés:");
try {
  // // Configuration progressive
  // const configDev = { debug: true, host: 'localhost' };
  // const configProd = { debug: false, host: 'prod.example.com', ssl: true };
  // const configCustom = { port: 8080, timeout: 10000 };

  // const configFinale = fusionnerConfigs(configDev, configProd, configCustom);
  // console.log('⚙️ Config finale:', configFinale);

  // // Suppression de doublons
  // const liste1 = [1, 2, 3, 4];
  // const liste2 = [3, 4, 5, 6];
  // const liste3 = [5, 6, 7, 8];
  // const listeSansDoublons = supprimerDoublons(liste1, liste2, liste3);
  // console.log('🔢 Sans doublons:', listeSansDoublons);

  // // Pattern middleware
  // const middlewareLog = (data) => {
  //   console.log('📝 Log:', data);
  //   return data;
  // };

  // const middlewareUpperCase = (data) => {
  //   return typeof data === 'string' ? data.toUpperCase() : data;
  // };

  // const middlewareAddPrefix = (data) => {
  //   return typeof data === 'string' ? `[PROCESSED] ${data}` : data;
  // };

  // const resultat = appliquerMiddlewares(
  //   'hello world',
  //   middlewareLog,
  //   middlewareUpperCase,
  //   middlewareAddPrefix
  // );
  // console.log('🔄 Résultat final:', resultat);

  console.log("⏳ Implémentez les cas d'usage avancés");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 7: Performance et bonnes pratiques
console.log("\n✅ Exercice 7: Performance et bonnes pratiques");

console.log("\n⚡ Bonnes pratiques:");

// ✅ BON: Spread pour clonage superficiel
const objetOriginal = { a: 1, b: 2 };
// const objetClone = { ...objetOriginal };

// ❌ ATTENTION: Spread ne fait qu'une copie superficielle
const objetAvecTableau = { liste: [1, 2, 3], config: { debug: true } };
// const copieSuperficielle = { ...objetAvecTableau };
// copieSuperficielle.liste.push(4); // Modifie aussi l'original!

console.log("💡 Spread = copie superficielle uniquement");

// ✅ BON: Rest pour fonctions flexibles
// function apiCall(endpoint, options = {}, ...middleware) {
//   console.log(`Appel vers ${endpoint} avec options:`, options);
//   console.log(`Middlewares appliqués: ${middleware.length}`);
// }

// ✅ BON: Combinaison spread + destructuring
const donnees = {
  utilisateur: "Alice",
  role: "admin",
  permissions: ["read", "write"],
  config: { theme: "dark" },
};

// const { utilisateur, ...metadonnees } = donnees;
// const nouvelUtilisateur = {
//   ...metadonnees,
//   utilisateur: 'Bob',
//   derniereMiseAJour: Date.now()
// };

console.log("\n📊 Comparaison de performance:");

// Performance avec grands tableaux
const grandTableau = Array.from({ length: 100000 }, (_, i) => i);

console.time("Clonage avec spread");
// const cloneSpread = [...grandTableau];
console.timeEnd("Clonage avec spread");

console.time("Clonage avec slice");
// const cloneSlice = grandTableau.slice();
console.timeEnd("Clonage avec slice");

console.time("Clonage avec Array.from");
// const cloneArrayFrom = Array.from(grandTableau);
console.timeEnd("Clonage avec Array.from");

// PATTERNS COURANTS
console.log("\n📋 PATTERNS AVEC SPREAD/REST:");
console.log("✅ Clonage superficiel - {...obj} ou [...arr]");
console.log("✅ Fusion d'objets - {...obj1, ...obj2}");
console.log("✅ Ajout d'éléments - [...arr, newItem]");
console.log("✅ Fonctions variadic - function(...args)");
console.log("✅ Destructuring avec reste - const {a, ...rest} = obj");
console.log("✅ Conversion string→array - [...string]");
console.log("✅ Arguments de fonction - fn(...array)");

// PIÈGES À ÉVITER
console.log("\n⚠️ PIÈGES À ÉVITER:");
console.log("❌ Copie profonde - spread ne copie que le premier niveau");
console.log("❌ Performance - spread peut être lent sur de gros objets");
console.log("❌ Ordre des propriétés - les propriétés de droite écrasent");
console.log(
  "❌ Types non-enumérables - spread ignore les propriétés non-enumérables"
);

// QUESTIONS DE RÉFLEXION
console.log("\n❓ Questions:");
console.log("• Quelle est la différence entre spread et Object.assign()?");
console.log("• Quand utiliser rest vs arguments?");
console.log("• Comment faire une copie profonde avec spread?");
console.log("• Quel est l'impact performance du spread sur de gros objets?");
