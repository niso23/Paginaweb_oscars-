const starButtons = document.querySelectorAll(".star-button");

starButtons.forEach((button, index) => {
    button.addEventListener("click", function() {
        if (!button.classList.contains("selected")) {
            // Deseleccionamos todos los botones de la misma categoría
            const category = button.getAttribute("data-category");
            const categoryButtons = document.querySelectorAll(`.star-button[data-category="${category}"]`);
            categoryButtons.forEach(btn => btn.classList.remove("selected"));

            // Seleccionamos el botón clicado
            button.classList.add("selected");
        } else {
            // Deseleccionamos el botón clicado
            button.classList.remove("selected");
        }
    });
});