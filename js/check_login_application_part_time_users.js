document.addEventListener('DOMContentLoaded', function () {
    getSessionToken()
        .then(mySession => {
            const currentTimeUTC = Math.floor(Date.now() / 1000);
            if (!mySession.token || mySession.role != 'applicant_part_time' || mySession.exp < currentTimeUTC) {
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
                window.location.href = pathUrl + '/application_part_time_users/login.php';
            }
        })
        .catch(error => console.error('Error fetching session token:', error));
});