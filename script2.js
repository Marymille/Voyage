document.addEventListener('DOMContentLoaded', function() {
    // Chargement des données JSON à partir de l'API locale
    fetch('http://localhost/ma-carte/cartes_metadata.json')
        .then(response => response.json())  // Parsing des données JSON
        .then(data => {
            let galerieDiv = document.getElementById('galerie');
            
            // Vide la galerie avant d'ajouter de nouvelles cartes
            galerieDiv.innerHTML = '';

            // Limite le nombre de cartes affichées à 4 (vous pouvez ajuster ce nombre ici)
            data.slice(0, 8).forEach(carte => {
                let carteElement = document.createElement('div');
                carteElement.classList.add('card-custom'); // Ajout de la classe pour styliser les cartes
                carteElement.innerHTML = `
                    <div class="card">
                        <img src="${carte.image}" class="card-img-top" alt="${carte.title}" 
                            onClick="openModal('${carte.image}', '${carte.title}', '${carte.author}', '${carte.date}', '${carte.subject}', '${carte.publisher}', '${carte.language}', '${carte.scale}', '${carte.link}', '${carte.description}')"
                            onError="this.onerror=null; this.src='fallback-image.jpeg'"> <!-- Fallback image en cas d'erreur -->
                        <div class="card-body">
                            <h5 class="card-title">${carte.title}</h5>
                            <p class="card-text">${carte.author} - ${carte.date}</p>
                            <a href="${carte.link}" class="btn btn-primary" target="_blank">Voir la carte</a>
                        </div>
                    </div>
                `;
                galerieDiv.appendChild(carteElement); // Ajouter l'élément de carte au conteneur
            });
        })
        .catch(error => {
            console.error("Erreur de chargement des cartes : ", error); // En cas d'erreur, afficher un message dans la console
        });
});

// Fonction pour ouvrir le modal avec l'image agrandie et toutes les informations
function openModal(imageSrc, title, author, date, subject, publisher, language, scale, link, description) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const modalDesc = document.getElementById('modalDesc');
    
    // Mettre à jour l'image dans le modal
    modalImg.src = imageSrc;
    
    // Mettre à jour la description détaillée dans le modal
    modalDesc.innerHTML = `
        <h5>${title}</h5>
        <p><strong>Auteur:</strong> ${author}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Éditeur:</strong> ${publisher}</p>
        <p><strong>Langue:</strong> ${language}</p>
        <p><strong>Échelle:</strong> ${scale}</p>
        <p><strong>Description:</strong> ${description}</p>
        <a href="${link}" class="btn btn-primary" target="_blank">Voir la carte sur Gallica</a>
    `;
    
    // Afficher le modal avec l'image agrandie
    modal.style.display = 'flex'; // Utilisation de 'flex' pour un affichage centré
}

// Fermer le modal lorsque l'on clique sur le bouton de fermeture
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none'; // Cacher le modal
});

// Fermer le modal en cliquant en dehors de la zone modal (facultatif)
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none'; // Fermer le modal si on clique en dehors de la boîte modale
    }
});
