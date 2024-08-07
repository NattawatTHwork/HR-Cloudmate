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
    <?php include_once '../components/header_application_employers.php' ?>

    <!-- ======= Sidebar ======= -->
    <?php include_once '../components/sidebar_application_employers.php' ?>

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
                                <input type="hidden" class="form-control" name="employer_code" id="employer_code" required>
                                <input type="hidden" name="action" value="update">
                                <input type="hidden" name="ip_address" value="<?= $_SERVER['REMOTE_ADDR'] ?>">
                                <!-- <input type="hidden" name="changed_by"> -->
                                <div class="row mb-3">
                                    <label for="employer_name" class="col-sm-3 col-form-label"><?= $texts['company'] ?>/<?= $texts['entrepreneur'] ?></label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" name="employer_name" id="employer_name" required>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="firstname" class="col-sm-3 col-form-label"><?= $texts['firstname'] ?></label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" name="firstname" id="firstname" required>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="lastname" class="col-sm-3 col-form-label"><?= $texts['lastname'] ?></label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" name="lastname" id="lastname" required>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="phone_number" class="col-sm-3 col-form-label"><?= $texts['tel'] ?></label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" name="phone_number" id="phone_number" required>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="link_path" class="col-sm-3 col-form-label"><?= $texts['link_path'] ?></label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" name="link_path" id="link_path" required>
                                    </div>
                                </div>
                                <div class="form-floating mb-3">
                                    <img id="showpic" src="" class="rounded col-sm-12" onclick="document.getElementById('preimg').click();" style="cursor: pointer; width: 300px; display: block; margin: auto;">
                                    <input type="hidden" name="img_path" id="img_path" value="">
                                </div>
                                <div class="text-center">
                                    <input type="file" class="sr-only" id="preimg" name="preimg" accept="image/*" onchange="readURL(this);" style="display: none;">
                                </div>
                                <a onclick="$('#preimg').click();" class="m-2 mb-5 btn btn-primary d-block"><?= $texts['select_img'] ?></a>

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
    <script src="../js/check_login_application_employers.js"></script>
    <script src="../js/logout_application_employers.js"></script>
    <script src="../js/application_employers/employers/get_employer_header.js"></script>
    <script src="../js/application_employers/employers/update_profile.js"></script>
</body>

</html>