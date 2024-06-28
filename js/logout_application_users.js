function logout() {
    fetch(pathUrl + '/php/clear_session_token.php')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                console.log('Session token cleared successfully.');
                window.location.href = pathUrl + '/application_users/login.php'; // Move inside if block
            } else {
                console.error('Error clearing session token:', data.message);
            }
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
}