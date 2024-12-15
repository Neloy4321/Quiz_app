document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    if (res.status === 201) {
        alert('Signup successful! Please login.');
        window.location.href = 'index.html';
    } else {
        const data = await res.json();
        alert(data.message || 'Signup failed');
    }
});
