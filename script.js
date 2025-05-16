document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.petite-image');  // Sélectionne toutes les images
    const lightbox = document.querySelector('.lightbox');  // La div lightbox
    const lightboxImage = lightbox.querySelector('img');  // L'image dans la lightbox
    const lightboxLegende = lightbox.querySelector('.lightbox-legende');  // La légende dans la lightbox
    const closeBtn = lightbox.querySelector('.fermer');  // Bouton fermer
    const prevBtn = lightbox.querySelector('.precedent');  // Flèche précédent
    const nextBtn = lightbox.querySelector('.suivant');  // Flèche suivant
    
    let currentImageIndex = 0;
  
    // Fonction pour ouvrir la lightbox
    function openLightbox(index) {
      lightbox.style.display = 'flex';
      lightboxImage.src = images[index].src;
      lightboxLegende.textContent = images[index].alt;  // Utilise l'attribut alt comme légende
      currentImageIndex = index;
    }
  
    // Fonction pour fermer la lightbox
    function closeLightbox() {
      lightbox.style.display = 'none';
    }
  
    // Fonction pour changer l'image à gauche
    function prevImage() {
      currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
      lightboxImage.src = images[currentImageIndex].src;
      lightboxLegende.textContent = images[currentImageIndex].alt;
    }
  
    // Fonction pour changer l'image à droite
    function nextImage() {
      currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
      lightboxImage.src = images[currentImageIndex].src;
      lightboxLegende.textContent = images[currentImageIndex].alt;
    }
  
    // Ajouter un événement sur chaque image pour ouvrir la lightbox
    images.forEach((image, index) => {
      image.addEventListener('click', function() {
        openLightbox(index);
      });
    });
  
    // Ajouter l'événement pour fermer la lightbox
    closeBtn.addEventListener('click', closeLightbox);
  
    // Ajouter les événements pour les flèches
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
  
    // Fermer la lightbox si on clique à l'extérieur de l'image
    lightbox.addEventListener('click', function(event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  });
  