if (token) {
    fetch(apiUrl + 'user_administration/users/get_header.php?user_id=' + data_token.user_id, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
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
