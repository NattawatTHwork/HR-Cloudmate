getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'member') {
            fetch(apiUrl + 'user_administration/groups/get_group_all.php', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const selectCreate = document.getElementById('group_name_dropdown_create');
                    const selectUpdate = document.getElementById('group_name_dropdown_update');

                    data.data.forEach(group => {
                        const option = document.createElement('option');
                        option.value = group.group_id;
                        option.text = group.group_name;
                        selectCreate.appendChild(option);
                    });
                    data.data.forEach(group => {
                        const option = document.createElement('option');
                        option.value = group.group_id;
                        option.text = group.group_name;
                        selectUpdate.appendChild(option);
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
