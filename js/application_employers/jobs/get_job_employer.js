getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'employer') {
            fetch(apiUrl + 'application/jobs/get_job_employer.php?employer_code=' + mySession.employer_code, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    displayCards(data.data, mySession);
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
    try {
        // Fetch other_type_all data
        const response = await fetch(apiUrl + 'application/other_type/get_other_type_all.php?language=' + mySession.language, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${mySession.token}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch other types');
        }
        const data = await response.json();
        const other_type_all = data.data;

        const urlParams = new URLSearchParams(window.location.search);
        const status = urlParams.get('status');

        // Filter datas based on status
        if (status == 1) {
            datas = datas.filter(data => data.statusflag == 1);
        } else if (status == 2) {
            datas = datas.filter(data => data.statusflag == 2);
        } else if (status == 3) {
            datas = datas.filter(data => data.statusflag == 3);
        }

        let cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = '';

        // Display cards
        for (let data of datas) {
            let statusflag = data.statusflag == 1 ? texts.enable : data.statusflag == 2 ? texts.waiting_check : data.statusflag == 3 ? texts.disable : '';
            let statusStyle = data.statusflag == 1 ? 'text-success' : data.statusflag == 2 ? 'text-warning' : data.statusflag == 3 ? 'text-danger' : '';

            const currentDate = new Date().toISOString().slice(0, 10);

            let timeInText = '';
            let timeOutText = '';
            if (data.time_in && data.time_out) {
                const TimeFormatter = new Intl.DateTimeFormat(texts.format, {
                    hour: 'numeric',
                    minute: 'numeric'
                });
                timeInText = TimeFormatter.format(new Date(currentDate + 'T' + data.time_in));
                timeOutText = TimeFormatter.format(new Date(currentDate + 'T' + data.time_out));
            } else {
                // ถ้าไม่มีเวลาให้ใช้ข้อความไม่ระบุ
                timeInText = mySession.language === 'th' ? 'ไม่ระบุเวลา' : 'Unspecified time';
                timeOutText = '';
            }            

            let otherTypes = '';
            if (other_type_all) {
                other_type_all.forEach(type_all => {
                    isChecked = '';
                    if (data.other_type) {
                        const types = data.other_type.split(',');
                        isChecked = types.includes(type_all.other_type_code) ? 'checked' : '';
                    }
                    otherTypes += `<input type="checkbox" disabled ${isChecked}> ${type_all.other_type}<br>`;
                });
            }

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
                    return language === 'th' ? 'ไม่ระบุวันทำงาน' : 'Unspecified work day';
                } else {
                    return days.map(day => getDayName(day, language)).join(', ');
                }
            };

            const workDays = convertWorkDays(data.work_day, mySession.language);

            let cardHtml = `
                    <div class="col-sm-12 col-md-6 mb-4">
                        <div class="card">
                            <div class="card-body">
                            <h5 class="card-title">${data.position}</h5>
                            <p class="card-text"><strong>${texts.job_category}:</strong> ${data.job_category}</p>
                            <p class="card-text"><strong>${texts.employment_type}:</strong> ${mySession.language === 'th' ? data.employment_type_th : data.employment_type_en}</p>
                            <p class="card-text"><strong>${texts.work_day}:</strong> ${workDays}</p>
                            <p class="card-text"><strong>${texts.work_time}:</strong> ${timeInText}${timeOutText ? ' - ' + timeOutText : ''}</p>
                            <p class="card-text">
                            <strong>${texts.work_location}:</strong> 
                            ${mySession.language === 'th'
                                                ? (data.work_location_th ? data.work_location_th : 'ไม่ระบุสถานที่ทำงาน')
                                                : (data.work_location_en ? data.work_location_en : 'Unspecified work location')}
                            </p>
                            <p class="card-text"><strong>${texts.salary}:</strong> ${data.salary === 'agreed' ? texts.agreed : Number(data.salary).toLocaleString() + ' ' + texts.baht}</p>
                            <p class="card-text"><strong>${texts.description}:</strong> ${data.description}</p>
                            <p class="card-text"><strong>${texts.status}:</strong> <span class="${statusStyle}">${statusflag}</span></p>
                            <p class="card-text">${otherTypes}</p>
                            <p class="card-text text-secondary"><strong>${texts.visitor}:</strong> ${data.view_count} ${texts.times}</p>
                            <div class="text-center">
                                <button type="button" class="btn btn-warning" onclick="update_data('${data.job_code}')">${texts.edit}</button>
                                <button type="button" class="btn btn-danger" onclick="delete_data('${data.job_code}', '${data.position}')">${texts.delete}</button>
                            </div>
                            </div>
                        </div>
                    </div>`;

            cardContainer.innerHTML += cardHtml;
        }
    } catch (error) {
        console.error('Error displaying cards:', error);
    }
}