<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>กิจกรรม | CM WORKFORCE</title>
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
            <h1><?= $texts['event'] ?></h1>
        </div><!-- End Page Title -->

        <div class="d-sm-flex align-items-center justify-content-end mb-4">
            <select class="form-select me-2" id="select_personal">
                <option value=""><?= $texts['select_user'] ?></option>
            </select>
            <button class="btn btn-primary" type="button" id="search_button"><?= $texts['search_button'] ?></button>
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
                                        <th><?= $texts['event_name'] ?></th>
                                        <th><?= $texts['start_date'] ?></th>
                                        <th><?= $texts['end_date'] ?></th>
                                        <th><?= $texts['progress'] ?></th>
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
                                <label for="formGroupExampleInput"><?= $texts['event_name'] ?></label>
                                <input type="text" class="form-control" id="event_name_view" placeholder="<?= $texts['event_name'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['event_description'] ?></label>
                                <input type="text" class="form-control" id="event_detail_view" placeholder="<?= $texts['event_description'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['start_date'] ?></label>
                                <input type="text" class="form-control" id="event_date_view" placeholder="<?= $texts['start_date'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['end_date'] ?></label>
                                <input type="text" class="form-control" id="event_date_to_view" placeholder="<?= $texts['end_date'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['progress'] ?></label>
                                <input type="text" class="form-control" id="percent_view" placeholder="<?= $texts['progress'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['status'] ?></label>
                                <input type="text" class="form-control" id="status_view" placeholder="<?= $texts['status'] ?>" disabled>
                            </div>
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
    <script src="../js/event/get_personal_all.js"></script>
    <script src="../js/event/get_event_user.js"></script>
    <script src="../js/event/get_event.js"></script>
</body>

</html>