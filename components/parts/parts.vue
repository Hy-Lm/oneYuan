<template>
	<!-- 配件 -->
	<view class="box">
		<view class="parts_con">
			<!-- 标题 -->
		 	<view class="title">
				<text>发现好货</text>
		 	</view>
			<!-- 内容 -->
			<ul>
				<li @click="shoplist()">
					<image src="../../static/shangxin1.png" mode="aspectFit"></image>
					<p>信义 上海通用-乐风前 挡玻璃更换</p>
					<p>￥<text>210</text> <text>￥299</text></p>
					<p>益园养车北辰区店 
						<text>进店 ></text>
					</p>
				</li>
				<li>
					<image src="../../static/shangxin1.png" mode="aspectFit"></image>
					<p>奥迪-A6L-5L-后视镜</p>
					<p>￥<text>210</text> <text>￥299</text></p>
					<p>益园养车北辰区店 
						<text>进店 ></text>
					</p>
				</li>
				<li>
					<image src="../../static/shangxin1.png" mode="aspectFit"></image>
					<p>信义 上海通用-乐风前 挡玻璃更换</p>
					<p>￥<text>210</text> <text>￥299</text></p>
					<p>益园养车北辰区店 
						<text>进店 ></text>
					</p>
				</li>
				<li>
					<image src="../../static/shangxin1.png" mode="aspectFit"></image>
					<p>信义 上海通用-乐风前 挡玻璃更换</p>
					<p>￥<text>210</text> <text>￥299</text></p>
					<p>益园养车北辰区店 
						<text>进店 ></text>
					</p>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		name:"parts",
		data() {
			return {
				
			};
			
		},
		methods:{
			shoplist(){
				uni.navigateTo({
					url:"/components/index/shop-details/shop-details"
				})
			}
		}
	}
</script>

<style lang="scss">
.box{
	padding: 0 15px;
}
.parts_con{
	width: 100%;
	height: 587px;
	opacity: 1;
	background: #f9f7f7;
	margin-bottom: 0px;
	.title{
		padding: 16px;
		text{
			display: block;
			text-align: center;
			height: 25px;
			opacity: 1;
			font-size: 18px;
			color: #f0923c;
			font-weight: bold;
			line-height: 25px;
			position: relative;
			&::after{
				content: '';
				position: absolute;
				left: calc(100% / 2 - 120px);
				top:12px;
				width: 65px;
				height: 1px;
				background-color: #f0923c;
			}
			&::before{
				content: '';
				position: absolute;
				right: calc(100% / 2 - 120px);
				top:12px;
				width: 65px;
				height: 1px;
				background-color: #f0923c;
			}
		}
	}
	ul{
		list-style: none;
		padding: 0;
		li{
			float: left;
			
			width: 50%;
			margin-bottom: 5px;
			box-sizing: border-box;
			image{
				// width: 168px;
				width: 100%;
				height: 194px;
			}
			p{
				padding:0 10px;
			}
			p:nth-child(2){
				height: 40px;
				font-size: 14px;
				color: #000000;
				line-height: 20px;
			}
			p:nth-child(3){
				height: 25px;
				font-size: 14px;
				color: #ff0e00;
				line-height: 19px;
				text:nth-child(1){
					font-size: 18px;
					font-weight: bold;
				}
				text:nth-child(2){
					height: 20px;
					font-size: 12px;
					color: #666666;
					line-height: 20px;
					margin-left: 10px;
					text-decoration: line-through;
				}
			}
			p:nth-child(4){
				height: 17px;
				font-size: 12px;
				color: #7d7d7d;
				text{
					color:#000000;
					margin-left: 10px;
				}
			}
		}
	}
}
</style>
