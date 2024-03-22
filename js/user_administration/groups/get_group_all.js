if (token) {
    fetch(apiUrl + 'user_administration/groups/get_group_all.php', {
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
        html += `<td>${data.group_code}</td>
                <td>${data.group_name}</td>
                <td>${data.personcode}</td>
                <td>${new Date(data.dates).toLocaleDateString('th-TH')}</td>
                <td>
                    <button class="btn ${data.statusflag == 't' ? 'btn-success' : 'btn-danger'}">
                        ${data.statusflag == 't' ? 'ENABLE' : 'DISABLE'}
                    </button>
                </td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ตัวเลือก
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" onclick="view_data(${data.group_id})">ดูข้อมูล</a></li>
                            <li><a class="dropdown-item" onclick="update_data(${data.group_id})">แก้ไข</a></li>
                            <li><a class="dropdown-item" onclick="delete_data('${data.group_id}', '${data.group_name}')">ลบ</a></li>
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