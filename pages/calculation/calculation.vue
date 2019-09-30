<template>
	<view>
		<view class="mainContent box-center text-center pt-5">
			<view v-show="apart" class="bg-light shadow rounded py-2">
				<view class="text-xl text-primary">{{apart}}天前是{{timeBefore}}</view>
			</view>
			<view class="text-blue">
				<picker mode="date" @change="timeChange">
					<view class="bg-light text-xl shadow rounded my-4 py-4">{{time}}</view>
				</picker>
				<view class="bg-light text-xl shadow rounded my-4 py-4" mode="date">
					<input maxlength="5" type="number" v-model="apart" placeholder="填写一个间隔时间" />
				</view>
			</view>
			<view v-show="apart" class="bg-light shadow rounded py-2">
				<view class="text-xl text-primary">{{apart}}天后是{{timeAfter}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		calendar
	} from "../../common/js/calendar.js"
	export default {
		data() {
			let now = new Date();
			let time = this.formate(now);
			return {
				time,
				timeValue: now,
				apart: ""
			}
		},
		computed: {
			timeBefore() {
				return this.formate(new Date((this.timeValue.getTime() - this.apart * 86400000)));
			},
			timeAfter() {
				return this.formate(new Date((this.timeValue.getTime() + this.apart * 86400000)));
			}
		},
		onShow() {
			// #ifdef MP-WEIXIN
			if (interstitialAd) {
				interstitialAd.show().catch((err) => {})
			}
			// #endif
		},
		methods: {
			timeChange({
				detail: {
					value
				}
			}) {
				let arr = value.split("-").map(v => {
					return Number(v)
				})
				this.timeValue = new Date(value);
				this.time = arr[0] + "年" + arr[1] + "月" + arr[2] + "日";
			},
			formate(time = new Date()) {
				return time.getFullYear() + "年" + (time.getMonth() + 1) + "月" + time.getDate() + "日"
			}
		}
	}
</script>

<style>

</style>
