if (token && role == 'employer') {
    window.location.href = pathUrl + '/application_employers/index.php';
}

document.getElementById("acceptTerms").addEventListener("change", function () {
    document.getElementById("submitBtn").disabled = !this.checked;
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const buttonRegister = document.getElementById('submitBtn');
        buttonRegister.disabled = true; // Disable the button

        const formData = new FormData(form);
        const password = formData.get('employer_password');
        const repeatPassword = formData.get('employer_repeat_password');
        if (password.length < 6) {
            document.getElementById('alertpassword').style.display = 'block';
            buttonRegister.disabled = false;
            return;
        } else if (password !== repeatPassword) {
            document.getElementById('alertpassword').style.display = 'none';
            document.getElementById('alertrepeatpassword').style.display = 'block';
            buttonRegister.disabled = false;
            return;
        }

        const jsonData = {};
        formData.forEach(function (value, key) {
            jsonData[key] = value;
        });

        fetch(apiUrl + 'application/employers/create_employer.php', {
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
                        title: texts.success,
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        window.location.href = 'login.php';
                    });
                } else if (data.status === 'exist') {
                    Swal.fire({
                        icon: 'error',
                        title: texts.error,
                        text: texts.exist
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
            })
            .finally(() => {
                buttonRegister.disabled = false; // Re-enable the button
            });
    });
});
