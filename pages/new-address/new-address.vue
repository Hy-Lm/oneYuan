<template>
	<view class="address">
		<view class="address-items">
			<view class="address-items-item" v-for="(item,index) in address" :key="index">
				<view class="address-items-item-l1">
					<view class="address-items-item-l1-l">
						<view @click="check(index)">
							<!-- <label class="radio"> -->
							<!-- <checkbox value="cb" :checked="item.checked" color="#f8981d" style="transform:scale(0.7)" /> -->
							<radio style="transform:scale(0.7);" :checked="item.checked" color='#f8981d' />
							<!-- </label> -->
						</view>
						<view>设为默认</view>
					</view>
					<view class="address-items-item-l1-r">
						<view @click="updateADdress(index)">编辑</view>
						<view @click="removeADdress(index)">删除</view>
					</view>
				</view>
				<view class="address-items-item-l2">
					<view>{{item.add_user}}</view>
					<view>{{item.add_user_phone}}</view>
				</view>
				<view class="address-items-item-l3">
					{{item.add_dizhi}}&nbsp;&nbsp;{{item.add_zixi}}
				</view>
			</view>
		</view>
		<view class="address-btn" @click="newAddAdress">
			+	添加收货地址
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
						add_dizhi: '河北省 廊坊市 三河市 燕郊经济技术开发区',
						add_zixi:'天山国际创业基地一 号楼405室',
						add_user_phone: '15735629946',
						checked: true
					},
					{
						add_user: '益园养车',
						add_dizhi: '河北省 廊坊市 三河市 燕郊经济技术开发区',
						add_zixi:'天山国际创业基地一 号楼405室',
						add_user_phone: '1573562994611',
						checked: false
					}
				]
			}
		},
		methods: {
			check(index){
				this.address.forEach((item)=>{
					item.checked=false
				})
				this.address[index].checked=true
			},	
			newAddAdress() {
				// 新增收货地址
				uni.redirectTo({
					url: '/pages/newAdd-address/newAdd-address'
				})
			},
			updateADdress(index){
				var item=this.address[index];
				// console.log(item)
				// 编辑修货地址
				uni.redirectTo({
					url:"/pages/newUpdate-address/newUpdate-address?item="+JSON.stringify(item)
				})
			},
			removeADdress(index){
				console.log(index)
			}
		}
	}
</script>

<style lang="scss">
	page {
		flex: 1;
		opacity: 1;
		// background: #f9f7f7;
		padding: 0 15px;
		padding-bottom: 0;
		box-sizing: border-box;
		// position: relative;
	}

	.address-btn{
		position: fixed;
		bottom: 30px;
		left: 50%;
		transform: translateX(-50%);
		width: 80%;
		text-align: center;
		padding: 5px 0;
		height: 36px;
		opacity: 1;
		border: 1px solid #f8981d;
		line-height: 36px;
		font-size: 20px;
		font-weight: 700;
		color: #f8981d;
	}

	.address {
		// padding: 0 28px;
		padding-bottom: 14px;
		background: #FFFFFF;

		.address-items-item {
			padding: 10px 0;
			height: 105px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			border-bottom: 1px solid #EDEDED;

			.address-items-item-l3 {
				height: 34px;
				font-size: 12px;
				font-weight: 400;
				text-align: left;
				color: #666666;
			}

			.address-items-item-l2 {
				display: flex;

				&>view {
					&:nth-child(1) {
						margin-right: 30px;
					}

					height: 20px;
					font-size: 14px;
					font-weight: 700;
					text-align: left;
					color: #333333;
				}
			}

			.address-items-item-l1 {
				width: 100%;
				display: flex;
				justify-content: space-between;

				// align-items: flex-end;
				.address-items-item-l1-l {
					display: flex;
					align-items: center;

					// align-items:flex-end;
					&>view {
						// height: 20px;
						font-size: 14px;
						font-weight: 700;
						color: #333333;
					}
				}

				.address-items-item-l1-r {
					display: flex;

					&>view {
						&:nth-child(1) {
							padding-right: 12px;
							border-right: 1px solid rgba(102, 102, 102, .41);
						}

						&:nth-child(2) {
							padding-left: 12px;
						}

						height: 20px;
						font-size: 14px;
						font-weight: 700;
						color: #333333;
					}
				}
			}


		}
	}
</style>
