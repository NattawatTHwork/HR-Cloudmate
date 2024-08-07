<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>กำหนดเมนูผู้ใช้ | CM WORKFORCE</title>
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
            <h1><?= $texts['manage_menu_user'] ?></h1>
        </div><!-- End Page Title -->

        <div class="d-sm-flex justify-content-center mb-2 row">
            <div class="col-sm-12 col-md-4">
                <button type="button" class="btn btn-primary w-100 btn-block" id="createButton">
                    <?= $texts['add_menu_user'] ?>
                </button>
            </div>
            <div class="col-sm-12 col-md-4">
                <button type="button" class="btn btn-primary w-100 btn-block" id="updateButton">
                    <?= $texts['edit_menu_user'] ?>
                </button>
            </div>
            <div class="col-sm-12 col-md-4">
                <button type="button" class="btn btn-primary w-100 btn-block" id="deleteButton">
                    <?= $texts['delete_menu_user'] ?>
                </button>
            </div>
        </div>

        <div class="d-sm-flex justify-content-end mb-4">
            <select class="form-select" id="select_group">
                <option value=""><?= $texts['select_user'] ?></option>
            </select>
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
                                        <th><?= $texts['menu_code'] ?></th>
                                        <th><?= $texts['menu_name'] ?></th>
                                        <th><?= $texts['recorder'] ?></th>
                                        <th><?= $texts['create_date'] ?></th>
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
                            <div class="checkbox-container"></div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><?= $texts['cancel'] ?></button>
                            <button type="submit" class="btn btn-primary"><?= $texts['save'] ?></button>
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
                            <div class="checkbox-container"></div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><?= $texts['cancel'] ?></button>
                            <button type="submit" class="btn btn-primary"><?= $texts['save'] ?></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal fade" id="form_delete_data" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form id="delete_data_form">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"><?= $texts['delete_data'] ?></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="checkbox-container"></div>
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
    <script src="../js/user_administration/menus_user/get_user_all.js"></script>
    <script src="../js/user_administration/menus_user/get_menus_user.js"></script>
    <script src="../js/user_administration/menus_user/create_menus_user.js"></script>
    <script src="../js/user_administration/menus_user/update_menus_user.js"></script>
    <script src="../js/user_administration/menus_user/delete_menus_user.js"></script>
</body>

</html>