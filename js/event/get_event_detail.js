
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
    document.getElementById('event_date').innerText = new Date(datas[0].event_date).toLocaleDateString(texts.format, { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('event_date_to').innerText = new Date(datas[0].event_date_to).toLocaleDateString(texts.format, { year: 'numeric', month: 'long', day: 'numeric' });

    let cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    await datas.forEach(data => {

        const dateMonthFormatter = new Intl.DateTimeFormat(texts.format, { day: 'numeric', month: 'long' });
        const formattedDateMonth = dateMonthFormatter.format(new Date(data.create_at));

        const YearFormatter = new Intl.DateTimeFormat(texts.format, { year: 'numeric' });
        const formattedYear = YearFormatter.format(new Date(data.create_at));

        const TimeFormatter = new Intl.DateTimeFormat(texts.format, { hour: 'numeric', minute: 'numeric' });
        const formattedTime = TimeFormatter.format(new Date(data.create_at));

        let cardHtml = `
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text"><strong>${texts.event_detail}:</strong> ${data.detail}</p>
                        <p class="card-text"><strong>${texts.create_date}:</strong> ${formattedDateMonth + ' ' + formattedYear + texts.time + formattedTime + texts.na}</p>
                        <p class="card-text"><strong>${texts.progress}:</strong> ${data.percent} %</p>
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
        arrow.innerHTML = texts.hide;
        arrow.style.transform = "rotate(180deg)";
    } else {
        additionalInfo.style.display = "none";
        arrow.innerHTML = texts.view;
        arrow.style.transform = "rotate(0deg)";
    }
}


