<template>
	<view>
		<!-- swiper class="home-swiper" vertical="true" @change="change" :current="activeIndex_click">
			<swiper-item class="swiper-item" v-for="(item,index) in tab"> -->
				<!-- 将list数据库文章列表数据传递给listItem -->
				<listItem :list="item" />
			<!-- </swiper-item> -->
		</swiper>
	</view>
</template>

<script>
	import listItem from './itemCart.vue';
	export default {
		props: {
			tab: {
				type: Array,
				default: {}
			},
			activeIndex_click: {
				type: Number,
				default: 0
			}
		},
		name: "car-list",
		data() {
			return {

			};
		},
		methods:{
			// change(e){
			// 	// 滑块改动的下标
			// 	const {current}=e.detail
			// 	this.$emit("change",current)  // 传递给fenlei.vue
			// 	// console.log(e.detail)
			// }
		},
		components: {
			listItem
		}

	}
</script>

<style lang="scss">
	.home-swiper {
		//flex: 1;  // 撑开
		height: 100%;

		//border: 1px solid red;
		.swiper-item {
			// height: 100% !important;
			overflow: auto;

			.scroll_list {
				// height: 100%;
			}
		}
	}
</style>
