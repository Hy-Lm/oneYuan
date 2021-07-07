<template>
	<view class="select-date">
		<view class="select-day">
			<view class="day" v-for="(item,index) in deliveryTimeList" :key="index" :class="nowDay===index?'active':''"
				@click="nowDay = index;">{{item.day}}</view>
		</view>
		<view class="select-time">
			<view v-if="nowDay===0">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scroll="scroll">
					  <!-- <view id="demo1" class="scroll-view-item_H time uni-bg-red" v-for="item in 100">A</view> -->
					<view class="scroll-view-item_H time uni-bg-red" :class="index==selectTime&&nowDay===selectDay?'select':''"
						v-for="(i,index) in deliveryTimeList[nowDay].timeList" @click="clickTime(i,index)" :key="index">
						{{i}}
					</view>
				</scroll-view>
			</view>
			<view v-if="nowDay!==0">
				<view class="time" :class="i==selectTime&&nowDay===selectDay?'select':''"
					v-for="(i,index) in deliveryTimeList[nowDay].timeList" @click="clickTime(i,index)" :key="index">
					{{i}}
				</view>
			</view>
		</view>
		<!-- </view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showDelivery: false,
				deliveryTimeList: [{
					day: "",
					timeList: ""
				}],
				nowDay: 0,
				selectTime: 0, //默认是第几个
				selectDay: 0,
				scrollTop:1000
			};
		},
		mounted() {
			this.getDliveryTime();
		},
		methods: {
			clickTime(text, index) {
				this.selectTime = index;
				this.deliveryTime = this.deliveryTimeList[this.nowDay].day + text;
				this.selectDay = this.nowDay;
				console.log(this.selectTime, this.deliveryTime, this.selectDay)
				//使用 this.$emit('input',data)改变父组件中v-model绑定的属性值
				// this.$emit('input', this.deliveryTimeList[this.selectDay].day + text);
				// this.$emit('select-time');
			},
			// 当前时间的小时
			getTime() {

				var date = new Date(),
					year = date.getFullYear(),
					month = date.getMonth() + 1,
					day = date.getDate(),
					hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
					minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
					second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				month >= 1 && month <= 9 ? (month = "0" + month) : "";
				day >= 0 && day <= 9 ? (day = "0" + day) : "";
				var timer = hour;
				return timer;
			},
			scroll(e) {
				console.log(e)
				// this.scrollTop=this.timeindex*this.height
				// this.old.scrollTop = e.detail.scrollTop
			},
			//计算配送时间
			getDliveryTime() {
				var timer = this.getTime() + ":00";
				// console.log(timer)

				//获取星期几
				let date = new Date();
				let week = date.getDay();
				let today = "";
				let nextDay = "";
				let deliveryTimeList = [];
				if (week == 0) {
					today = "今天（周日）";
					nextDay = "明天（周一）";
				} else if (week == 1) {
					today = "今天（周一）";
					nextDay = "明天（周二）";
				} else if (week == 2) {
					today = "今天（周二）";
					nextDay = "明天（周三）";
				} else if (week == 3) {
					today = "今天（周三）";
					nextDay = "明天（周四）";
				} else if (week == 4) {
					today = "今天（周四）";
					nextDay = "明天（周五）";
				} else if (week == 5) {
					today = "今天（周五）";
					nextDay = "明天（周六）";
				} else if (week == 6) {
					today = "今天（周六）";
					nextDay = "明天（周日）";
				}
				//获取时间段
				let timeDate = new Date(date.getTime() + 3600000);
				// let todayList = getTimeList(timeDate.getHours(), timeDate.getMinutes());
				deliveryTimeList.push({
					day: today,
					timeList: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
						'09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
						'18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'
					]
				});
				deliveryTimeList.push({
					day: nextDay,
					timeList: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
						'09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
						'18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'
					]
				});
				this.deliveryTimeList = [];
				this.deliveryTimeList = deliveryTimeList;
				// 查找当前时间的下标
				deliveryTimeList[0].timeList.forEach((res, index) => {
					if (res == timer) {
						// console.log(index+1)
						this.selectTime = index
						// this.timeindex=index+1
						this.scrollTop=(index-1)*42
						console.log(this.scrollTop)
					}
				})
				
			}
		}
	};
</script>

<style lang="scss">
	.select-date {
		position: fixed;
		bottom: 0;
		left: 50%;
		transform: translate(-50%);
		width: 100%;
		height: 296px;
		overflow: hidden;
		display: flex;

		.select-day {
			width: 100%;
			height: 100%;
			flex: 1;
			opacity: 1;
			background: #f9f7f7;

			.day {
				height: 44px;
				line-height: 44px;
				text-align: center;
				font-size: 14px;
				color: #000000;
				letter-spacing: 0px;

				&.active {
					background-color: #fff;
				}
			}
		}

		.select-time {
			flex: 3;
			height: 100%;
			background-color: #fff;
			overflow-y: auto;

			.time {
				padding-left: 27px;
				border-bottom: 2px solid #eee;
				height: 44px;
				line-height: 44px;
				opacity: 1;
				font-size: 14px;
				text-align: left;
				color: #000000;
				letter-spacing: 0px;

				&.select {
					color: rgba(240, 146, 60, 1);
				}

				i {
					float: right;
					font-size: 30px;
					color: #ff4a00;
					margin-top: 26px;
				}
			}
		}
	}
	.scroll-Y{
		height: 100vh;
	}
</style>
