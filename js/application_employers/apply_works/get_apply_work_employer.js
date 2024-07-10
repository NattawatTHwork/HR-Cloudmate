getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'employer') {
            fetch(apiUrl + 'application/apply_works/get_apply_work_employer.php?employer_code=' + mySession.employer_code, {
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

async function displayCards(datas) {
    let cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    await datas.forEach(data => {
        const date = new Date(data.dates);
        date.setHours(date.getHours() + 5);

        const dateMonthFormatter = new Intl.DateTimeFormat(texts.format, { day: 'numeric', month: 'long' });
        const formattedDateMonth = dateMonthFormatter.format(new Date(date));

        const YearFormatter = new Intl.DateTimeFormat(texts.format, { year: 'numeric' });
        const formattedYear = YearFormatter.format(new Date(date));

        const TimeFormatter = new Intl.DateTimeFormat(texts.format, { hour: 'numeric', minute: 'numeric' });
        const formattedTime = TimeFormatter.format(new Date(date));

        let cardHtml = `
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.position}</h5>
                        <p class="card-text"><strong>${texts.job_category}:</strong> ${data.job_category}</p>
                        <p class="card-text"><strong>${texts.name}:</strong> ${data.firstname} ${data.lastname}</p>
                        <div id="additionalInfo_${data.apply_work_code}" style="display:none;">
                            <p class="card-text"><strong>${texts.gender}:</strong> ${data.gender == 1 ? texts.male : data.gender == 2 ? texts.female : texts.other}</p>
                            <p class="card-text"><strong>${texts.email}:</strong> ${data.email}</p>
                            <p class="card-text"><strong>${texts.tel}:</strong> ${data.phone_number}</p>
                            <p class="card-text"><strong>${texts.apply_date}:</strong> ${formattedDateMonth + ' ' + formattedYear + texts.time + formattedTime + texts.na}</p>
                        </div>
                        <div class="text-center">
                            <button type="button" class="btn btn-outline-secondary" onclick="toggleAdditionalInfo('additionalInfo_${data.apply_work_code}', this)">
                                <span class="arrow" style="transition: transform 0.3s ease;">${texts.view}</span>
                            </button>                              
                            <a type="button" class="btn btn-primary" href="educations.php?user_code=${data.user_code}&fullname=${data.firstname}%20${data.lastname}">${texts.education}</a>
                            <a type="button" class="btn btn-primary" href="experiences.php?user_code=${data.user_code}&fullname=${data.firstname}%20${data.lastname}">${texts.experience}</a>
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


