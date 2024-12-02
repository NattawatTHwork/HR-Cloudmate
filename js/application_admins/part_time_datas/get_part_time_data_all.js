getSessionToken()
    .then(mySession => {
        if (mySession.token) {
            const urlParams = new URLSearchParams(window.location.search);
            const part_time_user_code = urlParams.get('part_time_user_code');

            fetch(apiUrl + 'application/part_time_users/get_part_time_data_all.php?part_time_user_code=' + part_time_user_code, {
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

// Function to populate the table
async function displayTables(datas) {
    let html = '';

    // Define job title mapping for work experience
    const jobTitles = {
        "1": "ครู",
        "2": "พยาบาล",
        "3": "เชฟ",
        "4": "พนักงานขาย",
        "5": "ตำรวจ/ทหาร",
        "6": "แม่บ้าน",
        "7": "พนักงานบริษัท",
        "8": "พนักงานบริการ"
    };

    for (const data of datas) {
        // Convert gender and marital status
        let gender = data.gender == '1' ? 'หญิง' :
            data.gender == '2' ? 'ชาย' :
                data.gender == '3' ? 'อื่นๆ' : '';

        let maritalStatus = data.marital_status == '1' ? 'โสด' :
            data.marital_status == '2' ? 'สมรส' :
                data.marital_status == '3' ? 'หย่าร้าง' : '';

        // Convert work experience
        let workExperience = data.work_experience.split(',')
            .map(value => jobTitles[value] || value)
            .join(', ');

        html += '<tr>';
        html += `
            <td>${data.part_time_data_code}</td>
            <td>${data.fullname}</td>
            <td>${data.age}</td>
            <td>${gender}</td>
            <td>${maritalStatus}</td>
            <td>${data.children_count}</td>
            <td>${Number(data.expect_salary).toLocaleString()}</td>
            <td>${workExperience}</td>
            <td>${data.email}</td>
            <td>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ตัวเลื่อก
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" onclick="view_data('${data.part_time_data_id}')">ดูข้อมูล</a></li>
                        <li><a class="dropdown-item" onclick="update_data('${data.part_time_data_id}')">แก้ไข</a></li>
                        <li><a class="dropdown-item" onclick="delete_data('${data.part_time_data_id}', '${data.part_time_data_code}')">ลบ</a></li>
                    </ul>
                </div>
            </td>`;
        html += '</tr>';
    }

    document.querySelector('tbody').innerHTML = html;

    // Initialize DataTable
    $(document).ready(function () {
        $('#datatables').DataTable({
            "order": [],  // Default ordering
            // "scrollX": true // Enable horizontal scrolling if needed
        });
    });
}
