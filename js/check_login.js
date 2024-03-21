document.addEventListener('DOMContentLoaded', function() {
    var token = localStorage.getItem('token');
    if (!token) {
    // window.location.pathname = 'ERP-Cloudmate/login.php';
    window.location.href = '/HR-Cloudmate/login.php';
    }
});
