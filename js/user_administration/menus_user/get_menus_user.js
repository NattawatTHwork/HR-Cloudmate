const selectGroup = document.getElementById('select_group');

selectGroup.addEventListener('change', function (event) {
    const user_id = event.target.value;
    window.location = `menus_user.php?user_id=${user_id}`;
});

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('user_id')) {
    const user_id = urlParams.get('user_id');
    fetchData(user_id);
}

function fetchData(user_id) {
    if (token) {
        fetch(apiUrl + 'user_administration/menus_user/get_menus_user.php?user_id=' + user_id, {
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
        const dateMonthFormatter = new Intl.DateTimeFormat(texts.format, { day: 'numeric', month: 'long' });
        const formattedDateMonth = dateMonthFormatter.format(new Date(data.dates));

        const YearFormatter = new Intl.DateTimeFormat(texts.format, { year: 'numeric' });
        const formattedYear = YearFormatter.format(new Date(data.dates));

        html += '<tr>';
        html += `<td>${data.menu_code}</td>
                <td>${data.menu_name}</td>
                <td>${data.personcode}</td>
                <td>${formattedDateMonth + ' ' + formattedYear}</td>
                <td>
                    <button class="btn ${data.statusflag == 't' ? 'btn-success' : 'btn-danger'}">
                        ${data.statusflag == 't' ? texts.enable : texts.disable}
                    </button>
                </td>
                `;
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