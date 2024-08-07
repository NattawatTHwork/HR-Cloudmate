async function get_job_applicant(statusflag_data) {
    if (statusflag_data.data.statusflag == 1) {
        const urlParams = new URLSearchParams(window.location.search);
        const job_category_code = urlParams.get('job_category_code') || '';
        const work_location_code = urlParams.get('work_location_code') || '';
        const employment_type_code = urlParams.get('employment_type_code') || '';
        const salary_start = urlParams.get('salary_start') || '';
        const salary_end = urlParams.get('salary_end') || '';
        fetchData_enable(job_category_code, work_location_code, employment_type_code, salary_start, salary_end);
    } else if (statusflag_data.data.statusflag == 2) {
        const urlParams = new URLSearchParams(window.location.search);
        const job_category_code = urlParams.get('job_category_code') || '';
        fetchData_on_hold(job_category_code);
    }
}

function fetchData_enable(job_category_code, work_location_code, employment_type_code, salary_start, salary_end) {
    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'employer') {
                const url = new URL(apiUrl + 'application/referred_jobs/get_job_applicant.php');
                const params = {
                    job_category_code,
                    work_location_code,
                    employment_type_code,
                    salary_start,
                    salary_end
                };

                Object.keys(params).forEach(key => {
                    if (params[key]) {
                        url.searchParams.append(key, params[key]);
                    }
                });

                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${mySession.token}`
                    },
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 'success') {
                            displayCards_enable(data.data, mySession);
                        }
                    })
                    .catch(error => {
                        console.error('There has been a problem with your fetch operation:', error);
                    });
            } else {
                console.error('Token not found in local storage or role is not applicant');
            }
        })
        .catch(error => console.error('Error fetching session token:', error));
}

async function displayCards_enable(datas, mySession) {
    let cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    await datas.forEach(data => {
        let cardHtml = `
            <div class="col-sm-12">
                <div class="card d-flex flex-column">
                    <div class="card-body m-2">
                        <h5 class="card-title">${data.position}</h5>
                        <p class="card-text"><strong>${texts.job_category}:</strong> ${data.job_category}</p>
                        <p class="card-text"><strong>${texts.email}:</strong> ${data.email}</p>
                        <div id="additionalInfo_${data.referred_job_code}" style="display:none;">
                            <p class="card-text"><strong>${texts.employment_type}:</strong> ${mySession.language == 'th' ? data.employment_type_th : data.employment_type_en}</p>
                            <p class="card-text"><strong>${texts.work_location}:</strong> ${mySession.language == 'th' ? data.work_location_th : data.work_location_en}</p>
                            <p class="card-text"><strong>${texts.expect_salary}:</strong> ${Number(data.expect_salary).toLocaleString() + ' ' + texts.baht}</p>
                        </div>
                        <div class="text-center">
                            <button type="button" class="btn btn-outline-secondary" onclick="toggleAdditionalInfo('additionalInfo_${data.referred_job_code}', this)">
                                <span class="arrow" style="transition: transform 0.3s ease;">${texts.view}</span>
                            </button>                              
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
        arrow.innerHTML = texts.hide;
        arrow.style.transform = "rotate(180deg)";
    } else {
        additionalInfo.style.display = "none";
        arrow.innerHTML = texts.view;
        arrow.style.transform = "rotate(0deg)";
    }
}

function fetchData_on_hold(job_category_code) {
    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'employer') {
                const url = new URL(apiUrl + 'application/referred_jobs/get_job_applicant_on_hold.php');
                const params = { job_category_code };

                Object.keys(params).forEach(key => {
                    if (params[key]) {
                        url.searchParams.append(key, params[key]);
                    }
                });

                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${mySession.token}`
                    },
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 'success') {
                            displayCards_on_hold(data.data);
                        }
                    })
                    .catch(error => {
                        console.error('There has been a problem with your fetch operation:', error);
                    });
            } else {
                console.error('Token not found in local storage or role is not applicant');
            }
        })
        .catch(error => console.error('Error fetching session token:', error));
}

async function displayCards_on_hold(datas) {
    let cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    await datas.forEach(data => {
        let cardHtml = `
            <div class="col-sm-12">
                <div class="card d-flex flex-column">
                    <div class="card-body m-2">
                        <h5 class="card-title">${data.job_category}</h5>
                        <p class="card-text"><strong>${texts.required_quantity}:</strong> ${data.num_applicants + ' ' + texts.position}</p>
                    </div>
                </div>
            </div>`;

        cardContainer.innerHTML += cardHtml;
    });
}