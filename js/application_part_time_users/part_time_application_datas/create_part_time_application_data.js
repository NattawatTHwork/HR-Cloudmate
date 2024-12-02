// Enable experience_other_text input when experience_other is checked
document.getElementById('experience_other').addEventListener('change', function () {
    document.getElementById('experience_other_text').disabled = !this.checked;
});

document.getElementById('createDataForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const buttonCreate = document.getElementById('button_create');
    buttonCreate.disabled = true;

    getSessionToken().then(mySession => {
        if (!mySession.token || !mySession.role === 'applicant_part_time') {
            console.error("Session token not found");
            return;
        }

        let selectedValues = [];
        document.querySelectorAll('.work-experience:checked').forEach(checkbox => {
            if (checkbox.value !== 'other') {
                selectedValues.push(checkbox.value);
            }
        });

        const experienceOtherCheckbox = document.getElementById('experience_other');
        const experienceOtherText = document.getElementById('experience_other_text');
        if (experienceOtherCheckbox.checked && experienceOtherText.value.trim() !== '') {
            selectedValues.push(experienceOtherText.value.trim());
        }

        document.getElementById('work_experience').value = selectedValues.join(',');

        const formData = {
            part_time_user_code: document.getElementById('part_time_user_code').value,
            fullname: document.getElementById('firstnamelastname').value,
            age: document.getElementById('age').value,
            gender: document.querySelector('input[name="gender"]:checked').value,
            marital_status: document.querySelector('input[name="marital_status"]:checked').value,
            work_experience: document.getElementById('work_experience').value,
            phone_number: document.getElementById('phone_number').value,
            line_id: document.getElementById('line_id').value,
            facebook: document.getElementById('facebook').value,
            email: document.getElementById('email').value,
            children_count: document.getElementById('children_count').value,
            expect_salary: document.getElementById('expect_salary').value,
            work_days: []
        };

        const dayOfWeekElems = document.getElementsByName('day_of_week[]');
        const timeInElems = document.getElementsByName('time_in[]');
        const timeOutElems = document.getElementsByName('time_out[]');

        for (let i = 0; i < dayOfWeekElems.length; i++) {
            formData.work_days.push({
                day_of_week: dayOfWeekElems[i].value,
                time_in: timeInElems[i].value || null,
                time_out: timeOutElems[i].value || null
            });
        }

        fetch(apiUrl + 'application/part_time_users/create_part_time_data.php', {
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
                    }).then(function () {
                        location.reload();
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: texts.error,
                    }).then(function () {
                        location.reload();
                    });
                }
            })
            .catch(error => {
                console.error('There was a problem with the update:', error);
            })
            .finally(() => {
                buttonCreate.disabled = false;
            });
    }).catch(error => console.error('Error fetching session token:', error));
});
