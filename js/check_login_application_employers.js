document.addEventListener('DOMContentLoaded', function () {
    var token = localStorage.getItem('token');
    var role = localStorage.getItem('role');
    if (!token || role != 'employer') {
        localStorage.clear();
        window.location.href = pathUrl + '/application_employers/login.php';
    }
});
