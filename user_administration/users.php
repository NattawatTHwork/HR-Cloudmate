<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>กำหนดชื่อผู้ใช้ | CM WORKFORCE</title>
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
            <h1>กำหนดชื่อผู้ใช้</h1>
        </div><!-- End Page Title -->

        <div class="d-sm-flex justify-content-end mb-2 row">
            <div class="col-sm-12 col-md-4">
                <button type="button" class="btn btn-warning w-100 btn-block" data-bs-toggle="modal" data-bs-target="#form_create_data">
                    เพิ่มชื่อผู้ใช้
                </button>
            </div>
        </div>

        <section class="section">
            <div class="row">
                <div class="col-lg-12">

                    <div class="card">
                        <div class="card-body">

                            <!-- Table with stripped rows -->
                            <table id="datatables" class="table table-striped" style="width:100%">
                                <thead>
                                    <tr>
                                        <th>ชื่อผู้ใช้</th>
                                        <th>ชื่อ - นามสกุล</th>
                                        <th>กลุ่มผู้ใช้</th>
                                        <th>วันที่บันทึก</th>
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
                                <label for="formGroupExampleInput">ชื่อผู้ใช้</label>
                                <input type="text" class="form-control" name="username" id="username" placeholder="ชื่อผู้ใช้" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ชื่อ</label>
                                <input type="text" class="form-control" name="firstname" id="firstname" placeholder="ชื่อ" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">นามสกุล</label>
                                <input type="text" class="form-control" name="lastname" id="lastname" placeholder="นามสกุล" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">กลุ่มผู้ใช้</label>
                                <select class="form-control" name="group_id" id="group_name_dropdown_create" required>
                                </select>
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
                            <button type="submit" class="btn btn-warning">บันทึก</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

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
                                <label for="formGroupExampleInput">ชื่อผู้ใช้</label>
                                <input type="text" class="form-control" id="username_view" placeholder="ชื่อผู้ใช้" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ชื่อ</label>
                                <input type="text" class="form-control" id="firstname_view" placeholder="ชื่อ" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">นามสกุล</label>
                                <input type="text" class="form-control" id="lastname_view" placeholder="นามสกุล" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">กลุ่มผู้ใช้</label>
                                <input type="text" class="form-control" id="group_name_view" placeholder="กลุ่มผู้ใช้" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ผู้บันทึก</label>
                                <input type="text" class="form-control" id="personcode_view" placeholder="ผู้บันทึก" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">วันที่บันทึก</label>
                                <input type="text" class="form-control" id="dates_view" placeholder="วันที่บันทึก" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">สถานะ</label>
                                <input type="text" class="form-control" id="user_statusflag_view" placeholder="สถานะ" disabled>
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
                            <input type="hidden" class="form-control" name="user_id" id="user_id_update" required>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ชื่อผู้ใช้</label>
                                <input type="text" class="form-control" name="username" id="username_update" placeholder="ชื่อผู้ใช้" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ชื่อ</label>
                                <input type="text" class="form-control" name="firstname" id="firstname_update" placeholder="ชื่อ" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">นามสกุล</label>
                                <input type="text" class="form-control" name="lastname" id="lastname_update" placeholder="นามสกุล" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">กลุ่มผู้ใช้</label>
                                <select class="form-control" name="group_id" id="group_name_dropdown_update" required>
                                </select>
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
                            <button type="submit" class="btn btn-warning">บันทึก</button>
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
                            <input type="hidden" name="user_id" id="user_id_change" required>
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
    <script src="../js/user_administration/users/get_group_all.js"></script>
    <script src="../js/user_administration/users/create_user.js"></script>
    <script src="../js/user_administration/users/get_user_all.js"></script>
    <script src="../js/user_administration/users/get_user.js"></script>
    <script src="../js/user_administration/users/update_user.js"></script>
    <script src="../js/user_administration/users/change_password.js"></script>
    <script src="../js/user_administration/users/delete_user.js"></script>
</body>

</html>