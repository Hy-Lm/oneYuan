<template>
	<!-- 首页头部 -->
	<view class="content">
	
		<view class="navbar_content">
			<!-- 位置、搜索 -->
			<view class="header">
				<text class="map" @click="map">廊坊</text>
				<view class="input">
					<image src="../../static/查找.png" mode="aspectFit"></image>
					<input type="text" />
				</view>
				<image src="../../static/service.png" mode="aspectFit"></image>
			</view>
			<view class="bg"></view>
			<!-- 添加爱车 -->
			<view class="addcart" @click="likecar">
				<view>我的 车辆</view>
				<view>
					<view>
						<image src="../../static/更换.png" mode=""></image>
						<text>津A9996J</text>
					</view>
					<view>2021款 320i 自动挡</view>
				</view>
				<view>
					<image src="../../static/arrows.png" mode=""></image>
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
					// 跳转到我的爱车
					url:"/components/index/my-likecar/my-likecar"
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
			padding: 20px 15px;
			width: 100%;
			height: 60px;
			font-size: 14px;
			margin-bottom: 37px;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			.map {
				// width: 48px;
				height: 22px;
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
				margin: 0 10px 0 5px;
				flex: 1;
				height: 34px;
				opacity: 1;
				background: #f1f1f1;
				border-radius: 16px;
				padding-left: 20px;
				position: relative;
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
			padding: 0 30px 9px 30px;
			margin-top: -100px;
			margin-left:30px;
			margin-right:30px;
			box-sizing: border-box;
			height: 83px;
			opacity: 1;
			background: #accb69;
			border-radius: 7px;
			box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.16); 
			display: flex;
			align-items: center;
			justify-content: space-between;
			&>view:nth-child(3){
				image{
					width: 10px;
					height: 19px;
				}
			}
			&>view:nth-child(2){
				&>view:nth-child(1){
					margin-bottom: 4px;
					display: flex;
					align-items: center;
					image{
						width: 19px;
						height: 19px;
						margin-right: 7px;
					}
					text{
						font-size: 12px;
						color: #000000;
					}
				}
				&>view:nth-child(2){
					font-size: 12px;
					color: #ffffff;
				}
			}
				
			&>view:nth-child(1){
				width: 36px;
				height: 47px;
				opacity: 1;
				font-size: 18px;
				color: #ffffff;
				line-height: 22px;
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
			opacity: 0.39;
			background: #fff0c9;
			image{
				width: 18px;
				height: 17px;
				opacity: 1;
				vertical-align: middle;
			}
			text{
				margin-left: 18px;
				font-size: 10px;
				// color: #7d7d7d;
				opacity: 1;
				vertical-align: middle;
				line-height: 19px;
			}
		}
	}
</style>
