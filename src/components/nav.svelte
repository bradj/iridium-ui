<script>
  import { url } from '@sveltech/routify'

  let menuIsVisible = false;
  const activeClass = "is-active"
  let burgerStyle = "navbar-burger burger";
  let menuStyle = "navbar-menu";

  function burgerClick() {
      let idx = burgerStyle.indexOf(activeClass);

      if (idx > -1) {
          hideMenus();
      } else {
          showMenus();
      }
  }

  function hideMenus() {
      burgerStyle = burgerStyle.replace(activeClass, '');
      menuStyle = menuStyle.replace(activeClass, '');
  }

  function showMenus() {
      burgerStyle = `${burgerStyle} ${activeClass}`;
      menuStyle = `${menuStyle} ${activeClass}`;
  }
</script>

<nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href={$url('/')}>
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="blah">
        </a>

        <a role="button" class={burgerStyle} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" on:click={burgerClick}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class={menuStyle}>
        <div class="navbar-start">
            <a class="navbar-item" href={$url('/')}>
                My Feed
            </a>
        </div>

        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
            <a class="button is-primary" href={$url('/admin')}>
                <strong>Admin</strong>
            </a>
            <a class="button" href={$url('/user')}>
                Profile
            </a>
            </div>
        </div>
        </div>
    </div>
</nav>