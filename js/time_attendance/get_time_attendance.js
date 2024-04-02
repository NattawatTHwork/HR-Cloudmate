const searchButton = document.getElementById('search_button');
const selectPersonal = document.getElementById('select_personal');
const selectMonth = document.getElementById('select_month');
const selectYear = document.getElementById('select_year');

searchButton.addEventListener('click', function (event) {
    const personId = selectPersonal.value;
    const month = selectMonth.value;
    const year = selectYear.value;

    if (personId && month && year) {
        window.location.href = `time_attendance.php?personid=${personId}&month=${month}&year=${year}`;
    } else {
        alert('กรุณาเลือกผู้ใช้, เดือน และปี');
    }
});

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('personid') && urlParams.has('month') && urlParams.has('year')) {
    const personid = urlParams.get('personid');
    const month = urlParams.get('month');
    const year = urlParams.get('year');
    fetchData(personid, month, year);
}

function fetchData(personid, month, year) {
    if (token) {
        fetch(apiUrl + `time_attendance/get_time_attendance.php?personid=${personid}&month=${month}&year=${year}`, {
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
    const month = selectMonth.value;
    const year = selectYear.value;
    const daysInMonth = new Date(year, month, 0).getDate(); // หาจำนวนวันในเดือนที่เลือก

    let html = '';

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        const dateFormatter = new Intl.DateTimeFormat('th-TH', { day: 'numeric', month: 'long' });
        const formattedDate = dateFormatter.format(date);

        const dateFormatterYear = new Intl.DateTimeFormat('us-US', { year: 'numeric' });
        const formattedDateYear = dateFormatterYear.format(date);

        let dataForDay = datas.find(data => new Date(data.time_in).getDate() === day);
        if (dataForDay) {
            html += '<tr>';
            html += `<td>${formattedDate + ' ' + formattedDateYear}</td>
                    <td>${new Date(dataForDay.time_in).toLocaleTimeString('th-TH')}</td>
                    <td>${new Date(dataForDay.time_out).toLocaleTimeString('th-TH')}</td>
                    <td>${new Date(dataForDay.time_in).toLocaleTimeString('th-TH') >= '09:00:00' ? 'สาย' : ''} ${new Date(dataForDay.time_out).toLocaleTimeString('th-TH') <= '17:00:00' ? 'ออกก่อน' : ''}</td>
                    <td></td>
                    `;
            html += '</tr>';
        } else {
            html += '<tr>';
            html += `<td>${formattedDate + ' ' + formattedDateYear}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    `;
            html += '</tr>';
        }
    }

    document.querySelector('tbody').innerHTML = html;

    $(document).ready(function () {
        $('#datatables')
    });
}
