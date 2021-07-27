<template>
	<view class="shoppingBox">
		<!-- 购物车 -->
		<view class="gao">

			<view class="shoppingBoxList" v-for="(item,index) in array">
				<view style="line-height: 74px; ">
					<checkbox :value="item.valueBox" :checked="item.checked" @click="checkboxClick(item,index)" />
				</view>
				<view>
					<image style="width: 74px; height: 74px;" mode="scaleToFill" :src="item.scrList"
						@error="imageError"></image>
				</view>
				<view
					style="font-size: 12px;margin-left: 10px; display: flex; flex-direction:column;justify-content:space-between;">
					<view class="titleBox">{{item.titleBox}}</view>
					<view style="display: flex;justify-content:space-between;">
						<view style="display: flex;">
							<view style="color:#FF3B30; margin-right: 50px;">¥{{item.price*item.number}}</view>
							<view
								style="background-color: #707070; color:#FFF0C9; padding: 2px 5px; border-radius: 4px;">
								会员价 ¥{{item.member}}
							</view>
						</view>
						<view>X <text style="font-size: 16px;">{{item.number}}</text></view>
					</view>
				</view>
			</view>
			<!-- 发现好货 -->
			<view class="part">
				<parts></parts>
			</view>
		</view>
		<view class="floor">
			<view >
				<checkbox value="checked" :checked="checked" @click="checkClick" />
				全选
			</view>
			<view style="margin-left: 12px; display: flex;">
				<view style="line-height: 40px;">合计 ¥</view><view style="font-size: 26px; color:#FF3B30">198</view>
				<view class="shoppingBtn">
					去结算
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked:false,
				array: [{
						titleBox: "悠度/户外便携折叠椅火车靠背凳子 沙滩椅钓鱼椅写生椅",
						price: 198,
						member: 158,
						number: 2,
						valueBox: "1213", //标识
						checked: false, //复选框
						scrList: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg'

					},
					{
						titleBox: "悠度/户外便携折叠椅火车靠背凳子 沙滩椅钓鱼椅写生椅",
						price: 198,
						member: 158,
						number: 2,
						valueBox: "121", //标识
						checked: false, //复选框
						scrList: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg'

					}
				],

			}
		},
		methods: {
			checkboxClick(val, index) {
				// 点击复选框将数据将数据提交
				val.checked = !val.checked
				this.array[index] = val
			}
		}
	}
</script>

<style>
	.shoppingBox {
		width: 100vw;
		height: calc(100vh - 60px);
		background: #f9f7f7;
		padding-top: 10px;
		
	}
	.gao{
		width: 100vw;
		height: calc(100vh - 140px);
		overflow: hidden;
		overflow-y: auto;
	}
	.shoppingBoxList {
		width: calc(100vw - 30px);
		height: 74px;
		background: #fff;
		margin-bottom: 10px;
		padding: 13px 15px;
		display: flex;

	}

	.discover {
		margin: 20px 0;
		display: flex;
		color: #F0923C;
		font-size: 20px;
		align-items: center;
		justify-content: center;
	}
	.xian {
		width: 65px;
		background: #F0923C;
		height: 2px;
	}

	.part {
		padding: 0 15px;
	}
	.floor {
		width: calc(100vw - 30px);
		height: 80px;
		padding: 0 15px;
		display: flex;
		align-items:center;
		justify-content:space-between;
	}
	.shoppingBtn{
		width: 100px;
		height: 36px;
		text-align: center;
		line-height: 36px;
		color:#fff;
		background: #FF3B30;
		border-radius: 18px;
		margin-left: 20px;
	}
</style>
