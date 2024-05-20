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
            <h1><?= $texts['activities_title'] ?></h1>
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
                                        <th><?= $texts['event_name_label'] ?></th>
                                        <th><?= $texts['start_date_label'] ?></th>
                                        <th><?= $texts['end_date_label'] ?></th>
                                        <th><?= $texts['progress_label'] ?></th>
                                        <th><?= $texts['status_label'] ?></th>
                                        <th><?= $texts['options_label'] ?></th>
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
                            <h5 class="modal-title" id="exampleModalLabel"><?= $texts['view_data_modal_title'] ?></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['event_name_label'] ?></label>
                                <input type="text" class="form-control" id="event_name_view" placeholder="<?= $texts['event_name_label'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['event_detail_label'] ?></label>
                                <input type="text" class="form-control" id="event_detail_view" placeholder="<?= $texts['event_detail_label'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['start_date_label'] ?></label>
                                <input type="text" class="form-control" id="event_date_view" placeholder="<?= $texts['start_date_label'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['end_date_label'] ?></label>
                                <input type="text" class="form-control" id="event_date_to_view" placeholder="<?= $texts['end_date_label'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['progress_label'] ?></label>
                                <input type="text" class="form-control" id="percent_view" placeholder="<?= $texts['progress_label'] ?>" disabled>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><?= $texts['status_label'] ?></label>
                                <input type="text" class="form-control" id="status_view" placeholder="<?= $texts['status_label'] ?>" disabled>
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
    <script src="../js/token.js"></script>
    <script src="../js/api_url.js"></script>
    <script src="../js/event/get_personal_all.js"></script>
    <script src="../js/event/get_event_user.js"></script>
    <script src="../js/event/get_event.js"></script>
</body>

</html>