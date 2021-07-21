<template>
	<view class="content" :style="{'height': (!loginInActive? '355px':'285px')}">
		<view class="my_nav">
			<!-- 登陆前存在的 -->
			<view class="loginIn" v-if="loginInActive">
				<view class="message">
					<view class="loginIn-con">
						<image src="../../static/bg.png" mode=""></image>
						<view>
							<view>登录/注册</view>
							<view>登录享受更多优惠</view>
						</view>

					</view>
					<text>签到领积分</text>
				</view>
			</view>
			<!-- 登陆后存在的 -->
			<view class="header" v-if="!loginInActive">
				<view class="message">
					<view>
						<image src="../../static/bg.png" mode=""></image>
						<text>益园养车</text>
					</view>
					<text>签到领积分</text>
				</view>
			</view>
			<view class="bg"></view>

			<view class="list">
				<ul>
					<li @click="myIntegral">
						<p>我的积分</p>
						<text>98</text>
					</li>
					<li @click="MyMake">
						<p>我的预约</p>
						<text>2</text>
					</li>
					<li @click="MyDiscounts">
						<p>优惠券</p>
						<text>2</text>
					</li>
					<li @click="Myshopping">
						<p>购物车</p>
						<text>2</text>
					</li>
				</ul>
			</view>
			<!-- 登录前  添加你的爱车 -->
			<view class="addcart" v-if="loginInActive">
				<view class="addcart-img">
					<image src="../../static/images/addition@3x.png" mode=""></image>
				</view>
				<view class="addcart-con">
					<view>添加您的爱车</view>
					<view>立即添加,爱车健康每一天</view>
				</view>
			</view>
			<!-- 黑卡 -->
			<view class="vip" v-if="!loginInActive">
				<view class="vip-l">
					<view>
						<image src="../../static/preview.png" mode=""></image>
						<view>益园黑卡</view>
					</view>
					<view>开卡送38元红包</view>
				</view>
				<view class="vip-r">限时七折</view>
			</view>
			<!-- 我的 -->
			<view class="mycar" v-if="!loginInActive">
				<view class="my_box">
					<text class="title">我的<br />车辆</text>
					<view class="car">
						<view class="type">
							<image src="../../static/preview.png" mode=""></image>
							<text>津A9996J</text>
						</view>
						<text>2021款 320i 自动挡</text>
					</view>
					<image class="img" src="../../static/images/arrows@3x.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "my-nav",
		data() {
			return {
				loginInActive:false
			};
		},
		methods: {
			//跳转到我的设置页面
			mySet() {
				uni.navigateTo({
					url: '/pages/my-set/my-set'
				});
			},
			myIntegral() { //跳转积分详情
				console.log(1)
				uni.navigateTo({
					url: "/pages/myIntegral/myIntegral"
				})

			},
			// 预约记录
			MyMake() {
				uni.navigateTo({
					url: "/pages/MyMake/MyMake"
				})
			},
			// 我的优惠卷
			MyDiscounts() {
				uni.navigateTo({
					url: "/pages/discounts/discounts"
				})
			},
			Myshopping() {
				uni.navigateTo({
					url: "/pages/shopping/shopping"
				})
			}
		}
	}
</script>

<style lang="scss">
	// 我的爱车
	.addcart {
		margin: 0 15px;
		padding-left: 15px;
		// margin-top: -100px;
		// margin-left: 15px;
		// margin-right: 15px;
		opacity: 1;
		background: #ffffff;
		border-radius: 6px;
		box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.16); 
		box-sizing: border-box;
		height: 83px;
		display: flex;
		align-items: center;
	
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
	.vip {
		margin: 0 28px;
		// width: 320px;
		height: 63px;
		opacity: 1;
		background: #564f5e;
		border-radius: 6px 6px 0px 0px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-around;

		.vip-r {
			width: 73px;
			height: 25px;
			line-height: 25px;
			opacity: 1;
			background: #d7b47e;
			border: 1px solid #707070;
			border-radius: 10px;

			font-size: 14px;
			text-align: center;
			color: #ffffff;
		}

		.vip-l {
			display: flex;
			flex-direction: column;

			&>view:nth-child(2) {
				height: 17px;
				opacity: 1;
				font-size: 12px;
				color: #ebd095;
			}

			&>view:nth-child(1) {
				display: flex;
				justify-content: space-between;

				&>image {
					width: 24px;
					height: 24px;
					// opacity: 1;
					// background: #ebd095;
					// border-radius: 50%;
				}

				&>view {
					height: 20px;
					opacity: 1;
					font-size: 14px;
					color: #ebd095;
				}
			}
		}
	}

	page {
		margin: 0;
		padding: 0;
		background: #f9f7f7;
	}

	// .content {
	// 	height: 340px;
	// }

	.my_nav {
		width: 100%;
		height: 135px;
		background-color: #25b85b;
		box-sizing: border-box;

		// 头部
		.header {
			padding: 0 15px;
			width: 100%;
			height: 60px;
			font-size: 14px;
			margin-bottom: 37px;
			box-sizing: border-box;

			.inform {
				overflow: hidden;

				image {
					width: 16px;
					height: 16px;
					float: right;

					&:nth-child(2) {
						margin-right: 20px;
					}
				}
			}

			.message {
				overflow: hidden;
				color: #ffffff;
				display: flex;
				justify-content: space-between;

				&>view image {
					width: 52px;
					height: 52px;
					vertical-align: middle;
				}

				&>view text:nth-child(2) {
					height: 25px;
					font-size: 18px;
					vertical-align: middle;
					margin-left: 18px;
				}

				&>text {
					// float: right;
					display: inline-block;
					margin-top: 40px;
					padding: 2px 10px;
					width: 75px;
					height: 18px;
					border: 1px solid #ffffff;
					border-radius: 10px;
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

		.list {
			padding: 0 20px;
			margin-top: -80px;
			margin-bottom: 17px;

			ul {
				padding: 20px 15px;
				list-style: none;
				box-sizing: border-box;
				background-color: #FFFFFF;
				height: 74px;
				opacity: 1;
				border-radius: 7px;
				display: flex;
				justify-content: space-between;

				li {
					// float:left;
					width: 24.5%;
					text-align: center;
					font-size: 14px;
					border-right: 1px solid rgba(153, 153, 153, .3);

					&:last-child {
						border-right: none;
					}

					p {
						color: #333333;
					}

					text {
						color: #7d7d7d
					}
				}
			}
		}

		// 我的车辆
		.mycar {
			padding: 15px;
			padding-top: 0;

			.my_box {
				height: 94px;
				padding: 28px 16px 25px 15px;
				box-sizing: border-box;
				background-color: #FFFFFF;
				display: flex;
				justify-content: space-between;

				.title {
					// float:left;
					width: 36px;
					height: 47px;
					opacity: 1;
					font-size: 18px;
					color: #4f4f4f;
					line-height: 22px;
					// margin-right: 40px;
				}

				.car {
					float: left;
					font-size: 12px;

					.type {
						line-height: 22px;

						image {
							width: 19px;
							height: 19px;
							vertical-align: middle;
							margin-right: 5px;
						}

						text {
							vertical-align: middle;
						}
					}

					text {
						line-height: 22px;
					}
				}

				.img {
					// float: right;
					margin-top: 10px;
					width: 10px;
					height: 19px;
				}
			}
		}
	}

	.loginIn {
		padding: 0 15px;
		width: 100%;
		height: 60px;
		font-size: 14px;
		margin-bottom: 37px;
		box-sizing: border-box;

		&>.message {

			overflow: hidden;
			color: #ffffff;
			display: flex;
			justify-content: space-between;
			align-items: center;

			&>view image {
				width: 52px;
				height: 52px;
				vertical-align: middle;
			}

			&>view text:nth-child(2) {
				height: 25px;
				font-size: 18px;
				vertical-align: middle;
				margin-left: 18px;
			}

			&>text {
				// float: right;
				display: inline-block;
				padding: 2px 10px;
				width: 75px;
				height: 18px;
				border: 1px solid #ffffff;
				border-radius: 10px;
			}
		}

		.loginIn-con {
			display: flex;
			align-items: center;

			&>view {
				margin-left: 18px;

				&>view:nth-child(1) {
					height: 25px;
					opacity: 1;
					font-size: 18px;
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
</style>
