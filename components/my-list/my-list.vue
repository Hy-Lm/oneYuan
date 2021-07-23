<template>
	<view class="content">
		<view class="box">
			<ul>
				<li @click="MyRecord">
					<image src="../../static/维修记录.png" ></image>
					<text>维修记录</text>
					<image class="arrows" src="../../static/images/arrows@3x.png" mode=""></image>
				</li>
				<li @click="MyDiscounts ">
					<image src="../../static/优惠券.png" ></image>
					<text>我的优惠券</text>
					<image class="arrows" src="../../static/images/arrows@3x.png" mode=""></image>
				</li>
				<li>
					<image src="../../static/页面-1.png" ></image>
					<text>联系客服</text>
					<view>
						<text>人工客服：8:00-20:00</text>
						<image src="../../static/images/arrows@3x.png" mode=""></image>
					</view>
				</li>
				<li @click="myTotal">
					<image src="../../static/积分.png" ></image>
					<text>积分商城</text>
					<view>
						<text>积分兑好礼</text>
						<image src="../../static/images/arrows@3x.png" mode=""></image>
					</view>
				</li>
				<li @click="mySet">
					<image src="../../static/设置.png" ></image>
					<text>设置</text>
					<image class="arrows" src="../../static/images/arrows@3x.png" mode=""></image>
				</li>
			</ul>
		</view>
		
		<view class="box">
			<ul>
				<li @click="myOrders">
					<image src="../../static/订单.png"></image>
					<text>我的订单</text>
					<image class="arrows" src="../../static/images/arrows@3x.png" mode=""></image>
				</li>
				<li @click="MyRescue">
					<image src="../../static/应急救援.png" ></image>
					<text>道路救援</text>
					<image class="arrows" src="../../static/images/arrows@3x.png" mode=""></image>
				</li>
				<li @click="myAssess">
					<image src="../../static/爱车估价.png" ></image>
					<text>爱车评估</text>
					<image class="arrows" src="../../static/images/arrows@3x.png" mode=""></image>
				</li>
				<li @click="myInsurance">
					<image src="../../static/车险.png" ></image>
					<text>车险</text>
					<image class="arrows" src="../../static/images/arrows@3x.png" mode=""></image>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-list",
		data() {
			return {
				
			};
		},
		methods:{
			//跳转到我的设置页面
			mySet(){
				// console.log('index')
				uni.navigateTo({
				    url: '/pages/my-set/my-set'
				});
			},
			MyRecord(){
				// 维修记录
				uni.navigateTo({
				    url: '/pages/my-record/my-record'
				});
			},
			MyDiscounts(){
				// 我的优惠券
				uni.navigateTo({
				    url: '/pages/discounts/discounts'
				});
			},
			myTotal(){
				// 积分商城
				uni.navigateTo({
				    url: '/pages/total/total'
				});
			},
			myAssess(){
				// 爱车评估
				uni.navigateTo({
				    url: '/pages/assess/assess'
				});
			},
			myInsurance(){
				// 车险
				uni.navigateTo({
				    url: '/pages/car-insurance/car-insurance'
				});
			},
			myOrders(){
				// 我的订单
				uni.navigateTo({
				    url: '/pages/orders/orders'
				});
			},
			MyRescue(){
				// 道路救援
				uni.navigateTo({
				    url: '/pages/rescue/rescue'
				});
			}
		}
	}
</script>

<style lang="scss">
.content{
	padding: 0 15px;
	.box{
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
		background-color: #FFFFFF;
		margin-bottom: 20px;
		ul{
			width: 100%;
			padding: 0 20px;
			list-style: none;
			box-sizing: border-box;
			li{
				width: 100%;
				// display: flex;
				// // justify-content: space-between;
				// align-items: center;
				padding: 10px 0;
				height: 40px;
				box-sizing: border-box;
				image{
					width: 19px;
					height: 18px;
					vertical-align: middle;
					// margin-right: 20px;
				}
				&>image:nth-child(1){
					margin-right: 20px;
				}
				text{
					vertical-align: middle;
					font-size: 16px;
					color: #333333;
				}
				view{
					float: right;
					right:0;
					
					text{
						height: 17px;
						font-size: 12px;
						color: #707070;
						vertical-align: middle;
						margin-right: 10px;
					}
					image{
						width: 6px;
						height: 11px;
						margin: 0;
						vertical-align: middle;
					}
				}
				.arrows{
					float: right;
					// align-self: flex-end;
					width: 6px;
					height: 11px;
					margin-top:6px;
				}
			}
		}
	}
}

</style>
