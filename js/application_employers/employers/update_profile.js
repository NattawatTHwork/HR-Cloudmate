if (token && role == 'employer') {
    fetch(apiUrl + 'application/employers/get_employer.php?employer_code=' + data_token.employer_code, {
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
    $("#employer_code").val(datas.employer_code);
    $("#employer_name").val(datas.employer_name);
    $("#firstname").val(datas.firstname);
    $("#lastname").val(datas.lastname);
    $("#phone_number").val(datas.phone_number);
    $("#img_path").val(datas.img_path);
    $("#link_path").val(datas.link_path);
    $("#showpic").attr("src", apiUrl + 'img/logo_employer/' + (datas.img_path ? datas.img_path : 'no_logo.jpg'));
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#showpic').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

document.getElementById('update_profile_data_form').addEventListener('submit', function (event) {
    event.preventDefault();
    const buttonUpdate = document.getElementById('button_update');
    buttonUpdate.disabled = true; // Disable the button

    if (token && role == 'employer') {
        const formData = new FormData(this);
        formData.append('changed_by', data_token.employer_code);

        fetch(apiUrl + 'application/employers/update_profile.php', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
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
            })
            .finally(() => {
                buttonUpdate.disabled = false; // Re-enable the button
            });
    } else {
        console.error('Token not found in local storage');
    }
});
