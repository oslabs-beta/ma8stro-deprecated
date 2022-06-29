<script>
	export let data;
	data = data.data.result;
	console.log('data in route', data[0].metric);
</script>

<main>
	<div>testing</div>
	{JSON.stringify(data[0].metric)}
</main>

<style>
</style>
