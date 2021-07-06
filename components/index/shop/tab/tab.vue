<template>
	<view>
		<view class="tab">
			<view class="tab_list" @click="fun">
				<ul>
					<li class="current">洗车</li>
					<li>轮胎</li>
					<li>保养</li>
					<li>维修</li>
					<li>钣金喷漆</li>
				</ul>
			</view>
			<view class="tab_con">
				<view class="item" style="display: block;">
					<view class="item_box" @click="service()">
						<image class="img1" src="../../../../static/meirong1.png" mode=""></image>
						<view class="con">
							<view>限时优惠 靓丽洗车</view>
							<view>
								<text>￥9.9</text>
								<text>￥38</text>
							</view>
						</view>
						<image class="img2" src="../../../../static/arrows.png" mode=""></image>
					</view>

					<view class="item_box">
						<image class="img1" src="../../../../static/meirong1.png" mode=""></image>
						<view class="con">
							<view>限时优惠 靓丽洗车</view>
							<view>
								<text>￥9.9</text>
								<text>￥38</text>
							</view>
						</view>
						<image class="img2" src="../../../../static/arrows.png" mode=""></image>
					</view>
					<view class="item_box">
						<image class="img1" src="../../../../static/meirong1.png" mode=""></image>
						<view class="con">
							<view>限时优惠 靓丽洗车</view>
							<view>
								<text>￥9.9</text>
								<text>￥38</text>
							</view>
						</view>
						<image class="img2" src="../../../../static/arrows.png" mode=""></image>
					</view>
					<view class="item_box">
						<image class="img1" src="../../../../static/meirong1.png" mode=""></image>
						<view class="con">
							<view>限时优惠 靓丽洗车</view>
							<view>
								<text>￥9.9</text>
								<text>￥38</text>
							</view>
						</view>
						<image class="img2" src="../../../../static/arrows.png" mode=""></image>
					</view>
				</view>
				<view class="item">
					轮胎
				</view>
				<view class="item">
					保养
				</view>
				<view class="item">
					维修
				</view>
				<view class="item">
					钣金喷漆
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
			fun() {
				// #ifdef H5
				var tab_list = document.querySelector('.tab_list');
				var lis = tab_list.querySelectorAll('li');
				var items = document.querySelectorAll('.item');
				// for循环绑定点击事件
				for (var i = 0; i < lis.length; i++) {
					// 开始给5个li 设置索引号 
					lis[i].setAttribute('index', i);
					lis[i].onclick = function() {
						for (var i = 0; i < lis.length; i++) {
							lis[i].className = '';
						}
						this.className = 'current';
						var index = this.getAttribute('index');
						for (var i = 0; i < items.length; i++) {
							items[i].style.display = 'none';
						}
						items[index].style.display = 'block';
					}
				}
				// #endif

				// #ifdef MP-WEIXIN
				let lis = uni.createSelectorQuery().in(this).select('.tab_list li');
				lis.className = 'current';
				// console.log(outter._selector)
				// let li = uni.createSelectorQuery().select('.tab_list li');
				// console.log(li._selector)
				// li.boundingClientRect(function(pos) {
				// 	console.log(pos)
				// }).exec()
				// #endif

			},
			service(){
				console.log('service')
				if(this.isSearch) return
				uni.navigateTo({
					url:"/components/index/shop/service/service"
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		box-sizing: border-box;
	}

	li {
		list-style-type: none;
	}

	ul {
		padding: 0;
	}

	.tab {
		width: 100%;
		margin-top: 10px;
	}

	.tab_list {
		height: 39px;
		background: #f9f7f7;
	}

	.tab_list li {
		float: left;
		width: 20%;
		height: 39px;
		line-height: 39px;
		text-align: center;
		position: relative;
	}

	.tab_list .current::after {
		content: '';
		position: absolute;
		left: calc(100% / 2 - 10px);
		bottom: 0;
		width: 12px;
		height: 2px;
		opacity: 1;
		background: #0d8600;
		border: 1px solid #0d8600;
	}

	.tab_con {
		padding: 18px 15px;
	}

	.item {
		display: none;
		padding: 0 20px;
		border-radius: 10px;
		box-shadow: 2px 1px 6px 0px rgba(0, 0, 0, 0.23);
		overflow: hidden;

		.item_box {
			overflow: hidden;
			padding: 10px 0;

			.img1 {
				float: left;
				width: 57px;
				height: 57px;
				border-radius: 3px;
			}

			.img2 {
				float: right;
				width: 7px;
				height: 14px;
				margin-top: calc(57px / 2 - 7px);
			}

			.con {
				float: left;
				margin-left: 18px;

				view {
					height: 20px;
					font-size: 14px;
					color: #000000;

					text:nth-child(1) {
						color: #cd2727;
						font-weight: bold;
						margin-right: 18px;
					}
				}

				view:nth-child(1) {
					margin-bottom: 20px;
				}
			}
		}
	}
</style>
