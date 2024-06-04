<script lang="ts">
	const { title, description }: { title: string; description: string } = $props();
</script>

<div class="max-w-4xl mx-auto mt-16">
	<p class="text-2xl md:text-4xl font-bold text-center text-black">{title}</p>
	<p class="text-base text-left md:text-center text-gray-600 leading-relaxed mt-4">
		{description}
	</p>
</div>
