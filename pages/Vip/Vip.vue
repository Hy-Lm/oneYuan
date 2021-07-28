<template>
	<view class="vip">
		<view class="vipBox">
			<view class="vip-top">
				<view class="v-t-info">
					<view class="v-t-info-img">
						<image src="../../static/52aa34ff58bffd97658f3402c79dac8.png" mode=""></image>
					</view>
					<view class="v-t-info-con">
						<view style="margin-bottom: 6px;">益园养车</view>
						<view>你还不是会员,开通立享8项特权</view>
					</view>
				</view>
				<view class="v-t-ul">
					<view class="v-t-li" v-for="(item,index) in vT_li" :key="index">
						<view class="v-t-li-img">
							<image :src="item.img" mode=""></image>
						</view>
						<view class="v-t-li-con">
							{{item.con}}
						</view>
					</view>
				</view>
			</view>
			<!-- 优惠 -->
			<view class="vip-discounts">
				<view class="vip-discounts-item" :style="{'backgroundColor': (index==ind? '#FFFFFF':'#F1F1F1')}"
					@click="VDitem(index)" v-for="(item,index) in VDitems" :key="index">
					<view>{{item.con}}</view>
					<view>
						<view>￥<text>{{item.newPrice}}</text></view>
						<view>￥<text>{{item.oldPrice}}</text></view>
					</view>
					<view>{{item.cons}}</view>
				</view>
			</view>
			<!-- 发现好货 -->
			<Part></Part>
			<!-- 开通 -->
		</view>
		<view class="vipBtn">
			立即开通
		</view>
	</view>
</template>

<script>
	import Part from '../../components/parts/parts.vue'
	export default {
		data() {
			return {
				ind: 0,
				VDitems: [{
						con: '连续包月',
						oldPrice: 29,
						newPrice: 19,
						cons: '次月起￥29,可随时取消'
					},
					{
						con: '车主季卡',
						oldPrice: 79,
						newPrice: 49,
						cons: '平均每月￥16.3'
					},
					{
						con: '车主年卡',
						oldPrice: 134,
						newPrice: 109,
						cons: '平均每月￥11.1'
					}
				],
				vT_li: [{
						img: '../../static/vip/xiche.png',
						con: '10次5元洗车'
					},
					{
						img: '../../static/vip/baoyang.png',
						con: '美容保养5折'
					},
					{
						img: '../../static/vip/luntai.png',
						con: '免费补胎/补气'
					},
					{
						img: '../../static/vip/bolishui.png',
						con: '免费加玻璃水'
					},
					{
						img: '../../static/vip/jiuyuan.png',
						con: '全年三次免费救援'
					},
					{
						img: '../../static/vip/zhekou.png',
						con: '会员折扣'
					}
				]
			}
		},
		methods: {
			VDitem(index) {
				this.ind = index
				// console.log(index)
			}
		},
		components: {
			Part
		}
	}
</script>

<style lang="scss">
	.vipBtn {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 68px;
		opacity: 1;
		background: #ebd095;
		line-height: 68px;
		opacity: 1;
		font-size: 20px;
		text-align: center;
		color: #fff;
	}

	page {
		background: #f9f7f7;
	}

	.vip {
		width:100vw;
		height: calc(100vh - 62px);
		// margin: 10px 0;
		overflow: hidden;
		.vipBox{
			width: calc(100% - 30px);
			padding: 0 15px;
			height: calc(100% - 48px);
			overflow-y: auto;
		}
		.vip-top {
			padding: 15px 26px;
			padding-bottom: 0;
			box-sizing: border-box;
			width: 100%;
			height: 249px;
			opacity: 1;
			background: #313131;
			border-radius: 13px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.v-t-ul {
				width: calc(100vw - 30px);
				margin-left: -30px;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				.v-t-li {
					width: 33%;
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-bottom: 25px;
					.v-t-li-img {
						width: 32px;
						height: 32px;
						margin-bottom: 10px;
						&>image {
							width: 100%;
							height: 100%;
						}
					}

					.v-t-li-con {
						height: 17px;
						opacity: 1;
						font-size: 12px;
						color: #ffffff;
					}
				}
			}

			.v-t-info {
				display: flex;
			}

			.v-t-info-img {
				width: 40px;
				height: 40px;
				opacity: 1;
				background: rgba(0, 0, 0, 0.00);
				border-radius: 50%;
				margin-right: 10px;

				&>image {
					width: 100%;
					height: 100%;
				}
			}

			.v-t-info-con {
				&>view:nth-child(1) {
					height: 20px;
					opacity: 1;
					font-size: 14px;
					color: #ffffff;
				}

				&>view:nth-child(2) {
					height: 17px;
					opacity: 1;
					font-size: 12px;
					color: #ffffff;
				}
			}
		}
	}

	// 优惠
	.vip-discounts {
		display: flex;
		justify-content: space-between;
	}

	.vip-discounts-item {
		&:nth-child(1)::after {
			content: '首月优惠';
			position: absolute;
			top: 0;
			left: 0;
			width: 56px;
			height: 20px;
			opacity: 1;
			background: #ebd095;
			border-radius: 6px 1px 6px 1px;
			text-align: center;
			line-height: 20px;
			font-size: 10px;
			color: #333333;
		}

		&:nth-child(2)::after,
		&:nth-child(3)::after {
			content: '限时特价';
			position: absolute;
			top: 0;
			left: 0;
			width: 56px;
			height: 20px;
			opacity: 1;
			background: #ebd095;
			border-radius: 6px 1px 6px 1px;
			text-align: center;
			line-height: 20px;
			font-size: 10px;
			color: #333333;
		}

		position: relative;
		margin-top: 34px;
		width: 108px;
		height: 147px;
		// opacity: 0.54;
		background: #F1F1F1;
		border-radius: 6px;
		padding: 30px 9px 17px 14px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		box-sizing: border-box;

		&>view:nth-child(1) {
			height: 22px;
			font-size: 16px;
			color: #333333;
			font-weight: 400;
		}

		&>view:nth-child(2) {
			display: flex;
			align-items: flex-end;

			&>view:nth-child(1) {
				height: 25px;
				opacity: 1;
				font-size: 18px;
				color: #ebd095;
			}

			&>view:nth-child(2) {
				height: 17px;
				opacity: 1;
				font-size: 12px;
				font-family: PingFang SC, PingFang SC-Bold;
				font-weight: 700;
				color: #707070;
				text-decoration: line-through;
			}
		}

		&>view:nth-child(3) {
			height: 28px;
			font-size: 10px;
			// font-weight: 700;
			color: #707070;
		}
	}
</style>
