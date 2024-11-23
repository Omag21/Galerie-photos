// Fonction pour initialiser la page
function initialisePage() {
    alert("La page a été rechargée !");
}

// Fonction pour ajouter l'attribut tabindex
function addTabFocus(elements) {
    elements.forEach((element, index) => {
        element.setAttribute("tabindex", index + 1); // Attribue un tabindex séquentiel
        console.log(`Tabindex ajouté à l'élément ${index + 1}`);
    });
}

// Ajout de l'écouteur `onload` sur la fenêtre
window.onload = initialisePage;

// Gestion des événements une fois le DOM complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("mainImage");
    const imageAltText = document.getElementById("imageAltText");
    const imageContainer = document.getElementById("image"); // Conteneur de l'image principale
    const previews = document.querySelectorAll(".preview");

    // Ajouter les attributs tabindex pour naviguer avec Tab
    addTabFocus(previews);

    // Fonction pour afficher une image
    function afficherImage(preview) {
        console.log(`Affichage de l'image : ${preview.alt}`);
        mainImage.src = preview.src;
        mainImage.alt = preview.alt;
        imageAltText.textContent = preview.alt;
        mainImage.style.display = "block";
        imageAltText.style.display = "block";
        document.querySelector("h2").style.display = "none"; // Masquer le texte par défaut
    }

    // Fonction pour cacher l'image principale
    function cacherImage() {
        console.log("Réinitialisation de l'image principale");
        mainImage.style.display = "none";
        imageAltText.style.display = "none";
        document.querySelector("h2").style.display = "block"; // Afficher le texte par défaut
    }

    // Fonction pour changer le style au focus
    function changeStyleOnFocus() {
        imageContainer.style.backgroundColor = "white";
        imageContainer.style.color = "black";
        this.style.border = "8px solid yellow";
    }

    // Fonction pour réinitialiser le style au blur
    function resetStyleOnBlur() {
        imageContainer.style.backgroundColor = "";
        imageContainer.style.color = "";
        this.style.border = "";
    }

    // Attacher les événements à chaque image prévisualisée
    previews.forEach(preview => {
        preview.addEventListener("mouseover", () => afficherImage(preview));
        preview.addEventListener("mouseout", cacherImage);
        preview.addEventListener("focus", () => {
            changeStyleOnFocus.call(preview);
            afficherImage(preview);
        });
        preview.addEventListener("blur", () => {
            resetStyleOnBlur.call(preview);
            cacherImage();
        });
    });
});
