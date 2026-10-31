// FUNCTION SEARCH PRODUCT
function searchProduct() {
    // Ambil text dari input search
    let input = document.getElementById("searchInput").value.toLowerCase();

    // Ambil semua product card
    let cards = document.querySelectorAll(".product-card");

    // Loop semua product
    cards.forEach(function(card) {
        // Ambil nama produk (h3)
        let title = card.querySelector("h3").textContent.toLowerCase();
        
        // Ambil deskripsi produk (p) - opsional, tambahkan jika ingin mencari di deskripsi juga
        let desc = card.querySelector("p") ? card.querySelector("p").textContent.toLowerCase() : "";

        // Logika: Cocok jika ada di judul ATAU ada di deskripsi
        if (title.includes(input) || desc.includes(input)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

// AUTO SEARCH SAAT MENGETIK
document.addEventListener("DOMContentLoaded", function() {
    let searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("keyup", searchProduct);
    }
});