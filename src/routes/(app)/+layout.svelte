<script lang="ts">
	import { env } from '$env/dynamic/public';
	let { children } = $props();
</script>

<svelte:head>
	<title>Josh McKearin</title>
</svelte:head>

<header
	class="sticky p-2 top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="flex">
		<a href="/" class="font-bold text-lg mix-blend-difference">
			{env.PUBLIC_PROJECT_NAME}
		</a>
	</div>
</header>
{@render children()}
