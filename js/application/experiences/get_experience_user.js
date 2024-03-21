if (token) {
    const urlParams = new URLSearchParams(window.location.search);
    const user_code = urlParams.get('user_code');

    fetch(apiUrl + 'application/experiences/get_experience_user.php?user_code=' + user_code, {
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
        const urlParams = new URLSearchParams(window.location.search);
        const fullname = urlParams.get('fullname');

        let cardHtml = `
            <div class="col-sm-12 col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">ตำแหน่ง: ${data.position}</h5>
                        <p class="card-text"><strong>ชื่อบริษัท:</strong> ${data.company_name}</p>
                        <p class="card-text"><strong>ประเภทงาน:</strong> ${data.job_category}</p>
                        <button type="button" class="btn btn-warning" onclick="update_data('${data.experience_code}')">แก้ไข</button>
                        <button type="button" class="btn btn-danger" onclick="delete_data('${data.experience_code}', '${data.position}')">ลบ</button>
                    </div>
                </div>
            </div>`;

        cardContainer.innerHTML += cardHtml;
    });
}
