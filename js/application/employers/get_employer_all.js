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
                    <button class="btn ${data.statusflag == 1 ? 'btn-success' : data.statusflag == 2 ? 'btn-warning' : 'btn-danger'}">
                        ${data.statusflag == 1 ? texts.enable : data.statusflag == 2 ? texts.on_hold : texts.disble}
                    </button>
                </td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ตัวเลือก
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" onclick="view_data('${data.employer_code}')">${texts.view_data}</a></li>
                            <li><a class="dropdown-item" onclick="update_data('${data.employer_code}')">${texts.edit}</a></li>
                            <li><a class="dropdown-item" onclick="change_password('${data.employer_code}')">${texts.change_password}</a></li>
                            <li><a class="dropdown-item" onclick="delete_data('${data.employer_code}', '${data.firstname} ${data.lastname}')">${texts.delete}</a></li>
                            <div class="dropdown-divider"></div>
                            <li><a class="dropdown-item" href="jobs_employer.php?employer_code=${data.employer_code}&fullname=${data.firstname}%20${data.lastname}">${texts.referred_job}</a></li>
                            <li><a class="dropdown-item" href="apply_works_employer.php?employer_code=${data.employer_code}&fullname=${data.firstname}%20${data.lastname}">${texts.job_application}</a></li>
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
