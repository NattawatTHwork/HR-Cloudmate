function delete_data(referred_job_code, position) {
    Swal.fire({
        title: position,
        text: 'คุณต้องการลบใช่ไหม',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ลบ',
        cancelButtonText: 'ยกเลิก'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(apiUrl + 'application/referred_jobs/delete_referred_job.php', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ referred_job_code: referred_job_code })
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
                                location.reload();
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
        }
    })
}