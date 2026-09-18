const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const signupForm = document.getElementById('signupForm');
const signinForm = document.getElementById('signinForm');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function handleLogin(e) {
    e.preventDefault();
    const pass = e.target.id === 'signinForm' ? document.getElementById('siPass') : document.getElementById('suPass');
    const email = e.target.id === 'signinForm' ? document.getElementById('siEmail') : document.getElementById('suEmail');

    if (!email.value.trim()) {
        alert('Please enter your email');
        email.focus();
        return;
    }
    if (!pass.value || pass.value.length < 6) {
        alert('Password at least 6 characters hoye');
        pass.focus();
        return;
    }
    localStorage.setItem('portfolioUser', email.value.trim());
    window.location.href = 'portfolio.html';
}

signupForm.addEventListener('submit', handleLogin);
signinForm.addEventListener('submit', handleLogin);