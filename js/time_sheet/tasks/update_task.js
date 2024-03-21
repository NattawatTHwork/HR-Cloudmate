function update_data(task_id) {
    if (token) {
        fetch(apiUrl + 'time_sheet/tasks/get_task.php?task_id=' + task_id, {
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
        $("#task_id_update").val(datas.task_id);
        $("#task_code_update").val(datas.task_code);
        $("#task_name_update").val(datas.task_name);
        $("#description_update").val(datas.description);
        $('#statusflag_update option[value="' + datas.statusflag + '"]').prop('selected', true);
        $("#form_update_data").modal("show");
    }
}

document.getElementById('update_data_form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (token) {
        const formData = new FormData(this);
        formData.append('personcode', data_token.username);

        fetch(apiUrl + 'time_sheet/tasks/update_task.php', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
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
