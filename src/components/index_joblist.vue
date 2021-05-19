<!-- 工作列表首页 -->

<template>
	<div>
		<!-- 头部 -->
		<van-sticky>
			<!-- <van-icon name="arrow-left" /> -->
			<div class="title_boss">
				<van-nav-bar class='bar_sty' left-text="高仿boss直聘APP" size='30'>
					<van-icon @click='jobStateOpen()' color="#fff" size=".4rem" name="plus" slot='right' />
					<van-icon color="#fff" size=".4rem" name="search" slot='right' />
				</van-nav-bar>
			</div>
			<!-- 头部菜单 -->
			<div class="title_menu">
				<van-button size="mini" class='miniBtn' @click='notifyFnBtn'>推荐</van-button>
				<van-button size="mini" class='miniBtn' @click='notifyFnBtn'>最新</van-button>
				<van-button size="mini" class='filterBtn'
				@click='openFilterMaskFn'>筛选</van-button>
				<van-button size="mini" class='filterBtn'
				@click='openMaskFn'>{{defaultCity}}</van-button>
			</div>
		</van-sticky>

		<!-- 提示信息 -->
		<notify v-show="notify_show"></notify>
		
		<!-- 选择城市组件 -->
		<div :class="maskClassName"
			v-show="is_cityMaskObj"
			@touchmove.prevent
			@mousewheel.prevent>
			<selectArea @closeCityMaskFn='hideMaskFn($event)'></selectArea>
		</div>
		
		<!-- 筛选信息组件 -->
		<div v-show="is_filter"
			:class="filterClassName"
			@touchmove.prevent
			@mousewheel.prevent>
			<filterWrapObj @closeFilterMask='closeFilterMaskFn'></filterWrapObj>
		</div>
		<!-- 职位列表 -->
		<div>
			<!-- 下拉刷新 -->
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
				<!-- itemObj用来传参 -->
				<job_list v-for='(n,inx) in jobData' :key=inx :itemObj=n>
				</job_list>
			</van-pull-refresh>
		</div>

		<!-- 求职意向组件 -->
		<div v-show='is_jobState'
			:class="jobStateClassName"
			@touchmove.prevent
			@mousewheel.prevent>
			<jobState @closeFilterMask='jobStateClose'></jobState>
		</div>

		<!-- footer_bar底部 -->
		<footer_bar></footer_bar>
	</div>
</template>
<script>
	import { Toast } from 'vant';
	import job_list from './job_list'
	import footer_bar from './footer_bar'
	import jobState from './jobState'
	import notify from './notify'
	import selectArea from './selectArea'
	import filterWrapObj from './filterWrapObj'
	import '../assets/reset_vant.css'
	export default {
		name: 'index_joblist',
		data() {
			return {
				msg: '工作列表页面',
				is_jobState:false,
				notify_show:false,
				isLoading: false,
				is_cityMaskObj:false,
				is_filter:false,
				jobStateClassName:'mask_animation',
				maskClassName:'mak_change',
				filterClassName:'mak_filter',
				defaultCity:'城市',
				jobData: [
					{
						title: 'web前端',
						h2_txt: '什么祥 未融资',
						area: ['沈阳 和平区', '经验不限', '本科'],
						hr: {
							img_avatar: '',
							hr_txt: '海峰-招聘者'
						},
						salary: '5-6K'
					}, {
						title: '软件开发工程师',
						h2_txt: '牛万科技 未融资',
						area: ['沈阳 沈河区', '1-3年', '学历不限'],
						hr: {
							img_avatar: '',
							hr_txt: '海峰-招聘者'
						},
						salary: '3-8K'
					}, {
						title: '前端工程师',
						h2_txt: '成林健康科技 未融资',
						area: ['沈阳 皇姑区', '经验不限', '本科'],
						hr: {
							img_avatar: '',
							hr_txt: '马xx-从事招聘专员'
						},
						salary: '5-6K'
					}, {
						title: '前端开发工程师',
						h2_txt: '师福教育 未融资',
						area: ['沈阳 沈河区', '3-5年', '学历不限'],
						hr: {
							img_avatar: '',
							hr_txt: '杨女士 - 人事'
						},
						salary: '5-8K'
					}, {
						title: '前端工程师',
						h2_txt: '成林健康科技 未融资',
						area: ['沈阳 皇姑区', '经验不限', '本科'],
						hr: {
							img_avatar: '',
							hr_txt: '马xx-从事招聘专员'
						},
						salary: '5-6K'
					}, {
						title: '前端技术经理',
						h2_txt: '星擎科技 未融资',
						area: ['沈阳 铁西区', '5-10年', '本科'],
						hr: {
							img_avatar: '',
							hr_txt: '潘舒-CEO'
						},
						salary: '6-11K'
					}, {
						title: 'web前端',
						h2_txt: '什么祥 未融资',
						area: ['沈阳 和平区', '经验不限', '本科'],
						hr: {
							img_avatar: '',
							hr_txt: '海峰-招聘者'
						},
						salary: '5-6K'
					}
				]
			}
		},
		components: {
			job_list,
			footer_bar,
			jobState,
			notify,
			selectArea,
			filterWrapObj
		},
		methods: {
			// 求职状态管理
			jobStateOpen() {
				this.is_jobState = true;
				this.jobStateClassName = 'mask_animation animation_open';
				let _mask = document.querySelector('.mask_animation');
				_mask.addEventListener('webkitAnimationEnd',()=>{
					this.is_jobState = true;
				})
			},
			jobStateClose(){
				this.jobStateClassName = 'mask_animation animation_close';
				let _mask = document.querySelector('.mask_animation');
				_mask.addEventListener('webkitAnimationEnd',()=>{
					this.is_jobState = false;
				});
			},
			// 点击刷新按钮,实现刷新
			notifyFnBtn(){
				this.notify_show = true;
				let _rect = document.querySelector('.notify');
				_rect.addEventListener('webkitAnimationEnd',()=>{
					this.notify_show = false;
				},false);
				
			},
			// 下拉刷新
			onRefresh() {
			  setTimeout(() => {
				Toast('刷新成功');
				this.isLoading = false;
				this.count++;
			  }, 1000);
			},
			// 点击城市,打开城市面板
			openMaskFn(){
				this.is_cityMaskObj = true;
				this.maskClassName = 'mak_change cityEditWrapObj_open';
				let _mask = document.querySelector('.mak_change');
				_mask.addEventListener('webkitAnimationEnd',()=>{
					this.is_cityMaskObj = true;
				});
			},
			// 隐藏城市面板
			hideMaskFn(_cityName){
				// console.log(_cityName);
				this.defaultCity = _cityName;
				
				this.maskClassName = 'mak_change cityEditWrapObj_close';
				let _mask = document.querySelector('.mak_change');
				_mask.addEventListener('webkitAnimationEnd',()=>{
					this.is_cityMaskObj = false;
				});
			},
			// 打开筛选面板
			openFilterMaskFn(){
				this.filterClassName = 'mak_filter filter_open';
				this.is_filter = true;
				let _mask = document.querySelector('.mak_filter');
				_mask.addEventListener('webkitAnimationEnd',()=>{
					this.is_filter = true;
				});
			},
			// 关闭筛选面板
			closeFilterMaskFn(){
				this.filterClassName = 'mak_filter filter_close';
				let _mask = document.querySelector('.mak_filter');
				_mask.addEventListener('webkitAnimationEnd',()=>{
					this.is_filter = false;
				});
			}
		}
	}
</script>
<style scoped>
	.bar_sty {
		background-color: #14c1bb;
	}

	.miniBtn {
		float: left;
		border: 0;
		margin: .1rem 0 0 0;
	}

	.van-icon-plus:before {
		margin-right: .1rem;
		border-right: 1px solid #c1c1c1;
		padding-right: .1rem;
	}


	.filterBtn {
		float: right;
		border: 0;
		margin: .1rem .1rem 0 0;
		background-color: #f2f3f5;
	}

	.title_menu {
		background: #fff;
		text-align: left;
		height: .5rem
	}

	.mask_animation {
		width: 100%;
		height: 100%;
		background: #fff;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 3333;
	}
	
	.animation_open {
		animation: open_Animation .5s;
	}

	.animation_close {
		animation: close_Animation .5s;
	}

	@keyframes open_Animation {
		from {
			width: 0;
			left: 100%;
		}

		to {
			width: 100%;
			left: 0;
		}
	}

	@keyframes close_Animation {
		from {
			width: 100%;
			left: 0;
		}

		to {
			width: 0;
			left: 100%;
		}
	}
	
	.mak_change {
		width: 100%;
		height: 100%;
		background: #fff;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 3333;
	}
	
	.cityEditWrapObj_open {
		animation: cityEditWrapObjAnimation_open .5s;
	}
	
	.cityEditWrapObj_close {
		animation: cityEditWrapObjAnimation_close .5s;
	}
	
	@keyframes cityEditWrapObjAnimation_open{
		from{height: 0;}
		to{height: 100%;}
	}
	
	@keyframes cityEditWrapObjAnimation_close{
		from{height: 100%;}
		to{height: 0;}
	}
		
	.mak_filter {
		width: 100%;height: 100%;background: #fff;position: absolute;left: 0;bottom: 0;
		z-index: 3333;
	}
	.filter_open{
		animation: cityEditWrapObjAnimation_open .7s;
	}
	.filter_close{
		animation: cityEditWrapObjAnimation_close .7s;
	}
	@keyframes cityEditWrapObjAnimation_open{
		from {height:0;}
		to {height:100%;}
	}
	@keyframes cityEditWrapObjAnimation_close{
		from {height:100%;}
		to {height:0;}
	}
</style>
