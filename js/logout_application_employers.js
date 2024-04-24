function logout() {
    localStorage.clear();
    window.location.href = pathUrl + '/application_employers/login.php';
}