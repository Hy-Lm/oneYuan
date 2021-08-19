<template>
	<view class="likecar">
		<view class="likecar_box">
			<view>
				<text>姓名</text>
				<input type="text" v-model="name" value="" placeholder="请输入姓名" />
			</view>
			<view>
				<text>预留电话</text>
				<input type="text" value="" v-model="tel" placeholder="请输入预留电话" />
			</view>
			<view>
				<text>车牌号</text>
				<select name="" id="" v-model="sel">
					<option value="津">津</option>
					<option value="京">京</option>
					<option value="粤">粤</option>
				</select>
				<input type="text" v-model="idcar" value="" placeholder="请输入车牌号" />
			</view>
			<view>
				<text>当前里程</text>
				<input type="text" v-model="km" value="" placeholder="请输入当前里程" />
				<text class="km">Km</text>
			</view>
			<view>
				<text>上路时间</text>
				<input type="text" v-model="gotime" value="" placeholder="请输入上路时间" />
			</view>
			<view>
				<button type="button" @click="upload">上传图片</button>
				<image class="img" v-if="img" :src="img" mode=""></image>
			</view>
		</view>
		<view class="footer" @click="likecar">
			完成
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				tel: '',
				km: '',
				gotime: '',
				sel: '',
				idcar: '',
				imgs: '',
				img:''
			}
		},
		methods: {
			likecar() {
				// console.log(this.file)
				var {
					name,
					tel,
					km,
					gotime,
					idcar
				} = this
				uni.request({
					url: 'http://192.168.7.152:8081/educar/car/addCar', //仅为示例，并非真实接口地址。
					method: "POST",
					data: {
						name,
						tel,
						idcar,
						km,
						gotime,
						img:this.imgs
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					success: function(res) {
						// console.log(res.data)
						     if(res.data){
						uni.redirectTo({
							// 跳转到我的爱车
							url:"../my-likecar/my-likecar"
						})
						     }else{
						     	uni.showToast({
						     		title:'网络连接失败',
						     		icon:'none'
						     	})
						     }
					}
				});
			},
			upload() {
				var that = this
				uni.chooseImage({
					count: 6, //默认9
					success: function(res) {
						// console.log(res)
						that.img = res.tempFilePaths[0];
						uni.uploadFile({
							url: 'http://192.168.7.152:8081/educar/car/upload', //仅为示例，非真实的接口地址
							filePath: that.img,
							name: 'uploadFile',
							// formData: {
							//     file:img
							// },
							success: (uploadFileRes) => {
								// console.log(uploadFileRes.data);
								that.imgs=uploadFileRes.data
							}
						})

					}
				});
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F1F1F1;
		overflow: hidden;
	}

	.img {
		width: 100px;
		height: 100px;
	}

	.likecar {

		width: 100%;

		// height: 200px;
		.likecar_box {
			overflow: hidden;
			box-sizing: border-box;
			margin: 45px 15px 0 15px;
			// width: 100%;
			background-color: #FFFFFF;
			padding: 19px 26px;
			border-radius: 10px;

			view {
				&:nth-child(3) {
					text {
						width: 100px;
					}

					select {
						border: none;
						background-color: #FFFFFF;
					}
				}

				padding: 7px 0;

				text {
					display: inline-block;
					width: 120px;
					height: 20px;
					line-height: 20px;
					font-size: 14px;
					text-align: left;
					color: #000000;
					vertical-align: middle;
				}

				input {
					display: inline-block;
					vertical-align: middle;
					height: 20px;
					font-size: 12px;
					color: #7d7d7d;
				}

				.km {
					width: auto;
					color: #515151;
				}

				select {
					display: inline-block;
					margin-left: -26px;
					padding-right: 10px;
				}
			}
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
	}
</style>
