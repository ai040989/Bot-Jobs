const express = require('express');
const botRoutes = require('./routes/botRoutes');

const app = express();

// Définit le dossier des fichiers statiques (CSS, JavaScript, etc.)
app.use(express.static('public'));

// Utilise les routes du bot
app.use('/bot', botRoutes);

// Autres configurations de l'application Express

// Lance le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le serveur est en écoute sur le port ${PORT}`);
});



