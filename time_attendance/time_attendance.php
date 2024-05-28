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
            <h1><?= $texts['attendance_title'] ?></h1>
        </div><!-- End Page Title -->

        <div class="d-sm-flex align-items-center justify-content-end mb-4">
            <select class="form-select me-2" id="select_personal">
                <option value=""><?= $texts['select_user'] ?></option>
            </select>
            <select class="form-select me-2" id="select_month">
                <option value=""><?= $texts['select_month'] ?></option>
                <?php
                // $months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
                $selectedMonth = isset($_GET['month']) ? $_GET['month'] : date('n');
                foreach ($texts['months'] as $index => $monthName) {
                    $value = $index + 1;
                    $selected = ($selectedMonth == $value) ? 'selected' : '';
                    echo "<option value='$value' $selected>$monthName</option>";
                }
                ?>
            </select>
            <select class="form-select me-2" id="select_year">
                <option value=""><?= $texts['select_year'] ?></option>
                <?php
                $startYear = 2024;
                $currentYear = date('Y');
                $selectedYear = isset($_GET['year']) ? $_GET['year'] : $currentYear;
                for ($year = $startYear; $year < $startYear + 20; $year++) {
                    $selected = ($year == $selectedYear) ? 'selected' : '';
                    if (isset($_SESSION['language'])) {
                        if ($_SESSION['language'] === 'en') {
                            $year_show = $year;
                        } else {
                            $year_show = $year + 543;
                        }
                    };
                    echo "<option value='$year' $selected>$year_show</option>";
                }
                ?>
            </select>
            <button class="btn btn-primary" type="button" id="search_button"><?= $texts['search_button'] ?></button>
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
                                        <th><?= $texts['date'] ?></th>
                                        <th><?= $texts['check_in_time'] ?></th>
                                        <th><?= $texts['check_out_time'] ?></th>
                                        <!-- <th>สถานะ</th> -->
                                        <!-- <th>ตัวเลือก</th> -->
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
    <script src="../js/user_administration/users/get_header.js"></script>
    <script src="../js/time_attendance/get_personal_all.js"></script>
    <script src="../js/time_attendance/get_time_attendance.js"></script>
</body>

</html>