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
            <h1>จัดการประวัติการศึกษา <?= $_GET['fullname'] ?></h1>
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
                                    <option value="t" selected>เปิดใช้งาน</option>
                                    <option value="f">ปิดใช้งาน</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>
                            <button type="submit" class="btn btn-warning">บันทึก</button>
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