<template>
	<view class="longinBox">
		<view class="longinTxt">
			登录后继续操作
		</view>
		<view style="margin-top: 30px; margin-bottom: 20px;">
			<uni-easyinput v-model="cellPhone" placeholder="请输入手机号"  ></uni-easyinput>
		</view>
		<view class="indexBox">
			<uni-easyinput v-model="verification" placeholder="请输入验证码" ></uni-easyinput>
			<view class="yanzhengm">
				获取验证码
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cellPhone:"",
				verification:''
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.longinBox{
		width: calc(100vw - 90px);
		height: calc(100vh - 150px);
		padding: 100px 45px 50px;
	}
	.longinTxt{
		width: 154px;
		height: 30px;
		opacity: 1;
		font-size: 22px;
		font-family: PingFang SC, PingFang SC-Bold;
		font-weight: 700;
		text-align: center;
		color: #000000;
	}
	.indexBox{
		position: relative;
	}
	.yanzhengm{
		width: 80px;
		height: 30px;
		border-left: 1px solid #C9C9C9;
		color: #C9C9C9;
		line-height: 30px;
		padding-left: 10px;
		position: absolute;
		top:10px;
		right: 20px;
	}
	
</style>
