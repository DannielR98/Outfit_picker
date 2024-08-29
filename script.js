document.addEventListener('DOMContentLoaded', function() {
    let shirtImages = [];
    let pantImages = [];
    let currentShirtIndex = 0;
    let currentPantIndex = 0;

    // Shirt Upload Handling
    document.getElementById('shirtUpload').addEventListener('change', function(event) {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    shirtImages.push(e.target.result);
                    if (shirtImages.length === 1) {
                        displayShirtImage(0);
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    });

    // Pant Upload Handling
    document.getElementById('pantUpload').addEventListener('change', function(event) {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    pantImages.push(e.target.result);
                    if (pantImages.length === 1) {
                        displayPantImage(0);
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    });

    // Display Shirt Image
    function displayShirtImage(index) {
        const imgElement = document.getElementById('currentShirt');
        imgElement.src = shirtImages[index];
        imgElement.classList.remove('hidden');
    }

    // Display Pant Image
    function displayPantImage(index) {
        const imgElement = document.getElementById('currentPant');
        imgElement.src = pantImages[index];
        imgElement.classList.remove('hidden');
    }

    // Navigate Shirt Images
    document.getElementById('prevShirt').addEventListener('click', function() {
        if (shirtImages.length > 0) {
            currentShirtIndex = (currentShirtIndex - 1 + shirtImages.length) % shirtImages.length;
            displayShirtImage(currentShirtIndex);
        }
    });

    document.getElementById('nextShirt').addEventListener('click', function() {
        if (shirtImages.length > 0) {
            currentShirtIndex = (currentShirtIndex + 1) % shirtImages.length;
            displayShirtImage(currentShirtIndex);
        }
    });

    // Navigate Pant Images
    document.getElementById('prevPant').addEventListener('click', function() {
        if (pantImages.length > 0) {
            currentPantIndex = (currentPantIndex - 1 + pantImages.length) % pantImages.length;
            displayPantImage(currentPantIndex);
        }
    });

    document.getElementById('nextPant').addEventListener('click', function() {
        if (pantImages.length > 0) {
            currentPantIndex = (currentPantIndex + 1) % pantImages.length;
            displayPantImage(currentPantIndex);
        }
    });
});
