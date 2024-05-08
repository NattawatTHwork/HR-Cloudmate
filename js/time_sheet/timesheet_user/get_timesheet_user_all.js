const selectGroup = document.getElementById('select_user');

selectGroup.addEventListener('change', function (event) {
    const user_id = event.target.value;
    window.location = `timesheet_user.php?user_id=${user_id}`;
});

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('user_id')) {
    const user_id = urlParams.get('user_id');
    fetchData(user_id);
}

function fetchData(user_id) {
    if (token) {
        fetch(apiUrl + 'time_sheet/timesheet_user/get_timesheet_user_all.php?user_id=' + user_id, {
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
        html += `<td>${data.username}</td>
                <td>${data.task_name}</td>
                <td>${new Date(data.timesheet_date).toLocaleDateString('th-TH')}</td>
                <td>${data.timesheet_start_time}</td>
                <td>${data.timesheet_end_time}</td>
                <td>
                    <button class="btn ${data.tb_timesheet2_statusflag == 't' ? 'btn-success' : 'btn-danger'}">
                        ${data.statusflag == 't' ? 'ENABLE' : 'DISABLE'}
                    </button>
                </td>
                `;
        html += '</tr>';
    })
    document.querySelector('tbody').innerHTML = await html;
    $(document).ready(function () {
        $('#datatables').DataTable({
            // "scrollX": true
        });
    });
}