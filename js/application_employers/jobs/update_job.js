function update_data(job_code) {
    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'employer') {
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
        console.log(datas)
        $("#job_code_update").val(datas.job_code);
        $("#position_update").val(datas.position);
        $('#job_category_code_dropdown_update option[value="' + datas.job_category_code + '"]').prop('selected', true);
        $('#employment_type_code_dropdown_update option[value="' + datas.employment_type + '"]').prop('selected', true);
        $("#work_day_update_hidden").val(datas.work_day);
        const workDays = datas.work_day.split(',');
        // Checking checkboxes based on the values in workDays array
        workDays.forEach(day => {
            $(`input[name='work_day_update'][value='${day}']`).prop('checked', true);
        });
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
        if (datas.statusflag === '3' && data_status === false) {
            $('#statusflag_update').prop('disabled', true);
        } else {
            $('#statusflag_update').prop('disabled', false); // Ensure it's enabled for other values
        }
        $("#other_type_update_hidden").val(datas.other_type);
        if (datas.other_type) {
            const selectedOtherTypes = datas.other_type.split(',');
            selectedOtherTypes.forEach(type => {
                $(`#other_type_update_${type}`).prop('checked', true);
            });
        }
        $("#form_update_data").modal("show");
    }

    function clearModalData() {
        // Target only the checkboxes within the modal with id 'form_update_data'
        $("#form_update_data input[type='checkbox']").prop('checked', false);
    
        // Clear input fields within the modal with id 'form_update_data'
        $("#form_update_data #job_code_update").val('');
        $("#form_update_data #position_update").val('');
        $("#form_update_data #work_day_update").val('');
        $("#form_update_data #time_in_update").val('');
        $("#form_update_data #time_out_update").val('');
        $("#form_update_data #salary_update").val('');
        $("#form_update_data #description_update").val('');
    
        // Clear select dropdowns within the modal with id 'form_update_data'
        $('#form_update_data #job_category_code_dropdown_update').val('');
        $('#form_update_data #employment_type_code_dropdown_update').val('');
        $('#form_update_data #work_location_code_dropdown_update').val('');
        $('#form_update_data #statusflag_update').val('');
    
        // Enable any disabled fields within the modal
        document.getElementById('salary_update').disabled = false;
        $('#statusflag_update').prop('disabled', false);
    
        // Optionally, hide the modal if needed
        $("#form_update_data").modal("hide");
    }
    
    $('#form_update_data').on('hidden.bs.modal', function (e) {
        clearModalData();
    });    
}

document.getElementById('update_data_form').addEventListener('submit', function (event) {
    event.preventDefault();
    const buttonUpdate = document.getElementById('button_update');
    buttonUpdate.disabled = true; // Disable the button

    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'employer') {
                const formData = new FormData(this);
                const jsonData = {};
                formData.forEach((value, key) => {
                    jsonData[key] = value;
                });
                jsonData['changed_by'] = mySession.employer_code;

                if (jsonData['agreed'] && jsonData['agreed'] == 'on') {
                    jsonData['salary'] = 'agreed';
                    delete jsonData['agreed'];
                    delete jsonData['other_type_update[]'];
                }
                delete jsonData['work_day_update'];

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
                        console.log(data)
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
