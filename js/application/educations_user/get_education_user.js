if (token && role == 'member') {
    const urlParams = new URLSearchParams(window.location.search);
    const user_code = urlParams.get('user_code');

    fetch(apiUrl + 'application/educations/get_education_user.php?user_code=' + user_code, {
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
        let level_class = data.level == 1 ? texts.m3 :
            data.level == 2 ? texts.m6 :
                data.level == 3 ? texts.vc :
                    data.level == 4 ? texts.hvc :
                        data.level == 5 ? texts.bd :
                            data.level == 6 ? texts.md :
                                data.level == 7 ? texts.dd :
                                    '';

        let statusflag = data.statusflag == 't' ? texts.enable :
            data.statusflag == 'f' ? texts.disable : '';

        let statusStyle = data.statusflag == 't' ? 'text-success' : 'text-danger';


        let cardHtml = `
            <div class="col-sm-12 col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${texts.level}: ${level_class}</h5>
                        <p class="card-text"><strong>${texts.school}:</strong> ${data.school}</p>
                        <p class="card-text"><strong>${texts.faculty}:</strong> ${data.faculty}</p>
                        <p class="card-text"><strong>${texts.major}:</strong> ${data.major}</p>
                        <p class="card-text"><strong>${texts.graduation_year}:</strong> ${data.graduation_year}</p>
                        <p class="card-text"><strong>${texts.gpa}:</strong> ${data.gpa}</p>
                        <p class="card-text"><strong>${texts.status}:</strong> <span class="${statusStyle}">${statusflag}</span></p>
                        <div class="text-center">
                            <button type="button" class="btn btn-warning" onclick="update_data('${data.education_code}')">${texts.edit}</button>
                            <button type="button" class="btn btn-danger" onclick="delete_data('${data.education_code}', '${data.level}')">${texts.delete}</button>
                        </div>
                    </div>
                </div>
            </div>`;

        cardContainer.innerHTML += cardHtml;
    });
}
