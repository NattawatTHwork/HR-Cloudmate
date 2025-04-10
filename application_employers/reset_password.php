<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>ตั้งรหัสผ่านใหม่ | CM WORKFORCE</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <?php include_once '../components/head_link.php' ?>

    <?php
    if (!isset($_POST['email'])) {
        header("Location: login.php");
        exit;
    }
    ?>

</head>

<body>

    <main>
        <div class="container">

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
                                        <h5 class="card-title text-center pb-0 fs-4"><?= $texts['set_new_password'] ?></h5>
                                    </div>

                                    <form class="row g-3" method="POST" id="reset_password">

                                        <input type="hidden" name="email" class="form-control" id="email" value="<?= $_POST['email'] ?>" required>
                                        <input type="hidden" name="action" value="reset_password">
                                        <input type="hidden" name="ip_address" value="<?= $_SERVER['REMOTE_ADDR'] ?>">

                                        <div class="col-12">
                                            <label for="recovery_code" class="form-label"><?= $texts['recovery_key'] ?></label>
                                            <div class="input-group has-validation">
                                                <input type="text" name="recovery_code" class="form-control" id="recovery_code" required>
                                                <div class="invalid-feedback"><?= $texts['enter_recovery_key'] ?></div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <label for="new_password" class="form-label"><?= $texts['new_password'] ?></label>
                                            <div class="input-group has-validation">
                                                <input type="text" name="new_password" class="form-control" id="new_password" required>
                                                <div class="invalid-feedback"><?= $texts['enter_new_password'] ?></div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <label for="repeat_new_password" class="form-label"><?= $texts['confirm_password'] ?></label>
                                            <div class="input-group has-validation">
                                                <input type="text" name="repeat_new_password" class="form-control" id="repeat_new_password" required>
                                                <div class="invalid-feedback"><?= $texts['enter_confirm_password'] ?></div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <button class="btn btn-primary w-100" type="submit" id="button_reset_password"><?= $texts['confirm_change_password'] ?></button>
                                        </div>
                                    </form>

                                </div>
                            </div>

                            <div class="credits">
                                <!-- All the links in the footer should remain intact. -->
                                <!-- You can delete the links only if you purchased the pro version. -->
                                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
                                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
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
    <script src="../js/application_employers/employers/reset_password.js"></script>

</body>

</html>