async function delete_data(part_time_user_code, fullname) {
    const response = await fetch('https://api.ipify.org?format=json');
    ip_address = await response.json();
    const mySession = await getSessionToken();
    Swal.fire({
        title: fullname,
        text: 'คุณต้องการลบใช่ไหม',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ลบ',
        cancelButtonText: 'ยกเลิก'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(apiUrl + 'application/part_time_users/delete_part_time_user.php', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    part_time_user_code: part_time_user_code,
                    action: 'delete',
                    ip_address: ip_address['ip'],
                    changed_by: mySession.admin_code
                })
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    if (data.status === 'success') {
                        Swal.fire({
                            icon: 'success',
                            title: 'สำเร็จ',
                        })
                            .then(function () {
                                location.reload();
                            });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'เกิดข้อผิดพลาด',
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