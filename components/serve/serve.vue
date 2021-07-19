<template>
	<!-- 享服务 -->
	<view class="serve_content">
		<view class="serve_con">
			<view class="header">
				<text>享服务</text>
				<text>优质线下门店</text>
				<view @click="more()">更多
					<image src="../../static/images/arrows@3x.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="types">
				<!-- 类型 -->
				<view class="type" v-for="(item,index) in typesItem" :key="index" @click="open">
					<view class="left">
						<image :src="item.img" mode="aspectFit"></image>
					</view>
					<view class="right">
						<view>{{item.store}}</view>
						<view>
							<text>总评分</text><text>{{item.score}}</text>
						</view>
						<view>
							<text>{{item.distanceCon}}</text>
							<text class="km">{{item.distanceKm}}km</text>
						</view>
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
				typesItem: [{
						img: '../../static/2.jpg',
						store: '益园养车（北辰区店）',
						score: '4.6',
						distanceCon: '天津市北辰区北辰公园南100米天津市北辰区北辰公园南100米',
						distanceKm: 2.22
					},
					{
						img: '../../static/2.jpg',
						store: '益园养车（北辰区店）',
						score: '4.6',
						distanceCon: '天津市北辰区北辰公园南100米天津市北辰区北辰公园南100米',
						distanceKm: 2.22
					},
					{
						img: '../../static/2.jpg',
						store: '益园养车（北辰区店）',
						score: '4.6',
						distanceCon: '天津市北辰区北辰公园南100米天津市北辰区北辰公园南100米',
						distanceKm: 2.22
					}
				]
			}
		},
		methods: {
			open() {
				if (this.isSearch) return
				console.log('open')
				uni.navigateTo({
					url: "/components/index/shop/shop"
				})
			},
			more() {
				console.log('more')
				uni.navigateTo({
					url: "/components/index/more-service/more-service"
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
		background-color: #F9F7F7;
	}

	.serve_content {
		margin-top: 15px;
		padding: 0 15px;
		box-sizing: border-box;
		width: 100%;

		.serve_con {
			height: 285px;
			padding: 13px 15px;
			padding-bottom: 0;
			background: #ffffff;
			border-radius: 10px 10px 0px 0px;
			box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.16);
		}
	}

	.header {
		width: 100%;
		height: 25px;
		padding-bottom: 4px;
		border-bottom: 1px solid rgba(153, 153, 153, .5);

		// margin-bottom: 11px;
		text:nth-child(1) {
			font-size: 18px;
			font-weight: bold;
			color: #000000;
		}

		text:nth-child(2) {
			margin-left: 10px;
			font-size: 12px;
			color: #396a3a;
			;
		}

		view:nth-child(3) {
			float: right;
			width: 35px;
			height: 25px;
			line-height: 25px;
			font-size: 12px;
			color: #396a3a;

			image {
				width: 5px;
				height: 10px;
				opacity: 1;
				margin-left: 5px;
			}
		}
	}

	.types {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	// 类型
	.type {
		width: 100%;
		overflow: hidden;
		margin-top: 10px;

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
			box-sizing: border-box;
			padding: 5px 0;
			float: right;
			text-align: left;
			width: calc(100% - 81px);
			height: 71px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			view:nth-child(1) {
				height: 22px;
				opacity: 1;
				font-size: 16px;
				font-weight: bold;
				opacity: 0.8;
				text-align: left;
				color: #000000;
			}

			view:nth-child(2) {
				height: 17px;
				opacity: 1;
				font-size: 12px;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				text-align: left;
				color: #000000;

				text {
					margin-right: 6px;
				}

				text:nth-child(2) {
					color: rgba(255, 0, 0, 1);
				}
			}

			view:nth-child(3) {
				
				height: 17px;
				opacity: 1;
				font-size: 12px;
				text-align: left;
				color: #666666;
				&>text:nth-child(1){
					display: inline-block;
					width: 175px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.km {
					float: right;
				}
			}
		}
	}
</style>
