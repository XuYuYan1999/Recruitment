<template>
	<div>
		<van-area
		:title="areaname" 
		:area-list="areaList"
		:visible-item-count=9
		@change='changeItem'
		@confirm='selectAreaBtn'
		@cancel='closeCityMaskFn'
		/>
	</div>
</template>
<script>
	import area from '../assets/area'
	// import { areaList } from '@vant/area-data';
	export default {
		name:'selectArea',
		data(){
			return {
				msg:'选择城市组件',
				areaList:area,
				areaname:'请选择省市区'
			}
		},
		methods: {
			changeItem(item) {
				// console.log(item.getValues())
				let val = item.getValues();
				this.areaname = val[0].name+'-'+
								val[1].name+'-'+
								val[2].name
			},
			selectAreaBtn(item){
				this.$emit('closeCityMaskFn',item[1].name);
			},
			closeCityMaskFn(item){
				this.$emit('closeCityMaskFn',item[1].name);
			}
		}
	}
</script>