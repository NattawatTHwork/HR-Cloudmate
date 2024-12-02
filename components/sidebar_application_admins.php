<aside id="sidebar" class="sidebar">

  <ul class="sidebar-nav" id="sidebar-nav">

    <li class="nav-item">
      <a class="nav-link collapsed" href="<?= $path ?>/application_admins/index.php">
        <i class="bi bi-grid"></i>
        <span><?= $texts['dashboard'] ?></span>
      </a>
    </li><!-- End Dashboard Nav -->

    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#application-nav" data-bs-toggle="collapse" href="#">
        <i class="bi bi-journal-text"></i><span><?= $texts['application'] ?></span><i class="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul id="application-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="<?= $path ?>/application_admins/employers.php">
            <i class="bi bi-circle"></i><span><?= $texts['manage_entrepreneur'] ?></span>
          </a>
        </li>
        <li>
          <a href="<?= $path ?>/application_admins/users.php">
            <i class="bi bi-circle"></i><span><?= $texts['manage_applicant'] ?></span>
          </a>
        </li>
        <li>
          <a href="<?= $path ?>/application_admins/part_time_users.php">
            <i class="bi bi-circle"></i><span><?= $texts['manage_part_time_applicant'] ?></span>
          </a>
        </li>
      </ul>
    </li><!-- End Application Nav -->

    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#job_approval-nav" data-bs-toggle="collapse" href="#">
        <i class="bi bi-journal-text"></i><span><?= $texts['job_approval'] ?></span><i class="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul id="job_approval-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="<?= $path ?>/application_admins/jobs_approval_enable.php">
            <i class="bi bi-circle"></i><span><?= $texts['enable'] ?></span>
          </a>
        </li>
        <li>
          <a href="<?= $path ?>/application_admins/jobs_approval_on_hold.php">
            <i class="bi bi-circle"></i><span><?= $texts['on_hold'] ?></span>
          </a>
        </li>
        <li>
          <a href="<?= $path ?>/application_admins/jobs_approval_disable.php">
            <i class="bi bi-circle"></i><span><?= $texts['disable'] ?></span>
          </a>
        </li>
      </ul>
    </li><!-- End Jobs Approval Nav -->

    <li class="nav-item" id="user_administration" style="display: none;">
      <a class="nav-link collapsed" data-bs-target="#user_admintration-nav" data-bs-toggle="collapse" href="#">
        <i class="bi bi-journal-text"></i><span><?= $texts['user_administration'] ?></span><i class="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul id="user_admintration-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="<?= $path ?>/application_admins/admins.php">
            <i class="bi bi-circle"></i><span><?= $texts['manage_admin'] ?></span>
          </a>
        </li>
      </ul>
    </li><!-- End User Administration Nav -->

    <li class="nav-item">
      <a class="nav-link collapsed" href="<?= $path ?>/application_admins/change_password_admin.php">
        <i class="bi bi-grid"></i>
        <span><?= $texts['change_password'] ?></span>
      </a>
    </li><!-- End Change Password Nav -->

  </ul>

</aside><!-- End Sidebar-->