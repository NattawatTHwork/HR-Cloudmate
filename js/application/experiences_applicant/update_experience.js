function update_data(education_code) {
    if (token && role == 'applicant') {
        fetch(apiUrl + 'application/experiences/get_experience.php?experience_code=' + education_code, {
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
        $("#experience_code_update").val(datas.experience_code);
        $("#company_name_update").val(datas.company_name);
        $("#position_update").val(datas.position);
        $('#job_category_code_dropdown_update option[value="' + datas.job_category_code + '"]').prop('selected', true);
        $('#statusflag_update option[value="' + datas.statusflag + '"]').prop('selected', true);
        $("#form_update_data").modal("show");
    }
}

document.getElementById('update_data_form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (token && role == 'applicant') {
        const formData = new FormData(this);
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        fetch(apiUrl + 'application/experiences/update_experience.php', {
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