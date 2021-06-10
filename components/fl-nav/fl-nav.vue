<template>
	<view class="box">
		<!-- 导航栏 -->
		<view class="fl_conter">
			<view class="left">
				<input type="text" placeholder="合成汽油" />
				<image src="../../static/查找.png" mode="aspectFit"></image>
			</view>
			<view class="right">
				<image src="../../static/location.png" mode="aspectFit"></image>
				<text>北辰区</text>
			</view>
		</view>
		<!-- 背景 -->
		<view class="bg">
			<image src="../../static/banner1.png"></image>
		</view>
		<!-- 限时特价 -->
		<view class="special">
			<view>
				<image src="../../static/clock.png" mode="aspectFit"></image>
				限时特价
			</view>
			<ul>
				<li>
					<image src="../../static/special.jpg" mode=""></image>
				</li>
				<li>
					<image src="../../static/special.jpg" mode=""></image>
				</li>
				<li>
					<image src="../../static/special.jpg" mode=""></image>
				</li>
				<li>
					<image src="../../static/special.jpg" mode=""></image>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		name:"fl-nav",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
page{
	margin: 0;
	padding: 0;
}
.box{
	padding: 12px 30px;
	height: 280px;
	.fl_conter{
		display: flex;
		.left{
			flex:4;
			position: relative;
			input{
				width: auto;
				height: 25px;
				opacity: 1;
				background: #f1f1f1;
				border-radius: 13px;
				padding-left: 43px;
			}
			image{
				position: absolute;
				left:19px;
				top:8px;
				width: 10px;
				height: 10px;
			}
		}
		.right{
			flex:1;
			text-align: right;
			line-height: 25px;
			vertical-align: middle;
			image{
				width: 11px;
				height: 13px;
				vertical-align: middle;
			}
		}
	}
	.bg{
		margin: 25px 0 5px 0;
		width: 100%;
		height: 100px;
		opacity: 1;
		border-radius: 7px;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.special{
		width: 100%;
		height: 114px;
		opacity: 1;
		background: linear-gradient(180deg,#fff7e2, #ffffff);
		border-radius: 6px 6px 0px 0px;
		box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.16);
		view{
			width: 100%;
			height: 32px;
			opacity: 1;
			font-size: 14px;
			color: #f0923c;
			line-height: 32px;
			image{
				width: 15px;
				height: 15px;
				margin:0 10px;
			}
		}
		ul{
			list-style: none;
			padding: 0;
			text-align: center;
			li{
				float:left;
				width: 25%;
				image{
					width: 65px;
					height: 65px;
				}
			}
		}
	}
}
</style>
