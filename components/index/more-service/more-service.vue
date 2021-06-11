<template>
	<!-- 首页头部 -->
	<view class="content">
	
		<view class="navbar_content">
			<!-- 位置、搜索 -->
			<view class="header">
				<text class="map">廊坊</text>
				<image src="../../../static/service.png" mode="aspectFit"></image>
				<view class="input">
					<image src="../../../static/查找.png" mode="aspectFit"></image>
					<input type="text" />
				</view>
			</view>
			<view class="bg"></view>
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

		}
	}
</script>

<style lang="scss">
page{
	margin: 0;
	padding: 0;
}
	.content{
		height: 360px;
	}
	.navbar_content {
		width: 100%;
		height: 133px;
		background-color: #0D8600;
		box-sizing: border-box;

		// 搜索
		.header {
			padding: 20px 30px;
			width: 100%;
			height: 60px;
			font-size: 14px;
			margin-bottom: 37px;
			box-sizing: border-box;
			.map {
				float: left;
				color: #F1F1F1;
			}

			image {
				width: 16px;
				height: 16px;
				float: right;
				top: 2px
			}

			.input {
				margin: 0 29px 0 73px;
				height: 20px;
				opacity: 1;
				background: #f1f1f1;
				border-radius: 10px;
				padding-left: 20px;
				position: relative;

				image {
					position: absolute;
					width: 10px;
					height: 10px;
					left: 7px;
					top: 5px;
				}
			}
		}

		// 椭圆 背景
		.bg {
			width: 100%;
			height: 74px;
			opacity: 1;
			background: #f9f7f7;
			border-radius: 50%;
		}
	}
</style>
