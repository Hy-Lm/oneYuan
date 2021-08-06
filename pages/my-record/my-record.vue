<template>
	<view class="myRecord">
		<view class="myRecord-top">
			<view class="myRecord-top_img">
				<image src="../../static/preview.png" mode=""></image>
			</view>
			<view class="myRecord-top_info">
				<view>宝马</view>
				<view>320i</view>
				<view>2018款</view>
				<view>自动挡</view>
			</view>
		</view>
		<view class="myRecord-bottom">
			<view class="item" v-for="(item,index) in myRecords" :key="index">
				<view  class="item1">
					<view>时间：</view>
					<view>{{item.time}}</view>
				</view>
				<view  class="item2">
					<view>公里数：</view>
					<view>{{item.kilometre}}km</view>
				</view>
				<view  class="item3">
					<view>维修原因：</view>
					<view>{{item.cause}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				myRecords:[
					{
						time:'2020年2月26日',
						kilometre:'100000',
						cause:'前挡风玻璃破损，于2020年2月26日在北辰 区店更换信义挡风玻璃'
					},
					{
						time:'2020年3月26日',
						kilometre:'200000',
						cause:'前挡风玻璃破损，于2020年3月26日在北辰 区店更换信义挡风玻璃'
					},
					{
						time:'2020年4月26日',
						kilometre:'300000',
						cause:'前挡风玻璃破损，于2020年4月26日在北辰 区店更换信义挡风玻璃'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.myRecord{
		padding: 9px 15px;
	}
	.myRecord-top{
		display: flex;
	}
	.myRecord-top_img{
		width: 19px;
		height: 19px;
		margin-right: 5px;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.myRecord-bottom{
		
		.item{
			margin-top: 10px;
			opacity: 1;
			background: #ffffff;
			border-radius: 10px;
			padding: 19px 25px;
			box-sizing: border-box;
			width: 100%;
			height: 124px;
			display: flex;
			flex-direction: column;
			// justify-content: space-around;
			&>view{
				display: flex;
				opacity: 1;
				font-size: 14px;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				color: #333333;
				&>view:nth-child(1){
					flex: 1;
					text-align-last: justify;
					text-align: justify;
				}
				&>view:nth-child(2){
					// width: 200px;
					flex: 3;
				}
			}
			&>view:nth-child(1)>view:nth-child(2),
			&>view:nth-child(2)>view:nth-child(2),
			&>view:nth-child(3)>view:nth-child(2){
				color: #515151;
			}
		}
	}
	.myRecord-top_info{
		&>view{
			margin-right: 5px;
		}
		display: flex;
		opacity: 1;
		font-size: 14px;
		font-family: PingFang SC, PingFang SC-Regular;
		font-weight: 400;
		text-align: left;
		color: #333333;
	}
page{
		flex: 1;
		opacity: 1;
		background: #f9f7f7;
		// position: relative;
	}
</style>
