document.addEventListener('DOMContentLoaded', function () {
    var token = localStorage.getItem('token');
    var role = localStorage.getItem('role');
    if (!token || role != 'applicant') {
        localStorage.clear();
        window.location.href = '/HR-Cloudmate/application/users/login.php';
    }
});
