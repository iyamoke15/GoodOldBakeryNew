// FUNCTION SEARCH PRODUCT
function searchProduct() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const products = document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        const title = product
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const desc = product
            .querySelector("p")
            .textContent
            .toLowerCase();

        if (
            title.includes(input) ||
            desc.includes(input)
        ) {
            product.style.display = "flex";
        } 
        
        else {
            product.style.display = "none";
        }
    });
}

// SEARCH OTOMATIS SAAT MENGETIK
document.addEventListener("DOMContentLoaded", function() {

    const searchInput =
        document.getElementById("searchInput");

    searchInput.addEventListener("keyup", searchProduct);

});