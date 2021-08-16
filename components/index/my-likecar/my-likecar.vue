<template>
	<view class="myLikecar">
		<view class="car_items" v-for="(item,index) in car_items" :key="item.id">
			<view>
				<view>
					<view>{{item.name}}</view>
					<!-- <view>{{item.vehicle}}</view> -->
					<view>行驶里程：{{item.km}}km</view>
				</view>
				<view>
					<!-- <image :src="item.img" mode="aspectFit"></image> -->
					 <image src="../../../static/2.jpg" mode="aspectFit"></image>
				</view>
			</view>
			<view>
				<view>
					<radio @click="r(index)" value="r1" :checked="item.active" color="#f8981d"
						style="transform: scale(0.8);" />
					<text :style="{'color': (item.active?'#f8981d':'#707070')}">已设为默认车</text>
				</view>
				<view>
					<!-- <view>
						<image src="../../../static/2.jpg"></image>
						<text>编辑</text>
					</view> -->
					<view @click="delMycar(item.id)">
						<image src="../../../static/2.jpg"></image>
						<text>删除</text>
					</view>
				</view>
			</view>
		</view>
		<view class="footer" @click="MyLiker">
			添加爱车
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				car_items: [{
						wagon: "津 A9996J",
						vehicle: "宝马 320i 2018款 自动挡",
						mileage: 21000,
						img: '../../../static/2.jpg',
						active: true
					},
					{
						wagon: "京 A9996J",
						vehicle: "宝马 320i 2018款 自动挡",
						mileage: 21000,
						img: '../../../static/2.jpg',
						active: false
					},
					{
						wagon: "粤 A9996J",
						vehicle: "宝马 320i 2018款 自动挡",
						mileage: 21000,
						img: '../../../static/2.jpg',
						active: false
					}
				]
			}
		},
		mounted() {
			this.info()
		},
		methods: {
			info(){
				uni.request({
				    url: 'http://192.168.7.152:8081/educar/car/findAll', //仅为示例，并非真实接口地址。
				    data: {
				        text: 'uni.request'
				    },
				    header: {
				        'custom-header': 'hello' //自定义请求头信息
				    },
				    success: (res) => {
				        console.log(res.data);
						this.car_items=res.data
				        // this.text = 'request success';
				    }
				})
			},
			r(index) {
				// 全部
				this.car_items.forEach(function(value, key) {
					value.active = false
				});
				// 点击选中默认车
				this.car_items[index].active = true

			},
			delMycar(index) {
				uni.request({
				    url: 'http://192.168.7.152:8081/educar/car/deleteById', //仅为示例，并非真实接口地址。
					method:"POST",
				    data: {
				        id: index
				    },
				    header: {
				    	'content-type': 'application/x-www-form-urlencoded', 
				    },
				    success: (res) => {
				        console.log(res.data);
						if(res.data){
							uni.showToast({
								title:'删除成功',
								icon:'none'
							})
							this.info()
						}else{
							uni.showToast({
								title:'网络连接失败',
								icon:'none'
							})
						}
				        // this.text = 'request success';
				    }
				})
			},
			MyLiker(){
				// 跳转到添加爱车页面
				uni.navigateTo({
					// 跳转到我的爱车
					url:"../likecar/likecar"
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
	}

	.footer {
		text-align: center;
		position: fixed;
		bottom: 30px;
		left: 50%;
		transform: translateX(-50%);
		width: 315px;
		height: 30px;
		opacity: 1;
		background: #f86259;
		border-radius: 15px;
		font-size: 16px;
		color: #ffffff;
		line-height: 29px;
	}

	.myLikecar {
		// width: 100%;
		margin: 0 15px;
	}

	.car_items {
		margin-top: 22px;
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
					color: #000000;
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
