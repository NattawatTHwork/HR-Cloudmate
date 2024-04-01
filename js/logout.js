function logout() {
    localStorage.clear();
    window.location.href = pathUrl + '/login.php';
}