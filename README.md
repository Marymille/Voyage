📸 Mon Voyage
Bienvenue sur Mon Voyage, un projet web interactif combinant carte dynamique et galerie d'images pour retracer mes découvertes autour du monde 🌍 !

"Explorez, cliquez, découvrez, admirez."

📚 Table des matières

🚀 Aperçu du projet
📂 Structure du projet
⚙️ Technologies utilisées
📜 Scripts utilisés
🛠️ Installation locale
📌 Fonctionnalités à venir
✨ Auteur

🚀 Aperçu du projet
Carte interactive avec Leaflet.js.

Galerie dynamique selon la position sélectionnée sur la carte.

Lightbox pour visionner les images avec navigation par flèches.

Responsive (adapté mobiles et tablettes).

Navigation fluide entre carte et galerie.

📂 Structure du projet
bash
Copier
Modifier
/ma-carte
│
├── index.html             # Page d'accueil
├── carte.html             # Carte principale
├── carte_leaflet.html     # Composant de la carte Leaflet
├── galerie.html           # Galerie dynamique
├── histoire.html          # Page "Histoire"
├── transport.html         # Page "Transport"
├── style.css              # Feuille de style personnalisée
├── /images                # Images triées par dossier de coordonnées
│   └── Lat X Lon Y/
│       ├── resized/       # Images redimensionnées
│       └── originaux/     # Images haute qualité
└── /scripts (optionnel)    # Scripts additionnels
⚙️ Technologies utilisées
HTML5 / CSS3 (structure et design responsive)

JavaScript :

Fetch API pour charger les images

DOM API pour manipuler les éléments

Leaflet.js pour la carte interactive

Bootstrap 5 pour le responsive design

Lightbox2 pour l'affichage des galeries

📜 Scripts utilisés
🗺️ Carte Leaflet (carte_leaflet.html)
Initialisation d'une carte centrée sur une région donnée.

Ajout de marqueurs (points d'intérêt) avec L.marker.

Chaque marqueur est cliquable pour ouvrir la galerie associée.

javascript
Copier
Modifier
L.marker([latitude, longitude])
  .addTo(map)
  .bindPopup('<a href="galerie.html?lat=xx&lon=yy">Voir les photos</a>');
🖼️ Chargement dynamique d'images (galerie.html)
Lecture de l'URL (paramètres lat et lon).

Fetch du dossier correspondant sur le serveur (resized/).

Affichage dans la galerie :

Paysages : pour les images en format paysage.

Portraits : pour les images en format portrait.

Lightbox gère la navigation avec flèches entre les photos.

javascript
Copier
Modifier
const params = new URLSearchParams(window.location.search);
const lat = params.get("lat");
const lon = params.get("lon");
🛠️ Installation locale
Clone ce dépôt :

bash
Copier
Modifier
git clone https://github.com/ton-pseudo/mon-voyage.git
Lance un serveur local (PHP ou VS Code + Live Server) :

bash
Copier
Modifier
php -S localhost:8000
Accède à :

bash
Copier
Modifier
http://localhost:8000/carte.html
Note : Assurez-vous que le serveur local permette l'accès aux fichiers pour que fetch() fonctionne !

📌 Fonctionnalités à venir
🔍 Système de recherche d'un lieu par nom.

📥 Téléchargement direct des photos depuis la galerie.

🔄 Animations de transition entre les pages.

🗺️ Ajout de clustering des marqueurs sur la carte.

✨ Auteur
Réalisé avec ❤️ par Marymille

LinkedIn (à personnaliser)

Portfolio (optionnel)

Email

📎 Liens utiles
Leaflet Documentation

Bootstrap Documentation

Lightbox2 Documentation

