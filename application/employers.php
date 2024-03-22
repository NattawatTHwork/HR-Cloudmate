<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>จัดการนายจ้าง | CLOUDMATE</title>
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
            <h1>จัดการนายจ้าง</h1>
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
                                        <th>บริษัท/นายจ้าง</th>
                                        <th>ชื่อ - สกุล</th>
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
                                <label for="formGroupExampleInput">รหัสผ่าน</label>
                                <input type="text" class="form-control" id="employer_password_view" placeholder="รหัสผ่าน" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">บริษัท/นายจ้าง</label>
                                <input type="text" class="form-control" id="employer_name_view" placeholder="บริษัท/นายจ้าง" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ชื่อ - สกุล</label>
                                <input type="text" class="form-control" id="fullname_view" placeholder="ชื่อ - สกุล" disabled>
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
                            <input type="hidden" name="employer_code" id="employer_code_update" required>
                            <div class="form-group">
                                <label for="formGroupExampleInput">อีเมล</label>
                                <input type="text" class="form-control" name="email" id="email_update" placeholder="อีเมล" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">รหัสผ่าน</label>
                                <input type="text" class="form-control" name="employer_password" id="employer_password_update" placeholder="รหัสผ่าน" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">บริษัท/นายจ้าง</label>
                                <input type="text" class="form-control" name="employer_name" id="employer_name_update" placeholder="รหัสผ่าน" required>
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
                                <label for="formGroupExampleInput">เบอร์โทร</label>
                                <input type="text" class="form-control" name="phone_number" id="phone_number_update" placeholder="เบอร์โทร" required>
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
    <script src="../js/check_login.js"></script>
    <script src="../js/token.js"></script>
    <script src="../js/api_url.js"></script>
    <script src="../js/application/employers/get_employer_all.js"></script>
    <script src="../js/application/employers/get_employer.js"></script>
    <script src="../js/application/employers/update_employer.js"></script>
    <script src="../js/application/employers/delete_employer.js"></script>
</body>

</html>