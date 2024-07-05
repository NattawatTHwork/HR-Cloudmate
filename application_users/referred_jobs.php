<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>จัดการงานที่ต้องการ | CM WORKFORCE</title>
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

        <div class="pagetitle d-flex justify-content-start align-items-center">
            <h1 class="me-4"><?= $texts['manage_referred_job'] ?></h1>
            <a type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="<?= $texts['i_referred_jobs_applicant'] ?>">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
            </a>
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
                            <input type="hidden" name="action" value="create">
                            <input type="hidden" name="ip_address" value="<?= $_SERVER['REMOTE_ADDR'] ?>">
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['position'] ?></label>
                                <input type="text" class="form-control" name="position" id="position" placeholder="<?= $texts['position'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['job_category'] ?></label>
                                <select class="form-control" name="job_category_code" id="job_category_code_dropdown_create" required>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['employment_type'] ?></label>
                                <select class="form-control" name="employment_type" id="employment_type" required>
                                    <option value="1" selected>Full Time</option>
                                    <option value="2">Freelance</option>
                                    <option value="3">Part Time</option>
                                    <option value="4">Tainee</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['expect_salary'] ?></label>
                                <input type="text" class="form-control" name="expect_salary" id="expect_salary" placeholder="<?= $texts['expect_salary'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['work_location'] ?></label>
                                <select class="form-control" name="work_location" id="work_location_code_dropdown_create" placeholder="<?= $texts['work_location'] ?>" required>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['status'] ?></label>
                                <select class="form-control" name="statusflag" id="statusflag" required>
                                    <option value="t" selected><?= $texts['enable'] ?></option>
                                    <option value="f"><?= $texts['disable'] ?></option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><?= $texts['cancel'] ?></button>
                            <button type="submit" class="btn btn-primary" id="button_create"><?= $texts['save'] ?></button>
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
                            <input type="hidden" name="referred_job_code" id="referred_job_code_update" required>
                            <input type="hidden" name="action" value="update">
                            <input type="hidden" name="ip_address" value="<?= $_SERVER['REMOTE_ADDR'] ?>">
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['position'] ?></label>
                                <input type="text" class="form-control" name="position" id="position_update" placeholder="<?= $texts['position'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['job_category'] ?></label>
                                <select class="form-control" name="job_category_code" id="job_category_code_dropdown_update" required>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['employment_type'] ?></label>
                                <select class="form-control" name="employment_type" id="employment_type_update" required>
                                    <option value="1" selected>Full Time</option>
                                    <option value="2">Freelance</option>
                                    <option value="3">Part Time</option>
                                    <option value="4">Tainee</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['expect_salary'] ?></label>
                                <input type="text" class="form-control" name="expect_salary" id="expect_salary_update" placeholder="<?= $texts['expect_salary'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['work_location'] ?></label>
                                <select class="form-control" name="work_location" id="work_location_code_dropdown_update" placeholder="<?= $texts['work_location'] ?>" required>
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
                            <button type="submit" class="btn btn-primary" id="button_update"><?= $texts['save'] ?></button>
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
    <script src="../js/application_users/referred_jobs/function.js"></script>
    <script src="../js/application_users/referred_jobs/get_job_category_all.js"></script>
    <script src="../js/application_users/referred_jobs/get_work_location_all.js"></script>
    <script src="../js/application_users/referred_jobs/get_referred_job_user.js"></script>
    <script src="../js/application_users/referred_jobs/create_referred_job.js"></script>
    <script src="../js/application_users/referred_jobs/update_referred_job.js"></script>
    <script src="../js/application_users/referred_jobs/delete_referred_job.js"></script>
</body>

</html>