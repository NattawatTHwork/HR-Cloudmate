function update_data(part_time_user_code) {
    getSessionToken()
        .then(mySession => {
            if (mySession.token) {
                fetch(apiUrl + 'application/part_time_users/get_part_time_user.php?part_time_user_code=' + part_time_user_code, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${mySession.token}`
                    }
                })
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        show_data(data.data);
                    })
                    .catch(error => {
                        console.error('There has been a problem with your fetch operation:', error);
                    });
            } else {
                console.error('Token not found in local storage');
            }
        })
        .catch(error => console.error('Error fetching session token:', error));

    function show_data(datas) {
        $("#part_time_user_code_update").val(datas.part_time_user_code);
        $("#email_update").val(datas.email);
        $("#firstname_update").val(datas.firstname);
        $("#lastname_update").val(datas.lastname);
        $("#gender_update").val(datas.gender);
        $("#birthday_update").val(datas.birthday);
        $("#phone_number_update").val(datas.phone_number);
        $('#statusflag_update option[value="' + datas.statusflag + '"]').prop('selected', true);
        $("#form_update_data").modal("show");
    }
}

document.getElementById('update_data_form').addEventListener('submit', function (event) {
    event.preventDefault();
    const buttonUpdate = document.getElementById('button_update');
    buttonUpdate.disabled = true; // Disable the button

    getSessionToken()
        .then(mySession => {
            if (mySession.token) {
                const formData = new FormData(this);
                const jsonData = {};
                formData.forEach((value, key) => {
                    jsonData[key] = value;
                });
                jsonData['changed_by'] = mySession.admin_code;

                fetch(apiUrl + 'application/part_time_users/update_part_time_user.php', {
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
                    })
                    .finally(() => {
                        buttonUpdate.disabled = false; // Re-enable the button
                    });
            } else {
                console.error('Token not found in local storage');
            }
        })
        .catch(error => console.error('Error fetching session token:', error));
});
