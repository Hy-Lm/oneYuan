<template>
	<view class="Subsidiary">
		<!-- 积分明细 -->
		<view class='Subsidiary_Nav'>
			<view @click="SubsidiaryNav(0)" :style="{'color': (colorIndex ==0?'#f00':'#000')}">全部</view>
			<view @click="SubsidiaryNav(1)" :style="{'color': (colorIndex ==1?'#f00':'#000')}">收入</view>
			<view @click="SubsidiaryNav(2)" :style="{'color': (colorIndex ==2?'#f00':'#000')}">支出</view>
		</view>
		<!-- 占位标签 -->
		<view style="width: 100%; height: 16px; background-color: #f1f1f1;"></view>
		<view class="SubsidiaryItem">
			<view class="SubsidiaryBox" v-if="SubsidiaryItems.length>0" v-for="item in SubsidiaryItems">
				<view>
					<view>{{item.headline}}</view>
					<view style="font-size: 12px;">{{item.time}}</view>
				</view>
				<view style="font-size: 18px; color:#f00;">
					<text v-if="item.detailPage>0">+</text>{{item.detailPage}}
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
						headline:"签到",
						time:"2021-05-28",
						detailPage:+5
					},
					{
						headline:"签到",
						time:"2021-05-29",
						detailPage:+5
					},
					{
						headline:"签到",
						time:"2021-05-30",
						detailPage:+5
					},
					{
						headline:"兑换礼品",
						time:"2021-05-20",
						detailPage:-20
					},
					{
						headline:"签到",
						time:"2021-05-28",
						detailPage:+5
					},
					{
						headline:"签到",
						time:"2021-05-29",
						detailPage:+5
					},
					{
						headline:"签到",
						time:"2021-05-30",
						detailPage:+5
					},
					{
						headline:"兑换礼品",
						time:"2021-05-20",
						detailPage:-20
					},
					{
						headline:"签到",
						time:"2021-05-28",
						detailPage:+5
					},
					{
						headline:"签到",
						time:"2021-05-29",
						detailPage:+5
					},
					{
						headline:"签到",
						time:"2021-05-30",
						detailPage:+5
					},
					{
						headline:"兑换礼品",
						time:"2021-05-20",
						detailPage:-20
					}
				],
				SubsidiaryItems:[]
			}
		},
		methods: {
			SubsidiaryNav(val){
				// 当val 等于0 是是全部，等于1时是收入，等于2时是支出
				this.colorIndex=val
				console.log(this.colorIndex)
				if(val==0){
					this.SubsidiaryItems=this.dataItem
				}
				if(val==1){
					let data=[]
					this.dataItem.forEach(item=>{
						console.log(item)
						if(item.detailPage>0){
							data.push(item)
						}
					})
					console.log(data)
					this.SubsidiaryItems=data
				}
				if(val==2){
					let data=[]
					this.dataItem.forEach(item=>{
						console.log(item)
						if(item.detailPage<0){
							data.push(item)
						}
					})
					console.log(data)
					this.SubsidiaryItems=data
				}
				
			}
		},
		mounted() {
			this.SubsidiaryNav(0)
		}
	}
</script>

<style lang="scss">
	.Subsidiary{
		width: 100%;
		height: calc(100vh - 50px);
		border-top: 1px solid rgba(112,112,112,1);
		.Subsidiary_Nav{
			width: calc(100% - 60px);
			height: 40px;
			padding: 0 30px;
			display: flex;
			justify-content:space-between;
			align-items:center;
			font-size: 14px;
		}
		.SubsidiaryItem{
			width: calc(100% - 32px);
			height: calc(100% - 88px);
			padding: 16px;
			overflow: hidden;
			overflow-y: scroll;
			.SubsidiaryBox{
				padding: 0 18px 5px;
				width: calc(100% - 36px);
				height: 40px;
				border-bottom: 1px solid rgba(112,112,112,1);
				display: flex;
				justify-content:space-between;
				align-items:center;
				margin-bottom: 20px;
				font-size: 14px;
			}
		}
	}
</style>
