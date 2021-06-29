<template>
	<view class="total">
		<div class="total_items" v-for="(item,index) in total_items" :key="index">
			<view class="total_items-img">
				<image :src="item.img" mode=""></image>
			</view>
			<view class="total_items-title">
				{{item.title}}
			</view>
			<view class="total_items-t">
				<text>{{item.num}}</text>积分
			</view>
			<view class="total_items-btn" @click="tatal(item)">
				立即兑换
			</view>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				total_items: [{
						img: '../../static/2.jpg',
						title: '无门槛同城益园养车洗车券',
						num: '10'
					},
					{
						img: '../../static/2.jpg',
						title: '正版功夫熊猫汽车饰品创意',
						num: '20'
					},
					{
						img: '../../static/2.jpg',
						title: '无门槛同城益园养车洗车券',
						num: '30'
					},
					{
						img: '../../static/2.jpg',
						title: '正版功夫熊猫汽车饰品创意',
						num: '40'
					},
					{
						img: '../../static/2.jpg',
						title: '正版功夫熊猫汽车饰品创意',
						num: '50'
					},
					{
						img: '../../static/2.jpg',
						title: '无门槛同城益园养车洗车券',
						num: '10'
					}
				]
			}
		},
		methods: {
			tatal(item){
				uni.showModal({
					title:"是否兑换此商品",
					content:"需要消耗"+item.num+'积分',
					success(res){
						if(res.confirm){
							console.log(item)
						}else if(res.cancel){
							console.log("用户已取消")
						}
						
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		flex: 1;
		opacity: 1;
		background: #f9f7f7;
	}

	.total {
		background-color: #FFFFFF;
		padding: 0 15px;
		margin-top: 14px;
		padding-top: 18px;
		padding-bottom: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		.total_items {
			box-sizing: border-box;
			height: 250px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			margin-bottom: 38px;
			align-items: left;
			&:nth-child(even) {
				margin-right: 0;
			}

			.total_items-btn {
				text-align: center;
				width: 147px;
				height: 17px;
				line-height: 17px;
				opacity: 1;
				background: #f0923c;
				border-radius: 9px;
				font-size: 12px;
				color: #ffffff;
			}

			.total_items-t {
				height: 17px;
				opacity: 1;
				font-size: 12px;
				color: #ff3b30;
				line-height: 21px;
				letter-spacing: 0px;
			}

			.total_items-title {
				width: 144px;
				opacity: 1;
				font-size: 12px;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				text-align: left;
				color: #2c2c2c;
				line-height: 21px;
				letter-spacing: 0px;
			}

			.total_items-img {
				width: 147px;
				height: 168px;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

	}
</style>
