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
					<option value="">津</option>
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
		<view class="footer" >
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
			
		}
	}
</script>

<style lang="scss">
page{
	background-color: #F1F1F1;
}
.likecar{
	padding: 45px 30px 0 30px;
	width: 100%;
	height: 200px;
	box-sizing: border-box;
	.likecar_box{
		width: 100%;
		background-color: #FFFFFF;
		padding:18px 0 18px 15px;
		border-radius: 10px;
		view{
			padding: 7px 0;
			text{
				display: inline-block;
				width: 100px;
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
		margin-top: 80px;
		height: 34px;
		line-height: 34px;
		color:#FFFFFF;
		opacity: 1;
		background: #F86259;
		border-radius: 17px;
		text-align: center;
	}
}
</style>
