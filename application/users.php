<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>จัดการผู้สมัครงาน | CM WORKFORCE</title>
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
            <h1><?= $texts['manage_applicant'] ?></h1>
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
                                        <th><?= $texts['email'] ?></th>
                                        <th><?= $texts['name'] ?></th>
                                        <th><?= $texts['gender'] ?></th>
                                        <th><?= $texts['tel'] ?></th>
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
                                <label for="formGroupExampleInput"><?= $texts['gender'] ?></label>
                                <input type="text" class="form-control" id="gender_view" placeholder="<?= $texts['gender'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['birthday'] ?></label>
                                <input type="text" class="form-control" id="birthday_view" placeholder="<?= $texts['birthday'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['tel'] ?></label>
                                <input type="text" class="form-control" id="phone_number_view" placeholder="<?= $texts['tel'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['address'] ?></label>
                                <input type="text" class="form-control" id="address_view" placeholder="<?= $texts['address'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['create_date'] ?></label>
                                <input type="text" class="form-control" id="dates_view" placeholder="<?= $texts['create_date'] ?>" disabled>
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
                            <input type="hidden" name="user_code" id="user_code_update" required>
                            <input type="hidden" name="action" value="update">
                            <input type="hidden" name="ip_address" value="<?= $_SERVER['REMOTE_ADDR'] ?>">
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['email'] ?></label>
                                <input type="text" class="form-control" name="email" id="email_update" placeholder="<?= $texts['email'] ?>" required>
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
                                <label for="formGroupExampleInput"><?= $texts['gender'] ?></label>
                                <select class="form-control" name="gender" id="gender_update" required>
                                    <option value="1"><?= $texts['male'] ?></option>
                                    <option value="2"><?= $texts['female'] ?></option>
                                    <option value="3"><?= $texts['other'] ?></option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['birthday'] ?></label>
                                <input type="date" class="form-control" name="birthday" id="birthday_update" placeholder="<?= $texts['birthday'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['tel'] ?></label>
                                <input type="text" class="form-control" name="phone_number" id="phone_number_update" placeholder="<?= $texts['tel'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['address'] ?></label>
                                <input type="text" class="form-control" name="user_address" id="user_address_update" placeholder="<?= $texts['address'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['sub_district'] ?></label>
                                <input type="text" class="form-control" name="sub_district" id="sub_district_update" placeholder="<?= $texts['sub_district'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['district'] ?></label>
                                <input type="text" class="form-control" name="district" id="district_update" placeholder="<?= $texts['district'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['province'] ?></label>
                                <input type="text" class="form-control" name="province" id="province_update" placeholder="<?= $texts['province'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['zip_code'] ?></label>
                                <input type="text" class="form-control" name="zip_code" id="zip_code_update" placeholder="<?= $texts['zip_code'] ?>" required>
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
                            <input type="hidden" name="user_code" id="user_code_change" required>
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
    <script src="../js/check_login.js"></script>
    <script src="../js/logout.js"></script>
    <script src="../js/user_administration/users/get_header.js"></script>
    <script src="../js/application/users/get_user_all.js"></script>
    <script src="../js/application/users/get_user.js"></script>
    <script src="../js/application/users/update_user.js"></script>
    <script src="../js/application/users/change_password.js"></script>
    <script src="../js/application/users/delete_user.js"></script>
</body>

</html>