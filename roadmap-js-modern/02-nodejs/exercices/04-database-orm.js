// =============================================
// Exercice 4: Bases de données et ORM
// =============================================

console.log("🗄️ Exercice 4: Bases de données et ORM avec Node.js");
console.log("===================================================");

console.log("\n📚 Les bases de données avec Node.js permettent:");
console.log("• Persistance des données avec SQL/NoSQL");
console.log("• Relations entre entités et jointures");
console.log("• Transactions et intégrité des données");
console.log("• Migrations et seeders automatisés");
console.log("• Optimisation des requêtes et indexation");

// TODO 1: Configuration multi-base de données
console.log("\n🔧 TODO 1: Configurez des connexions multi-DB:");
console.log("• DatabaseManager - Gestionnaire de connexions");
console.log("• Support PostgreSQL, MySQL, SQLite, MongoDB");
console.log("• Pool de connexions avec retry automatique");
console.log("• Health checks et monitoring des DB");
console.log("• Configuration par environnement");

// TODO 2: ORM/ODM Pattern
console.log("\n🏗️ TODO 2: Implémentez un ORM simple:");
console.log("• BaseModel - Classe de base pour tous les modèles");
console.log("• Query Builder - Construction de requêtes fluide");
console.log("• Relations: hasOne, hasMany, belongsTo, manyToMany");
console.log("• Hooks: beforeSave, afterCreate, beforeDelete");
console.log("• Validation automatique des champs");

// TODO 3: Migration et schema
console.log("\n📋 TODO 3: Système de migrations:");
console.log("• MigrationRunner - Exécuteur de migrations");
console.log("• Schema Builder - Création/modification de tables");
console.log("• Rollback et versionning des schemas");
console.log("• Seeders pour données de test/production");
console.log("• Auto-génération de migrations depuis modèles");

// TODO 4: Transaction Manager
console.log("\n💳 TODO 4: Gestionnaire de transactions:");
console.log("• TransactionManager - Gestion transactionnelle");
console.log("• Nested transactions et savepoints");
console.log("• Auto-rollback sur erreur");
console.log("• Transaction isolation levels");
console.log("• Distributed transactions (2PC simulation)");

// TODO 5: Cache et optimisation
console.log("\n⚡ TODO 5: Cache de base de données:");
console.log("• QueryCache - Cache des résultats de requêtes");
console.log("• Cache invalidation automatique");
console.log("• Cache distribué Redis (simulation)");
console.log("• N+1 queries detection et solutions");
console.log("• Connection pooling avancé");

// TODO 6: Recherche et indexation
console.log("\n🔍 TODO 6: Moteur de recherche:");
console.log("• SearchEngine - Recherche full-text");
console.log("• Indexation automatique des champs");
console.log("• Faceted search et filtres");
console.log("• Ranking et pertinence des résultats");
console.log("• Auto-suggest et recherche approximative");

// TODO 7: Audit et logging
console.log("\n📊 TODO 7: Audit trail des données:");
console.log("• AuditLogger - Traçabilité des modifications");
console.log("• Snapshot des changements (before/after)");
console.log("• User tracking et timestamps");
console.log("• Soft delete avec restoration");
console.log("• Data retention policies");

// TODO 8: Backup et synchronisation
console.log("\n💾 TODO 8: Backup et sync des données:");
console.log("• BackupManager - Sauvegarde automatisée");
console.log("• Incremental et full backups");
console.log("• Cross-database synchronization");
console.log("• Conflict resolution strategies");
console.log("• Point-in-time recovery simulation");

// Structure de données d'exemple
console.log("\n📊 MODÈLES DE DONNÉES D'EXEMPLE:");

// Schema utilisateur complet
const userSchema = {
  tableName: "users",
  fields: {
    id: { type: "integer", primaryKey: true, autoIncrement: true },
    username: { type: "string", unique: true, required: true, maxLength: 50 },
    email: { type: "string", unique: true, required: true, format: "email" },
    passwordHash: { type: "string", required: true, hidden: true },
    firstName: { type: "string", maxLength: 100 },
    lastName: { type: "string", maxLength: 100 },
    avatar: { type: "string", format: "url" },
    role: {
      type: "enum",
      values: ["admin", "moderator", "user"],
      default: "user",
    },
    status: {
      type: "enum",
      values: ["active", "inactive", "banned"],
      default: "active",
    },
    lastLoginAt: { type: "timestamp", nullable: true },
    emailVerifiedAt: { type: "timestamp", nullable: true },
    createdAt: { type: "timestamp", default: "now" },
    updatedAt: { type: "timestamp", default: "now", onUpdate: "now" },
  },
  indexes: [
    { fields: ["email"], unique: true },
    { fields: ["username"], unique: true },
    { fields: ["status", "role"] },
    { fields: ["createdAt"] },
  ],
  relations: {
    posts: { type: "hasMany", model: "Post", foreignKey: "userId" },
    profile: { type: "hasOne", model: "UserProfile", foreignKey: "userId" },
    roles: { type: "manyToMany", model: "Role", through: "UserRoles" },
  },
};

console.log("👤 Schema utilisateur:", JSON.stringify(userSchema, null, 2));

// Configuration de base de données
const dbConfig = {
  connections: {
    primary: {
      type: "postgresql",
      host: "localhost",
      port: 5432,
      database: "myapp_production",
      username: "app_user",
      password: process.env.DB_PASSWORD,
      pool: { min: 2, max: 10, acquireTimeoutMillis: 30000 },
      ssl: { rejectUnauthorized: false },
      migrations: { directory: "./migrations", tableName: "migrations" },
    },
    cache: {
      type: "redis",
      host: "localhost",
      port: 6379,
      password: process.env.REDIS_PASSWORD,
      db: 0,
      ttl: 3600,
    },
    analytics: {
      type: "mongodb",
      host: "localhost",
      port: 27017,
      database: "analytics",
      options: { useUnifiedTopology: true },
    },
  },
  defaultConnection: "primary",
  queryTimeout: 30000,
  logQueries: process.env.NODE_ENV === "development",
};

console.log("🔧 Config DB:", JSON.stringify(dbConfig, null, 2));

// Exemple de requête complexe
const complexQuery = {
  model: "User",
  select: ["id", "username", "email", "profile.bio", "posts.title"],
  where: {
    status: "active",
    or: [{ role: "admin" }, { "posts.publishedAt": { gte: "2024-01-01" } }],
    "profile.isPublic": true,
  },
  joins: [
    { model: "UserProfile", as: "profile", on: "users.id = profile.userId" },
    { model: "Post", as: "posts", on: "users.id = posts.userId" },
  ],
  orderBy: [
    { field: "username", direction: "asc" },
    { field: "posts.publishedAt", direction: "desc" },
  ],
  limit: 20,
  offset: 0,
  groupBy: ["users.id"],
  having: { "count(posts.id)": { gte: 1 } },
};

console.log("🔍 Requête complexe:", JSON.stringify(complexQuery, null, 2));

// Exemple de migration
const migrationExample = {
  version: "20240120_create_users_table",
  up: {
    createTable: {
      name: "users",
      columns: {
        id: { type: "integer", primaryKey: true, autoIncrement: true },
        username: { type: "varchar", length: 50, unique: true, notNull: true },
        email: { type: "varchar", length: 255, unique: true, notNull: true },
        created_at: { type: "timestamp", default: "CURRENT_TIMESTAMP" },
      },
      indexes: [
        { name: "idx_users_email", columns: ["email"] },
        { name: "idx_users_username", columns: ["username"] },
      ],
    },
  },
  down: {
    dropTable: "users",
  },
};

console.log("📋 Migration exemple:", JSON.stringify(migrationExample, null, 2));

// Points d'apprentissage clés
console.log("\n🎯 CONCEPTS CLÉS À MAÎTRISER:");
console.log("✅ SQL vs NoSQL - Quand utiliser quoi");
console.log("✅ ACID properties et transactions");
console.log("✅ Indexation et performance des requêtes");
console.log("✅ Relations et jointures optimisées");
console.log("✅ Migrations et versioning de schema");
console.log("✅ Connection pooling et scaling");
console.log("✅ Backup/recovery strategies");
console.log("✅ Security: SQL injection, encryption");

// Outils et bonnes pratiques
console.log("\n🛠️ OUTILS ET BONNES PRATIQUES:");
console.log("📦 ORMs populaires: Sequelize, TypeORM, Prisma, Mongoose");
console.log("🔍 Query builders: Knex.js, QueryBuilder");
console.log("🐘 PostgreSQL avec pg, MySQL avec mysql2");
console.log("🍃 MongoDB avec mongoose");
console.log("⚡ Redis pour cache et sessions");
console.log("📊 Monitoring: pg_stat_statements, explain analyze");

console.log("\n🚀 Commencez par le TODO 1 et progressez étape par étape !");
console.log("💡 Testez avec des vraies bases de données en développement.");

/* 
EXEMPLES D'UTILISATION ATTENDUS:

// Configuration des connexions
const dbManager = new DatabaseManager(dbConfig);
await dbManager.connect('primary');

// Définition de modèle
class User extends BaseModel {
  static tableName = 'users';
  static relations = {
    posts: { type: 'hasMany', model: 'Post' }
  };
}

// Requêtes fluides
const users = await User
  .select('id', 'username', 'email')
  .where('status', 'active')
  .with('posts')
  .orderBy('username')
  .paginate(1, 10);

// Transactions
await dbManager.transaction(async (trx) => {
  const user = await User.create({ username: 'john' }, { transaction: trx });
  await user.posts().create({ title: 'First post' }, { transaction: trx });
});

// Migrations
const migrator = new MigrationRunner(dbManager);
await migrator.run();

// Cache
const cache = new QueryCache(redisConnection);
const cachedUsers = await cache.remember('active_users', 3600, () => {
  return User.where('status', 'active').get();
});

// Recherche
const searchEngine = new SearchEngine(dbManager);
const results = await searchEngine.search('john developer', {
  models: ['User', 'Post'],
  facets: ['role', 'status'],
  limit: 20
});
*/
