<template>
	<view class="text-center">
		<view class="title text-primary border-bottom py-3 mx-3">距离2020年</view>
		<view class="day">
			<text>{{ day }}</text>
			<text style="font-size: 80upx;">天</text>
		</view>
		<view class="hours">
			{{ hours }}
			<text style="font-size: 40upx;">时</text>
		</view>
		<view class="minutes my-3">
			{{ minutes }}
			<text style="font-size: 20upx;">分</text>
		</view>
		<view class="seconds">
			{{ seconds }}
			<text style="font-size: 20upx;">秒</text>
		</view>
	</view>
</template>

<script>
let interstitialAd = null;
export default {
	data() {
		return {
			day: '',
			hours: '',
			minutes: '',
			seconds: '',
			intervalId: 0
		};
	},
	onLoad() {
		this.start();
		// #ifdef MP-WEIXIN
		if (wx.createInterstitialAd) {
			interstitialAd = wx.createInterstitialAd({
				adUnitId: 'adunit-71cfd52ace790d0a'
			});
			interstitialAd.onError(err => {});
			interstitialAd.onClose(res => {});
		}
		// #endif
	},
	onShow() {
		// #ifdef MP-WEIXIN
		if (interstitialAd) {
			interstitialAd.show().catch(err => {});
		}
		// #endif
	},
	onUnload() {
		clearInterval(this.intervalId);
	},
	methods: {
		start() {
			let d = new Date('2020/1/1');
			let residue = d - new Date();
			this.formate(residue);
			this.intervalId = setInterval(() => {
				let residue = d - new Date();
				this.formate(residue);
			}, 1000);
		},
		formate(residue) {
			this.day = Math.floor(residue / (24 * 60 * 60 * 1000));
			this.hours = Math.floor((residue % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
			this.minutes = Math.floor(((residue % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) / (60 * 1000));
			this.seconds = Math.floor((((residue % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000);
		}
	}
};
</script>

<style lang="scss">
.title {
	font-size: 100upx;
	margin-top: 10vh;
}

.day {
	font-size: 400upx;
	height: 400upx;
	line-height: 400upx;
	transform: translateX(20upx);
}
.hours {
	font-size: 150upx;
}
.minutes {
	font-size: 50upx;
}
.seconds {
	font-size: 50upx;
}
</style>
