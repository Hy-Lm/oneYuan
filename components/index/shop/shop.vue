<template>
	<view class="shop">
		<view class="box">
			<!-- 店铺详情 -->
			<view class="img">
				<image :src="item.img" mode=""></image>
			</view>
			<view class="details">
				<view class="api">
					<text>{{item.name}}</text>
					<image src="../../../static/导航.png" mode=""></image>
				</view>
				<view class="time">
					<text>营业时间：{{item.time}}</text>
					<text>导航</text>
				</view>
				<view class="time">
					<text>{{item.address}}</text>
					<text>{{item.space}}km</text>
				</view>
				<hr>
				<view class="phone" @click="tel">
					<text>联系电话：{{item.tel}}</text>
					<image src="../../../static/组443.png" mode=""></image>
				</view>
			</view>
			
		</view>
		<!-- 导航 -->
		<tab class="tabs" :item_box_items="item_box_items"></tab>
		<!-- 评论 -->
		<!-- <comment></comment> -->
		<!-- 电话 -->
		<tel :num="num" @changeTel="changeTel($event)" :mask="mask"></tel>
	</view>
</template>

<script>
	import tab from '@/components/index/shop/tab/tab.vue'
	import comment from '@/components/index/shop/comment/comment.vue'
	export default {
		data() {
			return {
				url:'http://192.168.7.152:8083/shopservice/carwash/',
				item:'',
				mask:false,
				num:'15735629946',
				item_box_items:[
					{
						name:'洗车',
						item_box_item:[
							{
								img1:require('../../../static/4a24fe8ff305fc17c7e0eee2950db1f.png'),
								img2:require('../../../static/images/arrows@3x.png'),
								title:'限时优惠 靓丽洗车',
								newPrice:9.9,
								oldPrice:38
							},
							{
								img1:require('../../../static/4a24fe8ff305fc17c7e0eee2950db1f.png'),
								img2:require('../../../static/images/arrows@3x.png'),
								title:'限时优惠 靓丽洗车',
								newPrice:9.9,
								oldPrice:38
							},
							{
								img1:require('../../../static/4a24fe8ff305fc17c7e0eee2950db1f.png'),
								img2:require('../../../static/images/arrows@3x.png'),
								title:'限时优惠 靓丽洗车',
								newPrice:9.9,
								oldPrice:38
							},
							{
								img1:require('../../../static/4a24fe8ff305fc17c7e0eee2950db1f.png'),
								img2:require('../../../static/images/arrows@3x.png'),
								title:'限时优惠 靓丽洗车',
								newPrice:9.9,
								oldPrice:38
							},
							{
								img1:require('../../../static/4a24fe8ff305fc17c7e0eee2950db1f.png'),
								img2:require('../../../static/images/arrows@3x.png'),
								title:'限时优惠 靓丽洗车',
								newPrice:9.9,
								oldPrice:38
							}
						]
					},
					{
						name:'轮胎',
						item_box_item:[
							{
								img1:require('../../../static/4a24fe8ff305fc17c7e0eee2950db1f.png'),
								img2:require('../../../static/images/arrows@3x.png'),
								title:'限时优惠 靓丽洗车',
								newPrice:9.9,
								oldPrice:38
							},
							{
								img1:require('../../../static/4a24fe8ff305fc17c7e0eee2950db1f.png'),
								img2:require('../../../static/images/arrows@3x.png'),
								title:'限时优惠 靓丽洗车',
								newPrice:9.9,
								oldPrice:38
							}
						]
					},
					{
						name:'保养',
						item_box_item:[
							{
								img1:require('../../../static/4a24fe8ff305fc17c7e0eee2950db1f.png'),
								img2:require('../../../static/images/arrows@3x.png'),
								title:'限时优惠 靓丽洗车',
								newPrice:9.9,
								oldPrice:38
							},
							{
								img1:require('../../../static/4a24fe8ff305fc17c7e0eee2950db1f.png'),
								img2:require('../../../static/images/arrows@3x.png'),
								title:'限时优惠 靓丽洗车',
								newPrice:9.9,
								oldPrice:38
							}
						]
					},
					{
						name:'维修',
						item_box_item:[
							{
								img1:require('../../../static/4a24fe8ff305fc17c7e0eee2950db1f.png'),
								img2:require('../../../static/images/arrows@3x.png'),
								title:'限时优惠 靓丽洗车',
								newPrice:9.9,
								oldPrice:38
							},
							{
								img1:require('../../../static/4a24fe8ff305fc17c7e0eee2950db1f.png'),
								img2:require('../../../static/images/arrows@3x.png'),
								title:'限时优惠 靓丽洗车',
								newPrice:9.9,
								oldPrice:38
							}
						]
					},
					{
						name:'钣金喷漆',
						item_box_item:[
							{
								img1:require('../../../static/4a24fe8ff305fc17c7e0eee2950db1f.png'),
								img2:require('../../../static/images/arrows@3x.png'),
								title:'限时优惠 靓丽洗车',
								newPrice:9.9,
								oldPrice:38
							},
							{
								img1:require('../../../static/4a24fe8ff305fc17c7e0eee2950db1f.png'),
								img2:require('../../../static/images/arrows@3x.png'),
								title:'限时优惠 靓丽洗车',
								newPrice:9.9,
								oldPrice:38
							}
						]
					}
				]
			}
		},
		mounted() {
			this.info()
		},
		methods: {
			// 初始页面
			info(){
				uni.request({
					url: this.url+'findAll', //仅为示例，并非真实接口地址。
					method: "POST",
					data: {
						sid:this.item.shopid
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					success: (res) => {
						console.log(res.data);
						// this.text = 'request success';
					}
				})
			},
			tel(){
				this.mask=true
			},
			// 子组件tel的传值
			changeTel(e){
				// console.log(e)
				this.mask=e
			}
		},
		onLoad(options) {
			// 接收享服务传递的值
			this.item = options.item.replace(/""/g, "");
			this.item=JSON.parse(this.item)
			console.log( this.item)
			 // this.item=JSON.parse(this.item)
		},
		components:{
			tab,
			comment
		}
	}
</script>

<style lang="scss">
	// page{
	// 	padding-bottom: 15px;
	// }
.box{
	padding:0 15px;
	
}
.shop{
	height: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
}
.img{
	// background: #f9f7f7;
	// padding: 0 15px;
	// box-sizing: border-box;
	width: 100%;
	height: 170px;
	image{
		width: 100%;
		height: 100%;
		border-radius:10px 10px 0 0;
	}
}
.tabs{
	flex: 1;
}
.details{
	padding-top:14px;
	.api{
		width: 100%;
		height: 25px;
		opacity: 1;
		font-size: 18px;
		font-family: PingFang SC, PingFang SC-Bold;
		font-weight: 700;
		text-align: left;
		color: #333333;
		margin-bottom: 6px;
		text{
			height: 30px;
			line-height: 30px;
			display: inline-block;
		}
		image{
			float: right;
			bottom: -10px;
			width: 20px;
			height: 20px;
		}
	}
	.time{
		height: 17px;
		font-size: 12px;
		color: #333333;
		text:nth-child(2){
			float: right;
		}
	}
	.phone{
		padding-top: 15px;
		height: 17px;
		font-size: 12px;
		color: #333333;
		image{
			float: right;
			width: 11px;
			height: 14px;
		}
	}
	hr{
		margin-top: 15px;
		height: 1px;
		border: none;
		background-color: rgba(153, 153, 153, .3);
		// opacity: 0.5;
	}
}
</style>
