<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>ข้อมูลส่วนตัว | CM WORKFORCE</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <?php include_once '../components/head_link.php' ?>

</head>

<body>

    <!-- ======= Header ======= -->
    <?php include_once '../components/header_applicantion_employers.php' ?>

    <!-- ======= Sidebar ======= -->
    <?php include_once '../components/sidebar_application_employers.php' ?>

    <main id="main" class="main">

        <div class="pagetitle">
            <h1>ข้อมูลส่วนตัว</h1>
        </div><!-- End Page Title -->

        <section class="section">
            <div class="row">
                <div class="col-12">

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"></h5>

                            <!-- General Form Elements -->
                            <form id="update_profile_data_form">
                                <input type="hidden" class="form-control" name="employer_code" id="employer_code" disabled>
                                <div class="row mb-3">
                                    <label for="employer_name" class="col-sm-2 col-form-label">ชื่อบริษัท</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="employer_name" id="employer_name" disabled>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="firstname" class="col-sm-2 col-form-label">ชื่อ</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="firstname" id="firstname" disabled>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="lastname" class="col-sm-2 col-form-label">นามสกุล</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="lastname" id="lastname" disabled>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="phone_number" class="col-sm-2 col-form-label">เบอร์โทร</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="phone_number" id="phone_number" disabled>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="text-center">
                                        <a type="button" class="btn btn-warning" href="<?= $path ?>/application_employers/update_profile.php">แก้ไขข้อมูลส่วนตัว</a>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </section>

    </main><!-- End #main -->

    <!-- ======= Footer ======= -->
    <?php include_once '../components/footer.php' ?>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="../js/check_login_application_employers.js"></script>
    <script src="../js/logout_application_employers.js"></script>
    <script src="../js/token.js"></script>
    <script src="../js/api_url.js"></script>
    <script src="../js/application_employers/employers/update_profile.js"></script>
</body>

</html>