<template>
	<view class="payment">
		<view class="payment-top">
			<!-- 时间 -->
			<view>
				<view @click="back">
					<image src="../../static/箭头(1).png" mode=""></image>
				</view>
				<view>
					<view>等待买家付款</view>
					<view>剩2小时29分自动关闭</view>
				</view>
			</view>
			<view>
				<view>
					<view>益园养车</view>
					<view>昆仑山脉精灵洞南侧公共卫生间</view>
					<view>
						<view>益(先生)</view>
						<view>19103863546</view>
					</view>
				</view>
				<view @click="updateAddress">
					<image src="../../static/b350e03b822fd6e1c8b5303a2ca4a52.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 商品 -->
		<view class="payment-item">
			<view>
				<view>
					<image src="../../static/订单.png" mode=""></image>
				</view>
				<view>益园养车</view>
				<view>
					<image src="../../static/arrows.png" mode=""></image>
				</view>
			</view>
			<view>
				<view>
					<image src="../../static/autorepair.png" mode=""></image>
				</view>
				<view>
					<view>
						<view>
							悠度/户外便携折叠椅火车靠背凳子 沙滩椅钓鱼椅写生椅
						</view>
						<view>
							x<text>1</text>
						</view>
					</view>
					<view>
						<view>￥<text>196</text></view>
						<view>会员￥<text>158</text></view>
					</view>
				</view>
			</view>
			<view>
				<view>商品总价</view>
				<view>￥<text>85</text> :00</view>
			</view>
			<view>
				<view>运费</view>
				<view>￥<text>28</text> :00</view>
			</view>
			<view>
				实付款 <view>￥ <text>103</text>:00</view>
			</view>
		</view>
		<!-- 底部-->
		<view class="payment-bottom">
			<view>
				￥<text>196.00</text>
			</view>
			<view @click="paymentMony">付款</view>
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
			updateAddress(){
				// 跳到修改地址
				uni.navigateTo({
					url:'/pages/newUpdate-address/newUpdate-address'
				})
			},
			paymentMony(){
				console.log("暂不付款")
			},
			back(){
				// 返回上一级
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
	.payment-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 95px;
		background: #ffffff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 23px;

		&>view:nth-child(1) {
			height: 30px;
			opacity: 1;
			font-size: 12px;
			color: #cd434d;
			line-height: 20px;

			text {
				font-size: 16px;
			}
		}

		&>view:nth-child(2) {
			width: 131px;
			height: 29px;
			line-height: 29px;
			text-align: center;
			opacity: 1;
			background: #f0923c;
			border-radius: 15px;
			font-size: 16px;
			color: #FFFFFF;
		}
	}

	.payment-item {
		margin: 17px;
		margin-top: 9px;
		height: 270px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: flex-end;
		// width: 100%;
		opacity: 0.66;
		background: #ffffff;
		border-radius: 4px;
		box-sizing: border-box;
		padding: 0 10px;
		padding-top:10px;
		&>view:nth-child(5) {
			margin-top: 10px;
			display: flex;
			justify-content: flex-end;

			&>view {
				opacity: 1;
				font-size: 14px;
				color: #CD434D
			}
		}

		&>view:nth-child(4) {
			width: 100%;
			display: flex;
			justify-content: space-between;

			&>view {
				opacity: 1;
				font-size: 14px;
				color: #000000;
			}
		}

		&>view:nth-child(3) {
			width: 100%;
			display: flex;
			justify-content: space-between;

			&>view {
				opacity: 1;
				font-size: 14px;
				color: #000000;
			}
		}

		&>view:nth-child(2) {
			width: 100%;
			display: flex;
			margin: 20px 0 40px;

			&>view:nth-child(2) {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-around;

				&>view:nth-child(2) {
					display: flex;

					&>view:nth-child(1) {
						height: 20px;
						opacity: 1;
						font-size: 14px;
						color: #ff3b30;
						line-height: 19px;
						margin-right: 17px;
					}

					&>view:nth-child(2) {
						width: 60px;
						height: 16px;
						opacity: 1;
						background: #707070;
						border: 1px solid #707070;
						border-radius: 4px;
						font-size: 12px;
						color: #fff0c9;
						line-height: 19px;
					}
				}

				&>view:nth-child(1) {
					display: flex;
					align-items: center;

					&>view:nth-child(1) {
						width: 186px;
						height: 34px;
						opacity: 1;
						font-size: 12px;
						color: #000000;
					}

				}
			}

			&>view:nth-child(1) {
				width: 73px;
				height: 73px;
				opacity: 1;
				background: rgba(0, 0, 0, 0.00);
				border-radius: 6px;
				margin-right: 18px;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		&>view:nth-child(1) {
			display: flex;
			width: 100%;

			&>view:nth-child(2) {
				height: 20px;
				opacity: 1;
				font-size: 14px;
				color: #000000;
				margin-right: 10px;
			}

			&>view:nth-child(3) {
				width: 5px;
				height: 9px;

				image {
					width: 100%;
					height: 100%;
				}
			}

			&>view:nth-child(1) {
				width: 17px;
				height: 16px;
				margin-right: 10px;

				image {
					width: 100%;
					height: 100%;
				}
			}

		}
	}

	.payment-top {
		padding: 44px 15px 14px 15px;
		box-sizing: border-box;
		width: 100%;
		height: 202px;
		opacity: 1;
		background: #accb69;

		&>view {
			display: flex;
		}

		&>view:nth-child(2) {
			margin-top: 24px;
			padding: 5px 15px;
			box-sizing: border-box;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 79px;
			opacity: 1;
			background: #ffffff;
			border-radius: 10px;

			&>view:nth-child(2) {
				width: 17px;
				height: 17px;
				
				image {
					width: 100%;
					height: 100%;
				}
			}

			&>view:nth-child(1) {
				display: flex;
				flex-direction: column;
				justify-content: space-around;

				&>view:nth-child(1) {
					opacity: 1;
					font-size: 14px;
					color: #000000;
				}

				&>view:nth-child(2) {
					opacity: 1;
					font-size: 12px;
					color: #000000;
				}

				&>view:nth-child(3) {
					display: flex;
					opacity: 1;
					font-size: 12px;
					color: #707070;
				}
			}


		}



		&>view:nth-child(1) {
			align-items: center;

			&>view:nth-child(2) {
				margin: 0 auto;
				text-align: center;
			}

			&>view:nth-child(1) {
				width: 7px;
				height: 14px;
				margin-left: 10px;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}


	}

	page {

		flex: 1;
		opacity: 1;
		background: #f9f7f7;
	}
</style>
