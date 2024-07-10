getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'member') {
            const urlParams = new URLSearchParams(window.location.search);
            const employer_code = urlParams.get('employer_code');

            fetch(apiUrl + 'application/packages/get_employer_package.php?employer_code=' + employer_code, {
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

async function displayCards(data) {
    let cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    if (!data || Object.keys(data).length === 0) {
        let noDataHtml = `
            <div class="col-sm-12 mb-4">
                <div class="card">
                    <div class="card-body">
                        <p class="card-text text-center mt-4">${texts.no_package}</p>
                    </div>
                </div>
            </div>`;
        cardContainer.innerHTML += noDataHtml;
        return;
    }

    let cardHtml = `
        <div class="col-sm-12 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${data.package}</h5>
                    <p class="card-text"><strong>${texts.start_date}:</strong> ${data.start_date}</p>
                    <p class="card-text"><strong>${texts.end_date}:</strong> ${data.end_date}</p>
                    <p class="card-text"><strong>${texts.remaining_amount}:</strong> ${data.amount} ${texts.posts}</p>
                    <p class="card-text"><strong>${texts.description}:</strong> ${data.description}</p>
                </div>
            </div>
        </div>`;

    cardContainer.innerHTML += cardHtml;
}

