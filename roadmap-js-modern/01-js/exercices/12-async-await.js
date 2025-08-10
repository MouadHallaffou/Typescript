// ===============================
// Exercice 12: Async/Await
// ===============================

console.log("⚡ Exercice 12: Async/Await");
console.log("===========================");

console.log("\n📚 Async/Await permet:");
console.log("• Écrire du code asynchrone qui ressemble au code synchrone");
console.log("• Remplacer .then() par await");
console.log("• Gérer les erreurs avec try/catch");
console.log("• Améliorer la lisibilité du code asynchrone");

// Fonctions utilitaires pour les exemples
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function simulateApiCall(endpoint, delayMs = 1000, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`Erreur API sur ${endpoint}`));
      } else {
        resolve({
          endpoint,
          status: 200,
          data: `Données de ${endpoint}`,
          timestamp: new Date().toISOString(),
        });
      }
    }, delayMs);
  });
}

// TODO 1: Conversion Promise vers Async/Await
console.log("\n✅ Exercice 1: Conversion Promise → Async/Await");

// Version avec Promises (à convertir)
function fetchUserDataPromises(userId) {
  console.log("🔄 Version Promises...");
  return simulateApiCall(`/users/${userId}`, 500)
    .then((userResponse) => {
      console.log("👤 Utilisateur récupéré");
      return simulateApiCall(`/users/${userId}/profile`, 300);
    })
    .then((profileResponse) => {
      console.log("📋 Profil récupéré");
      return simulateApiCall(`/users/${userId}/posts`, 700);
    })
    .then((postsResponse) => {
      console.log("📝 Posts récupérés");
      return {
        user: "User data",
        profile: "Profile data",
        posts: "Posts data",
      };
    })
    .catch((error) => {
      console.log("❌ Erreur Promises:", error.message);
      throw error;
    });
}

// Version async/await
// async function fetchUserDataAsync(userId) {
//   try {
//     console.log('⚡ Version Async/Await...');

//     console.log('🔄 Récupération utilisateur...');
//     const userResponse = await simulateApiCall(`/users/${userId}`, 500);
//     console.log('👤 Utilisateur récupéré');

//     console.log('🔄 Récupération profil...');
//     const profileResponse = await simulateApiCall(`/users/${userId}/profile`, 300);
//     console.log('📋 Profil récupéré');

//     console.log('🔄 Récupération posts...');
//     const postsResponse = await simulateApiCall(`/users/${userId}/posts`, 700);
//     console.log('📝 Posts récupérés');

//     return {
//       user: userResponse.data,
//       profile: profileResponse.data,
//       posts: postsResponse.data
//     };
//   } catch (error) {
//     console.log('❌ Erreur Async/Await:', error.message);
//     throw error;
//   }
// }

// Test des deux versions
console.log("\n🧪 Test conversion Promises → Async/Await:");
try {
  // Comparaison des deux approches
  console.log("Test avec Promises:");
  // fetchUserDataPromises(123)
  //   .then(result => console.log('✅ Résultat Promises:', result))
  //   .catch(error => console.log('❌ Échec Promises:', error.message));

  // setTimeout(async () => {
  //   console.log('\nTest avec Async/Await:');
  //   try {
  //     const result = await fetchUserDataAsync(123);
  //     console.log('✅ Résultat Async/Await:', result);
  //   } catch (error) {
  //     console.log('❌ Échec Async/Await:', error.message);
  //   }
  // }, 2000);

  console.log("⏳ Implémentez fetchUserDataAsync()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 2: Async/Await avec Promise.all()
console.log("\n✅ Exercice 2: Async/Await + Promise.all()");

// async function fetchMultipleResourcesSequentially(userId) {
//   console.log('🐌 Exécution séquentielle (lente)...');
//   const start = Date.now();

//   try {
//     const user = await simulateApiCall(`/users/${userId}`, 800);
//     const posts = await simulateApiCall(`/posts`, 600);
//     const comments = await simulateApiCall(`/comments`, 400);

//     const end = Date.now();
//     console.log(`⏱️ Temps séquentiel: ${end - start}ms`);

//     return { user: user.data, posts: posts.data, comments: comments.data };
//   } catch (error) {
//     console.log('❌ Erreur séquentielle:', error.message);
//     throw error;
//   }
// }

// async function fetchMultipleResourcesParallel(userId) {
//   console.log('🚀 Exécution parallèle (rapide)...');
//   const start = Date.now();

//   try {
//     const [user, posts, comments] = await Promise.all([
//       simulateApiCall(`/users/${userId}`, 800),
//       simulateApiCall(`/posts`, 600),
//       simulateApiCall(`/comments`, 400)
//     ]);

//     const end = Date.now();
//     console.log(`⚡ Temps parallèle: ${end - start}ms`);

//     return {
//       user: user.data,
//       posts: posts.data,
//       comments: comments.data
//     };
//   } catch (error) {
//     console.log('❌ Erreur parallèle:', error.message);
//     throw error;
//   }
// }

console.log("\n🧪 Test séquentiel vs parallèle:");
try {
  // console.log('Comparaison des performances...');

  // // Test séquentiel
  // fetchMultipleResourcesSequentially(456)
  //   .then(result => {
  //     console.log('📊 Résultat séquentiel:', Object.keys(result));
  //   })
  //   .catch(error => console.log('❌ Échec séquentiel:', error.message));

  // // Test parallèle après 3 secondes
  // setTimeout(() => {
  //   fetchMultipleResourcesParallel(456)
  //     .then(result => {
  //       console.log('📊 Résultat parallèle:', Object.keys(result));
  //     })
  //     .catch(error => console.log('❌ Échec parallèle:', error.message));
  // }, 3000);

  console.log("⏳ Implémentez les versions séquentielle et parallèle");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 3: Gestion d'erreurs avancée avec async/await
console.log("\n✅ Exercice 3: Gestion d'erreurs avancée");

// async function robustApiCall(endpoint, maxRetries = 3) {
//   let lastError;

//   for (let attempt = 1; attempt <= maxRetries; attempt++) {
//     try {
//       console.log(`🔄 Tentative ${attempt}/${maxRetries} pour ${endpoint}`);

//       const result = await simulateApiCall(endpoint, 300, Math.random() < 0.6);
//       console.log(`✅ Succès à la tentative ${attempt}`);
//       return result;

//     } catch (error) {
//       lastError = error;
//       console.log(`❌ Échec tentative ${attempt}: ${error.message}`);

//       if (attempt < maxRetries) {
//         console.log('⏳ Attente avant nouvelle tentative...');
//         await delay(500);
//       }
//     }
//   }

//   console.log(`💥 Échec définitif après ${maxRetries} tentatives`);
//   throw lastError;
// }

// async function fetchWithErrorHandling() {
//   const endpoints = ['/users', '/posts', '/error-endpoint', '/comments'];
//   const results = [];
//   const errors = [];

//   for (const endpoint of endpoints) {
//     try {
//       const result = await robustApiCall(endpoint, 2);
//       results.push({ endpoint, status: 'success', data: result.data });
//     } catch (error) {
//       errors.push({ endpoint, status: 'error', message: error.message });
//       // Continue avec les autres endpoints même en cas d'erreur
//     }
//   }

//   return { results, errors };
// }

console.log("\n🧪 Test gestion d'erreurs avancée:");
try {
  // fetchWithErrorHandling()
  //   .then(summary => {
  //     console.log('\n📊 Résumé des appels:');
  //     console.log(`✅ Succès: ${summary.results.length}`);
  //     console.log(`❌ Erreurs: ${summary.errors.length}`);

  //     summary.results.forEach(result => {
  //       console.log(`  ✅ ${result.endpoint}: ${result.data}`);
  //     });

  //     summary.errors.forEach(error => {
  //       console.log(`  ❌ ${error.endpoint}: ${error.message}`);
  //     });
  //   });

  console.log("⏳ Implémentez la gestion d'erreurs robuste");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 4: Async/Await avec timeouts
console.log("\n✅ Exercice 4: Timeouts avec async/await");

// function withTimeout(promise, timeoutMs) {
//   const timeoutPromise = new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error(`Timeout après ${timeoutMs}ms`));
//     }, timeoutMs);
//   });

//   return Promise.race([promise, timeoutPromise]);
// }

// async function fetchWithTimeout(endpoint, timeoutMs = 2000) {
//   try {
//     console.log(`⏱️ Appel avec timeout de ${timeoutMs}ms vers ${endpoint}`);

//     const result = await withTimeout(
//       simulateApiCall(endpoint, 1500), // API qui prend 1.5s
//       timeoutMs
//     );

//     console.log('✅ Appel terminé dans les temps');
//     return result;

//   } catch (error) {
//     if (error.message.includes('Timeout')) {
//       console.log('⏰ Timeout détecté!');
//     } else {
//       console.log('❌ Autre erreur:', error.message);
//     }
//     throw error;
//   }
// }

console.log("\n🧪 Test timeouts:");
try {
  // // Test avec timeout suffisant
  // console.log('Test 1: Timeout suffisant (3 secondes)');
  // fetchWithTimeout('/slow-api', 3000)
  //   .then(result => console.log('✅ Succès avec timeout:', result.data))
  //   .catch(error => console.log('❌ Échec avec timeout:', error.message));

  // // Test avec timeout insuffisant
  // setTimeout(() => {
  //   console.log('\nTest 2: Timeout insuffisant (1 seconde)');
  //   fetchWithTimeout('/slow-api', 1000)
  //     .then(result => console.log('✅ Succès rapide:', result.data))
  //     .catch(error => console.log('⏰ Timeout détecté:', error.message));
  // }, 4000);

  console.log("⏳ Implémentez withTimeout() et fetchWithTimeout()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 5: Async iterators et for await...of
console.log("\n✅ Exercice 5: Async Iterators");

// async function* generateAsyncNumbers(count, delay = 500) {
//   for (let i = 1; i <= count; i++) {
//     await new Promise(resolve => setTimeout(resolve, delay));
//     console.log(`📦 Génération du nombre ${i}`);
//     yield i * i; // Carrés des nombres
//   }
// }

// async function* fetchPaginatedData(totalPages = 3) {
//   for (let page = 1; page <= totalPages; page++) {
//     console.log(`📄 Récupération page ${page}/${totalPages}`);

//     try {
//       const response = await simulateApiCall(`/data?page=${page}`, 400);
//       yield {
//         page,
//         data: [`Item ${page}-1`, `Item ${page}-2`, `Item ${page}-3`],
//         timestamp: response.timestamp
//       };
//     } catch (error) {
//       console.log(`❌ Erreur page ${page}:`, error.message);
//       yield { page, error: error.message };
//     }
//   }
// }

// async function processAsyncData() {
//   console.log('🔄 Traitement des données asynchrones...');

//   // Traiter les nombres générés
//   console.log('\n📊 Nombres carrés:');
//   for await (const square of generateAsyncNumbers(4, 300)) {
//     console.log(`  ➤ Carré reçu: ${square}`);
//   }

//   // Traiter les données paginées
//   console.log('\n📄 Données paginées:');
//   for await (const pageData of fetchPaginatedData(3)) {
//     if (pageData.error) {
//       console.log(`  ❌ Page ${pageData.page}: ${pageData.error}`);
//     } else {
//       console.log(`  ✅ Page ${pageData.page}: ${pageData.data.length} items`);
//     }
//   }
// }

console.log("\n🧪 Test async iterators:");
try {
  // processAsyncData()
  //   .then(() => console.log('🏁 Traitement terminé'))
  //   .catch(error => console.log('❌ Erreur traitement:', error.message));

  console.log("⏳ Implémentez les async generators et le traitement");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// BONUS: Top-level await (Node.js 14.8+)
console.log("\n🏆 BONUS: Top-level await");

// Dans un module ES6, vous pouvez utiliser await au niveau supérieur
console.log("💡 Exemple de top-level await:");
console.log(`
// fichier: data-fetcher.mjs
const userData = await fetch('/api/user').then(r => r.json());
export default userData;

// Plus besoin de wrapper async function!
`);

// Simulation d'une initialisation asynchrone
// async function initializeApp() {
//   console.log('🚀 Initialisation de l\'application...');

//   try {
//     // Chargement de la configuration
//     const config = await simulateApiCall('/config', 300);
//     console.log('⚙️ Configuration chargée');

//     // Authentification
//     const auth = await simulateApiCall('/auth', 200);
//     console.log('🔐 Authentification réussie');

//     // Données utilisateur
//     const user = await simulateApiCall('/user', 150);
//     console.log('👤 Données utilisateur chargées');

//     console.log('✅ Application initialisée avec succès');
//     return { config, auth, user };

//   } catch (error) {
//     console.log('💥 Échec de l\'initialisation:', error.message);
//     throw error;
//   }
// }

console.log("\n🧪 Test initialisation asynchrone:");
try {
  // initializeApp()
  //   .then(appData => {
  //     console.log('🎉 Application prête!');
  //     console.log('📊 Modules chargés:', Object.keys(appData));
  //   })
  //   .catch(error => {
  //     console.log('💔 Échec du démarrage:', error.message);
  //   });

  console.log("⏳ Implémentez initializeApp()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// PATTERNS COURANTS
console.log("\n📋 PATTERNS AVEC ASYNC/AWAIT:");
console.log("✅ try/catch - Gestion d'erreurs claire");
console.log("✅ Promise.all + await - Parallélisme simple");
console.log("✅ for await...of - Traitement de flux asynchrones");
console.log("✅ Timeout wrapper - Protection contre les appels lents");
console.log("✅ Retry pattern - Résilience avec boucles");
console.log("✅ Async generators - Données en streaming");
console.log("✅ Top-level await - Initialisation simplifiée");

// QUESTIONS DE RÉFLEXION
console.log("\n❓ Questions:");
console.log("• Quand préférer async/await aux Promises?");
console.log("• Comment gérer les performances avec async/await?");
console.log("• Que se passe-t-il si on oublie await?");
console.log("• Comment déboguer du code async/await?");
