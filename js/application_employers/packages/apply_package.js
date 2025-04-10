async function apply_package(package_code, package, amount, period_month, price) {
    const mySession = await getSessionToken();
    if (mySession.token && mySession.role === 'employer') {
        const response = await fetch('https://api.ipify.org?format=json');
        ip_address = await response.json();

        const jsonData = {
            package_code: package_code,
            employer_code: mySession.employer_code,
            amount: amount,
            period_month: period_month,
            package: package,
            price: price,
            ip_address: ip_address['ip'],
            changed_by: mySession.employer_code
        };

        Swal.fire({
            title: package,
            text: texts.want_apply_package,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: texts.accept,
            cancelButtonText: texts.cancel
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(apiUrl + 'application/packages/apply_package.php', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${mySession.token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(jsonData)
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 'success') {
                            Swal.fire({
                                icon: 'success',
                                title: texts.success,
                            }).then(() => {
                                window.location.href = pathUrl + '/application_employers/package_payment.php';
                            });
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: texts.error,
                            }).then(() => location.reload());
                        }
                        // เปิดใช้งานทุกปุ่มหลังจากได้รับการตอบกลับ
                        const buttons = document.querySelectorAll('#cardContainer .btn');
                        buttons.forEach(button => button.disabled = false);
                    })
                    .catch(error => {
                        console.error('There was a problem with the update:', error);
                        // เปิดใช้งานทุกปุ่มหากเกิดข้อผิดพลาด
                        const buttons = document.querySelectorAll('#cardContainer .btn');
                        buttons.forEach(button => button.disabled = false);
                    });
            } else {
                // เปิดใช้งานทุกปุ่มหากผู้ใช้ยกเลิก
                const buttons = document.querySelectorAll('#cardContainer .btn');
                buttons.forEach(button => button.disabled = false);
            }
        });
    } else {
        console.error('Token not found in local storage');
    }
}