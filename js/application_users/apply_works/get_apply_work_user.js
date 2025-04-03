getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'applicant') {
            fetch(apiUrl + 'application/apply_works/get_apply_work_user.php?user_code=' + mySession.user_code, {
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
                        displayCards(data.data, mySession);
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


async function displayCards(datas, mySession) {
    let cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    let OtherType_All;
    try {
        let response = await fetch(apiUrl + 'application/other_type/get_other_type_all.php?language=' + mySession.language, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${mySession.token}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let result = await response.json();
        OtherType_All = result.data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return; // Exit the function if there's an error
    }

    await datas.forEach(data => {
        const currentDate = new Date().toISOString().slice(0, 10);
        const TimeFormatter = new Intl.DateTimeFormat(texts.format, { hour: 'numeric', minute: 'numeric' });
        const timeIn = datas.time_in
            ? TimeFormatter.format(new Date(currentDate + 'T' + datas.time_in))
            : 'ไม่ระบุ';
        const timeOut = datas.time_out
            ? TimeFormatter.format(new Date(currentDate + 'T' + datas.time_out))
            : 'ไม่ระบุ';

        let timeInOut = '';
        if (datas.time_in && datas.time_out) {
            timeInOut = timeIn + ' - ' + timeOut + ' ' + texts.na;
        } else {
            timeInOut = texts.not_specified;
        }

        let OtherType_Data = [];
        if (data.other_type) {
            OtherType_Data = data.other_type.split(',');
        }

        let ShowOtherType = [];
        OtherType_All.forEach(all => {
            OtherType_Data.forEach(data => {
                if (all.other_type_code === data) {
                    ShowOtherType.push([all.other_type_code, all.other_type]);
                }
            });
        });

        let otherTypesHtml = ShowOtherType.map(type => `<span class="badge text-bg-${type['0'] == 'OT000003' ? 'danger' : 'primary'} btn-sm">${type['1']}</span>`).join(' ');

        // Function to convert work day numbers to day names
        const getDayName = (dayNumber, language) => {
            const dayNames = {
                'th': ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
                'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            };
            return dayNames[language][dayNumber - 1];
        };

        // Function to convert work day string to day names string
        const convertWorkDays = (workDaysString, language) => {
            const days = workDaysString.split(',').map(Number);
            days.sort((a, b) => a - b);

            // Check for specific sequences
            if (days.join(',') === '1,2,3,4,5,6,7') {
                return language === 'th' ? 'ทุกวัน' : 'Everyday';
            } else if (days.join(',') === '2,3,4') {
                return language === 'th' ? 'จันทร์ - พุธ' : 'Monday - Wednesday';
            } else if (days.join(',') === '2,3,4,5') {
                return language === 'th' ? 'จันทร์ - พฤหัสบดี' : 'Monday - Thursday';
            } else if (days.join(',') === '2,3,4,5,6') {
                return language === 'th' ? 'จันทร์ - ศุกร์' : 'Monday - Friday';
            } else if (days.join(',') === '2,3,4,5,6,7') {
                return language === 'th' ? 'จันทร์ - เสาร์' : 'Monday - Saturday';
            } else if (days.join(',') === '0') {
                return texts.not_specified;
            } else {
                return days.map(day => getDayName(day, language)).join(', ');
            }
        };

        const workDays = convertWorkDays(data.work_day, mySession.language);

        let cardHtml = `
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body m-2">
                        <div class="row">
                            <div class="col-md-8">
                                <h5 class="card-title">${data.position}</h5>
                                <p class="card-text"><strong>${texts.job_category}:</strong> ${data.job_category}</p>
                                <p class="card-text"><strong>${texts.company}/${texts.entrepreneur}</strong> ${data.employer_name}</p>
                                <div id="additionalInfo_${data.apply_work_code}" style="display:none;">
                                    <p class="card-text"><strong>${texts.employment_type}:</strong> ${mySession.language == 'th' ? data.employment_type_th : data.employment_type_en}</p>
                                    <p class="card-text"><strong>${texts.work_day}:</strong> ${workDays}</p>
                                    <p class="card-text"><strong>${texts.work_time}:</strong> ${timeInOut}</p>
                                    <p class="card-text">
                                        <strong>${texts.work_location}:</strong> 
                                        ${mySession.language == 'th' 
                                            ? (data.work_location_th ?? texts.not_specified) 
                                            : (data.work_location_en ?? texts.not_specified)}
                                    </p>
                                    <p class="card-text"><strong>${texts.salary}:</strong> ${data.salary == 'agreed' ? texts.agreed : Number(data.salary).toLocaleString() + ' ' + texts.baht}</p>
                                    <p class="card-text"><strong>${texts.email}:</strong> ${data.email}</p>
                                    <p class="card-text"><strong>${texts.description}:</strong> ${data.description}</p>
                                    <p class="card-text">${otherTypesHtml}</p>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex justify-content-end align-items-center">
                                <a href="${data.link_path && data.link_path.startsWith('https') ? data.link_path : (data.link_path && data.link_path.includes('.') ? 'https://' + data.link_path : '#')}">
                                    <img id="logoImage" src="${apiUrl + 'img/logo_employer/' + (data.img_path ? data.img_path : 'no_logo.jpg')}" class="card-img" alt="Logo" style="max-height: 150px; max-width: 150px;">
                                <a>
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="button" class="btn btn-outline-secondary" onclick="toggleAdditionalInfo('additionalInfo_${data.apply_work_code}', this)">
                                <span class="arrow" style="transition: transform 0.3s ease;">${texts.view}</span>
                            </button>   
                            <button type="button" class="btn btn-danger" onclick="delete_data('${data.apply_work_code}', '${data.position}')">${texts.delete}</button>
                        </div>
                    </div>
                </div>
            </div>`;

        cardContainer.innerHTML += cardHtml;
    });
}

function toggleAdditionalInfo(elementId, button) {
    let additionalInfo = document.getElementById(elementId);
    let arrow = button.querySelector('.arrow');
    if (additionalInfo.style.display === "none") {
        additionalInfo.style.display = "block";
        arrow.innerHTML = texts.hide;
        arrow.style.transform = "rotate(180deg)";
    } else {
        additionalInfo.style.display = "none";
        arrow.innerHTML = texts.view;
        arrow.style.transform = "rotate(0deg)";
    }
}
