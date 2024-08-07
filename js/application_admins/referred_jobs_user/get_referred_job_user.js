getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'admin') {
            const urlParams = new URLSearchParams(window.location.search);
            const user_code = urlParams.get('user_code');

            fetch(apiUrl + 'application/referred_jobs/get_referred_job_user.php?user_code=' + user_code, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    displayCards(data.data, mySession);
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        } else {
            console.error('Token not found in local storage');
        }
    })
    .catch(error => console.error('Error fetching session token:', error));

async function displayCards(datas, mySession) {
    let cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    await datas.forEach(data => {
        let statusflag = data.statusflag == 't' ? texts.enable :
            data.statusflag == 'f' ? texts.disable : '';

        let statusStyle = data.statusflag == 't' ? 'text-success' : 'text-danger';

        let cardHtml = `
            <div class="col-sm-12 col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.position}</h5>
                        <p class="card-text"><strong>${texts.job_category}:</strong> ${data.job_category}</p>
                        <p class="card-text"><strong>${texts.employment_type}:</strong> ${mySession.language == 'th' ? data.employment_type_th : data.employment_type_en}</p>
                        <p class="card-text"><strong>${texts.expect_salary}:</strong> ${Number(data.expect_salary).toLocaleString() + ' ' + texts.baht}</p>
                        <p class="card-text"><strong>${texts.work_location}:</strong> ${mySession.language == 'th' ? data.work_location_th : data.work_location_en}</p>
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
