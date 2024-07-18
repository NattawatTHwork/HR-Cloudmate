getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'employer') {
            fetch(apiUrl + 'application/employment_type/get_employment_type_all.php?language=' + mySession.language, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    displaySelectEmploymentType(data.data);
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        } else {
            console.error('Token not found in local storage');
        }
    })
    .catch(error => console.error('Error fetching session token:', error));

function displaySelectEmploymentType(datas) {
    const selectEmploymentType = document.getElementById('select_employment_type');
    datas.forEach(data => {
        const option = document.createElement('option');
        option.value = data.employment_type_code;
        option.text = data.employment_type;
        const urlParams_employment_type = new URLSearchParams(window.location.search);
        if (urlParams_employment_type.has('employment_type_code')) {
            const employment_type_code = urlParams_employment_type.get('employment_type_code');
            if (data.employment_type_code === employment_type_code) {
                option.selected = true;
            }
        }
        selectEmploymentType.appendChild(option);
    });
}