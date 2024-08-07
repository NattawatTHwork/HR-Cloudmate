<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>กำหนดชื่อผู้ใช้ | CM WORKFORCE</title>
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
            <h1><?= $texts['manage_user'] ?></h1>
        </div><!-- End Page Title -->

        <div class="d-sm-flex justify-content-end mb-2 row">
            <div class="col-sm-12 col-md-4">
                <button type="button" class="btn btn-primary w-100 btn-block" data-bs-toggle="modal" data-bs-target="#form_create_data">
                    <?= $texts['add_admin'] ?>
                </button>
            </div>
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
                                        <th><?= $texts['name'] ?></th>
                                        <th><?= $texts['email'] ?></th>
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

        <!-- Modal -->
        <div class="modal fade" id="form_create_data" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form id="create_data_form">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"><?= $texts['add_admin'] ?></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="hidden" name="action" value="create">
                            <input type="hidden" name="ip_address" value="<?= $_SERVER['REMOTE_ADDR'] ?>">
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['email'] ?></label>
                                <input type="text" class="form-control" name="email" id="email" placeholder="<?= $texts['email'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['firstname'] ?></label>
                                <input type="text" class="form-control" name="firstname" id="firstname" placeholder="<?= $texts['firstname'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['lastname'] ?></label>
                                <input type="text" class="form-control" name="lastname" id="lastname" placeholder="<?= $texts['lastname'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['new_password'] ?></label>
                                <input type="text" class="form-control" name="admin_password" id="admin_password" placeholder="<?= $texts['new_password'] ?>" required>
                                <div id="alertpassword" style="display: none; color: red;"><?= $texts['more_6'] ?></div>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['confirm_password'] ?></label>
                                <input type="text" class="form-control" name="admin_repeat_password" id="admin_repeat_password" placeholder="<?= $texts['confirm_password'] ?>" required>
                                <div id="alertrepeatpassword" style="display: none; color: red;"><?= $texts['not_match'] ?></div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><?= $texts['cancel'] ?></button>
                            <button type="submit" class="btn btn-primary" id="button_create"><?= $texts['save'] ?></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal fade" id="view_data" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"><?= $texts['view_data'] ?></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['email'] ?></label>
                                <input type="text" class="form-control" id="email_view" placeholder="<?= $texts['email'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['name'] ?></label>
                                <input type="text" class="form-control" id="fullname_view" placeholder="<?= $texts['name'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['status'] ?></label>
                                <input type="text" class="form-control" id="statusflag_view" placeholder="<?= $texts['status'] ?>" disabled>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal fade" id="form_update_data" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form id="update_data_form">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"><?= $texts['edit_data'] ?></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="hidden" name="admin_code" id="admin_code_update" required>
                            <input type="hidden" name="action" value="update">
                            <input type="hidden" name="ip_address" value="<?= $_SERVER['REMOTE_ADDR'] ?>">
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['firstname'] ?></label>
                                <input type="text" class="form-control" name="firstname" id="firstname_update" placeholder="<?= $texts['firstname'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['lastname'] ?></label>
                                <input type="text" class="form-control" name="lastname" id="lastname_update" placeholder="<?= $texts['lastname'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['status'] ?></label>
                                <select class="form-control" name="statusflag" id="statusflag_update" required>
                                    <option value="t" selected><?= $texts['enable'] ?></option>
                                    <option value="f"><?= $texts['disable'] ?></option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><?= $texts['cancel'] ?></button>
                            <button type="submit" class="btn btn-primary" id="button_update"><?= $texts['save'] ?></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal fade" id="form_change_password_data" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form id="change_password_data_form">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"><?= $texts['change_password'] ?></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="hidden" name="admin_code" id="admin_code_change" required>
                            <input type="hidden" name="action" value="change_password">
                            <input type="hidden" name="ip_address" value="<?= $_SERVER['REMOTE_ADDR'] ?>">
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['new_password'] ?></label>
                                <input type="text" class="form-control" name="new_password" id="new_password_change" placeholder="<?= $texts['new_password'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['confirm_password'] ?></label>
                                <input type="text" class="form-control" name="repeat_new_password" id="repeat_new_password_change" placeholder="<?= $texts['confirm_password'] ?>" required>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><?= $texts['cancel'] ?></button>
                            <button type="submit" class="btn btn-primary" id="button_change_password"><?= $texts['save'] ?></button>
                        </div>
                    </form>
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
    <script src="../js/application_admins/admins/get_admin_all.js"></script>
    <script src="../js/application_admins/admins/create_admin.js"></script>
    <script src="../js/application_admins/admins/get_admin.js"></script>
    <script src="../js/application_admins/admins/update_admin.js"></script>
    <script src="../js/application_admins/admins/change_password_admin.js"></script>
    <script src="../js/application_admins/admins/delete_admin.js"></script>
</body>

</html>