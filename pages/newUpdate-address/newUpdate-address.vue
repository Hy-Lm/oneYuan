<template>
	<view class="newAdd">
		<view class="newAdd-info">
			<view>
				<label for="name">收件人</label>
				<input type="text" id="name" :value="updateAdress.add_user_name" placeholder="姓名" />
			</view>
			<view>
				<label for="tel">电话</label>
				<input type="text" id="tel" :value="updateAdress.add_user_phone" placeholder="手机号" />
			</view>
			<view>
				<label for="address">地址</label>
				<input type="text" id="address" :value="updateAdress.add_dizhi" placeholder="请输入收货地址" />
			</view>
		</view>
		<view class="newAdd-btn">
			<view class="btn1" @click="delAddress">
				删除地址
			</view>
			<view class="btn2" @click="updatedz">
				保存地址
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				updateAdress:''
			}
		},
		methods: {
			// 删除地址
			delAddress(){
				console.log('删除地址')
				uni.redirectTo({
					url:"/pages/new-address/new-address"
				})
			},
			// 修改地址
			updatedz(){
				console.log('保存地址')
				uni.redirectTo({
					url:"/pages/new-address/new-address"
				})
			}
		},
		onLoad(option) {//接收上个页面传递过来的参数
		if (!option.item) {
		        return
		      }
			this.updateAdress = JSON.parse(option.item);
		}
	}
</script>

<style lang="scss">
page {
		flex: 1;
		opacity: 1;
		background: #f9f7f7;
		// position: relative;
	}
	.newAdd-btn{
		display: flex;
		justify-content: space-around;
		margin: 35px auto;
		&>view{
			width: 115px;
			text-align: center;
			height: 30px;
			line-height: 30px;
			opacity: 1;
			border: 1px solid #919191;
			border-radius: 7px;
			font-size: 16px;
			color: #000000;
		}
		&>view:nth-child(2){
			background: #accb69;
			font-size: 16px;
			color: #ffffff;
		}
	}
	.newAdd-info{
		padding: 19px 15px 0 15px;
		view{
			display: flex;
			margin-bottom: 14px;
			border-bottom: 1px solid #E8E6E6;
			label{
				width: 50px;
				margin-right:10px ;
				font-size: 14px;
			}
			input{
				padding-bottom: 10px;
				font-size: 14px;
				flex: 1;
				
			}
		}
	}
</style>
