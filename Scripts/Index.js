function openNav (){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

// Get the modal
var modal = document.getElementById("productModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get elements to update in the modal
var modalImage = document.getElementById("modalImage");
var modalTitle = document.getElementById("modalTitle");
var modalDescription = document.getElementById("modalDescription");
var modalPrice = document.getElementById("modalPrice");

// Function to open modal
function openModal(product) {
    modal.style.display = "block";
    modalImage.src = product.image;
    modalTitle.innerText = product.title;
    modalDescription.innerText = product.description;
    modalPrice.innerText = product.price;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Add event listeners to product cards
document.querySelectorAll('.product-card').forEach(function(card, index) {
    card.addEventListener('click', function() {
        var product = {
            image: card.querySelector('img').src,
            title: card.querySelector('h2').innerText,
            description: card.querySelector('p').innerText,
            price: "$10.00" // Add a price here
        };
        openModal(product);
    });
});
