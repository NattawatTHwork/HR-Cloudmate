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
    <?php include_once '../components/header_applicantion_users.php' ?>

    <!-- ======= Sidebar ======= -->
    <?php include_once '../components/sidebar_application_users.php' ?>

    <main id="main" class="main">

        <div class="pagetitle">
            <h1>จัดการประวัติการศึกษา</h1>
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
                                <label for="formGroupExampleInput">ระดับการศึกษา</label>
                                <select class="form-control" name="level" id="level" required>
                                    <option value="1" selected>มัฐยมศึกษาปีที่ 3</option>
                                    <option value="2">มัฐยมศึกษาปีที่ 6</option>
                                    <option value="3">ประกาศนียบัตรวิชาชีพ</option>
                                    <option value="4">ประกาศนียบัตรวิชาชีพชั้นสูง</option>
                                    <option value="5">ปริญญาตรี</option>
                                    <option value="6">ปริญญาโท</option>
                                    <option value="7">ปริญญาเอก</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">สถานศึกษา</label>
                                <input type="text" class="form-control" name="school" id="school" placeholder="สถานศึกษา" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">คณะ</label>
                                <input type="text" class="form-control" name="faculty" id="faculty" placeholder="คณะ" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">สาขา</label>
                                <input type="text" class="form-control" name="major" id="major" placeholder="สาขา" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ปีที่สำเร็จการศึกษา</label>
                                <input type="text" class="form-control" name="graduation_year" id="graduation_year" placeholder="ปีที่สำเร็จการศึกษา" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">GPA</label>
                                <input type="text" class="form-control" name="gpa" id="gpa" placeholder="GPA" required>
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
                            <input type="hidden" name="education_code" id="education_code_update" required>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ระดับการศึกษา</label>
                                <select class="form-control" name="level" id="level_update" required>
                                    <option value="1" selected>มัฐยมศึกษาปีที่ 3</option>
                                    <option value="2">มัฐยมศึกษาปีที่ 6</option>
                                    <option value="3">ประกาศนียบัตรวิชาชีพ</option>
                                    <option value="4">ประกาศนียบัตรวิชาชีพชั้นสูง</option>
                                    <option value="5">ปริญญาตรี</option>
                                    <option value="6">ปริญญาโท</option>
                                    <option value="7">ปริญญาเอก</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">สถานศึกษา</label>
                                <input type="text" class="form-control" name="school" id="school_update" placeholder="สถานศึกษา" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">คณะ</label>
                                <input type="text" class="form-control" name="faculty" id="faculty_update" placeholder="คณะ" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">สาขา</label>
                                <input type="text" class="form-control" name="major" id="major_update" placeholder="สาขา" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ปีที่สำเร็จการศึกษา</label>
                                <input type="text" class="form-control" name="graduation_year" id="graduation_year_update" placeholder="ปีที่สำเร็จการศึกษา" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">GPA</label>
                                <input type="text" class="form-control" name="gpa" id="gpa_update" placeholder="GPA" required>
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
    <script src="../js/application_users/educations/get_education_user.js"></script>
    <script src="../js/application_users/educations/create_education.js"></script>
    <script src="../js/application_users/educations/update_education.js"></script>
    <script src="../js/application_users/educations/delete_education.js"></script>
</body>

</html>