// profil1.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cek apakah user sudah login melalui fungsi di auth.js
    if (isUserLoggedIn()) {
        // 2. Jika sudah login, tendang user ke profil2.html
        // Karena profil2.html ada di folder 'html', maka path-nya tetap 'profil2.html'
        // selama dia berada di folder yang sama dengan profil1.html
        window.location.href = 'profil2.html';
    }
    
    // 3. Jika belum login, fungsi ini tidak melakukan apa-apa.
    // User akan tetap berada di profil1.html dan melihat gambar "Lock".
});