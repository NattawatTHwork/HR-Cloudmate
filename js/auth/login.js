getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role == 'member') {
            window.location.href = pathUrl + '/index.php';
        }
    })
    .catch(error => console.error('Error fetching session token:', error));

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const buttonLogin = document.getElementById('button_login');
        buttonLogin.disabled = true; // Disable the button
    
        const formData = new FormData(form);

        fetch(apiUrl + 'auth/login.php', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.status === 'success') {
                    const payloadBase64 = data.token.split('.')[1];
                    const data_token = JSON.parse(atob(payloadBase64));

                    const postData = {
                        token: data.token,
                        role: 'member'
                    };

                    for (const [key, value] of Object.entries(data_token)) {
                        postData[key] = value;
                    }

                    return fetch(pathUrl + '/php/set_session_token.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(postData)
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