<template>
	<!-- 配件 -->
	<view class="box">
		<view class="parts_con">
			<!-- 标题 -->
		 	<view class="title">
		 		<text>配件上新</text>
				<view>更多
					<image src="../../static/arrows.png" mode="aspectFit"></image>
				</view>
		 	</view>
			<!-- 内容 -->
			<ul>
				<li @click="shoplist()">
					<image src="../../static/shangxin1.png" mode="aspectFit"></image>
					<p>信义 上海通用-乐风前 挡玻璃更换</p>
					<p>￥<text>210</text></p>
					<p>益园养车北辰区店 
						<text>进店 ></text>
					</p>
				</li>
				<li>
					<image src="../../static/shangxin1.png" mode="aspectFit"></image>
					<p>奥迪-A6L-5L-后视镜</p>
					<p>￥<text>210</text></p>
					<p>益园养车北辰区店 
						<text>进店 ></text>
					</p>
				</li>
				<li>
					<image src="../../static/shangxin1.png" mode="aspectFit"></image>
					<p>信义 上海通用-乐风前 挡玻璃更换</p>
					<p>￥<text>210</text></p>
					<p>益园养车北辰区店 
						<text>进店 ></text>
					</p>
				</li>
				<li>
					<image src="../../static/shangxin1.png" mode="aspectFit"></image>
					<p>信义 上海通用-乐风前 挡玻璃更换</p>
					<p>￥<text>210</text></p>
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
	padding: 0 20px;
}
.parts_con{
	width: 100%;
	height: 587px;
	opacity: 1;
	background: #f9f7f7;
	border-radius: 10px 10px 0px 0px;
	box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.16); 
	.title{
		padding: 16px 11px;
		text:nth-child(1){
			height: 25px;
			line-height: 25px;
			font-size: 18px;
			color: #000000;
			font-weight: bold;
		}
		view:nth-child(2){
			float:right;
			margin-top:4px;
			height: 17px;
			font-size: 12px;
			color: #000000;
			vertical-align: middle;
			image{
				width: 5px;
				height: 10px;
				vertical-align: middle;
				margin-top: -2px;
				margin-left: 5px;
			}
		}
	}
	ul{
		list-style: none;
		padding: 0;
		li{
			float: left;
			padding: 0px 5px 0 10px;
			width: 50%;
			box-sizing: border-box;
			image{
				width: 146px;
				height: 164px;
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
				font-weight: bold;
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
