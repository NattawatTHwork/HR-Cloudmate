getSessionToken()
    .then(mySession => {
        if (mySession.token) {
            fetch(apiUrl + 'application/part_time_users/get_part_time_user_all.php', {
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
    await datas.forEach((data, index, array) => {
        html += '<tr>';
        html += `<td>${data.email}</td>
                <td>${data.firstname} ${data.lastname}</td>
                <td>${data.gender == 1 ? 'ชาย' : data.gender == 2 ? 'หญิง' : 'อื่นๆ'}</td>
                <td>${data.phone_number}</td>
                <td>
                    <button class="btn ${data.statusflag == 't' ? 'btn-success' : 'btn-danger'}">
                        ${data.statusflag == 't' ? 'เปิดใช้งาน' : 'ปิดใช้งาน'}
                    </button>
                </td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ตัวเลือก
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" onclick="view_data('${data.part_time_user_code}')">ดูข้อมูล</a></li>
                            <li><a class="dropdown-item" onclick="update_data('${data.part_time_user_code}')">แก้ไข</a></li>
                            <li><a class="dropdown-item" onclick="change_password('${data.part_time_user_code}')">เปลี่ยนรหัสผ่าน</a></li>
                            <li><a class="dropdown-item" onclick="delete_data('${data.part_time_user_code}', '${data.firstname} ${data.lastname}')">ลบ</a></li>
                            <div class="dropdown-divider"></div>
                            <li><a class="dropdown-item" href="part_time_datas.php?part_time_user_code=${data.part_time_user_code}&fullname=${data.firstname}%20${data.lastname}">ข้อมูลผู้สมัครงาน Part Time</a></li>
                        </ul>
                    </div>
                </td>`;
        html += '</tr>';
    })
    document.querySelector('tbody').innerHTML = await html;
    $(document).ready(function () {
        $('#datatables').DataTable({
            "order": [] // ไม่มีการเรียงลำดับโดยเริ่มต้น
            // "scrollX": true
        });
    });
}