function update_data(job_code) {
    if (token && role == 'employer') {
        fetch(apiUrl + 'application/jobs/get_job.php?job_code=' + job_code, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
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

    function show_data(datas) {
        $("#job_code_update").val(datas.job_code);
        $("#position_update").val(datas.position);
        $('#job_category_code_dropdown_update option[value="' + datas.job_category_code + '"]').prop('selected', true);
        $('#employment_type_update option[value="' + datas.employment_type + '"]').prop('selected', true);
        $("#work_day_update").val(datas.work_day);
        $("#time_in_update").val(datas.time_in);
        $("#time_out_update").val(datas.time_out);
        $("#work_location_update").val(datas.work_location);
        $("#salary_update").val(datas.salary);
        $("#description_update").val(datas.description);
        $('#statusflag_update option[value="' + datas.statusflag + '"]').prop('selected', true);
        $("#form_update_data").modal("show");
    }
}

document.getElementById('update_data_form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (token && role == 'employer') {
        const formData = new FormData(this);
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        fetch(apiUrl + 'application/jobs/update_job.php', {
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
    } else {
        console.error('Token not found in local storage');
    }
});