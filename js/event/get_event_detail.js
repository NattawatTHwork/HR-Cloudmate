
if (token && role == 'member') {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('event_id') && urlParams.has('personal_id')) {
        const event_id = urlParams.get('event_id');
        const personal_id = urlParams.get('personal_id');

        fetch(apiUrl + 'event/get_event_detail.php?event_id=' + event_id + '&personal_id=' + personal_id, {
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
                    displayCards(data.data);
                }
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }
} else {
    console.error('Token not found in local storage');
}


async function displayCards(datas) {
    document.getElementById('event_name').innerText = datas[0].event_name;
    document.getElementById('event_detail').innerText = datas[0].event_detail;
    document.getElementById('event_date').innerText = datas[0].event_date;
    document.getElementById('event_date_to').innerText = datas[0].event_date_to;

    let cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    await datas.forEach(data => {
        let cardHtml = `
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text"><strong>รายละเอียด:</strong> ${data.detail}</p>
                        <p class="card-text"><strong>วันที่สร้าง:</strong> ${data.create_at}</p>
                        <p class="card-text"><strong>ความคืบหน้า:</strong> ${data.percent} %</p>
                    </div>
                </div>
            </div>`;

        cardContainer.innerHTML += cardHtml;
    });
}

function toggleAdditionalInfo(elementId, button) {
    let additionalInfo = document.getElementById(elementId);
    let arrow = button.querySelector('.arrow');
    if (additionalInfo.style.display === "none") {
        additionalInfo.style.display = "block";
        arrow.innerHTML = "▲ ซ่อนข้อมูล";
        arrow.style.transform = "rotate(180deg)";
    } else {
        additionalInfo.style.display = "none";
        arrow.innerHTML = "▼ ดูข้อมูลเพิ่มเติม";
        arrow.style.transform = "rotate(0deg)";
    }
}


