if (token && role == 'employer') {
    fetch(apiUrl + 'application/jobs/get_job_employer.php?employer_code=' + data_token.employer_code, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            displayCards(data.data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
} else {
    console.error('Token not found in local storage');
}

async function displayCards(datas) {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');


    if (status == 'true') {
        datas = datas.filter(data => data.statusflag === 't');
    } else if (status == 'false') {
        datas = datas.filter(data => data.statusflag === 'f');
    }

    let cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    for (let data of datas) {
        let employment_type = data.employment_type == 1 ? 'Full Time' :
            data.employment_type == 2 ? 'Freelance' :
                data.employment_type == 3 ? 'Part Time' :
                    data.employment_type == 4 ? 'Tainee' :
                        'อื่นๆ';

        let statusflag = data.statusflag == 't' ? 'เปิดรับสมัคร' :
            data.statusflag == 'f' ? 'ปิดรับสมัคร' : '';

        let statusStyle = data.statusflag == 't' ? 'text-success' : 'text-danger';

        let cardHtml = `
            <div class="col-sm-12 col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">ตำแหน่ง: ${data.position}</h5>
                        <p class="card-text"><strong>ประเภทงาน:</strong> ${data.job_category}</p>
                        <p class="card-text"><strong>ประเภทการจ้างงาน:</strong> ${employment_type}</p>
                        <p class="card-text"><strong>วันทำงาน:</strong> ${data.work_day}</p>
                        <p class="card-text"><strong>เวลาทำงาน:</strong> ${data.time_in.slice(0, 5)} - ${data.time_out.slice(0, 5)} น.</p>
                        <p class="card-text"><strong>สถานที่ทำงาน:</strong> ${data.work_location}</p>
                        <p class="card-text"><strong>เงินเดือน:</strong> ${data.salary}</p>
                        <p class="card-text"><strong>รายละเอียด:</strong> ${data.description}</p>
                        <p class="card-text"><strong>สถานะ:</strong> <span class="${statusStyle}">${statusflag}</span></p>
                        <div class="text-center">
                            <button type="button" class="btn btn-warning" onclick="update_data('${data.job_code}')">แก้ไข</button>
                            <button type="button" class="btn btn-danger" onclick="delete_data('${data.job_code}', '${data.job_category}')">ลบ</button>
                        </div>
                    </div>
                </div>
            </div>`;

        cardContainer.innerHTML += cardHtml;
    }
}
