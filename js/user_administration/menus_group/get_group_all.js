if (token) {
    fetch(apiUrl + 'user_administration/groups/get_group_all.php', {
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
    const selectGroup = document.getElementById('select_group');
    datas.forEach(data => {
        const option = document.createElement('option');
        option.value = data.group_id;
        option.text = data.group_name;
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('group_id')) {
            const group_id = urlParams.get('group_id');
            if (data.group_id === group_id) {
                option.selected = true;
            }
        }
        selectGroup.appendChild(option);
    });
}