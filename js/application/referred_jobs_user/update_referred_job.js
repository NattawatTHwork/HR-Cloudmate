function update_data(referred_job_code) {
    if (token && role == 'member') {
        fetch(apiUrl + 'application/referred_jobs/get_referred_job.php?referred_job_code=' + referred_job_code, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
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

    function show_data(datas) {
        $("#referred_job_code_update").val(datas.referred_job_code);
        $("#position_update").val(datas.position);
        $('#job_category_code_dropdown_update option[value="' + datas.job_category_code + '"]').prop('selected', true);
        $('#employment_type_update option[value="' + datas.employment_type + '"]').prop('selected', true);
        $("#expect_salary_update").val(datas.expect_salary);
        $("#work_location_update").val(datas.work_location);
        $('#statusflag_update option[value="' + datas.statusflag + '"]').prop('selected', true);
        $("#form_update_data").modal("show");
    }
}

document.getElementById('update_data_form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (token && role == 'member') {
        const formData = new FormData(this);
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        fetch(apiUrl + 'application/referred_jobs/update_referred_job.php', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
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
    } else {
        console.error('Token not found in local storage');
    }
});
