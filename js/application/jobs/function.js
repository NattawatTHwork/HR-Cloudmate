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