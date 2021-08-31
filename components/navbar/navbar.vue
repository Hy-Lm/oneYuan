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
			<view class="addcart addcartS" v-if="!addcart" @click="likecar">
				<view>我的 车辆</view>
				<view class="addcartS-con">
					<view>
						<image src="../../static/更换.png" mode=""></image>
						<text>津A9996J</text>
					</view>
					<view>2021款 320i 自动挡</view>
				</view>
				<view class="addcartS-icon">
					<image src="../../static/arrows.png" mode=""></image>
				</view>
			</view>
			<view class="addcart" v-if="addcart" @click="likecar">
				<view>
					<view class="addcart-img">
						<image src="../../static/images/addition@3x.png" mode=""></image>
					</view>
					<view class="addcart-con">
						<view>添加您的爱车</view>
						<view>立即添加,爱车健康每一天</view>
					</view>
				</view>

				<view class="addcart-icon">
					<image src="../../static/images/arrows@3x.png" mode=""></image>
				</view>
			</view>
			<!-- 轮播图 -->
			<view class="banner">
				<view class="uni-padding-wrap">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper class="swiper" autoplay="true" interval="2000" circular="true" indicator-dots="true"
								indicator-color="rgba(255, 255, 255, 0.95)">
								<swiper-item v-for="(item,index) in bannerImgs" :key="item.id">
									<view class="swiper-item uni-bg-red" style="width: 100%; height: 160px;">
										<image style="width: 100%; height: 100%;" :src="item.img" mode="scaleToFill">
										</image>
									</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
			</view>
			<!-- 系统提示 -->
			<view class="hint">
				<image src="../../static/images/trumpet@3x.png" mode="scaleToFill"></image>
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
				],
				addcart:true
			}
		},
		mounted() {
			this.info()
		},
		methods: {
			info(){
				//页面渲染
				uni.request({
					url: 'http://192.168.7.152:8082/imgservice/carimg/findImg', //仅为示例，并非真实接口地址。
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: (res) => {
						// console.log(res.data);
						this.bannerImgs = res.data
						// this.text = 'request success';
					}
				})
			},
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
			},
			
		}
	}
</script>

<style lang="scss">
	.addcartS{
		display: flex;
		justify-content: space-between;
		&>view:nth-child(1){
			width: 36px;
			height: 47px;
			opacity: 1;
			font-size: 18px;
			color: #333333;
			line-height: 22px;
		}
		.addcartS-con{
			display: flex;
			flex-direction: column;
			opacity: 1;
			font-size: 13px;
			color: #333333;
			&>view:nth-child(1){
				image{
					width: 12px;
					height: 12px;
					margin-right: 10px;
					vertical-align:middle;
				}
				margin-bottom: 5px;
			}
		}
		.addcartS-icon{
			width: 10px;
			height: 19px;
			
			&>image {
				width: 100%;
				height: 100%;
			}
		}
	}
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
		background-color: #25b85b;
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
			padding-right: 25px;
			margin-top: -100px;
			margin-left: 15px;
			margin-right: 15px;
			box-sizing: border-box;
			height: 83px;
			opacity: 1;
			background: #ececec;
			border-radius: 7px;
			box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.16);
			display: flex;
			align-items: center;
			justify-content: space-between;
			&>view{
				display: flex;
			}
			.addcart-icon {
				width: 10px;
				height: 19px;

				&>image {
					width: 100%;
					height: 100%;
				}
			}

			.addcart-con {
				color: #333333;

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
