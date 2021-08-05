<template>
	<!-- 首页头部 -->
	<view class="content">

		<view class="navbar_content">
			<!-- 位置、搜索 -->
			<view class="header">
				<text class="map">廊坊</text>
				<image src="../../../static/service.png" mode="aspectFit"></image>
				<view class="input">
					<image src="../../../static/查找.png" mode="aspectFit"></image>
					<input type="text" />
				</view>
			</view>
			<!-- 椭圆背景 -->
			<view class="bg"></view>
			<!-- 复选框 -->
			<view class="sel">
				<image src="../../../static/preview.png" mode=""></image>
				<select>
					<option>宝马 320i</option>
				</select>
			</view>
			<!-- 背景图 -->
			<view class="banner">
				<image src="../../../static/56c85f448644472364cb04239524c82.png" mode=""></image>
			</view>
			<view class="order">
				<view class="order_header">
					<ul>
						<li class="pitch">全部</li>
						<li>距离</li>
						<li>折扣最低</li>
					</ul>
					<view class="type" v-for="(item,index) in 10" @click="open">
						<view class="left">
							<image src="../../../static/2.jpg" mode="aspectFit"></image>
						</view>
						<view class="right">
							<view>益园养车（北辰区店）</view>
							<view>
								<text>总评分 4.6</text>
							</view>
							<view>
								<text>天津市北辰区北辰公园南100米</text>
								<text class="km">2.22km</text>
							</view>
						</view>
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

			}
		},
		methods: {
			open() {
				console.log('open')
				uni.navigateTo({
					url: "/components/index/shop/shop"
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		margin: 0;
		padding: 0;
	}

	.content {
		height: 360px;
	}

	.navbar_content {
		width: 100%;
		height: 133px;
		background-color: #0D8600;
		box-sizing: border-box;

		// 搜索
		.header {
			padding: 20px 15px;
			width: 100%;
			height: 60px;
			font-size: 14px;
			margin-bottom: 37px;
			box-sizing: border-box;

			.map {
				float: left;
				color: #F1F1F1;
			}

			image {
				width: 16px;
				height: 16px;
				float: right;
				top: 2px
			}

			.input {
				margin: 0 29px 0 73px;
				height: 20px;
				opacity: 1;
				background: #f1f1f1;
				border-radius: 10px;
				padding-left: 20px;
				position: relative;

				image {
					position: absolute;
					width: 10px;
					height: 10px;
					left: 7px;
					top: 5px;
				}
			}
		}

		// 椭圆 背景
		.bg {
			width: 100%;
			height: 74px;
			opacity: 1;
			background: #f9f7f7;
			border-radius: 50%;
		}

		// 复选框
		.sel {
			padding-left: 15px;
			margin-top: -50px;

			image {
				width: 19px;
				height: 19px;
				vertical-align: middle;
			}

			select {
				border: none;
				display: inline-block;
				vertical-align: middle;
				padding: 0 10px;
			}
		}

		// 背景图
		.banner {
			width: 100%;
			height: 162px;
			padding: 20px 15px;
			box-sizing: border-box;

			image {
				width: 100%;
				height: 100%;
			}
		}

		// 全部
		.order {
			padding: 0 15px 10px 15px;
			box-sizing: border-box;

			.order_header {
				ul {
					padding: 0;
					list-style: none;

					li {
						float: left;
						width: 33.33%;
						text-align: center;
						height: 17px;
						font-size: 12px;
						color: #000000;
						line-height: 19px;

						&:nth-child(1) {
							text-align: left;
						}

						&:nth-child(3) {
							text-align: right;
						}
					}

					// 选中状态
					.pitch {
						color: #0D8600;
					}
				}
			}

			// 类型
			.type {
				width: 100%;
				overflow: hidden;
				padding: 10px 0;

				.left {
					float: left;
					width: 71px;
					height: 71px;
					margin-right: 10px;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.right {
					float: right;
					text-align: left;
					width: calc(100% - 81px);
					height: 71px;

					view:nth-child(1) {
						height: 22px;
						opacity: 1;
						font-size: 16px;
						text-align: left;
						color: #000000;
					}

					view:nth-child(2) {
						padding: 5px 0 4px 0;
						height: 17px;
						opacity: 1;
						font-size: 12px;
						text-align: left;
						color: #000000;

						text {
							margin-right: 12px;
						}
					}

					view:nth-child(3) {
						height: 17px;
						opacity: 1;
						font-size: 12px;
						text-align: left;
						color: #000000;

						.km {
							float: right;
						}
					}
				}
			}
		}
	}
</style>
