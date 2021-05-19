<template>
	<div>
		<!-- 求职状态按钮 -->
		<van-nav-bar 
			left-arrow 
			@click-left="closeMaskFn" />
		<h1 class="titleSty">管理求职意向</h1>

		<div class="navState">
			<van-nav-bar 
				left-text="求职状态" 
				:right-text=jobStateObj 
				@click-right="openJobStateFn" />
		</div>

		<!-- 求职状态列表 -->
		<van-action-sheet 
			v-model="show" 
			:actions="actions" 
			title='求职状态'
			@select="onSelect" />
			
		<!-- 求职期望 -->
		<div class="expect">
			<van-nav-bar
				left-text="求职期望" 
				@click-left="addJobStateFn" />
		</div>
		
		<div class='div_p'>求职期望的不同，推荐的职位也会不同</div>
		
		<div class='jobState_footer'>
			<van-button 
				@click='confirmJobStateBtnFn'
				style="width:3rem;" 
				color="#14c1bb">添加期望</van-button>
		</div>
	</div>
</template>
<script>
	import { Toast } from 'vant';
	export default {
		name: 'jobState',
		data() {
			return {
				msg: '管理求职意向页面',
				jobStateObj: '请选择>>',
				show: false,
				actions: [
				    { name: '离职-随时到岗',is_state: 0 },
				    { name: '在职-月内到岗',is_state: 1 },
				    { name: '在职-考虑机会',is_state: 2 },
				    { name: '在职-暂不考虑',is_state: 3 }
				],
			}
		},
		methods: {
			closeMaskFn() {
				// $emit子组件调用父组件的方法并传递数据
				this.$emit('closeFilterMask');
			},
			openJobStateFn(){
				this.show = true;
			},
			onSelect(item) {
				// console.log(item.name)
				this.jobStateObj = item.name + '>>';
				this.show = false;
				
			},
			// 添加求职期望
			addJobStateFn(){
				console.log( '添加求职期望xxx' )
			},
			// 确认求职期望
			confirmJobStateBtnFn(){
				console.log( '确认求职期望 xxx' )
			}
			
		},
	}
</script>
<style>
	.titleSty {
		font-size: .3rem;
		font-weight: bold;
		margin-left: .3rem;
		/* white-space规定段落中的文本不进行换行 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: left;
	}
	 
	.div_p{
		font-size: .1rem;color: #969696;margin-left: .25rem;
	    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
	     text-align:left;
	}
	.jobState{
		white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
	}
	.jobState_footer{text-align: center;margin: 2rem 0;}
	
</style>
