<template>
	<view>
		<!-- <view class="bg">
		</view> -->
		<view class="type">
			<view class="left">
				<image src="../../../../static/4a24fe8ff305fc17c7e0eee2950db1f.png" mode="aspectFit"></image>
			</view>
			<view class="right">
				<view>益园养车（北辰区店）</view>
				<view>
					<text>总评分 4.6</text>
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
				uni.redirectTo({
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
		background-color:#f1f1f1;
		width: 100%;
		height: 12px;
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
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			view:nth-child(1) {
				height: 24px;
				line-height: 22px;
				opacity: 1;
				font-size: 18px;
				text-align: left;
				color: #333333;
			}

			view:nth-child(2) {
				// padding: 5px 0 4px 0;
				height: 17px;
				opacity: 1;
				font-size: 14px;
				text-align: left;
				color: #CD2727;

				text {
					margin-right: 12px;
				}
			}

			view:nth-child(3) {
				height: 17px;
				opacity: 1;
				font-size: 14px;
				text-align: left;
				color: #666666;

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
				background: #CD2727 ;
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
				color: #333333;
			}
		}
		.price{
			.yuanjia , .youhui , .shifuk{
				overflow: hidden;
				padding: 7px 0;
				height: 20px;
				font-size: 14px;
				color: #333333;
			}
			.shifuk{
				text:nth-child(2){
					font-size: 16px;
					color: #CD2727;
				}
			}
		}
	}
	.footer{
		position: absolute;
		bottom: 10px;
		width: calc(100% - 64px);
		margin: 0 32px;
		height: 34px;
		line-height: 34px;
		color:#FFFFFF;
		opacity: 1;
		background: #0d8600;
		border-radius: 17px;
		text-align: center;
	}
</style>
