<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>เปลี่ยนรหัสผ่าน | CM WORKFORCE</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <?php include_once '../components/head_link.php' ?>

</head>

<body>

    <!-- ======= Header ======= -->
    <?php include_once '../components/header_application_admins.php' ?>

    <!-- ======= Sidebar ======= -->
    <?php include_once '../components/sidebar_application_admins.php' ?>

    <main id="main" class="main">

        <div class="pagetitle">
            <h1><?= $texts['change_password'] ?></h1>
        </div><!-- End Page Title -->

        <section class="section">
            <div class="row">
                <div class="col-12">

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"></h5>

                            <!-- General Form Elements -->
                            <form id="change_password_data_form">
                                <input type="hidden" name="action" value="change_password">
                                <input type="hidden" name="ip_address" value="<?= $_SERVER['REMOTE_ADDR'] ?>">
                                <div class="row mb-3">
                                    <label for="old_password" class="col-sm-2 col-form-label"><?= $texts['old_password'] ?></label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control" name="old_password">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="new_password" class="col-sm-2 col-form-label"><?= $texts['new_password'] ?></label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control" name="new_password">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="repeat_new_password" class="col-sm-2 col-form-label"><?= $texts['confirm_password'] ?></label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control" name="repeat_new_password">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-primary" id="button_change_password"><?= $texts['confirm_change_password'] ?></button>
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
    <script src="../js/check_login_application_admins.js"></script>
    <script src="../js/logout_application_admins.js"></script>
    <script src="../js/application_admins/admins/get_admin_header.js"></script>
    <script src="../js/application_admins/admins/change_password.js"></script>
</body>

</html>