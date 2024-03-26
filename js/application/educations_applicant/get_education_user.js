if (token && role == 'applicant') {

    fetch(apiUrl + 'application/educations/get_education_user.php?user_code=' + data_token.user_code, {
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
        let level = data.level == 1 ? 'มัฐยมศึกษาปีที่ 3' :
            data.level == 2 ? 'มัฐยมศึกษาปีที่ 6' :
                data.level == 3 ? 'ประกาศนียบัตรวิชาชีพ' :
                    data.level == 4 ? 'ประกาศนียบัตรวิชาชีพชั้นสูง' :
                        data.level == 5 ? 'ปริญญาตรี' :
                            data.level == 6 ? 'ปริญญาโท' :
                                data.level == 7 ? 'ปริญญาเอก' :
                                    'อื่นๆ';

        let cardHtml = `
            <div class="col-sm-12 col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">ระดับการศึกษา: ${level}</h5>
                        <p class="card-text"><strong>สถานศึกษา:</strong> ${data.school}</p>
                        <p class="card-text"><strong>คณะ:</strong> ${data.faculty}</p>
                        <p class="card-text"><strong>สาขา:</strong> ${data.major}</p>
                        <p class="card-text"><strong>ปีที่สำเร็จการศึกษา:</strong> ${data.graduation_year}</p>
                        <p class="card-text"><strong>GPA:</strong> ${data.gpa}</p>
                        <button type="button" class="btn btn-warning" onclick="update_data('${data.education_code}')">แก้ไข</button>
                        <button type="button" class="btn btn-danger" onclick="delete_data('${data.education_code}', '${data.level}')">ลบ</button>
                    </div>
                </div>
            </div>`;

        cardContainer.innerHTML += cardHtml;
    });
}
