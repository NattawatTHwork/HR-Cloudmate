async function delete_data(referred_job_code, position) {
    const response = await fetch('https://api.ipify.org?format=json');
    ip_address = await response.json();
    const mySession = await getSessionToken();
    Swal.fire({
        title: position,
        text: texts.want_delete,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: texts.delete,
        cancelButtonText: texts.cancel
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(apiUrl + 'application/referred_jobs/delete_referred_job.php', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    referred_job_code: referred_job_code,
                    action: 'delete',
                    ip_address: ip_address['ip'],
                    changed_by: mySession.user_id
                 })
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