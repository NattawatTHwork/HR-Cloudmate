<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>จัดการผู้สมัครงาน | CM WORKFORCE</title>
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
            <h1>ข้อมูลผู้สมัครงาน Part Time <?= $_GET['fullname'] ?></h1>
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
                                        <th>รหัสข้อมูล Part Time</th>
                                        <th>ชื่อ - นามสกุล</th>
                                        <th>อายุ</th>
                                        <th>เพศ</th>
                                        <th>สถานะภาพปัจจุบัน</th>
                                        <th>จำนวนบุตร</th>
                                        <th>เงินเดือนที่ต้องการ</th>
                                        <th>ประสบการณ์ทำงาน</th>
                                        <th>อีเมล</th>
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

        <!-- Modal for Viewing Data -->
        <div class="modal fade" id="form_view_data" tabindex="-1" aria-labelledby="formViewDataLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="formViewDataLabel">ดูข้อมูลพื้นฐานสมัครงาน Part Time</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="viewDataForm">
                            <input type="hidden" id="view_part_time_data_id" name="part_time_data_id">

                            <!-- รหัสข้อมูล Part Time -->
                            <div class="mb-3">
                                <label for="view_part_time_data_code" class="form-label">รหัสข้อมูล Part Time</label>
                                <input type="text" class="form-control" id="view_part_time_data_code" name="part_time_data_code" disabled>
                            </div>

                            <!-- ชื่อ - นามสกุล -->
                            <div class="mb-3">
                                <label for="view_firstnamelastname" class="form-label">ชื่อ - นามสกุล</label>
                                <input type="text" class="form-control" id="view_firstnamelastname" name="firstnamelastname" disabled>
                            </div>

                            <!-- อายุ -->
                            <div class="mb-3">
                                <label for="view_age" class="form-label">อายุ</label>
                                <input type="number" class="form-control" id="view_age" name="age" disabled>
                            </div>

                            <!-- เพศ -->
                            <div class="mb-3">
                                <label class="form-label">เพศ</label><br>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="view_gender_male" name="view_gender" value="1" disabled>
                                    <label class="form-check-label" for="view_gender_male">ชาย</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="view_gender_female" name="view_gender" value="2" disabled>
                                    <label class="form-check-label" for="view_gender_female">หญิง</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="view_gender_other" name="view_gender" value="3" disabled>
                                    <label class="form-check-label" for="view_gender_other">อื่นๆ</label>
                                </div>
                            </div>

                            <!-- สถานะภาพปัจจุบัน -->
                            <div class="mb-3">
                                <label class="form-label">สถานะภาพปัจจุบัน</label><br>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="view_marital_status_single" name="view_marital_status" value="1" disabled>
                                    <label class="form-check-label" for="view_marital_status_single">โสด</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="view_marital_status_married" name="view_marital_status" value="2" disabled>
                                    <label class="form-check-label" for="view_marital_status_married">สมรส</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="view_marital_status_divorced" name="view_marital_status" value="3" disabled>
                                    <label class="form-check-label" for="view_marital_status_divorced">หย่าร้าง</label>
                                </div>
                            </div>

                            <!-- จำนวนบุตร -->
                            <div class="mb-3">
                                <label for="view_children_count" class="form-label">จำนวนบุตร</label>
                                <input type="number" class="form-control" id="view_children_count" name="children_count" disabled>
                            </div>

                            <!-- ประสบการณ์ทำงาน -->
                            <div class="mb-3">
                                <label class="form-label">ประสบการณ์ทำงาน</label>
                                <div class="row">
                                    <div class="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input view-work-experience" type="checkbox" id="view_experience_1" value="1" disabled>
                                            <label class="form-check-label" for="view_experience_1">ครู</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input view-work-experience" type="checkbox" id="view_experience_2" value="2" disabled>
                                            <label class="form-check-label" for="view_experience_2">พยาบาล</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input view-work-experience" type="checkbox" id="view_experience_3" value="3" disabled>
                                            <label class="form-check-label" for="view_experience_3">เชฟ</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input view-work-experience" type="checkbox" id="view_experience_4" value="4" disabled>
                                            <label class="form-check-label" for="view_experience_4">พนักงานขาย</label>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input view-work-experience" type="checkbox" id="view_experience_5" value="5" disabled>
                                            <label class="form-check-label" for="view_experience_5">ตำรวจ/ทหาร</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input view-work-experience" type="checkbox" id="view_experience_6" value="6" disabled>
                                            <label class="form-check-label" for="view_experience_6">แม่บ้าน</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input view-work-experience" type="checkbox" id="view_experience_7" value="7" disabled>
                                            <label class="form-check-label" for="view_experience_7">พนักงานบริษัท</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input view-work-experience" type="checkbox" id="view_experience_8" value="8" disabled>
                                            <label class="form-check-label" for="view_experience_8">พนักงานบริการ</label>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="view_experience_other" value="other" disabled>
                                            <label class="form-check-label" for="view_experience_other">อื่นๆ</label>
                                        </div>
                                        <input type="text" class="form-control mt-2" id="view_experience_other_text" placeholder="โปรดระบุ" disabled>
                                    </div>
                                </div>
                            </div>

                            <!-- เงินเดือนที่ต้องการ -->
                            <div class="mb-3">
                                <label for="view_expect_salary" class="form-label">เงินเดือนที่ต้องการ</label>
                                <input type="tel" class="form-control" id="view_expect_salary" name="expect_salary" disabled>
                            </div>

                            <!-- เบอร์โทรศัพท์ -->
                            <div class="mb-3">
                                <label for="view_phone_number" class="form-label">เบอร์โทรศัพท์</label>
                                <input type="tel" class="form-control" id="view_phone_number" name="phone_number" disabled>
                            </div>

                            <!-- Line ID -->
                            <div class="mb-3">
                                <label for="view_line_id" class="form-label">Line ID</label>
                                <input type="text" class="form-control" id="view_line_id" name="line_id" disabled>
                            </div>

                            <!-- Facebook -->
                            <div class="mb-3">
                                <label for="view_facebook" class="form-label">Facebook</label>
                                <input type="text" class="form-control" id="view_facebook" name="facebook" disabled>
                            </div>

                            <!-- อีเมล -->
                            <div class="mb-3">
                                <label for="view_email" class="form-label">อีเมล</label>
                                <input type="email" class="form-control" id="view_email" name="email" disabled>
                            </div>

                            <!-- วันทำงาน -->
                            <div class="mb-3">
                                <h5 class="mt-3">วันทำงาน</h5>
                                <div id="view_workDaysContainer"></div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal สำหรับอัพเดทข้อมูล -->
        <div class="modal fade" id="form_update_data" tabindex="-1" aria-labelledby="formUpdateDataLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="formUpdateDataLabel">อัพเดทข้อมูลพื้นฐานสมัครงาน Part Time</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="updateDataForm">
                            <!-- Hidden field to store part_time_data_id -->
                            <input type="hidden" id="update_part_time_data_id" name="part_time_data_id">

                            <!-- ชื่อ - นามสกุล -->
                            <div class="mb-3">
                                <label for="update_firstnamelastname" class="form-label">ชื่อ - นามสกุล</label>
                                <input type="text" class="form-control" id="update_firstnamelastname" name="firstnamelastname" required>
                            </div>

                            <!-- อายุ -->
                            <div class="mb-3">
                                <label for="update_age" class="form-label">อายุ</label>
                                <input type="number" class="form-control" id="update_age" name="age" required>
                            </div>

                            <!-- เพศ -->
                            <div class="mb-3">
                                <label class="form-label">เพศ</label><br>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="update_gender_male" name="update_gender" value="1" required>
                                    <label class="form-check-label" for="update_gender_male">ชาย</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="update_gender_female" name="update_gender" value="2">
                                    <label class="form-check-label" for="update_gender_female">หญิง</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="update_gender_other" name="update_gender" value="3">
                                    <label class="form-check-label" for="update_gender_other">อื่นๆ</label>
                                </div>
                            </div>

                            <!-- สถานะภาพปัจจุบัน -->
                            <div class="mb-3">
                                <label class="form-label">สถานะภาพปัจจุบัน</label><br>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="update_marital_status_single" name="update_marital_status" value="1" required>
                                    <label class="form-check-label" for="update_marital_status_single">โสด</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="update_marital_status_married" name="update_marital_status" value="2">
                                    <label class="form-check-label" for="update_marital_status_married">สมรส</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="update_marital_status_divorced" name="update_marital_status" value="3">
                                    <label class="form-check-label" for="update_marital_status_divorced">หย่าร้าง</label>
                                </div>
                            </div>

                            <!-- จำนวนบุตร -->
                            <div class="mb-3">
                                <label for="update_children_count" class="form-label">จำนวนบุตร</label>
                                <input type="number" class="form-control" id="update_children_count" name="children_count" required>
                            </div>

                            <!-- ประสบการณ์ทำงาน -->
                            <div class="mb-3">
                                <label class="form-label">ประสบการณ์ทำงาน</label>
                                <div class="row">
                                    <div class="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input update-work-experience" type="checkbox" id="update_experience_1" value="1">
                                            <label class="form-check-label" for="experience_1">ครู</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input update-work-experience" type="checkbox" id="update_experience_2" value="2">
                                            <label class="form-check-label" for="experience_2">พยาบาล</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input update-work-experience" type="checkbox" id="update_experience_3" value="3">
                                            <label class="form-check-label" for="experience_3">เชฟ</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input update-work-experience" type="checkbox" id="update_experience_4" value="4">
                                            <label class="form-check-label" for="experience_4">พนักงานขาย</label>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input update-work-experience" type="checkbox" id="update_experience_5" value="5">
                                            <label class="form-check-label" for="experience_5">ตำรวจ/ทหาร</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input update-work-experience" type="checkbox" id="update_experience_6" value="6">
                                            <label class="form-check-label" for="experience_6">แม่บ้าน</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input update-work-experience" type="checkbox" id="update_experience_7" value="7">
                                            <label class="form-check-label" for="experience_7">พนักงานบริษัท</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input update-work-experience" type="checkbox" id="update_experience_8" value="8">
                                            <label class="form-check-label" for="experience_8">พนักงานบริการ</label>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="update_experience_other" value="other">
                                            <label class="form-check-label" for="experience_other">อื่นๆ</label>
                                        </div>
                                        <input type="text" class="form-control mt-2" id="update_experience_other_text" placeholder="โปรดระบุ" disabled>
                                    </div>
                                </div>
                                <input type="hidden" id="update_work_experience" name="work_experience">
                            </div>

                            <!-- เงินเดือนที่ต้องการ -->
                            <div class="mb-3">
                                <label for="update_expect_salary" class="form-label">เงินเดือนที่ต้องการ</label>
                                <input type="tel" class="form-control" id="update_expect_salary" name="expect_salary" required>
                            </div>

                            <!-- เบอร์โทรศัพท์ -->
                            <div class="mb-3">
                                <label for="update_phone_number" class="form-label">เบอร์โทรศัพท์</label>
                                <input type="tel" class="form-control" id="update_phone_number" name="phone_number" required>
                            </div>

                            <!-- Line ID -->
                            <div class="mb-3">
                                <label for="update_line_id" class="form-label">Line ID</label>
                                <input type="text" class="form-control" id="update_line_id" name="line_id">
                            </div>

                            <!-- Facebook -->
                            <div class="mb-3">
                                <label for="update_facebook" class="form-label">Facebook</label>
                                <input type="text" class="form-control" id="update_facebook" name="facebook">
                            </div>

                            <!-- อีเมล -->
                            <div class="mb-3">
                                <label for="update_email" class="form-label">อีเมล</label>
                                <input type="email" class="form-control" id="update_email" name="email" required>
                            </div>

                            <!-- วันทำงาน -->
                            <div class="mb-3">
                                <h5 class="mt-3">วันทำงาน</h5>
                                <div id="update_workDaysContainer">
                                    <!-- ฟิลด์วันทำงานจะถูกสร้างจาก JavaScript -->
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
        </div>

    </main><!-- End #main -->

    <!-- ======= Footer ======= -->
    <?php include_once '../components/footer.php' ?>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="../js/check_login_application_admins.js"></script>
    <script src="../js/logout_application_admins.js"></script>
    <script src="../js/application_admins/admins/get_admin_header.js"></script>
    <script src="../js/application_admins/part_time_datas/get_part_time_data_all.js"></script>
    <script src="../js/application_admins/part_time_datas/view_part_time_data.js"></script>
    <script src="../js/application_admins/part_time_datas/update_part_time_data.js"></script>
    <script src="../js/application_admins/part_time_datas/delete_part_time_data.js"></script>
</body>

</html>