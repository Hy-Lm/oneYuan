<template>
	<view class="content">
		<view class="my_nav">
			<view class="header">
				<view class="inform">
					<image src="../../static/通知(3).png" mode=""></image>
					<image @click="mySet"  src="../../static/设置(2).png" mode=""></image>
				</view>
				<view class="message">
					<image src="../../static/bg.png" mode=""></image>
					<text>益园养车</text>
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
					<li>
						<p>我的预约</p>
						<text>2</text>
					</li>
					<li>
						<p>优惠券</p>
						<text>2</text>
					</li>
					<li>
						<p>购物车</p>
						<text>2</text>
					</li>
				</ul>
			</view>
			<!-- 我的 -->
			<view class="mycar">
				<view class="my_box">
					<text class="title">我的<br/>车辆</text>
					<view class="car">
						<view class="type">
							<image src="../../static/preview.png" mode=""></image>
							<text>津A9996J</text>
						</view>
						<text>2021款 320i 自动挡</text>
					</view>
					<image class="img" src="../../static/arrows.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-nav",
		data() {
			return {
				
			};
		},
		methods:{
			//跳转到我的设置页面
			mySet(){
				uni.navigateTo({
				    url: '/pages/my-set/my-set'
				});
			},
			myIntegral(){//跳转积分详情
				console.log(1)
				uni.navigateTo({
					url:"/pages/myIntegral/myIntegral"
				})
				
			}
		}
	}
</script>

<style lang="scss">
page{
	margin: 0;
	padding: 0;
	background: #f9f7f7;
}
	.content{
		height: 300px;
	}
	.my_nav {
		width: 100%;
		height: 135px;
		background-color: #0D8600;
		box-sizing: border-box;

		// 头部
		.header {
			padding: 0 30px;
			width: 100%;
			height: 60px;
			font-size: 14px;
			margin-bottom: 37px;
			box-sizing: border-box;
			.inform{
				overflow: hidden;
				image {
					width: 16px;
					height: 16px;
					float: right;
					&:nth-child(2){
						margin-right: 20px;
					}
				}
			}
			.message{
				overflow: hidden;
				color: #ffffff;
				image{
					width: 52px;
					height: 52px;
					vertical-align: middle;
				}
				text:nth-child(2){
					height: 25px;
					font-size: 18px;
					vertical-align: middle;
					margin-left: 30px;
				}
				text:nth-child(3){
					float:right;
					margin-top:14px;
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
		.list{
			padding: 0 20px;
			margin-top: -80px;
			ul{
				padding:20px;
				list-style: none;
				box-sizing: border-box;
				background-color: #FFFFFF;
				height: 74px;
				opacity: 1;
				border-radius: 7px;
				li{
					float:left;
					width: 25%;
					text-align: center;
					font-size: 14px;
					p{
						color: #000000;
					}
					text{
						color: #7d7d7d
					}
				}
			}
		}
		// 我的车辆
		.mycar{
			padding: 20px;
			.my_box{
				height: 94px;
				padding:28px 40px 25px 15px;
				box-sizing: border-box;
				background-color: #FFFFFF;
				.title{
					float:left;
					width: 36px;
					height: 47px;
					opacity: 1;
					font-size: 18px;
					color: #4f4f4f;
					line-height: 22px;
					margin-right: 40px;
				}
				.car{
					float: left;
					font-size: 12px;
					padding-top: 5px;
					.type{
						image{
							width: 19px;
							height: 19px;
							vertical-align: middle;
							margin-right: 5px;
						}
						text{
							vertical-align: middle;
						}
					}
				}
				.img{
					float: right;
					margin-top: 10px;
					width: 10px;
					height: 19px;
				}
			}
		}
	}
</style>
