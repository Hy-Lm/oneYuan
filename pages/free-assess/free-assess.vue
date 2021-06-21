<template>
	<view class="free-assess">
		<!-- 评估信息 -->
		<view class="assess-top"></view>
		<view class="assess-bottom">
			<view class="assess-list">
				<view class="assess-list-item">
					<label for="name">车牌号</label>
					<view>
						<select class="selectType">
							<option value="津">津</option>
						</select>
					</view>
					<view>
						<input type="text" value="MG9887" />
					</view>
				</view>
				<view class="assess-list-item">
					<label >行驶里程</label>
					<input type="text"  disabled value="10万公里" />
				</view>
				<view class="assess-list-item">
					<label >下月贬值</label>
					<input type="text"  value="72.69元"  disabled/>
				</view>
				<view class="assess-list-item">
					<label >建议交易价</label>
					<input type="text"  value="0.81万"  disabled />
				</view>
				<view class="assess-list-item">估价结果仅供参考，最终以实际报价为准</view>
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
	.free-assess {
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
			height: 233px;
			opacity: 1;
			background: #ffffff;
			border-radius: 5px;
			box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.16);
			padding: 24px 13px 32px 30px;
			box-sizing: border-box;
				.assess-list-item:last-child{
					justify-content: center;
					opacity: 1;
					font-size: 12px;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #515151;
					border: none;
				}
			.assess-list-item {
				
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
			.assess-list-item:nth-child(4){
				margin-bottom:15px ;
			}
		}
	}
</style>
