

document.getElementById('reset_password').addEventListener('submit', function (event) {
    event.preventDefault();
    const buttonResetPassword = document.getElementById('button_reset_password');
    buttonResetPassword.disabled = true; // Disable the button

    const formData = new FormData(this);
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    fetch(apiUrl + 'application/users/reset_password.php', {
        method: 'POST',
        headers: {
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
                        window.location.href = 'login.php';
                    });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: texts.error,
                })
            }
        })
        .catch(error => {
            console.error('There was a problem with the update:', error);
        })
        .finally(() => {
            buttonResetPassword.disabled = false; // Re-enable the button
        });
});
