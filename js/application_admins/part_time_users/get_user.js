function view_data(part_time_user_code) {
    getSessionToken()
        .then(mySession => {
            if (mySession.token) {
                fetch(apiUrl + 'application/part_time_users/get_part_time_user.php?part_time_user_code=' + part_time_user_code, {
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
        const date = new Date(datas.dates);
        date.setHours(date.getHours() + 5);

        const dateMonthFormatter = new Intl.DateTimeFormat('th-TH', { day: 'numeric', month: 'long' });
        const formattedDateMonth = dateMonthFormatter.format(new Date(date));
        const formattedDateMonthBirthday = dateMonthFormatter.format(new Date(datas.birthday));

        const YearFormatter = new Intl.DateTimeFormat('th-TH', { year: 'numeric' });
        const formattedYear = YearFormatter.format(new Date(date));
        const formattedBirthday = YearFormatter.format(new Date(datas.birthday));

        const TimeFormatter = new Intl.DateTimeFormat('th-TH', { hour: 'numeric', minute: 'numeric' });
        const formattedTime = TimeFormatter.format(new Date(date));

        $("#email_view").val(datas.email);
        $("#fullname_view").val(datas.firstname + ' ' + datas.lastname);
        $("#gender_view").val(datas.gender == 1 ? 'ชาย' : datas.gender == 2 ? 'หญิง' : 'อื่นๆ');
        $("#birthday_view").val(formattedDateMonthBirthday + ' ' + formattedBirthday);
        $("#phone_number_view").val(datas.phone_number);
        $("#dates_view").val(formattedDateMonth + ' ' + formattedYear + ' เวลา ' + formattedTime + ' น.');
        $("#statusflag_view").val(datas.statusflag === 't' ? 'เปิดใช้งาน' : 'ปิดใช้งาน');
        $("#view_data").modal("show");
    }
}