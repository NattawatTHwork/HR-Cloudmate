document.getElementById("createButton").addEventListener("click", function () {
    if (token) {
        fetch(apiUrl + 'user_administration/users/get_user_all.php', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                show_user_data(data.data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });

        fetch(apiUrl + 'time_sheet/tasks/get_task_all.php', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                show_task_data(data.data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    } else {
        console.error('Token not found in local storage');
    }

    function show_user_data(datas) {
        const selectCreate = document.getElementById('username_dropdown_create');
        datas.forEach(data => {
            const option = document.createElement('option');
            option.value = data.user_id;
            option.text = data.username;
            selectCreate.appendChild(option);
        });
    }

    function show_task_data(datas) {
        const selectCreate = document.getElementById('task_name_dropdown_create');
        datas.forEach(data => {
            const option = document.createElement('option');
            option.value = data.task_id;
            option.text = data.task_name;
            selectCreate.appendChild(option);
        });
    }

    const formGroup = document.getElementById('form_create_data');
    const modalElement = new bootstrap.Modal(formGroup);
    modalElement.show();
});

document.getElementById('create_data_form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (token) {
        const formData = new FormData(this);
        formData.append('personcode', data_token.username);
        const urlParams = new URLSearchParams(window.location.search);
        formData.append('user_id', urlParams.get('user_id'));

        const formDataObject = Object.fromEntries(formData);
        console.log(formDataObject);


        fetch(apiUrl + 'time_sheet/timesheet_user/create_timesheet_user.php', {
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