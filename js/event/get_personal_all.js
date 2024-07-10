getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'member') {
            fetch(apiUrl + 'time_attendance/get_personal_all.php', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
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
    })
    .catch(error => console.error('Error fetching session token:', error));

function displaySelect(datas) {
    const selectGroup = document.getElementById('select_personal');
    datas.forEach(data => {
        const option = document.createElement('option');
        option.value = data.id;
        option.text = data.mem_fullname;
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