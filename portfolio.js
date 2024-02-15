document.addEventListener('DOMContentLoaded', function() {
    const characterImages = document.querySelectorAll('.character-image');

    characterImages.forEach(image => {
        image.addEventListener('click', function() {
            const description = this.getAttribute('data-description');
            // Redirect to another page or display detailed description here
            console.log(description); // Example: Log the description to the console
        });
    });
});
