// Importe le modèle JobModel
const JobModel = require('../models/jobModel');

// Service pour extraire les données des sites web
const crawlerService = {
  // Fonction pour extraire les données des sites web
  extractJobData: async () => {
    try {
      // Exemple de logique pour extraire les données des sites web
      // Ici, tu pourrais utiliser Puppeteer pour naviguer sur les sites web et extraire les données
      const jobData = [
        { title: 'Développeur Web', company: 'Company A', location: 'Paris' },
        { title: 'Ingénieur Logiciel', company: 'Company B', location: 'Lyon' },
        { title: 'Data Scientist', company: 'Company C', location: 'Marseille' }
      ];

      // Crée une instance de JobModel pour chaque offre d'emploi
      const jobObjects = jobData.map(job => new JobModel(job.title, job.company, job.location));

      return jobObjects;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de l\'extraction des données :', error);
    }
  }
};

// Exporte le service pour pouvoir l'utiliser dans d'autres fichiers
module.exports = crawlerService;
