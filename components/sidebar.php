<aside id="sidebar" class="sidebar">

  <ul class="sidebar-nav" id="sidebar-nav">

    <li class="nav-item">
      <a class="nav-link " href="index.php">
        <i class="bi bi-grid"></i>
        <span>Dashboard</span>
      </a>
    </li><!-- End Dashboard Nav -->

    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
        <i class="bi bi-journal-text"></i><span>User Administration</span><i class="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="<?= $path ?>/user_administration/users.php">
            <i class="bi bi-circle"></i><span>กำหนดชื่อผู้ใช้</span>
          </a>
        </li>
        <li>
          <a href="<?= $path ?>/user_administration/groups.php">
            <i class="bi bi-circle"></i><span>กำหนดกลุ่มผู้ใช้</span>
          </a>
        </li>
        <li>
          <a href="<?= $path ?>/user_administration/menus.php">
            <i class="bi bi-circle"></i><span>กำหนดเมนู</span>
          </a>
        </li>
        <li>
          <a href="<?= $path ?>/user_administration/menus_group.php">
            <i class="bi bi-circle"></i><span>กำหนดเมนูกลุ่มผู้ใช้</span>
          </a>
        </li>
        <li>
          <a href="<?= $path ?>/user_administration/menus_user.php">
            <i class="bi bi-circle"></i><span>กำหนดเมนูผู้ใช้</span>
          </a>
        </li>
      </ul>
    </li><!-- End User Administration Nav -->

  </ul>

</aside><!-- End Sidebar-->