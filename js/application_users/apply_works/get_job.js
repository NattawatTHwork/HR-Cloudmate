document.getElementById('searchButton').addEventListener('click', function () {
    const selectedJobCategory = document.getElementById('select_job_category').value;
    if (selectedJobCategory) {
        window.location.href = `apply_works.php?job_category_code=${selectedJobCategory}`;
    }
});

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('job_category_code')) {
    const job_category_code = urlParams.get('job_category_code');
    fetchData(job_category_code);
}

function fetchData(job_category_code) {
    if (token && role == 'applicant') {
        fetch(apiUrl + 'application/jobs/get_job_by_job_category.php?job_category_code=' + job_category_code, {
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

async function displayCards(datas) {
    let cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    await datas.forEach(data => {
        let employment_type = data.employment_type == 1 ? 'Full Time' :
            data.employment_type == 2 ? 'Freelance' :
                data.employment_type == 3 ? 'Part Time' :
                    data.employment_type == 4 ? 'Tainee' :
                        '';

        let cardHtml = `
            <div class="col-sm-12">
                <div class="card d-flex flex-column">
                    <div class="card-body m-2">
                        <div class="row">
                            <div class="col-md-8">
                                <h5 class="card-title">${data.position}</h5>
                                <p class="card-text"><strong>${texts.employment_type}:</strong> ${employment_type}</p>
                                <p class="card-text"><strong>${texts.company}/${texts.entrepreneur}:</strong> ${data.employer_name}</p>
                            </div>
                            <div class="col-md-4 d-flex justify-content-end align-items-center">
                                <a href="${data.link_path && data.link_path.startsWith('https') ? data.link_path : (data.link_path && data.link_path.includes('.') ? 'https://' + data.link_path : '#')}">
                                    <img id="logoImage" src="${apiUrl + '/img/logo_employer/' + (data.img_path ? data.img_path : 'no_logo.jpg')}" class="card-img" alt="Logo" style="max-height: 150px; max-width: 150px;">
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
