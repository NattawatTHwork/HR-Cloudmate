const selectEmploymentType = document.getElementById('select_employment_type');
const urlParams_employment_type = new URLSearchParams(window.location.search);

if (urlParams_employment_type.has('employment_type')) {
    const employmentType = urlParams_employment_type.get('employment_type');
    selectEmploymentType.value = employmentType;
}