<template>
	<view class="insurance">
		<!-- 车险-->
		<view class="assess-list">
			<view class="assess-list-item">
				<label for="name">车牌号</label>
				<view>
					<select class="selectType">
						<option v-for="(item,index) in plate" :key="index" :value="item">{{item}}</option>
					</select>
				</view>
				<view>
					<input type="text" value="" placeholder="输入车牌自动识别" />
				</view>
			</view>
			<view class="assess-list-item">
				<label>姓名</label>
				<input type="text" value="" placeholder="请输入姓名" />
			</view>
			<view class="assess-list-item">
				<label>预留电话</label>
				<input type="text" value="" placeholder="请输入预留电话" />
			</view>
			<view class="assess-list-item">
				<label>车主身份证</label>
				<input type="text" value="" placeholder="请输入车主身份证" />
			</view>
			<view class="assess-list-item">
				<label>车辆识别代码</label>
				<input type="text" value="" placeholder="请输入车辆识别代码" />
			</view>
			<view class="assess-list-item">
				<label>保险生效日期</label>
				<input type="text" value="" placeholder="请选择保险生效日期" />
			</view>
		</view>
		<view class="btn" v-if="!mask" @click="insuranceBtn">
			立即提交
		</view>
		<!-- 阴影 -->
		<view class="mask" v-if="mask">

		</view>
		<!-- 提交成功 -->
		<view class="mask-model"  v-if="mask">
			<view>
				<image src="../../static/组272.png" mode=""></image>
			</view>
			<view>
				提交成功
			</view>
			<view>
				我们会尽快与您联系，请耐心等待！
			</view>
			<view></view>
			<view>如有问题，请联系客服：0440-252-321</view>
			<view @click="cuo">
				<image src="../../static/错.svg" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				plate: ['津', '粤', '京'],
				// 阴影状态
				mask:false
			}
		},
		methods: {
			insuranceBtn() {
				// 显示遮罩层
				this.mask=true
			},
			cuo(){
				// 隐藏遮罩层
				this.mask=false
			}
		}
	}
</script>

<style lang="scss">
	.mask {
		z-index: 1;
		width: 100%;
		// flex: 1;
		overflow: hidden;
		height: 100%;
		opacity: 0.17;
		background: #afafaf;
		border: 1px solid #707070;
		position: fixed;
		top: 0;
		left: 0;

	}

	.mask-model {
		z-index: 2;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		padding: 0 8px;
		box-sizing: border-box;
		opacity: 1;
		background: #ffffff;
		border-radius: 14px;
		width: 331px;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 195px;
		justify-content: space-around;

		&>view:nth-child(6) {
			width: 25px;
			height: 25px;
			transform: translateY(60px);
			image {
				width: 100%;
				height: 100%;
			}
		}

		&>view:nth-child(1) {
			width: 50px;
			height: 50px;

			image {
				width: 100%;
				height: 100%;
			}
		}

		&>view:nth-child(2) {
			opacity: 1;
			font-size: 18px;
			color: #0d8600;
		}

		&>view:nth-child(3) {
			opacity: 1;
			font-size: 14px;
			color: #2c2c2c;
		}

		&>view:nth-child(4) {
			width: 100%;
			height: 1px;
			opacity: 0.86;
			background: rgba(0, 0, 0, 0.00);
			border-bottom: 2px solid #707070;
		}

		&>view:nth-child(5) {
			opacity: 1;
			font-size: 14px;
			color: #707070;
		}
	}

	page {
		overflow: hidden;
		width: 100%;
		flex: 1;
		opacity: 1;
		background: #f9f7f7;
	}

	.btn {
		text-align: center;
		position: fixed;
		bottom: 30px;
		left: 50%;
		transform: translateX(-50%);
		width: 315px;
		height: 37px;
		opacity: 1;
		background: #ea4427;
		border-radius: 19px;
		font-size: 14px;
		font-weight: 700;
		color: #ffffff;
		line-height: 37px;
	}

	.insurance {
		margin-top: 7px;
		display: flex;
		flex-direction: column;
		height: 332px;
		opacity: 1;
		background: #ffffff;
		box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);
		padding: 30px;
		padding-top: 67px;
		padding-bottom: 0;
		box-sizing: border-box;

		.assess-list-item:last-child {
			margin-bottom: 0;
			border: none;
		}

		.assess-list-item {
			box-sizing: border-box;
			padding-bottom: 3px;
			margin-bottom: 24px;
			display: flex;
			opacity: 1;
			font-size: 14px;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			text-align: left;
			color: #000000;
			border-bottom: 1px solid #EDEDED;

			&>label {
				width: 84px;
				margin-right: 40px;
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
</style>
