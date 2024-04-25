<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Dashboard | CM WORKFORCE</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <?php include_once '../components/head_link.php' ?>

</head>

<body>

    <!-- ======= Header ======= -->
    <?php include_once '../components/header_applicantion_employers.php' ?>

    <!-- ======= Sidebar ======= -->
    <?php include_once '../components/sidebar_application_employers.php' ?>

    <main id="main" class="main">

        <div class="pagetitle">
            <h1>Dashboard</h1>
        </div><!-- End Page Title -->

        <section class="section dashboard">
            <div class="row">

                <div class="col-lg-12">
                    <div class="row">

                        <a class="col-xxl-4 col-md-12" href="<?= $path ?>/application_employers/jobs.php">
                            <div class="card info-card sales-card">
                                <div class="card-body">
                                    <h5 class="card-title">ALL <span>| Jobs</span></h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-person-workspace"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="all_jobs"></h6>
                                            <span class="text-primary small pt-1 fw-bold">งาน</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a class="col-xxl-4 col-md-12" href="<?= $path ?>/application_employers/jobs.php?status=true">
                            <div class="card info-card revenue-card">
                                <div class="card-body">
                                    <h5 class="card-title">Active <span>| Jobs</span></h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-person-workspace"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="active_jobs"></h6>
                                            <span class="text-success small pt-1 fw-bold">งาน</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a class="col-xxl-4 col-md-12" href="<?= $path ?>/application_employers/jobs.php?status=false">
                            <div class="card info-card red-card">
                                <div class="card-body">
                                    <h5 class="card-title">Inactive <span>| Jobs</span></h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-person-workspace"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="inactive_jobs"></h6>
                                            <span class="text-danger small pt-1 fw-bold">งาน</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </a>

                    </div>
                </div>

                <div class="col-lg-12">
                    <div class="row">

                        <a class="col-12" href="<?= $path ?>/application_employers/apply_works.php">
                            <div class="card info-card sales-card">
                                <div class="card-body">
                                    <h5 class="card-title">Apply Works</h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-people"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="total_apply_works"></h6>
                                            <span class="text-primary small pt-1 fw-bold">ใบสมัคร</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>

            </div>
        </section>

    </main><!-- End #main -->

    <!-- ======= Footer ======= -->
    <?php include_once '../components/footer.php' ?>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="../js/check_login_application_employers.js"></script>
    <script src="../js/logout_application_employers.js"></script>
    <script src="../js/token.js"></script>
    <script src="../js/api_url.js"></script>
    <script src="../js/application_employers/index/jobs.js"></script>
    <script src="../js/application_employers/index/apply_works.js"></script>
</body>

</html>