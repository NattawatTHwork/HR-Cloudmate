function view_data(employer_code) {
    if (token && role == 'member') {
        fetch(apiUrl + 'application/employers/get_employer.php?employer_code=' + employer_code, {
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
        const dateMonthFormatter = new Intl.DateTimeFormat('th-TH', { day: 'numeric', month: 'long' });
        const formattedDateMonth = dateMonthFormatter.format(new Date(datas.dates));

        const YearFormatter = new Intl.DateTimeFormat('us-US', { year: 'numeric' });
        const formattedYear = YearFormatter.format(new Date(datas.dates));

        const TimeFormatter = new Intl.DateTimeFormat('th-TH', { hour: 'numeric', minute: 'numeric' });
        const formattedTime = TimeFormatter.format(new Date(datas.dates));

        $("#email_view").val(datas.email);
        $("#employer_name_view").val(datas.employer_name);
        $("#fullname_view").val(datas.firstname + ' ' + datas.lastname);
        $("#phone_number_view").val(datas.phone_number);
        $("#dates_view").val(formattedDateMonth + ' ' + formattedYear + ' เวลา ' + formattedTime + ' น.');
        $("#statusflag_view").val(datas.statusflag === 't' ? 'เปิดใช้งาน' : 'ปิดใช้งาน');
        $("#view_data").modal("show");
    }
}