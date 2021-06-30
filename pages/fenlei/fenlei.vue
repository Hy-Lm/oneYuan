<template>
	<view class="fenlei">
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
		<view class="box2">
			<view class="left">
				<ul v-for="(item,index) in fl_list_nav" :key="index">
					<li @click="flList(index)" :style="[index===ind?styleobj1:styleobj2]">{{item}}<span
							:class="[index===ind?'s1':'']"></span></li>
				</ul>
			</view>
			<view class="right">
				<!-- 将label_list传递到list，是tab切换的数据,change自定义事件由list.vue传递的swiper滚动的值 -->
				<car-list class="list"  @change='change'  :tab="fl_list_items" :activeIndex_click="ind"></car-list>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: false,
				interval: 2000,
				duration: 500,
				styleobj1: {
					'color': '#396A3A',
					'background-color': '#FFFFFF'
				},
				styleobj2: {
					'color': '#000000',
					'border-bottom': ' #f1f1f1'
				},
				ind: 0,// 定义点击后选项卡对应的index
				// 导航栏
				fl_list_nav: ['汽车美容', '汽车保养', '轮胎更换', '钣金喷漆', '汽车维修', '品牌音响', '清洗养护', '精品内饰', '常用配件', '车载电器'],
				fl_list_items: [{
						title1: '汽车美容',
						title1_item: [{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							}
							
							
						]
					},
					{
						title1: '汽车保养',
						title1_item: [{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							}
						]
					},
					{
						title1: '轮胎更换',
						title1_item: [{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							}
						]
					},
					{
						title1: '钣金喷漆',
						title1_item: [{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							}
						]
					},
					{
						title1: '汽车维修',
						title1_item: [{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							}
						]
					},
					{
						title1: '品牌音响',
						title1_item: [{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							}
						]
					},
					{
						title1: '清洗养护',
						title1_item: [{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							}
						]
					},
					{
						title1: '精品内饰',
						title1_item: [{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							}
						]
					},
					{
						title1: '常用配件',
						title1_item: [{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							}
						]
					},
					{
						title1: '车载电器',
						title1_item: [{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							},
							{
								img: '../../static/meirong1.png',
								name: '靓丽洗车'
							}
						]
					}
				
				]
			}
		},
		methods: {
			flList(index) {
				this.ind = index
			},
			change(current){
					// console.log('当前swiper的值为',current)
					this.ind=current
			}
		},
	}
</script>

<style lang="scss">
	page {
		flex: 1;
	}

	.fenlei {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.box {
		padding: 12px 15px;
		height: 280px;
		box-sizing: border-box;

		.fl_conter {
			display: flex;
			align-items: center;

			.left {
				flex: 4;
				position: relative;

				input {
					width: auto;
					height: 34px;
					opacity: 1;
					background: #f1f1f1;
					border-radius: 16px;
					padding-left: 43px;
				}

				image {
					position: absolute;
					left: 19px;
					top: 12px;
					width: 11px;
					height: 11px;
				}
			}

			.right {
				flex: 1;
				text-align: right;
				line-height: 25px;
				vertical-align: middle;

				image {
					width: 11px;
					height: 13px;
					vertical-align: middle;
				}
			}
		}

		.bg {
			margin: 16px 0 5px 0;
			width: 100%;
			height: 100px;
			opacity: 1;
			border-radius: 7px;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.special {
			width: 100%;
			height: 114px;
			opacity: 1;
			background: linear-gradient(180deg, #fff7e2, #ffffff);
			border-radius: 6px 6px 0px 0px;
			box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.16);

			view {
				width: 100%;
				height: 32px;
				opacity: 1;
				font-size: 14px;
				color: #f0923c;
				line-height: 32px;

				image {
					width: 15px;
					height: 15px;
					margin: 0 10px;
					vertical-align: middle;
				}
			}

			ul {
				list-style: none;
				padding: 0;
				text-align: center;

				li {
					float: left;
					width: 25%;

					image {
						width: 65px;
						height: 65px;
					}
				}
			}
		}
	}

	.box2 {
		margin-top: 8px;
		width: 100%;
		height: 100%;
		flex: 1;
		box-sizing: border-box;
		// overflow-y: hidden;
		display: flex;

		.left {
			// float: left;
			width: 100px;
			height: 100%;
			background-color: #f1f1f1;
			// overflow: hidden;
			box-sizing: border-box;

			ul {
				list-style: none;
				padding: 0;

				li {
					padding-left: 30px;
					box-sizing: border-box;
					display: block;
					width: 100%;
					height: 35px;
					font-size: 12px;
					text-align: left;
					line-height: 35px;
					position: relative;

					.s1 {
						position: absolute;
						left: 20px;
						top: 12px;
						width: 2px;
						height: 14px;
						background-color: #396A3A;
					}
				}

			}
		}

		.right {
			width: 100%;
			padding: 0 31px;
			box-sizing: border-box;
			flex: 1;
			height: 350px;
			overflow-y: auto;
			.list{
				height: 100%;
				flex: 1;
			}
			// .swiper{
			// 	height: 100%;
			// }
			// background-color: #007AFF;
			
		}
	}
</style>
