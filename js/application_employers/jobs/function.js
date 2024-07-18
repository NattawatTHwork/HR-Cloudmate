function toggleSalaryInputCreate() {
    var salaryInputCreate = document.getElementById('salary_create');
    var checkbox = document.getElementById('agreed_create');
    
    if (checkbox.checked) {
        salaryInputCreate.disabled = true;
    } else {
        salaryInputCreate.disabled = false;
    }
}

document.getElementById('salary_create').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9.]/g, '');
    if (/^0\d/.test(this.value)) {
        this.value = '';
    }
});


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

document.querySelectorAll('input[name="work_day_create"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        var selectedDays = [];
        document.querySelectorAll('input[name="work_day_create"]:checked').forEach(function (checkedBox) {
            selectedDays.push(checkedBox.value);
        });
        document.getElementById('work_day_create_hidden').value = selectedDays.join(',');
    });
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