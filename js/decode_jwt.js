if (token) {
    const payloadBase64 = token.split('.')[1];
    data_token = JSON.parse(atob(payloadBase64)); // เอาออก const ออก
    const currentTimeUTC = Math.floor(Date.now() / 1000);
    if (data_token.exp < currentTimeUTC) {
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
    }
}