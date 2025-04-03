function toggleSalaryInputUpdate() {
    var salaryInputUpdate = document.getElementById('salary_update');
    var checkbox = document.getElementById('agreed_update');
    
    if (checkbox.checked) {
        salaryInputUpdate.disabled = true;
    } else {
        salaryInputUpdate.disabled = false;
    }
}

document.getElementById('salary_update').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9.]/g, '');
    if (/^0\d/.test(this.value)) {
        this.value = '';
    }
});

document.querySelectorAll('input[name="work_day_update"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        var selectedDays = [];
        document.querySelectorAll('input[name="work_day_update"]:checked').forEach(function (checkedBox) {
            selectedDays.push(checkedBox.value);
        });
        document.getElementById('work_day_update_hidden').value = selectedDays.join(',');
    });
});

const workDayUpdateCheckboxes = document.querySelectorAll('input[name="work_day_update"]');
const workDayUpdateHidden = document.getElementById('work_day_update_hidden');
const unspecifiedUpdateCheckbox = document.getElementById('work_day_update_unspecified');

function updateWorkDayUpdateState() {
    let selectedDays = [];

    if (unspecifiedUpdateCheckbox.checked) {
        workDayUpdateCheckboxes.forEach(cb => {
            if (cb.value !== "0") {
                cb.checked = false;
                cb.disabled = true;
            }
        });
    } else {
        workDayUpdateCheckboxes.forEach(cb => {
            cb.disabled = false;
        });
    }

    workDayUpdateCheckboxes.forEach(cb => {
        if (cb.checked) selectedDays.push(cb.value);
    });

    workDayUpdateHidden.value = selectedDays.join(',');
}

workDayUpdateCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', updateWorkDayUpdateState);
});

unspecifiedUpdateCheckbox.addEventListener('change', updateWorkDayUpdateState);

// สำหรับ Update
document.getElementById('unspecified_time_update').addEventListener('change', function () {
    const timeIn = document.getElementById('time_in_update');
    const timeOut = document.getElementById('time_out_update');

    if (this.checked) {
        timeIn.value = '';
        timeOut.value = '';
        timeIn.disabled = true;
        timeOut.disabled = true;
    } else {
        timeIn.disabled = false;
        timeOut.disabled = false;
    }
});

document.getElementById('unspecified_time_update').addEventListener('change', function () {
    const timeIn = document.getElementById('time_in_update');
    const timeOut = document.getElementById('time_out_update');

    if (this.checked) {
        timeIn.value = '';
        timeOut.value = '';
        timeIn.disabled = true;
        timeOut.disabled = true;
    } else {
        timeIn.disabled = false;
        timeOut.disabled = false;
    }
});
