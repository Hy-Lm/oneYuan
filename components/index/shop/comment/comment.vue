<template>
	<view class="box">
		<view class="comment">
			<view class="comment_header">
				<text>用户评价(59)</text>
				<image src="../../../../static/arrows.png" mode=""></image>
			</view>
			<view class="start">
				<view class="service">
					<text>服务态度</text>
					<view>
						<image src="../../../../static/五角星.png" mode=""></image>
						<image src="../../../../static/五角星.png" mode=""></image>
						<image src="../../../../static/五角星.png" mode=""></image>
						<image src="../../../../static/五角星.png" mode=""></image>
						<image src="../../../../static/五角星.png" mode=""></image>
					</view>
				</view>
				<view class="service">
					<text>维修效率</text>
					<view>
						<image src="../../../../static/五角星.png" mode=""></image>
						<image src="../../../../static/五角星.png" mode=""></image>
						<image src="../../../../static/五角星.png" mode=""></image>
						<image src="../../../../static/五角星.png" mode=""></image>
						<image src="../../../../static/五角星.png" mode=""></image>
					</view>
				</view>
			</view>
			<!-- 评论 -->
			<view class="pinglun">
				<view class="toux">
					<image src="../../../../static/52aa34ff58bffd97658f3402c79dac8.png" mode=""></image>
					<view class="yonghu">
						<view>益园养车</view>
						<view>2021-5-24</view>
					</view>
				</view>
				<view class="pinglun_con">
					第一次使用益园养车APP，维修师傅很热情，维修师傅 也很好，服务的不错，所有的事给安排的明明白白，有 什么问题都能给解答，不错！
				</view>
			</view>
			
			<view class="pinglun">
				<view class="toux">
					<image src="../../../../static/52aa34ff58bffd97658f3402c79dac8.png" mode=""></image>
					<view class="yonghu">
						<view>益园养车</view>
						<view>2021-5-24</view>
					</view>
				</view>
				<view class="pinglun_con">
					第一次使用益园养车APP，维修师傅很热情，维修师傅 也很好，服务的不错，所有的事给安排的明明白白，有 什么问题都能给解答，不错！
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
			
		}
	}
</script>

<style lang="scss">
.comment{
	height: 376px;
	background: #ffffff;
	border-radius: 10px 10px 0px 0px;
	box-shadow: 2px 1px 6px 0px rgba(0,0,0,0.23); 
	.comment_header{
		padding: 20px 15px;
		image{
			float:right;
			width: 7px;
			height: 14px;
		}
	}
	// 星级
	.start{
		padding-left: 35px;
		.service{
			overflow: hidden;
			text{
				float: left;
				height: 20px;
				font-size: 14px;
				color: #000000;
			}
			view{
				float:left;
				margin-left: 28px;
				image{
					width: 14px;
					height: 14px;
					padding: 0 3px;
				}
			}
		}
	}
	
	// 评论
	.pinglun{
		.toux{
			padding: 20px 30px 0 15px;
			overflow: hidden;
			image{
				float:left;
				width: 41px;
				height: 41px;
			}
			.yonghu{
				height: 40px;
				margin-left: 15px;
				float:left;
				font-size: 12px;
				line-height: 20px;
				view:nth-child(1){
					height: 20px;
					color: #000000;
				}
				view:nth-child(2){
					height: 20px;
					color: #515151;
				}
			}
		}
		.pinglun_con{
			padding: 13px 30px 0 25px;
			font-size: 12px;
			color: #000000;
		}
	}
}
</style>
