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
    <?php include_once '../components/header.php' ?>

    <!-- ======= Sidebar ======= -->
    <?php include_once '../components/sidebar.php' ?>

    <main id="main" class="main">

        <div class="pagetitle">
            <h1><?= $texts['manage_user'] ?></h1>
        </div><!-- End Page Title -->

        <div class="d-sm-flex justify-content-end mb-2 row">
            <div class="col-sm-12 col-md-4">
                <button type="button" class="btn btn-primary w-100 btn-block" data-bs-toggle="modal" data-bs-target="#form_create_data">
                <?= $texts['add_user'] ?>
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
                                        <th><?= $texts['username'] ?></th>
                                        <th><?= $texts['name'] ?></th>
                                        <th><?= $texts['group'] ?></th>
                                        <th><?= $texts['create_date'] ?></th>
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
                            <h5 class="modal-title" id="exampleModalLabel"><?= $texts['add_data'] ?></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['username'] ?></label>
                                <input type="text" class="form-control" name="username" id="username" placeholder="<?= $texts['username'] ?>" required>
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
                                <input type="text" class="form-control" name="user_password" id="user_password" placeholder="<?= $texts['new_password'] ?>" required>
                                <div id="alertpassword" style="display: none; color: red;"><?= $texts['more_6'] ?></div>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['confirm_password'] ?></label>
                                <input type="text" class="form-control" name="user_repeat_password" id="user_repeat_password" placeholder="<?= $texts['confirm_password'] ?>" required>
                                <div id="alertrepeatpassword" style="display: none; color: red;"><?= $texts['not_match'] ?></div>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['group'] ?></label>
                                <select class="form-control" name="group_id" id="group_name_dropdown_create" required>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['status'] ?></label>
                                <select class="form-control" name="statusflag" id="statusflag" required>
                                    <option value="t" selected><?= $texts['not_match'] ?></option>
                                    <option value="f"><?= $texts['not_match'] ?></option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><?= $texts['cancel'] ?></button>
                            <button type="submit" class="btn btn-primary"><?= $texts['save'] ?></button>
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
                                <label for="formGroupExampleInput"><?= $texts['username'] ?></label>
                                <input type="text" class="form-control" id="username_view" placeholder="<?= $texts['username'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['firstname'] ?></label>
                                <input type="text" class="form-control" id="firstname_view" placeholder="<?= $texts['firstname'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['lastname'] ?></label>
                                <input type="text" class="form-control" id="lastname_view" placeholder="<?= $texts['lastname'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['group'] ?></label>
                                <input type="text" class="form-control" id="group_name_view" placeholder="<?= $texts['group'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['recorder'] ?></label>
                                <input type="text" class="form-control" id="personcode_view" placeholder="<?= $texts['recorder'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['create_date'] ?></label>
                                <input type="text" class="form-control" id="dates_view" placeholder="<?= $texts['create_date'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['status'] ?></label>
                                <input type="text" class="form-control" id="user_statusflag_view" placeholder="<?= $texts['status'] ?>" disabled>
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
                            <input type="hidden" class="form-control" name="user_id" id="user_id_update" required>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['username'] ?></label>
                                <input type="text" class="form-control" name="username" id="username_update" placeholder="<?= $texts['username'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['firstname'] ?></label>
                                <input type="text" class="form-control" name="firstname" id="firstname_update" placeholder="<?= $texts['firstname'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['lastname'] ?></label>
                                <input type="text" class="form-control" name="lastname" id="lastname_update" placeholder="<?= $texts['lastname'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['group'] ?></label>
                                <select class="form-control" name="group_id" id="group_name_dropdown_update" required>
                                </select>
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
                            <button type="submit" class="btn btn-primary"><?= $texts['save'] ?></button>
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
                            <input type="hidden" name="user_id" id="user_id_change" required>
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
                            <button type="submit" class="btn btn-primary"><?= $texts['save'] ?></button>
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
    <script src="../js/user_administration/users/get_group_all.js"></script>
    <script src="../js/user_administration/users/create_user.js"></script>
    <script src="../js/user_administration/users/get_user_all.js"></script>
    <script src="../js/user_administration/users/get_user.js"></script>
    <script src="../js/user_administration/users/update_user.js"></script>
    <script src="../js/user_administration/users/change_password.js"></script>
    <script src="../js/user_administration/users/delete_user.js"></script>
</body>

</html>