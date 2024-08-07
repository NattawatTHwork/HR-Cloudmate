async function delete_data(admin_code, email) {
    console.log(admin_code)
    const response = await fetch('https://api.ipify.org?format=json');
    ip_address = await response.json();
    const mySession = await getSessionToken();
    Swal.fire({
        title: email,
        text: texts.want_delete,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: texts.delete,
        cancelButtonText: texts.cancel
    }).then((result) => {
        if (result.isConfirmed) {
            const formData = new FormData();
            formData.append('admin_code', admin_code);
            formData.append('ip_address', ip_address['ip']);
            formData.append('action', 'delete');
            formData.append('changed_by', mySession.admin_code);

            const jsonData = {};
            formData.forEach(function (value, key) {
                jsonData[key] = value;
            });
            jsonData['admin_code'] = admin_code;
            jsonData['ip_address'] = ip_address['ip'];
            jsonData['action'] = 'delete';
            jsonData['changed_by'] = mySession.admin_code;

            fetch(apiUrl + 'application/admins/delete_admin.php', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                },
                body: JSON.stringify(jsonData)
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    if (data.status === 'success') {
                        Swal.fire({
                            icon: 'success',
                            title: texts.success,
                        })
                            .then(function () {
                                location.reload();
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
        }
    })
}