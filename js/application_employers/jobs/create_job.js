document.getElementById('create_data_form').addEventListener('submit', function (event) {
    event.preventDefault();
    const buttonCreate = document.getElementById('button_create');
    buttonCreate.disabled = true; // Disable the button

    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'employer') {
                const formData = new FormData(this);
                formData.append('employer_code', mySession.employer_code);
                const jsonData = {};
                formData.forEach((value, key) => {
                    jsonData[key] = value;
                });
                jsonData['changed_by'] = mySession.employer_code;

                if (jsonData['agreed'] && jsonData['agreed'] == 'on') {
                    jsonData['salary'] = 'agreed';
                    delete jsonData['agreed'];
                    delete jsonData['other_type_create[]'];
                }
                delete jsonData['work_day_create'];

                fetch(apiUrl + 'application/jobs/create_job.php', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${mySession.token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(jsonData)
                })
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        if (data.status === 'success') {
                            Swal.fire({
                                icon: 'success',
                                title: texts.success,
                            })
                                .then(function () {
                                    location.reload();
                                });
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: texts.error,
                            })
                                .then(function () {
                                    location.reload();
                                });
                        }
                    })
                    .catch(error => {
                        console.error('There was a problem with the update:', error);
                    })
                    .finally(() => {
                        buttonCreate.disabled = false; // Re-enable the button
                    });
            } else {
                console.error('Token not found in local storage');
            }
        })
        .catch(error => console.error('Error fetching session token:', error));
});