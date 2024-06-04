<script lang="ts">
	import Icon from '@iconify/svelte';
	import profileImage from '$lib/assets/profile.png';

	const {
		name,
		position,
		github,
		email
	}: { name: string; position: string; github: string; email: string } = $props();
</script>

<div class="w-full">
	<div class="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
		<div class="avatar mx-auto">
			<div class="h-32 shadow-xl rounded-full">
				<img src={profileImage} alt="Profile face" />
			</div>
		</div>
		<div class="text-center mt-5">
			<p class="text-xl sm:text-2xl font-semibold text-gray-900">
				{name}
			</p>
			<p
				class="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2 border-black"
			>
				{position}
			</p>
			<div class="flex align-center justify-center mt-4">
				<a
					class="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
					href={github}
				>
					<Icon icon="arcticons:github" />
					<span class="sr-only">Github</span>
				</a>
				<a
					class="text-xl m-1 p-1 sm:m-2 sm:p-2 text-cyan-500 hover:bg-cyan-500 rounded-full hover:text-white transition-colors duration-300"
					href="mailto:{email}"
				>
					<Icon icon="arcticons:spike-email" />
					<span class="sr-only">Email</span>
				</a>
			</div>
		</div>
	</div>
</div>
