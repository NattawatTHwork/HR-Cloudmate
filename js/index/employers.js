getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'member') {
            fetch(apiUrl + 'application/index/employers.php', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                display_jobs(data.data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
        } else {
            console.error('Token not found in local storage');
        }
    })
    .catch(error => console.error('Error fetching session token:', error));

async function display_jobs(datas) {
    document.getElementById('total_employers').textContent = datas.total_employers;
    document.getElementById('status_enable_employers').textContent = datas.status_enable_employers;
    document.getElementById('status_view_employers').textContent = datas.status_view_employers;
    document.getElementById('status_disable_employers').textContent = datas.status_disable_employers;
}
