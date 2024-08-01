getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'employer') {
            fetch(apiUrl + 'application/packages/get_package_show.php?employer_code=' + mySession.employer_code, {
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
                        displayCards(data.data, data.trial.package_code, data.trial.trial, data.statusflag.statusflag, data.status_approved.status_approved);
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

    async function displayCards(datas, package_code, trial, statusflag, status_approved) {
        let cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = '';
        console.log(status_approved);
    
        // สร้างและแสดงบัตรทั้งหมด
        datas.forEach(data => {
            let disableApprove = status_approved === 'f';
            let disableAll = package_code && statusflag == 2;
            let disableSingle = trial === 't' && data.package_code === 'PK000001';
            let disableNotPackage = package_code && data.package_code != package_code;
            let isDisabled = disableAll || disableSingle || disableNotPackage || disableApprove;
            let buttonClass = isDisabled ? 'btn-secondary' : 'btn-primary';
            console.log(disableApprove)
            console.log(disableAll)
            console.log(disableSingle)
            console.log(disableNotPackage)
            console.log('----')

            let cardHtml = `
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-body m-2">
                            <h5 class="card-title">${data.package}</h5>
                            <p class="card-text"><strong>${texts.post}:</strong> ${data.amount} ${texts.posts}</p>
                            <p class="card-text"><strong>${texts.period}:</strong> ${data.period_month} ${texts.month}</p>
                            <p class="card-text"><strong>${texts.description}:</strong> ${data.description}</p>
                            <div class="text-center">
                                <button class="btn ${buttonClass}" onclick="apply_package('${data.package_code}', '${data.package}', '${data.amount}', '${data.period_month}', '${data.price}')" ${isDisabled ? 'disabled' : ''}>${texts.apply_package}</button>
                            </div>
                        </div>
                    </div>
                </div>`;
    
            cardContainer.innerHTML += cardHtml;
        });
    }
    