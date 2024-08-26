<script lang="ts">
import "../app.css";
const { children } = $props();
</script>

<header class="bg-surface-100-900 h-24 flex items-center sticky top-0">
    <nav class="max-w-7xl mx-auto w-full flex justify-between px-8">
        <a class="anchor text-xl font-bold" href="/">DBDatabase</a>
        <div class="flex gap-4 items-center">
            <a class="anchor text-lg" href="/survivors">Survivors</a>
            <a class="anchor text-lg" href="/killers">Killers</a>
            <a class="anchor text-lg" href="/sign-in">Sign In</a>
        </div>
    </nav>
</header>

<main class="max-w-7xl mx-auto min-h-[calc(100dvh-6rem)] p-8">
    {@render children()}
</main>

<footer class="bg-surface-100-900 py-16">
    <div class="max-w-7xl mx-auto px-8">
        <p class="text-center font-bold">All rights reserved @ 2024-PRESENT</p>
    </div>
</footer>

