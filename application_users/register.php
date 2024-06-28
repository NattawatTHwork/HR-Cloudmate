<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>ลงทะเบียนผู้สมัครงาน | CM WORKFORCE</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <?php include_once '../components/head_link.php' ?>

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
                                        <h5 class="card-title text-center pb-0 fs-4"><?= $texts['applicant_register'] ?></h5>
                                    </div>

                                    <!-- <form class="row g-3 needs-validation" novalidate method="POST" action=""> -->
                                    <form class="row g-3" method="POST" action="">
                                        <input type="hidden" name="action" value="create">
                                        <input type="hidden" name="ip_address" value="<?= $_SERVER['REMOTE_ADDR'] ?>">
                                        <div class="col-12">
                                            <label for="yourEmail" class="form-label"><?= $texts['email'] ?></label>
                                            <input type="email" name="email" class="form-control" id="yourEmail" required>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourPassword" class="form-label"><?= $texts['password'] ?></label>
                                            <input type="password" name="user_password" class="form-control" id="yourPassword" required>
                                            <div id="alertpassword" style="display: none; color: red;"><?= $texts['more_6'] ?></div>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourRepeatPassword" class="form-label"><?= $texts['confirm_password'] ?></label>
                                            <input type="password" name="user_repeat_password" class="form-control" id="yourRepeatPassword" required>
                                            <div id="alertrepeatpassword" style="display: none; color: red;"><?= $texts['not_match'] ?></div>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourFirstname" class="form-label"><?= $texts['firstname'] ?></label>
                                            <input type="text" name="firstname" class="form-control" id="yourFirstname" required>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourLastname" class="form-label"><?= $texts['lastname'] ?></label>
                                            <input type="text" name="lastname" class="form-control" id="yourLastname" required>
                                        </div>

                                        <div class="col-12">
                                            <label for="genderSelect" class="form-label"><?= $texts['gender'] ?></label>
                                            <select class="form-select" id="genderSelect" name="gender" required>
                                                <option value=""><?= $texts['select'] ?></option>
                                                <option value="1"><?= $texts['male'] ?></option>
                                                <option value="2"><?= $texts['female'] ?></option>
                                                <option value="3"><?= $texts['other'] ?></option>
                                            </select>
                                        </div>

                                        <div class="col-12">
                                            <label for="birthdayInput" class="form-label"><?= $texts['birthday'] ?></label>
                                            <input type="date" name="birthday" class="form-control" id="birthdayInput" required>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourPhoneNumber" class="form-label"><?= $texts['tel'] ?></label>
                                            <input type="text" name="phone_number" class="form-control" id="yourPhoneNumber" required>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourAddress" class="form-label"><?= $texts['address'] ?></label>
                                            <input type="text" name="user_address" class="form-control" id="yourAddress" required>
                                        </div>
                                        <div class="col-12">
                                            <label for="yourSubDistrict" class="form-label"><?= $texts['sub_district'] ?></label>
                                            <input type="text" name="sub_district" class="form-control" id="yourSubDistrict" required>
                                        </div>
                                        <div class="col-12">
                                            <label for="yourDistrict" class="form-label"><?= $texts['district'] ?></label>
                                            <input type="text" name="district" class="form-control" id="yourDistrict" required>
                                        </div>
                                        <div class="col-12">
                                            <label for="yourProvince" class="form-label"><?= $texts['province'] ?></label>
                                            <input type="text" name="province" class="form-control" id="yourProvince" required>
                                        </div>
                                        <div class="col-12">
                                            <label for="yourZipCode" class="form-label"><?= $texts['zip_code'] ?></label>
                                            <input type="text" name="zip_code" class="form-control" id="yourZipCode" required>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-check">
                                                <input class="form-check-input" name="pdpa" type="checkbox" value="true" id="acceptTerms" required>
                                                <label class="form-check-label" for="acceptTerms"><?= $texts['i_accept'] ?> <a href="../privacy_policy.php"><?= $texts['privacy_policy'] ?></a></label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100" type="submit" id="submitBtn" disabled><?= $texts['create_account'] ?></button>
                                        </div>
                                        <div class="col-12">
                                            <p class="small mb-0"><?= $texts['have_account'] ?> <a href="login.php"><?= $texts['login'] ?></a></p>
                                        </div>
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
    <script src="../js/token.js"></script>
    <script src="../js/api_url.js"></script>
    <script src="../js/application_users/users/create_user.js"></script>


</body>

</html>