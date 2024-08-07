getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'admin') {
            fetch(apiUrl + 'application/users/get_user.php?user_code=' + user_code, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                show_data(data.data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
        } else {
            console.error('Token not found in local storage');
        }
    })
    .catch(error => console.error('Error fetching session token:', error));
