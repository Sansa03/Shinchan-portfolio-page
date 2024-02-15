
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = document.getElementById('username').value.trim();
        var password = document.getElementById('password').value.trim();
        var errorMessage = '';

        if (username === '') {
            errorMessage += 'Username is required.<br>';
        }

        if (password === '') {
            errorMessage += 'Password is required.<br>';
        }

        var errorContainer = document.getElementById('error-container');
        errorContainer.innerHTML = errorMessage;

        if (errorMessage === '') {
            // Redirect to portfolio dashboard page
            window.location.href = 'portfolio.html';
        }
    });
});
