if (token) {
    fetch(apiUrl + 'user_administration/users/get_user_all.php', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
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

async function displayTables(datas) {
    let html = '';
    await datas.forEach((data, index, array) => {
        html += '<tr>';
        html += `<td>${data.username}</td>
                <td>${data.firstname+' '+data.lastname}</td>
                <td>${data.group_name}</td>
                <td>${new Date(data.dates).toLocaleDateString('th-TH')}</td>
                <td>
                    <button class="btn ${data.user_statusflag == 't' ? 'btn-success' : 'btn-danger'}">
                        ${data.user_statusflag == 't' ? 'ENABLE' : 'DISABLE'}
                    </button>
                </td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Actions
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" onclick="view_data(${data.user_id})">ดูข้อมูล</a></li>
                            <li><a class="dropdown-item" onclick="update_data(${data.user_id})">แก้ไข</a></li>
                            <li><a class="dropdown-item" onclick="delete_data('${data.user_id}', '${data.username}')">ลบ</a></li>
                        </ul>
                    </div>
                </td>`;
        html += '</tr>';
    })
    document.querySelector('tbody').innerHTML = await html;
    $(document).ready(function () {
        $('#datatables').DataTable({
            "scrollX": true
        });
    });
}