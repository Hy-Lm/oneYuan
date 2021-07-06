<template>
	<view class="time">
		<view class="uni-title uni-common-pl">选择预约时间</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker mode="time" :value="time" start="00:00" end="24:00" @change="bindTimeChange">
						<view class="uni-input">{{time}}</view>
					</picker>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "rescue-time",
		data() {
			return {
				time: '12:01'
			};
		},
		mounted() {
			this.getTime()
		},
		methods: {
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
				// var timer = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
				var timer = hour + ':' + minute;
				// console.log(day)
				this.time = timer
			},
			bindTimeChange(e) {
				this.time = e.target.value
			},
		}
	}
</script>

<style lang="scss">
	.time {
		position: fixed;
		bottom: 0;
		left: 50%;
		transform: translate(-50%);
		width: 100%;
		height: 296px;
		opacity: 1;
		background: #ffffff;
		border-radius: 10px 10px 0px 0px;
		&>.uni-title{
			height: 47px;
			line-height: 47px;
			text-align: center;
			opacity: 1;
			background: #f9f7f7;
		}
	}
</style>
