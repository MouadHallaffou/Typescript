// ===============================
// Exercice 1: Modules et Exports
// ===============================

console.log("📦 Exercice 1: Modules et Exports Node.js");
console.log("==========================================");

console.log("\n📚 Les modules Node.js comprennent:");
console.log("• CommonJS (require/module.exports) - traditionnel");
console.log("• ES Modules (import/export) - moderne");
console.log("• Modules built-in de Node.js");
console.log("• Création et organisation de modules personnalisés");

// TODO 1: Module CommonJS basique
console.log("\n✅ Exercice 1: Modules CommonJS");

// Exemple de module CommonJS (à créer dans un fichier séparé)
// math-utils.js
/*
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) throw new Error('Division par zéro');
  return a / b;
};

// Export nommé
exports.add = add;
exports.subtract = subtract;

// Export par défaut
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  PI: 3.14159,
  version: '1.0.0'
};
*/

// TODO: Créer un module math-utils.js et l'importer ici
try {
  // const mathUtils = require('./utils/math-utils');
  // console.log("➕ Addition 5 + 3 =", mathUtils.add(5, 3));
  // console.log("➖ Soustraction 10 - 4 =", mathUtils.subtract(10, 4));
  // console.log("✖️ Multiplication 6 × 7 =", mathUtils.multiply(6, 7));
  // console.log("➗ Division 15 ÷ 3 =", mathUtils.divide(15, 3));
  // console.log("🔢 PI =", mathUtils.PI);

  console.log("⏳ Créez le module math-utils.js dans ./utils/");
} catch (error) {
  console.log("❌ Module non trouvé:", error.message);
}

// TODO 2: ES Modules
console.log("\n✅ Exercice 2: ES Modules");

// Exemple de module ES6 (à créer dans un fichier séparé)
// string-utils.mjs
/*
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const reverseString = (str) => str.split('').reverse().join('');

export const countWords = (str) => str.trim().split(/\s+/).length;

export const slugify = (str) => 
  str.toLowerCase()
     .replace(/[^a-z0-9]+/g, '-')
     .replace(/^-|-$/g, '');

export default {
  capitalize,
  reverseString,
  countWords,
  slugify,
  randomString: (length = 10) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
};
*/

// TODO: Créer un module string-utils.mjs et l'importer ici
try {
  // import stringUtils, { capitalize, reverseString } from './utils/string-utils.mjs';
  // const testString = "hello world";
  // console.log("🔤 Original:", testString);
  // console.log("🔡 Capitalized:", capitalize(testString));
  // console.log("🔄 Reversed:", reverseString(testString));
  // console.log("📊 Word count:", stringUtils.countWords(testString));
  // console.log("🐌 Slugified:", stringUtils.slugify("Hello World! 123"));
  // console.log("🎲 Random:", stringUtils.randomString(8));

  console.log("⏳ Créez le module string-utils.mjs dans ./utils/");
} catch (error) {
  console.log("❌ Module ES6 non trouvé:", error.message);
}

// TODO 3: Modules built-in Node.js
console.log("\n✅ Exercice 3: Modules built-in");

// Modules de base Node.js
import { fileURLToPath } from "url";
import { dirname, join, extname, basename } from "path";
import { readdir, stat } from "fs/promises";
import { createHash } from "crypto";
import { platform, arch, version } from "os";

// Info système
console.log("💻 Informations système:");
console.log(`   Plateforme: ${platform()}`);
console.log(`   Architecture: ${arch()}`);
console.log(`   Version Node.js: ${process.version}`);

// Chemins et fichiers
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("\n📁 Informations sur les chemins:");
console.log(`   Fichier actuel: ${basename(__filename)}`);
console.log(`   Répertoire: ${__dirname}`);
console.log(`   Extension: ${extname(__filename)}`);

// TODO 4: Explorateur de fichiers
console.log("\n✅ Exercice 4: Explorateur de fichiers");

async function exploreDirectory(dirPath) {
  try {
    console.log(`\n📂 Exploration de: ${dirPath}`);
    const files = await readdir(dirPath);

    for (const file of files) {
      const filePath = join(dirPath, file);
      const stats = await stat(filePath);

      const icon = stats.isDirectory() ? "📁" : "📄";
      const size = stats.isFile() ? `(${stats.size} bytes)` : "";
      const modified = stats.mtime.toLocaleDateString();

      console.log(`   ${icon} ${file} ${size} - ${modified}`);
    }
  } catch (error) {
    console.log(`❌ Erreur lecture répertoire: ${error.message}`);
  }
}

// Explorer le répertoire actuel
exploreDirectory(__dirname);

// TODO 5: Utilitaires crypto
console.log("\n✅ Exercice 5: Cryptographie");

function hashString(input, algorithm = "sha256") {
  const hash = createHash(algorithm);
  hash.update(input);
  return hash.digest("hex");
}

function generateId() {
  return createHash("sha1")
    .update(Date.now().toString() + Math.random().toString())
    .digest("hex")
    .substring(0, 8);
}

const testString = "Hello, Node.js!";
console.log("🔐 Hash SHA256:", hashString(testString));
console.log("🔐 Hash MD5:", hashString(testString, "md5"));
console.log("🆔 ID généré:", generateId());

// TODO 6: Module de configuration
console.log("\n✅ Exercice 6: Gestion de configuration");

// config.js
/*
const config = {
  development: {
    port: 3000,
    database: {
      host: 'localhost',
      port: 5432,
      name: 'myapp_dev'
    },
    logging: {
      level: 'debug',
      file: './logs/dev.log'
    }
  },
  production: {
    port: process.env.PORT || 8080,
    database: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      name: process.env.DB_NAME || 'myapp_prod'
    },
    logging: {
      level: 'error',
      file: './logs/prod.log'
    }
  },
  test: {
    port: 3001,
    database: {
      host: 'localhost',
      port: 5432,
      name: 'myapp_test'
    },
    logging: {
      level: 'silent',
      file: null
    }
  }
};

const env = process.env.NODE_ENV || 'development';

module.exports = config[env];
*/

// TODO: Créer config.js et l'utiliser
try {
  // const config = require('./config/config');
  // console.log("⚙️ Configuration actuelle:", config);
  // console.log("🌍 Environnement:", process.env.NODE_ENV || 'development');

  console.log("⏳ Créez le module config.js dans ./config/");
} catch (error) {
  console.log("❌ Configuration non trouvée:", error.message);
}

// TODO 7: Module de logging
console.log("\n✅ Exercice 7: Module de logging");

// logger.js
/*
const fs = require('fs').promises;
const path = require('path');

class Logger {
  constructor(options = {}) {
    this.level = options.level || 'info';
    this.file = options.file;
    this.levels = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
    };
  }

  async log(level, message, meta = {}) {
    if (this.levels[level] < this.levels[this.level]) {
      return;
    }

    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level: level.toUpperCase(),
      message,
      ...meta
    };

    const logString = JSON.stringify(logEntry);
    
    // Console output
    console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`);

    // File output
    if (this.file) {
      try {
        await fs.mkdir(path.dirname(this.file), { recursive: true });
        await fs.appendFile(this.file, logString + '\n');
      } catch (error) {
        console.error('Erreur écriture log:', error.message);
      }
    }
  }

  debug(message, meta) { return this.log('debug', message, meta); }
  info(message, meta) { return this.log('info', message, meta); }
  warn(message, meta) { return this.log('warn', message, meta); }
  error(message, meta) { return this.log('error', message, meta); }
}

module.exports = Logger;
*/

// TODO: Créer logger.js et l'utiliser
try {
  // const Logger = require('./utils/logger');
  // const logger = new Logger({ level: 'debug', file: './logs/app.log' });

  // logger.debug('Message de debug');
  // logger.info('Application démarrée');
  // logger.warn('Attention: mémoire faible');
  // logger.error('Erreur critique', { code: 500, stack: 'Stack trace...' });

  console.log("⏳ Créez le module logger.js dans ./utils/");
} catch (error) {
  console.log("❌ Logger non trouvé:", error.message);
}

// TODO 8: Pattern Singleton
console.log("\n✅ Exercice 8: Pattern Singleton");

// database.js (Singleton)
/*
class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    
    this.connection = null;
    this.isConnected = false;
    Database.instance = this;
  }

  async connect(connectionString) {
    if (this.isConnected) {
      console.log('Connexion déjà établie');
      return this.connection;
    }

    console.log('Connexion à la base de données...');
    // Simulation connexion
    this.connection = {
      host: 'localhost',
      port: 5432,
      connected: true,
      connectionString
    };
    this.isConnected = true;
    
    return this.connection;
  }

  async disconnect() {
    if (!this.isConnected) return;
    
    console.log('Fermeture connexion base de données');
    this.connection = null;
    this.isConnected = false;
  }

  getConnection() {
    return this.connection;
  }

  isConnectedToDb() {
    return this.isConnected;
  }
}

module.exports = new Database(); // Export de l'instance
*/

// TODO: Créer database.js et tester le singleton
try {
  // const db1 = require('./utils/database');
  // const db2 = require('./utils/database');

  // console.log('🔗 Instances identiques:', db1 === db2);
  // await db1.connect('postgresql://localhost/myapp');
  // console.log('💾 État connexion DB1:', db1.isConnectedToDb());
  // console.log('💾 État connexion DB2:', db2.isConnectedToDb());

  console.log("⏳ Créez le module database.js (singleton) dans ./utils/");
} catch (error) {
  console.log("❌ Database singleton non trouvé:", error.message);
}

// INFORMATIONS UTILES
console.log("\n📋 CONCEPTS CLÉS:");
console.log("✅ require() vs import - Différences et usage");
console.log("✅ module.exports vs exports - Export de modules");
console.log("✅ __dirname et __filename - Chemins dans CommonJS");
console.log("✅ import.meta.url - Équivalent ES modules");
console.log("✅ Modules built-in - fs, path, crypto, os, etc.");
console.log("✅ Patterns - Singleton, Factory, Module");

// BONNES PRATIQUES
console.log("\n📋 BONNES PRATIQUES:");
console.log("✅ Utilisez ES modules pour nouveau code");
console.log("✅ Organisez vos modules par fonctionnalité");
console.log("✅ Évitez les dépendances circulaires");
console.log("✅ Documentez vos exports");
console.log("✅ Utilisez des noms de fichiers descriptifs");

console.log("\n🎯 Exercice terminé - Créez les modules manquants !");
