<template>
	<view class="newAdd">
		<view class="newAdd-top">
			<view @click="back()">
				<image src="../../static/箭头(1).png" mode=""></image>
			</view>
			<view>添加收货地址</view>
			<view @click="newAddBtn">保存</view>
		</view>
		<view class="newAdd-info">
			<view>
				<label for="name">收件人</label>
				<input type="text" id="name" value="" placeholder="请输入姓名" />
			</view>
			<view>
				<label for="tel">手机号码</label>
				<input type="text" id="tel" value="" placeholder="请输入手机号" />
			</view>
			<view class="imgssss">
				<label for="address">所在地区</label>
				<input type="text" id="address" value="" placeholder="请输入收货地址" />
				<image src="../../static/rightjian.png" mode=""></image>
			</view>
			<view>
				<label for="address">详细地址</label>
				<input type="text" id="address" value="" placeholder="请输入收货地址" />
			</view>
			<view class="kaiguan">
				<label for="address">设为默认</label>
				<switch :checked='checked' />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked:false
			}
		},
		methods: {
			back(){
				// 返回
				uni.navigateBack({
				    delta: 1,
				    // animationType: 'pop-out',
				    animationDuration: 200
				});
			},
			newAddBtn(){
				uni.redirectTo({
					url:"/pages/new-address/new-address"
				})
			}
		}
	}
</script>

<style lang="scss">
	
page {
		flex: 1;
		opacity: 1;
		// background: #f9f7f7;
		// position: relative;
	}
	.newAdd-top{
		padding: 0 15px;
		margin-top: 11px;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		&>view:nth-child(1){
			width: 7px;
			height: 14px;
			&>image{
				width: 100%;
				height: 100%;
			}
		}
		&>view:nth-child(2){
			height: 25px;
			opacity: 1;
			font-size: 18px;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			text-align: left;
			color: #000000;
		}
		&>view:nth-child(3){
			height: 22px;
			opacity: 1;
			font-size: 16px;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			text-align: left;
			color: #333333;
		}
	}
	.newAdd-info{
		margin-top: 30px;
		padding: 0 15px 0 15px;
		box-sizing: border-box;
		.imgssss{
			&>image{
				width: 6px;
				height: 11px;
			}
		}
		view{
			display: flex;
			// margin-bottom: 14px;
			padding: 11px 0 ;
			border-bottom: 1px solid #E8E6E6;
			box-sizing: border-box;
			label{
				width: 60px;
				margin-right:15px ;
				font-size: 14px;
				text-align-last: justify;
			}
			input{
				// padding-bottom: 10px;
				font-size: 14px;
				flex: 1;
				
			}
		}
		.uni-input-input, .uni-input-placeholder{
			font-size: 14px;
		}
		.kaiguan{
			justify-content: space-between;
			align-items: center;
			padding: 5px 0;
		}
	}
	
</style>
