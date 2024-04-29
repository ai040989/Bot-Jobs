// Modèle pour représenter les offres d'emploi
class JobModel {
    constructor(title, company, location) {
      this.title = title;
      this.company = company;
      this.location = location;
    }
  
    // Méthode pour afficher les détails de l'offre d'emploi
    displayDetails() {
      console.log(`Titre : ${this.title}`);
      console.log(`Entreprise : ${this.company}`);
      console.log(`Lieu : ${this.location}`);
    }
  
    // Méthode pour postuler à l'offre d'emploi
    apply() {
      console.log(`Postulation pour l'offre d'emploi : ${this.title}`);
      // Ajoutez ici la logique pour postuler à l'offre d'emploi
    }
  }
  
  // Exporte le modèle pour pouvoir l'utiliser dans d'autres fichiers
  module.exports = JobModel;
  