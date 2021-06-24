<template>
	<view class="myMake">
		<!-- 我的预约 -->
		<view class="myMakeNav">
			<view @click="SubsidiaryNav(0)" :style="{'color': (colorIndex ==0?'#f00':'#000'), 'border-bottom': (colorIndex ==0?'1px solid #f00':'none')}">预约记录</view>
			<view @click="SubsidiaryNav(1)" :style="{'color': (colorIndex ==1?'#f00':'#000'), 'border-bottom': (colorIndex ==1?'1px solid #f00':'none')}">已预约</view>
			<view @click="SubsidiaryNav(2)" :style="{'color': (colorIndex ==2?'#f00':'#000'), 'border-bottom': (colorIndex ==2?'1px solid #f00':'none')}">进行中</view>
			<view @click="SubsidiaryNav(3)" :style="{'color': (colorIndex ==3?'#f00':'#000'), 'border-bottom': (colorIndex ==3?'1px solid #f00':'none')}">已完成</view>
		</view>
		<view class="myMakList">
			<view class="Make" v-for="item in MakeItem">
				<view class="MakeBox">
					<view style="font-size: 18px;">
						{{item.trade}}
					</view>
					<view style="margin: 5px 0; color:#515151">
						<view>
							预约服务：
						</view>
						<view class="business" v-for="(items,indexs) in item.service"> 
							<view :style="{'background': (indexs ==0?'#396A3A':'#F0923C')}">{{items}}</view>
						</view>
					</view>
					<view style="color:#515151">
						<view>
							预约时间：
						</view>
						<view>
							{{item.time}}
						</view>
					</view>
				</view>
				<view class="garden">
					<view v-if="item.status=='进行中'" style="color:#FF3B30">
						{{item.status}}
					</view>
					<view v-if="item.status=='已预约'" style="color:#396A3A">
						{{item.status}}
					</view>
					<view v-if="item.status=='已完成'" style="color:#F0923C">
						{{item.status}}
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
				colorIndex:0,
				dataItem:[
					{
						trade:'益园养车北辰区店',
						service:['普通洗车','内饰清洗'],
						time:'2021年5月25日下午3点',
						status:'进行中'
					},
					{
						trade:'益园养车北辰区店',
						service:['普通洗车','内饰清洗'],
						time:'2021年5月25日下午3点',
						status:'已预约'
					},
					{
						trade:'益园养车北辰区店',
						service:['普通洗车','内饰清洗'],
						time:'2021年5月25日下午3点',
						status:'已完成'
					}
				],
				MakeItem:[]
			}
		},
		methods: {
			SubsidiaryNav(val){
				// 当val 等于0 是是全部，等于1时是收入，等于2时是支出
				this.colorIndex=val
				console.log(this.colorIndex)
				if(val==0){
					this.MakeItem=this.dataItem
				}
				if(val==1){
					let data=[]
					this.dataItem.forEach(item=>{
						console.log(item)
						if(item.status=='已预约'){
							data.push(item)
						}
					})
					console.log(data)
					this.MakeItem=data
				}
				if(val==2){
					let data=[]
					this.dataItem.forEach(item=>{
						console.log(item)
						if(item.status=='进行中'){
							data.push(item)
						}
					})
					console.log(data)
					this.MakeItem=data
				}
				if(val==3){
					let data=[]
					this.dataItem.forEach(item=>{
						console.log(item)
						if(item.status=='已完成'){
							data.push(item)
						}
					})
					console.log(data)
					this.MakeItem=data
				}
				
			}
		},
		mounted() {
			this.SubsidiaryNav(0)
		}
	}
</script>

<style lang="scss">
	.myMake{
		width: 100vw;
		height: calc(100vh - 45px);
		/* */
		
		background:  #f9f7f7;
		.myMakeNav{
			width: calc(100% - 60px);
			height: 50px;
			padding: 0 30px;
			display: flex;
			justify-content:space-between;
			align-items:center;
			view{
				padding-bottom: 5px;
			}
		}
		.myMakList{
			width: calc(100% - 30px);
			padding: 0 15px;
			height: calc(100% - 50px);
			overflow: hidden;
			overflow-y: scroll;
			.Make{
				width: calc(100% - 30px);
				height: 70px;
				padding: 10px 15px;
				border-radius: 10px;
				margin: 15px 0 ;
				background: #f1f1f1;;
				display: flex;
				justify-content:space-between;
				.MakeBox{
					view{
						font-size: 14px;
						display: flex;
						align-items:center;
						.business{
							view{
								padding:2px 10px;
								margin-right: 10px;
								border-radius: 8px;
								color:#fff;
								// border: 1px solid #f00;
							}
						}
					}
				}
				.garden{
					width: 60px;
					height: 60px;
					border-radius: 50%;
					background: #fff;
					font-size: 14px;
					text-align: center;
					line-height: 60px;
					view{
						transform:rotate(-30deg);
					}
				}
			}
		}
	}
</style>
