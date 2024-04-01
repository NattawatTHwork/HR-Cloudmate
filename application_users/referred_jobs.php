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
    <?php include_once '../components/header.php' ?>

    <!-- ======= Sidebar ======= -->
    <?php include_once '../components/sidebar_application_users.php' ?>

    <main id="main" class="main">

        <div class="pagetitle">
            <h1>จัดการงานที่ต้องการ</h1>
        </div><!-- End Page Title -->

        <div class="d-sm-flex justify-content-end mb-2 row">
            <div class="col-sm-12 col-md-4">
                <button type="button" class="btn btn-primary w-100 btn-block" data-bs-toggle="modal" data-bs-target="#form_create_data">
                    เพิ่มข้อมูล
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
                            <h5 class="modal-title" id="exampleModalLabel">เพิ่มข้อมูล</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="formGroupExampleInput">ตำแหน่ง</label>
                                <input type="text" class="form-control" name="position" id="position" placeholder="ตำแหน่ง" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ประเภทงาน</label>
                                <select class="form-control" name="job_category_code" id="job_category_code_dropdown_create" required>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ประเภทการจ้างงาน</label>
                                <select class="form-control" name="employment_type" id="employment_type" required>
                                    <option value="1" selected>Full Time</option>
                                    <option value="2">Freelance</option>
                                    <option value="3">Part Time</option>
                                    <option value="4">Tainee</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">เงินเดือน</label>
                                <input type="text" class="form-control" name="expect_salary" id="expect_salary" placeholder="สกุล" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">สถานที่ทำงาน</label>
                                <input type="text" class="form-control" name="work_location" id="work_location" placeholder="สถานที่ทำงาน" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">สถานะ</label>
                                <select class="form-control" name="statusflag" id="statusflag" required>
                                    <option value="t" selected>true</option>
                                    <option value="f">false</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>
                            <button type="submit" class="btn btn-primary">บันทึก</button>
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
                            <h5 class="modal-title" id="exampleModalLabel">แก้ไขข้อมูล</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="hidden" name="referred_job_code" id="referred_job_code_update" required>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ตำแหน่ง</label>
                                <input type="text" class="form-control" name="position" id="position_update" placeholder="ตำแหน่ง" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ประเภทงาน</label>
                                <select class="form-control" name="job_category_code" id="job_category_code_dropdown_update" required>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ประเภทการจ้างงาน</label>
                                <select class="form-control" name="employment_type" id="employment_type_update" required>
                                    <option value="1" selected>Full Time</option>
                                    <option value="2">Freelance</option>
                                    <option value="3">Part Time</option>
                                    <option value="4">Tainee</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">เงินเดือน</label>
                                <input type="text" class="form-control" name="expect_salary" id="expect_salary_update" placeholder="สกุล" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">สถานที่ทำงาน</label>
                                <input type="text" class="form-control" name="work_location" id="work_location_update" placeholder="สถานที่ทำงาน" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">สถานะ</label>
                                <select class="form-control" name="statusflag" id="statusflag_update" required>
                                    <option value="t" selected>true</option>
                                    <option value="f">false</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>
                            <button type="submit" class="btn btn-primary">บันทึก</button>
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
    <script src="../js/api_url.js"></script>
    <script src="../js/application_users/referred_jobs/get_job_category_all.js"></script>
    <script src="../js/application_users/referred_jobs/get_referred_job_user.js"></script>
    <script src="../js/application_users/referred_jobs/create_referred_job.js"></script>
    <script src="../js/application_users/referred_jobs/update_referred_job.js"></script>
    <script src="../js/application_users/referred_jobs/delete_referred_job.js"></script>
</body>

</html>