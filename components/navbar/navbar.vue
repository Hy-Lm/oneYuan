<template>
	<!-- 首页头部 -->
	<view class="content">

		<view class="navbar_content">
			<!-- 位置、搜索 -->
			<view class="header">
				<view class="imgs">
					<image @click="map" src="../../static/images/weizhi-icon@3x.png" mode=""></image>
				</view>
				<!-- <text class="map" @click="map">廊坊</text> -->
				<view class="input">
					<image src="../../static/images/serch-icon@3x.png" mode="aspectFit"></image>
					<input type="text" />
				</view>
				<image src="../../static/service.png" mode="aspectFit"></image>
			</view>
			<view class="bg"></view>
			<!-- 添加爱车 -->
			<view class="addcart" @click="likecar">
				<!-- <view>我的 车辆</view>
				<view>
					<view>
						<image src="../../static/更换.png" mode=""></image>
						<text>津A9996J</text>
					</view>
					<view>2021款 320i 自动挡</view>
				</view>
				<view>
					<image src="../../static/arrows.png" mode=""></image>
				</view> -->
				<view class="addcart-img">
					<image src="../../static/images/addition@3x.png" mode=""></image>
				</view>
				<view class="addcart-con">
					<view>添加您的爱车</view>
					<view>立即添加,爱车健康每一天</view>
				</view>
			</view>
			<!-- 轮播图 -->
			<view class="banner">
				<view class="uni-padding-wrap">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper class="swiper" autoplay="true" interval="2000" circular="true" indicator-dots="true"
								indicator-color="rgba(255, 255, 255, 0.95)">
								<swiper-item v-for="(item,index) in bannerImgs" :key="index">
									<view class="swiper-item uni-bg-red">
										<image style="width: 100%; height: 160px;" :src="item" mode="aspectFit"></image>
									</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
			</view>
			<!-- 系统提示 -->
			<view class="hint">
				<image src="../../static/images/trumpet@3x.png" mode="aspectFit"></image>
				<text>系统暂为检测到您的车型，赶紧添加您的爱车吧</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerImgs: ['../../static/images/banner1@3x.png', '../../static/images/banner2@3x.png',
					'../../static/images/banner1@3x.png'
				]
			}
		},
		methods: {
			map() {
				console.log(1)
				uni.navigateTo({ //跳转地图页面
					url: "/components/myMap/myMap"
				})
			},
			likecar() {
				console.log('likecar')
				uni.navigateTo({
					// 跳转到我的爱车
					url: "/components/index/my-likecar/my-likecar"
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
		background-color: #396a3a;
		box-sizing: border-box;

		// 搜索
		.header {
			padding: 20px 15px;
			width: 100%;
			height: 60px;
			font-size: 14px;
			margin-bottom: 37px;
			box-sizing: border-box;
			display: flex;
			align-items: center;

			.imgs {
				width: 16px;
				height: 20px;

				&>image {
					width: 100%;
					height: 100%;
				}

				opacity: 1;
				font-size: 16px;
				font-weight: 400;
				color: #ffffff;
			}

			image {
				width: 20px;
				height: 20px;
				// opacity: 1;
			}

			.input {
				margin: 0 9px 0 12px;
				flex: 1;
				height: 34px;
				opacity: 1;
				background: #f1f1f1;
				border-radius: 16px;
				padding-left: 20px;
				position: relative;

				input {
					padding-left: 15px;
					height: 34px;
				}

				image {
					position: absolute;
					width: 15px;
					height: 15px;
					left: 14px;
					top: 9px;
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

		// 我的爱车
		.addcart {
			padding-left: 15px;
			margin-top: -100px;
			margin-left: 15px;
			margin-right: 15px;
			box-sizing: border-box;
			height: 83px;
			opacity: 1;
			background: #accb69;
			border-radius: 7px;
			box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.16);
			display: flex;
			align-items: center;

			.addcart-con {
				color: #ffffff;

				&>view:nth-child(1) {
					height: 25px;
					opacity: 1;
					font-size: 18px;
					line-height: 19px;
				}

				&>view:nth-child(2) {
					height: 17px;
					opacity: 1;
					font-size: 12px;
					line-height: 19px;
				}
			}

			.addcart-img {
				width: 33px;
				height: 33px;
				margin-right: 12px;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		// 轮播
		.banner {
			margin-top: 13px;
			padding: 0 7px;
			text-align: center;
			height: 166px;

			/deep/ uni-swiper .uni-swiper-dots-horizontal {
				left: auto;
				right: 2%;
				bottom: 5px;
			}

			/deep/ .uni-swiper-dot {
				width: 5px;
				height: 5px;
			}

			/deep/ uni-swiper .uni-swiper-dots-horizontal .uni-swiper-dot {
				margin-right: 5px;
			}
		}

		// 系统提示
		.hint {
			padding-left: 15px;
			height: 29px;
			line-height: 29px;
			background: #fff0c9;
			display: flex;
			align-items: center;

			image {
				width: 18px;
				height: 17px;
				opacity: 1;
				vertical-align: middle;
				margin-right: 12px;
			}

			text {
				height: 29px;
				line-height: 29px;
				opacity: 1;
				font-size: 10px;
				color: #7d7d7d;
			}
		}
	}
</style>
