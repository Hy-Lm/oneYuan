<template>
	<view class="myIntegral">
		<!-- 我的积分 -->
		<view class="myIntegralTop">
			{{subsidiary}}
			<image class="myIntegralTop-icon" src="../../static/clock.png" mode=""></image>
			<view class='myIntegralTopBtn'>
				<view class="TopBtn" @click="total">积分兑换</view>
				<view class="subsidiarys" @click="mySubsidiary">明细 <view class="images"><image src="../../static/arrow-right.svg" mode='aspectFit'></image></view></view>
			</view>
		</view>
		<view class="myIntegralBox">
			每日任务
		</view>
		<view class='myIntegralList'>
			<!-- @click="sign" -->
			<view class="myIntegralListBox" >
				<view class="myIntegralListBoxLeft">
					<view style="width: 16px; height: 16px;">
						<image src="../../static/签到.png"  mode='aspectFit' style="width: 100%; height: 100%;"></image>
					</view>
					<view style="margin: 0 10px 0 20px;" >每日签到</view>
					<view>+5</view>
					<image class="myIntegralTop-icon" src="../../static/clock.png" mode=""></image>
				</view>
				<view class="myIntegralListBoxRight">
					<image src="../../static/arrow-right2c.svg"  mode='aspectFit' style="width: 100%; height: 100%;"></image>
				</view>
			</view>
			<!-- @click="make" -->
			<view class="myIntegralListBox" >
				<view class="myIntegralListBoxLeft">
					<view style="width: 16px; height: 16px;">
						<image src="../../static/分享.png"  mode='aspectFit' style="width: 100%; height: 100%;"></image>
					</view>
					<view style="margin: 0 10px 0 20px;">完成预约</view>
					<view>+5</view>
					<image class="myIntegralTop-icon" src="../../static/clock.png" mode=""></image>
				</view>
				<view class="myIntegralListBoxRight">
					<image src="../../static/arrow-right2c.svg"  mode='aspectFit' style="width: 100%; height: 100%;"></image>
				</view>
			</view>
			<view class="myIntegralListBox">
				<view class="myIntegralListBoxLeft">
					<view style="width: 16px; height: 16px;">
						<image src="../../static/更换.png"  mode='aspectFit' style="width: 100%; height: 100%;"></image>
					</view>
					<view style="margin: 0 10px 0 20px;">配件更换</view>
					<view>+5</view>
					<image class="myIntegralTop-icon" src="../../static/clock.png" mode=""></image>
				</view>
				<view class="myIntegralListBoxRight">
					<image src="../../static/arrow-right2c.svg"  mode='aspectFit' style="width: 100%; height: 100%;"></image>
				</view>
			</view>
		</view>
		
		<view class="myIntegralBox">
			获得更多积分
		</view>
		<view class='myIntegralList'>
			<view class="myIntegralListBox">
				<view class="myIntegralListBoxLeft">
					<view style="width: 16px; height: 16px;">
						<image src="../../static/保养.png"  mode='aspectFit' style="width: 100%; height: 100%;"></image>
					</view>
					<view style="margin: 0 10px 0 20px;">保养完成</view>
					<view>1元=1</view>
					<image class="myIntegralTop-icon" src="../../static/clock.png" mode=""></image>
				</view>
				<view class="myIntegralListBoxRight">
					<image src="../../static/arrow-right2c.svg"  mode='aspectFit' style="width: 100%; height: 100%;"></image>
				</view>
			</view>
			<view class="myIntegralListBox">
				<view class="myIntegralListBoxLeft">
					<view style="width: 16px; height: 16px;">
						<image src="../../static/洗车.png"  mode='aspectFit' style="width: 100%; height: 100%;"></image>
					</view>
					<view style="margin: 0 10px 0 20px;">洗车完成</view>
					<view>1元=1</view>
					<image class="myIntegralTop-icon" src="../../static/clock.png" mode=""></image>
				</view>
				<view class="myIntegralListBoxRight">
					<image src="../../static/arrow-right2c.svg"  mode='aspectFit' style="width: 100%; height: 100%;"></image>
				</view>
			</view>
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
			},
			sign(){
				// 签到先调用后端接口增加积分回调成功调用方法
				uni.showToast({
				    title: '签到成功',
				    duration: 2000
				});
			},
			// make(){
			// 	// 跳转页面
			// 	console.log(10)
			// 	uni.showToast({
			// 	    title: '跳转可预约业务页面',
			// 	    duration: 2000,
			// 		icon:"none"
			// 	});
			// },
			// parts(){
			// 	uni.showToast({
			// 	    title: '跳转更换配件页面',
			// 	    duration: 2000,
			// 		icon:"none"
			// 	});
			// },
			total(){
				uni.navigateTo({
					url:"/pages/total/total"
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
		font-family: PingFang SC, PingFang SC-Regular;
		font-weight: 400;
		.myIntegralTop{
			width: 100%;
			height: 100px;
			background: #25b85b;
			line-height: 100px;
			text-align: center;
			color:#fff;
			font-size: 30px;
			position: relative;
			.myIntegralTop-icon{
				margin-left: 12px;
				width: 14px;
				height: 12px;
			}
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
					background: #f8981d;
					color:#FFFFFF;
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
			height: 50px;
			line-height: 50px;
			background: #f1f1f1;
			padding: 0 20px;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 700;
			color: #333333;
		}
		.myIntegralList{
			width: calc(100% - 40px);
			padding: 0 20px;
			height: 150px;
			// border-top: 1px solid #707070;
			// border-bottom: 1px solid #707070;
			.myIntegralListBox{
				width: 100%;
				height: 50px;
				border-bottom: 1px solid rgba(153, 153, 153, .3) ;
				display: flex;
				align-items:center;
				justify-content:space-between;
				color: #333333;
				.myIntegralListBoxLeft{
					display: flex;
					.myIntegralTop-icon{
						margin-left: 13px;
						width: 14px;
						height: 12px;
					}
				}
				.myIntegralListBoxRight{
					width: 10px;
					height: 20px;
				}
			}
			.myIntegralListBox:last-child{
				border: none;
			}
		}
	}
</style>
