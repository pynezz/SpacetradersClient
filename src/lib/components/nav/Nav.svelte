<script lang="ts">
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';
	import { authStore } from '$lib/stores/customStores';

	let menuVisible = writable(false);

	const toggleMenu = () => {
		$menuVisible = !$menuVisible;
	};

	const logOut = () => {
		authStore.set(false);
		goto('/');
	};


	const btn = 'flex flex-col-reverse justify-center items-center h-20 font-mono hover:scale-105 focus:scale-105 hover:font-black hover:cursor-pointer focus:font-black focus:cursor-pointer text-white transition-all ease-in-out delay-10';
</script>

<nav class="top-0 container
        flex justify-between px-4 p-2 text-white
        mb-4
        mx-auto bg-transparent backdrop-blur-lg border-b border-b-teal-400/50 drop-shadow-md sticky z-10 bg-slate-800 rounded-b-[4px]
        {$menuVisible ? "overflow-hidden" : ""}
        ">
	<div id="Logo">
		<a href="/"><h3 class="text-2xl font-semibold font-mono">Spacetraders</h3></a>
	</div>

	<!-- nav big screen -->
	<div id="burger" class="hidden space-x-8 lg:block">
		{#if $authStore}
			<a href="/home"
				class="hover:underline hover:cursor-pointer mix-blend-color-burn text-white">Hjem</a>
			<a href="/explore"
				class="hover:underline hover:cursor-pointer mix-blend-color-burn text-white">Utforsk</a>
			<button class="hover:underline hover:cursor-pointer mix-blend-color-burn text-secondary"
				on:click={logOut}>Logg ut</button>
		{:else}
			<a href="/login" class="hover:underline hover:cursor-pointer mix-blend-color-burn text-white">Logg inn</a>
		{/if}
	</div>

	<!-- nav small screen -->
	<div class="flex lg:hidden cursor-pointer" on:click={toggleMenu} on:keypress={toggleMenu}>
		<div class="space-y-2 pt-1">
			<div class="w-8 h-0.5 bg-gray-200" />
			<div class="w-8 h-0.5 bg-gray-200" />
			<div class="w-8 h-0.5 bg-gray-200" />
		</div>
	</div>
</nav>

<div
	id="burgerMenu"
	class="{$menuVisible
		? 'flex'
		: 'hidden'} focus-within fixed top-0 left-0 m-0 z-10 pt-20 w-full h-full flex-col text-center bg-teal-950/60 backdrop-blur-md transition-all ease-in-out delay-10"
>
	<div
		class=" cursor-pointer fixed top-0 right-0 flex items-center justify-center p-5 m-5 w-5 h-5 text-white rounded-sm outline outline-1 focus:outline-cyan-400 hover:bg-secondary-off hover:outline-cyan-400 transition duration-100 hover:bg-opacity-10 hover:backdrop-blur-md
		bg-green-950/50"
		on:click={toggleMenu}
		on:keypress={toggleMenu}
	>
		<p class="font-medium">x</p>
	</div>
	<ul id="mobileMenu">
		{#if $authStore}
			<li><a href="/home" class={btn} on:click={toggleMenu} on:keypress={toggleMenu}>Hjem</a></li>
			<li>
				<a
					href="/"
					class={btn}
					on:click={() => {
						toggleMenu();
						logOut();
					}}
					on:keypress={() => {
						toggleMenu();
						logOut();
					}}>Logg ut</a
				>
			</li>
		{:else}
			<li>
				<a href="/login" class={btn} on:click={toggleMenu} on:keypress={toggleMenu}>Logg inn</a>
			</li>
		{/if}
	</ul>
</div>
