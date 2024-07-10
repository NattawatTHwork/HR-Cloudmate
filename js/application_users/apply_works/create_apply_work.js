async function apply_work(job_code, position, job_category_code, salary) {
    const response = await fetch('https://api.ipify.org?format=json');
    ip_address = await response.json();
    const mySession = await getSessionToken();
    const jsonData = {
        user_code: mySession.user_code,
        job_code: job_code,
        position: position,
        job_category_code: job_category_code,
        salary: salary,
        action: 'apply_work',
        ip_address: ip_address['ip'],
        changed_by: mySession.user_code
    };

    Swal.fire({
        title: position,
        text: texts.want_apply,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: texts.okay,
        cancelButtonText: texts.cancel
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(apiUrl + 'application/apply_works/create_apply_work.php', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`,
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