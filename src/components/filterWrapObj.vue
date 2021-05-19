<template>
	<div>
		<van-nav-bar
		  title="筛选条件"
		  left-text="返回"
		  left-arrow
		>
		<template #left>
		    <van-icon name="cross" size="18" @click='closeFilterMask'/>
		</template>
		</van-nav-bar>
		
		<div class="gridTitle">学历要求</div>
		<van-grid :column-num="3" :gutter="10">
		  <van-grid-item @click='itemBtnClick($event)' text="全部" />
		  <van-grid-item @click='itemBtnClick($event)' text="博士" />
		  <van-grid-item @click='itemBtnClick($event)' text="研究生" />
		  <van-grid-item @click='itemBtnClick($event)' text="本科" />
		  <van-grid-item @click='itemBtnClick($event)' text="大专" />
		</van-grid>
		
		<div class='gridTitle'>薪资待遇</div>
		<van-grid :column-num="3" :gutter="10">
		    <van-grid-item @click='itemBtnClick($event)' text="5-8k" />
		    <van-grid-item @click='itemBtnClick($event)' text="8k-10k" />
		    <van-grid-item @click='itemBtnClick($event)' text="10-15k" />
		    <van-grid-item @click='itemBtnClick($event)' text="15-20k" />
		    <van-grid-item @click='itemBtnClick($event)' text="50k" />
		</van-grid>
		
		<van-button type="default">取消</van-button>
		<van-button type="info">确认</van-button>
	</div>
</template>
<script>
	export default {
		name:'filterWrapObj',
		data(){
			return {
				msg:'筛选信息组件'
			}
		},
		methods: {
			closeFilterMask() {
				this.$emit('closeFilterMask')
			},
			itemBtnClick($e){
				// console.log($e.target.innerText);
				let _txt = $e.target.innerText;
				let _cls = $e.target.getAttribute('class');
				let _clsArr = _cls.split(' ');
				
				let _is = false;
				for(let i=0; i<_clsArr.length; i++){
					if(_clsArr[i] == 'van_grid_item_focus'){
						_clsArr.splice(i,1);
						_is = true;
						break;
					}
					_is = false;
				}
				if(!_is){
					_clsArr.push('van_grid_item_focus');
				}
				let _cls_txt = _clsArr.join(' ');
				$e.target.setAttribute('class',_cls_txt);
			}
		}
	}
</script>
<style scoped>
.gridTitle{
	padding: .2rem .2rem;clear: both;font-size: .3rem;font-weight: bold;
    text-align:left;
}
.gridTitle label{font-weight: normal;font-size: .2rem;padding: 0 10px;}
.filter_footer{
	text-align: center;margin-top: 1rem;
	width: 100%;
}
</style>