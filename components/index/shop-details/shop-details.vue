<template>
	<view class="shop-details-box">
		<view class="shop-header">
			<image src="../../../static/shangxin3.png" ></image>
			<view class="xiangqing">
				<view class="title">固特威汽车三元催化剂发动机喷油 嘴内部除积碳</view>
				<view class="collect">收藏</view>
				<view class="price">￥650</view>
				<view class="con">
					<text>线下价格 ￥1356</text>
					<text>发货：天津</text>
				</view>
			</view>
			<view class="delivery">配送至：北辰区</view>
		</view>
		<!-- 商品详情 -->
		<view class="shop-xq">
			<view class="spxq">商品详情</view>
			<image src="../../../static/special.jpg" mode=""></image>
		</view>
		<view class="footer">
			<view class="footer_left">
				<image src="../../../static/service.png" mode=""></image>
				<text>客服</text>
			</view>
			<view class="footer_right">
				<text>加入购物车</text>
				<text>立即购买</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
.shop-details-box{
	position: relative;
}
.shop-header{
	image{
		width: 100%;
		height: 251px;
	}
	.xiangqing{
		padding: 0 30px;
		.title{
			width: 80%;
			display: inline-block;
			font-size: 16px;
			color: #000000;
			padding: 10px 0 5px 0;
		}
		.collect{
			width: 20%;
			display: inline-block;
			text-align: right;
			font-size: 16px;
			color: #7d7d7d;
		}
		.price{
			height: 30px;
			line-height: 30px;
			font-size: 16px;
			font-weight: bold;
			color: #cd2727;
		}
		.con{
			height: 20px;
			font-size: 14px;
			color: #7d7d7d;
			text:nth-child(2){
				float:right;
				padding-right: 20px;
			}
		}
	}
	.delivery{
		height: 42px;
		margin: 10px 0 0 0;
		padding-left: 30px;
		width: 100%;
		line-height: 42px;
		background: #ffffff;
		box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.16); 
		font-size: 14px;
		color: #7d7d7d;
	}
}
.shop-xq{
	background: #f1f1f1;
	.spxq{
		padding: 20px 0 5px 30px;
		height: 20px;
		font-size: 14px;
		color: #000000;
	}
	image{
		width: 100%;
		height: 266px;
	}
}
.footer{
	position: absolute;
	box-sizing: border-box;
	bottom: 0;
	background-color: #FFFFFF;
	padding: 25px 30px 30px 30px;
	width: 100%;
	.footer_left{
		// display: inline-block;
		float: left;
		image{
			width: 16px;
			height: 16px;
			margin-right: 7px;
			background-color: #515151;
		}
		text{
			height: 22px;
			font-size: 16px;
			color: #515151;
		}
	}
	.footer_right{
		// display: inline-block;
		float: right;
		text{
			height: 28px;
			font-size: 16px;
			padding: 3px 11px;
			&:nth-child(1){
				border-radius: 14px 0px 0px 14px;
				background: #707070;
				color: #fff0c9;
			}
			&:nth-child(2){
				border-radius: 0px 14px 14px 0px;
				background: #cd2727;
				color: #ffffff;
			}
		}
	}
}
</style>
