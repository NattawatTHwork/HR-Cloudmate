if (token && role == 'member') {
    fetch(apiUrl + 'application/index/jobs.php?employer_code=cloudmate', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
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

async function display_jobs(datas) {
    document.getElementById('all_jobs').textContent = datas.total_jobs;
    document.getElementById('active_jobs').textContent = datas.true_status_jobs;
    document.getElementById('inactive_jobs').textContent = datas.false_status_jobs;
}
