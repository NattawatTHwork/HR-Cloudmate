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