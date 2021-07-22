<template>
	<view class="rescue">
		<!-- 道路 -->
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 100vh;" :latitude="latitude" :longitude="longitude">
				</map>
			</view>
		</view>
		<rescueTime v-if="!yu_yue"></rescueTime>
		<!-- 定位 -->
		<view class="rescue-con" v-if="yu_yue">
			<view class="rescue-nav">
				<view @click="rescueNav(index)" :style="[index===ind?styleobj1:styleobj2]" v-for="(item,index) in rescue_nav" :key='index'>{{item}}</view>
			</view>
			<view v-if="yuMask" class="rescue-yu" @click="yuyue">选择预约时间></view>
			<view class="rescue-nav-n">
				<view @click="rescueNavCon(index)" v-for="(item,index) in rescue_nav_con" :key='index' :style="[index===inds?style1:style2]">{{item.name}}</view>
			</view>
			<view class="rescue-nav-con">{{rescue_nav_con[inds].info}}</view>
			<view class="diwei">
				<view><text></text> 从哪里拖车？</view>
				<view><text></text>拖到哪里去？</view>
			</view>
		</view>
	</view>
</template>

<script>
	import rescueTime from '../../components/rescue-time/rescue-time.vue'
	export default {
		data() {
			return {
				latitude: 39.909,
				longitude: 116.39742,
				rescue_nav:['现在','预约'],
				ind:0,//导航的下标
				// 切换状态
				styleobj1:{
					'color':'#f8981d',
					'border-bottom':'3px solid #f8981d'
				},
				styleobj2:{
					'color':'#707070',
					'border-bottom':'none'
				},
				rescue_nav_con:[
					{
						name:'拖车',
						info:'30km以内199元/次 超出8元/km'
					},
					{
						name:'维修',
						info:'30km以内299元/次 超出9元/km'
					},
					{
						name:'轮胎',
						info:'30km以内399元/次 超出10元/km'
					}
				],
				inds:0,//导航的下标
				// 切换状态
				style1:{
					'color':'#ffffff',
					'background':'#f8981d',
					'border':'none'
				},
				style2:{
					'color':'#707070',
					'background':'#ffffff'
				},
				// 立即预约隐藏
				yuMask:false,
				yu_yue:true
			}
		},
		methods: {
			rescueNav(index){
				// 点击切换导航
				this.ind=index
				if(this.rescue_nav[this.ind]=='预约'){
					this.yuMask=true
				}else{
					this.yuMask=false
				}
			},
			rescueNavCon(index){
				//切换
				this.inds=index
			},
			yuyue(){
			// 预约时间
				this.yu_yue=false
			}
		},
		components:{
			rescueTime
		}
	}
</script>

<style lang="scss">
	
	.rescue {
		position: relative;
		width: 100%;
		.rescue-con {
			position: fixed;
			bottom: 5%;
			left: 50%;
			transform: translate(-50%);
			width: 90%;
			height: 239px;
			opacity: 1;
			background: #ffffff;
			border-radius: 6px;
			padding:12px 13px;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.rescue-yu{
				height: 17px;
				opacity: 1;
				font-size: 12px;
				font-family: PingFang SC, PingFang SC-Medium;
				font-weight: 500;
				text-align: center;
				color: #2c2c2c;
			}
			
			.diwei{
				&>view:nth-child(2){
					&>text{
						background: #ff3b30;
					}
				}
				&>view{
					&>text{
						display: inline-block;
						width: 10px;
						height: 10px;
						opacity: 1;
						background: #007aff;
						border-radius: 50%;
						margin-right: 13px;
					}
					padding: 0 18px;
					border-top:1px solid rgba(112,112,112,.1);
					height: 34px;
					line-height: 34px;
					font-size: 12px;
					text-align: left;
					color: #707070;
					letter-spacing: 0px;
				}
			}
			.rescue-nav-con{
				height: 17px;
				opacity: 1;
				font-size: 12px;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				text-align: center;
				color: #ff3b30;
				letter-spacing: 0px;
			}
			.rescue-nav{
				padding: 0 18px;
				display: flex;
				justify-content: space-around;
				&>view{
					padding-bottom: 5px;
					height: 22px;
					opacity: 1;
					font-size: 16px;
					font-weight: 400;
					// color: #e86553;
				}
			}
			.rescue-nav-n{
				padding: 0 18px;
				display: flex;
				justify-content: space-between;
				&>view{
					width: 72px;
					height: 33px;
					line-height: 33px;
					opacity: 1;
					background: #ffffff;
					border: 1px solid #707070;
					border-radius: 4px;
					font-size: 16px;
					text-align: center;
					color: #515151;
				}
			}
		}
	}
</style>
