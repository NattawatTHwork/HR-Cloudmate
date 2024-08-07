document.addEventListener("DOMContentLoaded", async () => {
    const mySession = await getSessionToken();
    const response = await fetch('https://api.ipify.org?format=json');
    ip_address = await response.json();
    const urlParams = new URLSearchParams(window.location.search);
    const job_code = urlParams.get('job_code');
    fetch(apiUrl + 'application/jobs/create_job_view.php', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${mySession.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'job_code': job_code,
            'ip_address': ip_address['ip']
        })
    })
});