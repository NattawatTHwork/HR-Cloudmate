function logout() {
    localStorage.clear();
    // window.location.pathname = 'ERP-Cloudmate/login.php';
    window.location.href = pathUrl + '/login.php';
}