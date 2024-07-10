async function delete_data(education_code, level) {
    const response = await fetch('https://api.ipify.org?format=json');
    ip_address = await response.json();
    const mySession = await getSessionToken();
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
                    'Authorization': `Bearer ${mySession.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    education_code: education_code,
                    action: 'delete',
                    ip_address: ip_address['ip'],
                    changed_by: mySession.user_code
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