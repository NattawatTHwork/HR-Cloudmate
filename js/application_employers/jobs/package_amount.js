data_status = true;
if (token && role == 'employer') {
    fetch(apiUrl + 'application/jobs/package_amount.php?employer_code=' + data_token.employer_code, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (!data.status_data) {
                document.getElementById('statusflag_create').value = 'f';
                document.getElementById('statusflag_create').disabled = true;
                data_status = data.status_data;
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
} else {
    console.error('Token not found in local storage');
}