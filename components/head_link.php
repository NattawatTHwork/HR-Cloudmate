    <?php $path = '/HR-Cloudmate' ?>

    <!-- Favicons -->
    <link href="<?= $path ?>/assets/img/logo_cloudmate.jpg" rel="icon">
    <link href="<?= $path ?>/assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <!-- <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"> -->
    <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="<?= $path ?>/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?= $path ?>/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="<?= $path ?>/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="<?= $path ?>/assets/vendor/quill/quill.snow.css" rel="stylesheet">
    <link href="<?= $path ?>/assets/vendor/quill/quill.bubble.css" rel="stylesheet">
    <link href="<?= $path ?>/assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.datatables.net/2.0.0/css/dataTables.dataTables.min.css">

    <!-- Template Main CSS File -->
    <link href="<?= $path ?>/assets/css/style.css" rel="stylesheet">

    <!-- =======================================================
  * Template Name: NiceAdmin
  * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
  * Updated: Mar 17 2024 with Bootstrap v5.3.3
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->

    <?php
    session_start();
    if (!isset($_SESSION['language'])) {
      $_SESSION['language'] = 'th';
    }
    if (isset($_GET['language'])) {
      $_SESSION['language'] = $_GET['language'];
    }

    $language_file = $_SERVER['DOCUMENT_ROOT'] . $path . '/components/' . $_SESSION['language'] . '.php';

    if (file_exists($language_file)) {
      $texts = include $language_file;
    } else {
      echo "Error: Language file not found.";
    }
    ?>

    <?php if ($_SESSION['language'] == 'th') { ?>
      <script src="<?= $path ?>/js/th.js"></script>
    <?php } else { ?>
      <script src="<?= $path ?>/js/en.js"></script>
    <?php } ?>