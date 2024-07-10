getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'employer') {
            fetch(apiUrl + 'application/employers/get_employer_header.php?employer_code=' + mySession.employer_code, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    document.getElementById('fullname').textContent = data.data.firstname + ' ' + data.data.lastname;
                    document.getElementById('fullname_sub').textContent = data.data.firstname + ' ' + data.data.lastname;
                    document.getElementById('employer_name_head').textContent = data.data.employer_name;
                    document.getElementById('image').src = apiUrl + 'img/logo_employer/' + (data.data.img_path ? data.data.img_path : 'no_logo.jpg');
                    document.getElementById('statusflag').textContent = (data.data.statusflag == 1 ? texts.enable : data.data.statusflag == 2 ? texts.on_hold : data.data.statusflag == 3 ? texts.disable : '');
                    document.getElementById('statusflag').classList = (data.data.statusflag == 1 ? 'fw-bold text-success' : data.data.statusflag == 2 ? 'fw-bold text-warning' : data.data.statusflag == 3 ? 'fw-bold text-danger' : '');
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        } else {
            console.error('Token not found in local storage');
        }
    })
    .catch(error => console.error('Error fetching session token:', error));