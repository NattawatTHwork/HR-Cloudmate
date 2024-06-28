document.addEventListener('DOMContentLoaded', function () {
    if (!token || role != 'applicant') {
        fetch(pathUrl + '/php/clear_session_token.php')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    console.log('Session token cleared successfully.');
                } else {
                    console.error('Error clearing session token:', data.message);
                }
            })
            .catch(error => {
                console.error('Fetch Error:', error);
            });
        window.location.href = pathUrl + '/application_users/login.php';
    }
});
