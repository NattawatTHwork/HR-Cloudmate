if (token && role == 'employer') {
    fetch(apiUrl + 'application/employers/get_employer_header.php?employer_code=' + data_token.employer_code, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            document.getElementById('fullname').textContent = data.data.firstname + ' ' + data.data.lastname;
            document.getElementById('fullname_sub').textContent = data.data.firstname + ' ' + data.data.lastname;
            document.getElementById('employer_name_head').textContent = data.data.employer_name;
            document.getElementById('image').src = apiUrl+'img/logo_employer/'+(data.data.img_path ? data.data.img_path : 'no_logo.jpg');
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
} else {
    console.error('Token not found in local storage');
}