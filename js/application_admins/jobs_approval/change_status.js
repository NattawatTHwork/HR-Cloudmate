async function change_status(job_code, statusflag) {
    const response = await fetch('https://api.ipify.org?format=json');
    ip_address = await response.json();
    const mySession = await getSessionToken();
    name_status = statusflag == 1 ? texts.enable : statusflag == 2 ? texts.on_hold : statusflag == 3 ? texts.disable : '';
    Swal.fire({
        title: name_status,
        text: texts.want_statusflag,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: texts.okay,
        cancelButtonText: texts.cancel
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(apiUrl + 'application/jobs/change_status.php', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    job_code: job_code,
                    statusflag: statusflag,
                    action: 'change_status',
                    ip_address: ip_address['ip'],
                    changed_by: mySession.admin_code
                })
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