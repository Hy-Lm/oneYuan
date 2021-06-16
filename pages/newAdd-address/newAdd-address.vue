<template>
	<view class="newAdd">
		<view class="newAdd-info">
			<view>
				<label for="name">收件人</label>
				<input type="text" id="name" value="" placeholder="姓名" />
			</view>
			<view>
				<label for="tel">电话</label>
				<input type="text" id="tel" value="" placeholder="手机号" />
			</view>
			<view>
				<label for="address">地址</label>
				<input type="text" id="address" value="" placeholder="请输入收货地址" />
			</view>
		</view>
		<view class="newAdd-btn">
			保存并使用
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page {
		flex: 1;
		opacity: 1;
		background: #f9f7f7;
		// position: relative;
	}
	.newAdd-btn{
		width: 80%;
		text-align: center;
		padding: 5px 0;
		height: 30px;
		line-height: 30px;
		margin: 35px auto;
		font-size: 16px;
		font-family: PingFang SC, PingFang SC-Regular;
		font-weight: 400;
		color: #ffffff;
		opacity: 1;
		background: #accb69;
		border-radius: 20px;
	}
	.newAdd-info{
		padding: 23px 11px 0 30px;
		view{
			display: flex;
			margin-bottom: 14px;
			label{
				width: 50px;
				margin-right:10px ;
				font-size: 14px;
			}
			input{
				padding-bottom: 10px;
				font-size: 14px;
				flex: 1;
				border-bottom: 1px solid #E8E6E6;
			}
		}
	}
</style>
