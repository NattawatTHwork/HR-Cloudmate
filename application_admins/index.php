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
    <?php include_once '../components/header_application_admins.php' ?>

    <!-- ======= Sidebar ======= -->
    <?php include_once '../components/sidebar_application_admins.php' ?>

    <main id="main" class="main">

        <div class="pagetitle">
            <h1>Dashboard</h1>
        </div><!-- End Page Title -->

        <section class="section dashboard">
            <div class="row">

                <div class="col-lg-12">
                    <div class="row">

                        <a class="col-xxl-3 col-md-12" href="<?= $path ?>/application_admins/employers.php">
                            <div class="card info-card sales-card">
                                <div class="card-body">
                                    <h5 class="card-title"><?= $texts['entrepreneurs_all'] ?></h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-person-workspace"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="total_employers"></h6>
                                            <span class="text-primary small pt-1 fw-bold"><?= $texts['people'] ?></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a class="col-xxl-3 col-md-12">
                            <div class="card info-card revenue-card">
                                <div class="card-body">
                                    <h5 class="card-title"><?= $texts['entrepreneurs_enable'] ?></h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-person-workspace"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="status_enable_employers"></h6>
                                            <span class="text-success small pt-1 fw-bold"><?= $texts['people'] ?></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a class="col-xxl-3 col-md-12">
                            <div class="card info-card customers-card">
                                <div class="card-body">
                                    <h5 class="card-title"><?= $texts['entrepreneurs_on_hold'] ?></span></h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-person-workspace"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="status_view_employers"></h6>
                                            <span class="text-warning small pt-1 fw-bold"><?= $texts['people'] ?></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a class="col-xxl-3 col-md-12">
                            <div class="card info-card red-card">
                                <div class="card-body">
                                    <h5 class="card-title"><?= $texts['entrepreneurs_disable'] ?></span></h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-person-workspace"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="status_disable_employers"></h6>
                                            <span class="text-danger small pt-1 fw-bold"><?= $texts['people'] ?></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-12">
                    <div class="row">

                        <a class="col-xxl-4 col-md-12" href="<?= $path ?>/application_admins/users.php">
                            <div class="card info-card sales-card">
                                <div class="card-body">
                                    <h5 class="card-title"><?= $texts['users_all'] ?></h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-people"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="total_users"></h6>
                                            <span class="text-primary small pt-1 fw-bold"><?= $texts['people'] ?></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a class="col-xxl-4 col-md-12">
                            <div class="card info-card revenue-card">
                                <div class="card-body">
                                    <h5 class="card-title"><?= $texts['users_enable'] ?></h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-people"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="status_enable_users"></h6>
                                            <span class="text-success small pt-1 fw-bold"><?= $texts['people'] ?></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a class="col-xxl-4 col-md-12">
                            <div class="card info-card red-card">
                                <div class="card-body">
                                    <h5 class="card-title"><?= $texts['users_disable'] ?></h5>
                                    <div class="d-flex align-items-center">
                                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i class="bi bi-people"></i>
                                        </div>
                                        <div class="ps-3">
                                            <h6 id="status_disable_users"></h6>
                                            <span class="text-danger small pt-1 fw-bold"><?= $texts['people'] ?></span>
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
    <script src="../js/check_login_application_admins.js"></script>
    <script src="../js/logout_application_admins.js"></script>
    <script src="../js/application_admins/admins/get_admin_header.js"></script>
    <script src="../js/application_admins/index/employers.js"></script>
    <script src="../js/application_admins/index/users.js"></script>
</body>

</html>