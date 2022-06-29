<script lang="ts">
	import { onMount } from 'svelte';
	import Nav from '../lib/Nav.svelte';

	let ready: boolean = false;
	onMount(() => (ready = true));
</script>

<Nav />
<div class="dragbar" />

{#if ready}
	<slot />
{/if}

<style>
	.dragbar {
		-webkit-app-region: drag;
		position: absolute;
		z-index: 100;
		height: 40px;
		width: 100%;
	}
</style>
