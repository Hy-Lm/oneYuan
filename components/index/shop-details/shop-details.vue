<template>
	<view class="shop-details-box">
		<view class="goback" @click="goback()">
			<image src="../../../static/箭头(1).png" mode=""></image>
			<text>返回</text>
		</view>
		<view class="shop-header">
			<view class="shopImg">
				<image src="../../../static/shangxin3.png"></image>
			</view>
			<view class="xiangqing">
				<view class="title">
					<text>固特威汽车三元催化剂发动机喷油</text>
					<text>嘴内部除积碳</text>
				</view>
				<view class="price">￥<text>650</text></view>
				<view class="con">
					<text>线下价格 ￥1356</text>
					<text>发货：天津</text>
				</view>
			</view>
			<view class="delivery">配送至：北辰区</view>
		</view>
		<!-- 商品详情 -->
		<view class="shop-xq">
			<view class="spxq">商品详情</view>
			<image src="../../../static/special.jpg" mode=""></image>
		</view>
		<view class="footer" ref="footer">
			<view class="footer_left">
				<image src="../../../static/客服 (1).png" mode=""></image>
				<text>客服</text>
			</view>
			<view class="footer_right">
				<text @click="popup()">加入购物车</text>
				<text @click="confirm_order()">立即购买</text>
			</view>
		</view>
		<view class="pop-up" ref="popup">
			<view class="chahao" @click="confirm()">
				×
			</view>
			<view class="xiangqing">
				<image src="../../../static/shangxin3.png" mode=""></image>
				<view class="right">
					<view>￥<text>599.00</text></view>
					<view>
						<text>已选</text>
						<text>银色</text>,
						<text>洗面+保养</text>,
						<text>1</text>个
					</view>
				</view>
			</view>
			<view class="shoptype">
				<view>汽配安装类型</view>
				<view>
					<text @click="shoptypesBtn(index)" v-for="(item,index) in shoptypes" :key="index"
						:style="{'border': (index==ind? '1px solid #707070':'none')}">{{item}}</text>
				</view>
			</view>
			<view class="count">
				<text>数量</text>
				<view>
					<text @click="jianNum">-</text>
					<text>{{num}}</text>
					<text @click="addNum">+</text>
				</view>
			</view>
			<view class="confirm" @click="confirm()">确定</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 选择的类型
				ind: 0,
				shoptypes: ['前挡玻璃', '后挡玻璃', '侧挡玻璃'],
				num:1
			}
		},
		methods: {
			jianNum(){
				// 减
				if(this.num<=1){
					uni.showToast({
						icon:'none',
						title:'不能减了'
					})
				}else{
					this.num--
				}
				
			},
			addNum(){
				this.num++
			},
			// 点击切换的类型
			shoptypesBtn(index) {
				this.ind = index
			},
			goback() {
				uni.navigateBack({
					url: "/pages/index/index"
				})
			},
			confirm_order() {
				uni.navigateTo({
					url: "/components/index/confirm-order/confirm-order"
				})
			},
			popup() {
				this.$refs.footer.$el.style.display = 'none'
				this.$refs.popup.$el.style.display = 'block'
			},
			confirm() {
				this.$refs.popup.$el.style.display = 'none'
				this.$refs.footer.$el.style.display = 'flex'
			}
		}
	}
</script>

<style lang="scss">
	.shop-details-box {
		position: relative;
		box-sizing: border-box;
	}

	.goback {
		position: fixed;
		// background-color: red;
		left: 25px;
		top: 50px;
		z-index: 9999;

		image {
			width: 9px;
			height: 18px;
			// background: #0a0a0a;
			vertical-align: middle;
			margin-right: 10px;
		}

		text {
			width: 32px;
			height: 22px;
			font-size: 16px;
			color: #000000;
			vertical-align: middle;
		}
	}

	.shop-header {
		.shopImg {
			width: 100%;
			height: 326px;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.xiangqing {
			padding: 0 15px;

			.title {
				width: 80%;
				display: inline-block;
				font-size: 16px;
				color: #000000;
				padding: 10px 0 5px 0;

				text {
					display: block;
				}
			}

			.collect {
				width: 20%;
				display: inline-block;
				text-align: right;
				font-size: 16px;
				color: #7d7d7d;
			}

			.price {
				height: 40px;
				line-height: 40px;
				font-size: 16px;
				font-weight: bold;
				color: #cd2727;

				text {
					font-size: 22px;
				}
			}

			.con {
				height: 20px;
				font-size: 14px;
				color: #7d7d7d;

				text:nth-child(2) {
					float: right;
				}
			}
		}

		.delivery {
			height: 42px;
			margin: 10px 0 0 0;
			padding-left: 15px;
			width: 100%;
			line-height: 42px;
			background: #ffffff;
			box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.16);
			font-size: 14px;
			color: #7d7d7d;
		}
	}

	.shop-xq {
		background: #f1f1f1;

		.spxq {
			padding: 5px 0 5px 15px;
			height: 30px;
			line-height: 30px;
			font-size: 14px;
			color: #000000;
		}

		image {
			width: 100%;
			height: 266px;
		}
	}

	.footer {
		position: fixed;
		box-sizing: border-box;
		bottom: 0;
		background-color: #FFFFFF;
		padding: 25px 15px 30px;
		width: 100%;
		display: flex;
		justify-content: space-between;

		.footer_left {
			display: flex;
			align-items: center;

			image {
				width: 16px;
				height: 16px;
				margin-right: 7px;
			}

			text {
				height: 22px;
				font-size: 16px;
				color: #515151;
			}
		}

		.footer_right {
			text {
				height: 28px;
				font-size: 16px;
				padding: 3px 11px;

				&:nth-child(1) {
					border-radius: 14px 0px 0px 14px;
					background: #707070;
					color: #fff0c9;
				}

				&:nth-child(2) {
					border-radius: 0px 14px 14px 0px;
					background: #cd2727;
					color: #ffffff;
				}
			}
		}
	}

	.pop-up {
		display: none;
		position: fixed;
		box-sizing: border-box;
		bottom: 0;
		width: 100%;
		height: 500px;
		padding: 18px 15px 0 15px;
		background: #f3f3f3;
		border-radius: 15px 15px 0px 0px;
		box-shadow: 2px 3px 9px 0px rgba(0, 0, 0, 0.16);

		.chahao {
			float: right;
			margin-right: 15px;
			width: 20px;
			height: 20px;
			line-height: 18px;
			text-align: center;
			border-radius: 50%;
			border: 1px solid #000;
		}

		.xiangqing {
			margin-top: 20px;
			display: flex;

			image {
				width: 95px;
				height: 95px;
				display: inline-block;
				margin-right: 25px;
			}

			.right {
				height: 95px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				// text-align: center;
				view:nth-child(1) {
					height: 28px;
					font-size: 12px;
					font-weight: 700;
					color: #CD2727;

					text {
						font-size: 20px;
					}
				}

				view:nth-child(2) {
					height: 20px;
					font-size: 14px;
					color: #000000;

					text:nth-child(1) {
						color: #7D7D7D;
						margin-right: 10px;
					}

					text:last-child {
						margin-left: 10px;
					}
				}
			}
		}

		.shoptype {
			padding: 35px 0;

			view:nth-child(1) {
				height: 20px;
				font-size: 14px;
				font-weight: 700;
				color: #000000;
			}

			view:nth-child(2) {
				margin-top: 15px;
				display: flex;
				justify-content: space-between;

				text {
					display: inline-block;
					width: 89px;
					text-align: center;
					font-weight: 600;
					height: 24px;
					line-height: 24px;
					font-size: 14px;
					color: #000000;
					border-radius: 13px;
				}
			}
		}

		.count {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			box-sizing: border-box;

			text {
				width: 28px;
				height: 20px;
				font-size: 14px;
				font-weight: 700;
				color: #000000;
				margin-right: 11px;
			}

			view {
				width: 74px;
				margin-right: 15px;
				display: inline-block;
				border: 1px solid #333333;
				border-radius: 13px;
				display: flex;
				justify-content: space-around;

				// align-items: center;
				text {
					text-align: center;
					margin-right: 0;
					height: 27px;
					line-height: 27px;
					font-size: 14px;
					color: #707070;
				}
			}
		}

		.confirm {
			position: absolute;
			bottom: 0;
			margin: 0 30px;
			width: calc(100% - 90px);
			height: 37px;
			background: #f8981d;
			border-radius: 19px;
			color: #FFFFFF;
			font-size: 14px;
			font-weight: 700;
			line-height: 37px;
			text-align: center;
		}
	}
</style>
