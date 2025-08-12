#!/usr/bin/env node

// =========================================
// SCRIPT DE DÉMARRAGE - Module JavaScript ES6+
// =========================================

const path = require('path');
const fs = require('fs');

console.log('🚀 BIENVENUE DANS LE MODULE JAVASCRIPT ES6+');
console.log('===========================================');

console.log('\n📁 STRUCTURE DU MODULE:');
console.log('├── exercices/     (vos fichiers de travail)');
console.log('├── solutions/     (corrigés à consulter après)');
console.log('├── tests/         (tests automatiques)');
console.log('└── start.js       (ce fichier)');

console.log('\n📚 EXERCICES DISPONIBLES:');

const exercicesDir = path.join(__dirname, 'exercices');
if (fs.existsSync(exercicesDir)) {
  const exercices = fs.readdirSync(exercicesDir)
    .filter(file => file.endsWith('.js'))
    .sort();
  
  exercices.forEach((file, index) => {
    const exerciseNumber = index + 1;
    const title = file.replace('.js', '').replace(/^\d+-/, '').replace(/-/g, ' ');
    console.log(`${exerciseNumber}. ${title} (${file})`);
  });
}

console.log('\n🎯 COMMENT COMMENCER:');
console.log('1. Ouvrez le premier exercice:');
console.log('   code exercices/01-variables-scope.js');
console.log('');
console.log('2. Lancez l\'exercice pour voir les instructions:');
console.log('   node exercices/01-variables-scope.js');
console.log('');
console.log('3. Modifiez le fichier et implémentez vos solutions');
console.log('');
console.log('4. Testez vos solutions:');
console.log('   node tests/test-runner.js');
console.log('');
console.log('5. Consultez les solutions (après avoir essayé):');
console.log('   node solutions/01-variables-scope.js');

console.log('\n⚡ COMMANDES RAPIDES:');
console.log('npm run ex1     - Lance exercice 1');
console.log('npm run ex2     - Lance exercice 2');
console.log('npm run test    - Lance tous les tests');
console.log('npm run sol1    - Montre solution 1');

console.log('\n📋 CONSEILS:');
console.log('• Lisez bien les commentaires dans chaque exercice');
console.log('• Testez votre code avant de passer au suivant');
console.log('• Ne regardez les solutions qu\'après avoir essayé');
console.log('• Utilisez console.log pour débugger');

console.log('\n🔥 PRÊT À COMMENCER ?');
console.log('Lancez votre premier exercice maintenant !');

// Si un argument est passé, lancer l'exercice correspondant
const arg = process.argv[2];
if (arg) {
  const exerciseNumber = parseInt(arg);
  if (exerciseNumber >= 1 && exerciseNumber <= 15) {
    const exerciseFile = path.join(exercicesDir, `${exerciseNumber.toString().padStart(2, '0')}-*.js`);
    console.log(`\n🚀 Lancement de l'exercice ${exerciseNumber}...`);
    // Ici on pourrait lancer l'exercice automatiquement
  }
}
