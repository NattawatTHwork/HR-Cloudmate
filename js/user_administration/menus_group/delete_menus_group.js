document.getElementById("deleteButton").addEventListener("click", function () {
    if (token) {
        const group_id = urlParams.get('group_id');
        fetch(apiUrl + 'user_administration/menus_group/get_menus_group.php?group_id=' + group_id, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                show_data(data.data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    } else {
        console.error('Token not found in local storage');
    }

    function show_data(datas) {
        const formGroup = document.getElementById('form_delete_data');
        const modalBody = formGroup.querySelector('.modal-body');
        modalBody.innerHTML = '';
        const table = document.createElement('table');
        table.classList.add('table');

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        const headers = ['เลือก', 'รหัสเมนู', 'ชื่อเมนู'];
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

document.getElementById('delete_data_form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (token) {
        const formData = new FormData(this);
        formData.append('personcode', data_token.username);
        formData.append('group_id', urlParams.get('group_id'));

        fetch(apiUrl + 'user_administration/menus_group/delete_menus_group.php', {
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
                        title: data.status.toUpperCase(),
                        text: data.message
                    })
                        .then(function () {
                            location.reload();
                        });
                } else if (data.status === 'error') {
                    Swal.fire({
                        icon: 'error',
                        title: data.status.toUpperCase(),
                        text: data.message
                    })
                        .then(function () {
                            location.reload();
                        });
                } else if (data.status === 'bad_request') {
                    Swal.fire({
                        icon: 'error',
                        title: data.status.toUpperCase(),
                        text: data.message
                    })
                        .then(function () {
                            location.reload();
                        });
                } else if (data.status === 'unauthorized') {
                    Swal.fire({
                        icon: 'error',
                        title: data.status.toUpperCase(),
                        text: data.message
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