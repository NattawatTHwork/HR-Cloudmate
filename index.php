<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Dashboard | CM WORKFORCE</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <?php include_once 'components/head_link.php' ?>

</head>

<body>

    <!-- ======= Header ======= -->
    <?php include_once 'components/header.php' ?>

    <!-- ======= Sidebar ======= -->
    <?php include_once 'components/sidebar.php' ?>

    <main id="main" class="main">

        <div class="pagetitle">
            <h1>Dashboard</h1>
        </div><!-- End Page Title -->

        <section class="section dashboard">
            <div class="row">

                <div class="col-lg-12">
                    <div class="row">

                        <a class="col-xxl-3 col-md-12" href="<?= $path ?>/application/employers.php">
                            <div class="card info-card sales-card">
                                <div class="card-body">
                                    <h5 class="card-title">EMPLOYERS ALL</h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-person-workspace"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="total_employers"></h6>
                                            <span class="text-primary small pt-1 fw-bold">คน</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a class="col-xxl-3 col-md-12">
                            <div class="card info-card revenue-card">
                                <div class="card-body">
                                    <h5 class="card-title">EMPLOYERS ENABLE</h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-person-workspace"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="status_enable_employers"></h6>
                                            <span class="text-success small pt-1 fw-bold">คน</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a class="col-xxl-3 col-md-12">
                            <div class="card info-card customers-card">
                                <div class="card-body">
                                    <h5 class="card-title">EMPLOYERS VIEW</span></h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-person-workspace"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="status_view_employers"></h6>
                                            <span class="text-warning small pt-1 fw-bold">คน</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a class="col-xxl-3 col-md-12">
                            <div class="card info-card red-card">
                                <div class="card-body">
                                    <h5 class="card-title">EMPLOYERS DISABLE</span></h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-person-workspace"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="status_disable_employers"></h6>
                                            <span class="text-danger small pt-1 fw-bold">คน</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-12">
                    <div class="row">

                        <a class="col-xxl-4 col-md-12" href="<?= $path ?>/application/users.php">
                            <div class="card info-card sales-card">
                                <div class="card-body">
                                    <h5 class="card-title">USERS ALL</h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-people"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="total_users"></h6>
                                            <span class="text-primary small pt-1 fw-bold">คน</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a class="col-xxl-4 col-md-12">
                            <div class="card info-card revenue-card">
                                <div class="card-body">
                                    <h5 class="card-title">USERS ENABLE</h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-people"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="status_enable_users"></h6>
                                            <span class="text-success small pt-1 fw-bold">คน</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a class="col-xxl-4 col-md-12">
                            <div class="card info-card red-card">
                                <div class="card-body">
                                    <h5 class="card-title">USERS DISABLE</h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-people"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="status_disable_users"></h6>
                                            <span class="text-danger small pt-1 fw-bold">คน</span>
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
    <?php include_once 'components/footer.php' ?>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="js/check_login.js"></script>
    <script src="js/logout.js"></script>
    <script src="js/token.js"></script>
    <script src="js/api_url.js"></script>
    <script src="js/index/employers.js"></script>
    <script src="js/index/users.js"></script>
</body>

</html>