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
                    fetch(apiUrl + 'application/packages/get_employer_package_trial.php?employer_code=' + mySession.employer_code, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${mySession.token}`
                        }
                    })
                        .then(response => {
                            return response.json();
                        })
                        .then(data_trial => {
                            if (data.status === 'success') {
                                displayCards(data.data, data_trial.data.package_code, data_trial.data.trial, mySession);
                            }
                        })
                        .catch(error => {
                            console.error('There has been a problem with your fetch operation:', error);
                        });
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        } else {
            console.error('Token not found in local storage');
        }
    })
    .catch(error => console.error('Error fetching session token:', error));

    async function displayCards(datas, package_code, trial, mySession) {
        let cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = '';
    
        const response = await fetch(apiUrl + 'application/employers/get_employer_header.php?employer_code=' + mySession.employer_code, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${mySession.token}`
            },
        });
    
        const statusflag_data = await response.json();
    
        // สร้างและแสดงบัตรทั้งหมด
        datas.forEach(data => {
            let disableAll = package_code && statusflag_data.data.statusflag == 2;
            let disableSingle = trial === 't' && data.package_code === 'PK000001';
            let isDisabled = disableAll || disableSingle;
            let buttonClass = isDisabled ? 'btn-secondary' : 'btn-primary';
    
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
    