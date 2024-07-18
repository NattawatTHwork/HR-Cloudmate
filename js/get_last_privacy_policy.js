getSessionToken()
    .then(mySession => {
            fetch(apiUrl + 'application/privacy_policy/get_last_privacy_policy.php?language=' + mySession.language, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${mySession.token}`
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    show_data(data.data);
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
    })
    .catch(error => console.error('Error fetching session token:', error));

function show_data(datas) {
    $("#acceptTerms").val(datas.privacy_policy_code);
    $("#modal_privacy_policy").text(datas.privacy_policy);
}