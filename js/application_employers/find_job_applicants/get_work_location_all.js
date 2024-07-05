if (token && role == 'employer') {
    fetch(apiUrl + 'application/work_location/get_work_location_all.php?language=' + language, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            displaySelectWorkLocation(data.data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
} else {
    console.error('Token not found in local storage');
}

function displaySelectWorkLocation(datas) {
    const selectWorkLocation = document.getElementById('select_work_location');
    datas.forEach(data => {
        const option = document.createElement('option');
        option.value = data.work_location_code;
        option.text = data.work_location;
        const urlParams_work_location = new URLSearchParams(window.location.search);
        if (urlParams_work_location.has('work_location_code')) {
            const work_location_code = urlParams_work_location.get('work_location_code');
            if (data.work_location_code === work_location_code) {
                option.selected = true;
            }
        }
        if (data.work_location_code === 'PV000001') {
            selectWorkLocation.insertBefore(option, selectWorkLocation.children[1]);
        } else {
            selectWorkLocation.appendChild(option);
        }
    });
}