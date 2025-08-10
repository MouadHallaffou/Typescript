// ====================================
// Exercice 3: Serveur HTTP et APIs
// ====================================

console.log("🌐 Exercice 3: Serveur HTTP et APIs avec Node.js");
console.log("================================================");

console.log("\n📚 Le module `http` et Express permettent:");
console.log("• Créer des serveurs web et APIs REST");
console.log("• Gérer les routes et middlewares");
console.log("• Traiter les requêtes et réponses");
console.log("• Implémenter l'authentification");
console.log("• Gérer les uploads et sessions");

// TODO 1: Serveur HTTP de base
console.log("\n🖥️ TODO 1: Créez un serveur HTTP natif avec:");
console.log("• createServer() - Serveur HTTP de base");
console.log("• Routage manuel par URL et méthode");
console.log("• Gestion des headers et status codes");
console.log("• Support JSON, HTML et fichiers statiques");
console.log("• Logging des requêtes avec timestamp");

// TODO 2: API REST avec Express
console.log("\n🚀 TODO 2: Implémentez une API REST Express:");
console.log("• Configuration Express avec middlewares");
console.log("• Routes CRUD pour une ressource (users, posts, etc.)");
console.log("• Validation des données d'entrée");
console.log("• Gestion d'erreurs centralisée");
console.log("• Documentation automatique des endpoints");

// TODO 3: Middleware système
console.log("\n⚙️ TODO 3: Développez des middlewares:");
console.log("• requestLogger - Log détaillé des requêtes");
console.log("• rateLimiter - Limitation du taux de requêtes");
console.log("• authMiddleware - Vérification des tokens JWT");
console.log("• corsMiddleware - Gestion CORS personnalisée");
console.log("• errorHandler - Traitement global des erreurs");

// TODO 4: Gestion des uploads
console.log("\n📁 TODO 4: Système d'upload de fichiers:");
console.log("• Multer pour upload multipart/form-data");
console.log("• Validation des types et tailles de fichiers");
console.log("• Redimensionnement d'images automatique");
console.log("• Stockage local et cloud (simulation)");
console.log("• API de suppression et listage de fichiers");

// TODO 5: WebSockets en temps réel
console.log("\n⚡ TODO 5: Communication temps réel:");
console.log("• Serveur WebSocket avec Socket.io");
console.log("• Système de chat en temps réel");
console.log("• Gestion des rooms et namespaces");
console.log("• Broadcasting et messages privés");
console.log("• Persistance des connexions et reconnexion");

// TODO 6: Sessions et authentification
console.log("\n🔐 TODO 6: Système d'authentification:");
console.log("• express-session pour gestion des sessions");
console.log("• Système login/logout avec bcrypt");
console.log("• JWT tokens avec refresh tokens");
console.log("• Protection des routes sensibles");
console.log("• Gestion des rôles et permissions");

// TODO 7: Proxy et load balancing
console.log("\n⚖️ TODO 7: Proxy et répartition de charge:");
console.log("• http-proxy-middleware pour reverse proxy");
console.log("• Load balancer round-robin simple");
console.log("• Health checks des services");
console.log("• Circuit breaker pattern");
console.log("• Métriques et monitoring");

// TODO 8: API avancée avec cache
console.log("\n💾 TODO 8: API avec système de cache:");
console.log("• Cache en mémoire avec TTL");
console.log("• Cache Redis (simulation)");
console.log("• Cache conditionnel avec ETags");
console.log("• Invalidation du cache intelligente");
console.log("• Compression gzip des réponses");

// Structure de données d'exemple
console.log("\n📊 DONNÉES D'EXEMPLE:");

// Exemple de configuration serveur
const serverConfig = {
  port: 3000,
  host: "localhost",
  cors: {
    origin: ["http://localhost:3000", "http://localhost:8080"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limite par IP
    message: "Trop de requêtes, réessayez plus tard",
  },
  upload: {
    maxFileSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: ["image/jpeg", "image/png", "image/gif"],
    destination: "./uploads",
  },
};

console.log("⚙️ Config serveur:", JSON.stringify(serverConfig, null, 2));

// Exemple de structure utilisateur
const userModel = {
  id: 1,
  username: "john_doe",
  email: "john@example.com",
  passwordHash: "$2b$10$...",
  role: "user",
  profile: {
    firstName: "John",
    lastName: "Doe",
    avatar: "/uploads/avatars/john.jpg",
    bio: "Développeur passionné",
  },
  preferences: {
    theme: "dark",
    language: "fr",
    notifications: true,
  },
  createdAt: "2024-01-15T10:30:00Z",
  lastLogin: "2024-01-20T14:45:00Z",
  isActive: true,
};

console.log("👤 Modèle utilisateur:", JSON.stringify(userModel, null, 2));

// Exemple de réponse API standardisée
const apiResponse = {
  success: true,
  data: {
    users: [userModel],
    pagination: {
      page: 1,
      limit: 10,
      total: 25,
      pages: 3,
    },
  },
  meta: {
    timestamp: new Date().toISOString(),
    version: "v1",
    executionTime: "45ms",
  },
};

console.log("📝 Réponse API:", JSON.stringify(apiResponse, null, 2));

// Exemple de middleware de logging
const requestLogFormat = {
  timestamp: "2024-01-20T15:30:45.123Z",
  method: "POST",
  url: "/api/users",
  ip: "192.168.1.100",
  userAgent: "Mozilla/5.0...",
  headers: {
    "content-type": "application/json",
    authorization: "Bearer eyJ...",
  },
  body: { username: "newuser", email: "new@example.com" },
  statusCode: 201,
  responseTime: 145,
  responseSize: 1024,
};

console.log("📋 Log de requête:", JSON.stringify(requestLogFormat, null, 2));

// Points d'apprentissage clés
console.log("\n🎯 CONCEPTS CLÉS À MAÎTRISER:");
console.log("✅ HTTP methods et status codes");
console.log("✅ Request/Response cycle");
console.log("✅ Middleware chain et next()");
console.log("✅ Routing et paramètres");
console.log("✅ Error handling et try/catch");
console.log("✅ Async/await dans les routes");
console.log("✅ Security best practices");
console.log("✅ Performance et caching");

// Outils et bonnes pratiques
console.log("\n🛠️ OUTILS ET BONNES PRATIQUES:");
console.log("📦 Express.js, Socket.io, Multer, bcrypt, jsonwebtoken");
console.log("🔒 Helmet.js pour la sécurité");
console.log("📊 Morgan pour le logging");
console.log("⚡ Compression middleware");
console.log("🧪 Jest et Supertest pour les tests");
console.log("📝 Swagger/OpenAPI pour la documentation");

console.log("\n🚀 Commencez par le TODO 1 et progressez étape par étape !");
console.log("💡 Testez avec Postman ou curl pour chaque endpoint.");

/* 
EXEMPLES D'UTILISATION ATTENDUS:

// Serveur HTTP de base
const server = createServer((req, res) => {
  router.handle(req, res);
});
server.listen(3000);

// Route Express
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
});

// Middleware personnalisé
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

// Upload de fichier
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'Fichier uploadé', file: req.file });
});

// WebSocket
io.on('connection', (socket) => {
  socket.on('message', (data) => {
    io.emit('message', data);
  });
});
*/
