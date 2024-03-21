function view_data(group_id) {
    if (token) {
        fetch(apiUrl + 'user_administration/groups/get_group.php?group_id=' + group_id, {
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
        $("#group_code_view").val(datas.group_code);
        $("#group_name_view").val(datas.group_name);
        $("#personcode_view").val(datas.personcode);
        $("#dates_view").val(new Date(datas.dates).toLocaleString('th-TH'));
        $("#statusflag_view").val(datas.statusflag === 't' ? true : false);
        $("#view_data").modal("show");
    }
}