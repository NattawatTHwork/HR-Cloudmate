<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>กิจกรรม | CM WORKFORCE</title>
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
            <h1>กิจกรรม</h1>
        </div><!-- End Page Title -->

        <div class="d-sm-flex align-items-center justify-content-end mb-4">
            <select class="form-select me-2" id="select_personal">
                <option value="">เลือกผู้ใช้</option>
            </select>
            <button class="btn btn-warning" type="button" id="search_button">ค้นหา</button>
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
                                        <th>ชื่อเรื่อง</th>
                                        <th>วันที่เริ่ม</th>
                                        <th>วันที่เสร็จ</th>
                                        <th>ความคืบหน้า</th>
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
                                <label for="formGroupExampleInput">ชื่อเรื่อง</label>
                                <input type="text" class="form-control" id="event_name_view" placeholder="ชื่อเรื่อง" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">รายละเอียด</label>
                                <input type="text" class="form-control" id="event_detail_view" placeholder="รายละเอียด" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">วันที่เริ่ม</label>
                                <input type="text" class="form-control" id="event_date_view" placeholder="วันที่เริ่ม" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">วันที่เสร็จ</label>
                                <input type="text" class="form-control" id="event_date_to_view" placeholder="วันที่เสร็จ" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">ความคืบหน้า</label>
                                <input type="text" class="form-control" id="percent_view" placeholder="ความคืบหน้า" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">สถานะ</label>
                                <input type="text" class="form-control" id="status_view" placeholder="สถานะ" disabled>
                            </div>
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
    <script src="../js/event/get_personal_all.js"></script>
    <script src="../js/event/get_event_user.js"></script>
    <script src="../js/event/get_event.js"></script>
</body>

</html>