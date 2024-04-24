

document.getElementById('reset_password').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    fetch(apiUrl + 'application/employers/reset_password.php', {
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
                    title: data.status.toUpperCase(),
                    text: data.message
                })
                    .then(function () {
                        window.location.href = 'login.php';
                    });
            } else if (data.status === 'error') {
                Swal.fire({
                    icon: 'error',
                    title: data.status.toUpperCase(),
                    text: data.message
                })
            } else if (data.status === 'bad_request') {
                Swal.fire({
                    icon: 'error',
                    title: data.status.toUpperCase(),
                    text: data.message
                })
            } else if (data.status === 'unauthorized') {
                Swal.fire({
                    icon: 'error',
                    title: data.status.toUpperCase(),
                    text: data.message
                })
            }
        })
        .catch(error => {
            console.error('There was a problem with the update:', error);
        });
});
