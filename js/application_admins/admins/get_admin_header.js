getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'admin') {
            fetch(apiUrl + 'application/admins/get_admin_header.php?admin_code=' + mySession.admin_code, {
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
                    if (data.data.email == 'superadmin@mail.com') {
                        document.getElementById('user_administration').style.display = 'block';
                    }
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        } else {
            console.error('Token not found in local storage');
        }
    })
    .catch(error => console.error('Error fetching session token:', error));