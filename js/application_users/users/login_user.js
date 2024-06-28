if (token || role == 'applicant') {
    window.location.href = pathUrl + '/application_users/index.php';
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const buttonLogin = document.getElementById('button_login');
        buttonLogin.disabled = true; // Disable the button

        const formData = new FormData(form);
        const jsonData = {};

        formData.forEach(function (value, key) {
            jsonData[key] = value;
        });

        fetch(apiUrl + 'application/users/login_user.php', {
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
                    return fetch(pathUrl + '/php/set_session_token.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ token: data.token, role: 'applicant' })
                    });
                } else if (data.status === 'disable') {
                    Swal.fire({
                        icon: 'error',
                        title: texts.error,
                        text: texts.disable_login
                    });
                } else if (data.status === 'unauthorized') {
                    Swal.fire({
                        icon: 'error',
                        title: texts.error,
                        text: texts.unauthorized
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: texts.error,
                    });
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'session_set') {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: texts.success,
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        window.location.href = 'index.php';
                    });
                } else {
                    console.error('Session could not be set:', data.message);
                    Swal.fire({
                        icon: 'error',
                        title: texts.error,
                        text: 'Session could not be set.'
                    });
                }
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            })
            .finally(() => {
                buttonLogin.disabled = false; // Re-enable the button
            });
    });
});