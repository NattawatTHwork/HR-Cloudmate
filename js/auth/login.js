if (token) {
    window.location.href = 'index.php';
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

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
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('role', 'member');
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Login successful",
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        window.location.href = 'index.php';
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