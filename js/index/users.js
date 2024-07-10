getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'member') {
            fetch(apiUrl + 'application/index/users.php', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    display_apply_works(data.data);
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        } else {
            console.error('Token not found in local storage');
        }
    })
    .catch(error => console.error('Error fetching session token:', error));

async function display_apply_works(datas) {
    document.getElementById('total_users').textContent = datas.total_users;
    document.getElementById('status_enable_users').textContent = datas.status_enable_users;
    document.getElementById('status_disable_users').textContent = datas.status_disable_users;
}
