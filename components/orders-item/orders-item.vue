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
			<view>{{item.actives}}</view>
		</view>
		<view>
			<view>
				<image :src="item.img" mode=""></image>
			</view>
			<view>
				<view>{{item.title}}</view>
				<view>
					<view>{{item.call}}</view>
					<view>x<text>{{item.num}}</text></view>
				</view>
			</view>
		</view>
		<view>
			<view>总价￥<text>{{item.zong_mony}}</text></view>
			<view>优惠￥<text>{{item.sale}}</text></view>
			<view>实付款￥<text>{{item.zong_mony-item.sale}}</text></view>
		</view>
		<view>
			<view @click="payment(item.btn1)">{{item.btn1}}</view>
			<view @click="payment(item.btn2)" v-if="item.active">{{item.btn2}}</view>
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
			payment(value){
				console.log(value)
				if(value=='付款'){
					uni.navigateTo({
						url:"/pages/payment/payment"
					})
				}
				if(value=='修改地址'){
					uni.navigateTo({
						url:"/pages/newUpdate-address/newUpdate-address"
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.orders-item {
		width: 339px;
		height: 192px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-end;
		padding: 6px 12px;
		border-bottom: 1px solid #C0C0C0;
		margin-bottom: 15px;
		box-sizing: border-box;
		&>view:nth-child(4){
			display: flex;
			&>view{
				margin: 0 10px;
				width: 73px;
				height: 21px;
				opacity: 1;
				border: 1px solid #707070;
				border-radius: 12px;
				line-height: 21px;
				font-size: 12px;
				text-align: center;
				color: #515151;
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
				margin: 0 24px 0 13px;
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
					&>view:nth-child(1){
						margin-right: 102px;
					}
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
