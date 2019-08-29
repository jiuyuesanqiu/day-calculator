<template>
	<view>
		<view class="mainContent box-center text-center pt-5">
			<view class="bg-light shadow rounded py-4">
				<view class="text-sl text-primary">{{apart}}天</view>
				<view v-if="describe" class="text-lg text-secondary">{{describe}}</view>
			</view>
			<view class="text-blue">
				<picker mode="date" @change="startChange">
					<view class="bg-light text-xl shadow rounded my-5 py-4">{{startTime}}</view>
				</picker>
				<picker class="bg-light text-xl shadow rounded my-5 py-4" mode="date" @change="endChange">
					<view>{{endTime}}</view>
				</picker>
			</view>
		</view>
		<view class="fixed-bottom">
			<ad unit-id="adunit-57e7bb610eee4387"></ad>
		</view>
	</view>
</template>

<script>
	let interstitialAd = null;
	//判断是否首次进入小程序
	let first = true;
	export default {
		data() {
			return {
				startTime: "请选择一个日期",
				endTime: "请再选一个日期"
			}
		},
		computed: {
			apart() {
				if (this.startTime === "请选择一个日期" || this.endTime === "请再选一个日期") {
					return 0;
				}
				return Math.abs((new Date(this.startTime) - new Date(this.endTime)) / 86400000)
			},
			describe() {
				if (this.apart < 100) {
					return ''
				} else if (this.apart < 365) {
					return `${parseInt(this.apart/30)}月${this.apart%30 === 0? "":("零"+this.apart%30)}天`
				} else {
					if (this.apart % 365 === 0) {
						return `${parseInt(this.apart/365)}年`
					} else {
						if (this.apart % 365 < 30) {
							return `${parseInt(this.apart/365)}年零${this.apart%365}天`
						} else {
							if (this.apart % 365 % 30 === 0) {
								return `${parseInt(this.apart/365)}年零${this.apart%365/30}月`
							} else {
								return `${parseInt(this.apart/365)}年零${parseInt(this.apart%365/30)}月零${this.apart%365%30}天`
							}
						}
					}
				}
			}
		},
		onLoad() {
			if (wx.createInterstitialAd) {
				interstitialAd = wx.createInterstitialAd({
					adUnitId: 'adunit-71cfd52ace790d0a'
				})
				interstitialAd.onError((err) => {})
				interstitialAd.onClose((res) => {})
			}
		},
		onShow() {
			if (!first && interstitialAd) {
				interstitialAd.show().catch((err) => {})
			}
			first = false;
		},
		methods: {
			startChange({
				detail: {
					value
				}
			}) {
				this.startTime = value;
			},
			endChange({
				detail: {
					value
				}
			}) {
				this.endTime = value;
			}
		}
	}
</script>

<style>

</style>
