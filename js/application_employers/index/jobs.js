getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'employer') {
            fetch(apiUrl + 'application/index/jobs.php?employer_code=' + mySession.employer_code, {
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
    document.getElementById('all_jobs').textContent = datas.total_jobs || 0;
    document.getElementById('active_jobs').textContent = datas.true_status_jobs || 0;
    document.getElementById('inactive_jobs').textContent = datas.false_status_jobs || 0;
}
