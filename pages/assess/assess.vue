<template>
	<view class="assess">
		<!-- 爱车评估 -->
		<view class="assess-top"></view>
		<view class="assess-bottom">
			<view class="assess-list">
				<view class="assess-list-item">
					<label for="name">车牌号</label>
					<view>
						<select class="selectType">
							<option v-for="(item,index) in plate" :key="index" :value="item">{{item}}</option>
						</select>
					</view>
					<view>
						<input type="text" value="MG9887" />
					</view>
				</view>
				<view class="assess-list-item">
					<label>车主手机号</label>
					<input type="text"  value="" placeholder="请输入手机号" />
					<image src="../../static/arrows.png" mode=""></image>
				</view>
				<view class="assess-list-item">
					<label >品牌型号</label>
					<input type="text"  value="" placeholder="请选择品牌型号" />
					<image src="../../static/arrows.png" mode=""></image>
				</view>
				<view class="assess-list-item">
					<label >行驶里程</label>
					<input type="text" value="" placeholder="请输入行驶里程" />
					<view>万公里</view>
				</view>
			</view>
		</view>
		<view class="btn" @click="assessBtn">
			免费估价
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				plate: ['津', '粤', '京']
			}
		},
		methods: {
			assessBtn(){
				// 跳转到免费评估
				uni.navigateTo({
					url:"/pages/free-assess/free-assess"
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		flex: 1;
		opacity: 1;
		background: #f9f7f7;
		position: relative;
	}

	.btn {
		text-align: center;
		position: fixed;
		bottom: 30px;
		left: 50%;
		transform: translateX(-50%);
		width: 315px;
		height: 29px;
		opacity: 1;
		background: #f0923c;
		border-radius: 15px;
		font-size: 16px;
		color: #ffffff;
		line-height: 29px;
	}

	.assess {
		display: flex;
		flex-direction: column;

		.assess-top {
			height: 83px;
			opacity: 1;
			background: #accb69;
		}
		
		.assess-bottom {
			position: absolute;
			top: 40px;
			left: 50%;
			transform: translateX(-50%);
			width: 315px;
			height: 218px;
			opacity: 1;
			background: #ffffff;
			border-radius: 5px;
			box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.16);
			padding: 24px 13px 0 30px;
			box-sizing: border-box;
			.assess-list{
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
			
			.assess-list-item {
				flex: 1;
				// padding-bottom: 3px;
				// margin-bottom: 24px;
				display: flex;
				align-items: center;
				opacity: 1;
				font-size: 14px;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				text-align: left;
				color: #000000;
				border-bottom: 1px solid #EDEDED;
				&:last-child{
					border: none;
				}
				&>label {
					width: 70px;
					margin-right: 40px;
				}

				&:nth-child(1)>label {
					width: 42px;
					margin-right: 30px;
				}

				&:nth-child(1)>view:nth-child(2) {
					margin-right: 5px;

					select {
						border: none;
						background-color: #FFFFFF;
					}
				}

				image {
					width: 7px;
					height: 12px;
				}

				input {
					flex: 1;
					font-size: 14px;
				}
			}
		}
	}
</style>
