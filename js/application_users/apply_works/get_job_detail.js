const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('job_code')) {
    const job_code = urlParams.get('job_code');
    fetchData(job_code);
}

function fetchData(job_code) {
    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'applicant') {
                fetch(apiUrl + 'application/jobs/get_job.php?job_code=' + job_code, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${mySession.token}`
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
        })
        .catch(error => console.error('Error fetching session token:', error));
}

async function displayCards(data) {
    try {
        const mySession = await getSessionToken();

        const response = await fetch(apiUrl + 'application/apply_works/get_status_apply_work.php?user_code=' + mySession.user_code + '&job_code=' + data.job_code, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${mySession.token}`
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
                        '';

        const currentDate = new Date().toISOString().slice(0, 10);
        const TimeFormatter = new Intl.DateTimeFormat(texts.format, { hour: 'numeric', minute: 'numeric' });
        const timeIn = TimeFormatter.format(new Date(currentDate + 'T' + data.time_in));
        const timeOut = TimeFormatter.format(new Date(currentDate + 'T' + data.time_out));

        let cardHtml = `
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body m-2">
                        <div class="row">
                            <div class="col-md-8">
                                <h5 class="card-title">${data.position}</h5>
                                <p class="card-text"><strong>${texts.job_category}:</strong> ${data.job_category}</p>
                                <p class="card-text"><strong>${texts.company}/${texts.entrepreneur}:</strong> ${data.employer_name}</p>
                                <p class="card-text"><strong>${texts.employment_type}:</strong> ${employment_type}</p>
                                <p class="card-text"><strong>${texts.work_day}:</strong> ${data.work_day}</p>
                                <p class="card-text"><strong>${texts.work_time}:</strong> ${timeIn} - ${timeOut} ${texts.na}</p>
                                <p class="card-text"><strong>${texts.work_location}:</strong> ${mySession.language == 'th' ? data.work_location_th : data.work_location_en}</p>
                                <p class="card-text"><strong>${texts.salary}:</strong> ${data.salary == 'agreed' ? texts.agreed : Number(data.salary).toLocaleString() + ' ' + texts.baht}</p>
                                <p class="card-text"><strong>${texts.email}:</strong> ${data.email}</p>
                                <p class="card-text"><strong>${texts.description}:</strong> ${data.description}</p>
                            </div>
                            <div class="col-md-4 d-flex justify-content-end align-items-center">
                                <a href="${data.link_path && data.link_path.startsWith('https') ? data.link_path : (data.link_path && data.link_path.includes('.') ? 'https://' + data.link_path : '#')}">
                                    <img id="logoImage" src="${apiUrl + 'img/logo_employer/' + (data.img_path ? data.img_path : 'no_logo.jpg')}" class="card-img" alt="Logo" style="max-height: 250px; max-width: 250px;">
                                <a>
                            </div>
                        </div>       
                        <div class="text-center mt-auto">
                            <button type="button" class="btn ${status_code ? 'btn-secondary' : 'btn-primary'}" onclick="apply_work('${data.job_code}', '${data.position}', '${data.job_category_code}', '${data.salary}')" ${status_code ? 'disabled' : ''}>${status_code ? texts.applied_job : texts.apply_job}</button>
                        </div>
                    </div>
                </div>
            </div>`;

        cardContainer.innerHTML += cardHtml;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}