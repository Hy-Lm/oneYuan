<template>
	<view class="fenlei">
		<view class="box">
			<!-- 导航栏 -->
			<view class="fl_conter">
				<view class="left">
					<input type="text" placeholder="合成汽油" />
					<image src="../../static/images/serch-icon@3x.png" mode="aspectFit"></image>
				</view>
				<!-- <view class="right">
					<image src="../../static/location.png" mode="aspectFit"></image>
					<text>北辰区</text>
				</view> -->
			</view>
			<!-- 背景 -->
			<!-- <view class="bg">
				<image src="../../static/banner1.png"></image>
			</view> -->
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
				<ul>
					<li v-for="(item,index) in fl_list_nav" :key="index" @click="flList(index)"
						:style="[index===ind?styleobj1:styleobj2]">{{item}}<span :class="[index===ind?'s1':'']"></span>
					</li>
				</ul>
			</view>
			<view class="right">
				<scroll-view scroll-with-animation="true" :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scroll="scroll">
					<view v-for="(item,index) in fl_list_items" :id="'main-'+index" :key="index"
						class="scroll-view-item uni-bg-green">
						<view class="item">
							<view>
								{{item.title1}}
							</view>
							<view>
								<view class="xiCar" v-for="(item,index) in item.title1_item" :key="index">
									<view>
										<image :src="item.img" mode=""></image>
									</view>
									<view>{{item.name}}</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
				<!-- <listItem></listItem> -->
				<!-- 将label_list传递到list，是tab切换的数据,change自定义事件由list.vue传递的swiper滚动的值 -->
				<!-- <car-list class="list"  @change='change'  :tab="fl_list_items" :activeIndex_click="ind"></car-list> -->
			</view>
		</view>
	</view>
</template>

<script>
	// import listItem from '../../components/car-list/itemCart.vue';
	export default {
		data() {
			return {
				scrollTop: 0,
				HeightIndex: 0,
				indicatorDots: false,
				interval: 2000,
				duration: 500,
				styleobj1: {
					'color': '#f8981d ',
					'background-color': '#FFFFFF'
				},
				styleobj2: {
					'color': '#333333',
					'border-bottom': ' #f1f1f1'
				},
				ind: 0, // 定义点击后选项卡对应的index
				// 导航栏
				current: 0,
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
				this.calcSize();
				this.ind = index;
				// var  index = this.fl_list_items.findIndex(sitem=>sitem.index === index);
				this.scrollTop = this.fl_list_items[this.ind].top
				// console.log(index)
				// this.current=index
			},
			// change(current) {
			// 	// console.log('当前swiper的值为',current)
			// 	this.ind = current
			// },
			scroll(e) {
				this.calcSize();
				let scrollTop = e.detail.scrollTop;
				var scrollIndex = [];
				scrollIndex = this.fl_list_items.filter((item, index) => {
					if (scrollTop > item.top && item.bottom > scrollTop) {
						return item;
					}
				})
				if(scrollIndex==[]){
					return false;
				}else{
					this.ind = scrollIndex[0].indexs
				}
				// console.log(scrollIndex)
				// this.ind = scrollIndex[0].indexs
			},
			//计算右侧栏每个tab的高度等信息
			calcSize() {
				var h = 0;
				this.fl_list_items.forEach((item, index) => {
					this.current = index
					var view = uni.createSelectorQuery().select("#main-" + index);
					view.fields({
						size: true
					}, data => {
						item.top = h;
						h += data.height;
						item.bottom = h;
						item.indexs = this.current;
					}).exec();
				})
				// console.log(this.fl_list_items)
			},
		},
		components: {
			// listItem
		}
	}
</script>

<style lang="scss">
	.uni-app--showtabbar uni-page-wrapper::after {
		display: none !important;
	}

	page {
		flex: 1;

	}

	.fenlei {
		display: flex;
		flex-direction: column;
		flex: 1;
		height: calc(100vh - 50px);
	}

	.box {
		// flex: 1;
		padding: 12px 15px;
		// height: 100%;
		box-sizing: border-box;

		.fl_conter {
			display: flex;
			align-items: center;
			opacity: 1;
			background: #ffffff;
			border: 1px solid #666666;
			border-radius: 18px;
			margin-bottom: 18px;

			.left {
				flex: 4;
				position: relative;

				input {
					width: auto;
					height: 34px;
					opacity: 1;
					font-size: 14px;
					// background: #f1f1f1;
					// border-radius: 16px;
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
				color: #cd2727;
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
		// margin-top: 8px;
		border-top: 9px solid #F1F1F1;
		width: 100%;
		// height: 350px;
		height: calc(100% - 192px);
		// flex: 1;
		// padding-bottom: 50px;
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
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			ul {
				height: 100%;
				list-style: none;
				padding: 0;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

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
						top: 50%;
						width: 2px;
						height: 14px;
						transform: translateY(-50%);
						background-color: #f8981d;
					}
				}

			}
		}

		.right {
			width: 100%;
			padding: 0 31px;
			box-sizing: border-box;
			flex: 1;
			height: 100%;
			overflow-y: auto;

			.scroll-Y {
				height: 100%;

				/deep/ &::-webkit-scrollbar {
						display: none;
						width: 0 !important;
						height: 0 !important;
						-webkit-appearance: none;
						background: transparent;
						color: transparent;
					}

				& .scroll-view-item {

					// height: 100%;
					.item {
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						&>view:nth-child(1) {
							height: 35px;
							font-size: 12px;
							font-weight: 400;
							color: #333333;
							line-height: 35px;
						}

						&>view:nth-child(2) {
							display: flex;
							flex-wrap: wrap;
							justify-content: space-between;

							&>view {
								width: 32%;
								display: flex;
								flex-direction: column;
								margin-bottom: 12px;
								align-items: center;

								&>view:nth-child(1) {
									width: 57px;
									height: 57px;

									image {
										width: 100%;
										height: 100%;
									}
								}

								&>view:nth-child(2) {
									margin-top: 5px;
									height: 17px;
									text-align: center;
									font-size: 12px;
									font-weight: 400;
									color: #333333;
									line-height: 19px;
								}
							}



						}
					}
				}
			}

			// .list {
			// 	height: 100%;
			// 	flex: 1;
			// }

			// .swiper{
			// 	height: 100%;
			// }
			// background-color: #007AFF;

		}
	}
</style>
