<template>
	<view>
		<view class="calendar">日历</view>
		<view class="order">
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
				<view class="zhichi">本店支持宝马保养，符合国家三包规定。</view>
			</view>
			<!-- 预订 -->
			<ul class="book">
				<li class="book_time" @click="confirm()">
					<text class="time">08.00-09.30</text>
					<text class="price">￥169</text>
					<text class="state">订满</text>
				</li>
				<li class="book_time" @click="confirm()">
					<text class="time">09.30-11.00</text>
					<text class="price">￥169</text>
					<text class="state">订满</text>
				</li>
				<li class="book_time active" @click="confirm()">
					<text class="time">13.00-14.30</text>
					<text class="price">￥169</text>
					<text class="state">订满</text>
				</li>
				<li class="book_time active" @click="confirm()">
					<text class="time">14.30-16.00</text>
					<text class="price">￥169</text>
					<text class="state">订满</text>
				</li>
			</ul>

			<comment></comment>
		</view>
	</view>
</template>

<script>
	import comment from '@/components/index/shop/comment/comment.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			confirm(){
				uni.navigateTo({
					url:"/components/index/shop/confirm/confirm"
				})
			}
		},
		components:{
			comment
		}
	}
</script>

<style lang="scss">
.calendar{
	height: 50px;
	width: 100%;
	background-color: red;
}
.order{
	padding: 0 30px;
	 overflow: hidden;
	.type{
		width: 100%;
		overflow: hidden;
		padding: 18px 0 12px 0;
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
		.zhichi{
			clear: both;
			padding: 8px 0;
			height: 17px;
			font-size: 12px;
			color: #000000;
		}
	}
	.book{
		padding: 0;
		list-style: none;
		margin-bottom: 20px;
		li:last-child{
			border-bottom: none;
		}
		.book_time{
			border-bottom: 1px solid #ccc;
			padding: 15px 0;
			.time{
				float:left;
				width: 90px;
				height: 22px;
				font-size: 16px;
				color: #000000;
			}
			.price{
				margin-left: 60px;
				height: 22px;
				font-size: 16px;
				color: #7d7d7d;
				opacity: 0.8;
			}
			.state{
				float: right;
				text-align: center;
				width: 43px;
				height: 26px;
				line-height: 26px;
				color: #FFFFFF;
				background: #7d7d7d;
				border-radius: 6px;
			}
		}
		.active{
			.price{
				color: #CD2727;
			}
			.state{
				background: #CD2727;
			}
		}
	}
}
</style>
