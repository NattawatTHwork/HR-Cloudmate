<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>ความคืบหน้ากิจกรรม | CM WORKFORCE</title>
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
            <h1><span id="event_name"></span></h1>
        </div>
        <div>
            <h5><?= $texts['event_description'] ?> : <span id="event_detail"></span></h5>
        </div>
        <div>
            <h5><?= $texts['start_date'] ?> : <span id="event_date"></span></h5>
        </div>
        <div>
            <h5><?= $texts['end_date'] ?> : <span id="event_date_to"></span></h5>
        </div>

        <section class="section">
            <div class="row align-items-top" id="cardContainer">

            </div>
        </section>

    </main><!-- End #main -->

    <!-- ======= Footer ======= -->
    <?php include_once '../components/footer.php' ?>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="../js/check_login.js"></script>
    <script src="../js/logout.js"></script>
    <script src="../js/token.js"></script>
    <script src="../js/user_administration/users/get_header.js"></script>
    <script src="../js/event/get_event_detail.js"></script>
</body>

</html>