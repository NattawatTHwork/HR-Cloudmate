function change_password(user_id) {
    if (token) {
        fetch(apiUrl + 'user_administration/users/get_user.php?user_id=' + user_id, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
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

    function show_data(datas) {
        $("#user_id_change").val(datas.user_id);
        $("#form_change_password_data").modal("show");
    }
}

document.getElementById('change_password_data_form').addEventListener('submit', function (event) {
    event.preventDefault();
    const buttonChangePassword = document.getElementById('button_change_password');
    buttonChangePassword.disabled = true; // Disable the button

    if (token) {
        const formData = new FormData(this);
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });
        jsonData['changed_by'] = data_token.user_id;

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

        fetch(apiUrl + 'user_administration/users/change_password_admin.php', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
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
                buttonChangePassword.disabled = false; // Re-enable the button
            });
    } else {
        console.error('Token not found in local storage');
    }
});
