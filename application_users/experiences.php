<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>จัดการประสบการณ์ | CM WORKFORCE</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <?php include_once '../components/head_link.php' ?>

</head>

<body>

    <!-- ======= Header ======= -->
    <?php include_once '../components/header_applicantion_users.php' ?>

    <!-- ======= Sidebar ======= -->
    <?php include_once '../components/sidebar_application_users.php' ?>

    <main id="main" class="main">

        <div class="pagetitle">
            <h1><?= $texts['manage_experience'] ?></h1>
        </div><!-- End Page Title -->

        <div class="d-sm-flex justify-content-end mb-2 row">
            <div class="col-sm-12 col-md-4">
                <button type="button" class="btn btn-primary w-100 btn-block" data-bs-toggle="modal" data-bs-target="#form_create_data">
                    <?= $texts['add_data'] ?>
                </button>
            </div>
        </div>

        <section class="section">
            <div class="row align-items-top" id="cardContainer">

            </div>
        </section>

        <!-- Modal -->
        <div class="modal fade" id="form_create_data" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form id="create_data_form">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"><?= $texts['add_data'] ?></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['company_name'] ?></label>
                                <input type="text" class="form-control" name="company_name" id="company_name_create" placeholder="<?= $texts['company_name'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['position'] ?></label>
                                <input type="text" class="form-control" name="position" id="position_create" placeholder="<?= $texts['position'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['job_category'] ?></label>
                                <select class="form-control" name="job_category_code" id="job_category_code_dropdown_create" placeholder="<?= $texts['job_category'] ?>" required>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['status'] ?></label>
                                <select class="form-control" name="statusflag" id="statusflag_create" required>
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

        <div class="modal fade" id="form_update_data" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form id="update_data_form">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"><?= $texts['edit_data'] ?></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="hidden" name="experience_code" id="experience_code_update" required>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['company_name'] ?></label>
                                <input type="text" class="form-control" name="company_name" id="company_name_update" placeholder="<?= $texts['company_name'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['position'] ?></label>
                                <input type="text" class="form-control" name="position" id="position_update" placeholder="<?= $texts['position'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['job_category'] ?></label>
                                <select class="form-control" name="job_category_code" id="job_category_code_dropdown_update" placeholder="<?= $texts['job_category'] ?>" required>
                                </select>
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
    <script src="../js/check_login_application_users.js"></script>
    <script src="../js/logout_application_users.js"></script>
    <script src="../js/token.js"></script>
    <script src="../js/application_users/users/get_user_header.js"></script>
    <script src="../js/application_users/experiences/get_job_category_all.js"></script>
    <script src="../js/application_users/experiences/get_experience_user.js"></script>
    <script src="../js/application_users/experiences/create_experience.js"></script>
    <script src="../js/application_users/experiences/update_experience.js"></script>
    <script src="../js/application_users/experiences/delete_experience.js"></script>
</body>

</html>