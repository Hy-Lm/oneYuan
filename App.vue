<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
		/* 修改checkbox的样式 */
	    uni-checkbox .uni-checkbox-input {
			border-radius: 50%;
		}
	
		uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
			border: 1rpx solid #F8981D;
		}
		uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked:before{
			color:#F8981D !important;
		}
		uni-checkbox .uni-checkbox-wrapper {
			width: 100%;
		}
		uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked:before{
			color: #fff;
		}
		uni-checkbox:not([disabled]) .uni-checkbox-input:hover{
			border-color:#F8981D !important;
		}
</style>
