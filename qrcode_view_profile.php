<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Dashboard - NiceAdmin Bootstrap Template</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="assets/img/favicon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="assets/css/style.css" rel="stylesheet">

    <!-- =======================================================
  * Template Name: NiceAdmin
  * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
  * Updated: Mar 17 2024 with Bootstrap v5.3.3
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>

    <main>
        <div class="container">

            <section class="section">
                <div class="d-flex justify-content-center">
                    <img src="" class="m-4" alt="User Image" id="image_data" style="max-width: 100%; height: auto;">
                </div>

                <div class="col-12">

                    <div class="card info-card customers-card">

                        <div class="card-body">
                            <h4 class="card-title" id="memfullname"></h4>

                            <div class="d-flex align-items-center">
                                <div class="ps-3">
                                    <h3 id="memfullname"></h3>
                                    <h5>อีเมล: <span id="mememail"></span></h5>
                                    <h5>เบอร์โทร: <span id="memtel"></span></h5>
                                    <h5>ตำแหน่ง: <span id="memposition"></span></h5>
                                </div>
                            </div>

                        </div>
                    </div>

                </div><!-- End Customers Card -->

            </section>

        </div>
    </main><!-- End #main -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files -->
    <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Template Main JS File -->
    <script src="assets/js/main.js"></script>


    <script src="js/api_url.js"></script>

    <script>
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('id')) {
            const id = urlParams.get('id');
            fetchData(id);
        }

        function fetchData(id) {
            fetch(apiUrl + 'personal/get_view_profile.php?id=' + id, {
                    method: 'GET',
                })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const profile = data.data;
                    document.getElementById('image_data').src = 'http://203.151.66.18:81/hr-api/img/images/' + profile.memimage; // เปลี่ยน memimage เป็น image_data
                    document.getElementById('memfullname').innerText = profile.memfullname;
                    document.getElementById('mememail').innerText = profile.mememail;
                    document.getElementById('memtel').innerText = profile.memtel;
                    document.getElementById('memposition').innerText = profile.memposition;
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        }
    </script>

</body>

</html>