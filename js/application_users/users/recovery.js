document.getElementById('recovery').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    fetch(apiUrl + 'application/users/recovery.php', {
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
                        const form = document.createElement('form');
                        form.method = 'POST';
                        form.action = 'reset_password.php';
                        Object.keys(jsonData).forEach(key => {
                            const input = document.createElement('input');
                            input.type = 'hidden';
                            input.name = key;
                            input.value = jsonData[key];
                            form.appendChild(input);
                        });
                        document.body.appendChild(form);
                        form.submit();
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
});
