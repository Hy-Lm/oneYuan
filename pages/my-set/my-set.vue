<template>
	<view class="mySet">
		<!-- 我的设置 -->
		<view class="mySet-info">
			<view class="mySet-info-img">
				<image src="../../static/52aa34ff58bffd97658f3402c79dac8.png" mode=""></image>
			</view>
			<view class="mySet-info-con">
				<view class="mySet-info-con-list">
					<view class="con-list-con">
						<view>
							昵称 :
						</view>
						<input class="con-list-con-ip" type="text" value="益园养车" disabled="true"  confirm-type="done"/>
					</view>
					<view class="con-list-img">
						<image src="../../static/rightjian.png" mode=""></image>
					</view>
				</view>
				<view class="mySet-info-con-list">
					<view class="con-list-con">
						<view>
							手机号 :
						</view>
						<input class="con-list-con-ip" type="text" value="益园养车" disabled="false" confirm-type="done"/>
					</view>
					<view class="con-list-img">
						<image src="../../static/rightjian.png" mode=""></image>
					</view>
				</view>
				<view class="mySet-info-con-list">
					<view class="con-list-con">
						<view>
							我的收货地址
						</view>
					</view>
					<view class="con-list-img">
						<image src="../../static/rightjian.png" mode=""></image>
					</view>
				</view>
				<view class="mySet-info-con-list">
					<view class="con-list-con">
						<view>
							清除缓存
						</view>
					</view>
					<view class="con-list-img">
						<image src="../../static/rightjian.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="mySet-cal">

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
	.mySet {
		height: 100vh;
		opacity: 1;
		background: #f9f7f7;
		padding: 11px;
		.mySet-info {
			background-color: #FFFFFF;
			display: flex;
			flex-direction: column;
			align-items: center;
			.mySet-info-con {
				width: 100%;
				padding: 20px;
				box-sizing: border-box;
				.mySet-info-con-list {
					width: 100%;
					display: flex;
					justify-content: space-between;
					height: 37px;
					line-height: 37px;
					border-bottom: 1px solid #707070;
				}
			}
			.con-list-con{
				flex: 1;
				display: flex;
				align-items: center;
				.con-list-con-ip{
					display: inline-block;
					opacity: 1;
					font-size: 14px;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					text-align: left;
					color: #2c2c2c;
					line-height: 21px;
					letter-spacing: 0px;
				}
				&>view:nth-child(1){
					margin-right: 20px;
					opacity: 1;
					font-size: 14px;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					text-align: left;
					color: #2c2c2c;
					line-height: 21px;
					letter-spacing: 0px;
				}
			}
			.con-list-img {
				width: 16px;
				height: 16px;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.mySet-info-img {
				margin: 14px 0;
				width: 47px;
				height: 47px;
				opacity: 1;
				background: rgba(0, 0, 0, 0.00);
				border-radius: 50%;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
