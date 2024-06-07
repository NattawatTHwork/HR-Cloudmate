<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>ส่งหลักฐานการชำระเงิน | CM WORKFORCE</title>
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

        <div class="pagetitle d-flex justify-content-start align-items-center">
            <h1 class="me-4"><?= $texts['send_payment'] ?></h1>
            <a type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="<?= $texts['i_send_payment'] ?>">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
            </a>
        </div><!-- End Page Title -->

        <section class="section">
            <div class="row align-items-top">
                <div class="col-sm-12 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center">บริษัท คลาวด์เมท จำกัด</h5>
                            <p class="card-text text-center">ธนาคารกสิกรไทย สาขา.บ้านแอนค์บียอนค์ ราชพฤกษ์</p>
                            <p class="card-text text-center">024-3-90158-8</p>
                            <p class="card-text text-center"><?= $texts['i_send_proof'] ?> <strong><a href="mailto:x@x.com">x@x.com</a></strong>
                                <button class="btn" onclick="copyEmail()">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                    </svg>
                                </button>
                            </p>
                        </div>
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
    <script src="../js/application_employers/employers/get_employer_header.js"></script>
    <!-- <script src="../js/application_employers/packages/get_employer_package.js"></script> -->
    <script>
        function copyEmail() {
            const email = "x@x.com";
            navigator.clipboard.writeText(email).then(function() {
                Swal.fire({
                    icon: 'success',
                    title: texts.copied,
                });
            }, function(err) {
                Swal.fire({
                    icon: 'error',
                    title: texts.error,
                });
            });
        }
    </script>
</body>

</html>