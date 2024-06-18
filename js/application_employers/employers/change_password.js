document.getElementById('change_password_data_form').addEventListener('submit', function (event) {
    event.preventDefault();
    const buttonChangePassword = document.getElementById('button_change_password');
    buttonChangePassword.disabled = true; // Disable the button

    if (token && role == 'employer') {
        const formData = new FormData(this);
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });
        jsonData['employer_code'] = data_token.employer_code;
        jsonData['changed_by'] = data_token.employer_code;

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

        fetch(apiUrl + 'application/employers/change_password_employer.php', {
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
});
