# 📸 Mon Voyage

Bienvenue sur **Mon Voyage**, un projet web interactif combinant carte dynamique et galerie d'images pour retracer mes découvertes autour du monde 🌍 !

_"Explorez, cliquez, découvrez, admirez."_

---

## 📚 Table des matières

- [🚀 Aperçu du projet](#-aperçu-du-projet)
- [📂 Structure du projet](#-structure-du-projet)
- [⚙️ Technologies utilisées](#️-technologies-utilisées)
- [📜 Scripts utilisés](#-scripts-utilisés)
- [🛠️ Installation locale](#️-installation-locale)
- [📌 Fonctionnalités à venir](#-fonctionnalités-à-venir)
- [✨ Auteur](#-auteur)
- [📎 Liens utiles](#-liens-utiles)

---

## 🚀 Aperçu du projet

- **Carte interactive** avec [Leaflet.js](https://leafletjs.com/).
- **Galerie dynamique** selon la position sélectionnée sur la carte.
- **Lightbox** pour visionner les images en grand et naviguer avec des flèches.
- **Responsive** (adapté mobiles et tablettes).
- **Navigation fluide** entre carte et galerie.

---

## 📂 Structure du projet

```bash
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
HTML5

CSS3

JavaScript (Vanilla)

Bootstrap 5

Leaflet.js

Lightbox2

📜 Scripts utilisés
🗺️ Carte Leaflet (carte_leaflet.html)
Initialisation d'une carte centrée sur une région donnée.

Ajout de marqueurs (points d'intérêt) avec L.marker.

Chaque marqueur est cliquable pour ouvrir la galerie correspondante.

javascript
Copier
Modifier
L.marker([latitude, longitude])
  .addTo(map)
  .bindPopup('<a href="galerie.html?lat=xx&lon=yy">Voir les photos</a>');
🖼️ Chargement dynamique d'images (galerie.html)
Lecture des paramètres lat et lon depuis l'URL.

Requête fetch() pour récupérer les images du dossier correspondant.

Ajout des images :

Section Paysages (format paysage)

Section Portraits (format portrait)

Ouverture d'une Lightbox pour afficher l'image HD et naviguer entre les images avec des flèches.

javascript
Copier
Modifier
const params = new URLSearchParams(window.location.search);
const lat = params.get("lat");
const lon = params.get("lon");
// Fetch images and display them dynamically
🛠️ Installation locale
Clone ce dépôt :

bash
Copier
Modifier
git clone https://github.com/ton-pseudo/mon-voyage.git
Lance un serveur local (PHP, Python, ou extension "Live Server" sur VS Code) :

Avec PHP :

bash
Copier
Modifier
php -S localhost:8000
Accède au projet :

bash
Copier
Modifier
http://localhost:8000/carte.html
Attention : Pour que fetch() fonctionne, il faut être en mode serveur (pas juste ouvrir un fichier local).

📌 Fonctionnalités à venir
🔍 Barre de recherche sur la carte pour filtrer les lieux

📥 Télécharger une photo depuis la galerie

🖼️ Voir les informations EXIF d'une photo

🌐 Mode sombre (Dark Mode)

✨ Auteur
Réalisé avec ❤️ par Marymille


📎 Liens utiles
Documentation Leaflet

Documentation Bootstrap

Lightbox2 Documentation

MDN Web Docs
