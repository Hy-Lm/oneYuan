<template>
	<view>
		<view class="confirm_order_header">
			<view class="nav">
				<view class="flex_between">
					<view class="nav_title">
						<view :class="{'active':isActive==1}" @click="chenked(1)">
							同城配送
						</view>
					</view>
					<view class="nav_title">
						<view :class="{'active':isActive==2}" @click="chenked(2)">
							到店更换
						</view>
					</view>
				</view>
				<view class="nav_item  item1 " v-if="isActive==1">
					<ul>
						<li>
							<p>益园养车 19103863654</p>
						</li>
						<li>
							<text>配送至益园养车（天津北辰区）</text>
							<image src="../../../static/arrows.png" mode=""></image>
						</li>
						<li>
							<p>配送时间</p>
							<view>
								<text>立即送出</text>
								<image src="../../../static/arrows.png" mode=""></image>
							</view>
						</li>
						<li>
							<p>支付方式</p>
							<view>
								<text>在线支付</text>
								<image src="../../../static/arrows.png" mode=""></image>
							</view>
						</li>
					</ul>
				</view>
				<view class="nav_item  item2" v-if="isActive==2">
					<ol>
						<li>
							<p>益园养车</p>
						</li>
						<li>
							<p>天津市北辰区北辰公园南100米</p>
						</li>
						<li>
							<p>店铺电话：19103863654</p>
						</li>
					</ol>
					<view class="foot">
						<view class="left">
							<text>到店时间</text>
							<view>
								<text>9:40</text>
								<image src="../../../static/arrows.png" mode=""></image>
							</view>
						</view>
						<view class="right">
							<text>预留电话</text>
							<view>
								<text>19103863546</text>
								<image src="../../../static/arrows.png" mode=""></image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isActive: 1
			}
		},
		methods: {
			chenked(type) {
				this.isActive = type
			},
		}
	}
</script>

<style lang="scss" scoped>
	.confirm_order_header {
		width: 100%;
		height: 230px;
		background-color: #ACCB69;
		padding: 22px 15px 0;
		box-sizing: border-box;

		.nav {
			// height: 155px;
			background: #f1f1f1;
			border-radius: 8px;
			box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);

			.flex_between {
				padding: 15px 0;
				display: flex;

				.nav_title {
					width: 100%;
					height: 20px;
					line-height: 20px;
					opacity: 1;
					font-size: 14px;
					font-weight: 700;
					text-align: center;
					color: #000000;
				}
			}
			.nav_item{
				padding: 0 15px;
				height: 100px;
				position: relative;
				&::after{
					content: '';
					position: absolute;
					bottom: 0;
				}
				ul{
					padding: 0;
					list-style: none;
					li{
						image{
							float: right;
							width: 6px;
							height: 11px;
							margin-top: 5px;
						}
						text{
							height: 22px;
							font-size: 16px;
							font-weight: 700;
							color: #000000;
						}
						p{
							height: 17px;
							opacity: 0.8;
							font-size: 12px;
							font-weight: 400;
							color: #000000;
							display: inline-block;
						}
						view{
							float: right;
							right:0;
							text{
								height: 21px;
								font-size: 12px;
								color: #707070;
								vertical-align: middle;
								margin-right: 10px;
								margin-top: 3px;
								color: #f0923c;
							}
							image{
								width: 6px;
								height: 11px;
								vertical-align: middle;
								margin-top: 8px;
							}
						}
					}
				}
				ol{
					width: 100%;
					list-style: none;
					padding: 0 0 10px 0;
					border-bottom: 1px solid #707070;
					li:nth-child(1),li:nth-child(3){
						p{
							height: 22px;
							line-height: 22px;
							opacity: 1;
							font-size: 12px;
							text-align: left;
							color: #000000;
						}
					}
					li:nth-child(2){
						p{
							width: 193px;
							height: 20px;
							opacity: 1;
							font-size: 14px;
							color: #000000;
						}
					}
				}
				.foot{
					padding-top: 10px;
					.left,.right{
						float: left;
						width: 50%;
						view{
							image{
								width: 4px;
								height: 8px;
								margin-left: 10px;
							}
						}
						text{
							width: 48px;
							height: 34px;
							opacity: 1;
							font-size: 12px;
							color: #515151;
						}
					}
				}
			}
			.item2{
				height: 130px;
			}
		}
	}
</style>
