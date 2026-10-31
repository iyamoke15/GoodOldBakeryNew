// profil2.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Proteksi: Jika belum login, tendang balik ke halaman Lock (profil1.html)
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'profil1.html';
        return;
    }

    // 2. Ambil data dari localStorage
    const userData = JSON.parse(localStorage.getItem('userAccount'));

    // 3. Tampilkan data jika ada
    if (userData) {
        const firstName = userData.fullname ? userData.fullname.split(' ')[0] : 'User';

        const el = (id) => document.getElementById(id);

        if (el('displayFullname'))  el('displayFullname').textContent  = userData.fullname  || '-';
        if (el('displayFullname2')) el('displayFullname2').textContent = "Hi, " + firstName;
        if (el('displayEmail'))     el('displayEmail').textContent     = userData.email     || '-';
        if (el('displayDob'))       el('displayDob').textContent       = userData.dob       || '-';
        if (el('displayGender'))    el('displayGender').textContent    = userData.gender    || '-';

        // Username diambil dari data yang disimpan saat register
        if (el('displayUsername'))  el('displayUsername').textContent  = userData.username   || '-';
    }

    // 4. Fungsi Log Out
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'homepage.html';
        });
    }
});
