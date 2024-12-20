document.getElementById('create_data_form').addEventListener('submit', function (event) {
    event.preventDefault();
    const buttonCreate = document.getElementById('button_create');
    buttonCreate.disabled = true; // Disable the button

    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'admin') {
                const formData = new FormData(this);
                const password = formData.get('admin_password');
                const repeatPassword = formData.get('admin_repeat_password');
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

                const jsonData = {};
                formData.forEach(function (value, key) {
                    jsonData[key] = value;
                });
                jsonData['changed_by'] = mySession.admin_code;

                fetch(apiUrl + 'application/admins/create_admin.php', {
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
                        } else if (data.status === 'exist') {
                            Swal.fire({
                                icon: 'error',
                                title: texts.error,
                                text: texts.exist
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