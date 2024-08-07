<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>กำหนดกลุ่มผู้ใช้ | CM WORKFORCE</title>
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
            <h1><?= $texts['manage_group'] ?></h1>
        </div><!-- End Page Title -->

        <div class="d-sm-flex justify-content-end mb-2 row">
            <div class="col-sm-12 col-md-4">
                <button type="button" class="btn btn-primary w-100 btn-block" data-bs-toggle="modal" data-bs-target="#form_create_data">
                    <?= $texts['add_group'] ?>
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
                                        <th><?= $texts['group_code'] ?></th>
                                        <th><?= $texts['group_name'] ?></th>
                                        <th><?= $texts['recorder'] ?></th>
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
                                <label for="formGroupExampleInput"><?= $texts['group_code'] ?></label>
                                <input type="text" class="form-control" name="group_code" id="group_code" placeholder="<?= $texts['group_code'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['group_name'] ?></label>
                                <input type="text" class="form-control" name="group_name" id="group_name" placeholder="<?= $texts['group_name'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['status'] ?></label>
                                <select class="form-control" name="statusflag" id="statusflag" required>
                                    <option value="true" selected><?= $texts['enable'] ?></option>
                                    <option value="false"><?= $texts['disable'] ?></option>
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
                                <label for="formGroupExampleInput"><?= $texts['group_code'] ?></label>
                                <input type="text" class="form-control" id="group_code_view" placeholder="<?= $texts['group_code'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['group_name'] ?></label>
                                <input type="text" class="form-control" id="group_name_view" placeholder="<?= $texts['group_name'] ?>" disabled>
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
                            <input type="hidden" name="group_id" id="group_id_update" required>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['group_code'] ?></label>
                                <input type="text" class="form-control" name="group_code" id="group_code_update" placeholder="<?= $texts['group_code'] ?>" required>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['group_name'] ?></label>
                                <input type="text" class="form-control" name="group_name" id="group_name_update" placeholder="<?= $texts['group_name'] ?>" required>
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

    </main><!-- End #main -->

    <!-- ======= Footer ======= -->
    <?php include_once '../components/footer.php' ?>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="../js/check_login.js"></script>
    <script src="../js/logout.js"></script>
    <script src="../js/user_administration/users/get_header.js"></script>
    <script src="../js/user_administration/groups/create_group.js"></script>
    <script src="../js/user_administration/groups/get_group_all.js"></script>
    <script src="../js/user_administration/groups/get_group.js"></script>
    <script src="../js/user_administration/groups/update_group.js"></script>
    <script src="../js/user_administration/groups/delete_group.js"></script>
</body>

</html>