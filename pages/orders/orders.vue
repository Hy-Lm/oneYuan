<template>
	<view class="orders">
		<!-- 全部订单 -->
		<view class="orders-top">
			<view class="orders-top_item" @click="ordersItem(index)" :style="[index===ind?styleobj1:styleobj2]"
				v-for="(item,index) in orders_top_item" :key="index">
				{{item}}
			</view>
		</view>
		<!-- 商品列表组件渲染 -->
		<view class="orders-items">
			<orders-item v-for="(item,index) in orders_items[ind]" :item="item" :key="index"></orders-item>
		</view>
		<!-- 发现好货 -->
		<view class="orders-good">
			<view class="orders-good-top">
				发现好货
			</view>
			<view class="orders-good-items">
				<view class="orders-good-item" v-for="(item,index) in orders_good_items" :key="index">
					<view>
						<image :src="item.img" mode=""></image>
					</view>
					<view>{{item.title}}</view>
					<view>
						<view>￥<text>{{item.mony}}</text></view>
						<view><text>{{item.number}}</text>人购买</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ind: 0,
				// 切换状态
				styleobj1: {
					'color': '#F0923C',
					'border-bottom': '2px solid #F0923C'
				},
				styleobj2: {
					'color': '#000000',
					'border-bottom': 'none'
				},
				orders_top_item: ['全部', '待付款', '待发货', '待收货'],
				// 商品列表
				orders_items: [
					// 全部
					[{

							actives: "卖家已付款",
							img: '../../static/autorepair.png',
							title: '悠度/户外便携折叠椅火车靠背凳子 沙滩椅钓鱼椅写生椅',
							call: '小号(60cm)',
							num: 1,
							zong_mony: 196,
							sale: 38,
							active: false,
							btn1: '再次购买'
						},
						{
							actives: "卖家已付款",
							img: '../../static/autorepair.png',
							title: '悠度/户外便携折叠椅火车靠背凳子 沙滩椅钓鱼椅写生椅',
							call: '中号(120cm)',
							num: 2,
							zong_mony: 200,
							sale: 40,
							active: false,
							btn1: '再次购买'
						},
						{
							actives: "卖家已付款",
							img: '../../static/autorepair.png',
							title: '悠度/户外便携折叠椅火车靠背凳子 沙滩椅钓鱼椅写生椅',
							call: '大号(180cm)',
							num: 3,
							zong_mony: 400,
							sale: 60,
							active: false,
							btn1: '再次购买'
						}
					],
					// 待付款
					[{
							actives: "等待卖家付款",
							img: '../../static/autorepair.png',
							title: '悠度/户外便携折叠椅火车靠背凳子 沙滩椅钓鱼椅写生椅',
							call: '大号(180cm)',
							num: 3,
							zong_mony: 400,
							sale: 60,
							active: true,
							btn1: '联系客服',
							btn2: '付款'
						},
						{
							actives: "等待卖家付款",
							img: '../../static/autorepair.png',
							title: '悠度/户外便携折叠椅火车靠背凳子 沙滩椅钓鱼椅写生椅',
							call: '中号(120cm)',
							num: 2,
							zong_mony: 200,
							sale: 40,
							active: true,
							btn1: '联系客服',
							btn2: '付款'
						},
					],
					// 已付款
					[{
							actives: "买家已付款",
							img: '../../static/autorepair.png',
							title: '悠度/户外便携折叠椅火车靠背凳子 沙滩椅钓鱼椅写生椅',
							call: '大号(180cm)',
							num: 3,
							zong_mony: 400,
							sale: 60,
							active: true,
							btn1: '修改地址',
							btn2: '再次购买'
						},
						{
							actives: "买家已付款",
							img: '../../static/autorepair.png',
							title: '悠度/户外便携折叠椅火车靠背凳子 沙滩椅钓鱼椅写生椅',
							call: '中号(120cm)',
							num: 2,
							zong_mony: 200,
							sale: 40,
							active: true,
							btn1: '修改地址',
							btn2: '再次购买'
						},
					],
					// 待付款
					[{
							actives: "等待卖家付款",
							img: '../../static/autorepair.png',
							title: '悠度/户外便携折叠椅火车靠背凳子 沙滩椅钓鱼椅写生椅',
							call: '大号(180cm)',
							num: 3,
							zong_mony: 400,
							sale: 60,
							active: true,
							btn1: '查看物流',
							btn2: '再次购买'
						},
						{
							actives: "等待卖家付款",
							img: '../../static/autorepair.png',
							title: '悠度/户外便携折叠椅火车靠背凳子 沙滩椅钓鱼椅写生椅',
							call: '中号(120cm)',
							num: 2,
							zong_mony: 200,
							sale: 40,
							active: true,
							btn1: '查看物流',
							btn2: '再次购买'
						},
					]
				],
				// 发现好货
				orders_good_items: [{
						img: '../../static/shangxin1.png',
						title: '信义 上海通用-乐风 前挡玻璃更换',
						mony: 210,
						number: 44718
					},
					{
						img: '../../static/shangxin1.png',
						title: '信义 上海通用-乐风 前挡玻璃更换',
						mony: 320,
						number: 55718
					},
					{
						img: '../../static/shangxin1.png',
						title: '信义 上海通用-乐风 前挡玻璃更换',
						mony: 430,
						number: 66718
					},
					{
						img: '../../static/shangxin1.png',
						title: '信义 上海通用-乐风 前挡玻璃更换',
						mony: 540,
						number: 77718
					},
					{
						img: '../../static/shangxin1.png',
						title: '信义 上海通用-乐风 前挡玻璃更换',
						mony: 650,
						number: 88718
					},
					{
						img: '../../static/shangxin1.png',
						title: '信义 上海通用-乐风 前挡玻璃更换',
						mony: 760,
						number: 99718
					}
				]
			}
		},
		methods: {
			ordersItem(index) {
				this.ind = index
			}
		}
	}
</script>

<style lang="scss">
	.orders-good {
		.orders-good-top {
			position: relative;
			width: 100%;
			text-align: center;
			height: 25px;
			opacity: 1;
			font-size: 18px;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			color: #f0923c;
			line-height: 20px;
			margin-bottom: 10px;
		}

		.orders-good-top:after {
			position: absolute;
			top: 10px;
			left: 20%;
			content: '';
			width: 65px;
			height: 1px;
			opacity: 1;
			border-bottom: 1px solid #f0923c;
		}

		.orders-good-top::before {
			position: absolute;
			top: 10px;
			right: 20%;
			content: '';
			width: 65px;
			height: 1px;
			opacity: 1;
			border-bottom: 1px solid #f0923c;
		}

		.orders-good-items {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.orders-good-item {
				&:nth-child(even) {
					margin-right: 0;
				}

				padding-bottom:3px;
				// margin-right: 21px;
				margin-bottom: 18px;
				width: 147px;
				height: 217px;
				display: flex;
				flex-direction: column;
				background-color: #FFFFFF;

				&>view:nth-child(3) {
					display: flex;
					align-items: center;

					&>view:nth-child(2) {
						height: 14px;
						opacity: 1;
						font-size: 12px;
						color: #7d7d7d;
					}

					&>view:nth-child(1) {
						margin-right: 14px;
						height: 20px;
						opacity: 1;
						font-size: 14px;
						color: #ff0e00;
						line-height: 19px;
					}
				}

				&>view:nth-child(2) {
					padding: 3px;
					box-sizing: border-box;
					height: 40px;
					opacity: 1;
					font-size: 14px;
					color: #000000;
					line-height: 20px;
					margin: 5px 0;
				}

				&>view:nth-child(1) {
					width: 147px;
					height: 164px;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}

	.orders-items {
		margin-top: 30px;
		// height: 192px;
		opacity: 1;
		background: #ffffff;
		border-radius: 10px;
		margin-bottom: 8px;
	}

	.orders {
		border-top: 1px solid #E8E6E6;
		width: 100%;
		padding: 7px 15px;
		padding-bottom: 0;
		box-sizing: border-box;
	}

	.orders-top {
		padding: 0 5px;
		box-sizing: border-box;
		width: 100%;
		height: 23px;
		line-height: 23px;
		display: flex;
		justify-content: space-between;
	}

	page {
		flex: 1;
		opacity: 1;
		background: #f9f7f7;
	}
</style>
