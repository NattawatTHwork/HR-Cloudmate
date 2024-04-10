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
                    title: data.status.toUpperCase(),
                    text: data.message
                })
                    .then(function () {
                        // Create a form element
                        const form = document.createElement('form');
                        // Set the method to POST
                        form.method = 'POST';
                        // Set the action to the target URL
                        form.action = 'reset_password.php';
                        // Create an input element for each key-value pair in jsonData
                        Object.keys(jsonData).forEach(key => {
                            const input = document.createElement('input');
                            input.type = 'hidden';
                            input.name = key;
                            input.value = jsonData[key];
                            form.appendChild(input);
                        });
                        // Append the form to the document body
                        document.body.appendChild(form);
                        // Submit the form
                        form.submit();
                    });
            } else if (data.status === 'error') {
                Swal.fire({
                    icon: 'error',
                    title: data.status.toUpperCase(),
                    text: data.message
                })
                    .then(function () {
                        location.reload();
                    });
            } else if (data.status === 'bad_request') {
                Swal.fire({
                    icon: 'error',
                    title: data.status.toUpperCase(),
                    text: data.message
                })
                    .then(function () {
                        location.reload();
                    });
            } else if (data.status === 'unauthorized') {
                Swal.fire({
                    icon: 'error',
                    title: data.status.toUpperCase(),
                    text: data.message
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
