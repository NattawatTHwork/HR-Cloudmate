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
        $("#email_view").val(datas.email);
        $("#employer_password_view").val(datas.employer_password);
        $("#employer_name_view").val(datas.employer_name);
        $("#fullname_view").val(datas.firstname+' '+datas.lastname);
        $("#phone_number_view").val(datas.phone_number);
        $("#dates_view").val(new Date(datas.dates).toLocaleString('th-TH'));
        $("#statusflag_view").val(datas.statusflag === 't' ? true : false);
        $("#view_data").modal("show");
    }
}