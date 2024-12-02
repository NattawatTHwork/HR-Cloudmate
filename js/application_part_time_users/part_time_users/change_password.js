document.getElementById('change_password_data_form').addEventListener('submit', function (event) {
    event.preventDefault();
    const buttonChangePassword = document.getElementById('button_change_password');
    buttonChangePassword.disabled = true; // Disable the button

    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'applicant_part_time') {
                const formData = new FormData(this);
                const jsonData = {};
                formData.forEach((value, key) => {
                    jsonData[key] = value;
                });
                jsonData['part_time_user_code'] = mySession.part_time_user_code;
                // jsonData['changed_by'] = mySession.user_code;

                if (jsonData['new_password'] !== jsonData['repeat_new_password']) {
                    Swal.fire({
                        icon: 'error',
                        title: texts.error,
                        text: texts.not_match,
                    });
                    buttonChangePassword.disabled = false;
                    return;
                }

                if (jsonData['new_password'].length < 6) {
                    Swal.fire({
                        icon: 'error',
                        title: texts.error,
                        text: texts.more_6,
                    });
                    buttonChangePassword.disabled = false;
                    return;
                }

                fetch(apiUrl + 'application/part_time_users/change_password_part_time_user.php', {
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
                        } else if (data.status === 'unauthorized') {
                            Swal.fire({
                                icon: 'error',
                                title: texts.error,
                                text: texts.unauthorized_password
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
                        buttonChangePassword.disabled = false; // Re-enable the button
                    });
            } else {
                console.error('Token not found in local storage');
            }
        })
        .catch(error => console.error('Error fetching session token:', error));
});
