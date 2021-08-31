<template>
	<view class="myLikecar">
		<view class="car_itemsss">
			<view class="car_items" v-for="(item,index) in car_items" :key="item.id">
				<view>
					<view>
						<view>{{item.idcar}}</view>
						<view>猜测还行</view>
						<view>行驶里程：{{item.km}}km</view>
					</view>
					<view>
						<!-- <image :src="item.img" mode="aspectFit"></image> -->
						<image :src="item.img" mode="aspectFit"></image>
					</view>
				</view>
				<view>
					<view>
						<radio @click="r(item)" value="r1" :checked="item.active!=0" color="#f8981d"
							style="transform: scale(0.8);" />
						<text :style="{'color': (item.active!=0?'#f8981d':'#707070')}">已设为默认车</text>
					</view>
					<view>
						<!-- <view>
							<image src="../../../static/2.jpg"></image>
							<text>编辑</text>
						</view> -->
						<view @click="delMycar(item.id,item.img)">
							<image src="../../../static/2.jpg"></image>
							<text>删除</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="car_btn">
			<view class="footer" @click="MyLiker">
					添加爱车
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:'http://192.168.7.152:8081/educar/car/',
				imgUrl: 'http://192.168.7.152:8081/yiyuan_parent/service/service_car/src/main/resources/',
				car_items: []
			}
		},
		mounted() {
			this.info()
		},
		methods: {
			info() {
				//页面渲染
				uni.request({
					url: this.url+'findAll', //仅为示例，并非真实接口地址。
					
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: (res) => {
						// console.log(res.data);
						this.car_items = res.data
						// this.text = 'request success';
					}
				})
			},
			r(item) {
				uni.request({
					url: 'http://192.168.7.152:8081/educar/car/active', //仅为示例，并非真实接口地址。
					method: "POST",
					data: {
						id:item.id
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					success: function(res) {
						console.log(res.data)
					}
				});
			},
			delMycar(index,img) {
				//点击删除 将当前信息删除
				var  strindex=img.lastIndexOf('/')
				var strimg=img.substr(strindex+1)
				console.log(strimg)
				uni.request({
					url: 'http://192.168.7.152:8081/educar/car/deleteById', //仅为示例，并非真实接口地址。
					method: "POST",
					data: {
						id: index,
						imgPath:strimg
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					success: (res) => {
						console.log(res.data);
						if (res.data) {
							uni.showToast({
								title: '删除成功',
								icon: 'none'
							})
							// this.info()
						} else {
							uni.showToast({
								title: '网络连接失败',
								icon: 'none'
							})
							// this.info()
						}
						this.info()
						// this.text = 'request success';
					}
				})
			},
			MyLiker() {
				// 跳转到添加爱车页面
				uni.navigateTo({
					// 跳转到我的爱车
					url: "../likecar/likecar"
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		flex: 1;
		opacity: 1;
		background: #f9f7f7;
		height: calc(100vh - 60px);
		// overflow: hidden;
	}
	.car_btn{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		height: 60px;
		// transform: translateX(-50%);
		background: #FFFFFF;
	}
	.footer {
		margin:15px auto;
		text-align: center;
		width: 315px;
		height:35px;
		opacity: 1;
		background: #f86259;
		border-radius: 30px;
		font-size: 16px;
		color: #ffffff;
		line-height: 35px;
		box-sizing: border-box;
	}

	.myLikecar {
		// width: 100%;
		margin: 0 15px;
		box-sizing: border-box;
		// display: flex;
		// flex-direction: column;
	}
	.car_itemsss{
		// height: calc(100% - 30px);
		padding-bottom: 65px;
	}
	.car_items {
		margin: 11px 0;
		padding: 16px;
		padding-right: 33px;
		box-sizing: border-box;
		width: 100%;
		height: 130px;
		opacity: 1;
		background: #ffffff;
		border-radius: 10px;
		display: flex;
		flex-direction: column;

		&>view:nth-child(2) {
			display: flex;
			justify-content: space-between;

			&>view:nth-child(1) {
				text {
					height: 14px;
					font-size: 10px;
					font-weight: 400;
					// color: #f86259;
				}
			}

			&>view:nth-child(2) {
				display: flex;
				align-items: center;
				margin-right: 35px;
				// &>view:nth-child(1) {
				// 	margin-right: 20px;
				// }

				text {
					height: 14px;
					font-size: 10px;
					font-weight: 400;
					color: #707070;
				}

				image {
					width: 14px;
					height: 14px;
					vertical-align: middle;
					margin-right: 5px;
				}
			}
		}

		&>view:nth-child(1) {
			padding-bottom: 3px;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #EDEDED;

			&>view:nth-child(1) {
				&>view:nth-child(1) {
					height: 25px;
					font-size: 18px;
					font-weight: 700;
					color: #333333;
					margin-bottom: 5px;
				}

				&>view:nth-child(2) {
					height: 17px;
					font-size: 12px;
					font-weight: 400;
					color: #4e4e4e;
				}

				&>view:nth-child(3) {
					height: 17px;
					font-size: 12px;
					font-weight: 500;
					color: #4e4e4e;
				}
			}

			&>view:nth-child(2) {
				image {
					width: 115px;
					height: 73px;
				}
			}
		}
	}
</style>
