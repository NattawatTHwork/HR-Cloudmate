getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'admin') {
            fetch(apiUrl + 'application/jobs/get_job_approval_all.php?statusflag=1&language=' + mySession.language, {
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
        html += `<td>${data.position}</td>
                <td>${data.job_category}</td>
                <td>${data.employer_name}</td>
                <td>${data.work_location}</td>
                <td>${data.salary === 'agreed' ? texts.agreed : Number(data.salary).toLocaleString() + ' ' + texts.baht}</td>
                <td>
                    <a class="btn btn-success" href="job_approval_view.php?job_code=${data.job_code}">
                        ${texts.view_data}
                    </a>
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