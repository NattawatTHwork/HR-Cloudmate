document.addEventListener('DOMContentLoaded', function () {
    var token = localStorage.getItem('token');
    var role = localStorage.getItem('role');
    if (!token || role != 'applicant') {
        localStorage.clear();
        window.location.href = pathUrl + '/application/users/login.php';
    }
});
