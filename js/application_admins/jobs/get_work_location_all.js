getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'admin') {
            fetch(apiUrl + 'application/work_location/get_work_location_all.php?language=' + mySession.language, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                const selectUpdate = document.getElementById('work_location_code_dropdown_update');

                const emptyOptionUpdate = document.createElement('option');
                emptyOptionUpdate.value = '';
                emptyOptionUpdate.text = texts.not_specified;
                selectUpdate.appendChild(emptyOptionUpdate);

                data.data.forEach(work_location => {
                    const option = document.createElement('option');
                    option.value = work_location.work_location_code;
                    option.text = work_location.work_location;

                    if (work_location.work_location_code === 'PV000001') {
                        selectUpdate.insertBefore(option, selectUpdate.children[1]);
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
    })
    .catch(error => console.error('Error fetching session token:', error));