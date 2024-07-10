function view_data(user_code) {
    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'member') {
                fetch(apiUrl + 'application/users/get_user.php?user_code=' + user_code, {
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

        const dateMonthFormatter = new Intl.DateTimeFormat(texts.format, { day: 'numeric', month: 'long' });
        const formattedDateMonth = dateMonthFormatter.format(new Date(date));
        const formattedDateMonthBirthday = dateMonthFormatter.format(new Date(datas.birthday));

        const YearFormatter = new Intl.DateTimeFormat(texts.format, { year: 'numeric' });
        const formattedYear = YearFormatter.format(new Date(date));
        const formattedBirthday = YearFormatter.format(new Date(datas.birthday));

        const TimeFormatter = new Intl.DateTimeFormat(texts.format, { hour: 'numeric', minute: 'numeric' });
        const formattedTime = TimeFormatter.format(new Date(date));

        $("#email_view").val(datas.email);
        $("#fullname_view").val(datas.firstname + ' ' + datas.lastname);
        $("#gender_view").val(datas.gender == 1 ? texts.male : datas.gender == 2 ? texts.female : texts.other);
        $("#birthday_view").val(formattedDateMonthBirthday + ' ' + formattedBirthday);
        $("#phone_number_view").val(datas.phone_number);
        $("#address_view").val(datas.user_address + ' ต.' + datas.sub_district + ' อ.' + datas.district + ' จ.' + datas.province + ' ' + datas.zip_code);
        $("#dates_view").val(formattedDateMonth + ' ' + formattedYear + texts.time + formattedTime + texts.na);
        $("#statusflag_view").val(datas.statusflag === 't' ? texts.enable : texts.disable);
        $("#view_data").modal("show");
    }
}