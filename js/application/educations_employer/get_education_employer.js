getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'member') {
            const urlParams = new URLSearchParams(window.location.search);
            const user_code = urlParams.get('user_code');

            fetch(apiUrl + 'application/educations/get_education_employer.php?user_code=' + user_code, {
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
        let level_class = data.level == 1 ? texts.m3 :
            data.level == 2 ? texts.m6 :
                data.level == 3 ? texts.vc :
                    data.level == 4 ? texts.hvc :
                        data.level == 5 ? texts.bd :
                            data.level == 6 ? texts.md :
                                data.level == 7 ? texts.dd :
                                    '';

        let cardHtml = `
            <div class="col-sm-12 col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">${level_class}</h5>
                    <p class="card-text"><strong>${texts.school}:</strong> ${data.school}</p>
                    <p class="card-text"><strong>${texts.faculty}:</strong> ${data.faculty}</p>
                    <p class="card-text"><strong>${texts.major}:</strong> ${data.major}</p>
                    <p class="card-text"><strong>${texts.graduation_year}:</strong> ${data.graduation_year}</p>
                    <p class="card-text"><strong>${texts.gpa}:</strong> ${data.gpa}</p>
                </div>
                </div>
            </div>`;

        cardContainer.innerHTML += cardHtml;
    });
}
