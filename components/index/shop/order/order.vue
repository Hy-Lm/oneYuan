<template>
	<view>
		<uni-calendar ref="calendar" :insert="false" @confirm="confirm"></uni-calendar>
		<view class="calendar">
			<view class="calendar-data">
				<view class="datas" :style="[item.checked?styleobj1:styleobj2]" @click="dataActive(item)"
					v-for="(item,index) in dates" :key="index">
					<view>{{item.Mon}}-{{item.Dat}}</view>
					<view>{{item.week}}</view>
				</view>
			</view>
			<view class="calendar-img" @click="open">
				<image src="../../../../static/images/1968dca59da4dec2885285073bbc3f1.png" mode=""></image>
			</view>
		</view>
		<view class="order">
			<view class="type">
				<view class="left">
					<image src="../../../../static/bg.png" mode="aspectFit"></image>
				</view>
				<view class="right">
					<view>益园养车（北辰区店）</view>
					<view>
						<text>总评分 4.6</text>
					</view>
					<view>
						<text>天津市北辰区北辰公园南100米</text>
						<text class="km">2.22km</text>
					</view>
				</view>
				<view class="zhichi">本店支持宝马保养，符合国家三包规定。</view>
			</view>
			<!-- 预订 -->
			<ul class="book">
				<li class="book_time" v-for="(item,index) in reserves" :key="index" @click="confirms(item)">
					<text class="time">{{item.time}}</text>
					<text class="price" :style="{'color': (item.active? '#CD2727':'#666666')}">￥{{item.price}}</text>
					<text class="state" :style="[item.active?sj1:sj2]">{{item.active?'预定':'订满'}}</text>
				</li>
			</ul>
		</view>
		<!-- <comment></comment> -->
	</view>
</template>

<script>
	import comment from '@/components/index/shop/comment/comment.vue'
	export default {
		data() {
			return {
				// 日期控件
				ChangeData:'',
				// 日期
				dates: [],
				styleobj1: {
					'color': '#FFFFFF',
					'background-color': '#CD2727'
				},
				styleobj2: {
					'color': '#333333',
					'background-color': '#FFFFFF'
				},
				// 预约
				sj1: {
					"color": '#FFFFFF',
					"background-color": '#CD2727'
				},
				sj2: {
					"color": '#FFFFFF',
					"background-color": '#7d7d7d'
				},
				reserves: [{
						time: '08:00-09:30',
						price: 169,
						active: false
					},
					{
						time: '11:00-12:30',
						price: 169,
						active: false
					},
					{
						time: '14:00-15:30',
						price: 169,
						active: true
					},
					{
						time: '16:00-17:30',
						price: 169,
						active: true
					},
					{
						time: '18:00-20:00',
						price: 169,
						active: true
					}
				]
			}
		},
		mounted() {
			this.getTimeandWeek(new Date())
		},
		methods: {
			open() {
				this.$refs.calendar.open();
			},
			confirm(e) {
				// console.log(e);
				this.ChangeData=e.fulldate
				var  timesss= new Date(this.ChangeData);
				this.getTimeandWeek(timesss)
			},
			dataActive(item) {
				console.log(item)
				// item.checked=true
				this.dates.forEach((item,index)=>{
					item.checked=false
				})
				item.checked=true
			},
			confirms(item) {
				if (!item.active) {
					uni.showToast({
						title: '人数已满',
						icon: 'none'
					})
				} else {
					uni.navigateTo({
						url: "/components/index/shop/confirm/confirm"
					})
				}
			},
	
			getTimeandWeek(time) {
			            //获取当前时间
						var now = time;
						//往后几天就循环几次
						var check=[]
						for (let i = 0; i <= 4; i++) {
						    //24 * 3600 * 1000 就是计算一天的时间  
							var date = new Date(now.getTime() + i * 24 * 3600 * 1000);
							var year = date.getFullYear();
							var month = date.getMonth() + 1;
							
							var day = date.getDate();
							var dt2 = new Date(now.getTime() + i * 24 * 3600 * 1000);
							var weekDay = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
							//把七天的时间和星期添加到数组中
							check.push({
								date:year+'-'+month+'-'+day,
								Mon:month,
								Dat:day,
								week: weekDay[dt2.getDay()],
								checked: false
							});
						}
						this.dates = check
						// 今天的日期
						var newDat = now.getDate();
						this.dates.map((item, index) => {
							if (item.Dat == newDat) {
								// console.log(item)
								item.checked = true
							}
						})
					},

		},
		components: {
			comment
		}
	}
</script>

<style lang="scss">
	.calendar {
		height: 50px;
		width: 100%;
		// background-color: red;

		display: flex;
		padding: 0 15px;
		display: flex;
		align-items: center;
		box-sizing: border-box;

		.calendar-data {
			flex: 1;
			width: calc(100% - 22px);
			height: 50px;
			padding-right: 20px;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.datas {
				text-align: center;
				color: #333333;
				width: 48px;
				height: 39px;
				opacity: 1;
				box-sizing: border-box;
				border-radius: 5px;
				padding-top: 2px;
				&>view:nth-child(1) {
					height: 20px;
					opacity: 1;
					font-size: 14px;
				}

				&>view:nth-child(2) {
					height: 17px;
					opacity: 1;
					font-size: 12px;
				}
			}
		}

		.calendar-img {
			width: 22px;
			height: 22px;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.order {
		margin: 0 15px;
		overflow: hidden;
		border-top: 1px solid rgba(153, 153, 153, .3);
		box-sizing: border-box;

		.type {
			width: 100%;
			overflow: hidden;
			padding: 18px 0 12px 0;

			.left {
				float: left;
				width: 71px;
				height: 71px;
				margin-right: 10px;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.right {
				float: right;
				text-align: left;
				width: calc(100% - 81px);
				height: 71px;

				view:nth-child(1) {
					height: 22px;
					opacity: 1;
					font-size: 18px;
					text-align: left;
					color: #333333;
				}

				view:nth-child(2) {
					padding: 5px 0 4px 0;
					height: 17px;
					opacity: 1;
					font-size: 14px;
					text-align: left;
					color: #CD2727;

					text {
						margin-right: 12px;
					}
				}

				view:nth-child(3) {
					height: 17px;
					opacity: 1;
					font-size: 12px;
					text-align: left;
					color: #666666;

					.km {
						float: right;
					}
				}
			}

			.zhichi {
				clear: both;
				padding: 8px 0;
				height: 17px;
				font-size: 12px;
				color: #666666;
			}
		}

		.book {
			padding: 0;
			list-style: none;
			margin-bottom: 20px;

			li:last-child {
				border-bottom: none;
			}

			.book_time {
				border-bottom: 1px solid rgba(153, 153, 153, .3);
				height: 26px;
				padding: 6px 0;

				.time {
					float: left;
					width: 90px;
					height: 26px;
					line-height: 26px;
					font-size: 16px;
					color: #333333;
				}

				.price {
					margin-left: 60px;
					height: 26px;
					font-size: 16px;
					line-height: 26px;
					color: #666666;
					// opacity: 0.8;
				}

				.state {
					width: 43px;
					height: 26px;
					opacity: 1;
					float: right;
					text-align: center;
					// padding: 2px 10px;
					line-height: 26px;
					color: #FFFFFF;
					background: #7d7d7d;
					border-radius: 6px;
				}
			}

			.active {
				.price {
					color: #CD2727;
				}

				.state {
					background: #CD2727;
				}
			}
		}
	}
</style>
