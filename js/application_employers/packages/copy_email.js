function copyEmail() {
    const email = "account@cloudmate-th.com";
    navigator.clipboard.writeText(email).then(function() {
        Swal.fire({
            icon: 'success',
            title: texts.copied,
        });
    }, function(err) {
        Swal.fire({
            icon: 'error',
            title: texts.error,
        });
    });
}