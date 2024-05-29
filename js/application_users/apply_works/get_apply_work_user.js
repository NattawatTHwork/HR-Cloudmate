
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
                                <p class="card-text"><strong>${texts.company}/${texts.entrepreneur}</strong> ${data.employer_name}</p>
                                <div id="additionalInfo_${data.apply_work_code}" style="display:none;">
                                    <p class="card-text"><strong>${texts.employment_type}:</strong> ${employment_type}</p>
                                    <p class="card-text"><strong>${texts.work_day}:</strong> ${data.work_day}</p>
                                    <p class="card-text"><strong>${texts.work_time}:</strong> ${timeIn} - ${timeOut} ${texts.na}</p>
                                    <p class="card-text"><strong>${texts.work_location}:</strong> ${data.work_location}</p>
                                    <p class="card-text"><strong>${texts.salary}:</strong> ${data.salary}</p>
                                    <p class="card-text"><strong>${texts.email}:</strong> ${data.email}</p>
                                    <p class="card-text"><strong>${texts.description}:</strong> ${data.description}</p>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex justify-content-end align-items-center">
                                <a href="${data.link_path && data.link_path.startsWith('https') ? data.link_path : (data.link_path && data.link_path.includes('.') ? 'https://' + data.link_path : '#')}">
                                    <img id="logoImage" src="${apiUrl+'/img/logo_employer/'+(data.img_path ? data.img_path : 'no_logo.jpg')}" class="card-img" alt="Logo" style="max-height: 150px; max-width: 150px;">
                                <a>
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="button" class="btn btn-outline-secondary" onclick="toggleAdditionalInfo('additionalInfo_${data.apply_work_code}', this)">
                                <span class="arrow" style="transition: transform 0.3s ease;">${texts.view}</span>
                            </button>   
                            <button type="button" class="btn btn-danger" onclick="delete_data('${data.apply_work_code}', '${data.position}')">${texts.delete}</button>
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
