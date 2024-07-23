const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('job_code')) {
    const job_code = urlParams.get('job_code');
    fetchData(job_code);
}

function fetchData(job_code) {
    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'applicant') {
                fetch(apiUrl + 'application/jobs/get_job_detail.php?job_code=' + job_code, {
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
}

async function displayCards(data) {
    try {
        const mySession = await getSessionToken();

        const response = await fetch(apiUrl + 'application/apply_works/get_status_apply_work.php?user_code=' + mySession.user_code + '&job_code=' + data.job_code, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${mySession.token}`
            },
        });
        const status = await response.json();
        const status_code = status.status === 'true';

        const currentDate = new Date().toISOString().slice(0, 10);
        const TimeFormatter = new Intl.DateTimeFormat(texts.format, { hour: 'numeric', minute: 'numeric' });
        const timeIn = TimeFormatter.format(new Date(currentDate + 'T' + data.time_in));
        const timeOut = TimeFormatter.format(new Date(currentDate + 'T' + data.time_out));

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

        const workDays = convertWorkDays(data.work_day, mySession.language);

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

        let cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = '';

        let cardHtml = `
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body m-2">
                        <div class="row">
                            <div class="col-md-8">
                                <h5 class="card-title">${data.position}</h5>
                                <p class="card-text"><strong>${texts.job_category}:</strong> ${data.job_category}</p>
                                <p class="card-text"><strong>${texts.company}/${texts.entrepreneur}:</strong> ${data.employer_name}</p>
                                <p class="card-text"><strong>${texts.employment_type}:</strong> ${mySession.language == 'th' ? data.employment_type_th : data.employment_type_en}</p>
                                <p class="card-text"><strong>${texts.work_day}:</strong> ${workDays}</p>
                                <p class="card-text"><strong>${texts.work_time}:</strong> ${timeIn} - ${timeOut} ${texts.na}</p>
                                <p class="card-text"><strong>${texts.work_location}:</strong> ${mySession.language == 'th' ? data.work_location_th : data.work_location_en}</p>
                                <p class="card-text"><strong>${texts.salary}:</strong> ${data.salary == 'agreed' ? texts.agreed : Number(data.salary).toLocaleString() + ' ' + texts.baht}</p>
                                <p class="card-text"><strong>${texts.email}:</strong> ${data.email}</p>
                                <p class="card-text"><strong>${texts.description}:</strong> ${data.description}</p>
                                <p class="card-text">${otherTypesHtml}</p>
                            </div>
                            <div class="col-md-4 d-flex justify-content-end align-items-center">
                                <a href="${data.link_path && data.link_path.startsWith('https') ? data.link_path : (data.link_path && data.link_path.includes('.') ? 'https://' + data.link_path : '#')}">
                                    <img id="logoImage" src="${apiUrl + 'img/logo_employer/' + (data.img_path ? data.img_path : 'no_logo.jpg')}" class="card-img" alt="Logo" style="max-height: 250px; max-width: 250px;">
                                <a>
                            </div>
                        </div>       
                        <div class="text-center mt-auto">
                            <button type="button" class="btn ${status_code ? 'btn-secondary' : 'btn-primary'}" onclick="apply_work('${data.job_code}', '${data.position}', '${data.job_category_code}', '${data.salary}')" ${status_code ? 'disabled' : ''}>${status_code ? texts.applied_job : texts.apply_job}</button>
                        </div>
                    </div>
                </div>
            </div>`;

        cardContainer.innerHTML += cardHtml;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}