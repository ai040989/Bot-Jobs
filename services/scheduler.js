const cron = require('node-cron');
const botController = require('../controllers/botController');

// Planifie une tâche pour démarrer le bot tous les jours à minuit
cron.schedule('0 0 * * *', async () => {
  try {
    // Démarrer le bot
    await botController.startBot();
    console.log('Bot démarré avec succès.');
  } catch (error) {
    console.error('Une erreur est survenue lors du démarrage du bot :', error);
  }
});
