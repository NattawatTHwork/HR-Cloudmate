getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'member') {
            fetch(apiUrl + 'user_administration/users/get_header.php?user_id=' + mySession.user_id, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    document.getElementById('username').textContent = data.data.username;
                    document.getElementById('fullname').textContent = data.data.firstname + ' ' + data.data.lastname;
                    document.getElementById('fullname_sub').textContent = data.data.firstname + ' ' + data.data.lastname;
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        } else {
            console.error('Token not found in local storage');
        }
    })
    .catch(error => console.error('Error fetching session token:', error));
