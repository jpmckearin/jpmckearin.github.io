<script>
	import Card from '$lib/components/ui/card.svelte';
	import About from '$lib/components/ui/about.svelte';
	import Skills from '$lib/components/ui/skills.svelte';
	import Experience from '$lib/components/ui/experience.svelte';
</script>

<div class="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
	<div class="animate-fadeInUp">
		<div data-aos="fade-down" data-aos-duration="800">
			<!-- <div> -->
			<Card />
		</div>
		<div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
			<!-- <div> -->
			<About />
			<Skills />
			<Experience />
		</div>
	</div>
</div>
