<template>
	<view>
		<view class="service">
			<view class="shopname">天津市宝岗汽修厂</view>
			<view class="type">内饰清洗</view>
			<view class="server">
				<text>随时退</text>
				<text>过期退</text>
			</view>
			<image class="img1" src="../../../../static/tu2.png" mode=""></image>
			<view class="price">
				<view class="yuanjia">
					<text class="left">原价：</text>
					<text class="right">￥299</text>
				</view>
				<view class="youhui">
					<text class="left">优惠：</text>
					<text class="right">￥131</text>
				</view>
				<view class="shifuk">
					<text class="left">实付款：</text>
					<text class="right">￥168</text>
				</view>
				<view class="bg">
					
				</view>
			</view>
		</view>
		<view class="particulars">
			<view>店铺详情</view>
			<image src="../../../../static/tu1.png" mode=""></image>
		</view>
		<view class="footer">
			<view class="footer_box">
				<view>
					<image src="../../../../static/清单.png" mode=""></image>
					<text>清单</text>
				</view>
				<view>
					￥168.00
				</view>
				<view @click="order">
					立即预约
				</view>
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
			order(){
				console.log('order')
				if(this.isSearch) return
				uni.navigateTo({
					url:"/components/index/shop/order/order"
				})
			}
		}
	}
</script>

<style lang="scss">
.left{
	float:left;
}
.right{
	float:right;
}
.service{
	width: 100%;
	padding: 0 15px;
	box-sizing: border-box;
	.shopname{
		height: 20px;
		font-size: 14px;
		color: #000000;
	}
	.type{
		height: 25px;
		font-size: 18px;
		font-weight: bold;
		color: #000000;
	}
	.server{
		height: 17px;
		font-size: 12px;
		color: #000000;
		text:nth-child(2){
			margin-left: 15px;
			border-left: 1px solid #999999;
			padding-left: 5px;
		}
	}
	.img1{
		padding: 15px 0;
		width: 100%;
		height: 167px;
	}
	
	.price{
		.yuanjia , .youhui , .shifuk{
			overflow: hidden;
			padding: 7px 0;
			height: 20px;
			font-size: 14px;
			color: #000000;
		}
		.shifuk{
			text:nth-child(2){
				font-size: 16px;
				color: #cd2727;
			}
		}
		.bg{
			width: 100%;
			height: 1px;
			border-bottom: 1px solid #707070;
			opacity: 0.43;
		}
	}
}
.particulars{
	width: 100%;
	padding: 0 25px;
	box-sizing: border-box;
	// background-color: red;
	text-align: center;
	view{
		padding: 12px 0;
		height: 20px;
		font-size: 14px;
		color: #000000;
		position: relative;
		&::after{
			content: '';
			width: 38px;
			height: 1px;
			position: absolute;
			left: calc(100%/2 - 80px );
			top: 20px;
			opacity: 0.5;
			background-color: #000000;
		}
		&::before{
			content: '';
			width: 38px;
			height: 1px;
			position: absolute;
			right: calc(100%/2 - 80px );
			top: 20px;
			opacity: 0.5;
			background-color: #000000;
		}
	}
	image{
		width: 100%;
		height: 250px;
	}
}
.footer{
	width: 100%;
	height: 80px;
	padding: 18px 25px;
	box-sizing: border-box;
	text-align: center;
	overflow: hidden;
	.footer_box{
		position: relative;
		view:nth-child(1){
			position: absolute;
			image{
				width: 21px;
				height: 26px;
			}
			text{
				display: block;
				width: 24px;
				height: 17px;
				font-size: 12px;
				color: #000000;
			}
		}
		view:nth-child(3){
			position: absolute;
			right:0;
			top:10px;
			width: 90px;
			height: 25px;
			line-height: 25px;
			font-size: 18px;
			opacity: 1;
			background: #f0923c;
			border-radius: 13px;
		}
		view:nth-child(2){
			width: 100%;
			box-sizing: border-box;
			padding: 0 90px  0 25px;
			line-height: 44px;
			text-align: center;
			font-size: 16px;
			color: #cd2727;
		}
	}
}
</style>
