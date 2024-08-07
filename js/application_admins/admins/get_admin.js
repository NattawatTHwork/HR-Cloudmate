function view_data(admin_code) {
    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'admin') {
                fetch(apiUrl + 'application/admins/get_admin.php?admin_code=' + admin_code, {
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
        $("#email_view").val(datas.email);
        $("#fullname_view").val(datas.firstname + ' ' + datas.lastname);
        $("#statusflag_view").val(datas.statusflag == 't' ? texts.enable : texts.disable);
        $("#view_data").modal("show");
    }
}