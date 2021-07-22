<template>
	<view class="Subsidiary">
		<!-- 积分明细 -->
		<view class='Subsidiary_Nav'>
			<view v-for="(item,index) in Subsidiary_Nav" :key='index' @click="SubsidiaryNav(index)" :style="{'color': (index ==ind?'#f8981d':'#333333')}">{{item}}</view>
		</view>
		<!-- 占位标签 -->
		<view style="width: 100%; height: 16px; background-color: #f9f7f7;"></view>
		<view class="SubsidiaryItem">
			<view class="SubsidiaryBox" v-if="SubsidiaryItems.length>0" v-for="item in SubsidiaryItems">
				<view>
					<view>{{item.headline}}</view>
					<view style="font-size: 12px; color: #666666;">{{item.time}}</view>
				</view>
				<view style="font-size: 18px; color:#f8981d;">
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
				Subsidiary_Nav:['全部','收入','支出'],
				ind:0,
				dataItem:[
					{
						active:true,
						headline:"签到",
						time:"2021-05-28",
						detailPage:+5
					},
					{
						active:true,
						headline:"签到",
						time:"2021-05-29",
						detailPage:+5
					},
					{
						active:true,
						headline:"签到",
						time:"2021-05-30",
						detailPage:+5
					},
					{
						active:false,
						headline:"兑换礼品",
						time:"2021-05-20",
						detailPage:-20
					},
					{
						active:true,
						headline:"签到",
						time:"2021-05-28",
						detailPage:+5
					},
					{
						active:true,
						headline:"签到",
						time:"2021-05-29",
						detailPage:+5
					},
					{
						active:true,
						headline:"签到",
						time:"2021-05-30",
						detailPage:+5
					},
					{
						active:false,
						headline:"兑换礼品",
						time:"2021-05-20",
						detailPage:-20
					},
					{
						active:true,
						headline:"签到",
						time:"2021-05-28",
						detailPage:+5
					},
					{
						active:true,
						headline:"签到",
						time:"2021-05-29",
						detailPage:+5
					},
					{
						active:true,
						headline:"签到",
						time:"2021-05-30",
						detailPage:+5
					},
					{
						active:false,
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
				this.ind=val;
				if(val==1){
					// 说明是收入
					// console.log('1')
					this.SubsidiaryItems=this.dataItem.filter((item,index)=>{
						return item.active==true
					})
				}else if(val==2){
					this.SubsidiaryItems=this.dataItem.filter((item,index)=>{
						return item.active!=true
					})
				}else{
					this.SubsidiaryItems=this.dataItem
				}
			}
		},
		mounted() {
			this.SubsidiaryItems=this.dataItem
			// this.SubsidiaryNav(0)
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
				border-bottom: 1px solid rgba(153, 153, 153, .3) ;
				display: flex;
				justify-content:space-between;
				align-items:center;
				margin-bottom: 20px;
				font-size: 14px;
			}
		}
	}
</style>
