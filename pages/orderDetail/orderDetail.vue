<template>
	<view class="container">
		<view class="statusbox">
			<view>{{orderData.status}}</view>
			<view>
				<text v-if="orderData.type==2">20分钟内未支付将取消订单</text>
				<text v-if="orderData.type==3">正在准备发货中...</text>
				<text v-if="orderData.type==4">正在配送中...</text>
				<text v-if="orderData.type==5">感谢您对我们的信任，期待再次光临</text>
			</view>
			<view>
				<text v-if="orderData.type==2">支付</text>
				<text v-if="orderData.type==3">提醒发货</text>
				<text v-if="orderData.type==5">评论得积分</text>
			</view>
		</view>
		<view class="courierbox" v-if="orderData.type==4 || orderData.type==5">
			<view><text class="iconfont icon-wode"></text><text>快递员</text></view>
			<view><text>联系小哥</text></view>
		</view>
		<view class="deliverybox">
			<view>
				<view>收货地址</view>
				<view>
					<view>{{orderData.address}}</view>
					<view>{{orderData.username}} {{orderData.tellphone}}</view>
				</view>
			</view>
			<view>
				<view>配送方式</view>
				<view>自有配送</view>
			</view>
			<view>
				<view>配送时间</view>
				<view>{{orderData.deliveryTime}}</view>
			</view>
			<view v-if="orderData.type==5">
				<view>送达时间</view>
				<view>{{orderData.arrivedTime}}</view>
			</view>
		</view>
		<view class="goodsbox">
			<view class="seckill" v-for="(item, index) in orderData.goods" :key="index">
				<view class="photo">
					<image class="img" :src="item.image" mode="aspectFit" />
				</view>
				<view class="text">
					<view :id="item.id" @tap="goDetail">{{item.name}}-{{item.weight}}</view>
					<view class="price">
						¥ {{item.price}} x {{item.num}}
					</view>
				</view>
			</view>
			<view v-if="isshow1" class="open">
				<view @tap="opengoodlist">查看 <text class="iconfont icon-jiantou-copy-copy"></text></view>
			</view>
			<view v-if="isshow2" class="open">
				<view @tap="shrinkgoodlist">收起 <text class="iconfont icon-arrow-to-bottom"></text></view>
			</view>
		</view>
		<view class="deliverybox pricebox">
			<view>
				<view>商品总价</view>
				<view>¥{{orderData.pre_price}}</view>
			</view>
			<view>
				<view>商品优惠</view>
				<view>- ¥{{orderData.discounts}}</view>
			</view>
			<view>
				<view>红包</view>
				<view>- ¥{{orderData.redPacket ? orderData.redPacket : 0}}</view>
			</view>
			<view>
				<view>配送费</view>
				<view>包邮</view>
			</view>
			<view>
				<view>已优惠 ¥{{(orderData.discounts?orderData.discounts:0)+(orderData.redPacket?orderData.redPacket:0)}}</view>
				<view>实付 ¥{{orderData.goods_price}}</view>
			</view>
		</view>
		<view class="orderbox">
			<view>
				<view>订单编号：{{orderData.ordernum}}</view>
				<view>复制</view>
			</view>
			<view>下单时间：{{orderData.time}}</view>
			<view>支付方式：微信支付</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isshow1: false,
				isshow2: false,
				orderData: {},
				id: ''
			}
		},
		onLoad: function(options) {
			// console.log(options)
			var id = options.order_id;
			var orders = uni.getStorageSync('orders');
			for (var i = 0; i < orders.length; i++) {
				if (orders[i].id == id) {
					if (orders[i].goods.length > 3) {
						this.isshow1 = true;
						var goods = orders[i].goods;
						orders[i].goods = goods.slice(0, 3);
						orders[i].goods2 = goods.slice(3);
					}
					this.id = id;
					this.orderData = orders[i];
					console.log(orders[i])
				}
			}
		},
		methods: {
			opengoodlist() {
				var orderData = this.orderData;
				orderData.goods = orderData.goods.concat(orderData.goods2);
				this.isshow1 = false;
				this.isshow2 = true;
				this.orderData = orderData;
			},

			shrinkgoodlist() {
				var orderData = this.orderData;
				orderData.goods = orderData.goods.slice(0, 3);
				this.isshow1 = true;
				this.isshow2 = false;
				this.orderData = orderData;
			}

		}
	}
</script>

<style>
	@import "/static/fonts/iconfont.css";
	.container {
		width: 100%;
		background: #eee;
		padding: 10px;
		box-sizing: border-box;
		font-size: 14px;
	}

	.container>view {
		width: 100%;
		background: white;
		border-radius: 10px;
		margin-bottom: 15px;
		padding: 10px;
		box-sizing: border-box;
	}

	.statusbox>view {
		padding: 10px 5px;
		border-bottom: 1px solid #eee;
	}

	.statusbox>view:first-child {
		font-size: 20px;
		font-weight: 600;
	}

	.statusbox>view:nth-child(2) {
		font-size: 16px;
	}

	.statusbox>view:last-child {
		text-align: right;
		border: 0;
	}

	.statusbox>view:last-child>text {
		border: 1px solid #eee;
		padding: 2px 10px;
		color: #999;
	}

	.courierbox {
		display: flex;
		padding: 13px;
	}

	.courierbox>view:first-child {
		flex: 1;
		position: relative;
	}

	.courierbox>view:first-child .iconfont {
		font-size: 34px;
		color: #ef4486;
	}

	.courierbox>view:first-child>text:last-child {
		font-size: 16px;
		font-weight: 500;
		position: absolute;
		left: 46px;
		top: 10px;
	}

	.courierbox>view:last-child {
		font-size: 13px;
		color: #666;
		line-height: 44px;
	}

	.courierbox>view:last-child text {
		border: 1px solid #eee;
		padding: 2px 10px;
	}

	.deliverybox>view {
		padding: 10px;
		border-bottom: 1px solid #eee;
		display: flex;
	}

	.deliverybox>view:last-child {
		border: 0;
	}

	.deliverybox>view>view:first-child {
		color: #999;
		flex: 1;
	}

	.deliverybox>view>view:last-child {
		flex: 2;
		color: #666;
		text-align: right;
	}

	.container .goodsbox {
		padding: 0;
		position: relative;
	}

	.seckill {
		width: 100%;
		display: flex;
		padding: 10px 0;
		background: white;
	}

	.seckill .photo {
		flex: 1;
		text-align: center;
	}

	.seckill .photo .img {
		width: 160rpx;
		height: 160rpx;
	}

	.seckill .text {
		flex: 2;
		box-sizing: border-box;
		font-size: 14px;
		color: #777;
	}

	.text>view:first-child {
		font-size: 14px;
		color: #666;
		padding-top: 10rpx;
	}

	.price {
		color: #999;
		font-size: 12px;
		margin-top: 50rpx;
	}

	.goodsbox .open {
		height: 40px;
		/* margin: 38px 0 0; */
	}

	.goodsbox>.open>view {
		border: 1px solid #eee;
		padding: 2px 10px;
		color: #999;
		position: absolute;
		bottom: 10px;
		left: 50%;
		margin-left: -33px;
	}

	.goodsbox>.open>view .iconfont {
		font-size: 14px;
	}

	.container>.pricebox>view>view {
		color: #999;
	}

	.pricebox>view:first-child>view {
		color: #666;
	}

	.pricebox>view:last-child>view:last-child {
		color: #666;
		font-size: 16px;
	}

	.container>.orderbox {
		margin: 0;
	}

	.orderbox>view {
		padding: 6px;
		color: #999;
		font-size: 13px;
	}

	.orderbox>view:first-child {
		position: relative;
	}

	.orderbox>view:first-child>view:last-child {
		padding: 2px 5px;
		border: 1px solid #eee;
		position: absolute;
		right: 0;
		top: 50%;
		margin-top: -11px;
	}
</style>
