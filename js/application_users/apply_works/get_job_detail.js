const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('job_code')) {
    const job_code = urlParams.get('job_code');
    fetchData(job_code);
}

function fetchData(job_code) {
    if (token && role == 'applicant') {
        fetch(apiUrl + 'application/jobs/get_job.php?job_code=' + job_code, {
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
    } else {
        console.error('Token not found in local storage');
    }
}

async function displayCards(data) {
    try {
        const response = await fetch(apiUrl + 'application/apply_works/get_status_apply_work.php?user_code=' + data_token.user_code + '&job_code=' + data.job_code, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
        const status = await response.json();
        const status_code = status.status === 'true';

        let cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = '';

        let employment_type = data.employment_type == 1 ? 'Full Time' :
            data.employment_type == 2 ? 'Freelance' :
                data.employment_type == 3 ? 'Part Time' :
                    data.employment_type == 4 ? 'Trainee' :
                        'อื่นๆ';
        let cardHtml = `
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.position}</h5>
                        <p class="card-text"><strong>ประเภทงาน:</strong> ${data.job_category}</p>
                        <p class="card-text"><strong>บริษัท/ผู้ประกอบการ:</strong> ${data.employer_name}</p>
                        <p class="card-text"><strong>ประเภทการจ้างงาน:</strong> ${employment_type}</p>
                        <p class="card-text"><strong>วันทำงาน:</strong> ${data.work_day}</p>
                        <p class="card-text"><strong>เวลาเข้า/ออกงาน:</strong> ${data.time_in.slice(0, 5)} - ${data.time_out.slice(0, 5)} น.</p>
                        <p class="card-text"><strong>สถานที่ทำงาน:</strong> ${data.work_location}</p>
                        <p class="card-text"><strong>เงินเดือน:</strong> ${data.salary}</p>
                        <p class="card-text"><strong>อีเมล:</strong> ${data.email}</p>
                        <p class="card-text"><strong>รายละเอียด:</strong> ${data.description}</p>
                        <div class="text-center">
                            <button type="button" class="btn ${status_code ? 'btn-secondary' : 'btn-primary'}" onclick="apply_work('${data.job_code}', '${data.position}')" ${status_code ? 'disabled' : ''}>${status_code ? 'คุณสมัครงานนี้แล้ว' : 'สมัครงาน'}</button>
                        </div>
                    </div>
                </div>
            </div>`;

        cardContainer.innerHTML += cardHtml;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}