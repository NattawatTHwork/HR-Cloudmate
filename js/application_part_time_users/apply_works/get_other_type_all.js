getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'applicant_part_time') {
            fetch(apiUrl + 'application/other_type/get_other_type_all.php?language=' + mySession.language, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    displayCheckboxOtherType(data.data);
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        } else {
            console.error('Token not found in local storage');
        }
    })
    .catch(error => console.error('Error fetching session token:', error));

function displayCheckboxOtherType(datas) {
    const checkboxOtherType = document.getElementById('checkbox_other_type');
    checkboxOtherType.innerHTML = '';  // Clear any existing checkboxes

    const urlParams_other_type = new URLSearchParams(window.location.search);
    const selectedOtherTypes = urlParams_other_type.get('other_type_code')?.split(',') || [];

    datas.forEach(data => {
        const label = document.createElement('label');
        label.style.display = 'inline-block'; // Set label to inline-block for horizontal alignment
        label.style.marginRight = '30px'; // Add margin for spacing

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = data.other_type;
        checkbox.value = data.other_type_code;

        if (selectedOtherTypes.includes(data.other_type_code)) {
            checkbox.checked = true;
        }

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(data.other_type));

        checkboxOtherType.appendChild(label);
    });
}
