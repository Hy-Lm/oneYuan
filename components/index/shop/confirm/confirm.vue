<template>
	<view class="confirm_box">
		<ul>
			<li>
				<text>内饰清洁 :</text>
				<text>￥168</text>
				<view class="xian"></view>
			</li>
			<li>
				<text>优惠券 :</text>
				<text>暂无可用优惠券</text>
				<view class="xian"></view>
			</li>
			<li>
				<text>订单总价 :</text>
				<text>￥168</text>
				<view class="xian"></view>
			</li>
			<li>
				<text>手机号码 :</text>
				<text>191****3630</text>
			</li>
			<li>
				<view>预约须知</view>
				<view class="quxiao">取消规则: 随时取消，过期取消</view>
			</li>
		</ul>
		<view class="footer" @click="detail()">
			立即预约
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
			detail(){
				uni.showToast({
					icon:'',
					title:'预约成功',
					duration:2000,
					success() {
						setTimeout(function(){
							uni.navigateTo({
							url:"/components/index/shop/detail/detail"
						})
						},1000)
						
					}
				})
				// uni.navigateTo({
				// 	url:"/components/index/shop/detail/detail"
				// })
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		background: #FFFFFF;
		position: relative;
		box-sizing: border-box;
	}

	.confirm_box {
		// padding: 15px 0;
		ul {
			padding: 0;
			list-style: none;
			li {
				padding: 0 0 0 15px ;
				background-color: #FFFFFF;
				font-size: 14px;
				line-height: 35px;
				color: #333333;
				&:nth-child(1){
					border-top: 12px solid #f1f1f1;
				}
				&:nth-child(4){
					border-bottom: 12px solid #f1f1f1;
				}
				.xian {
					width: 100%;
					height: 1px;
					background-color: rgba(153, 153, 153, .3) ;
				}

				text:nth-child(2) {
					float: right;
					margin-right:15px;
				}
				.quxiao{
					font-size: 14px;
					color: #7d7d7d;
				}
			}
			li:nth-child(odd){
				text:nth-child(2) {
					color:#CD2727;
				}
			}
			li:nth-child(4) {
				margin-bottom: 12px;
			}
			li:nth-child(5) {
				height: 60px;
				box-sizing: border-box;
				padding: 8px 15px;
				view{
					line-height: 22px;
				}
			}
		}
	}
	.footer{
		// 
		// margin-top: 30px;
		position: absolute;
		bottom: 10px;
		width: calc(100% - 64px);
		margin: 0 32px;
		height: 34px;
		line-height: 34px;
		color:#FFFFFF;
		opacity: 1;
		background: #0d8600;
		border-radius: 17px;
		text-align: center;
	}
</style>
