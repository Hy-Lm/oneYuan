<template>
	<view>
		<view class="page-body">
			<view class="Maynav">
				<view class="MaynavBox" @click="xialai">{{MaynavBoxText}}
					<view class="xialai">
						<image src="../../static/xialai.png"></image>
					</view>
				</view>
				<view class="MaynavBox">离我最近</view>
				<view class="MaynavBox">折扣最低</view>
			</view>
			<view class="SpinnerBox" v-if="SpinnerShow">
				<view class="SpinnerBoxText" v-for="(item,index) in MaynavBoxItem" :key="index"
					@click="SpinnerBoxTextClick(item)">{{item}}</view>
			</view>
			<view class="mapDetails" v-if="DetailsItemShow">
				<view class="mapDetailsTop">
					<view class="mapDetailsTopImg">
						<image :src="DetailsItem.StorePhotos" mode="scaleToFill"></image>
					</view>
					<view class="mapDetailsTopText">
						<view>{{DetailsItem.trade}}</view>
						<view>营业时间: {{DetailsItem.time}}</view>
						<view class="box">
							<view style="margin-left: -18px;">{{DetailsItem.location}}</view>
							<view>{{DetailsItem.distance}}</view>
						</view>
					</view>
				</view>
				<view class="mapDetailsBtn" @click="mapDetailsBtns">
					<view style="width: 18px; height: 18px; margin-right: 4px;">
						<image src="../../static/导航.png"></image>
					</view>
					<view>
						去这里
					</view>
				</view>
			</view>
			<view class="page-section page-section-gap" v-if="latitude!=0">
				<map style="width: 100%; height: 100vh;" @markertap="markertap"
					@callouttap="markertap" @regionchange="regionchange" :latitude="latitude" :longitude="longitude"
					:markers="covers" enable-zoom show-location enable-traffic>
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
				// 初始化时，DetailsItem没有数据，在点击地图上气泡后显示
				DetailsDataItem: [{
					StorePhotos: "../../static/4a24fe8ff305fc17c7e0eee2950db1f.png",
					trade: "益园养车北辰区店",
					time: "08：00 -12：00",
					location: "天津市北辰区北辰公园南100米",
					distance: "1.5km",
					tuer:[{
						latitude: 39.22199, //标点纬度
						longitude: 117.13299, //标点经度
					}]
				}], //保存所有的数据
				DetailsItem: {
					StorePhotos: "../../static/4a24fe8ff305fc17c7e0eee2950db1f.png",
					trade: "益园养车北辰区店",
					time: "08：00 -12：00",
					location: "天津市北辰区北辰公园南100米",
					distance: "1.5km",
					tuer:[{
						latitude: 39.22199, //标点纬度
						longitude: 117.13299, //标点经度
					}]
				},
				DetailsItemShow: true,
				SpinnerShow: false,
				MaynavBoxText: "北城区A",
				MaynavBoxItem: [ //模拟天津区域
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
				latitude: 0, //标点纬度
				longitude: 0, //标点经度
				covers: [{
					id: 1, // 使用 marker点击事件 需要填写id
					latitude: 39.22199, //标点纬度
					longitude: 117.13299, //标点经度
					width: 20, //图标大小
					callout: { //地图上方显示气泡
						content: "益园养车新世纪店", //店面的名字
						color: "#000", //字体颜色
						fontSize: 16, //字体大小
						bgColor: "#fff", //背景色
						textAlign: "center", //文字是否居中
						padding: 10,
						display: "ALWAYS", //气泡是否长时间显示
						borderRadius: 20 //圆角
					},
					iconPath: '../../static/locations.png' //地图图标
				}]
			}
		},
		methods: {
			mapDetailsBtns(){
				console.log("规划路线")
				uni.getLocation({
				    type: 'wgs84',
				    success: function (res) {
				        console.log('当前位置的经度：' + res.longitude);
				        console.log('当前位置的纬度：' + res.latitude);
				    }
				});
				
			
			},
			markertap(e) {
				// 获取当前点击气泡的id 通过id 查找相对应的店铺
				console.log(e.detail)
				// 点击过后找到当前店铺，将店铺数据复值给DetailsItem
				this.DetailsItem = this.DetailsDataItem[0]
				console.log(this.DetailsItem)
				this.DetailsItemShow = true
			},
			regionchange(e) {
				// 移动地图
				console.log(e)

			},
			xialai() {
				// 下拉列表点击事件点击过后显示下拉列表
				this.SpinnerShow = true
			},
			SpinnerBoxTextClick(val) {
				//下拉列表点击事件，点击过后显示当前点击的区域名称，将当前显示的经纬度替换
				// 显示当前区域内的店铺covers内的内容
				// 并影藏掉下拉列表
				console.log(val)
				this.MaynavBoxText = val
				this.SpinnerShow = false
			}
		},
		beforeCreate() {

		},
		created() {
		
		},
		mounted() {
			console.log("初始化我的位置")
			let that = this
			uni.getLocation({
				type: 'gcj02',
				altitude: true,
				success: function(res) {
					console.log(res)
					that.latitude = res.latitude
					that.longitude = res.longitude
				
				}
			});



		}

	}
</script>

<style lang="scss">
	.Maynav {
		width: 100vw;
		height: 50px;
		background: #fff;
		position: fixed;
		top: 44px;
		left: 0;
		right: 0;
		z-index: 100;
		border: 2px solid #eee;
		border-right: none;
		border-left: none;
		display: flex;
		align-items: center;
	}

	.MaynavBox {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50%;
		height: 100%;
		/* border-left: 1px solid #eee; */
		text-align: center;
		font-size: 14px;
		color: #333333;
	}

	.MaynavBox:first-child {
		border: none;
		margin-left: -1px;
	}

	.xialai {
		width: 8px;
		height: 4px;
		margin-left: 10px;
	}

	image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.SpinnerBox {
		width: 50%;
		height: 300px;
		background: #fff;
		position: fixed;
		left: 0;
		top: 98px;
		z-index: 100;
		overflow: hidden;
		overflow-y: scroll;
	}

	.SpinnerBoxText {
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-bottom: 1px solid #eee;

	}

	.mapDetails {
		position: fixed;
		width: 300px;
		height: 126px;
		opacity: 1;
		background: #ffffff;
		border-radius: 15px;
		bottom: 36px;
		left: 50%;
		margin-left: -150px;
		z-index: 100;
	}

	.mapDetailsTop {
		width: calc(100% - 32px);
		height: 59px;
		margin: 11px auto 19px;
		display: flex;
	}

	.mapDetailsTopImg {
		width: 59px;
		height: 59px;
		margin-right: 14px;
	}

	.mapDetailsTopText {
		width: calc(100% - 62px);
		font-size: 12px;
		font-family: PingFang SC, PingFang SC-Regular;
		display: flex;
		flex-direction: column;
		&>view:nth-child(1){
			font-size: 14px;
			color: #333333;
		}
		&>view:nth-child(2){
			font-size: 12;
			color: #333333;
			margin-bottom: 10px;
		}
		&>view:nth-child(3){
			font-size: 10px;
			color: #666666;
		}
	}

	.box {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.box view {
		transform: scale(0.8, 0.8);
	}

	.mapDetailsBtn {
		width: calc(100% - 32px);
		height: 32px;
		opacity: 1;
		background: #f8981d;
		border-radius: 15px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16px;
		color: #FFFFFF;
	}
</style>
