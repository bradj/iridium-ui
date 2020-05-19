<script>
    import { goto } from '@sveltech/routify';
    import Iridium from 'lib/api'
    import Log from 'lib/log'

    let selectedFile = '...';

    async function handleChange(e) {
        if (e.target.files && e.target.files[0].name) {
            selectedFile = e.target.files[0].name;
        }
    }
</script>

<div class="columns is-vcentered is-centered">
    <div class="column is-one-quarter">
        <div class="file has-name">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" on:change={handleChange}>
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Choose a file…
              </span>
            </span>
            <span class="file-name">
              {selectedFile}
            </span>
          </label>
        </div>
    </div>
</div>
