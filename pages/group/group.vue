<template>
	<view class="container">
		<view v-for="(item,index) in list" :key="index">
			<view class="photo">
				<image @tap="godetail" :id="item.id" :src="item.image" mode="aspectFit" />
			</view>
			<view class="name">{{item.name}}</view>
			<view class="text">
				<view>{{item.text}}</view>
				<view>距离结束：{{item.end_time}}</view>
			</view>
			<view class="price">
				<view>¥{{item.price}}</view>
				<view @tap="godetail" :id="item.id">
					<view>去拼团<text class="iconfont icon-jiantou"></text></view>
				</view>
			</view>
			<view class="people">{{item.people_num}}人拼团</view>
		</view>
	</view>
</template>

<script>
	import store from '@/store/index';

	export default {
		data() {
			return {
				seckillData: store.state,
				list: store.state.group_book_list
			}
		},
		onShow(){
			console.log('show')
		},
		methods: {
			godetail(e) {
				console.log(e)
				uni.navigateTo({
					url: "/pages/groupDetail/groupDetail?good_id=" + e.currentTarget.id
				})
			}
		}
	}
</script>

<style>
	@import "/static/fonts/iconfont.css";
	.container {
		padding: 10px 0;
		background: #f3f3f3;
	}

	.container>view {
		background: white;
		margin: 10px 0;
		padding: 0 10px 10px;
		width: 100%;
		box-sizing: border-box;
		position: relative;
	}

	.photo {
		width: 100%;
		text-align: center;
		padding: 10rpx 0;
	}

	.photo image {
		width: 240rpx;
		height: 240rpx;
	}

	.name {
		font-size: 17px;
		font-weight: 500;
		padding: 2px 8px;
	}

	.text {
		display: flex;
		font-size: 14px;
		padding: 2px 8px;
	}

	.text>view:last-child {
		flex: 1;
		font-size: 12px;
		text-align: right;
		margin-top: 2px;
	}

	.price {
		display: flex;
		padding: 2px 8px;
	}

	.price>view:first-child {
		flex: 1;
		font-size: 20px;
		color: #dc9f82;
	}

	.price>view:last-child {
		text-align: right;
	}

	.price>view:last-child>view {
		margin-top: 5px;
		width: 170rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		background: #f38359;
		color: white;
		font-size: 14px;
		border-radius: 20px;
	}

	.people {
		position: absolute;
		left: 10px;
		top: 0;
		background: #fe7e51;
		color: white;
		padding: 2px 10px;
		font-size: 12px;
	}
</style>
