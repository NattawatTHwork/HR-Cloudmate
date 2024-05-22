<aside id="sidebar" class="sidebar">

  <ul class="sidebar-nav" id="sidebar-nav">

    <li class="nav-item">
      <a class="nav-link collapsed" href="<?= $path ?>/index.php">
        <i class="bi bi-grid"></i>
        <span><?= $texts['dashboard'] ?></span>
      </a>
    </li><!-- End Dashboard Nav -->

    <li class="nav-item">
      <a class="nav-link collapsed" href="<?= $path ?>/time_attendance/time_attendance.php">
        <i class="bi bi-grid"></i>
        <span><?= $texts['time_attendance'] ?></span>
      </a>
    </li><!-- End Time Attendance Nav -->

    <li class="nav-item">
      <a class="nav-link collapsed" href="<?= $path ?>/event/event.php">
        <i class="bi bi-grid"></i>
        <span><?= $texts['job_activity'] ?></span>
      </a>
    </li><!-- End Job Activity Nav -->

    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#application-nav" data-bs-toggle="collapse" href="#">
        <i class="bi bi-journal-text"></i><span><?= $texts['application'] ?></span><i class="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul id="application-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="<?= $path ?>/application/employers.php">
            <i class="bi bi-circle"></i><span><?= $texts['manage_entrepreneur'] ?></span>
          </a>
        </li>
        <li>
          <a href="<?= $path ?>/application/users.php">
            <i class="bi bi-circle"></i><span><?= $texts['manage_applicant'] ?></span>
          </a>
        </li>
      </ul>
    </li><!-- End Application Nav -->

    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#user_admintration-nav" data-bs-toggle="collapse" href="#">
        <i class="bi bi-journal-text"></i><span><?= $texts['user_administration'] ?></span><i class="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul id="user_admintration-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="<?= $path ?>/user_administration/users.php">
            <i class="bi bi-circle"></i><span><?= $texts['manage_user'] ?></span>
          </a>
        </li>
        <li>
          <a href="<?= $path ?>/user_administration/groups.php">
            <i class="bi bi-circle"></i><span><?= $texts['manage_group'] ?></span>
          </a>
        </li>
        <li>
          <a href="<?= $path ?>/user_administration/menus.php">
            <i class="bi bi-circle"></i><span><?= $texts['manage_menu'] ?></span>
          </a>
        </li>
        <li>
          <a href="<?= $path ?>/user_administration/menus_group.php">
            <i class="bi bi-circle"></i><span><?= $texts['manage_menu_group'] ?></span>
          </a>
        </li>
        <li>
          <a href="<?= $path ?>/user_administration/menus_user.php">
            <i class="bi bi-circle"></i><span><?= $texts['manage_menu_user'] ?></span>
          </a>
        </li>
      </ul>
    </li><!-- End User Administration Nav -->

  </ul>

</aside><!-- End Sidebar-->