getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'applicant') {
            fetch(apiUrl + 'application/users/get_user_header.php?user_code=' + mySession.user_code, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    document.getElementById('fullname').textContent = data.data.firstname + ' ' + data.data.lastname;
                    document.getElementById('fullname_sub').textContent = data.data.firstname + ' ' + data.data.lastname;
                    document.getElementById('email_head').textContent = data.data.email;
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        } else {
            console.error('Token not found in local storage');
        }
    })
    .catch(error => console.error('Error fetching session token:', error));
