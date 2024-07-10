getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'employer') {
            fetch(apiUrl + 'application/packages/get_package_show.php', {
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
        let cardHtml = `
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body m-2">
                        <h5 class="card-title">${data.package}</h5>
                        <p class="card-text"><strong>${texts.post}:</strong> ${data.amount} ${texts.posts}</p>
                        <p class="card-text"><strong>${texts.period}:</strong> ${data.period_month} ${texts.month}</p>
                        <p class="card-text"><strong>${texts.description}:</strong> ${data.description}</p>
                        <div class="text-center">
                            <button type="button" class="btn btn-primary" onclick="apply_package('${data.package_code}', '${data.package}', '${data.amount}', '${data.period_month}', '${data.price}')">${texts.apply_package}</button>
                        </div>
                    </div>
                </div>
            </div>`;

        cardContainer.innerHTML += cardHtml;
    });
}
