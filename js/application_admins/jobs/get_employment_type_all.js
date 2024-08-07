getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'admin') {
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
                    const selectUpdate = document.getElementById('employment_type_code_dropdown_update');

                    data.data.forEach(employment_type => {
                        const option = document.createElement('option');
                        option.value = employment_type.employment_type_code;
                        option.text = employment_type.employment_type;
                        selectUpdate.appendChild(option);
                    });
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        } else {
            console.error('Token not found in local storage');
        }
    })
    .catch(error => console.error('Error fetching session token:', error));
