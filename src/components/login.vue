<!-- 我要招聘页面 -->

<template>
	<div class="body_sty">
		<!-- 轮播图 -->
		<van-swipe class="loginMask" :autoplay="3000" indicator-color="blue">
		  <van-swipe-item class='loginMaskImg loginBg_1'></van-swipe-item>
		  <van-swipe-item class='loginMaskImg loginBg_2'></van-swipe-item>
		  <van-swipe-item class='loginMaskImg loginBg_3'></van-swipe-item>
		</van-swipe>
		
		<van-button class= 'van_btn' type="primary">我要招人</van-button>
		<van-button class= 'van_btn' type="primary" to='index_joblist'>我要应聘</van-button>
	</div>
</template>
<script>
	export default {
		name: 'login',
		data() {
			return {
				msg: '我要招聘页面'
			}
		}
	}
</script>
<style scoped>
.body_sty {
	height: 100%;
}
.loginMask{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
.loginMaskImg {
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-position: 0 0 ;
}
.loginBg_1{
	background-image: url('../assets/loginMask/1.jpg');
}
.loginBg_2{
	background-image: url('../assets/loginMask/2.jpg');
}
.loginBg_3{
	background-image: url('../assets/loginMask/3.jpg');
}
.van_btn{
	margin: 510px 12px;
}

</style>
