<template>
	<view class="container">
		<view class="typesbox">
			<view v-for="(item,index) in orderTypes" :key="index" :id="item.id" :class=" item.id==activeIndex ? 'active' : '' " @tap="changetypes">{{item.type}}</view>
		</view>
		<view class="orderbox">
			<view v-if="activeIndex==1">
				<orderbox :orders="orders1"></orderbox>
			</view>
			<view v-if="activeIndex==2">
				<orderbox :orders="orders2"></orderbox>
			</view>
			<view v-if="activeIndex==3">
				<orderbox :orders="orders3"></orderbox>
			</view>
			<view v-if="activeIndex==4">
				<orderbox :orders="orders4"></orderbox>
			</view>
			<view v-if="activeIndex==5">
				<orderbox :orders="orders5"></orderbox>
			</view>
		</view>
	</view>
</template>

<script>
	import Orderbox from '@/component/orderbox/orderbox';
	
	export default {
		components: {
			Orderbox
		},
		data() {
			return {
				activeIndex: '1',
				orderTypes: [{
					id: '1',
					type: '全部'
				}, {
					id: '2',
					type: '待支付'
				}, {
					id: '3',
					type: '待配送'
				}, {
					id: '4',
					type: '配送中'
				}, {
					id: '5',
					type: '待评价'
				}],
				orders1: uni.getStorageSync('orders'),
				orders2: [],
				orders3: [],
				orders4: [],
				orders5: []
			}
		},
		onLoad(options) {
			// console.log('orderload:',options.order_type)
			var order_type = 1;
			if (options.order_type) {
				order_type = options.order_type;
			}
			var orders = uni.getStorageSync('orders') ? uni.getStorageSync('orders') : [];
			console.log(orders)
			this.activeIndex = order_type,
			this.orders1 = orders,
			this.orders2 = orders.filter(function(order) {
				return order.type == 2
			});
			this.orders3 = orders.filter(function(order) {
				return order.type == 3
			}),
			this.orders4 = orders.filter(function(order) {
				return order.type == 4
			}),
			this.orders5 = orders.filter(function(order) {
				return order.type == 5
			})
		},
		methods: {
			changetypes: function(e) {
				this.activeIndex = e.target.id;
			}
		}
	}
</script>

<style>
	.typesbox {
		display: flex;
		width: 100%;

	}

	.typesbox view {
		flex: 1;
		text-align: center;
		font-size: 14px;
		color: #666;
		padding: 16rpx 0;
		margin: 0 20rpx;
	}

	.typesbox .active {
		border-bottom: 1px solid red;
	}

	.orderbox {
		width: 100%;
		/* background: #eee; */
	}
</style>
