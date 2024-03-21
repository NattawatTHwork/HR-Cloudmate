function view_data(user_code) {
    if (token) {
        fetch(apiUrl + 'application/users/get_user.php?user_code=' + user_code, {
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
        $("#user_password_view").val(datas.user_password);
        $("#fullname_view").val(datas.firstname+' '+datas.lastname);
        $("#gender_view").val(datas.gender === 1 ? 'ชาย' : datas.gender === 2 ? 'หญิง' : 'อื่นๆ');
        $("#birthday_view").val(new Date(datas.birthday).toLocaleDateString('th-TH'));
        $("#phone_number_view").val(datas.phone_number);
        $("#address_view").val(datas.user_address+' ต.'+datas.sub_district+' อ.'+datas.district+' จ.'+datas.province+' '+datas.zip_code);
        $("#dates_view").val(new Date(datas.dates).toLocaleString('th-TH'));
        $("#statusflag_view").val(datas.statusflag === 't' ? true : false);
        $("#view_data").modal("show");
    }
}