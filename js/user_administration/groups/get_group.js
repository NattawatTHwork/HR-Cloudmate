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
        const date = new Date(datas.dates);
        date.setHours(date.getHours() + 5);

        const dateMonthFormatter = new Intl.DateTimeFormat(texts.format, { day: 'numeric', month: 'long' });
        const formattedDateMonth = dateMonthFormatter.format(new Date(date));

        const YearFormatter = new Intl.DateTimeFormat(texts.format, { year: 'numeric' });
        const formattedYear = YearFormatter.format(new Date(date));

        const TimeFormatter = new Intl.DateTimeFormat(texts.format, { hour: 'numeric', minute: 'numeric' });
        const formattedTime = TimeFormatter.format(new Date(date));
        $("#group_code_view").val(datas.group_code);
        $("#group_name_view").val(datas.group_name);
        $("#personcode_view").val(datas.personcode);
        $("#dates_view").val(formattedDateMonth + ' ' + formattedYear + texts.time + formattedTime + texts.na);
        $("#statusflag_view").val(datas.statusflag === 't' ? texts.enable : texts.disable);
        $("#view_data").modal("show");
    }
}