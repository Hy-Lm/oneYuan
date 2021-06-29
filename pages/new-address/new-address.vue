<template>
	<view class="address">
		<view class="address-items">
			<view class="address-items-item" v-for="(item,index) in address" :key="index">
				<view class="address-items-item-l">
					<view>{{item.add_user}}</view>
					<view>{{item.add_dizhi}}</view>
					<view class="item-info">
						<view>{{item.add_user_name}}<text></text>{{item.add_user_sex=='男'?'(先生)':'(女士)'}}</view>
						<view>{{item.add_user_phone}}</view>
					</view>
				</view>
				<view class="address-items-item-r" @click="updateADdress(index)">
					<image src="../../static/b350e03b822fd6e1c8b5303a2ca4a52.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="address-btn" @click="newAddAdress">
			<view class="address-btn-l">
				新增地址
			</view>
			<view class="address-btn-r">
				<image src="../../static/arrows.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 地址列表
				address: [{
						add_user: '益园养车',
						add_dizhi: '昆仑山脉精灵洞南侧公共卫生间',
						add_user_name: '益',
						add_user_sex: '男',
						add_user_phone: '15735629946'
					},
					{
						add_user: '益园养车',
						add_dizhi: '昆仑山脉精灵洞南侧公共卫生间',
						add_user_name: '姚',
						add_user_sex: '女',
						add_user_phone: '15735629946'
					},
					{
						add_user: '益园养车',
						add_dizhi: '昆仑山脉精灵洞南侧公共卫生间',
						add_user_name: '宋',
						add_user_sex: '男',
						add_user_phone: '15735629946'
					},
					{
						add_user: '益园养车',
						add_dizhi: '昆仑山脉精灵洞南侧公共卫生间',
						add_user_name: '刘',
						add_user_sex: '女',
						add_user_phone: '15735629946'
					},
					{
						add_user: '益园养车',
						add_dizhi: '昆仑山脉精灵洞南侧公共卫生间',
						add_user_name: '叶',
						add_user_sex: '男',
						add_user_phone: '15735629946'
					}
				]
			}
		},
		methods: {
			newAddAdress() {
				// 新增收货地址
				uni.navigateTo({
					url:'/pages/newAdd-address/newAdd-address'
				})
			},
			updateADdress(index){
				var item=this.address[index];
				// console.log(item)
				// 编辑修货地址
				uni.navigateTo({
					url:"/pages/newUpdate-address/newUpdate-address?item="+JSON.stringify(item)
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		flex: 1;
		opacity: 1;
		background: #f9f7f7;
		padding: 22px 15px;
		padding-bottom: 0;
		// position: relative;
	}

	.address-btn {
		padding: 5px 7px;
		padding-left: 0;
		height: 20px;
		display: flex;
		justify-content: space-between;
	}

	.address-btn-r {
		width: 6px;
		height: 11px;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.address-btn-l {
		opacity: 1;
		font-size: 14px;
		color: #f0923c;
	}

	.address {
		padding: 0 28px;
		padding-bottom: 14px;
		background: #FFFFFF;

		.address-items-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 15px 0;
			border-bottom: 1px solid #EDEDED;

			.address-items-item-l {
				&>view:nth-child(1) {
					opacity: 1;
					font-size: 14px;
					color: #000000;
					margin-bottom: 2px;
				}

				&>view:nth-child(2) {
					opacity: 1;
					font-size: 12px;
					color: #000000;
				}

				&>view:nth-child(3) {
					opacity: 1;
					font-size: 12px;
					color: #707070;
				}

				.item-info {
					display: flex;

					&>view:nth-child(1) {
						margin-right: 7px;
					}
				}
			}
		}

		.address-items-item-r {
			width: 17px;
			height: 17px;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
