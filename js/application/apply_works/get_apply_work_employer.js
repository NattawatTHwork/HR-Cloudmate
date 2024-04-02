
if (token && role == 'member') {
    fetch(apiUrl + 'application/apply_works/get_apply_work_employer.php?employer_code=cloudmate', {
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
                console.log(data.data)
                displayCards(data.data);
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
} else {
    console.error('Token not found in local storage');
}


async function displayCards(datas) {
    let cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    await datas.forEach(data => {
        const dateMonthFormatter = new Intl.DateTimeFormat('th-TH', { day: 'numeric', month: 'long' });
        const formattedDateMonth = dateMonthFormatter.format(new Date(data.dates));

        const YearFormatter = new Intl.DateTimeFormat('us-US', { year: 'numeric' });
        const formattedYear = YearFormatter.format(new Date(data.dates));

        const TimeFormatter = new Intl.DateTimeFormat('th-TH', { hour: 'numeric', minute: 'numeric' });
        const formattedTime = TimeFormatter.format(new Date(data.dates));

        let cardHtml = `
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">${data.position}</h5>
                    <p class="card-text"><strong>ประเภทงาน:</strong> ${data.job_category}</p>
                    <p class="card-text"><strong>ชื่อ - นามสกุล:</strong> ${data.firstname} ${data.lastname}</p>
                    <div id="additionalInfo_${data.apply_work_code}" style="display:none;">
                        <p class="card-text"><strong>เพศ:</strong> ${data.gender == 1 ? 'ชาย' : data.gender == 2 ? 'หญิง' : 'อื่นๆ'}</p>
                        <p class="card-text"><strong>อีเมล:</strong> ${data.email}</p>
                        <p class="card-text"><strong>เบอร์โทร:</strong> ${data.phone_number}</p>
                        <p class="card-text"><strong>วันที่สมัคร:</strong> ${formattedDateMonth + ' ' + formattedYear + ' เวลา ' + formattedTime} น.</p>
                    </div>
                    <div class="text-center">
                        <button type="button" class="btn btn-outline-secondary" onclick="toggleAdditionalInfo('additionalInfo_${data.apply_work_code}', this)">
                            <span class="arrow" style="transition: transform 0.3s ease;">▼ ดูข้อมูลเพิ่มเติม</span>
                        </button>                              
                        <a type="button" class="btn btn-primary" href="educations.php?user_code=${data.user_code}&fullname=${data.firstname}%20${data.lastname}">ประวัติการศึกษา</a>
                        <a type="button" class="btn btn-primary" href="experiences.php?user_code=${data.user_code}&fullname=${data.firstname}%20${data.lastname}">ประสบการณ์ทำงาน</a>
                    </div>

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


