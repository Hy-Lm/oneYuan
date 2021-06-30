<template>
	<view class="mySet">
		<!-- 我的设置 -->
		<view class="mySet-info">
			<view class="mySet-info-img">
				<image src="../../static/52aa34ff58bffd97658f3402c79dac8.png" mode=""></image>
			</view>
			<view class="mySet-info-con">
				<view class="mySet-info-con-list">
					<view class="con-list-con">
						<view>
							昵称 :
						</view>
						<input  :focus="isActiveFocus" @blur="isActiveBlur" class=" con-list-con-ip" type="text"  :value="isActiveValue"   confirm-type="done"/>
					</view>
					<view class="con-list-img" @click="mysetIsActive">
						<image src="../../static/b350e03b822fd6e1c8b5303a2ca4a52.png" mode=""></image>
					</view>
				</view>
				<view class="mySet-info-con-list">
					<view class="con-list-con">
						<view>
							手机号 :
						</view>
						<input :focus="isPhoneFocus" @blur="isPhoneBlur" class=" con-list-con-ip" type="text"  :value="isPhoneValue"   confirm-type="done"/>
					</view>
					<view class="con-list-img" @click="mysetPhone">
						<image src="../../static/b350e03b822fd6e1c8b5303a2ca4a52.png" mode=""></image>
					</view>
				</view>
				<view class="mySet-info-con-list" @click="address">
					<view class="con-list-con">
						<view>
							我的收货地址
						</view>
					</view>
					<view class="con-list-img con-list-imgs">
						<image src="../../static/arrows.png" mode=""></image>
					</view>
				</view>
				<view class="mySet-info-con-list">
					<view class="con-list-con">
						<view>
							清除缓存
						</view>
					</view>
					<view class="con-list-con-s">
						<view class="con-list-con-ss">
							21.68MB
						</view>
						<view class="con-list-img con-list-imgs">
						<image src="../../static/arrows.png" mode=""></image>
						</view>
					</view>
					
				</view>
			</view>
		</view>
		<view class="mySet-cal">
			客服电话：157-3562-9946
		</view>
		<view class="mySet-btn" @click="mySetBtnDel">
			退出账号
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isActiveValue:"益园养车",
				isActiveFocus:false,
				isPhoneValue:"15735629946",
				isPhoneFocus:false
			}
		},
		methods: {
			mysetIsActive(){
				// 点击切换是否禁用  昵称
				this.isActiveFocus=true
			},
			isActiveBlur(){
				// 失去焦点
				console.log('isActiveBlur')
			},
			mysetPhone(){
				// 手机号
				this.isPhoneFocus=true
			},
			isPhoneBlur(){
				// 失去焦点
				console.log('isPhoneBlur')
			},
			mySetBtnDel(){
				console.log('退出账号')
			},
			address(){
				// 跳转到收货地址
				uni.navigateTo({
					url:"/pages/new-address/new-address"
				})
			},
		}
	}
</script>

<style lang="scss">
	.con-list-con-s{
		display: flex;
	}
	.con-list-con-ss{
		opacity: 1;
		font-size: 12px;
		font-family: PingFang SC, PingFang SC-Regular;
		font-weight: 400;
		color: #515151;
		margin-right: 14px;
	}
	
	.mySet-btn{
		// margin: 0 32px 28px;
		width: 80%;
		text-align: center;
		line-height: 38px;
		height: 38px;
		opacity: 1;
		border: 1px solid #ff0000;
		border-radius: 20px;
		font-size: 16px;
		color: #ff0e00;
		position: fixed;
		left: 10%;
		bottom: 28px;
	}
	
	.mySet-cal{
		// width: 100%;
		margin:10px 114px;
		width: 150px;
		height: 21px;
		opacity: 1;
		font-size: 12px;
		font-family: PingFang SC, PingFang SC-Regular;
		font-weight: 400;
		text-align: left;
		color: #2c2c2c;
		line-height: 21px;
		letter-spacing: 0px;
	}
	page{
		flex: 1;
		opacity: 1;
		background: #f9f7f7;
	}
	.mySet {
		padding: 11px;
		.mySet-info {
			background-color: #FFFFFF;
			display: flex;
			flex-direction: column;
			align-items: center;
			.mySet-info-con {
				width: 100%;
				padding: 20px 25px;
				padding-bottom: 5px;
				box-sizing: border-box;
				.mySet-info-con-list {
					width: 100%;
					display: flex;
					justify-content: space-between;
					height: 37px;
					line-height: 37px;
					// padding-top: 13px;
					padding-bottom: 4px;
					box-sizing: border-box;
					border-bottom: 1px solid #DCDCDC;
					&:last-child{
						border: none;
					}
				}
			}
			.con-list-con{
				flex: 1;
				display: flex;
				align-items: center;
				.con-list-con-ip{
					display: inline-block;
					opacity: 1;
					font-size: 14px;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					text-align: left;
					color: #2c2c2c;
					line-height: 21px;
					letter-spacing: 0px;
				}
				&>view:nth-child(1){
					margin-right: 10px;
					opacity: 1;
					font-size: 14px;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					text-align: left;
					color: #2c2c2c;
					line-height: 21px;
					letter-spacing: 0px;
				}
			}
			.con-list-img {
				width: 16px;
				height: 16px;
				image {
					width: 100%;
					height: 100%;
					margin: auto;
				}
			}
			.con-list-imgs{
				width: 7px;
				height: 13px;
				margin-right: 5px;
				image {
					width: 100%;
					height: 100%;
					margin: auto;
				}
			}
			.mySet-info-img {
				margin: 14px 0;
				width: 47px;
				height: 47px;
				opacity: 1;
				background: rgba(0, 0, 0, 0.00);
				border-radius: 50%;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
