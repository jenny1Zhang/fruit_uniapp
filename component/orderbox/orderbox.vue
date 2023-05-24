<template>
	<view class="container">
		<view v-if="!orders.length" class="ordertext">暂无订单</view>
		<view v-if="orders" v-for="(item,index) in orders" :key="index" :id="item.id" class="order">
			<view class="timebox">
				<view class="time">{{item.time}}</view>
				<view class="status">
					<view>{{item.status}}</view>
				</view>
			</view>
			<view @tap="goorderdetail" :id="item.id">
				<view class="goods">
					<image v-for="(item2,index2) in item.goods" :key="index2" :src="item2.image" />
				</view>
				<view class="price">
					共{{item.goods_nums}}件 实付: <text>¥{{item.goods_price}}</text>
				</view>
			</view>
			<view class="options">
				<view>再来一单</view>
				<view v-if="item.type==2">支付</view>
				<view v-if="item.type==3">提醒配送</view>
				<view v-if="item.type==5">评价</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Orderbox',
		props: {
			orders: Array
		},
		data() {
			return {

			}
		},
		methods: {
			goorderdetail(e) {
				// console.log(e.currentTarget.id)
				uni.navigateTo({
					url: '/pages/orderDetail/orderDetail?order_id=' + e.currentTarget.id
				})
			}
		}
	}
</script>

<style>
	.ordertext{
		width:100%;
		text-align: center;
		margin-top: 20px;
		background: white;
	}
	.order {
		background: white;
		margin: 30rpx 20rpx;
	}

	.order>view {
		padding: 20rpx;
		border-bottom: 1px solid #eee;
	}

	.order .timebox {
		position: relative;
		padding: 30rpx 20rpx;
	}

	.timebox .time {
		color: #999;
	}

	.timebox .status {
		width: 120rpx;
		height: 120rpx;
		border: 1px dotted #ef4486;
		border-radius: 50%;
		line-height: 120rpx;
		text-align: center;
		font-size: 12px;
		position: absolute;
		right: 20rpx;
		top: -10rpx;
		transform: rotate(-30deg);
		color: #ef4486;
		opacity: .5;
	}

	.timebox .status view {
		width: 100rpx;
		height: 100rpx;
		display: inline-block;
		border-top: 1px solid #ef4486;
		border-bottom: 1px solid #ef4486;
		border-radius: 50%;
		line-height: 100rpx;
		text-align: center;
	}

	.goods {
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
	}

	.goods image {
		width: 20%;
		padding: 6rpx;
		height: 110rpx;
		box-sizing: border-box;
	}

	.price {
		text-align: right;
		color: #666;
		font-size: 12px;
		padding: 20rpx 20rpx 0 0;
	}

	.price text {
		font-size: 14px;
		color: black;
		font-weight: 500;
	}

	.options {
		text-align: right;
		padding: 20rpx;
	}

	.options view {
		border: 1px solid #ccc;
		display: inline-block;
		margin-right: 30rpx;
		padding: 6rpx 16rpx;
		font-size: 12px;
		color: #666;
	}
</style>
