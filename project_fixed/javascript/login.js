// login.js

document.addEventListener('DOMContentLoaded', () => {

    // TOGGLE: Tampilkan / sembunyikan password
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

    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = document.getElementById('email').value;
        const passwordInput = document.getElementById('password').value;
        const savedData = JSON.parse(localStorage.getItem('userAccount'));

        if (savedData && savedData.email === emailInput && savedData.password === passwordInput) {
            localStorage.setItem('isLoggedIn', 'true');
            alert("Login Successful! Welcome back, " + savedData.fullname.split(' ')[0] + "!");
            window.location.href = 'profil2.html';
        } else {
            alert("Email atau password salah! Belum punya akun? Silakan Register dulu.");
        }
    });
});
