document.getElementById('expect_salary_update').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9.]/g, '');
    if (/^0\d/.test(this.value)) {
        this.value = '';
    }
});