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
        const date = new Date(datas.user_dates);
        date.setHours(date.getHours() + 5);

        const dateMonthFormatter = new Intl.DateTimeFormat('th-TH', { day: 'numeric', month: 'long' });
        const formattedDateMonth = dateMonthFormatter.format(new Date(date));

        const YearFormatter = new Intl.DateTimeFormat('us-US', { year: 'numeric' });
        const formattedYear = YearFormatter.format(new Date(date));

        const TimeFormatter = new Intl.DateTimeFormat('th-TH', { hour: 'numeric', minute: 'numeric' });
        const formattedTime = TimeFormatter.format(new Date(date));

        $("#username_view").val(datas.username);
        $("#firstname_view").val(datas.firstname);
        $("#lastname_view").val(datas.lastname);
        $("#group_name_view").val(datas.group_name);
        $("#personcode_view").val(datas.personcode);
        $("#dates_view").val(formattedDateMonth + ' ' + formattedYear + ' เวลา ' + formattedTime + ' น.');
        $("#user_statusflag_view").val(datas.user_statusflag === 't' ? 'เปิดใช้งาน' : 'ปิดใช้งาน');
        $("#view_data").modal("show");
    }
}