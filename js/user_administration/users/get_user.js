function view_data(user_id) {
    if (token) {
        fetch(apiUrl + 'user_administration/users/get_user.php?user_id=' + user_id, {
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
        $("#username_view").val(datas.username);
        $("#user_password_view").val(datas.user_password);
        $("#firstname_view").val(datas.firstname);
        $("#lastname_view").val(datas.lastname);
        $("#group_name_view").val(datas.group_name);
        $("#personcode_view").val(datas.personcode);
        $("#dates_view").val(new Date(datas.dates).toLocaleString('th-TH'));
        $("#user_statusflag_view").val(datas.user_statusflag === 't' ? true : false);
        $("#view_data").modal("show");
    }
}