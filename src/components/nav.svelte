<script>
    import { url } from '@sveltech/routify'
    import { onMount } from 'svelte';
    import Log from 'lib/log';
    import Store from 'lib/store';

    const activeClass = "is-active";
    let activeSession = false;
    let burgerStyle = "navbar-burger burger";
    let menuStyle = "navbar-menu";

    Store.activeSession.subscribe(value => {
        Log.debug('activeSession sub', value);
        activeSession = value === true;
    });

    function burgerClick() {
        if (burgerStyle.indexOf(activeClass) > -1) {
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
                {#if activeSession}
                    <a class="button is-primary" href={$url('/admin')}>
                        <strong>Admin</strong>
                    </a>
                    <a class="button" href={$url('/user')}>
                        Profile
                    </a>
                    <a class="button" href={$url('/logout')}>
                        Logout
                    </a>
                {:else}
                    <a class="button" href={$url('/login')}>
                        Login
                    </a>
                {/if}
            </div>
        </div>
        </div>
    </div>
</nav>