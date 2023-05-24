<template>
	<view class="container">
		<view>
			<view class="address" @tap="goAddress">
				<view class="add">{{address.detailadd}}</view>
				<view class="name">{{address.name}} {{address.tel}}</view>
				<text class="iconfont icon-arrow-r"></text>
			</view>
			<view class="goods">
				<view>
					<view>今日送达</view>
					<view @tap="changeTime">今天{{deliveryTime}}送达<text class="iconfont icon-arrow-r"></text></view>
				</view>
				<view>
					<view>
						<image v-for="(item,index) in goods" :key="index" :src="item.image" />
					</view>
					<view @tap="goodLists">共{{goods.length}}件<text class="iconfont icon-arrow-r"></text></view>
				</view>
			</view>
			<view class="price">
				<view>
					<view>商品原价</view>
					<view>¥ {{preAllMoney}}</view>
				</view>
				<view>
					<view>商品优惠</view>
					<view class="red">- ¥ {{subtractMoney}}</view>
				</view>
				<view>
					<view>商品券</view>
					<view class="gray">0张商品券可用 <text class="iconfont icon-arrow-r"></text></view>
				</view>
				<view>
					<view>红包</view>
					<view :class=" useablePacketNum>0 ? 'red redPacket' : 'gray redPacket' " @tap="goRedPacket">
						<view v-if="!choosePacket.num">{{useablePacketNum}}个红包可用 <text class="iconfont icon-arrow-r"></text></view>
						<view v-if="choosePacket.num">- ¥ {{choosePacket.num}} <text class="iconfont icon-arrow-r"></text></view>
					</view>
				</view>
				<view>
					<view>配送费</view>
					<view>包邮</view>
				</view>
				<view>
					<view>合计 <text class="red">¥{{allMoney}}</text></view>
				</view>
			</view>
		</view>
		<view class="pay">
			<view>还需要支付 <text>¥{{allMoney}}</text></view>
			<view @tap="pay">支付</view>
		</view>
	</view>

</template>

<script>
	import store from '@/store/index';
	
	export default {
		data() {
			return {
				address: {},
				goods: {},
				preAllMoney: 0,
				allMoney: 0,
				deliveryTime: '',
				choosePacket: {},
				redpackets: store.state.redpackets
			}
		},
		onShow: function() {
			uni.$on("handClickPacket", res => {
			    console.log(res);
				this.choosePacket = res.choosePacket;
			    // 清除监听
			    uni.$off('handClickPacket');
			})
			var address = uni.getStorageSync('address');
			// console.log(address)
			var goods = uni.getStorageSync('shopcarData');
			var goodsdata = [],
				allMoney = 0,
				preAllMoney = 0;
			for (var i = 0; i < address.length; i++) {
				if (address[i].isChecked) {
					this.address = address[i];
				}
			}
			if(!this.address.length){
				for (var i = 0; i < address.length; i++) {
					if (address[i].isdefault) {
						this.address = address[i];
					}
				}
			}
			for (var i = 0; i < goods.length; i++) {
				if (goods[i].checked) {
					goodsdata.push(goods[i]);
					allMoney += (goods[i].price * goods[i].num);
					preAllMoney += (goods[i].pre_price * goods[i].num);
				}
			}
			var useablePacketNum = 0;
			// console.log( this.redpackets)
			for (var i = 0; i < this.redpackets.length; i++) {
				if (allMoney >= this.redpackets[i].sum) {
					useablePacketNum++;
				}
			}
			var subtractMoney = preAllMoney - allMoney;
			if (this.choosePacket.num) {
				allMoney -= this.choosePacket.num;
			}
			this.goods= goodsdata;
			this.useablePacketNum= useablePacketNum;
			this.allMoney= Math.floor(allMoney * 100) / 100;
			this.preAllMoney= Math.floor(preAllMoney * 100) / 100;
			this.subtractMoney= Math.floor(subtractMoney * 100) / 100;
		},
		methods: {
			goAddress() {
				uni.navigateTo({
					url: '/pages/address/address?chooseAddress=true'
				})
			},

			changeTime() {
				var that = this;
				var items = ['10:00-12:00', '12:00-14:00', '14:00-16:00', '16:00-18:00', '18:00-20:00'];
				uni.showActionSheet({
					itemList: items,
					itemColor: '#666',
					success(res) {
						// console.log(1,res.tapIndex)
						that.deliveryTime = items[res.tapIndex];
					},
					fail(res) {
						// console.log(2,res.errMsg)
					}
				})
			},

			goodLists() {
				var goods = JSON.stringify(this.goods);
				uni.navigateTo({
					url: "/pages/goodLists/goodLists?goods=" + goods
				})
			},

			goRedPacket() {
				var id = '0',
					allMoney = this.allMoney;
				if (this.choosePacket.id) {
					id = this.choosePacket.id;
					allMoney += this.choosePacket.num;
				}
				uni.navigateTo({
					url: "/pages/redPacket/redPacket?choosePacket=true&packetId=" + id + "&allMoney=" + allMoney
				})
			},

			pay() {
				var goods = uni.getStorageSync('shopcarData');
				var orders = uni.getStorageSync('orders') ? uni.getStorageSync('orders') : [];
				var goodsdata = [],
					goodsimage = [];
				for (var i = 0; i < goods.length; i++) {
					if (!goods[i].checked) {
						goodsdata.push(goods[i]);
					} else {
						goodsimage.push(goods[i]);
					}
				}
				var date = new Date();
				var date1 = date.getFullYear() + '-' + (date.getMonth() < 9 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)) +
					'-' + date.getDate();
				var date2 = +date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
				orders.unshift({
					id: '00' + (orders.length + 1),
					time: date1 + ' ' + date2,
					type: '3',
					status: '待配送',
					goods: goodsimage,
					goods_nums: goodsimage.length,
					goods_price: this.allMoney,
					pre_price: this.preAllMoney,
					discounts: this.subtractMoney,
					redPacket: this.choosePacket.num,
					ordernum: 'AA113942429',
					address: this.address.detailadd,
					username: this.address.name,
					tellphone: this.address.tel,
					deliveryTime: date1 + ' ' + this.deliveryTime
				});
				uni.setStorageSync('orders', orders);
				uni.setStorageSync('shopcarData', goodsdata);
				wx.showToast({
					title: '支付成功',
					icon: 'success',
					duration: 2000
				})
				setTimeout(function() {
					uni.switchTab({
						url: '/pages/shopcar/shopcar'
					})
				}, 1000)

			}
		}
	}
</script>

<style>
	.container {
		width: 100%;
		background: #eee;
		box-sizing: border-box;
		position: relative;
	}

	.container>view:first-child {
		margin-bottom: 30px;
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
	}

	.container>view:first-child>view {
		padding: 2px 15px;
		border-radius: 10px;
		background: white;
		position: relative;
		margin-bottom: 20px;
	}

	.container>view>.address {
		padding: 20px 15px !important;
	}

	.add {
		font-size: 20px;
		font-weight: 500;
		margin-right: 12px;
	}

	.name {
		font-size: 16px;
		color: #999;
	}

	.address>text:last-child {
		position: absolute;
		right: 15px;
		top: 50%;
		margin-top: -7px;
	}

	.address .iconfont {
		font-size: 18px;
		color: #999;
	}

	.goods>view:first-child {
		display: flex;
		border-bottom: 1px solid #eee;
		padding: 12px 0;
	}

	.goods>view:first-child>view:first-child {
		flex: 1;
		font-size: 17px;
		font-weight: 500;
	}

	.goods>view:first-child>view:last-child {
		flex: 2;
		font-size: 14px;
		color: #ef4486;
		text-align: right;
	}

	.goods>view:first-child>view:last-child .iconfont {
		font-size: 12px;
		color: #ef4486;
	}

	.goods>view:last-child {
		padding: 12px 0;
		display: flex;
	}

	.goods>view:last-child>view:first-child {
		flex: 1;
		overflow: hidden;
		white-space: nowrap;
	}

	.goods image {
		width: 25%;
		height: 100rpx;
		padding: 6rpx;
	}

	.goods>view:last-child>view:last-child {
		width: 130rpx;
		text-align: right;
		font-size: 13px;
		color: #777;
		line-height: 110rpx;
	}

	.goods>view:last-child>view:last-child .iconfont {
		font-size: 13px;
		color: #999;
	}

	.price>view {
		display: flex;
		font-size: 15px;
		color: #666;
		padding: 15px 0;
		border-bottom: 1px solid #eee;
	}

	.price>view:last-child {
		border: 0;
	}

	.container .price>view:last-child>view {
		font-size: 16px;
	}

	.price>view:last-child text {}

	.price>view>view {
		flex: 1;
		font-size: 16px;
	}

	.price>view>view:last-child {
		text-align: right;
		font-size: 14px;
		color: black;
	}

	.price .redPacket>view {
		display: inline-block;
	}

	.price>view .red {
		color: #ef4486 !important;
	}

	.price>view .gray {
		color: #999 !important;
	}

	.price>view .red .iconfont {
		font-size: 12px;
		color: #999;
	}

	.price>view .gray .iconfont {
		font-size: 12px;
		color: #999;
	}

	.pay {
		width: 100%;
		height: 48px;
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		font-size: 16px;
	}

	.pay>view:first-child {
		flex: 3;
		color: #666;
		border-radius: 0;
		background: white;
		line-height: 48px;
		text-indent: 30rpx;
	}

	.pay>view:first-child>text {
		color: #ef4486;
	}

	.pay>view:last-child {
		text-align: right;
		background: #ef4486;
		color: white;
		flex: 1;
		line-height: 48px;
		text-align: center;
	}
</style>
