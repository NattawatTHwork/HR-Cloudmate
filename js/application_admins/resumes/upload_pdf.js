async function uploadPDF() {
    const fileInput = document.getElementById('formFile');

    if (fileInput.files.length === 0) {
        Swal.fire({
            icon: 'warning',
            title: texts.no_file_selected,
        })
        return;
    }

    const response = await fetch('https://api.ipify.org?format=json');
    ip_address = await response.json();
    const mySession = await getSessionToken();
    const urlParams = new URLSearchParams(window.location.search);
    const user_code = urlParams.get('user_code');

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('user_code', user_code);
    formData.append('resume', file);
    formData.append('action', 'upload_resume');
    formData.append('changed_by', mySession.admin_code);
    formData.append('ip_address', ip_address['ip']);

    try {
        const response = await fetch(apiUrl + 'application/resumes/upload_resume.php', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${mySession.token}`
            },
            body: formData
        });
        const data = await response.json();
        if (data.status === 'success') {
            Swal.fire({
                icon: 'success',
                title: texts.success,
            }).then(function() {
                location.reload();
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: texts.error,
            }).then(function() {
                location.reload();
            });
        }
    } catch (error) {
        console.error('There was a problem with the update:', error);
    }
}