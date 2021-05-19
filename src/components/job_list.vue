<template>
	<div class="jobItems">
		<h1>{{itemObj.title}}</h1>
		<p>{{itemObj.h2_txt}}</p>
		<ul class="areaUl">
			<li v-for="n in itemObj.area ">{{n}}</li>
		</ul>
		<p>{{itemObj.hr.hr_txt}}</p>
		<span>{{itemObj.salary}}</span>
	</div>
</template>
<script>
	export default {
		name: 'job_list',
		data() {
			return {
				msg: '职位列表'
			}
		},
		// itemObj接收参数
		props: ['itemObj']
	}
</script>
<style scoped>
	.jobItems {
		padding: .3rem 0;
		border-bottom: .1rem solid #eaeaea;
		position: relative;
	}

	.areaUl {
		height: .3rem;
		margin: 0 0 .2rem .2rem;
	}

	.areaUl li {
		float: left;
		margin-right: .1rem;
		font-size: .1rem;
		background: #f2f3f5;
		padding: .02rem .07rem;
		color: #666;
	}

	.jobItems h1 {
		font-size: .25rem;
		font-weight: bold;
		margin: 0 0 .1rem .2rem;
		text-align: left;
	}

	.jobItems p {
		font-size: .2rem;
		color: #666;
		margin: 0 0 .1rem .2rem;
		text-align: left;
	}

	.jobItems label {
		font-size: .2rem;
		color: #666;
		margin: 0 0 .1rem .2rem;
		text-align: left;
	}

	.jobItems span {
		font-size: .25rem;
		color: #14c1bb;
		position: absolute;
		top: .3rem;
		right: .3rem;
	}
</style>
