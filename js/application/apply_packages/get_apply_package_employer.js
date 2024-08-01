getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'member') {
            const urlParams = new URLSearchParams(window.location.search);
            const employer_code = urlParams.get('employer_code');
            fetch(apiUrl + 'application/packages/get_apply_package_employer.php?employer_code=' + employer_code, {
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
        html += `<td>${data.package}</td>
                <td>${data.start_date}</td>
                <td>${data.end_date}</td>
                <td>
                    <button class="btn ${data.status_approved == 't' ? 'btn-success' : 'btn-danger'}">
                        ${data.status_approved == 't' ? texts.approve : texts.disapprove}
                    </button>
                </td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" ${data.status_approved == 't' ? 'disabled' : ''}>
                            ${texts.options}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" onclick="change_status('${data.apply_package_code}')">${texts.change_status}</a></li>
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
