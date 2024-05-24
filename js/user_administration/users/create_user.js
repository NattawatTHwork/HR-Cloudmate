document.getElementById('create_data_form').addEventListener('submit', function(event) {
    event.preventDefault();

    if (token) {
        const formData = new FormData(this);
        const password = formData.get('user_password');
        const repeatPassword = formData.get('user_repeat_password');
        if (password.length < 6) {
            document.getElementById('alertpassword').style.display = 'block';
            return;
        } else if (password !== repeatPassword) {
            document.getElementById('alertpassword').style.display = 'none';
            document.getElementById('alertrepeatpassword').style.display = 'block';
            return;
        }
        formData.append('personcode', data_token.username);

        fetch(apiUrl + 'user_administration/users/create_user.php', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
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
            });
    } else {
        console.error('Token not found in local storage');
    }
});