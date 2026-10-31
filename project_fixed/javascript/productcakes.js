// ========================================
// SEARCH PRODUCT FUNCTION
// ========================================

function searchProduct() {

    // Ambil input dari search
    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    // Ambil semua product card
    let cards = document.querySelectorAll(".product-card");

    // Loop semua card
    cards.forEach(function(card) {

        // Ambil nama produk
        let title = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        // Cek apakah sesuai search
        if (title.includes(input)) {

            // Tampilkan produk
            card.style.display = "block";

        } else {

            // Sembunyikan produk
            card.style.display = "none";

        }

    });

}



// ========================================
// AUTO SEARCH SAAT MENGETIK
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    let searchInput = document.getElementById("searchInput");

    // Search otomatis saat mengetik
    searchInput.addEventListener("keyup", searchProduct);

});