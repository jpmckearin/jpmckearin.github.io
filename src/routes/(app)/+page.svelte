<script>
	import Card from '$lib/components/ui/card.svelte';
	import About from '$lib/components/ui/about.svelte';

	import {
		name,
		position,
		github,
		email,
		aboutTitle as title,
		aboutDescription as description
	} from '$lib/assets/data';
	import Skills from '$lib/components/ui/skills.svelte';
</script>

<div class="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
	<div data-aos="fade-down" data-aos-duration="800">
		<Card {name} {position} {github} {email} />
	</div>
	<div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
		<About {title} {description} />
		<Skills />
	</div>
</div>
