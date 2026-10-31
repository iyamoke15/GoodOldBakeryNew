// register.js

document.addEventListener('DOMContentLoaded', () => {

    // 1. CEK: Jika user sudah login, arahkan mereka keluar dari halaman register
    if (localStorage.getItem('isLoggedIn') === 'true') {
        const container = document.querySelector('.register-container');
        if (container) {
            container.innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <h1>WELCOME BACK!</h1>
                    <p>You are already logged in to our community.</p>
                    <br>
                    <a href="profil2.html" class="btn-join" style="display:inline-block; padding: 10px 20px; text-decoration:none;">GO TO PROFILE</a>
                </div>
            `;
        }
    }

    // 1b. TOGGLE: Tampilkan / sembunyikan password
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    const eyeOpen = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
    const eyeClosed = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>`;

    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            eyeIcon.innerHTML = isPassword ? eyeClosed : eyeOpen;
        });
    }

    // 2. PROSES: Menangani pendaftaran user baru
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Ambil data dari input form
            const userData = {
                email: document.getElementById('email').value,
                fullname: document.getElementById('fullname').value,
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
                dob: document.getElementById('dob').value,
                gender: document.querySelector('input[name="gender"]:checked') ? 
                        document.querySelector('input[name="gender"]:checked').value : 'Not specified'
            };

            // Simpan data ke localStorage
            localStorage.setItem('userAccount', JSON.stringify(userData));
            
            // Notifikasi dan arahkan ke login
            alert("Registration Successful! Please log in to continue.");
            window.location.href = 'login.html'; 
        });
    }
});