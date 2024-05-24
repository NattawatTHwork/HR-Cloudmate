function delete_data(apply_work_code, position) {
    Swal.fire({
        title: position,
        text: texts.want_delete,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: texts.delete,
        cancelButtonText: texts.cancel
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(apiUrl + 'application/apply_works/delete_apply_work.php', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ apply_work_code: apply_work_code })
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