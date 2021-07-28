<template>
	<view class="orders-item">
		<!-- 商品列表 -->
		<view>
			<view>
				<view>
					<image src="../../static/订单.png" mode=""></image>
				</view>
				<view>益园养车</view>
				<view>
					<image src="../../static/arrows.png" mode=""></image>
				</view>
			</view>
			<!-- {{item.actives}} -->
			<view v-if="!item.actives">待付款</view>
			<view v-if="item.actives && item.shipments">待收货</view>
			<view v-if="item.actives && !item.shipments">待发货</view>
		</view>
		<view>
			<view>
				<image :src="item.img" mode=""></image>
			</view>
			<view>
				<view>{{item.title}}</view>
				<view>
					<view>{{item.call}}</view>
					<view class="numBer"  v-if="item.actives && item.shipments">
						<view @click="subtract">-</view>
						<view style="font-size: 12px;">{{item.num}}</view>
						<view @click="augment">+</view>
					</view>
					<view v-else >x<text>{{item.num}}</text></view>
				</view>
			</view>
		</view>
		<view>
			<view>总价￥<text>{{item.zong_mony*item.num}}</text></view>
			<view>优惠￥<text>{{item.sale}}</text></view>
			<view>实付款￥<text>{{item.zong_mony*item.num-item.sale}}</text></view>
		</view>
		<view>
			<view @click="payment(1)" style="background-color: #CD2727;" v-if="!item.actives">付款</view>
			<view @click="payment(2)" style="background-color: #F8981D;" v-if="!item.actives">联系客服</view>
			<view @click="payment(3)" style="background-color: #F8981D;" v-if="item.actives && item.shipments">再次购买</view>
			<view @click="payment(4)" style="background-color: #F8981D;" v-if="item.actives && !item.shipments">修改地址</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "orders-item",
		// 组件接收传值
		props:{
			item:{
				type:Object,
				default:{}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			subtract(val){
				if(this.item.num>1){
					this.item.num--
				}
			},
			augment(val){
				this.item.num++
			},
			payment(value){
				console.log(value)
				if(value==1){
					uni.navigateTo({
						url:"/pages/payment/payment"
					})
				}
				if(value==2){
					console.log("点击了联系客服")
					// uni.navigateTo({
					// 	url:"/pages/newUpdate-address/newUpdate-address"
					// })
				}
				if(value==3){
					console.log("点击了在此购买")
					// uni.navigateTo({
					// 	url:"/pages/newUpdate-address/newUpdate-address"
					// })
				}
				if(value==4){
					uni.navigateTo({
						url:"/pages/newUpdate-address/newUpdate-address"
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 
	.numBer{
		width: 60px;
		height: 20px;
		border: 1px solid #666666;
		border-radius: 10px;
		font-size: 20px;
		display: flex;
		justify-content: space-around;
		align-items:center;
	}
	.orders-item {
		background: #fff;
		height: 192px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-end;
		padding: 6px 15px;
		border-bottom: 1px solid #EDEDED;
		margin-bottom: 15px;
		box-sizing: border-box;
		&:last-child{
			border: none;
		}
		&>view:nth-child(4){
			width: 160px;
			display: flex;
			flex-direction:row-reverse;
			justify-content: space-between;
			&>view{
				width: 74px;
				height: 24px;
				opacity: 1;
				// border: 1px solid #707070;
				border-radius: 12px;
				line-height: 24px;
				font-size: 12px;
				text-align: center;
				color: #fff;
			}
			
		}
		&>view:nth-child(3){
			&>view{
				margin-right: 7px;
			}
			opacity: 1;
			font-size: 12px;
			color: #515151;
			display: flex;
			justify-content: right;
			&>view:nth-child(3){
				font-weight: 700;
				color: #000000;
			}
		}
		&>view:nth-child(2){
			display: flex;
			&>view:nth-child(2){
				// margin: 0 24px 0 13px;
				margin-left: 14px;
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				opacity: 1;
				font-size: 12px;
				color: #7d7d7d;
				&>view:nth-child(1){
					height: 40px;
					opacity: 1;
					font-size: 14px;
					color: #000000;
				}
				&>view:nth-child(2){
					display: flex;
					justify-content: space-between;
				}
			}
			
			&>view:nth-child(1){
				width: 73px;
				height: 73px;
				opacity: 1;
				background: rgba(0,0,0,0.00);
				border-radius: 6px;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		&>view:nth-child(1) {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			&>view:nth-child(2){
				opacity: 1;
				font-size: 12px;
				color: #f0923c;
			}
			&>view:nth-child(1) {
				display: flex;
				align-items: center;
				&>view:nth-child(2) {
					height: 20px;
					opacity: 1;
					font-size: 14px;
					color: #000000;
					margin-right: 10px;
				}

				&>view:nth-child(3) {
					width: 5px;
					height: 9px;
					position: relative;
					top:-6px;
					image {
						width: 100%;
						height: 100%;
					}
				}

				&>view:nth-child(1) {
					width: 17px;
					height: 16px;
					margin-right: 10px;
					image {
						width: 100%;
						height: 100%;
					}
				}

			}
		}
	}
</style>
