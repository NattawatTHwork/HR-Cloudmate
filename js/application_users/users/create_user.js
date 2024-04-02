if (token && role == 'applicant') {
    window.location.href = pathUrl + '/application/users_applicant/index.php';
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
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

        const jsonData = {};
        formData.forEach(function (value, key) {
            jsonData[key] = value;
        });

        fetch(apiUrl + 'application/users/create_user.php', {
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
                        position: "center",
                        icon: "success",
                        title: "Register successful",
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        window.location.href = 'login.php';
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: data.status.toUpperCase(),
                        text: data.message
                    });
                }
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    });
});
