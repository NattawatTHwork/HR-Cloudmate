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
                                <select class="form-control" name="employment_type" id="employment_type_update" placeholder="<?= $texts['employment_type'] ?>" required>
                                    <option value="1" selected>Full Time</option>
                                    <option value="2">Freelance</option>
                                    <option value="3">Part Time</option>
                                    <option value="4">Tainee</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['work_day'] ?></label>
                                <input type="text" class="form-control" name="work_day" id="work_day_update" placeholder="<?= $texts['work_day'] ?>" required>
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
                                <input type="text" class="form-control" name="work_location" id="work_location_update" placeholder="<?= $texts['work_location'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['salary'] ?></label>
                                <input type="text" class="form-control" name="salary" id="salary_update" placeholder="<?= $texts['salary'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['description'] ?></label>
                                <textarea class="form-control" name="description" id="description_update" placeholder="<?= $texts['description'] ?>" required></textarea>
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
    <script src="../js/application/jobs/get_job_category_all.js"></script>
    <script src="../js/application/jobs/get_job_employer.js"></script>
    <script src="../js/application/jobs/update_job.js"></script>
    <script src="../js/application/jobs/delete_job.js"></script>
</body>

</html>