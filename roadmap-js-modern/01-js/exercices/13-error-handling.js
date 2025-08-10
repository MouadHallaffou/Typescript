// ===============================
// Exercice 13: Gestion d'erreurs
// ===============================

console.log("🛡️ Exercice 13: Gestion d'erreurs");
console.log("==================================");

console.log("\n📚 La gestion d'erreurs comprend:");
console.log("• try/catch pour les erreurs synchrones et asynchrones");
console.log("• Types d'erreurs: SyntaxError, ReferenceError, TypeError, etc.");
console.log("• Création d'erreurs personnalisées");
console.log("• Propagation et gestion centralisée des erreurs");

// TODO 1: Types d'erreurs JavaScript
console.log("\n✅ Exercice 1: Types d'erreurs courantes");

function demonstrateErrorTypes() {
  console.log("🔍 Démonstration des types d'erreurs:");

  // ReferenceError
  try {
    // console.log(variableInexistante);
    console.log("⏳ Décommentez pour voir ReferenceError");
  } catch (error) {
    console.log("❌ ReferenceError:", error.message);
  }

  // TypeError
  try {
    // const obj = null;
    // obj.method();
    console.log("⏳ Décommentez pour voir TypeError");
  } catch (error) {
    console.log("❌ TypeError:", error.message);
  }

  // SyntaxError (ne peut pas être catché dans le même scope)
  console.log("💡 SyntaxError: détecté à l'analyse, pas à l'exécution");

  // RangeError
  try {
    // const arr = new Array(-1);
    console.log("⏳ Décommentez pour voir RangeError");
  } catch (error) {
    console.log("❌ RangeError:", error.message);
  }
}

// TODO 2: Erreurs personnalisées
console.log("\n✅ Exercice 2: Classes d'erreurs personnalisées");

// class ValidationError extends Error {
//   constructor(message, field) {
//     super(message);
//     this.name = 'ValidationError';
//     this.field = field;
//     this.timestamp = new Date().toISOString();
//   }
// }

// class NetworkError extends Error {
//   constructor(message, statusCode, url) {
//     super(message);
//     this.name = 'NetworkError';
//     this.statusCode = statusCode;
//     this.url = url;
//     this.retryable = statusCode >= 500 || statusCode === 429;
//   }
// }

// class BusinessLogicError extends Error {
//   constructor(message, code, context = {}) {
//     super(message);
//     this.name = 'BusinessLogicError';
//     this.code = code;
//     this.context = context;
//     this.userFriendly = true;
//   }
// }

// Fonction de validation avec erreurs personnalisées
// function validateUser(userData) {
//   if (!userData) {
//     throw new ValidationError('Données utilisateur manquantes', 'userData');
//   }

//   if (!userData.email) {
//     throw new ValidationError('Email requis', 'email');
//   }

//   if (!userData.email.includes('@')) {
//     throw new ValidationError('Format email invalide', 'email');
//   }

//   if (!userData.age || userData.age < 0 || userData.age > 150) {
//     throw new ValidationError('Âge invalide (0-150)', 'age');
//   }

//   if (!userData.password || userData.password.length < 8) {
//     throw new ValidationError('Mot de passe trop court (min 8 caractères)', 'password');
//   }

//   return true;
// }

// Simulation d'un appel réseau
// function simulateNetworkCall(url, shouldFail = false, statusCode = 200) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldFail) {
//         reject(new NetworkError(`Échec de la requête`, statusCode, url));
//       } else {
//         resolve({ status: statusCode, data: 'Succès' });
//       }
//     }, 500);
//   });
// }

// Test des erreurs personnalisées
console.log("\n🧪 Test erreurs personnalisées:");
try {
  // Test de validation
  console.log("Test validation:");
  const testUsers = [
    { email: "test@example.com", age: 25, password: "password123" },
    { email: "invalid-email", age: 25, password: "password123" },
    { email: "test@example.com", age: -5, password: "password123" },
    { email: "test@example.com", age: 25, password: "123" },
    null,
  ];

  // testUsers.forEach((user, index) => {
  //   try {
  //     validateUser(user);
  //     console.log(`✅ Utilisateur ${index + 1}: valide`);
  //   } catch (error) {
  //     if (error instanceof ValidationError) {
  //       console.log(`❌ Validation ${index + 1}: ${error.message} (champ: ${error.field})`);
  //     } else {
  //       console.log(`💥 Erreur inattendue ${index + 1}:`, error.message);
  //     }
  //   }
  // });

  console.log("⏳ Implémentez les classes d'erreurs et validateUser()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 3: Gestion centralisée des erreurs
console.log("\n✅ Exercice 3: Gestionnaire d'erreurs centralisé");

// class ErrorHandler {
//   constructor() {
//     this.errorLog = [];
//     this.setupGlobalErrorHandling();
//   }

//   log(error, context = {}) {
//     const errorEntry = {
//       timestamp: new Date().toISOString(),
//       message: error.message,
//       name: error.name,
//       stack: error.stack,
//       context,
//       severity: this.getSeverity(error)
//     };

//     this.errorLog.push(errorEntry);
//     console.log(`🔴 [${errorEntry.severity}] ${error.name}: ${error.message}`);

//     // En production, on enverrait ça à un service de logging
//     if (errorEntry.severity === 'critical') {
//       console.log('🚨 ERREUR CRITIQUE - Notification admin requise');
//     }
//   }

//   getSeverity(error) {
//     if (error instanceof ValidationError) return 'warning';
//     if (error instanceof NetworkError) {
//       return error.retryable ? 'warning' : 'error';
//     }
//     if (error instanceof BusinessLogicError) return 'error';
//     return 'critical';
//   }

//   handleAsync(asyncFn) {
//     return async (...args) => {
//       try {
//         return await asyncFn(...args);
//       } catch (error) {
//         this.log(error, { function: asyncFn.name, args });
//         throw error;
//       }
//     };
//   }

//   setupGlobalErrorHandling() {
//     // Gestion des erreurs non catchées
//     if (typeof window !== 'undefined') {
//       window.addEventListener('error', (event) => {
//         this.log(event.error, { type: 'global', filename: event.filename, lineno: event.lineno });
//       });

//       window.addEventListener('unhandledrejection', (event) => {
//         this.log(event.reason, { type: 'unhandledPromise' });
//       });
//     } else if (typeof process !== 'undefined') {
//       process.on('uncaughtException', (error) => {
//         this.log(error, { type: 'uncaughtException' });
//       });

//       process.on('unhandledRejection', (reason) => {
//         this.log(reason, { type: 'unhandledRejection' });
//       });
//     }
//   }

//   getErrorStats() {
//     const stats = {
//       total: this.errorLog.length,
//       bySeverity: {},
//       byType: {},
//       recent: this.errorLog.slice(-5)
//     };

//     this.errorLog.forEach(entry => {
//       stats.bySeverity[entry.severity] = (stats.bySeverity[entry.severity] || 0) + 1;
//       stats.byType[entry.name] = (stats.byType[entry.name] || 0) + 1;
//     });

//     return stats;
//   }
// }

// Test du gestionnaire d'erreurs
console.log("\n🧪 Test gestionnaire d'erreurs:");
try {
  // const errorHandler = new ErrorHandler();

  // // Test avec différents types d'erreurs
  // try {
  //   validateUser({ email: 'invalid' });
  // } catch (error) {
  //   errorHandler.log(error, { action: 'user_registration' });
  // }

  // try {
  //   throw new NetworkError('Timeout de connexion', 408, '/api/users');
  // } catch (error) {
  //   errorHandler.log(error, { action: 'fetch_users' });
  // }

  // try {
  //   throw new BusinessLogicError('Solde insuffisant', 'INSUFFICIENT_FUNDS', { balance: 50, required: 100 });
  // } catch (error) {
  //   errorHandler.log(error, { action: 'payment_processing' });
  // }

  // // Wrapper pour fonctions async
  // const riskyAsyncFunction = errorHandler.handleAsync(async () => {
  //   await simulateNetworkCall('/api/risky', true, 500);
  // });

  // riskyAsyncFunction()
  //   .catch(() => console.log('Erreur async gérée automatiquement'));

  // // Affichage des statistiques
  // setTimeout(() => {
  //   console.log('\n📊 Statistiques d\'erreurs:');
  //   const stats = errorHandler.getErrorStats();
  //   console.log(`Total: ${stats.total}`);
  //   console.log('Par sévérité:', stats.bySeverity);
  //   console.log('Par type:', stats.byType);
  // }, 1000);

  console.log("⏳ Implémentez la classe ErrorHandler");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 4: Retry et circuit breaker
console.log("\n✅ Exercice 4: Patterns de résilience");

// class CircuitBreaker {
//   constructor(threshold = 5, timeout = 60000, monitoringPeriod = 10000) {
//     this.threshold = threshold; // Nombre d'échecs avant ouverture
//     this.timeout = timeout; // Temps avant tentative de fermeture
//     this.monitoringPeriod = monitoringPeriod; // Période de surveillance

//     this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
//     this.failureCount = 0;
//     this.lastFailureTime = null;
//     this.successCount = 0;
//   }

//   async execute(operation) {
//     if (this.state === 'OPEN') {
//       if (Date.now() - this.lastFailureTime < this.timeout) {
//         throw new Error('Circuit breaker ouvert - service indisponible');
//       } else {
//         this.state = 'HALF_OPEN';
//         this.successCount = 0;
//       }
//     }

//     try {
//       const result = await operation();

//       if (this.state === 'HALF_OPEN') {
//         this.successCount++;
//         if (this.successCount >= 3) {
//           this.state = 'CLOSED';
//           this.failureCount = 0;
//           console.log('🟢 Circuit breaker fermé - service restauré');
//         }
//       } else {
//         this.failureCount = 0;
//       }

//       return result;

//     } catch (error) {
//       this.failureCount++;
//       this.lastFailureTime = Date.now();

//       if (this.failureCount >= this.threshold) {
//         this.state = 'OPEN';
//         console.log(`🔴 Circuit breaker ouvert après ${this.failureCount} échecs`);
//       }

//       throw error;
//     }
//   }

//   getStatus() {
//     return {
//       state: this.state,
//       failureCount: this.failureCount,
//       lastFailureTime: this.lastFailureTime,
//       timeUntilRetry: this.state === 'OPEN' ?
//         Math.max(0, this.timeout - (Date.now() - this.lastFailureTime)) : 0
//     };
//   }
// }

// async function retryWithBackoff(operation, maxRetries = 3, baseDelay = 1000, maxDelay = 10000) {
//   let attempt = 0;
//   let delay = baseDelay;

//   while (attempt < maxRetries) {
//     try {
//       const result = await operation();
//       if (attempt > 0) {
//         console.log(`✅ Succès à la tentative ${attempt + 1}`);
//       }
//       return result;
//     } catch (error) {
//       attempt++;
//       console.log(`❌ Tentative ${attempt} échouée: ${error.message}`);

//       if (attempt >= maxRetries) {
//         throw new Error(`Échec après ${maxRetries} tentatives: ${error.message}`);
//       }

//       console.log(`⏳ Attente de ${delay}ms avant nouvelle tentative...`);
//       await new Promise(resolve => setTimeout(resolve, delay));

//       // Backoff exponentiel avec jitter
//       delay = Math.min(delay * 2 + Math.random() * 1000, maxDelay);
//     }
//   }
// }

console.log("\n🧪 Test patterns de résilience:");
try {
  // const circuitBreaker = new CircuitBreaker(3, 5000, 10000);

  // // Fonction qui échoue aléatoirement
  // const unreliableService = () => simulateNetworkCall('/unreliable', Math.random() < 0.7, 500);

  // // Test du circuit breaker
  // async function testCircuitBreaker() {
  //   for (let i = 1; i <= 10; i++) {
  //     try {
  //       await circuitBreaker.execute(unreliableService);
  //       console.log(`✅ Appel ${i} réussi`);
  //     } catch (error) {
  //       console.log(`❌ Appel ${i} échoué: ${error.message}`);
  //     }

  //     console.log('Circuit breaker status:', circuitBreaker.getStatus());
  //     await new Promise(resolve => setTimeout(resolve, 500));
  //   }
  // }

  // // Test du retry avec backoff
  // async function testRetryBackoff() {
  //   console.log('\n🔄 Test retry avec backoff:');
  //   try {
  //     await retryWithBackoff(unreliableService, 4, 500, 5000);
  //   } catch (error) {
  //     console.log('💥 Échec final:', error.message);
  //   }
  // }

  // testCircuitBreaker().then(() => {
  //   setTimeout(testRetryBackoff, 2000);
  // });

  console.log("⏳ Implémentez CircuitBreaker et retryWithBackoff()");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// TODO 5: Validation et sanitization avancées
console.log("\n✅ Exercice 5: Validation et sanitization");

// class Validator {
//   static rules = {
//     required: (value, field) => {
//       if (value === null || value === undefined || value === '') {
//         throw new ValidationError(`${field} est requis`, field);
//       }
//     },

//     email: (value, field) => {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(value)) {
//         throw new ValidationError(`${field} doit être un email valide`, field);
//       }
//     },

//     minLength: (min) => (value, field) => {
//       if (value.length < min) {
//         throw new ValidationError(`${field} doit contenir au moins ${min} caractères`, field);
//       }
//     },

//     range: (min, max) => (value, field) => {
//       if (value < min || value > max) {
//         throw new ValidationError(`${field} doit être entre ${min} et ${max}`, field);
//       }
//     },

//     pattern: (regex, message) => (value, field) => {
//       if (!regex.test(value)) {
//         throw new ValidationError(message || `${field} ne respecte pas le format requis`, field);
//       }
//     }
//   };

//   static sanitize = {
//     trim: (value) => typeof value === 'string' ? value.trim() : value,
//     escape: (value) => typeof value === 'string' ?
//       value.replace(/[<>&"']/g, char => ({
//         '<': '&lt;',
//         '>': '&gt;',
//         '&': '&amp;',
//         '"': '&quot;',
//         "'": '&#x27;'
//       })[char]) : value,
//     toLowerCase: (value) => typeof value === 'string' ? value.toLowerCase() : value,
//     removeSpecialChars: (value) => typeof value === 'string' ?
//       value.replace(/[^a-zA-Z0-9\s]/g, '') : value
//   };

//   static validate(data, schema) {
//     const errors = [];
//     const sanitized = {};

//     for (const [field, config] of Object.entries(schema)) {
//       let value = data[field];

//       try {
//         // Sanitization
//         if (config.sanitize) {
//           for (const sanitizer of config.sanitize) {
//             value = this.sanitize[sanitizer](value);
//           }
//         }

//         // Validation
//         if (config.rules) {
//           for (const rule of config.rules) {
//             rule(value, field);
//           }
//         }

//         sanitized[field] = value;

//       } catch (error) {
//         if (error instanceof ValidationError) {
//           errors.push(error);
//         } else {
//           errors.push(new ValidationError(`Erreur de validation pour ${field}`, field));
//         }
//       }
//     }

//     if (errors.length > 0) {
//       const combinedError = new ValidationError(
//         `Validation échouée: ${errors.map(e => e.message).join(', ')}`,
//         'multiple'
//       );
//       combinedError.details = errors;
//       throw combinedError;
//     }

//     return sanitized;
//   }
// }

// Test de validation avancée
console.log("\n🧪 Test validation avancée:");
try {
  // const userSchema = {
  //   email: {
  //     sanitize: ['trim', 'toLowerCase'],
  //     rules: [Validator.rules.required, Validator.rules.email]
  //   },
  //   username: {
  //     sanitize: ['trim', 'removeSpecialChars'],
  //     rules: [Validator.rules.required, Validator.rules.minLength(3)]
  //   },
  //   age: {
  //     rules: [Validator.rules.required, Validator.rules.range(13, 120)]
  //   },
  //   password: {
  //     rules: [
  //       Validator.rules.required,
  //       Validator.rules.minLength(8),
  //       Validator.rules.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Le mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre')
  //     ]
  //   }
  // };

  // const testData = {
  //   email: '  TEST@EXAMPLE.COM  ',
  //   username: '  user@#$123!  ',
  //   age: 25,
  //   password: 'Password123'
  // };

  // try {
  //   const validatedData = Validator.validate(testData, userSchema);
  //   console.log('✅ Validation réussie:');
  //   console.log('Email sanitized:', validatedData.email);
  //   console.log('Username sanitized:', validatedData.username);
  // } catch (error) {
  //   console.log('❌ Erreurs de validation:');
  //   if (error.details) {
  //     error.details.forEach(detail => {
  //       console.log(`  - ${detail.field}: ${detail.message}`);
  //     });
  //   } else {
  //     console.log(error.message);
  //   }
  // }

  console.log("⏳ Implémentez la classe Validator");
} catch (error) {
  console.log("❌ Erreur:", error.message);
}

// Exécution de la démonstration
demonstrateErrorTypes();

// PATTERNS COURANTS
console.log("\n📋 PATTERNS DE GESTION D'ERREURS:");
console.log("✅ Try/catch - Gestion locale des erreurs");
console.log("✅ Erreurs personnalisées - Classification et contexte");
console.log("✅ Gestionnaire centralisé - Logging et monitoring");
console.log("✅ Circuit breaker - Protection contre les services défaillants");
console.log("✅ Retry avec backoff - Résilience avec temporisation");
console.log("✅ Validation/sanitization - Prévention des erreurs");

// QUESTIONS DE RÉFLEXION
console.log("\n❓ Questions:");
console.log("• Quand créer des classes d'erreurs personnalisées?");
console.log("• Comment équilibrer retry et performance?");
console.log("• Que logger en production vs développement?");
console.log("• Comment gérer les erreurs dans une architecture microservices?");
