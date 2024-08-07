function view_data(employer_code) {
    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'admin') {
                fetch(apiUrl + 'application/employers/get_employer.php?employer_code=' + employer_code, {
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

        const YearFormatter = new Intl.DateTimeFormat('us-US', { year: 'numeric' });
        const formattedYear = YearFormatter.format(new Date(date));

        const TimeFormatter = new Intl.DateTimeFormat(texts.format, { hour: 'numeric', minute: 'numeric' });
        const formattedTime = TimeFormatter.format(new Date(date));

        $("#email_view").val(datas.email);
        $("#employer_name_view").val(datas.employer_name);
        $("#fullname_view").val(datas.firstname + ' ' + datas.lastname);
        $("#phone_number_view").val(datas.phone_number);
        $("#dates_view").val(formattedDateMonth + ' ' + formattedYear + texts.time + formattedTime + texts.na);
        $("#statusflag_view").val(datas.statusflag == 1 ? texts.enable : datas.statusflag == 2 ? texts.on_hold : texts.disable);
        $("#view_data").modal("show");
    }
}