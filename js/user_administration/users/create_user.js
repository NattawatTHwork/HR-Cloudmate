document.getElementById('create_data_form').addEventListener('submit', function (event) {
    event.preventDefault();
    const buttonCreate = document.getElementById('button_create');
    buttonCreate.disabled = true; // Disable the button

    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'member') {
                const formData = new FormData(this);
                const password = formData.get('user_password');
                const repeatPassword = formData.get('user_repeat_password');
                if (password.length < 6) {
                    document.getElementById('alertpassword').style.display = 'block';
                    buttonCreate.disabled = false;
                    return;
                } else if (password !== repeatPassword) {
                    document.getElementById('alertpassword').style.display = 'none';
                    document.getElementById('alertrepeatpassword').style.display = 'block';
                    buttonCreate.disabled = false;
                    return;
                }
                formData.append('personcode', mySession.username);
                formData.append('changed_by', mySession.user_id);

                fetch(apiUrl + 'user_administration/users/create_user.php', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${mySession.token}`
                    },
                    body: formData
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
                        } else if (data.status === 'exist') {
                            Swal.fire({
                                icon: 'error',
                                title: texts.error,
                                text: texts.exist_username
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