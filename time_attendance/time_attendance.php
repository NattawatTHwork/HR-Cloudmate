<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>เวลาเข้าออกงาน | CM WORKFORCE</title>
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
            <h1>เวลาเข้าออกงาน</h1>
        </div><!-- End Page Title -->

        <div class="d-sm-flex align-items-center justify-content-end mb-4">
            <select class="form-select me-2" id="select_personal">
                <option value="">เลือกผู้ใช้</option>
            </select>
            <select class="form-select me-2" id="select_month">
                <option value="">เลือกเดือน</option>
                <?php
                $months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
                foreach ($months as $index => $monthName) {
                    $value = $index + 1;
                    $selected = ($_GET['month'] == $value) ? 'selected' : '';
                    echo "<option value='$value' $selected>$monthName</option>";
                }
                ?>
            </select>
            <select class="form-select me-2" id="select_year">
                <option value="">เลือกปี</option>
                <?php
                $startYear = 2024;
                $currentYear = date('Y');
                $selectedYear = isset($_GET['year']) ? $_GET['year'] : $currentYear;
                for ($year = $startYear; $year <= $startYear + 10; $year++) {
                    $selected = ($year == $selectedYear) ? 'selected' : '';
                    echo "<option value='$year' $selected>$year</option>";
                }
                ?>
            </select>
            <button class="btn btn-primary" type="button" id="search_button">ค้นหา</button>
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
                                        <th>วันที่</th>
                                        <th>เวลาเข้างาน</th>
                                        <th>เวลาออกงาน</th>
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


    </main><!-- End #main -->

    <!-- ======= Footer ======= -->
    <?php include_once '../components/footer.php' ?>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="../js/check_login.js"></script>
    <script src="../js/logout.js"></script>
    <script src="../js/token.js"></script>
    <script src="../js/api_url.js"></script>
    <script src="../js/time_attendance/get_personal_all.js"></script>
    <script src="../js/time_attendance/get_time_attendance.js"></script>
</body>

</html>