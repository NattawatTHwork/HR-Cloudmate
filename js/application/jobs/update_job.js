function update_data(job_code) {
    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'member') {
                fetch(apiUrl + 'application/jobs/get_job.php?job_code=' + job_code, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${mySession.token}`
                    }
                })
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
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
        $("#job_code_update").val(datas.job_code);
        $("#position_update").val(datas.position);
        $('#job_category_code_dropdown_update option[value="' + datas.job_category_code + '"]').prop('selected', true);
        $('#employment_type_update option[value="' + datas.employment_type + '"]').prop('selected', true);
        $("#work_day_update").val(datas.work_day);
        $("#time_in_update").val(datas.time_in);
        $("#time_out_update").val(datas.time_out);
        $('#work_location_code_dropdown_update option[value="' + datas.work_location + '"]').prop('selected', true);
        if (datas.salary === 'agreed') {
            $("#agreed_update").prop('checked', true);
            $("#salary_update").val();
            document.getElementById('salary_update').disabled = true;
        } else {
            $("#agreed_update").prop('checked', false);
            $("#salary_update").val(datas.salary);
        }
        $("#description_update").val(datas.description);
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
            if (mySession.token && mySession.role === 'member') {
                const formData = new FormData(this);
                const jsonData = {};
                formData.forEach((value, key) => {
                    jsonData[key] = value;
                });
                jsonData['changed_by'] = mySession.user_id;

                if (jsonData['agreed'] && jsonData['agreed'] == 'on') {
                    jsonData['salary'] = 'agreed';
                    delete jsonData['agreed'];
                }

                fetch(apiUrl + 'application/jobs/update_job.php', {
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
