// profil3.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Proteksi: Jika belum login, tendang balik ke profil1.html
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'profil1.html';
        return;
    }

    const savedData = JSON.parse(localStorage.getItem('userAccount'));

    // 2. Isi data ke input form edit
    if (savedData) {
        const el = (id) => document.getElementById(id);
        if (el('editUsername')) el('editUsername').value = savedData.username || '';
        if (el('editFullname')) el('editFullname').value = savedData.fullname || '';
        if (el('editEmail'))    el('editEmail').value    = savedData.email    || '';
        if (el('editDob'))      el('editDob').value      = savedData.dob      || '';
        if (el('editGender'))   el('editGender').value   = savedData.gender   || '';
    }

    // 3. Handle form submit
    const editForm = document.getElementById('editProfileForm');
    if (editForm) {
        editForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const updatedData = {
                ...savedData,
                username: document.getElementById('editUsername').value,
                fullname: document.getElementById('editFullname').value,
                email:    document.getElementById('editEmail').value,
                dob:      document.getElementById('editDob').value,
                gender:   document.getElementById('editGender').value
            };

            localStorage.setItem('userAccount', JSON.stringify(updatedData));
            alert("Profile updated successfully!");
            window.location.href = 'profil2.html';
        });
    }

    // 4. Tombol Cancel / Back
    const cancelBtn = document.getElementById('cancelBtn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            window.location.href = 'profil2.html';
        });
    }
});
