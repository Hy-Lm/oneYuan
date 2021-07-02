<template>
	<view>
		<view class="bg">
			<image src="../../../../static/组272.png" mode=""></image>
			<view>预约成功</view>
		</view>
		<view class="type">
			<view class="left">
				<image src="../../../../static/bg.png" mode="aspectFit"></image>
			</view>
			<view class="right">
				<view>益园养车（北辰区店）</view>
				<view>
					<text>总评分 4.6</text><text>总评价 265</text>
				</view>
				<view>
					<text>天津市北辰区北辰公园南100米</text>
					<text class="km">2.22km</text>
				</view>
			</view>
		</view>
		<view class="detail_xq">
			<view class="detail_xq_h">
				<text>普通洗车</text><text>内饰清洗</text>
				<text>2021年5月25日下午3点</text>
			</view>
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
			</view>
		</view>
		<view class="footer" @click="cancel()">
			取消预约
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
			cancel(){
				uni.navigateTo({
					url:"/components/index/shop/service/service"
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F1F1F1;
	}
.left{
	float:left;
}
.right{
	float:right;
}
	.bg {
		background-color: #FFFFFF;
		width: 100%;
		height: 96px;
		text-align: center;

		image {
			padding: 6px 0;
			width: 50px;
			height: 50px;
		}

		view {
			width: 100%;
			height: 25px;
			font-size: 18px;
			color: #0d8600;
		}
	}

	.type {
		width: 100%;
		padding: 10px 15px;
		box-sizing: border-box;
		overflow: hidden;
		background-color: #FFFFFF;
		margin: 10px 0;

		.left {
			float: left;
			width: 71px;
			height: 71px;
			margin-right: 10px;
			image {
				width: 100%;
				height: 100%;
			}
		}

		.right {
			float: right;
			text-align: left;
			width: calc(100% - 81px);
			height: 71px;

			view:nth-child(1) {
				height: 24px;
				line-height: 22px;
				opacity: 1;
				font-size: 18px;
				text-align: left;
				color: #000000;
			}

			view:nth-child(2) {
				padding: 5px 0 4px 0;
				height: 17px;
				opacity: 1;
				font-size: 14px;
				text-align: left;
				color: #000000;

				text {
					margin-right: 12px;
				}
			}

			view:nth-child(3) {
				height: 17px;
				opacity: 1;
				font-size: 14px;
				text-align: left;
				color: #000000;

				.km {
					float: right;
				}
			}
		}
	}

	.detail_xq {
		padding: 0 15px;
		background-color: #FFFFFF;
		.detail_xq_h{
			padding: 15px 0;
			text:nth-child(1),
			text:nth-child(2){
				height: 23px;
				line-height: 23px;
				padding:2px 8px;
				color: #FFFFFF;
				font-size: 14px;
				background: #0d8600;
				border-radius: 7px;
			}
			text:nth-child(1){
				margin-right: 10px;
			}
			text:nth-child(3){
				float:right;
				height: 23px;
				line-height: 23px;
				font-size: 14px;
				color: #000000;
			}
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
		}
	}
	.footer{
		margin: 0 32px;
		margin-top: 30px;
		font-size: 18px;
		height: 34px;
		line-height: 34px;
		color:#FFFFFF;
		opacity: 1;
		background: #0d8600;
		border-radius: 17px;
		text-align: center;
	}
</style>
