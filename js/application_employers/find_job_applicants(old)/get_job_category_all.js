getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'employer') {
            fetch(apiUrl + 'application/job_category/get_job_category_all.php', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    displaySelectJobCategory(data.data);
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        } else {
            console.error('Token not found in local storage');
        }
    })
    .catch(error => console.error('Error fetching session token:', error));

function displaySelectJobCategory(datas) {
    const selectJobCategory = document.getElementById('select_job_category');
    datas.forEach(data => {
        const option = document.createElement('option');
        option.value = data.job_category_code;
        option.text = data.job_category;
        const urlParams_job_category = new URLSearchParams(window.location.search);
        if (urlParams_job_category.has('job_category_code')) {
            const job_category_code = urlParams_job_category.get('job_category_code');
            if (data.job_category_code === job_category_code) {
                option.selected = true;
            }
        }
        selectJobCategory.appendChild(option);
    });
}