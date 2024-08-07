<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>การสมัครแพ็คเก็จ | CM WORKFORCE</title>
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

        <div class="pagetitle d-flex justify-content-start align-items-center">
            <h1 class="me-4"><?= $texts['apply_packages'] ?></h1>
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
                                        <th><?= $texts['packages'] ?></th>
                                        <th><?= $texts['start_date'] ?></th>
                                        <th><?= $texts['end_date'] ?></th>
                                        <th><?= $texts['status'] ?></th>
                                        <th><?= $texts['option'] ?></th>
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

        <div class="modal fade" id="form_change_status_data" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form id="change_status_data_form">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"><?= $texts['approval'] ?></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <input type="hidden" name="apply_package_code" id="apply_package_code_change" value="" >
                                <label for="formGroupExampleInput"><?= $texts['status'] ?></label>
                                <select class="form-control" name="status_approved" id="status_approved_change" required>
                                    <option value="t"><?= $texts['approve'] ?></option>
                                    <option value="f"><?= $texts['disapprove'] ?></option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><?= $texts['cancel'] ?></button>
                            <button type="submit" class="btn btn-primary" id="button_change_status"><?= $texts['save'] ?></button>
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
    <script src="../js/user_administration/users/get_header.js"></script>
    <script src="../js/application/apply_packages/get_apply_package_employer.js"></script>
    <script src="../js/application/apply_packages/change_status.js"></script>
</body>

</html>