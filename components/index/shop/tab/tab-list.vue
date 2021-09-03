<template>
	<!-- 切换 -->
	<swiper class="home-swiper" @change="change" :current="activeIndex_click">
		<swiper-item class="swiper-item" v-for="(item1,index) in item_box_items">
			<view class="item_box" @click="service(item)" v-for="(item,index) in item1.item_box_item" :key="index">
				<image class="img1" :src="item.img1" mode=""></image>
				<view class="con">
					<view>{{item.title}}</view>
					<view>
						<text>￥{{item.newPrice}}</text>
						<text class="old">￥{{item.oldPrice}}</text>
					</view>
				</view>
				<image class="img2" :src="item.img2" mode=""></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			// 接收tab.vue传递过来的值点击选项卡的索引
			activeIndex_click:{
				type:Number,
				default:0
			},
			item_box_items:{
				type:Array,
				default:[]
			}
		},
		methods: {
			change(e){
				const {current}=e.detail
				// console.log(current)
				this.$emit("change",current)  // 传递给tab.vue
				//this.getList(this.tab[current].name)
				// // 防止不必要的请求
				// if(!this.listCatchData[current] || this.listCatchData[current].length==0){
				// 	this.getList(current)  
				// }
			},
			service(item){
				console.log(item)
				// if(this.isSearch) return
				// 	uni.navigateTo({
				// 		url:"/components/index/shop/service/service"
				// 	})
			}
		}
	}
</script>

<style lang="scss">
	.home-swiper{
		flex: 1;  // 撑开
		height: 100%;
		//border: 1px solid red;
		.swiper-item{
			height: 100%;
			overflow:auto;
			padding-right:15px;
			box-sizing: border-box;
			// overflow: hidden;
		}
	}
	.old{
		opacity: 1;
		font-size: 10px;
		color: #666666;
		text-decoration: line-through;
	}
	// .item {
		
	
		.item_box {
			overflow: hidden;
			padding: 10px 0;
			border-bottom:1px solid rgba(153, 153, 153, .3);
			&:last-child{
				border-bottom: none;
			}
			.img1 {
				float: left;
				width: 57px;
				height: 57px;
				border-radius: 3px;
			}
	
			.img2 {
				float: right;
				width: 7px;
				height: 14px;
				margin-top: calc(57px / 2 - 7px);
			}
	
			.con {
				float: left;
				margin-left: 18px;
	
				view {
					height: 20px;
					font-size: 16px;
					color: #333333;
	
					text:nth-child(1) {
						color: #cd2727;
						font-weight: bold;
					}
				}
	
				view:nth-child(1) {
					margin-bottom: 20px;
				}
			}
		}
	// }
</style>
