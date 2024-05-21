<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>จัดการประวัติการศึกษา | CM WORKFORCE</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <?php include_once '../components/head_link.php' ?>

</head>

<body>

    <!-- ======= Header ======= -->
    <?php include_once '../components/header.php' ?>

    <!-- ======= Sidebar ======= -->
    <?php include_once '../components/sidebar.php' ?>

    <main id="main" class="main">

        <div class="pagetitle">
            <h1><?= $texts['manage_education'] ?> <?= $_GET['fullname'] ?></h1>
        </div><!-- End Page Title -->

        <section class="section">
            <div class="row align-items-top" id="cardContainer">

            </div>
        </section>

        <!-- Modal -->
        <div class="modal fade" id="form_update_data" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form id="update_data_form">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"><?= $texts['edit_data'] ?></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="hidden" name="education_code" id="education_code_update" required>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['level'] ?></label>
                                <select class="form-control" name="level" id="level_update" required>
                                    <option value="1" selected><?= $texts['m3'] ?></option>
                                    <option value="2"><?= $texts['m6'] ?></option>
                                    <option value="3"><?= $texts['vc'] ?></option>
                                    <option value="4"><?= $texts['hvc'] ?></option>
                                    <option value="5"><?= $texts['bd'] ?></option>
                                    <option value="6"><?= $texts['md'] ?></option>
                                    <option value="7"><?= $texts['dd'] ?></option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['school'] ?></label>
                                <input type="text" class="form-control" name="school" id="school_update" placeholder="<?= $texts['school'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['faculty'] ?></label>
                                <input type="text" class="form-control" name="faculty" id="faculty_update" placeholder="<?= $texts['faculty'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['major'] ?></label>
                                <input type="text" class="form-control" name="major" id="major_update" placeholder="<?= $texts['major'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['graduation_year'] ?></label>
                                <input type="text" class="form-control" name="graduation_year" id="graduation_year_update" placeholder="<?= $texts['graduation_year'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['gpa'] ?></label>
                                <input type="text" class="form-control" name="gpa" id="gpa_update" placeholder="<?= $texts['gpa'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['status'] ?></label>
                                <select class="form-control" name="statusflag" id="statusflag_update" required>
                                    <option value="t" selected><?= $texts['enable'] ?></option>
                                    <option value="f"><?= $texts['disable'] ?></option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><?= $texts['cancel'] ?></button>
                            <button type="submit" class="btn btn-primary"><?= $texts['save'] ?></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </main><!-- End #main -->

    <!-- ======= Footer ======= -->
    <?php include_once '../components/footer.php' ?>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="../js/check_login.js"></script>
    <script src="../js/logout.js"></script>
    <script src="../js/token.js"></script>
    <script src="../js/api_url.js"></script>
    <script src="../js/application/educations_user/get_education_user.js"></script>
    <script src="../js/application/educations_user/update_education.js"></script>
    <script src="../js/application/educations_user/delete_education.js"></script>
</body>

</html>