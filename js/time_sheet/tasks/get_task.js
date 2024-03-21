function view_data(task_id) {
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
        $("#task_code_view").val(datas.task_code);
        $("#task_name_view").val(datas.task_name);
        $("#description_view").val(datas.description);
        $("#personcode_view").val(datas.personcode);
        $("#dates_view").val(new Date(datas.dates).toLocaleString('th-TH'));
        $("#statusflag_view").val(datas.statusflag === 't' ? true : false);
        $("#view_data").modal("show");
    }
}