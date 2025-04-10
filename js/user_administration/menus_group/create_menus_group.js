document.getElementById("createButton").addEventListener("click", function () {
    if (token) {
        const group_id = urlParams.get('group_id');
        if (!group_id) {
            alert(texts.select_user);
        }
        fetch(apiUrl + 'user_administration/menus_group/get_menus_group_not.php?group_id=' + group_id, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                show_data(data.data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    } else {
        console.error('Token not found in local storage');
    }

    function show_data(datas) {
        const formGroup = document.getElementById('form_create_data');
        const modalBody = formGroup.querySelector('.modal-body');
        modalBody.innerHTML = '';
        const table = document.createElement('table');
        table.classList.add('table');

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

    const headers = [texts.select, texts.menu_code, texts.menu_name];
        headers.forEach(headerText => {
            const header = document.createElement('th');
            header.textContent = headerText;
            headerRow.appendChild(header);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');

        datas.forEach(data => {
            const row = document.createElement('tr');

            const checkboxCell = document.createElement('td');
            const checkboxDiv = document.createElement('div');
            checkboxDiv.classList.add('form-check');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('form-check-input');
            checkbox.name = 'menu_checkbox[]';
            checkbox.value = data.menu_id;
            checkbox.id = 'menu_checkbox_' + data.id;
            checkboxDiv.appendChild(checkbox);
            checkboxCell.appendChild(checkboxDiv);
            row.appendChild(checkboxCell);

            const codeCell = document.createElement('td');
            codeCell.textContent = data.menu_code;
            row.appendChild(codeCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = data.menu_name;
            row.appendChild(nameCell);

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        modalBody.appendChild(table);

        const modalElement = new bootstrap.Modal(formGroup);
        modalElement.show();
    }
});

document.getElementById('create_data_form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (token) {
        const formData = new FormData(this);
        formData.append('personcode', data_token.username);
        formData.append('group_id', urlParams.get('group_id'));

        fetch(apiUrl + 'user_administration/menus_group/create_menus_group.php', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.status === 'success') {
                    Swal.fire({
                        icon: 'success',
                        title: texts.success,
                    })
                        .then(function () {
                            location.reload();
                        });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: texts.error,
                    })
                        .then(function () {
                            location.reload();
                        });
                }
            })
            .catch(error => {
                console.error('There was a problem with the update:', error);
            });
    } else {
        console.error('Token not found in local storage');
    }
});