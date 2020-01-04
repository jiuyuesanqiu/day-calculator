<template>
	<view>
		<view class="text-center">
			<view class="title text-primary border-bottom py-3">距离{{ newYear }}年</view>
			<view class="day">{{ day }}</view>
		</view>
		<view id="countdown">
			<view id="tiles">
				<text>{{ hours }}</text>
				<text>{{ minutes }}</text>
				<text>{{ seconds }}</text>
			</view>
			<view class="labels text-primary">
				<view>Hours</view>
				<view>Mins</view>
				<view>Secs</view>
			</view>
		</view>
	</view>
</template>

<script>
let interstitialAd = null;
export default {
	data() {
		return {
			newYear: '',
			day: '',
			hours: '',
			minutes: '',
			seconds: '',
			intervalId: 0
		};
	},
	onLoad() {
		this.newYear = new Date().getFullYear() + 1;
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
			let d = new Date(`${this.newYear}/1/1`);
			let residue = d - new Date();
			this.formate(residue);
			this.intervalId = setInterval(() => {
				let residue = d - new Date();
				this.formate(residue);
			}, 1000);
		},
		formate(residue) {
			this.day = Math.floor(residue / (24 * 60 * 60 * 1000)) + '';
			this.hours = Math.floor((residue % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)) + '';
			this.minutes = Math.floor(((residue % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) / (60 * 1000)) + '';
			this.seconds = Math.floor((((residue % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000) + '';
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
	font-size: 300rpx;
	line-height: 500rpx;
	height: 500rpx;
}

page {
	font: normal 13rpx * 1.5/20rpx * 1.5 Arial, Helvetica, sans-serif;
	word-wrap: break-word;
	color: #eee;
	background: #353535;
}

#countdown {
	width: 600rpx;
	height: 240rpx;
	text-align: center;
	background: #222;
	background-image: -webkit-linear-gradient(top, #222, #333, #333, #222);
	background-image: -moz-linear-gradient(top, #222, #333, #333, #222);
	background-image: -ms-linear-gradient(top, #222, #333, #333, #222);
	background-image: -o-linear-gradient(top, #222, #333, #333, #222);
	border: 1rpx * 1.5 solid #111;
	border-radius: 5rpx * 1.5;
	box-shadow: 0rpx * 1.5 0rpx * 1.5 8rpx * 1.5 rgba(0, 0, 0, 0.6);
	margin: auto;
	padding: 24rpx * 1.5 0;
	position: absolute;
	bottom: 200rpx;
	left: 0;
	right: 0;
}

#countdown:before {
	content: '';
	width: 8rpx * 1.5;
	height: 65rpx * 1.5;
	background: #444;
	background-image: -webkit-linear-gradient(top, #555, #444, #444, #555);
	background-image: -moz-linear-gradient(top, #555, #444, #444, #555);
	background-image: -ms-linear-gradient(top, #555, #444, #444, #555);
	background-image: -o-linear-gradient(top, #555, #444, #444, #555);
	border: 1rpx * 1.5 solid #111;
	border-top-left-radius: 6rpx * 1.5;
	border-bottom-left-radius: 6rpx * 1.5;
	display: block;
	position: absolute;
	top: 48rpx * 1.5;
	left: -10rpx * 1.5;
}

#countdown:after {
	content: '';
	width: 8rpx * 1.5;
	height: 65rpx * 1.5;
	background: #444;
	background-image: -webkit-linear-gradient(top, #555, #444, #444, #555);
	background-image: -moz-linear-gradient(top, #555, #444, #444, #555);
	background-image: -ms-linear-gradient(top, #555, #444, #444, #555);
	background-image: -o-linear-gradient(top, #555, #444, #444, #555);
	border: 1rpx * 1.5 solid #111;
	border-top-right-radius: 6rpx * 1.5;
	border-bottom-right-radius: 6rpx * 1.5;
	display: block;
	position: absolute;
	top: 48rpx * 1.5;
	right: -10rpx * 1.5;
}

#countdown #tiles {
	position: relative;
	z-index: 1;
}

#countdown #tiles > text {
	width: 92rpx * 1.5;
	max-width: 92rpx * 1.5;
	font: bold 48rpx * 1.5 'Droid Sans', Arial, sans-serif;
	text-align: center;
	color: #111;
	background-color: #ddd;
	background-image: -webkit-linear-gradient(top, #bbb, #eee);
	background-image: -moz-linear-gradient(top, #bbb, #eee);
	background-image: -ms-linear-gradient(top, #bbb, #eee);
	background-image: -o-linear-gradient(top, #bbb, #eee);
	border-top: 1rpx * 1.5 solid #fff;
	border-radius: 3rpx * 1.5;
	box-shadow: 0rpx * 1.5 0rpx * 1.5 12rpx * 1.5 rgba(0, 0, 0, 0.7);
	margin: 0 7rpx * 1.5;
	padding: 18rpx * 1.5 0;
	display: inline-block;
	position: relative;
}

#countdown #tiles > text:before {
	content: '';
	width: 100%;
	height: 13rpx * 1.5;
	background: #111;
	display: block;
	padding: 0 3rpx * 1.5;
	position: absolute;
	top: 41%;
	left: -3rpx * 1.5;
	z-index: -1;
}

#countdown #tiles > text:after {
	content: '';
	width: 100%;
	height: 1rpx * 1.5;
	background: #eee;
	border-top: 1rpx * 1.5 solid #333;
	display: block;
	position: absolute;
	top: 48%;
	left: 0;
}

#countdown .labels {
	width: 100%;
	height: 25rpx * 1.5;
	text-align: center;
	position: absolute;
	bottom: 17rpx;
}

#countdown .labels view {
	width: 102rpx * 1.5;
	font: bold 15rpx * 1.5 'Droid Sans', Arial, sans-serif;
	text-shadow: 1rpx * 1.5 1rpx * 1.5 0rpx * 1.5 #000;
	text-align: center;
	text-transform: uppercase;
	display: inline-block;
}
</style>
