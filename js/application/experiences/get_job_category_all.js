if (token && role == 'member') {
    fetch(apiUrl + 'application/job_category/get_job_category_all.php', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            const selectUpdate = document.getElementById('job_category_code_dropdown_update');

            data.data.forEach(job_category => {
                const option = document.createElement('option');
                option.value = job_category.job_category_code;
                option.text = job_category.job_category;
                selectUpdate.appendChild(option);
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
} else {
    console.error('Token not found in local storage');
}