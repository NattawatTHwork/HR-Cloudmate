if (token && role == 'applicant') {
    window.location.href = pathUrl + '/application_users/index.php';
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

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
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('role', 'applicant');
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: texts.success,
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        window.location.href = 'index.php';
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
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    });
});