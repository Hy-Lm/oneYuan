<template>
	<view>
		<view class="box">
			<!-- 店铺详情 -->
			<view class="img">
				<image src="../../../static/2.jpg" mode=""></image>
			</view>
			<view class="details">
				<view class="api">
					<text>益园养车北辰区店</text>
					<image src="../../../static/导航.png" mode=""></image>
				</view>
				<view class="time">
					<text>营业时间：08:00 -12:00</text>
					<text>导航</text>
				</view>
				<view class="time">
					<text>天津市北辰区北辰公园南100米</text>
					<text>2.1km</text>
				</view>
				<hr>
				<view class="phone" @click="tel">
					<text>联系电话：15735629946</text>
					<image src="../../../static/组443.png" mode=""></image>
				</view>
			</view>
			
		</view>
		<!-- 导航 -->
		<tab></tab>
		<!-- 评论 -->
		<!-- <comment></comment> -->
		<!-- 电话 -->
		<tel :num="num" @changeTel="changeTel($event)" :mask="mask"></tel>
	</view>
</template>

<script>
	import tab from '@/components/index/shop/tab/tab.vue'
	import comment from '@/components/index/shop/comment/comment.vue'
	export default {
		data() {
			return {
				mask:false,
				num:'15735629946'
			}
		},
		methods: {
			tel(){
				this.mask=true
			},
			// 子组件tel的传值
			changeTel(e){
				// console.log(e)
				this.mask=e
			}
		},
		components:{
			tab,
			comment
		}
	}
</script>

<style lang="scss">
	// page{
	// 	padding-bottom: 15px;
	// }
.box{
	padding:0 15px;
	
}
.img{
	// background: #f9f7f7;
	// padding: 0 15px;
	// box-sizing: border-box;
	width: 100%;
	height: 170px;
	image{
		width: 100%;
		height: 100%;
		border-radius:10px 10px 0 0;
	}
}
.details{
	padding-top:14px;
	.api{
		width: 100%;
		height: 25px;
		opacity: 1;
		font-size: 18px;
		font-family: PingFang SC, PingFang SC-Bold;
		font-weight: 700;
		text-align: left;
		color: #333333;
		margin-bottom: 6px;
		text{
			height: 30px;
			line-height: 30px;
			display: inline-block;
		}
		image{
			float: right;
			bottom: -10px;
			width: 20px;
			height: 20px;
		}
	}
	.time{
		height: 17px;
		font-size: 12px;
		color: #333333;
		text:nth-child(2){
			float: right;
		}
	}
	.phone{
		padding-top: 15px;
		height: 17px;
		font-size: 12px;
		color: #333333;
		image{
			float: right;
			width: 11px;
			height: 14px;
		}
	}
	hr{
		margin-top: 15px;
		height: 1px;
		border: none;
		background-color: rgba(153, 153, 153, .3);
		// opacity: 0.5;
	}
}
</style>
