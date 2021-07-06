<template>
	<view class="box">
		<view class="confirm_order_box">
			<view class="confirm_order_header">
				<view class="nav">
					<view class="flex_between">
						<view class="nav_title">
							<view :class="{'active':isActive==1}" @click="chenked(1)">
								同城配送
							</view>
						</view>
						<view class="nav_title">
							<view @click="chenked(2)">
								到店更换
							</view>
						</view>
					</view>
					<view class="nav_item  item1 " v-if="isActive==1">
						<ul>
							<li>
								<p>益园养车 19103863654</p>
							</li>
							<li>
								<text>配送至益园养车（天津北辰区）</text>
								<image src="../../../static/arrows.png" mode=""></image>
							</li>
							<li>
								<p>配送时间</p>
								<view>
									<text>立即送出</text>
									<image src="../../../static/arrows.png" mode=""></image>
								</view>
							</li>
							<li>
								<p>支付方式</p>
								<view>
									<text>在线支付</text>
									<image src="../../../static/arrows.png" mode=""></image>
								</view>
							</li>
						</ul>
					</view>
					<view class="nav_item  item2" v-if="isActive==2">
						<ol>
							<li>
								<p>益园养车</p>
							</li>
							<li>
								<p>天津市北辰区北辰公园南100米</p>
							</li>
							<li>
								<p>店铺电话：19103863654</p>
							</li>
						</ol>
						<view class="foot">
							<view class="left">
								<text>到店时间</text>
								<view>
									<text>9:40</text>
									<image src="../../../static/arrows.png" mode=""></image>
								</view>
							</view>
							<view class="right">
								<text>预留电话</text>
								<view>
									<text>19103863546</text>
									<image src="../../../static/arrows.png" mode=""></image>
								</view>
							</view>
						</view>
					</view>
				</view>

			</view>
			<view class="confirm_order_con">
				<!-- 益园养车 -->
				<view class="management">
					<view>益园养车</view>
					<ul>
						<li>
							<image src="../../../static/meirong1.png" mode=""></image>
							<view class="list">
								<p>威士高 2000 SN+ 5W-30 4L 半 合成 合成</p>
								<view>
									<text>￥249</text>
									<text>x1</text>
								</view>
							</view>
						</li>
						<li>
							<image src="../../../static/meirong1.png" mode=""></image>
							<view class="list">
								<p>威士高 2000 SN+ 5W-30 4L 半 合成 合成</p>
								<view>
									<text>￥249</text>
									<text>x1</text>
								</view>
							</view>
						</li>
						<li>
							<image src="../../../static/meirong1.png" mode=""></image>
							<view class="list">
								<p>威士高 2000 SN+ 5W-30 4L 半 合成 合成</p>
								<view>
									<text>￥249</text>
									<text>x1</text>
								</view>
							</view>
						</li>
					</ul>
				</view>
				<!-- 商品总价 -->
				<view class="price">
					<view>
						<text class="left">商品总价</text>
						<text class="right">￥747</text>
					</view>
					<view>
						<text class="left">服务费</text>
						<text class="right">￥88</text>
					</view>
					<view>
						<text class="left">合计</text>
						<text class="right">￥936</text>
					</view>
				</view>
			</view>
			<!-- 底部 -->
			<view class="footer">
				<view class="left">
					<view>合计：</view>
					<view>￥2310.00</view>
				</view>
				<view class="right">
					提交订单
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isActive: 1
			}
		},
		methods: {
			chenked(type) {
				this.isActive = type
			},
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		background-color: #F1F1F1;
	}
	.confirm_order_box {
		overflow: hidden;
	}

	.confirm_order_header {
		width: 100%;
		height: 210px;
		background-color: #ACCB69;
		padding: 22px 15px 50px;
		box-sizing: border-box;
		position: relative;

		.nav {
			background: #f1f1f1;
			border-radius: 8px;
			box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
			margin-bottom: 15px;

			.flex_between {
				padding: 15px 0;
				display: flex;

				.nav_title {
					width: 100%;
					height: 20px;
					line-height: 20px;
					opacity: 1;
					font-size: 14px;
					font-weight: 700;
					text-align: center;
					color: #000000;
				}
			}

			.nav_item {
				padding: 0 20px;
				height: 100px;
				position: relative;

				&::after {
					content: '';
					position: absolute;
					bottom: 0;
				}

				ul {
					padding: 0;
					list-style: none;

					li {
						image {
							float: right;
							width: 6px;
							height: 11px;
							margin-top: 5px;
						}

						text {
							height: 22px;
							font-size: 16px;
							font-weight: 700;
							color: #000000;
						}

						p {
							height: 17px;
							opacity: 0.8;
							font-size: 12px;
							font-weight: 400;
							color: #000000;
							display: inline-block;
						}

						view {
							float: right;
							right: 0;

							text {
								height: 21px;
								font-size: 12px;
								color: #707070;
								vertical-align: middle;
								margin-right: 10px;
								margin-top: 3px;
								color: #f0923c;
							}

							image {
								width: 6px;
								height: 11px;
								vertical-align: middle;
								margin-top: 8px;
							}
						}
					}
				}

				ol {
					width: 100%;
					list-style: none;
					padding: 0 0 10px 0;
					border-bottom: 1px solid #707070;

					li:nth-child(1),
					li:nth-child(3) {
						p {
							height: 22px;
							line-height: 22px;
							opacity: 1;
							font-size: 12px;
							text-align: left;
							color: #000000;
						}
					}

					li:nth-child(2) {
						p {
							width: 193px;
							height: 20px;
							opacity: 1;
							font-size: 14px;
							color: #000000;
						}
					}
				}

				.foot {
					display: flex;
					justify-content: space-between;

					.left,
					.right {
						view {
							image {
								width: 4px;
								height: 8px;
								margin-left: 10px;
							}
						}

						text {
							width: 48px;
							height: 34px;
							opacity: 1;
							font-size: 12px;
							color: #515151;
						}
					}
				}
			}

			.item2 {
				height: 120px;
			}
		}

	}

	.confirm_order_con {
		background-color: #F1F1F1;
		padding: 10px 15px 0;
	}

	// 益园养车
	.management {
		width: 100%;
		height: 290px;
		background: #ffffff;
		border-radius: 8px;
		box-shadow: -1px 1px 9px 0px rgba(0, 0, 0, 0.16);
		padding: 12.5px 20px 0 20px;
		box-sizing: border-box;


		view {
			width: 100%;
			height: 20px;
			font-size: 14px;
		}

		ul {
			list-style: none;
			padding: 0;

			li {
				padding: 12.5px 0;
				display: flex;
				align-items: center;

				image {
					display: inline-block;
					width: 57px;
					height: 57px;
					margin-right: 15px;
				}

				.list {
					display: inline-block;
					width: calc(100% - 72px);
					height: 57px;

					p {
						width: calc(100% - 70px);
						// height: 34px;
						opacity: 1;
						font-size: 12px;
						display: inline;
						float: left;
						margin-right: 10px;
					}

					view {
						width: 40px;
						padding-right: 20px;
						display: inline-block;

						text {
							display: block;
							text-align: right;
						}

						text:nth-child(2) {
							color: #7d7d7d;
						}
					}
				}
			}
		}
	}

	// 商品总价
	.price {
		width: 100%;
		height: 93px;
		background: #ffffff;
		border-radius: 8px;
		box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.16);
		margin-top: 20px;
		padding: 5px 0;

		.left {
			float: left;
			font-size: 14px;
			color: #000000;
		}

		.right {
			float: right;
			width: 50px;
			font-size: 12px;
			text-align: left;
			color: #ff3b30;
		}

		view {
			padding: 5px 20px;
			overflow: hidden;
		}
	}

	// 底部
	.footer {
		width: 100%;
		height: 80px;
		opacity: 1;
		background: #ffffff;
		padding: 10px 15px 25px;
		margin-top: 30px;
		box-sizing: border-box;
		.left{
			float: left;
			text-align: center;
			view:nth-child(1){
				height: 20px;
				font-size: 14px;
				color: #000000;
			}
			view:nth-child(2){
				height: 20px;
				font-size: 14px;
				color: #cd2727;
			}
		}
		.right{
			float: right;
			height: 28px;
			margin-top: 8px;
			line-height: 28px;
			background: #cd2727;
			border-radius: 14px;
			font-size: 14px;
			color: #ffffff;
			padding: 0 25px;
		}
	}
</style>
