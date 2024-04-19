if (token && role == 'member') {
    fetch(apiUrl + 'application/employers/get_employer_all.php', {
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
    for (const data of datas) {
        html += '<tr>';
        html += `<td>${data.email}</td>
                <td>${data.employer_name}</td>
                <td>${data.firstname} ${data.lastname}</td>
                <td>${data.phone_number}</td>
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
                            <li><a class="dropdown-item" onclick="view_data('${data.employer_code}')">ดูข้อมูล</a></li>
                            <li><a class="dropdown-item" onclick="update_data('${data.employer_code}')">แก้ไข</a></li>`;
                            if (data.employer_code != 'cloudmate') {
                                html += `<li><a class="dropdown-item" onclick="change_password('${data.employer_code}')">เปลี่ยนรหัสผ่าน</a></li>
                                <li><a class="dropdown-item" onclick="delete_data('${data.employer_code}', '${data.firstname} ${data.lastname}')">ลบ</a></li>`;
                            }
                            html += `<div class="dropdown-divider"></div>
                            <li><a class="dropdown-item" href="jobs.php?employer_code=${data.employer_code}&fullname=${data.firstname}%20${data.lastname}">งานที่รับสมัคร</a></li>
                        </ul>
                    </div>
                </td>`;
        html += '</tr>';
    }
    document.querySelector('tbody').innerHTML = await html;
    $(document).ready(function () {
        $('#datatables').DataTable({
            "scrollX": true
        });
    });
}
