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
				<li @click="shoplist(item.id)" v-for="(item,index) in shoplistItems" :key="item.id">
					<image :src="item.img" mode="aspectFit"></image>
					<p>{{item.title}}</p>
					<p>￥<text>{{item.newPrice}}</text> <text>￥{{item.oldPrice}}</text></p>
					<p>{{item.store}} 
						<text>进店 <image class="imgcon" src="../../static/images/arrows@3x.png" mode=""></image> </text>
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
				shoplistItems:[
					{
						id:1,
						img:'../../static/shangxin1.png',
						title:'信义 上海通用-乐风前 挡玻璃更换',
						newPrice:110,
						oldPrice:299,
						store:'益园养车总店'
					},
					{
						id:2,
						img:'../../static/shangxin1.png',
						title:'信义 上海通用-乐风前 挡玻璃更换',
						newPrice:210,
						oldPrice:299,
						store:"益园养车总店" 
					},
					{
						id:3,
						img:'../../static/shangxin1.png',
						title:'信义 上海通用-乐风前 挡玻璃更换',
						newPrice:210,
						oldPrice:399,
						store:"益园养车总店" 
					},
					{
						id:4,
						img:'../../static/shangxin1.png',
						title:'信义 上海通用-乐风前 挡玻璃更换',
						newPrice:210,
						oldPrice:599,
						store:"益园养车总店"
					},
					{
						id:5,	
						img:'../../static/shangxin1.png',
						title:'信义 上海通用-乐风前 挡玻璃更换',
						newPrice:210,
						oldPrice:599,
						store:"益园养车总店" 
					},
					{
						id:6,
						img:'../../static/shangxin1.png',
						title:'信义 上海通用-乐风前 挡玻璃更换',
						newPrice:410,
						oldPrice:699,
						store:"益园养车总店"
					},
					{
						id:7,
						img:'../../static/shangxin1.png',
						title:'信义 上海通用-乐风前 挡玻璃更换',
						newPrice:210,
						oldPrice:799,
						store:"益园养车总店" 
					},
					{
						id:8,
						img:'../../static/shangxin1.png',
						title:'信义 上海通用-乐风前 挡玻璃更换',
						newPrice:210,
						oldPrice:899,
						store:"益园养车总店" 
					}
				]
			};
			
		},
		methods:{
			shoplist(id){
				console.log(id,'当前商品的id')
				uni.navigateTo({
					url:"/components/index/shop-details/shop-details"
				})
			}
		}
	}
</script>

<style lang="scss">
.box{
	// padding: 0 15px;
	// margin-bottom: 70px;
}
.parts_con{
	width: 100%;
	// height: 587px;
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
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		li{
			background-color: #FFFFFF;
			width:48%;
			margin-bottom: 15px;
			box-sizing: border-box;
			padding-bottom: 15px;
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
				color: #333333;
				line-height: 20px;
			}
			p:nth-child(3){
				height: 25px;
				font-size: 14px;
				color: #CD2727;
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
					margin-left: 5px;
					text-decoration: line-through;
				}
			}
			p:nth-child(4){
				height: 17px;
				font-size: 12px;
				color: #666666;
				display: flex;
				justify-content: space-between;
				text{
					color:#f8981d ;
					.imgcon{
						vertical-align: middle;
						margin-left: 5px;
						display: inline-block;
						width: 5px;
						height: 10px;
					}
				}
			}
		}
	}
}
</style>
