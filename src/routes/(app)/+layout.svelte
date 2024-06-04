<script lang="ts">
	import { env } from '$env/dynamic/public';
	let { children } = $props();
</script>

<svelte:head>
	<title>Josh McKearin</title>
</svelte:head>

{@render children()}
