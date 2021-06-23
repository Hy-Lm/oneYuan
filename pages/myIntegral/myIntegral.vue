<template>
	<view class="myIntegral">
		<!-- 我的积分 -->
		<view class="myIntegralTop">
			{{subsidiary}}
			<view class='myIntegralTopBtn'>
				<view class="TopBtn">积分兑换</view>
				<view class="subsidiarys" @click="mySubsidiary">明细 <view class="images"><image src="../../static/arrow-right.svg"></image></view></view>
			</view>
		</view>
		<view class="myIntegralBox">
			每日任务
		</view>
		<view class='myIntegralList'>
			<view></view>
			<view></view>
			<view></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				subsidiary:20,//现有积分
				
			}
		},
		methods: {
			mySubsidiary(){
				uni.navigateTo({
					url:"/pages/subsidiary/subsidiary"
				})
			}
		}
	}
</script>

<style lang="scss">
	.myIntegral{
		width: 100%;
		height: calc(100vh - 50px);
		font-size: 14px;
		.myIntegralTop{
			width: 100%;
			height: 100px;
			background: rgba(13,134,0,1);
			line-height: 100px;
			text-align: center;
			color:#fff;
			font-size: 30px;
			position: relative;
			.myIntegralTopBtn{
				width: calc(100% - 60px);
				height: 20px;
				line-height: 20px;
				position: absolute;
				padding: 0 30px;
				left:0;
				bottom:10px;
				display: flex;
				justify-content:space-between;
				align-items:center;
				font-size: 14px;
				.TopBtn{
					padding: 2px 8px;
					background: #fff;
					color:rgba(8,116,26,1);
					border-radius: 15px;
				}
				.subsidiarys{
					display: flex;
					justify-content:space-between;
				}
				.images{
					margin-left: 2px;
					image{
						width: 10px;
						height: 20px;
					}
				}
			}
		}
		.myIntegralBox{
			width: calc(100% - 40px);
			height: 30px;
			line-height: 30px;
			background: #f1f1f1;
			padding: 0 20px;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
		}
		.myIntegralList{
			width: calc(100% - 40px);
			padding: 0 20px;
			height: 150px;
			border-top: 1px solid #707070;
			border-bottom: 1px solid #707070;
			view{
				width: 100%;
				height: 50px;
				border-bottom: 1px solid #707070;
				display: flex;
				justify-content:space-between;
			}
			view:last-child{
				border: none;
			}
		}
	}
</style>
