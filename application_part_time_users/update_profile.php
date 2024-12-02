<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>แก้ไขข้อมูลส่วนตัว | CM WORKFORCE</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <?php include_once '../components/head_link.php' ?>

</head>

<body>

    <!-- ======= Header ======= -->
    <?php include_once '../components/header_application_part_time_users.php' ?>

    <!-- ======= Sidebar ======= -->
    <?php include_once '../components/sidebar_application_part_time_users.php' ?>

    <main id="main" class="main">

        <div class="pagetitle">
            <h1><?= $texts['edit_profile'] ?></h1>
        </div><!-- End Page Title -->

        <section class="section">
            <div class="row">
                <div class="col-12">

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"></h5>

                            <!-- General Form Elements -->
                            <form id="update_profile_data_form">
                                <input type="hidden" class="form-control" name="part_time_user_code" id="part_time_user_code" required>
                                <input type="hidden" name="action" value="update">
                                <input type="hidden" name="ip_address" value="<?= $_SERVER['REMOTE_ADDR'] ?>">
                                <div class="row mb-3">
                                    <label for="firstname" class="col-sm-2 col-form-label"><?= $texts['firstname'] ?></label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="firstname" id="firstname" required>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="lastname" class="col-sm-2 col-form-label"><?= $texts['lastname'] ?></label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="lastname" id="lastname" required>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="gender" class="col-sm-2 col-form-label"><?= $texts['gender'] ?></label>
                                    <div class="col-sm-10">
                                        <select class="form-control" name="gender" id="gender" required>
                                            <option value="1"><?= $texts['male'] ?></option>
                                            <option value="2"><?= $texts['female'] ?></option>
                                            <option value="3"><?= $texts['other'] ?></option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="birthday" class="col-sm-2 col-form-label"><?= $texts['birthday'] ?></label>
                                    <div class="col-sm-10">
                                        <input type="date" class="form-control" name="birthday" id="birthday" required>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="phone_number" class="col-sm-2 col-form-label"><?= $texts['tel'] ?></label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="phone_number" id="phone_number" required>
                                    </div>
                                </div>
                                
                                <div class="row mb-3">
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-primary" id="button_update"><?= $texts['save'] ?></button>
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
    <script src="../js/check_login_application_part_time_users.js"></script>
    <script src="../js/logout_application_part_time_users.js"></script>
    <script src="../js/application_part_time_users/part_time_users/get_user_header.js"></script>
    <script src="../js/application_part_time_users/part_time_users/update_profile.js"></script>
</body>

</html>