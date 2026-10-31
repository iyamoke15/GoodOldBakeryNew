// 1. "Penjaga": Cek apakah user sudah login
const statusLogin = localStorage.getItem('isLoggedIn');

if (statusLogin !== 'true') {
    // Kalau belum login, paksa balik ke halaman login
    alert("Kamu harus login dulu ya!");
    window.location.href = "login.html";
}

// 2. Fungsi Logout (tambahkan ini kalau kamu nanti buat tombol logout di Profil)
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = "login.html";
}