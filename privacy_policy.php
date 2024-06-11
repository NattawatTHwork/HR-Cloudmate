<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>นโยบายความเป็นส่วนตัว</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <?php include_once 'components/head_link.php' ?>
</head>

<body>

    <main>
        <div class="container">
            <div class="d-flex justify-content-end">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown pe-3">
                        <a id="languageDropdown" class="nav-link d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <?= $_SESSION['language'] == 'th' ? 'ไทย' : 'English' ?>
                            <i class="bi bi-chevron-down ms-1"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown" style="list-style-type: none;">
                            <li><a id="lang-th" class="dropdown-item" href="#">ไทย</a></li>
                            <li><a id="lang-en" class="dropdown-item" href="#">English</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <section class="section error-404 d-flex flex-column align-items-center justify-content-center">
                <div class="card">
                    <div class="card-body p-4">
                        <h2 style="font-size:xx-large"><?= $texts['privacy_policy_head'] ?></h2>
                        <p><?= $texts['policy_data'] ?></p>
                        <p class="card-text text-center"><?= $texts['question'] ?></p>
                        <p class="card-text text-center">
                            <strong>Facebook :</strong>
                            <a href="https://www.facebook.com/profile.php?id=61559911192106" target="_blank">
                                CM MeJobs
                            </a>
                            <strong>| Line :</strong>
                            <a href="https://line.me/R/ti/p/@160xfahn?ts=05161601&oat_content=url" target="_blank">
                                CM MeJobs
                            </a>
                        </p>
                    </div>
                </div>
            </section>

        </div>
    </main><!-- End #main -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files -->
    <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/chart.js/chart.umd.js"></script>
    <script src="assets/vendor/echarts/echarts.min.js"></script>
    <script src="assets/vendor/quill/quill.min.js"></script>
    <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
    <script src="assets/vendor/tinymce/tinymce.min.js"></script>
    <script src="assets/vendor/php-email-form/validate.js"></script>

    <!-- Template Main JS File -->
    <script src="assets/js/main.js"></script>
    <script src="js/language.js"></script>

</body>

</html>