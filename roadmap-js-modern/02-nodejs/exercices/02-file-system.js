// ====================================
// Exercice 2: Système de fichiers (fs)
// ====================================

console.log("📁 Exercice 2: Système de fichiers avec Node.js");
console.log("===============================================");

console.log("\n📚 Le module `fs` (File System) permet:");
console.log("• Lire et écrire des fichiers");
console.log("• Créer et supprimer des répertoires");
console.log("• Manipuler le système de fichiers");
console.log("• Surveiller les changements de fichiers");
console.log("• Gérer les permissions et métadonnées");

// TODO 1: Opérations de fichiers de base
console.log("\n📝 TODO 1: Créez des fonctions pour:");
console.log("• readTextFile(filePath) - Lire un fichier texte");
console.log("• writeTextFile(filePath, content) - Écrire dans un fichier");
console.log("• appendToFile(filePath, content) - Ajouter du contenu");
console.log("• deleteFile(filePath) - Supprimer un fichier");
console.log("• fileExists(filePath) - Vérifier l'existence");

// TODO 2: Gestion des répertoires
console.log("\n📁 TODO 2: Implémentez des fonctions pour:");
console.log("• createDirectory(dirPath) - Créer un répertoire");
console.log("• listDirectory(dirPath) - Lister le contenu");
console.log("• removeDirectory(dirPath) - Supprimer un répertoire");
console.log("• getDirectoryStats(dirPath) - Obtenir les statistiques");

// TODO 3: Lecture/écriture JSON
console.log("\n📋 TODO 3: Créez des utilitaires JSON:");
console.log("• readJsonFile(filePath) - Lire et parser un JSON");
console.log("• writeJsonFile(filePath, data) - Écrire un objet en JSON");
console.log(
  "• updateJsonFile(filePath, updates) - Mettre à jour partiellement"
);
console.log("• validateJsonFile(filePath, schema) - Valider la structure");

// TODO 4: Surveillance de fichiers
console.log("\n👀 TODO 4: Implémentez un système de surveillance:");
console.log("• FileWatcher class - Surveiller les changements");
console.log("• Émettre des événements pour: created, modified, deleted");
console.log("• Gérer les filtres par extension");
console.log("• Debounce pour éviter les événements multiples");

// TODO 5: Gestionnaire de logs
console.log("\n📜 TODO 5: Créez un système de logs basé sur fs:");
console.log("• LogManager class - Gérer les fichiers de logs");
console.log("• Rotation automatique par taille ou date");
console.log("• Compression des anciens logs");
console.log("• Nettoyage automatique des logs expirés");

// TODO 6: Sauvegarde et archivage
console.log("\n💾 TODO 6: Développez un système de sauvegarde:");
console.log("• BackupManager class - Créer des sauvegardes");
console.log("• Compression ZIP des dossiers");
console.log("• Sauvegarde incrémentale basée sur les dates");
console.log("• Restauration depuis une sauvegarde");

// TODO 7: Analyseur de fichiers
console.log("\n🔍 TODO 7: Construisez un analyseur de fichiers:");
console.log("• analyzeDirectory(path) - Analyser un répertoire");
console.log("• Calculer la taille totale et nombre de fichiers");
console.log("• Grouper par extensions");
console.log("• Détecter les doublons (même contenu)");
console.log("• Identifier les gros fichiers");

// TODO 8: Traitement par chunks
console.log("\n🔄 TODO 8: Implémentez le traitement par chunks:");
console.log("• processLargeFile(filePath, processor) - Traiter par chunks");
console.log("• splitFile(filePath, chunkSize) - Diviser un gros fichier");
console.log("• mergeFiles(fileList, outputPath) - Fusionner des fichiers");
console.log("• calculateFileHash(filePath) - Calculer le hash MD5/SHA256");

// Structure de données d'exemple
console.log("\n📊 DONNÉES D'EXEMPLE:");

// Exemple de configuration de surveillance
const watcherConfig = {
  directories: ["./src", "./config"],
  extensions: [".js", ".json", ".txt"],
  ignorePatterns: ["node_modules", ".git", "*.tmp"],
  debounceTime: 300,
  events: ["change", "add", "unlink"],
};

console.log(
  "🔧 Configuration surveillance:",
  JSON.stringify(watcherConfig, null, 2)
);

// Exemple de structure de log
const logEntry = {
  timestamp: new Date().toISOString(),
  level: "info",
  message: "Fichier traité avec succès",
  metadata: {
    fileName: "data.json",
    fileSize: 1024,
    processingTime: 150,
  },
};

console.log("📝 Entrée de log:", JSON.stringify(logEntry, null, 2));

// Exemple de rapport d'analyse
const analysisReport = {
  path: "./project",
  totalFiles: 1250,
  totalSize: "45.6 MB",
  extensions: {
    ".js": { count: 340, size: "12.3 MB" },
    ".json": { count: 25, size: "2.1 MB" },
    ".md": { count: 15, size: "450 KB" },
    ".png": { count: 80, size: "15.2 MB" },
  },
  largestFiles: [
    { name: "bundle.js", size: "3.2 MB" },
    { name: "data.json", size: "2.8 MB" },
  ],
  duplicates: [{ files: ["logo.png", "assets/logo.png"], size: "150 KB" }],
};

console.log("📊 Rapport d'analyse:", JSON.stringify(analysisReport, null, 2));

// Points d'apprentissage clés
console.log("\n🎯 CONCEPTS CLÉS À MAÎTRISER:");
console.log("✅ fs.promises vs callbacks vs sync");
console.log("✅ Streams pour les gros fichiers");
console.log("✅ Path manipulation avec le module path");
console.log("✅ Error handling pour les opérations I/O");
console.log("✅ File descriptors et permissions");
console.log("✅ Performance et gestion mémoire");
console.log("✅ Cross-platform compatibility");
console.log("✅ Security considerations");

// Outils et bonnes pratiques
console.log("\n🛠️ OUTILS ET BONNES PRATIQUES:");
console.log("📦 Modules recommandés: fs-extra, chokidar, fast-glob");
console.log("🔒 Validation des chemins et sanitization");
console.log("⚡ Utilisation des streams pour les performances");
console.log("🧪 Tests avec des fichiers temporaires");
console.log("📝 Logging détaillé des opérations I/O");
console.log("🚫 Éviter les opérations sync en production");

console.log("\n🚀 Commencez par le TODO 1 et progressez étape par étape !");
console.log("💡 Testez chaque fonction avec différents cas d'usage.");

/* 
EXEMPLES D'UTILISATION ATTENDUS:

// Lecture de fichier
const content = await readTextFile('./data.txt');

// Écriture avec gestion d'erreur
await writeTextFile('./output.txt', 'Hello World')
  .catch(err => console.error('Erreur écriture:', err));

// Surveillance avec callback
const watcher = new FileWatcher('./src');
watcher.on('change', (filePath) => {
  console.log('Fichier modifié:', filePath);
});

// Analyse de répertoire
const report = await analyzeDirectory('./project');
console.log(`${report.totalFiles} fichiers, ${report.totalSize}`);

// Sauvegarde
const backup = new BackupManager('./data', './backups');
await backup.createBackup('daily-backup');
*/
