if (token && role == 'member') {
    const urlParams = new URLSearchParams(window.location.search);
    const user_code = urlParams.get('user_code');

    fetch(apiUrl + 'application/referred_jobs/get_referred_job_user.php?user_code=' + user_code, {
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
    let cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    await datas.forEach(data => {
        let employment_type = data.employment_type == 1 ? 'Full Time' : data.employment_type == 2 ? 'Freelance' : data.employment_type == 3 ? 'Part Time' : 'Trainee';

        let statusflag = data.statusflag == 't' ? texts.enable :
            data.statusflag == 'f' ? texts.disable : '';

        let statusStyle = data.statusflag == 't' ? 'text-success' : 'text-danger';

        let cardHtml = `
            <div class="col-sm-12 col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${texts.position}: ${data.position}</h5>
                        <p class="card-text"><strong>${texts.job_category}:</strong> ${data.job_category}</p>
                        <p class="card-text"><strong>${texts.employment_type}:</strong> ${employment_type}</p>
                        <p class="card-text"><strong>${texts.expect_salary}:</strong> ${data.expect_salary}</p>
                        <p class="card-text"><strong>${texts.work_location}:</strong> ${data.work_location}</p>
                        <p class="card-text"><strong>${texts.status}:</strong> <span class="${statusStyle}">${statusflag}</span></p>
                        <div class="text-center">
                            <button type="button" class="btn btn-warning" onclick="update_data('${data.referred_job_code}')">${texts.edit}</button>
                            <button type="button" class="btn btn-danger" onclick="delete_data('${data.referred_job_code}', '${data.position}')">${texts.delete}</button>
                        </div>
                    </div>
                </div>
            </div>`;

        cardContainer.innerHTML += cardHtml;
    });
}
