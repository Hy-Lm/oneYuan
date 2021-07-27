<template>
	<view class="payOrder">
		<!-- 订单信息 -->
		<view class="payOrder-info">
			<view>益园养车(北辰公园店)</view>
			<view><text>￥</text>2310</view>
		</view>
		<!-- 付款方式 -->
		<view class="ZFB-payOrder">
			<view>
				<view class="ZFB-payOrder-img">
					<image src="../../static/autorepair.png" mode=""></image>
				</view>
				<view>支付宝支付</view>
			</view>
			<radio value="r1" @click="ZFB" :checked="ZFB_radio" />

		</view>
		<!-- 微信支付 -->
		<view class="ZFB-payOrder">
			<view>
				<view class="ZFB-payOrder-img">
					<image src="../../static/autorepair.png" mode=""></image>
				</view>
				<view>微信支付</view>
			</view>
			<radio value="r2" @click="WX" :checked="WX_radio" />
		</view>
		<!-- 支付按钮 -->
		<view class="payOrderBnn">
			<view @click="payOrderBtn" class="payOrderBtn">
				确认支付
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ZFB_radio: false,
				WX_radio: false
			}
		},
		methods: {
			ZFB() {
				this.WX_radio = false,
					this.ZFB_radio = true
			},
			WX() {
				this.WX_radio = true,
					this.ZFB_radio = false
			},
			// 支付按钮
			payOrderBtn() {
				if (!this.WX_radio && !this.ZFB_radio) {
					uni.showToast({
						icon: 'none',
						title: '请勾选支付方式'
					})
				} else {
					if (this.WX_radio) {
						console.log('微信支付')
						console.log('12345678')
					} else {
						console.log('支付宝支付')
					}
				}

			}
		}
	}
</script>

<style lang="scss">
	.payOrderBnn {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 81px;
		opacity: 1;
		background: #ffffff;

		.payOrderBtn {
			margin: 10px auto;
			width: 80%;
			height: 36px;
			line-height: 36px;
			opacity: 1;
			background: #CD2727;
			border-radius: 18px;
			font-size: 16px;
			font-weight: 700;
			text-align: center;
			color: #ffeeee;
		}
	}

	page {
		background-color: #f9f9f9;
	}

	.payOrder {
		padding: 0 15px;

		.payOrder-info {
			margin: 10px 0 23px;
			width: 100%;
			height: 121px;
			opacity: 1;
			background: #ffffff;
			border-radius: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;

			&>view:nth-child(1) {
				height: 22px;
				opacity: 1;
				font-size: 16px;
				color: #333333;
				margin: 12px 0 14px;
			}

			&>view:nth-child(2) {
				&>text {
					font-size: 12px;
				}

				height: 30px;
				opacity: 1;
				font-size: 16px;
				color: #cd2727;
			}
		}
	}

	.ZFB-payOrder {
		margin-bottom: 12px;
		width: 100%;
		height: 60px;
		opacity: 1;
		background: #ffffff;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 28px;
		box-sizing: border-box;

		.ZFB-cx {
			width: 19px;
			height: 19px;
			opacity: 1;
			background: #ffffff;
			border: 1px solid #707070;
			border-radius: 50%;
		}

		&>view:nth-child(1) {
			display: flex;

			&>view:nth-child(2) {
				height: 29px;
				line-height: 29px;
				opacity: 1;
				font-size: 16px;
				color: #333333;
			}

			& .ZFB-payOrder-img {
				width: 29px;
				height: 29px;
				margin-right: 21px;
				// line-height: 29px;
				&>image {
					width: 100%;
					height: 100%;
					// vertical-align: middle;
				}
			}
		}
	}
</style>
