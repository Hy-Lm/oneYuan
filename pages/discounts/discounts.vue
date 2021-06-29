<template>
	<view class="discounts">
		<!-- 我的优惠卷 -->
		<view class="discounts-top" >
			<view class="discounts-top_li" :style="{'border-bottom': (index ==idex?'1px solid #000000':'none')}" @click="discountsTop(index)" v-for="(item,index) in discounts_top" :key="index">
				{{item}}
			</view>
		</view>
		<view class="discounts-bottom">
			<view class="discounts-bottom_item" v-for="(item,index) in discounts_bottoms" :key="index">
				<view class="discounts-bottom_img">
					<view>{{item.mony}}</view>
					<view>{{item.mony_info}}</view>
				</view>
				<view class="discounts-bottom_info">
					<view class="d-b-i-l">
						<view>下单反福利券</view>
						<view class="time">
							<view>{{item.start_time}}</view>-
							<view>{{item.end_time}}</view>
						</view>
						<view>益园养车 指定平台 指定渠道</view>
					</view>
					<view :class="item.active?'d-b-i-r':'d-b-i-r-active'">
						<view >{{item.active?"去使用":"已过期"}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				idex:0,
				discounts_top:['优惠券','已过期'],
				discounts_bottom:[
					{
					mony:'30',
					mony_info:'满299元可用',
					start_time:'2021.02.14',
					end_time:'2021.05.14',
					active:true
					},
					{
					mony:'40',
					mony_info:'满399元可用',
					start_time:'2021.02.14',
					end_time:'2021.05.14',
					active:false
					},
					{
					mony:'50',
					mony_info:'满499元可用',
					start_time:'2021.02.14',
					end_time:'2021.05.14',
					active:false
					},
					{
					mony:'60',
					mony_info:'满599元可用',
					start_time:'2021.02.14',
					end_time:'2021.05.14',
					active:true
					},
					{
					mony:'70',
					mony_info:'满699元可用',
					start_time:'2021.02.14',
					end_time:'2021.05.14',
					active:false
					}
				],
				discounts_bottoms:[]
			}
		},
		mounted() {
			this.discounts()
		},
		methods: {
			discountsTop(index){
				this.idex=index
				// 点击切换
				if(index==0){
					this.discounts_bottoms=this.discounts_bottom.filter((item,index)=>{
						return item.active==true
					})	
				}else{
					this.discounts_bottoms=this.discounts_bottom.filter((item,index)=>{
						return item.active==false
					})	
				}
				
			},
			// 可以使用的状态
			discounts(){
				this.discounts_bottoms=this.discounts_bottom.filter((item,index)=>{
					return item.active==true
				})
				
			}
		}
	}
</script>

<style lang="scss">
	.discounts-bottom{
		height: 86px;
	}
	.discounts-bottom_item{
		height: 86px;
		margin-top: 12px;
		display: flex;
		.discounts-bottom_info{
			flex: 1;
			display: flex;
			padding: 15px 13px;
			box-sizing: border-box;
			align-items: center;
			justify-content: space-between;
			.d-b-i-l{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				&>view{
					opacity: 1;
					font-size: 10px;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #515151;
				}
				&>view:nth-child(1){
					font-size: 14px;
					color: #f0923c;
				}
				&>view:nth-child(2){
					margin-top: 3px;
					margin-bottom: 7px;
				}
				.time{
					display: flex;
				}
			}
			.d-b-i-r-active{
				background: #ccc;
				width: 66px;
				height: 21px;
				line-height: 21px;
				opacity: 1;
				border-radius: 11px;
				text-align: center;
				&>view{
					font-size: 14px;
					font-family: PingFang SC, PingFang SC-Medium;
					font-weight: 500;
					color:#000000;
				}
			}
			.d-b-i-r{
				width: 66px;
				height: 21px;
				line-height: 21px;
				opacity: 1;
				background: #f0923c;
				border-radius: 11px;
				text-align: center;
				&>view{
					font-size: 14px;
					font-family: PingFang SC, PingFang SC-Medium;
					font-weight: 500;
					color: #ffffff;
				}
			}
		}
		.discounts-bottom_img{
			width: 86px;
			height: 86px;
			opacity: 1;
			background: #f0923c;
			display: flex;
			flex-direction: column;
			align-items: center;
			&>view:nth-child(1){
				position: relative;
				opacity: 1;
				font-size: 30px;
				color: #ffffff;
				margin-top: 14px;
				margin-bottom: 5px;
			}
			&>view:nth-child(1)::before{
				position: absolute;
				top: 6px;
				left: -10px;
				content: "￥";
				width: 10px;
				height: 14px;
				opacity: 1;
				font-size: 10px;
				color: #ffffff;
			}
			&>view:nth-child(2){
				opacity: 1;
				font-size: 12px;
				color: #ffffff;
			}
		}
	}
	.discounts{
		padding: 15px;
		padding-top: 22px;
		padding-bottom: 0;
		box-sizing: border-box;
	}
.discounts-top{
		width: 100%;
		display: flex;
		height: 25px;
		border-bottom: 1px solid #DBDBDB;
		justify-content: space-around;
		.discounts-top_li{
			width: 42px;
			opacity: 1;
			font-size: 14px;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			color: #000000;
		}
	}
page{
		flex: 1;
		opacity: 1;
		background: #f9f7f7;
		// position: relative;
	}
</style>
