function view_data(event_id) {
    console.log(event_id)
    getSessionToken()
        .then(mySession => {
            if (mySession.token && mySession.role === 'member') {
                fetch(apiUrl + 'event/get_event.php?event_id=' + event_id, {
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
            } else {
                console.error('Token not found in local storage');
            }
        })
        .catch(error => console.error('Error fetching session token:', error));

    function show_data(datas) {

        $("#event_name_view").val(datas.event_name);
        $("#event_detail_view").val(datas.event_detail);
        $("#event_date_view").val(new Date(datas.event_date).toLocaleDateString(texts.format, { year: 'numeric', month: 'long', day: 'numeric' }));
        $("#event_date_to_view").val(new Date(datas.event_date_to).toLocaleDateString(texts.format, { year: 'numeric', month: 'long', day: 'numeric' }));
        $("#percent_view").val(datas.percent + '%');
        $("#status_view").val(datas.status);
        $("#view_data").modal("show");
    }
}