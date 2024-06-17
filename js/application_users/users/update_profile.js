if (token && role == 'applicant') {
    fetch(apiUrl + 'application/users/get_user.php?user_code=' + data_token.user_code, {
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
    $("#user_code").val(datas.user_code);
    $("#firstname").val(datas.firstname);
    $("#lastname").val(datas.lastname);
    $("#gender").val(datas.gender);
    $("#birthday").val(datas.birthday);
    $("#phone_number").val(datas.phone_number);
    $("#user_address").val(datas.user_address);
    $("#sub_district").val(datas.sub_district);
    $("#district").val(datas.district);
    $("#province").val(datas.province);
    $("#zip_code").val(datas.zip_code);
}

document.getElementById('update_profile_data_form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (token && role == 'applicant') {
        const formData = new FormData(this);
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });
        jsonData['changed_by'] = data_token.user_code;

        fetch(apiUrl + 'application/users/update_profile.php', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.status === 'success') {
                    Swal.fire({
                        icon: 'success',
                        title: texts.success,
                    })
                        .then(function () {
                            location.reload();
                        });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: texts.error,
                    })
                        .then(function () {
                            location.reload();
                        });
                }
            })
            .catch(error => {
                console.error('There was a problem with the update:', error);
            });
    } else {
        console.error('Token not found in local storage');
    }
});
