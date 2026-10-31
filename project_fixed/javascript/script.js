// ==========================================================================
// DATA CAROUSEL PROMOSI DENGAN EFEK SWIPE BERGESER
// ==========================================================================
const dataPromo = [
    {
        title: "ONGOING PROMOTION",
        desc: "Limited Time Offer: Get 20% Off Signature Chocolate Rose!",
        imgSrc: "../asset/pic1.png",
        imgAlt: "Chocolate Cake"
    },
    {
        title: "ONGOING PROMOTION",
        desc: "Limited Time Offer: Get 30% Of Rosemary Focaccia!",
        imgSrc: "../asset/Rosemary Focaccia.png",
        imgAlt: "Rosemary Focaccia"
    },
    {
        title: "ONGOING PROMOTION",
        desc: "Limited Time Offer: Get 15% Of Chocolate Eclair!",
        imgSrc: "../asset/pic3.png", 
        imgAlt: "Chocolate Eclair"
    }
];

let indexSekarang = 0;
let timerPromo;

function updateTampilanPromo(index, arah = "next") {
    // Mengambil elemen teks dan gambar di dalam Hero Section
    const titleElement = document.querySelector(".promo-content h1");
    const descElement = document.querySelector(".promo-content p");
    const imgElement = document.querySelector(".hero-image img");
    const dots = document.querySelectorAll(".carousel-dots .dot");

    // Validasi agar tidak error jika elemen belum termuat
    if (!titleElement || !imgElement || dots.length === 0) return;

    // 1. Ambil elemen pembungkus (parent) yang akan diberi animasi geser
    const contentParent = titleElement.parentElement;
    const imgParent = imgElement.parentElement;

    // 2. Hapus class animasi lama agar browser bisa memicu ulang animasinya
    contentParent.classList.remove("swipe-next", "swipe-prev");
    imgParent.classList.remove("swipe-next", "swipe-prev");

    // Trik memaksa browser merefresh/merestart animasi (DOM reflow)
    void contentParent.offsetWidth;
    void imgParent.offsetWidth;

    // 3. Masukkan konten teks dan gambar baru berdasarkan index dataPromo
    titleElement.textContent = dataPromo[index].title;
    descElement.textContent = dataPromo[index].desc;
    imgElement.src = dataPromo[index].imgSrc;
    imgElement.alt = dataPromo[index].imgAlt;

    // 4. Pasang class animasi baru berdasarkan arah gerakan (next / prev)
    const kelasAnimasi = arah === "next" ? "swipe-next" : "swipe-prev";
    contentParent.classList.add(kelasAnimasi);
    imgParent.classList.add(kelasAnimasi);

    // 5. Update indikator dot putih aktif di bagian bawah
    dots.forEach((dot, idx) => {
        if (idx === index) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function autoPlayPromo() {
    // Fungsi untuk menggeser slide ke kanan otomatis sembari looping kembali ke awal
    indexSekarang = (indexSekarang + 1) % dataPromo.length;
    updateTampilanPromo(indexSekarang, "next");
    timerPromo = setTimeout(autoPlayPromo, 4000); // Otomatis bergeser tiap 4 detik
}

function setupDotClick() {
    const dots = document.querySelectorAll(".carousel-dots .dot");
    dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => {
            // Jika user mengklik bulatan dot yang sedang aktif, abaikan saja
            if (idx === indexSekarang) return;

            // Reset/bersihkan timer otomatis sementara waktu agar tidak bentrok
            clearTimeout(timerPromo);
            
            // Cek arah klik user: jika index target lebih besar, geser ke kanan (next), jika kecil geser ke kiri (prev)
            const arah = idx > indexSekarang ? "next" : "prev";
            indexSekarang = idx;
            
            // Perbarui visual slider
            updateTampilanPromo(indexSekarang, arah);
            
            // Jalankan kembali autoplay setelah user selesai mengklik
            timerPromo = setTimeout(autoPlayPromo, 4000);
        });
    });
}

// Menjalankan carousel setelah seluruh halaman HTML selesai termuat sempurna
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".carousel-dots")) {
        setupDotClick();
        timerPromo = setTimeout(autoPlayPromo, 4000);
    }
});