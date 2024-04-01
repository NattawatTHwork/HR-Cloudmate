if (token && role == 'applicant') {
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
            displaySelect(data.data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
} else {
    console.error('Token not found in local storage');
}

function displaySelect(datas) {
    const selectJobCategory = document.getElementById('select_job_category');
    datas.forEach(data => {
        const option = document.createElement('option');
        option.value = data.job_category_code;
        option.text = data.job_category;
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('job_category_code')) {
            const job_category_code = urlParams.get('job_category_code');
            if (data.job_category_code === job_category_code) {
                option.selected = true;
            }
        }
        selectJobCategory.appendChild(option);
    });
}