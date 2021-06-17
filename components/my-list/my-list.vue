<template>
	<view class="content">
		<view class="box">
			<ul>
				<li @click="MyRecord">
					<image src="../../static/维修记录.png" ></image>
					<text>维修记录</text>
				</li>
				<li>
					<image src="../../static/优惠券.png" ></image>
					<text>我的优惠券</text>
				</li>
				<li>
					<image src="../../static/页面-1.png" ></image>
					<text>联系客户</text>
				</li>
				<li>
					<image src="../../static/积分.png" ></image>
					<text>积分商城</text>
				</li>
				<li @click="mySet">
					<image src="../../static/设置.png" ></image>
					<text>设置</text>
				</li>
			</ul>
		</view>
		
		<view class="box">
			<ul>
				<li>
					<image src="../../static/订单.png"></image>
					<text>我的订单</text>
				</li>
				<li>
					<image src="../../static/应急救援.png" ></image>
					<text>道德救援</text>
				</li>
				<li>
					<image src="../../static/爱车估价.png" ></image>
					<text>爱车评估</text>
				</li>
				<li>
					<image src="../../static/车险.png" ></image>
					<text>车险</text>
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
			}
		}
	}
</script>

<style lang="scss">
.content{
	padding: 0 20px;
	.box{
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
		background-color: #FFFFFF;
		margin-bottom: 20px;
		ul{
			padding: 0 15px;
			list-style: none;
			li{
				padding: 10px 0;
				image{
					width: 19px;
					height: 18px;
					vertical-align: middle;
					margin-right: 20px;
				}
				text{
					vertical-align: middle;
					font-size: 16px;
					color: #000000;
				}
			}
		}
	}
}

</style>
