<script lang="ts">
import { enhance } from "$app/forms";
</script>

<form method="post" use:enhance>
    <button name="provider" value="discord">Discord</button>
    <button name="provider" value="google">Google</button>
    <button name="provider" value="github">Github</button>
</form>