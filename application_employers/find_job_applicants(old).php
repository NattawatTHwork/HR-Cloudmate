<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>หาผู้สมัครงาน | CM WORKFORCE</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <?php include_once '../components/head_link.php' ?>

</head>

<body>

    <!-- ======= Header ======= -->
    <?php include_once '../components/header_application_employers.php' ?>

    <!-- ======= Sidebar ======= -->
    <?php include_once '../components/sidebar_application_employers.php' ?>

    <main id="main" class="main">

        <div class="pagetitle d-flex justify-content-start align-items-center">
            <h1 class="me-4"><?= $texts['find_job_applicant'] ?></h1>
            <a type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="<?= $texts['i_find_job_applicant'] ?>">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
            </a>
        </div><!-- End Page Title -->

        <div class="card pt-4">
            <div class="card-body m-2">
                <div class="row mb-4">
                    <label class="col-2"><?= $texts['job_category'] ?></label>
                    <select class="form-select me-2 col" id="select_job_category">
                        <option value="">-- <?= $texts['select_job_category'] ?> --</option>
                    </select>
                </div>
                <div class="row mb-4">
                    <label class="col-2"><?= $texts['work_location'] ?></label>
                    <select class="form-select me-2 col" id="select_work_location">
                        <option value="">-- <?= $texts['work_location'] ?> --</option>
                    </select>
                </div>
                <div class="row mb-4">
                    <label class="col-2"><?= $texts['employment_type'] ?></label>
                    <select class="form-select me-2 col" id="select_employment_type">
                        <option value="">-- <?= $texts['employment_type'] ?> --</option>
                    </select>
                </div>
                <div class="row mb-4">
                    <label class="col-2"><?= $texts['salary'] ?></label>
                    <select class="form-select me-2 col" id="select_salary_start">
                    </select>
                    <label class="col-1 text-center"> - </label>
                    <select class="form-select me-2 col" id="select_salary_end">
                    </select>
                </div>
                <button type="submit" id="searchButton" class="btn btn-primary w-100"><?= $texts['search_button'] ?></button>
            </div>
        </div>

        <section class="section">
            <div class="row align-items-top" id="cardContainer">

            </div>
        </section>

    </main><!-- End #main -->

    <!-- ======= Footer ======= -->
    <?php include_once '../components/footer.php' ?>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="../js/check_login_application_employers.js"></script>
    <script src="../js/logout_application_employers.js"></script>
    <script src="../js/application_employers/employers/get_employer_header.js"></script>
    <script src="../js/application_employers/find_job_applicants/get_salary.js"></script>
    <script src="../js/application_employers/find_job_applicants/get_job_category_all.js"></script>
    <script src="../js/application_employers/find_job_applicants/get_work_location_all.js"></script>
    <script src="../js/application_employers/find_job_applicants/get_employment_type_all.js"></script>
    <script src="../js/application_employers/find_job_applicants/get_job_applicant.js"></script>
</body>

</html>