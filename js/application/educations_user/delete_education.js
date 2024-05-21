function delete_data(education_code, level) {
    const levelMap = {
        1: texts.m3,
        2: texts.m6,
        3: texts.vc,
        4: texts.hvc,
        5: texts.bd,
        6: texts.md,
        7: texts.dd
    };
    const levelText = levelMap[level] || 'ไม่ระบุ';
    Swal.fire({
        title: levelText,
        text: texts.want_delete,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: texts.delete,
        cancelButtonText: texts.cancel
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(apiUrl + 'application/educations/delete_education.php', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ education_code: education_code })
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