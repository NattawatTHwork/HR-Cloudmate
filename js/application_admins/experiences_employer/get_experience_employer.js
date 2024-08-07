getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'admin') {
            const urlParams = new URLSearchParams(window.location.search);
            const user_code = urlParams.get('user_code');

            fetch(apiUrl + 'application/experiences/get_experience_employer.php?user_code=' + user_code, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
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
    })
    .catch(error => console.error('Error fetching session token:', error));

async function displayCards(datas) {
    let cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    await datas.forEach(data => {
        let cardHtml = `
            <div class="col-sm-12 col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.position}</h5>
                        <p class="card-text"><strong>${texts.company_name}:</strong> ${data.company_name}</p>
                        <p class="card-text"><strong>${texts.job_category}:</strong> ${data.job_category}</p>
                    </div>
                </div>
            </div>`;

        cardContainer.innerHTML += cardHtml;
    });
}
