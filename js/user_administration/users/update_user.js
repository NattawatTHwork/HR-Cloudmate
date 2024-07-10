function update_data(user_id) {
    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'member') {
                fetch(apiUrl + 'user_administration/users/get_user.php?user_id=' + user_id, {
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
        $("#user_id_update").val(datas.user_id);
        $("#username_update").val(datas.username);
        $("#firstname_update").val(datas.firstname);
        $("#lastname_update").val(datas.lastname);
        $('#group_name_dropdown_update option[value="' + datas.group_id + '"]').prop('selected', true);
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
            if (mySession.token && mySession.role === 'member') {
                const formData = new FormData(this);
                formData.append('personcode', mySession.username);
                formData.append('changed_by', mySession.user_id);

                fetch(apiUrl + 'user_administration/users/update_user.php', {
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
                        buttonChangePassword.disabled = false; // Re-enable the button
                    });
            } else {
                console.error('Token not found in local storage');
            }
        })
        .catch(error => console.error('Error fetching session token:', error));
});
