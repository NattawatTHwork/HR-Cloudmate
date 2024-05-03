if (token) {
    fetch(apiUrl + 'time_attendance/get_personal_all.php', {
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
    const selectGroup = document.getElementById('select_personal');
    datas.forEach(data => {
        const option = document.createElement('option');
        option.value = data.id;
        option.text = data.memfullname;
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('id')) {
            const id = urlParams.get('id');
            if (data.id === id) {
                option.selected = true;
            }
        }
        selectGroup.appendChild(option);
    });
}