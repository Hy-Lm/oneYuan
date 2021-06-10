<template>
	<view class="box">
		<view class="left" @click="fun()">
			<ul>
				<li class="active">汽车美容</li>
				<li>汽车美容</li>
				<li>汽车美容</li>
				<li>汽车美容</li>
				<li>汽车美容</li>
				<li>汽车美容</li>
				<li>汽车美容</li>
				<li>汽车美容</li>
				<li>汽车美容</li>
				<li>汽车美容</li>
				<li>汽车美容</li>
				<li>汽车美容</li>
			</ul>
		</view>
		<view class="right">
			<view class="item">
				<view class="title">
					汽车美容
				</view>
				<ul>
					<li>
						<image src="../../static/meirong1.png" mode=""></image>
						<view>靓丽洗车</view>
					</li>
					<li>
						<image src="../../static/meirong1.png" mode=""></image>
						<view>靓丽洗车</view>
					</li>
					<li>
						<image src="../../static/meirong1.png" mode=""></image>
						<view>靓丽洗车</view>
					</li>
					<li>
						<image src="../../static/meirong1.png" mode=""></image>
						<view>靓丽洗车</view>
					</li>
				</ul>
			</view>
			<view class="item">
				<view class="title">
					汽车保养
				</view>
				<ul>
					<li>
						<image src="../../static/保养1.png" mode=""></image>
						<view>大保养</view>
					</li>
					<li>
						<image src="../../static/保养1.png" mode=""></image>
						<view>大保养</view>
					</li>
					<li>
						<image src="../../static/保养1.png" mode=""></image>
						<view>大保养</view>
					</li>
				</ul>
			</view>
			<view class="item">
				1111
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "fl-list",
		data() {
			return {

			};
		},
		methods: {
			fun() {
				console.log(111)
				// console.log(event)
				// var left = document.querySelector('.left');
				// var lis = left.querySelectorAll('li');
				// var items = document.querySelectorAll('.item');
				// for (var i = 0; i < lis.length; i++) {
				// 	lis[i].setAttribute('index', i);

				// 	lis[i].onmouseover = function() {
				// 		for (var i = 0; i < lis.length; i++) {
				// 			lis[i].className = '';
				// 		}
				// 		this.className = 'active';
				// 		var index = this.getAttribute('index');
				// 		console.log(index);
				// 		for (var i = 0; i < items.length; i++) {
				// 			items[i].style.display = 'none';
				// 		}
				// 		items[index].style.display = 'block';
				// 	}
				// }
			}
		}
	}
</script>

<style lang="scss">
	.box {
		width: 100%;
		height: 100%;
		box-sizing: border-box;

		.left {
			float: left;
			width: 100px;
			height: 100%;
			background-color: #f1f1f1;
			overflow: hidden;
			box-sizing: border-box;
			ul {
				list-style: none;
				padding: 0;
				li {
					padding-left: 30px;
					display: block;
					width: 100%;
					height: 35px;
					font-size: 12px;
					text-align: left;
					line-height: 35px;
				}

				.active {
					color: #396A3A;
					position: relative;
					background-color: #FFFFFF;
				}
				.active::before{
					content: '';
					position: absolute;
					left:25px;
					top:10px;
					width: 2px;
					height: 14px;
					background-color: #396A3A;
				}
			}
		}

		.right {
			height: 100%;
			overflow: hidden;
			padding: 0 30px;
			padding-left: 30px;
			.item {
				overflow: hidden;
				.title{
					height: 35px;
					font-size: 12px;
					text-align: left;
					line-height: 35px;
				}
				ul{
					list-style: none;
					padding: 0;
					li{
						float: left;
						width: 33%;
						overflow: hidden;
						text-align: left;
						padding-bottom: 10px;
						image{
							width: 57px;
							height: 57px;
						}
						view{
							width: 100%;
							height: 17px;
							opacity: 1;
							font-size: 12px;
							color: #000000;
						}
					}
				}
			}
		}
	}
</style>
