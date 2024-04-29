// Récupère une référence à la balise formulaire dans le HTML
const searchForm = document.getElementById('search-form');

// Ajoute un gestionnaire d'événement pour le soumission du formulaire
searchForm.addEventListener('submit', async (event) => {
  // Empêche le comportement par défaut du formulaire qui recharge la page
  event.preventDefault();

  // Récupère la valeur du champ de recherche
  const keyword = document.getElementById('search-keyword').value;

  // Envoie une requête au serveur pour effectuer la recherche
  try {
    const response = await fetch(`/search?keyword=${keyword}`);
    const data = await response.json();

    // Affiche les résultats de la recherche dans l'interface utilisateur
    displaySearchResults(data);
  } catch (error) {
    console.error('Une erreur est survenue lors de la recherche :', error);
  }
});

// Fonction pour afficher les résultats de la recherche dans l'interface utilisateur
function displaySearchResults(results) {
  const jobListings = document.getElementById('job-listings');

  // Efface les résultats précédents
  jobListings.innerHTML = '';

  // Ajoute chaque résultat à la liste des offres d'emploi
  results.forEach(result => {
    const listItem = document.createElement('li');
    listItem.textContent = result.title;
    jobListings.appendChild(listItem);
  });
}
