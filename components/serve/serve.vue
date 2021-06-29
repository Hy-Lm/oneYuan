<template>
	<!-- 享服务 -->
	<view class="serve_content">
		<view class="serve_con">
			<view class="header">
				<text>享服务</text>
				<text>优质线下门店</text>
				<view @click="more()">更多
					<image src="../../static/arrows.png" mode="aspectFit"></image>
				</view>
			</view>
			<!-- 类型 -->
			<view class="type" @click="open">
				<view class="left">
					<image src="../../static/2.jpg" mode="aspectFit"></image>
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
			
			<view class="type">
				<view class="left">
					<image src="../../static/2.jpg" mode="aspectFit"></image>
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
			<view class="type">
				<view class="left">
					<image src="../../static/2.jpg" mode="aspectFit"></image>
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
			open(){
				if(this.isSearch) return
				console.log('open')
				uni.navigateTo({
					url:"/components/index/shop/shop"
				})
			},
			more(){
				console.log('more')
				uni.navigateTo({
					url:"/components/index/more-service/more-service"
				})
			}
		}
	}
</script>

<style lang="scss">
page {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	background-color:#F9F7F7 ;
}
.serve_content{
	padding: 0 15px;
	box-sizing: border-box;
	width: 100%;
	.serve_con{
		height: 285px;
		padding: 13px 16px;
		background: #ffffff;
		border-radius: 10px 10px 0px 0px;
		box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.16); 
	}
}
.header{
	width: 100%;
	height: 25px;
	padding: 7px 0 15px 0;
	text:nth-child(1){
		font-size: 18px;
		font-weight: bold;
		color: #000000;
	}
	text:nth-child(2){
		margin-left: 10px;
		font-size: 12px;
		color: #7d7d7d;
	}
	view:nth-child(3){
		float: right;
		width: 35px;
		height: 25px;
		line-height: 25px;
		font-size: 12px;
		color: #000000;
		image{
			width: 5px;
			height: 10px;
			opacity: 1;
			margin-left: 5px;
		}
	}
}
// 类型
.type{
	width: 100%;
	overflow: hidden;
	margin-bottom: 10px;
	.left{
		float: left;
		width: 71px;
		height: 71px;
		margin-right: 10px;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.right{
		float: right;
		text-align: left;
		width: calc(100% - 81px);
		height: 71px;
		view:nth-child(1){
			height: 22px;
			opacity: 1;
			font-size: 16px;
			text-align: left;
			color: #000000;
		}
		view:nth-child(2){
			padding: 5px 0 4px 0;
			height: 17px;
			opacity: 1;
			font-size: 12px;
			text-align: left;
			color: #000000;
			text{
				margin-right: 12px;
			}
		}
		view:nth-child(3){
			height: 17px;
			opacity: 1;
			font-size: 12px;
			text-align: left;
			color: #000000;
			.km{
				float: right;
			}
		}
	}
}
</style>
