<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>เข้าสู่ระบบผู้ดูแลระบบ | CM WORKFORCE</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <?php include_once '../components/head_link.php' ?>

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

            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                            <div class="d-flex justify-content-center py-4">
                                <a href="index.html" class="logo d-flex align-items-center w-auto">
                                    <img src="<?= $path ?>/assets/img/logo_cloudmate.jpg" alt="">
                                    <span class="d-none d-lg-block">CM WORKFORCE</span>
                                </a>
                            </div><!-- End Logo -->

                            <div class="card mb-3">

                                <div class="card-body">

                                    <div class="pt-4 pb-2">
                                        <h5 class="card-title text-center pb-0 fs-4"><?= $texts['admin_login'] ?></h5>
                                    </div>

                                    <form class="row g-3 needs-validation" novalidate method="POST" action="">
                                        <input type="hidden" name="ip_address" value="<?= $_SERVER['REMOTE_ADDR'] ?>">

                                        <div class="col-12">
                                            <label for="yourEmail" class="form-label"><?= $texts['email'] ?></label>
                                            <div class="input-group has-validation">
                                                <!-- <span class="input-group-text" id="inputGroupPrepend">@</span> -->
                                                <input type="email" name="email" class="form-control" id="yourEmail" required>
                                                <div class="invalid-feedback"><?= $texts['enter_email'] ?></div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourPassword" class="form-label"><?= $texts['password'] ?></label>
                                            <input type="password" name="admin_password" class="form-control" id="yourPassword" required>
                                            <div class="invalid-feedback"><?= $texts['enter_password'] ?></div>
                                        </div>

                                        <!-- <div class="col-12">
                                            <p class="small mb-0"><a href="forget_password.php"><?= $texts['forget_password'] ?></a></p>
                                        </div> -->
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100" type="submit" id="button_login"><?= $texts['login'] ?></button>
                                        </div>
                                        <!-- <div class="col-12">
                                            <p class="small mb-0"><?= $texts['not_account'] ?> <a href="register.php"><?= $texts['create_account'] ?></a></p>
                                        </div> -->
                                    </form>

                                </div>
                            </div>

                            <div class="credits">
                                <!-- All the links in the footer should remain intact. -->
                                <!-- You can delete the links only if you purchased the pro version. -->
                                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
                                <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> -->
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </div>
    </main><!-- End #main -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files -->
    <script src="<?= $path ?>/assets/vendor/apexcharts/apexcharts.min.js"></script>
    <script src="<?= $path ?>/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="<?= $path ?>/assets/vendor/chart.js/chart.umd.js"></script>
    <script src="<?= $path ?>/assets/vendor/echarts/echarts.min.js"></script>
    <script src="<?= $path ?>/assets/vendor/quill/quill.min.js"></script>
    <script src="<?= $path ?>/assets/vendor/simple-datatables/simple-datatables.js"></script>
    <script src="<?= $path ?>/assets/vendor/tinymce/tinymce.min.js"></script>
    <script src="<?= $path ?>/assets/vendor/php-email-form/validate.js"></script>

    <!-- Template Main JS File -->
    <script src="<?= $path ?>/assets/js/main.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="../js/api_url.js"></script>
    <script src="../js/get_session_token.js"></script>
    <script src="../js/application_admins/admins/login_admin.js"></script>
    <script src="../js/language.js"></script>

</body>

</html>