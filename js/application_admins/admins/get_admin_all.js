getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'admin') {
            fetch(apiUrl + 'application/admins/get_admin_all.php', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    displayTables(data.data);
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        } else {
            console.error('Token not found in local storage');
        }
    })
    .catch(error => console.error('Error fetching session token:', error));

async function displayTables(datas) {
    let html = '';
    for (const data of datas) {
        html += '<tr>';
        html += `<td>${data.firstname + ' ' + data.lastname}</td>
                <td>${data.email}</td>
                <td>
                    <button class="btn ${data.statusflag == 't' ? 'btn-success' : 'btn-danger'}">
                        ${data.statusflag == 't' ? texts.enable : texts.disable}
                    </button>
                </td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ${texts.options}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" onclick="view_data('${data.admin_code}')">${texts.view_data}</a></li>
                            <li><a class="dropdown-item" onclick="update_data('${data.admin_code}')">${texts.edit}</a></li>
                            <li><a class="dropdown-item" onclick="change_password('${data.admin_code}')">${texts.change_password}</a></li>
                            <li><a class="dropdown-item" onclick="delete_data('${data.admin_code}', '${data.email}')">${texts.delete}</a></li>
                        </ul>
                    </div>
                </td>`;
        html += '</tr>';
    }
    document.querySelector('tbody').innerHTML = await html;
    $(document).ready(function () {
        $('#datatables').DataTable({
            "order": [] // ไม่มีการเรียงลำดับโดยเริ่มต้น
            // "scrollX": true
        });
    });
}
