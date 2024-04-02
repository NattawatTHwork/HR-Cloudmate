
if (token && role == 'applicant') {
    fetch(apiUrl + 'application/apply_works/get_apply_work_user.php?user_code=' + data_token.user_code, {
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
        let employment_type = data.employment_type == 1 ? 'Full Time' :
            data.employment_type == 2 ? 'Freelance' :
                data.employment_type == 3 ? 'Part Time' :
                    data.employment_type == 4 ? 'Tainee' :
                        'อื่นๆ';
        let cardHtml = `
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.position}</h5>
                        <p class="card-text"><strong>ประเภทงาน:</strong> ${data.job_category}</p>
                        <p class="card-text"><strong>บริษัท/นายจ้าง:</strong> ${data.employer_name}</p>
                        <div id="additionalInfo_${data.apply_work_code}" style="display:none;">
                            <p class="card-text"><strong>ประเภทการจ้างงาน:</strong> ${employment_type}</p>
                            <p class="card-text"><strong>วันทำงาน:</strong> ${data.work_day}</p>
                            <p class="card-text"><strong>เวลาเข้า/ออกงาน:</strong> ${data.time_in.slice(0, 5)} - ${data.time_out.slice(0, 5)} น.</p>
                            <p class="card-text"><strong>สถานที่ทำงาน:</strong> ${data.work_location}</p>
                            <p class="card-text"><strong>เงินเดือน:</strong> ${data.salary}</p>
                            <p class="card-text"><strong>อีเมล:</strong> ${data.email}</p>
                            <p class="card-text"><strong>รายละเอียด:</strong> ${data.description}</p>
                        </div>
                        <div class="text-center">
                            <button type="button" class="btn btn-outline-secondary" onclick="toggleAdditionalInfo('additionalInfo_${data.apply_work_code}', this)">
                                <span class="arrow" style="transition: transform 0.3s ease;">▼ ดูข้อมูลเพิ่มเติม</span>
                            </button>   
                            <button type="button" class="btn btn-danger" onclick="delete_data('${data.apply_work_code}', '${data.position}')">ลบ</button>
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
