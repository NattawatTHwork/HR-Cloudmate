<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>ข้อมูลส่วนตัว | CM WORKFORCE</title>
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
            <h1>ข้อมูลส่วนตัว</h1>
        </div><!-- End Page Title -->

        <section class="section">
            <div class="row">
                <div class="col-12">

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"></h5>

                            <!-- General Form Elements -->
                            <form id="update_profile_data_form">
                                <input type="hidden" class="form-control" name="user_code" id="user_code" disabled>
                                <div class="row mb-3">
                                    <label for="firstname" class="col-sm-2 col-form-label">ชื่อ</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="firstname" id="firstname" disabled>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="lastname" class="col-sm-2 col-form-label">นามสกุล</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="lastname" id="lastname" disabled>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="gender" class="col-sm-2 col-form-label">เพศ</label>
                                    <div class="col-sm-10">
                                        <select class="form-control" name="gender" id="gender" disabled>
                                            <option value="1">ชาย</option>
                                            <option value="2">หญิง</option>
                                            <option value="3">อื่นๆ</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="birthday" class="col-sm-2 col-form-label">วันเกิด</label>
                                    <div class="col-sm-10">
                                        <input type="date" class="form-control" name="birthday" id="birthday" disabled>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="phone_number" class="col-sm-2 col-form-label">เบอร์โทร</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="phone_number" id="phone_number" disabled>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="user_address" class="col-sm-2 col-form-label">ที่อยู่</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="user_address" id="user_address" disabled>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="sub_district" class="col-sm-2 col-form-label">ตำบล</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="sub_district" id="sub_district" disabled>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="district" class="col-sm-2 col-form-label">อำเภอ</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="district" id="district" disabled>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="province" class="col-sm-2 col-form-label">จังหวัด</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="province" id="province" disabled>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="zip_code" class="col-sm-2 col-form-label">รหัสไปรษณีย์</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" name="zip_code" id="zip_code" disabled>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="text-center">
                                        <a type="button" class="btn btn-primary" href="<?= $path ?>/application_users/update_profile.php">แก้ไขข้อมูลส่วนตัว</a>
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
    <script src="../js/check_login_application_users.js"></script>
    <script src="../js/logout_application_users.js"></script>
    <script src="../js/token.js"></script>
    <script src="../js/api_url.js"></script>
    <script src="../js/application_users/users/update_profile.js"></script>
</body>

</html>