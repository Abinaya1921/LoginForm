document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Redirect to the success page
    window.location.href = 'success.html';
});