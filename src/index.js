document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#loginForm');
    const signUpLink = document.querySelector('#signUpLink');

    // Login Page
    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const username = loginForm.username.value;
            const password = loginForm.password.value;

            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                if (response.ok) {
                    window.location.href = '/home.html';
                } else {
                    const errorMessage = await response.text();
                    alert(errorMessage);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred, please try again later.');
            }
        });
    }

    // Sign Up Page
    if (signUpLink) {
        signUpLink.addEventListener('click', (event) => {
            event.preventDefault(); 
            window.location.href = 'signup.html'; 
        });
    }

    // Signup Form
    const signUpForm = document.querySelector('#signUpForm');

    if (signUpForm) {
        signUpForm.addEventListener('submit', async (event) => {
            event.preventDefault(); 

            const name = signUpForm.name.value;
            const email = signUpForm.email.value;
            const username = signUpForm.username.value;
            const password = signUpForm.password.value;

            try {
                const response = await fetch('/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, username, password })
                });

                if (response.ok) {
                    window.location.href = '/login.html';
                } else {
                    const errorMessage = await response.text();
                    alert(errorMessage);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred, please try again later.');
            }
        });
    }
});
