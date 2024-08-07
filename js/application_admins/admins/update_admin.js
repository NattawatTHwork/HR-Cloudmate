function update_data(admin_code) {
    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'admin') {
                fetch(apiUrl + 'application/admins/get_admin.php?admin_code=' + admin_code, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${mySession.token}`
                    }
                })
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        show_data(data.data);
                    })
                    .catch(error => {
                        console.error('There has been a problem with your fetch operation:', error);
                    });
            } else {
                console.error('Token not found in local storage');
            }
        })
        .catch(error => console.error('Error fetching session token:', error));

    function show_data(datas) {
        $("#admin_code_update").val(datas.admin_code);
        $("#firstname_update").val(datas.firstname);
        $("#lastname_update").val(datas.lastname);
        $('#statusflag_update option[value="' + datas.user_statusflag + '"]').prop('selected', true);
        $("#form_update_data").modal("show");
    }
}

document.getElementById('update_data_form').addEventListener('submit', function (event) {
    event.preventDefault();
    const buttonChangePassword = document.getElementById('button_update');
    buttonChangePassword.disabled = true; // Disable the button

    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'admin') {
                const formData = new FormData(this);
                const jsonData = {};
                formData.forEach(function (value, key) {
                    jsonData[key] = value;
                });
                jsonData['changed_by'] = mySession.admin_code;

                fetch(apiUrl + 'application/admins/update_admin.php', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${mySession.token}`
                    },
                    body: JSON.stringify(jsonData)
                })
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data)
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
                        buttonChangePassword.disabled = false; // Re-enable the button
                    });
            } else {
                console.error('Token not found in local storage');
            }
        })
        .catch(error => console.error('Error fetching session token:', error));
});
