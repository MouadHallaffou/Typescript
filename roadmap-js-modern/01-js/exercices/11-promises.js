// ===========================
// Exercice 11: Promises
// ===========================

console.log("🔄 Exercice 11: Promises");
console.log("=========================");

console.log("\n📚 Les Promises permettent:");
console.log("• Gérer l'asynchrone de façon plus lisible que les callbacks");
console.log("• Chaîner les opérations avec .then()");
console.log("• Gérer les erreurs avec .catch()");
console.log("• États: pending, fulfilled, rejected");

// TODO 1: Créer des Promises basiques
console.log("\n✅ Exercice 1: Création de Promises");

// function createRandomPromise(delay = 1000, successRate = 0.7) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() < successRate) {
//         resolve(`✅ Succès après ${delay}ms`);
//       } else {
//         reject(new Error(`❌ Échec après ${delay}ms`));
//       }
//     }, delay);
//   });
// }

// function simulateApiCall(url, delay = 1000) {
//   return new Promise((resolve, reject) => {
//     console.log(`🌐 Appel API vers: ${url}`);

//     setTimeout(() => {
//       if (url.includes('error')) {
//         reject(new Error(`Erreur 404: ${url} non trouvé`));
//       } else {
//         resolve({
//           status: 200,
//           data: `Données de ${url}`,
//           timestamp: new Date().toISOString()
//         });
//       }
//     }, delay);
//   });
// }

// Test des Promises basiques
console.log("\n🧪 Test Promises basiques:");
try {
  // createRandomPromise(500, 0.8)
  //   .then(result => {
  //     console.log('Promise résolue:', result);
  //     return 'Données transformées';
  //   })
  //   .then(transformed => {
  //     console.log('Transformation:', transformed);
  //   })
  //   .catch(error => {
  //     console.log('Promise rejetée:', error.message);
  //   })
  //   .finally(() => {
  //     console.log('🏁 Promise terminée (dans tous les cas)');
  //   });

  console.log("⏳ Implémentez createRandomPromise() et simulateApiCall()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 2: Promise.all() - Exécution parallèle
console.log("\n✅ Exercice 2: Promise.all()");

// Test de Promise.all
console.log("\n🧪 Test Promise.all:");
try {
  // const promises = [
  //   simulateApiCall('/users', 800),
  //   simulateApiCall('/posts', 1200),
  //   simulateApiCall('/comments', 600)
  // ];

  // console.log('🚀 Lancement de 3 appels API en parallèle...');
  // const startTime = Date.now();

  // Promise.all(promises)
  //   .then(results => {
  //     const endTime = Date.now();
  //     console.log(`⚡ Tous les appels terminés en ${endTime - startTime}ms`);
  //     results.forEach((result, index) => {
  //       console.log(`API ${index + 1}:`, result.data);
  //     });
  //   })
  //   .catch(error => {
  //     console.log('💥 Un des appels a échoué:', error.message);
  //   });

  console.log("⏳ Testez avec Promise.all()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 3: Promise.allSettled() - Tous les résultats
console.log("\n✅ Exercice 3: Promise.allSettled()");

console.log("\n🧪 Test Promise.allSettled:");
try {
  // const mixedPromises = [
  //   simulateApiCall('/users', 500),
  //   simulateApiCall('/error-endpoint', 300), // Celui-ci échouera
  //   simulateApiCall('/posts', 700)
  // ];

  // console.log('🔄 Test avec un appel qui échoue...');

  // Promise.allSettled(mixedPromises)
  //   .then(results => {
  //     console.log('📊 Résultats de allSettled:');
  //     results.forEach((result, index) => {
  //       if (result.status === 'fulfilled') {
  //         console.log(`✅ Promise ${index + 1}: ${result.value.data}`);
  //       } else {
  //         console.log(`❌ Promise ${index + 1}: ${result.reason.message}`);
  //       }
  //     });
  //   });

  console.log("⏳ Testez avec Promise.allSettled()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 4: Promise.race() - Premier terminé
console.log("\n✅ Exercice 4: Promise.race()");

console.log("\n🧪 Test Promise.race:");
try {
  // const racePromises = [
  //   simulateApiCall('/slow-api', 2000),
  //   simulateApiCall('/fast-api', 500),
  //   simulateApiCall('/medium-api', 1000)
  // ];

  // console.log('🏁 Course entre 3 API (slow: 2s, fast: 0.5s, medium: 1s)...');

  // Promise.race(racePromises)
  //   .then(winner => {
  //     console.log('🏆 Gagnant de la course:', winner.data);
  //   })
  //   .catch(error => {
  //     console.log('💥 Le plus rapide a échoué:', error.message);
  //   });

  console.log("⏳ Testez avec Promise.race()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 5: Chaînage complexe de Promises
console.log("\n✅ Exercice 5: Chaînage complexe");

// function getUserProfile(userId) {
//   return simulateApiCall(`/users/${userId}`, 300)
//     .then(userResponse => {
//       const user = { ...userResponse, userId };
//       console.log('👤 Utilisateur récupéré:', user.data);
//       return user;
//     });
// }

// function getUserPosts(userId) {
//   return simulateApiCall(`/users/${userId}/posts`, 500)
//     .then(postsResponse => {
//       const posts = ['Post 1', 'Post 2', 'Post 3']; // Simulation
//       console.log('📝 Posts récupérés:', posts.length);
//       return posts;
//     });
// }

// function getPostComments(postId) {
//   return simulateApiCall(`/posts/${postId}/comments`, 200)
//     .then(commentsResponse => {
//       const comments = ['Comment 1', 'Comment 2']; // Simulation
//       console.log('💬 Commentaires récupérés pour post', postId);
//       return comments;
//     });
// }

// function getCompleteUserData(userId) {
//   console.log(`🔍 Récupération des données complètes pour utilisateur ${userId}`);

//   return getUserProfile(userId)
//     .then(user => {
//       return getUserPosts(userId)
//         .then(posts => {
//           // Récupérer les commentaires du premier post
//           if (posts.length > 0) {
//             return getPostComments(1)
//               .then(comments => ({
//                 user,
//                 posts,
//                 firstPostComments: comments
//               }));
//           }
//           return { user, posts, firstPostComments: [] };
//         });
//     })
//     .then(completeData => {
//       console.log('📦 Données complètes assemblées');
//       return completeData;
//     })
//     .catch(error => {
//       console.log('💥 Erreur dans la chaîne:', error.message);
//       throw error;
//     });
// }

// Test du chaînage complexe
console.log("\n🧪 Test chaînage complexe:");
try {
  // getCompleteUserData(123)
  //   .then(data => {
  //     console.log('🎉 Résultat final:', {
  //       userStatus: data.user.status,
  //       postsCount: data.posts.length,
  //       commentsCount: data.firstPostComments.length
  //     });
  //   })
  //   .catch(error => {
  //     console.log('❌ Échec final:', error.message);
  //   });

  console.log("⏳ Implémentez le chaînage complexe de Promises");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 6: Gestion d'erreurs avancée
console.log("\n✅ Exercice 6: Gestion d'erreurs avec retry");

// function promiseWithRetry(promiseFactory, maxRetries = 3, delay = 1000) {
//   return new Promise((resolve, reject) => {
//     let attempt = 0;

//     function attemptPromise() {
//       attempt++;
//       console.log(`🔄 Tentative ${attempt}/${maxRetries + 1}`);

//       promiseFactory()
//         .then(resolve)
//         .catch(error => {
//           if (attempt <= maxRetries) {
//             console.log(`⏳ Échec, nouvelle tentative dans ${delay}ms...`);
//             setTimeout(attemptPromise, delay);
//           } else {
//             console.log(`💥 Échec définitif après ${attempt} tentatives`);
//             reject(error);
//           }
//         });
//     }

//     attemptPromise();
//   });
// }

console.log("\n🧪 Test retry avec Promises:");
try {
  // const unreliableApiCall = () => createRandomPromise(300, 0.3); // 30% de succès

  // promiseWithRetry(unreliableApiCall, 2, 500)
  //   .then(result => {
  //     console.log('🎉 Succès final:', result);
  //   })
  //   .catch(error => {
  //     console.log('💔 Échec définitif:', error.message);
  //   });

  console.log("⏳ Implémentez promiseWithRetry()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// BONUS: Promise personnalisée
console.log("\n🏆 BONUS: Créer sa propre Promise");

// class CustomPromise {
//   constructor(executor) {
//     this.state = 'pending';
//     this.value = undefined;
//     this.reason = undefined;
//     this.onFulfilledCallbacks = [];
//     this.onRejectedCallbacks = [];

//     const resolve = (value) => {
//       if (this.state === 'pending') {
//         this.state = 'fulfilled';
//         this.value = value;
//         this.onFulfilledCallbacks.forEach(callback => callback(value));
//       }
//     };

//     const reject = (reason) => {
//       if (this.state === 'pending') {
//         this.state = 'rejected';
//         this.reason = reason;
//         this.onRejectedCallbacks.forEach(callback => callback(reason));
//       }
//     };

//     try {
//       executor(resolve, reject);
//     } catch (error) {
//       reject(error);
//     }
//   }

//   then(onFulfilled, onRejected) {
//     return new CustomPromise((resolve, reject) => {
//       const handleFulfilled = (value) => {
//         try {
//           if (typeof onFulfilled === 'function') {
//             const result = onFulfilled(value);
//             resolve(result);
//           } else {
//             resolve(value);
//           }
//         } catch (error) {
//           reject(error);
//         }
//       };

//       const handleRejected = (reason) => {
//         try {
//           if (typeof onRejected === 'function') {
//             const result = onRejected(reason);
//             resolve(result);
//           } else {
//             reject(reason);
//           }
//         } catch (error) {
//           reject(error);
//         }
//       };

//       if (this.state === 'fulfilled') {
//         setTimeout(() => handleFulfilled(this.value), 0);
//       } else if (this.state === 'rejected') {
//         setTimeout(() => handleRejected(this.reason), 0);
//       } else {
//         this.onFulfilledCallbacks.push(handleFulfilled);
//         this.onRejectedCallbacks.push(handleRejected);
//       }
//     });
//   }

//   catch(onRejected) {
//     return this.then(null, onRejected);
//   }
// }

// Test de la Promise personnalisée
console.log("\n🧪 Test CustomPromise:");
try {
  // const customPromise = new CustomPromise((resolve, reject) => {
  //   setTimeout(() => {
  //     if (Math.random() > 0.5) {
  //       resolve('Custom Promise résolue!');
  //     } else {
  //       reject(new Error('Custom Promise rejetée!'));
  //     }
  //   }, 1000);
  // });

  // customPromise
  //   .then(result => {
  //     console.log('✅ Custom Promise:', result);
  //     return 'Transformation';
  //   })
  //   .then(transformed => {
  //     console.log('🔄 Transformé:', transformed);
  //   })
  //   .catch(error => {
  //     console.log('❌ Custom Promise error:', error.message);
  //   });

  console.log("⏳ Implémentez votre CustomPromise");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// PATTERNS COURANTS
console.log("\n📋 PATTERNS AVEC LES PROMISES:");
console.log("✅ .then() - Chaînage d'opérations");
console.log("✅ .catch() - Gestion d'erreurs centralisée");
console.log("✅ .finally() - Nettoyage dans tous les cas");
console.log("✅ Promise.all() - Parallélisme avec échec rapide");
console.log("✅ Promise.allSettled() - Parallélisme sans échec");
console.log("✅ Promise.race() - Premier résultat disponible");
console.log("✅ Retry pattern - Résilience aux erreurs");

// QUESTIONS DE RÉFLEXION
console.log("\n❓ Questions:");
console.log("• Quand utiliser Promise.all vs Promise.allSettled?");
console.log('• Comment éviter le "callback hell" avec les Promises?');
console.log("• Quelles sont les différences entre .then() et async/await?");
console.log("• Comment gérer les timeouts avec les Promises?");
