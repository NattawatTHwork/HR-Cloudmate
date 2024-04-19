if (token && role == 'member') {
    fetch(apiUrl + 'application/index/apply_works.php?employer_code=cloudmate', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
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

async function display_apply_works(datas) {
    document.getElementById('total_apply_works').textContent = datas.total_apply_works;
}
