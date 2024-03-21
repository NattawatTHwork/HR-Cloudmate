if (token) {
    fetch(apiUrl + 'user_administration/users/get_user_all.php', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            displaySelect(data.data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
} else {
    console.error('Token not found in local storage');
}

function displaySelect(datas) {
    const selectGroup = document.getElementById('select_user');
    datas.forEach(data => {
        const option = document.createElement('option');
        option.value = data.user_id;
        option.text = data.username;
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('user_id')) {
            const user_id = urlParams.get('user_id');
            if (data.user_id === user_id) {
                option.selected = true;
            }
        }
        selectGroup.appendChild(option);
    });
}