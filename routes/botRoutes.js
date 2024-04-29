const express = require('express');
const botController = require('../controllers/botController');

// Crée un routeur express
const router = express.Router();

// Route pour afficher la page d'accueil de l'interface utilisateur du bot
router.get('/', (req, res) => {
  // Rend le fichier HTML de l'interface utilisateur du bot
  res.sendFile('index.html', { root: __dirname + '/../public' });
});

// Route pour démarrer le bot
router.post('/start', async (req, res) => {
  try {
    // Démarrer le bot en appelant la fonction startBot du contrôleur
    await botController.startBot();

    // Répondre avec un message de succès
    res.status(200).json({ message: 'Bot démarré avec succès.' });
  } catch (error) {
    // Si une erreur survient, répondre avec un code d'erreur et un message d'erreur
    res.status(500).json({ message: 'Une erreur est survenue lors du démarrage du bot.', error: error.message });
  }
});

// Exporte le routeur pour pouvoir l'utiliser dans d'autres fichiers
module.exports = router;
