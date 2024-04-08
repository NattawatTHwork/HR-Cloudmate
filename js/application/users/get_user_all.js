if (token && role == 'member') {
    fetch(apiUrl + 'application/users/get_user_all.php', {
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
        html += `<td>${data.email}</td>
                <td>${data.firstname} ${data.lastname}</td>
                <td>${data.gender == 1 ? 'ชาย' : data.gender == 2 ? 'หญิง' : 'อื่นๆ'}</td>
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
                            <li><a class="dropdown-item" onclick="view_data('${data.user_code}')">ดูข้อมูล</a></li>
                            <li><a class="dropdown-item" onclick="update_data('${data.user_code}')">แก้ไข</a></li>
                            <li><a class="dropdown-item" onclick="change_password('${data.user_code}')">เปลี่ยนรหัสผ่าน</a></li>
                            <li><a class="dropdown-item" onclick="delete_data('${data.user_code}', '${data.firstname} ${data.lastname}')">ลบ</a></li>
                            <div class="dropdown-divider"></div>
                            <li><a class="dropdown-item" href="referred_jobs.php?user_code=${data.user_code}&fullname=${data.firstname}%20${data.lastname}">งานที่ต้องการ</a></li>
                            <li><a class="dropdown-item" href="educations.php?user_code=${data.user_code}&fullname=${data.firstname}%20${data.lastname}">ประวัติการศึกษา</a></li>
                            <li><a class="dropdown-item" href="experiences.php?user_code=${data.user_code}&fullname=${data.firstname}%20${data.lastname}">ประสบการณ์</a></li>
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