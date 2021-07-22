<template>
	<view class="content">
		<!-- 导航 -->
		<navbar></navbar>
		<!-- 享服务 -->
		<serve></serve>
		<!-- 类型 -->
		<classify></classify>
		<!-- 配件 -->
		<view class="part">
			<parts></parts>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content{
		width: 100vw;
		/* height: 100vh; */
		overflow: hidden;
	}
	.part{
		padding: 0 15px;
	}
</style>
