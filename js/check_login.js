document.addEventListener('DOMContentLoaded', function () {
    var token = localStorage.getItem('token');
    var role = localStorage.getItem('role');
    if (!token || role != 'member') {
        localStorage.clear();
        window.location.href = pathUrl + '/login.php';
    }
});
