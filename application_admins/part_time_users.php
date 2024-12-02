<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>จัดการผู้สมัครงาน Part Time | CM WORKFORCE</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <?php include_once '../components/head_link.php' ?>

</head>

<body>

    <!-- ======= Header ======= -->
    <?php include_once '../components/header_application_admins.php' ?>

    <!-- ======= Sidebar ======= -->
    <?php include_once '../components/sidebar_application_admins.php' ?>

    <main id="main" class="main">

        <div class="pagetitle">
            <h1>จัดการผู้สมัครงาน Part Time</h1>
        </div><!-- End Page Title -->

        <section class="section">
            <div class="row">
                <div class="col-lg-12">

                    <div class="card">
                        <div class="card-body">

                            <!-- Table with stripped rows -->
                            <table id="datatables" class="table table-striped" style="width:100%">
                                <thead>
                                    <tr>
                                        <th>อีเมล</th>
                                        <th>ชื่อ - สกุล</th>
                                        <th>เพศ</th>
                                        <th>เบอร์โทร</th>
                                        <th>สถานะ</th>
                                        <th>ตัวเลือก</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                            <!-- End Table with stripped rows -->

                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Modal -->
        <div class="modal fade" id="view_data" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">ดูข้อมูล</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="formGroupExampleInput">อีเมล</label>
                                <input type="text" class="form-control" id="email_view" placeholder="อีเมล" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ชื่อ - สกุล</label>
                                <input type="text" class="form-control" id="fullname_view" placeholder="ชื่อ - สกุล" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">เพศ</label>
                                <input type="text" class="form-control" id="gender_view" placeholder="เพศ" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">วันเกิด</label>
                                <input type="text" class="form-control" id="birthday_view" placeholder="วันเกิด" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">เบอร์โทร</label>
                                <input type="text" class="form-control" id="phone_number_view" placeholder="เบอร์โทร" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">วันที่บันทึก</label>
                                <input type="text" class="form-control" id="dates_view" placeholder="วันที่บันทึก" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">สถานะ</label>
                                <input type="text" class="form-control" id="statusflag_view" placeholder="สถานะ" disabled>
                            </div>
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
                            <input type="hidden" name="part_time_user_code" id="part_time_user_code_update" required>
                            <input type="hidden" name="action" value="update">
                            <input type="hidden" name="ip_address" value="<?= $_SERVER['REMOTE_ADDR'] ?>">
                            <div class="form-group">
                                <label for="formGroupExampleInput">อีเมล</label>
                                <input type="text" class="form-control" name="email" id="email_update" placeholder="อีเมล" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ชื่อ</label>
                                <input type="text" class="form-control" name="firstname" id="firstname_update" placeholder="ชื่อ" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">สกุล</label>
                                <input type="text" class="form-control" name="lastname" id="lastname_update" placeholder="สกุล" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">เพศ</label>
                                <select class="form-control" name="gender" id="gender_update" required>
                                    <option value="1">ชาย</option>
                                    <option value="2">หญิง</option>
                                    <option value="3">อื่นๆ</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">วันเกิด</label>
                                <input type="date" class="form-control" name="birthday" id="birthday_update" placeholder="วันเกิด" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">เบอร์โทร</label>
                                <input type="text" class="form-control" name="phone_number" id="phone_number_update" placeholder="เบอร์โทร" required>
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
                            <button type="submit" class="btn btn-primary" id="button_update">บันทึก</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal fade" id="form_change_password_data" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form id="change_password_data_form">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">เปลี่ยนรหัสผ่าน</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="hidden" name="part_time_user_code" id="part_time_user_code_change" required>
                            <input type="hidden" name="action" value="change_password">
                            <input type="hidden" name="ip_address" value="<?= $_SERVER['REMOTE_ADDR'] ?>">
                            <div class="form-group">
                                <label for="formGroupExampleInput">รหัสผ่านใหม่</label>
                                <input type="text" class="form-control" name="new_password" id="new_password_change" placeholder="รหัสผ่านใหม่" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ยืนยันรหัสผ่าน</label>
                                <input type="text" class="form-control" name="repeat_new_password" id="repeat_new_password_change" placeholder="ยืนยันรหัสผ่าน" required>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>
                            <button type="submit" class="btn btn-primary" id="button_change_password">บันทึก</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </main><!-- End #main -->

    <!-- ======= Footer ======= -->
    <?php include_once '../components/footer.php' ?>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="../js/check_login_application_admins.js"></script>
    <script src="../js/logout_application_admins.js"></script>
    <script src="../js/application_admins/admins/get_admin_header.js"></script>
    <script src="../js/application_admins/part_time_users/get_user_all.js"></script>
    <script src="../js/application_admins/part_time_users/get_user.js"></script>
    <script src="../js/application_admins/part_time_users/update_user.js"></script>
    <script src="../js/application_admins/part_time_users/change_password.js"></script>
    <script src="../js/application_admins/part_time_users/delete_user.js"></script>
</body>

</html>