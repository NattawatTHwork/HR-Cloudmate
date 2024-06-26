if (token && role == 'member') {
    const urlParams = new URLSearchParams(window.location.search);
    const employer_code = urlParams.get('employer_code');

    fetch(apiUrl + 'application/jobs/get_job_employer.php?employer_code=' + employer_code, {
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
                        '';

        let statusflag = data.statusflag == 't' ? texts.enable :
            data.statusflag == 'f' ? texts.disable : '';

        let statusStyle = data.statusflag == 't' ? 'text-success' : 'text-danger';
        
        const currentDate = new Date().toISOString().slice(0,10);       
        const TimeFormatter = new Intl.DateTimeFormat(texts.format, { hour: 'numeric', minute: 'numeric' });
        const timeIn = TimeFormatter.format(new Date(currentDate + 'T' + data.time_in));
        const timeOut = TimeFormatter.format(new Date(currentDate + 'T' + data.time_out));

        let cardHtml = `
            <div class="col-sm-12 col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.position}</h5>
                        <p class="card-text"><strong>${texts.job_category}:</strong> ${data.job_category}</p>
                        <p class="card-text"><strong>${texts.employment_type}:</strong> ${employment_type}</p>
                        <p class="card-text"><strong>${texts.work_day}:</strong> ${data.work_day}</p>
                        <p class="card-text"><strong>${texts.work_time}:</strong> ${timeIn} - ${timeOut} ${texts.na}</p>
                        <p class="card-text"><strong>${texts.work_location}:</strong> ${data.work_location}</p>
                        <p class="card-text"><strong>${texts.salary}:</strong> ${data.salary}</p>
                        <p class="card-text"><strong>${texts.description}:</strong> ${data.description}</p>
                        <p class="card-text"><strong>${texts.status}:</strong> <span class="${statusStyle}">${statusflag}</span></p>
                        <div class="text-center">
                            <button type="button" class="btn btn-warning" onclick="update_data('${data.job_code}')">${texts.edit}</button>
                            <button type="button" class="btn btn-danger" onclick="delete_data('${data.job_code}', '${data.position}')">${texts.delete}</button>
                        </div>
                    </div>
                </div>
            </div>`;

        cardContainer.innerHTML += cardHtml;
    }
}
