getSessionToken()
    .then(mySession => {
        if (mySession.token && mySession.role === 'member') {
            const urlParams = new URLSearchParams(window.location.search);
            const job_code = urlParams.get('job_code');

            fetch(apiUrl + 'application/jobs/get_job_approval.php?job_code=' + job_code + '&language=' + mySession.language, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
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

        let cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = '';

        // Display cards
        let statusflag = datas.statusflag == 1 ? texts.enable : datas.statusflag == 2 ? texts.on_hold : datas.statusflag == 3 ? texts.disable : '';
        let statusStyle = datas.statusflag == 1 ? 'text-success' : datas.statusflag == 2 ? 'text-warning' : datas.statusflag == 3 ? 'text-danger' : '';

        const currentDate = new Date().toISOString().slice(0, 10);
        const TimeFormatter = new Intl.DateTimeFormat(texts.format, { hour: 'numeric', minute: 'numeric' });
        const timeIn = TimeFormatter.format(new Date(currentDate + 'T' + datas.time_in));
        const timeOut = TimeFormatter.format(new Date(currentDate + 'T' + datas.time_out));

        
        let OtherType_Data = [];
        if (datas.other_type) {
            OtherType_Data = datas.other_type.split(',');
        }
        
        let ShowOtherType = [];
        other_type_all.forEach(all => {
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
            if (days.join(',') === '2,3,4') {
                return language === 'th' ? 'จันทร์ - พุธ' : 'Monday - Wednesday';
            } else if (days.join(',') === '2,3,4,5') {
                return language === 'th' ? 'จันทร์ - พฤหัสบดี' : 'Monday - Thursday';
            } else if (days.join(',') === '2,3,4,5,6') {
                return language === 'th' ? 'จันทร์ - ศุกร์' : 'Monday - Friday';
            } else if (days.join(',') === '2,3,4,5,6,7') {
                return language === 'th' ? 'จันทร์ - เสาร์' : 'Monday - Saturday';
            } else {
                return days.map(day => getDayName(day, language)).join(', ');
            }
        };

        const workDays = convertWorkDays(datas.work_day, mySession.language);

        let cardHtml = `
                        <div class="col-12 mb-4">
                            <div class="card">
                                <div class="card-body">
                                <h5 class="card-title">${datas.position}</h5>
                                <p class="card-text"><strong>${texts.job_category}:</strong> ${datas.job_category}</p>
                                <p class="card-text"><strong>${texts.company}/${texts.entrepreneur}:</strong> ${datas.employer_name}</p>
                                <p class="card-text"><strong>${texts.employment_type}:</strong> ${datas.employment_type}</p>
                                <p class="card-text"><strong>${texts.work_day}:</strong> ${workDays}</p>
                                <p class="card-text"><strong>${texts.work_time}:</strong> ${timeIn} - ${timeOut} ${texts.na}</p>
                                <p class="card-text"><strong>${texts.work_location}:</strong> ${datas.work_location}</p>
                                <p class="card-text"><strong>${texts.salary}:</strong> ${datas.salary === 'agreed' ? texts.agreed : Number(datas.salary).toLocaleString() + ' ' + texts.baht}</p>
                                <p class="card-text"><strong>${texts.email}:</strong> ${datas.email}</p>
                                <p class="card-text"><strong>${texts.description}:</strong> ${datas.description}</p>
                                <p class="card-text"><strong>${texts.status}:</strong> <span class="${statusStyle}">${statusflag}</span></p>
                                <p class="card-text">${otherTypesHtml}</p>
                                <div class="text-center">
                                    <button type="button" class="btn btn${datas.statusflag != 1 ? '-outline' : ''}-success" onclick="change_status('${datas.job_code}','1')">${texts.enable}</button>
                                    <button type="button" class="btn btn${datas.statusflag != 2 ? '-outline' : ''}-warning" onclick="change_status('${datas.job_code}','2')">${texts.on_hold}</button>
                                    <button type="button" class="btn btn${datas.statusflag != 3 ? '-outline' : ''}-danger" onclick="change_status('${datas.job_code}','3')">${texts.disable}</button>
                                </div>
                                </div>
                            </div>
                        </div>`;
        cardContainer.innerHTML += cardHtml;
    } catch (error) {
        console.error('Error displaying cards:', error);
    }
}