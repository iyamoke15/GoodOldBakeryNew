// ========================================
// SEARCH PRODUCT FUNCTION
// ========================================

function searchProduct() {

    // Ambil input search
    // Catatan: Pastikan ID "searchInput" ada di dalam file HTML yang memanggil script ini
    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    // Ambil semua product card
    // Catatan: Pastikan class ".product-card" ada di dalam elemen HTML yang ingin difilter
    let cards = document.querySelectorAll(".product-card");

    // Loop semua produk
    cards.forEach(function(card) {

        // Ambil nama produk
        let title = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        // Kalau cocok
        if (title.includes(input)) {

            // Tampilkan produk
            card.style.display = "flex";

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
    if (searchInput) {
        searchInput.addEventListener("input", searchProduct);
    }

});