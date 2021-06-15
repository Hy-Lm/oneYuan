<template>
	<!-- 首页头部 -->
	<view class="content">
	
		<view class="navbar_content">
			<!-- 位置、搜索 -->
			<view class="header">
				<text class="map" @click="map">廊坊</text>
				<image src="../../static/service.png" mode="aspectFit"></image>
				<view class="input">
					<image src="../../static/查找.png" mode="aspectFit"></image>
					<input type="text" />
				</view>
			</view>
			<view class="bg"></view>
			<!-- 添加爱车 -->
			<view class="addcart" @click="likecar">
				<view class="cart">
					<view class="left">
						<image src="../../static/addition.png" mode="aspectFit"></image>
					</view>
					<view class="right">
						<view>添加您的爱车</view>
						<text>立即添加，爱车健康每一天</text>
					</view>
				</view>
			</view>
			<!-- 轮播图 -->
			<view class="banner">
				<view class="uni-padding-wrap">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper class="swiper" autoplay="true" interval="2000" circular="true" indicator-dots="true" indicator-color="rgba(255, 255, 255, 0.95)">
								<swiper-item>
									<view class="swiper-item uni-bg-red">
										<image style="width: 100%; height: 160px;" src="../../static/banner1.png" mode="aspectFit"></image>
									</view>
								</swiper-item>
								<swiper-item>
									<view class="swiper-item uni-bg-green">
										<image style="width: 100%; height: 160px;" src="../../static/banner1.png" mode="aspectFit"></image>
									</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
			</view>
			<!-- 系统提示 -->
			<view class="hint">
				<image src="../../static/trumpet.png" mode="aspectFit"></image>
				<text>系统暂为检测到您的车型，赶紧添加您的爱车吧</text>
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
			map(){
				console.log(1)
				uni.navigateTo({//跳转地图页面
					url:"/components/myMap/myMap"
				})
			},
			likecar(){
				console.log('likecar')
				uni.navigateTo({
					url:"/components/index/likecar/likecar"
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	margin: 0;
	padding: 0;
}
	.content{
		height: 360px;
	}
	.navbar_content {
		width: 100%;
		height: 133px;
		background-color: #396a3a;
		box-sizing: border-box;

		// 搜索
		.header {
			padding: 20px 30px;
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

		// 添加爱车
		.addcart {
			padding: 0 30px 9px 30px;
			margin-top: -110px;

			.cart {
				width: 100%;
				height: 83px;
				background: #accb69;
				border-radius: 7px;
				box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.16);
				opacity: 1;

				image {
					width: 33px;
					height: 33px;
				}

				.left {
					float: left;
					padding: 24px 16px;
				}

				.right {
					width: 100%;
					height: 25px;
					padding: 20px 0;
					opacity: 1;
					font-size: 18px;
					font-weight: 400;
					text-align: left;
					color: #ffffff;
					line-height: 19px;

					view {
						height: 25px;
						font-size: 18px;
					}

					text {
						font-size: 14px;
					}
				}
			}
		}
		// 轮播
		.banner{
			padding: 0 21px;
			text-align: center;
			height: 160px;
		}
		// 系统提示
		.hint{
			padding:2px 30px;
			height: 29px;
			line-height: 29px;
			background: #fff0c9;
			image{
				width: 18px;
				height: 17px;
				vertical-align: middle;
			}
			text{
				margin-left: 18px;
				font-size: 10px;
				color: #7d7d7d;
				vertical-align: middle;
				line-height: 19px;
			}
		}
	}
</style>
