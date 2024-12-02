function view_data(partTimeDataId) {
    getSessionToken().then(mySession => {
        if (!mySession.token || mySession.role !== 'applicant_part_time') {
            console.error("Session token not found or unauthorized role");
            return;
        }

        fetch(apiUrl + 'application/part_time_users/get_part_time_data.php?part_time_data_id=' + partTimeDataId, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${mySession.token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            const userData = data.data;

            // Populate fields with fetched data
            document.getElementById('view_part_time_data_id').value = userData.part_time_data_id;
            document.getElementById('view_part_time_data_code').value = userData.part_time_data_code;
            document.getElementById('view_firstnamelastname').value = userData.fullname;
            document.getElementById('view_age').value = userData.age;
            document.getElementById('view_children_count').value = userData.children_count;
            document.getElementById('view_phone_number').value = userData.phone_number;
            document.getElementById('view_line_id').value = userData.line_id;
            document.getElementById('view_facebook').value = userData.facebook;
            document.getElementById('view_email').value = userData.email;
            document.getElementById('view_expect_salary').value = Number(userData.expect_salary).toLocaleString();

            // Set gender and marital status as disabled
            document.querySelector(`#view_gender_${userData.gender == 1 ? 'male' : userData.gender == 2 ? 'female' : 'other'}`).checked = true;
            document.querySelector(`#view_gender_${userData.gender == 1 ? 'male' : userData.gender == 2 ? 'female' : 'other'}`).disabled = true;

            document.querySelector(`#view_marital_status_${userData.marital_status == 1 ? 'single' : userData.marital_status == 2 ? 'married' : 'divorced'}`).checked = true;
            document.querySelector(`#view_marital_status_${userData.marital_status == 1 ? 'single' : userData.marital_status == 2 ? 'married' : 'divorced'}`).disabled = true;

            // Disable all checkboxes for work experience
            const selectedExperience = userData.work_experience.split(',');
            document.querySelectorAll('.view-work-experience').forEach(checkbox => {
                checkbox.checked = selectedExperience.includes(checkbox.value);
                checkbox.disabled = true;
            });

            // Handle other experience field
            let otherExperience = selectedExperience.find(exp => isNaN(exp));
            if (otherExperience) {
                document.getElementById('view_experience_other').checked = true;
                document.getElementById('view_experience_other_text').disabled = true;
                document.getElementById('view_experience_other_text').value = otherExperience;
            } else {
                document.getElementById('view_experience_other').checked = false;
                document.getElementById('view_experience_other_text').disabled = true;
                document.getElementById('view_experience_other_text').value = '';
            }

            // Display work days as read-only
            const workDaysContainer = document.getElementById('view_workDaysContainer');
            workDaysContainer.innerHTML = '';

            if (Array.isArray(userData.work_days) && userData.work_days.length > 0) {
                // Mapping day numbers to Thai day names
                const dayNames = {
                    1: 'จันทร์',
                    2: 'อังคาร',
                    3: 'พุธ',
                    4: 'พฤหัสบดี',
                    5: 'ศุกร์',
                    6: 'เสาร์',
                    7: 'อาทิตย์'
                };
            
                userData.work_days.forEach(day => {
                    const dayName = dayNames[day.day_of_week] || 'ไม่ทราบ'; // Default to "ไม่ทราบ" if day is out of range
                    const dayHtml = `
                        <div class="row mb-2">
                            <div class="col-2">
                                <label class="form-label">${dayName}</label>
                            </div>
                            <div class="col-5">
                                <input type="time" class="form-control" value="${day.time_in || ''}" disabled>
                            </div>
                            <div class="col-5">
                                <input type="time" class="form-control" value="${day.time_out || ''}" disabled>
                            </div>
                        </div>
                    `;
                    workDaysContainer.insertAdjacentHTML('beforeend', dayHtml);
                });
            } else {
                console.warn('ไม่มีข้อมูลวันทำงานสำหรับข้อมูลนี้');
            }
            
            // Show view-only modal
            new bootstrap.Modal(document.getElementById('form_view_data')).show();
        })
        .catch(error => console.error('เกิดข้อผิดพลาดในการดึงข้อมูลสำหรับการดู:', error));
    }).catch(error => console.error('Error fetching session token:', error));
}
