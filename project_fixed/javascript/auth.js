// auth.js

// 1. Fungsi untuk mengecek apakah user sudah login
function isUserLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// 2. Fungsi untuk proses login 
// Panggil ini saat login berhasil dilakukan
function loginUser(userData) {
    localStorage.setItem('isLoggedIn', 'true');
    // Kita gunakan 'userAccount' agar sinkron dengan register.js dan profil3-edit.js
    localStorage.setItem('userAccount', JSON.stringify(userData));
    
    // Setelah login, arahkan ke halaman profil2
    window.location.href = 'profil2.html';
}

// 3. Fungsi untuk logout
// Panggil ini saat tombol 'Log Out' ditekan
function logoutUser() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userAccount'); // Hapus data userAccount
    window.location.href = 'homepage.html';
}

// 4. Fungsi untuk proteksi halaman
// Panggil ini di awal file JS halaman profil (profil2.js atau profil3-edit.js)
function checkAccess() {
    if (!isUserLoggedIn()) {
        // Kalau belum login, paksa balik ke profil1.html (halaman gembok)
        window.location.href = 'profil1.html';
    }
}