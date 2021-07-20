<template>
	<view>
		<view class="service">
			<view class="type">内饰清洗</view>
			<view class="shopname">天津市宝岗汽修厂</view>
			<view class="server">
				<text>随时退</text>
				<text>过期退</text>
			</view>
			<image class="img1" src="../../../../static/tu2.png" mode=""></image>
			<view class="price">
				<view class="yuanjia">
					<text class="left">原价 :</text>
					<text class="right">￥299</text>
				</view>
				<view class="youhui">
					<text class="left">优惠 :</text>
					<text class="right">￥131</text>
				</view>
				<view class="shifuk">
					<text class="left">实付款 :</text>
					<text class="right">￥168</text>
				</view>
			</view>
		</view>
		<view class="particulars">
			<view>店铺详情</view>
			<image src="../../../../static/tu1.png" mode=""></image>
		</view>
		<view class="newAdd-btn" @click="order">
			立即预约
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
			order() {
				console.log('order')
				if (this.isSearch) return
				uni.navigateTo({
					url: "/components/index/shop/order/order"
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		padding-bottom: 5px;
	}
	.newAdd-btn {
		// position: fixed;
		// bottom: 30px;
		// left: 50%;
		width: 80%;
		text-align: center;
		line-height: 36px;
		margin:18px auto;
		font-size: 16px;
		font-family: PingFang SC, PingFang SC-Regular;
		font-weight: 400;
		color: #ffffff;
		height: 36px;
		opacity: 1;
		background: #0d8600;
		border-radius: 18px;
	}

	.left {
		float: left;
	}

	.right {
		float: right;
	}

	.service {
		width: 100%;
		padding: 0 15px;
		box-sizing: border-box;

		.shopname {
			height: 20px;
			font-size: 14px;
			color: #333333;
		}

		.type {
			height: 25px;
			font-size: 18px;
			font-weight: bold;
			color: #333333;
			margin-bottom: 6px;
		}

		.server {
			height: 17px;
			font-size: 12px;
			color: #333333;

			text:nth-child(2) {
				margin-left: 5px;
				border-left: 1px solid #999999;
				padding-left: 7px;
			}
		}

		.img1 {
			padding: 15px 0;
			width: 100%;
			height: 167px;
		}

		.price {
			border-top: 1px solid rgba(153, 153, 153, .3);
			border-bottom: 1px solid rgba(153, 153, 153, .3);

			.yuanjia,
			.youhui,
			.shifuk {
				overflow: hidden;
				padding: 7px 0;
				height: 20px;
				font-size: 14px;
				color: #333333;

			}

			.yuanjia {
				padding-bottom: 0;

				.right {
					color: #666666;
					text-decoration: line-through;
				}
			}

			.youhui {
				.right {
					color: #333333;
				}
			}

			.shifuk {
				padding-top: 0;

				text:nth-child(2) {
					font-size: 16px;
					color: #cd2727;
				}

				.right {
					color: #CD2727;
				}
			}
		}
	}

	.particulars {
		width: 100%;
		padding: 0 15px;
		box-sizing: border-box;
		// background-color: red;
		text-align: center;

		view {
			padding: 12px 0;
			height: 20px;
			font-size: 14px;
			color: #333333;
			position: relative;

			&::after {
				content: '';
				width: 38px;
				height: 1px;
				position: absolute;
				left: calc(100%/2 - 80px);
				top: 20px;
				opacity: 0.5;
				background-color: #333333;
			}

			&::before {
				content: '';
				width: 38px;
				height: 1px;
				position: absolute;
				right: calc(100%/2 - 80px);
				top: 20px;
				opacity: 0.5;
				background-color: #333333;
			}
		}

		image {
			width: 100%;
			height: 250px;
		}
	}

	.footer {
		width: 100%;
		height: 80px;
		padding: 18px 25px;
		box-sizing: border-box;
		text-align: center;

		.footer_box {
			position: relative;

			view:nth-child(2) {
				position: absolute;
				right: 0;
				top: 0px;
				width: 90px;
				font-size: 18px;
				height: 25px;
				line-height: 25px;
				color: #FFFFFF;
				background: #f0923c;
				border-radius: 25px;
				padding: 10px 20px;
			}

			view:nth-child(1) {
				width: 100%;
				box-sizing: border-box;
				padding: 0 90px 0 25px;
				line-height: 44px;
				text-align: center;
				font-size: 16px;
				color: #cd2727;

				text {
					font-size: 22px;
				}
			}
		}
	}
</style>
