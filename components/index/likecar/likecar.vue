<template>
	<view class="likecar">
		<view class="likecar_box">
			<view>
				<text>姓名</text>
				<input type="text" value="" placeholder="请输入姓名"/>
			</view>
			<view>
				<text>预留电话</text>
				<input type="text" value="" placeholder="请输入预留电话"/>
			</view>
			<view>
				<text>车牌号</text>
				<select name="" id="">
					<option value="津">津</option>
					<option value="京">京</option>
					<option value="粤">粤</option>
				</select>
				<input type="text" value="" placeholder="请输入车牌号"/>
			</view>
			<view>
				<text>当前里程</text>
				<input type="text" value="" placeholder="请输入当前里程"/>
				<text class="km">Km</text>
			</view>
			<view>
				<text>上路时间</text>
				<input type="text" value="" placeholder="请输入上路时间"/>
			</view>
		</view>
		<view class="footer" @click="likecar">
			完成
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
			likecar(){
				// 点击完成后 跳转到我的爱车
				// 跳转到添加爱车页面
				uni.redirectTo({
					// 跳转到我的爱车
					url:"../my-likecar/my-likecar"
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #F1F1F1;
	// overflow: hidden;
}
.likecar{
	
	width: 100%;
	height: 200px;
	.likecar_box{
		overflow: hidden;
		box-sizing: border-box;
		margin: 45px 15px 0 15px;
		// width: 100%;
		background-color: #FFFFFF;
		padding:19px 26px;
		border-radius: 10px;
		view{
			&:nth-child(3){
				text{
					width: 100px;
				}
				select{
					border: none;
					background-color: #FFFFFF;
				}
			}
			padding: 7px 0;
			text{
				display: inline-block;
				width: 120px;
				height: 20px;
				line-height: 20px;
				font-size: 14px;
				text-align: left;
				color: #000000;
				vertical-align: middle;
			}
			input{
				display: inline-block;
				vertical-align: middle;
				height: 20px;
				font-size: 12px;
				color: #7d7d7d;
			}
			.km{
				width: auto;
				color: #515151;
			}
			select{
				display: inline-block;
				margin-left: -26px;
				padding-right: 10px;
			}
		}
	}
	.footer{
		text-align: center;
		position: fixed;
		bottom: 30px;
		left: 50%;
		transform: translateX(-50%);
		width: 315px;
		height: 30px;
		opacity: 1;
		background: #f86259;
		border-radius: 15px;
		font-size: 16px;
		color: #ffffff;
		line-height: 29px;
	}
}
</style>
