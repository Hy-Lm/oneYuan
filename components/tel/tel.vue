<template>
	<view class="mask" @click="masks" v-if="mask">
		<view class="mask-con">
			<view @click="decryptPhoneNumber">呼叫 <text>{{num}}</text></view>
			<view @click="delTel">取消</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			mask:{
				type:Boolean,
				default:false
			},
			num:{
				type:String,
				default:''
			}
		},
		name:"tel",
		data() {
			return {
			};
		},
		methods:{
			decryptPhoneNumber(){
				// console.log(this.num)
				uni.makePhoneCall({
				    phoneNumber: this.num //仅为示例
				});
			},
			// 点击取消
			delTel(){
				this.$emit("changeTel",false)
			},
			// 遮罩隐藏
			masks(){
				this.$emit("changeTel",false)
			}
		}
	}
</script>

<style lang="scss">
.mask{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(175,175,175,.1);
	z-index: 9;
	
	.mask-con{
		width: 100%;
		position: absolute;
		bottom: 5%;
		left: 0;
		padding: 0 9px;
		box-sizing: border-box;
		&>view{
			border-radius: 13px;
			width: 100%;
			height: 59px;
			opacity: 1;
			background: #ffffff;
			margin-bottom: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 20px;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			color: #3478f6;
		}
		
	}
}
</style>
