<template>
	<div>
		<van-tabbar v-model="active">
		  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
		  <van-tabbar-item icon="search">标签</van-tabbar-item>
		  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
		  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
	export default{
		name:'footer_bar',
		data(){
			return {
				msg:'footer_bar底部',
				active: 0
			}
		}
	}
</script>