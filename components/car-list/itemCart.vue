<template>
	 <view>
		<scroll-view scroll-y  style="height: 100%; overflow: auto;" class="scroll_list">
			<view class="item" >
				<view>
					{{list.title1}}
				</view>
				<view>
					<view class="xiCar" v-for="(item,index) in list.title1_item" :key="index">
						<view>
							<image :src="item.img" mode=""></image>
						</view>
						<view>{{item.name}}</view>
					</view>
				</view>
			</view> 
		</scroll-view>
	</view>
</template>

<script>
	export default{
		props:{
			list:{
				type:Object,
				default:{}
			}
		},
		name:"item-cart",
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.scroll_list{
		height: 100%;
	// display: flex;
	// flex-direction: column;
	}
	.item {
		display: flex;
		flex-direction: column;
	
		&>view:nth-child(1) {
			height: 35px;
			font-size: 12px;
			font-weight: 400;
			color: #000000;
			line-height: 35px;
		}
	
		&>view:nth-child(2) {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
	
			&>view {
				width: 57px;
				display: flex;
				flex-direction: column;
				margin-bottom: 12px;
	
				&>view:nth-child(1) {
					width: 57px;
					height: 57px;
	
					image {
						width: 100%;
						height: 100%;
					}
				}
	
				&>view:nth-child(2) {
					height: 17px;
					text-align: center;
					font-size: 12px;
					font-weight: 400;
					color: #000000;
					line-height: 19px;
				}
			}
	
	
	
		}
	}
</style>

