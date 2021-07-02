<template>
	<!-- 首页分类 -->
	<view>
		<view class="classify">
			<ul>
				<li>
					<image src="../../static/tyre.png" mode="aspectFit"></image>
					<p>换轮胎</p>
				</li>
				<li>
					<image src="../../static/upkeep.png" mode="aspectFit"></image>
					<p>做保养</p>
				</li>
				<li>
					<image src="../../static/spray.png" mode="aspectFit"></image>
					<p>钣金喷漆</p>
				</li>
				<li>
					<image src="../../static/autorepair.png" mode="aspectFit"></image>
					<p>汽车维修</p>
				</li>
				<li>
					<image src="../../static/brake.png" mode="aspectFit"></image>
					<p>刹车</p>
				</li>
				<li>
					<image src="../../static/carbeauty.png" mode="aspectFit"></image>
					<p>汽车美容</p>
				</li>
			</ul>
		</view>
	</view>
</template>
<script>
	export default {
		name:"classify",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.classify{
	overflow: hidden;
	margin: 15px;
	border-radius: 10px;
	box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.16); 
    ul{
        padding: 15px 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
        li{
			// flex: 1;
            text-align: center;
            margin-bottom: 20px;
			width: 33.33%;
            image{
                width: 40px;
				height:40px;
            }
			p{
				margin-top: 5px;
				font-size: 16px;
				color: #000000;
			}
        }
    }
}
</style>
