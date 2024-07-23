<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>จัดการงานที่รับสมัคร | CM WORKFORCE</title>
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
            <h1><?= $texts['manage_job'] ?></h1>
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
                            <input type="hidden" name="job_code" id="job_code_update" required>
                            <input type="hidden" name="action" value="update">
                            <input type="hidden" name="ip_address" value="<?= $_SERVER['REMOTE_ADDR'] ?>">
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
                                <label for="formGroupExampleInput"><?= $texts['employment_type'] ?></label>
                                <select class="form-control" name="employment_type" id="employment_type_code_dropdown_update" required>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['work_day'] ?></label>
                                <div>
                                    <label><input type="checkbox" name="work_day_update" value="1"> <?= $texts['sunday'] ?></label>
                                    <label><input type="checkbox" name="work_day_update" value="2"> <?= $texts['monday'] ?></label>
                                    <label><input type="checkbox" name="work_day_update" value="3"> <?= $texts['tuesday'] ?></label>
                                    <label><input type="checkbox" name="work_day_update" value="4"> <?= $texts['wednesday'] ?></label>
                                    <label><input type="checkbox" name="work_day_update" value="5"> <?= $texts['thursday'] ?></label>
                                    <label><input type="checkbox" name="work_day_update" value="6"> <?= $texts['friday'] ?></label>
                                    <label><input type="checkbox" name="work_day_update" value="7"> <?= $texts['saturday'] ?></label>
                                </div>
                                <input type="hidden" id="work_day_update_hidden" name="work_day">
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['time_in'] ?></label>
                                <input type="time" class="form-control" name="time_in" id="time_in_update" placeholder="<?= $texts['time_in'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['time_out'] ?></label>
                                <input type="time" class="form-control" name="time_out" id="time_out_update" placeholder="<?= $texts['time_out'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['work_location'] ?></label>
                                <select class="form-control" name="work_location" id="work_location_code_dropdown_update" placeholder="<?= $texts['work_location'] ?>" required>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['salary'] ?></label>
                                <div class="input-group mb-3">
                                    <div class="input-group-text">
                                        <input class="form-check-input me-2" type="checkbox" name="agreed" id="agreed_update" onchange="toggleSalaryInputUpdate()">
                                        <label class="form-check-label" for="agreed_update">ตามตกลง</label>
                                    </div>
                                    <input type="text" class="form-control" name="salary" id="salary_update" placeholder="<?= $texts['salary'] ?>" required pattern="^\d+(\.\d{1,2})?$">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['description'] ?></label>
                                <textarea class="form-control" name="description" id="description_update" placeholder="<?= $texts['description'] ?>"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['other_type'] ?></label>
                                <div id="other_type_update"></div>
                                <input type="hidden" id="other_type_update_hidden" name="other_type">
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['status'] ?></label>
                                <select class="form-control" name="statusflag" id="statusflag_update" required>
                                    <option value="2"><?= $texts['on_hold'] ?></option>
                                    <option value="3"><?= $texts['disable'] ?></option>
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
    <script src="../js/check_login.js"></script>
    <script src="../js/logout.js"></script>
    <script src="../js/token.js"></script>
    <script src="../js/user_administration/users/get_header.js"></script>
    <script src="../js/application/jobs/function.js"></script>
    <script src="../js/application/jobs/get_job_category_all.js"></script>
    <script src="../js/application/jobs/get_work_location_all.js"></script>
    <script src="../js/application/jobs/get_employment_type_all.js"></script>
    <script src="../js/application/jobs/get_other_type_all.js"></script>
    <script src="../js/application/jobs/package_amount.js"></script>
    <script src="../js/application/jobs/get_job_employer.js"></script>
    <script src="../js/application/jobs/update_job.js"></script>
    <script src="../js/application/jobs/delete_job.js"></script>
</body>

</html>