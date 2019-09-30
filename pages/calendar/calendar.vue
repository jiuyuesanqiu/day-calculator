<template>
	<view>
		<view class="mainContent box-center text-center pt-5">
			<view class="text-blue">
				<picker start="1900-01-31" end="2100-12-31" v-model="startTimeValue" mode="date" @change="startChange">
					<view class="bg-light text-xl shadow rounded my-5 py-4">{{startTime}}</view>
				</picker>
				<picker start="1900-01-01" end="2100-12-01" v-model="endTimeValue" class="bg-light text-xl shadow rounded my-5 py-4" mode="date" @change="endChange">
					<view>{{endTime}}</view>
				</picker>
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
			return {
				startTime: "选一个公历日期",
				endTime: "选一个农历日期",
				startTimeValue: 0,
				endTimeValue: 0
			}
		},
		methods: {
			startChange({
				detail: {
					value
				}
			}) {
				let arr = value.split("-").map(v => {
					return Number(v)
				})
				let res = calendar.solar2lunar(arr[0], arr[1], arr[2]);
				this.startTime = `${arr[0]}年${arr[1]}月${arr[2]}日`;
				this.startTimeValue = value;
				this.endTime = res.lYear+"年"+res.IMonthCn+res.IDayCn;
				this.endTimeValue = res.lYear+"-"+res.lMonth+"-"+res.lDay;
			},
			endChange({
				detail: {
					value
				}
			}) {
				let arr = value.split("-").map(v => {
					return Number(v)
				})
				let res = calendar.lunar2solar(arr[0], arr[1], arr[2]);
				this.startTime = `${res.cYear}年${res.cMonth}月${res.cDay}日`;
				this.startTimeValue = res.cYear+"-"+res.cMonth+"-"+res.cDay;
				this.endTime = res.lYear+"年"+res.IMonthCn+res.IDayCn;
				this.endTimeValue = value;
			}
		}
	}
</script>

<style>

</style>
