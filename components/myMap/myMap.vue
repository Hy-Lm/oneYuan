<template>
	<view>
		<view class="page-body">
			<view class="Maynav">
				<view class="MaynavBox" @click="xialai">{{MaynavBoxText}} <view class="xialai"> <image src="../../static/xialai.png"></image></view></view>
				<view class="MaynavBox">离我最近</view>
			</view>
			<view class="SpinnerBox" v-if="SpinnerShow">
				<view class="SpinnerBoxText" v-for="(item,index) in MaynavBoxItem" :key="index" @click="SpinnerBoxTextClick(item)">{{item}}</view>
			</view>
			<view class="mapDetails">
				
			</view>
			<view class="page-section page-section-gap">
				<map  style="width: 100%; height: 100vh;" @markertap="markertap" @callouttap="markertap" @regionchange="regionchange" :latitude="latitude" :longitude="longitude" :markers="covers" enable-zoom show-location enable-traffic >
				</map>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "myMap",
		data() {
			return {
				DetailsItem:{
					StorePhotos:"../../static/4a24fe8ff305fc17c7e0eee2950db1f.png",
					trade:"益园养车北辰区店",
					time:"08：00 -12：00",
					location:"天津市北辰区北辰公园南100米"
				},
				SpinnerShow:false,
				MaynavBoxText:"北城区",
				MaynavBoxItem:[//模拟天津区域
					"北城区1",
					"北城区2",
					"北城区3",
					"北城区4",
					"北城区5",
					"北城区6",
					"北城区7",
					"北城区8",
					"北城区9",
					"北城区10"
				],
				title: 'map',
				latitude: 39.22131,//当前显示自己的纬度
				longitude: 117.13217,//当前自己的经度
				covers: [{
					id: 1, // 使用 marker点击事件 需要填写id
					latitude: 39.22131,//标点纬度
					longitude: 117.13217,//标点经度
					width:20,//图标大小
					callout:{//地图上方显示气泡
						content:"益园养车新世纪店",//店面的名字
						color:"#000",//字体颜色
						fontSize:16,//字体大小
						bgColor:"#fff",//背景色
						textAlign:"center",//文字是否居中
						padding:10,
						display:"ALWAYS",//气泡是否长时间显示
						borderRadius:20//圆角
					},
					iconPath: '../../static/locations.png'//地图图标
				}]
			}
		},
		methods: {
			markertap(e){
				// 获取当前点击气泡的id 通过id 查找相对应的店铺
				console.log(e.detail)
			},
			regionchange(e){
				// 移动地图
				console.log(e)
				
			},
			xialai(){
				// 下拉列表点击事件点击过后显示下拉列表
				this.SpinnerShow=true
			},
			SpinnerBoxTextClick(val){ 
			//下拉列表点击事件，点击过后显示当前点击的区域名称，将当前显示的经纬度替换
			// 显示当前区域内的店铺covers内的内容
			// 并影藏掉下拉列表
			console.log(val)
				this.MaynavBoxText=val
				this.SpinnerShow=false
			}
		}

	}
</script>

<style>
	.Maynav{
		width: 100vw;
		height: 50px;
		background: #fff;
		position: fixed;
		top:44px;
		left:0;
		right: 0;
		z-index:100;
		border: 2px solid #eee;
		border-right: none;
		border-left: none;
		display: flex;
		align-items:center;
	}
	.MaynavBox{
		display: flex;
		align-items:center;
		justify-content:center;
		width: 50%;
		height: 100%;
		border-left: 1px solid #eee;
		text-align: center;
	}
	.MaynavBox:first-child{
		border: none;
		margin-left: -1px;
	}
	.xialai{
		width: 8px;
		height: 4px;
		margin-left: 10px;
	}
	image{
		width: 100%;
		height: 100%;
		display: block;
	}
	.SpinnerBox{
		width: 50%;
		height: 300px;
		background: #fff;
		position: fixed;
		left:0;
		top:98px;
		z-index:100;
		overflow: hidden;
		overflow-y:scroll;
	}
	.SpinnerBoxText{
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align:center;
		border-bottom: 1px solid #eee;
		
	}
	.mapDetails{
		position: fixed;
		width: 300px;
		height: 114px;
		background: #fff;
		bottom: 36px;
		left:50%;
		margin-left: -150px;
		z-index:100;
		border-radius:15px;
	}
</style>
