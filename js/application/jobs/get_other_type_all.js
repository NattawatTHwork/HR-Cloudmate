getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'member') {
            fetch(apiUrl + 'application/other_type/get_other_type_all.php?language=' + mySession.language, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    const containerUpdate = document.getElementById('other_type_update');
                    const hiddenInputUpdate = document.getElementById('other_type_update_hidden');

                    data.data.forEach(other_type => {
                        // Create Checkbox for Update Section
                        const checkboxContainerUpdate = document.createElement('div');
                        checkboxContainerUpdate.classList.add('form-check');

                        const checkboxUpdate = document.createElement('input');
                        checkboxUpdate.type = 'checkbox';
                        checkboxUpdate.classList.add('form-check-input');
                        checkboxUpdate.name = 'other_type_update[]';
                        checkboxUpdate.id = `other_type_update_${other_type.other_type_code}`;
                        checkboxUpdate.value = other_type.other_type_code;

                        const labelUpdate = document.createElement('label');
                        labelUpdate.classList.add('form-check-label');
                        labelUpdate.htmlFor = `other_type_update_${other_type.other_type_code}`;
                        labelUpdate.textContent = other_type.other_type;

                        checkboxUpdate.addEventListener('change', () => {
                            updateHiddenInput(containerUpdate, hiddenInputUpdate);
                        });

                        checkboxContainerUpdate.appendChild(checkboxUpdate);
                        checkboxContainerUpdate.appendChild(labelUpdate);
                        containerUpdate.appendChild(checkboxContainerUpdate);
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

// Function to update hidden input with comma-separated values
function updateHiddenInput(container, hiddenInput) {
    const selectedCheckboxes = container.querySelectorAll('input[type="checkbox"]:checked');
    const values = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);
    hiddenInput.value = values.join(',');
}
