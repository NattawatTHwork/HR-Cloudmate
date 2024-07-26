getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'member') {
            fetch(apiUrl + 'application/users/get_user_all.php', {
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
                <td>${data.gender == 1 ? texts.male : data.gender == 2 ? texts.female : texts.other}</td>
                <td>${data.phone_number}</td>
                <td>
                    <button class="btn ${data.statusflag == 't' ? 'btn-success' : 'btn-danger'}">
                        ${data.statusflag == 't' ? texts.enable : texts.disable}
                    </button>
                </td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ${texts.option}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" onclick="view_data('${data.user_code}')">${texts.view_data}</a></li>
                            <li><a class="dropdown-item" onclick="update_data('${data.user_code}')">${texts.edit}</a></li>
                            <li><a class="dropdown-item" onclick="change_password('${data.user_code}')">${texts.change_password}</a></li>
                            <li><a class="dropdown-item" onclick="delete_data('${data.user_code}', '${data.firstname} ${data.lastname}')">${texts.delete}</a></li>
                            <div class="dropdown-divider"></div>
                            <li><a class="dropdown-item" href="referred_jobs_user.php?user_code=${data.user_code}&fullname=${data.firstname}%20${data.lastname}">${texts.referred_job_user}</a></li>
                            <li><a class="dropdown-item" href="resume.php?user_code=${data.user_code}&fullname=${data.firstname}%20${data.lastname}">${texts.resume}</a></li>
                            <li><a class="dropdown-item" href="educations_user.php?user_code=${data.user_code}&fullname=${data.firstname}%20${data.lastname}">${texts.education}</a></li>
                            <li><a class="dropdown-item" href="experiences_user.php?user_code=${data.user_code}&fullname=${data.firstname}%20${data.lastname}">${texts.experience}</a></li>
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