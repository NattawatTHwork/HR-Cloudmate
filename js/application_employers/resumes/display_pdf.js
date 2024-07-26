async function displayPDF() {
    const pdfContainer = document.getElementById('pdfContainer');
    const mySession = await getSessionToken();
    const urlParams = new URLSearchParams(window.location.search);
    const user_code = urlParams.get('user_code');

    try {
        const response = await fetch(apiUrl + 'application/resumes/get_resume.php?user_code=' + user_code, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${mySession.token}`
            },
        });

        if (response.ok) {
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);

            const pdfEmbed = document.createElement('embed');
            pdfEmbed.src = url;
            pdfEmbed.type = 'application/pdf';
            pdfEmbed.width = '100%';
            pdfEmbed.height = '600px';

            pdfContainer.innerHTML = '';
            pdfContainer.appendChild(pdfEmbed);

        } else {
            const data = await response.json();
            if (data.status === 'error') {
                pdfContainer.innerHTML = '<p>' + texts.no_file + '</p>';
            }
        }
    } catch (error) {
        console.error('There was a problem with the update:', error);
    }
}

document.addEventListener('DOMContentLoaded', displayPDF);