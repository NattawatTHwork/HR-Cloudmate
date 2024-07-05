if (token && role == 'member') {
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
            const selectUpdate = document.getElementById('work_location_code_dropdown_update');

            data.data.forEach(work_location => {
                const option = document.createElement('option');
                option.value = work_location.work_location_code;
                option.text = work_location.work_location;

                if (work_location.work_location_code === 'PV000001') {
                    selectUpdate.insertBefore(option, selectUpdate.firstChild);
                } else {
                    selectUpdate.appendChild(option);
                }
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
} else {
    console.error('Token not found in local storage');
}
