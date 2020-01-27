<script>
    import { goto } from '@sveltech/routify';
    import Iridium from 'lib/api'
    import Log from 'lib/log'

    let username = null;
    let password = null;
    let errMsg = null;

    async function closeNotification(e) {
        errMsg = null;
    }

    async function handleClick(e) {
        let err = await Iridium.login(username, password);

        if (!err) {
            $goto('/');
            return;
        } 

        Log.debug(`Login error`, err);

        if (err.Error) {
            errMsg = err.Error;
            return;
        }

        errMsg = 'There was an error processing your login request. Please try again.';
    }
</script>

<div class="columns is-vcentered is-centered">
    <div class="column is-one-quarter">
        <div class="notification is-danger is-light" class:is-hidden={!errMsg}>
            <button class="delete" on:click={closeNotification}></button>
            {errMsg}
        </div>
        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="username" placeholder="username" bind:value={username}>
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password" bind:value={password}>
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success" on:click={handleClick}>
                    Login
                </button>
            </p>
        </div>
    </div>
</div>