document.addEventListener('DOMContentLoaded', async function () {
    const mySession = await getSessionToken();
    if (mySession.token && mySession.role == 'employer') {
        const urlParams = new URLSearchParams(window.location.search);

        const response = await fetch(apiUrl + 'application/employers/get_employer_header.php?employer_code=' + mySession.employer_code, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${mySession.token}`
            }
        });
        const statusflag_data = await response.json();

        if (statusflag_data.status == 'success') {
            if (statusflag_data.data.statusflag == 1) {
                document.getElementById('select_role').innerHTML = `
                    <div class="row mb-4">
                        <label class="col-2">${texts.job_category}</label>
                        <select class="form-select me-2 col" id="select_job_category">
                            <option value="">-- ${texts.select_job_category} --</option>
                        </select>
                    </div>
                    <div class="row mb-4">
                        <label class="col-2">${texts.work_location}</label>
                        <select class="form-select me-2 col" id="select_work_location">
                            <option value="">-- ${texts.select_work_location} --</option>
                        </select>
                    </div>
                    <div class="row mb-4">
                        <label class="col-2">${texts.employment_type}</label>
                        <select class="form-select me-2 col" id="select_employment_type">
                            <option value="">-- ${texts.select_employment_type} --</option>
                        </select>
                    </div>
                    <div class="row mb-4">
                        <label class="col-2">${texts.salary}</label>
                        <select class="form-select me-2 col" id="select_salary_start"></select>
                        <label class="col-1 text-center"> - </label>
                        <select class="form-select me-2 col" id="select_salary_end"></select>
                    </div>
                    <button type="submit" id="searchButton" class="btn btn-primary w-100">${texts.search_button}</button>
                `;

                await loadJobCategories();
                await loadWorkLocations(mySession);
                await loadEmploymentTypes(mySession);
                loadSalaries();

                setSelectValues(urlParams);
            } else if (statusflag_data.data.statusflag == 2) {
                document.getElementById('select_role').innerHTML = `
                <div class="row mb-4">
                    <label class="col-2">${texts.job_category}</label>
                    <select class="form-select me-2 col" id="select_job_category">
                        <option value="">-- ${texts.select_job_category} --</option>
                    </select>
                </div>
                <p class="text-danger">${texts.apply_package_detail}</p>
                <button type="submit" id="searchButton" class="btn btn-primary w-100">${texts.search_button}</button>
            `;

                await loadJobCategories();

                setSelectValues(urlParams);
            }
        }
        get_job_applicant(statusflag_data);
    }

    document.getElementById('searchButton').addEventListener('click', function () {
        const jobCategory = document.getElementById('select_job_category').value || '';
        const workLocation = document.getElementById('select_work_location')?.value || '';
        const employmentType = document.getElementById('select_employment_type')?.value || '';
        const salaryStart = document.getElementById('select_salary_start')?.value || '';
        const salaryEnd = document.getElementById('select_salary_end')?.value || '';

        const params = new URLSearchParams();
        if (jobCategory) params.append('job_category_code', jobCategory);
        if (workLocation) params.append('work_location_code', workLocation);
        if (employmentType) params.append('employment_type_code', employmentType);
        if (salaryStart) params.append('salary_start', salaryStart);
        if (salaryEnd) params.append('salary_end', salaryEnd);

        const url = `${pathUrl}/application_employers/find_job_applicants.php?${params.toString()}`;
        window.location.href = url;
    });
});

async function loadJobCategories() {
    const response = await fetch(apiUrl + 'application/job_category/get_job_category_all.php');
    const data = await response.json();
    const select = document.getElementById('select_job_category');
    data.data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.job_category_code;
        option.textContent = item.job_category;
        select.appendChild(option);
    });
}

async function loadWorkLocations(mySession) {
    const response = await fetch(apiUrl + 'application/work_location/get_work_location_all.php?language=' + mySession.language);
    const data = await response.json();
    const select = document.getElementById('select_work_location');
    data.data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.work_location_code;
        option.textContent = item.work_location;
        select.appendChild(option);
    });
}

async function loadEmploymentTypes(mySession) {
    const response = await fetch(apiUrl + 'application/employment_type/get_employment_type_all.php?language=' + mySession.language);
    const data = await response.json();
    const select = document.getElementById('select_employment_type');
    data.data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.employment_type_code;
        option.textContent = item.employment_type;
        select.appendChild(option);
    });
}

function loadSalaries() {
    const selectStart = document.getElementById('select_salary_start');
    const selectEnd = document.getElementById('select_salary_end');

    for (let i = 0; i <= 95000; i += 5000) {
        const optionStart = document.createElement('option');
        optionStart.value = i;
        optionStart.textContent = i;
        selectStart.appendChild(optionStart);
    }

    for (let j = 5000; j <= 200000; j += 5000) {
        const optionEnd = document.createElement('option');
        optionEnd.value = j;
        optionEnd.textContent = j;
        if (j === 100000) {
            optionEnd.selected = true;
        }
        selectEnd.appendChild(optionEnd);
    }
}

function setSelectValues(params) {
    const selectJobCategory = document.getElementById('select_job_category');
    const selectWorkLocation = document.getElementById('select_work_location');
    const selectEmploymentType = document.getElementById('select_employment_type');
    const selectSalaryStart = document.getElementById('select_salary_start');
    const selectSalaryEnd = document.getElementById('select_salary_end');

    if (params.has('job_category_code')) {
        selectJobCategory.value = params.get('job_category_code');
    }

    if (params.has('work_location_code')) {
        selectWorkLocation.value = params.get('work_location_code');
    }

    if (params.has('employment_type_code')) {
        selectEmploymentType.value = params.get('employment_type_code');
    }

    if (params.has('salary_start')) {
        selectSalaryStart.value = params.get('salary_start');
    }

    if (params.has('salary_end')) {
        selectSalaryEnd.value = params.get('salary_end');
    }
}
