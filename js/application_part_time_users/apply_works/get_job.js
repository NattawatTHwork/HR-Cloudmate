document.getElementById('searchButton').addEventListener('click', function () {
    const selectedJobCategory = document.getElementById('select_job_category').value;
    const selectedWorkLocation = document.getElementById('select_work_location').value;
    const selectedEmploymentType = document.getElementById('select_employment_type').value;
    const selectedSalaryStart = document.getElementById('select_salary_start').value;
    const selectedSalaryEnd = document.getElementById('select_salary_end').value;
    const checkboxes = document.querySelectorAll('#checkbox_other_type input[type="checkbox"]:checked');
    const selectedOtherTypes = Array.from(checkboxes).map(checkbox => checkbox.value);

    let url = 'index.php?';
    const params = new URLSearchParams();

    if (selectedJobCategory) {
        params.append('job_category_code', selectedJobCategory);
    }
    if (selectedWorkLocation) {
        params.append('work_location_code', selectedWorkLocation);
    }
    if (selectedEmploymentType) {
        params.append('employment_type_code', selectedEmploymentType);
    }
    if (selectedSalaryStart) {
        params.append('salary_start', selectedSalaryStart);
    }
    if (selectedSalaryEnd) {
        params.append('salary_end', selectedSalaryEnd);
    }
    if (selectedOtherTypes.length > 0) {
        params.append('other_type_code', selectedOtherTypes.join(','));
    }

    window.location.href = url + params.toString();
});


const urlParams = new URLSearchParams(window.location.search);
const job_category_code = urlParams.get('job_category_code') || '';
const work_location_code = urlParams.get('work_location_code') || '';
const employment_type_code = urlParams.get('employment_type_code') || '';
const salary_start = urlParams.get('salary_start') || '';
const salary_end = urlParams.get('salary_end') || '';
const other_type_code = urlParams.get('other_type_code') || '';

fetchData(job_category_code, work_location_code, employment_type_code, salary_start, salary_end, other_type_code);

async function fetchData(job_category_code, work_location_code, employment_type_code, salary_start, salary_end, other_type_code) {
    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'applicant_part_time') {
                const url = new URL(apiUrl + 'application/jobs/get_job_by_job_category.php');
                const params = {
                    job_category_code,
                    work_location_code,
                    employment_type_code,
                    salary_start,
                    salary_end,
                    other_type_code
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
                            displayCards(data.data, mySession);
                        }
                    })
                    .catch(error => {
                        console.error('There has been a problem with your fetch operation:', error);
                    });
            } else {
                console.error('Token not found in local storage or role is not applicant_part_time');
            }
        })
        .catch(error => console.error('Error fetching session token:', error));
}

async function displayCards(datas, mySession) {
    let cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    let OtherType_All;
    try {
        let response = await fetch(apiUrl + 'application/other_type/get_other_type_all.php?language=' + mySession.language, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${mySession.token}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let result = await response.json();
        OtherType_All = result.data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return; // Exit the function if there's an error
    }

    await datas.forEach(data => {        
        let OtherType_Data = [];
        if (data.other_type) {
            OtherType_Data = data.other_type.split(',');
        }
        
        let ShowOtherType = [];
        OtherType_All.forEach(all => {
            OtherType_Data.forEach(data => {
                if (all.other_type_code === data) {
                    ShowOtherType.push([all.other_type_code, all.other_type]);
                }
            });
        });

        let otherTypesHtml = ShowOtherType.map(type => `<span class="badge text-bg-${type['0'] == 'OT000003' ? 'danger' : 'primary'} btn-sm">${type['1']}</span>`).join(' ');

        let cardHtml = `
            <div class="col-sm-12">
                <div class="card d-flex flex-column">
                    <div class="card-body m-2">
                        <div class="row">
                            <div class="col-md-8">
                                <h5 class="card-title">${data.position}</h5>
                                <p class="card-text"><strong>${texts.employment_type}:</strong> ${mySession.language == 'th' ? data.employment_type_th : data.employment_type_en}</p>
                                <p class="card-text"><strong>${texts.company}/${texts.entrepreneur}:</strong> ${data.employer_name}</p>
                                <p class="card-text">${otherTypesHtml}</p>
                                <p class="card-text text-secondary"><strong>${texts.visitor}:</strong> ${data.view_count} ${texts.times}</p>
                            </div>
                            <div class="col-md-4 d-flex justify-content-end align-items-center">
                                <a href="${data.link_path && data.link_path.startsWith('https') ? data.link_path : (data.link_path && data.link_path.includes('.') ? 'https://' + data.link_path : '#')}">
                                    <img id="logoImage" src="${apiUrl + 'img/logo_employer/' + (data.img_path ? data.img_path : 'no_logo.jpg')}" class="card-img" alt="Logo" style="max-height: 150px; max-width: 150px;">
                                <a>
                            </div>
                        </div>
                        <div class="text-center mt-auto">
                            <a type="button" class="btn btn-primary" href="${pathUrl}/application_users/apply_work_detail.php?job_code=${data.job_code}")">${texts.view_detail}</a>
                        </div>
                    </div>
                </div>
            </div>`;

        cardContainer.innerHTML += cardHtml;
    });
}