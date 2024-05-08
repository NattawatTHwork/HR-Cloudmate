const searchButton = document.getElementById('search_button');
const selectPersonal = document.getElementById('select_personal');

searchButton.addEventListener('click', function (event) {
    const personal_id = selectPersonal.value;

    if (personal_id) {
        window.location.href = `event.php?personal_id=${personal_id}`;
    } else {
        alert('กรุณาเลือกผู้ใช้');
    }
});

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('personal_id')) {
    const personal_id = urlParams.get('personal_id');
    fetchData(personal_id);
}

function fetchData(personal_id) {
    if (token && role == 'member') {
        fetch(apiUrl + `event/get_event_user.php?personal_id=${personal_id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.status === 'success') {
                    displayTables(data.data);
                }
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    } else {
        console.error('Token not found in local storage');
    }
}

async function displayTables(datas) {
    let html = '';
    await datas.forEach((data, index, array) => {
        html += '<tr>';
        html += `<td>${data.event_name}</td>
                <td>${data.event_date}</td>
                <td>${data.event_date_to}</td>
                <td>${data.percent}</td>
                <td>
                    <button class="btn ${data.status == 'Inprogress' ? 'btn-danger' : 'btn-success'}">
                        ${data.status == 'Inprogress' ? 'Inprogress' : 'Completed'}
                    </button>
                </td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ตัวเลือก
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" onclick="view_data('${data.event_id}')">ดูข้อมูล</a></li>
                            <li><a class="dropdown-item" href="${pathUrl}/event/event_detail.php?event_id=${data.event_id}&personal_id=${data.personal_id}">ดูความคืบหน้า</a></li>
                        </ul>
                    </div>
                </td>`;
        html += '</tr>';
    })
    document.querySelector('tbody').innerHTML = await html;
    $(document).ready(function () {
        $('#datatables').DataTable({
            // "scrollX": true
        });
    });
}