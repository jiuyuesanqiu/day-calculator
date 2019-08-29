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

<style lang="scss">
	/*每个页面公共css */
	@import "common/css/main.css";
	@import "common/css/icon.css";
	@import "common/css/animation.css";
	@import "common/css/custom.scss";
	
	.box-center{
		margin: 0 auto;
	}
	
	.mainContent {
		width: 500upx;
	}
</style>
