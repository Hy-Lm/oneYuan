<template>
		<view class="tab">
			<view class="tt"></view>
			<view class="tab_list">
				<ul>
					 <!-- class="current" -->
					<li v-for="(item,index) in item_box_items" @click="tab(index)" :class="activeIndex_click==index?'current':''"  :key="index">{{item.name}}</li>
				</ul>
			</view>
			<view class="tab_con">
				<tabList @change="change" :item_box_items="item_box_items" :activeIndex_click="activeIndex_click"/>
			</view>
		</view>
</template>

<script>
	import tabList from './tab-list.vue'
	export default {
		data() {
			return {
				activeIndex_click:0,   // 定义点击后选项卡对应的index
			}
		},
		props:{
			// 接收tab.vue传递过来的值点击选项卡的索引
			item_box_items:{
				type:Array,
				default:[]
			},
		},
		components:{
			tabList
		},
		methods: {
			// 接收tab-list 传递过来的值
			change(current){
				// console.log(current+'----')
				this.activeIndex_click=current
			},
			// 点击导航  切换数据
			tab(index){
				this.activeIndex_click=index
				// console.log(index)
			}
		}
	}
</script>

<style lang="scss">
	.tt{
		height: 13px;
		background-color:#f9f7f7;;
	}
	page {
		box-sizing: border-box;
		flex: 1;
		height: 100%;
	}

	li {
		list-style-type: none;
	}

	ul {
		padding: 0;
	}

	.tab {
		width: 100%;
		height: 100%;
		margin-top: 10px;
	}

	.tab_list {
		height: 39px;
		background: #FFFFFF;
		padding: 0 15px;
		box-sizing: border-box;
	}
	.tab_list ul{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.tab_list li {
		height: 39px;
		line-height: 39px;
		position: relative;
		color: #333333;
	}

	.tab_list .current::after {
		content: '';
		position: absolute;
		left: calc(100% / 2 - 10px);
		bottom: 0;
		width: 12px;
		height: 2px;
		opacity: 1;
		background: #0d8600;
		border: 1px solid #0d8600;
	}

	.tab_con {
		padding: 18px 15px;
		// padding-bottom: 0;
		box-sizing: border-box;
		flex: 1;
		overflow: auto;
		height: 100%;
	}
</style>
