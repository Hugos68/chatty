<script lang="ts">
import { enhance } from "$app/forms";
</script>

<h1 class="h1">Sign In</h1>

<form method="post" use:enhance>
    <h2 class="h2">Choose a provider:</h2>
    <button name="provider" value="discord"> Discord</button>
    <button name="provider" value="google">Google</button>
    <button name="provider" value="github">Github</button>
</form>