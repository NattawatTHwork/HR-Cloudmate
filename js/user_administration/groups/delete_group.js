function delete_data(group_id, group_name) {
    Swal.fire({
        title: group_name,
        text: texts.want_delete,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: texts.delete,
        cancelButtonText: texts.cancel
    }).then((result) => {
        if (result.isConfirmed) {
            const formData = new FormData();
            formData.append('group_id', group_id);

            fetch(apiUrl + 'user_administration/groups/delete_group.php', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    if (data.status === 'success') {
                        Swal.fire({
                            icon: 'success',
                            title: data.status.toUpperCase(),
                            text: data.message
                        })
                            .then(function () {
                                location.reload();
                            });
                    } else if (data.status === 'error') {
                        Swal.fire({
                            icon: 'error',
                            title: data.status.toUpperCase(),
                            text: data.message
                        })
                            .then(function () {
                                location.reload();
                            });
                    } else if (data.status === 'bad_request') {
                        Swal.fire({
                            icon: 'error',
                            title: data.status.toUpperCase(),
                            text: data.message
                        })
                            .then(function () {
                                location.reload();
                            });
                    } else if (data.status === 'unauthorized') {
                        Swal.fire({
                            icon: 'error',
                            title: data.status.toUpperCase(),
                            text: data.message
                        })
                            .then(function () {
                                location.reload();
                            });
                    }
                })
                .catch(error => {
                    console.error('There was a problem with the update:', error);
                });
        }
    })
}