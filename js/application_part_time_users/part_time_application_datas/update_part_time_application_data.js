// Enable update_experience_other_text input when update_experience_other is checked
document.getElementById('update_experience_other').addEventListener('change', function () {
    document.getElementById('update_experience_other_text').disabled = !this.checked;
});

// ฟังก์ชันเปิด modal สำหรับอัพเดทข้อมูล
function update_data(partTimeDataId) {
    getSessionToken().then(mySession => {
        if (!mySession.token || !mySession.role === 'applicant_part_time') {
            console.error("Session token not found");
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
                const userData = data.data; // เข้าถึงข้อมูลจาก data.data

                // เติมข้อมูลลงในฟิลด์ต่างๆ
                document.getElementById('update_part_time_data_id').value = userData.part_time_data_id;
                document.getElementById('update_firstnamelastname').value = userData.fullname;
                document.getElementById('update_age').value = userData.age;
                document.getElementById('update_children_count').value = userData.children_count;
                document.getElementById('update_phone_number').value = userData.phone_number;
                document.getElementById('update_line_id').value = userData.line_id;
                document.getElementById('update_facebook').value = userData.facebook;
                document.getElementById('update_email').value = userData.email;
                document.getElementById('update_expect_salary').value = userData.expect_salary;

                // เพศ
                document.getElementById(`update_gender_${userData.gender == 1 ? 'male' : userData.gender == 2 ? 'female' : 'other'}`).checked = true;

                // สถานะภาพปัจจุบัน
                document.getElementById(`update_marital_status_${userData.marital_status == 1 ? 'single' : userData.marital_status == 2 ? 'married' : 'divorced'}`).checked = true;

                // เติมข้อมูลประสบการณ์ทำงานในเช็คบ็อกซ์
                const selectedExperience = userData.work_experience.split(','); // แยกค่าด้วย ','

                // ทำเครื่องหมายในเช็คบ็อกซ์ที่ตรงกับประสบการณ์ที่มี
                document.querySelectorAll('.update-work-experience').forEach(checkbox => {
                    checkbox.checked = selectedExperience.includes(checkbox.value); // ทำเครื่องหมายเช็คบ็อกซ์ที่ตรงกับค่าที่เลือก
                });

                // ตรวจสอบค่า "อื่นๆ" และตั้งค่าข้อความในฟิลด์ "โปรดระบุ"
                let otherExperience = selectedExperience.find(exp => isNaN(exp)); // ค่าที่ไม่ใช่ตัวเลขถือว่าเป็น 'อื่นๆ'
                if (otherExperience) {
                    document.getElementById('update_experience_other').checked = true;
                    document.getElementById('update_experience_other_text').disabled = false;
                    document.getElementById('update_experience_other_text').value = otherExperience; // เติมค่าที่เป็นข้อความอื่นๆ ลงในช่อง
                } else {
                    document.getElementById('update_experience_other').checked = false;
                    document.getElementById('update_experience_other_text').disabled = true;
                    document.getElementById('update_experience_other_text').value = '';
                }

                // วันทำงาน
                const workDaysContainer = document.getElementById('update_workDaysContainer');
                workDaysContainer.innerHTML = ''; // เคลียร์ข้อมูลก่อน

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
                                    <input type="hidden" name="update_day_of_week[]" value="${day.day_of_week}">
                                </div>
                                <div class="col-5">
                                    <input type="time" class="form-control" name="update_time_in[]" value="${day.time_in || ''}">
                                </div>
                                <div class="col-5">
                                    <input type="time" class="form-control" name="update_time_out[]" value="${day.time_out || ''}">
                                </div>
                            </div>
                        `;
                        workDaysContainer.insertAdjacentHTML('beforeend', dayHtml);
                    });
                } else {
                    console.warn('ไม่มีข้อมูลวันทำงานสำหรับข้อมูลนี้');
                }
                
                // แสดง modal สำหรับอัพเดทข้อมูล
                new bootstrap.Modal(document.getElementById('form_update_data')).show();
            })
            .catch(error => console.error('เกิดข้อผิดพลาดในการดึงข้อมูลสำหรับอัพเดท:', error));
    }).catch(error => console.error('Error fetching session token:', error));
}

document.getElementById('updateDataForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const buttonUpdate = document.getElementById('button_update');
    buttonUpdate.disabled = true; // Disable the button

    getSessionToken().then(mySession => {
        if (!mySession.token || !mySession.role === 'applicant_part_time') {
            console.error("Session token not found");
            return;
        }

        const formData = {
            part_time_data_id: document.getElementById('update_part_time_data_id') ? document.getElementById('update_part_time_data_id').value : null,
            fullname: document.getElementById('update_firstnamelastname') ? document.getElementById('update_firstnamelastname').value : null,
            age: document.getElementById('update_age') ? document.getElementById('update_age').value : null,
            gender: document.querySelector('input[name="update_gender"]:checked') ? document.querySelector('input[name="update_gender"]:checked').value : null,
            marital_status: document.querySelector('input[name="update_marital_status"]:checked') ? document.querySelector('input[name="update_marital_status"]:checked').value : null,
            work_experience: document.getElementById('update_work_experience') ? document.getElementById('update_work_experience').value : null,
            phone_number: document.getElementById('update_phone_number') ? document.getElementById('update_phone_number').value : null,
            line_id: document.getElementById('update_line_id') ? document.getElementById('update_line_id').value : null,
            facebook: document.getElementById('update_facebook') ? document.getElementById('update_facebook').value : null,
            email: document.getElementById('update_email') ? document.getElementById('update_email').value : null,
            children_count: document.getElementById('update_children_count') ? document.getElementById('update_children_count').value : null,
            expect_salary: document.getElementById('update_expect_salary') ? document.getElementById('update_expect_salary').value : null,
            work_days: []
        };

        // Gather work days data and set null for empty time fields
        const dayOfWeekElems = document.getElementsByName('update_day_of_week[]');
        const timeInElems = document.getElementsByName('update_time_in[]');
        const timeOutElems = document.getElementsByName('update_time_out[]');

        for (let i = 0; i < dayOfWeekElems.length; i++) {
            const timeInValue = timeInElems[i].value ? timeInElems[i].value : null;
            const timeOutValue = timeOutElems[i].value ? timeOutElems[i].value : null;

            formData.work_days.push({
                day_of_week: dayOfWeekElems[i].value,
                time_in: timeInValue,
                time_out: timeOutValue
            });
        }

        // Collect checked work experience values
        const experienceList = [];
        document.querySelectorAll('.update-work-experience:checked').forEach(checkbox => {
            experienceList.push(checkbox.value);
        });

        // Add "Other" experience if checked and has value
        const otherExperience = document.getElementById('update_experience_other_text').value;
        if (document.getElementById('update_experience_other').checked && otherExperience) {
            experienceList.push(otherExperience);
        }

        // Set work experience as comma-separated string
        formData.work_experience = experienceList.join(',');

        // Send data to API
        fetch(apiUrl + 'application/part_time_users/update_part_time_data.php', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${mySession.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    Swal.fire({
                        icon: 'success',
                        title: texts.success,
                    }).then(() => location.reload());
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: texts.error,
                    }).then(() => location.reload());
                }
            })
            .catch(error => console.error('There was a problem with the update:', error))
            .finally(() => {
                buttonUpdate.disabled = false; // Re-enable the button
            });
    }).catch(error => console.error('Error fetching session token:', error));
});
