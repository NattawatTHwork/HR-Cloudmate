function logout() {
    localStorage.clear();
    window.location.href = pathUrl + '/application_users/login.php';
}