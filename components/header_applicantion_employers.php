<header id="header" class="header fixed-top d-flex align-items-center">

    <div class="d-flex align-items-center justify-content-between">
        <a href="<?= $path ?>/application_employers/index.php" class="logo d-flex align-items-center">
            <img src="<?= $path ?>/assets/img/logo_cloudmate.jpg" alt="">
            <span class="d-none d-lg-block">CM WORKFORCE</span>
        </a>
        <i class="bi bi-list toggle-sidebar-btn"></i>
    </div><!-- End Logo -->

    <!-- <div class="search-bar">
    <form class="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword">
        <button type="submit" title="Search"><i class="bi bi-search"></i></button>
    </form>
</div>End Search Bar -->

    <nav class="header-nav ms-auto">
        <ul class="d-flex align-items-center">

            <li class="nav-item d-block d-lg-none">
                <a class="nav-link nav-icon search-bar-toggle " href="#">
                    <i class="bi bi-search"></i>
                </a>
            </li><!-- End Search Icon-->

            <li class="nav-item dropdown pe-3">
                <a id="languageDropdown" class="nav-link d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <?= $_SESSION['language'] == 'th' ? 'ไทย' : 'English' ?>
                    <i class="bi bi-chevron-down ms-1"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                    <li><a id="lang-th" class="dropdown-item" href="#">ไทย</a></li>
                    <li><a id="lang-en" class="dropdown-item" href="#">English</a></li>
                </ul>
            </li>

            <li class="nav-item dropdown pe-3">

                <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                    <img src="<?= $path ?>/assets/img/profile-img.jpg" id="image" alt="Profile" class="rounded-circle">
                    <span class="d-none d-md-block dropdown-toggle ps-2" id="fullname"></span>
                </a><!-- End Profile Iamge Icon -->

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li class="dropdown-header">
                        <h6 id="fullname_sub"></h6>
                        <span id="employer_name_head"></span>
                    </li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>

                    <li>
                        <a class="dropdown-item d-flex align-items-center" href="<?= $path ?>/application_employers/profile.php">
                            <i class="bi bi-person"></i>
                            <span><?= $texts['my_profile'] ?></span>
                        </a>
                    </li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>

                    <!-- <li>
                    <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i class="bi bi-gear"></i>
                        <span>Account Settings</span>
                    </a>
                </li>
                <li>
                    <hr class="dropdown-divider">
                </li> -->

                    <li>
                        <a class="dropdown-item d-flex align-items-center" href="<?= $path ?>/application_employers/change_password_employer.php">
                            <i class="bi bi-question-circle"></i>
                            <span><?= $texts['change_password'] ?></span>
                        </a>
                    </li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>

                    <li>
                        <a class="dropdown-item d-flex align-items-center" onclick="logout()">
                            <i class="bi bi-box-arrow-right"></i>
                            <span><?= $texts['logout'] ?></span>
                        </a>
                    </li>

                </ul><!-- End Profile Dropdown Items -->
            </li><!-- End Profile Nav -->

        </ul>
    </nav><!-- End Icons Navigation -->

</header><!-- End Header -->

<script src="<?= $path ?>/js/language.js"></script>