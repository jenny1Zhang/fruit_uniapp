<template>
	<view class="container">
		<view v-if="!goodsdata.length" class="nogoods">暂无商品</view>
		<!-- <view class="shopcarnum">{{goodsdata.length}}</view> -->
		<view class="scrollbox" v-if="goodsdata.length">
			<view class="title">
				<text class="iconfont icon-shanchu" @tap="deleteAll"></text>
			</view>
			<view class="goods">
				<checkbox-group @change="changecheck">
					<view class="good" v-for="(item,index) in goodsdata" :key="index" :id="item.id">
						<view>
							<checkbox :value="item.id" :checked="item.checked" />
							<image :id="item.id" @tap="goDetail" mode="aspectFit" class="photo" :src="item.image" />
						</view>
						<view>
							<view class="name">{{item.name}}-{{item.weight}}</view>
							<view class="text">{{item.text}}</view>
							<view class="operation">
								<view class="price">
									<view>¥{{item.price}}</view>
									<view>¥{{item.pre_price}}</view>
								</view>
								<view class="add">
									<view :id="index" @tap="add">+</view>
									<view>{{item.num}}</view>
									<view :id="index" @tap="reduce">-</view>
								</view>
							</view>
						</view>
					</view>
				</checkbox-group>
			</view>
		</view>

		<view class="payment">
			<view>
				<checkbox-group @change="changeallcheck">
					<checkbox value="allcheck" :checked="allchecked" />全选
				</checkbox-group>
				<view>合计:<view>¥{{allMoney}}</view>（不含运费）</view>
			</view>
			<view>
				<view @tap="goPayment">去结算</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsdata: uni.getStorageSync('shopcarData'),
				allMoney: 0,
				allchecked: true
			}
		},
		onShow() {
			var data = uni.getStorageSync('shopcarData');
			// console.log('shopcar_goods',data)
			var allMoney = 0;
			var allchecked = true;
			for (var i = 0; i < data.length; i++) {
				if (!data[i].checked) {
					allchecked = false;
				} else {
					allMoney += (data[i].price * data[i].num);
				}
			}
			if (!data || data.length == 0) {
				allchecked = false
			}
			this.goodsdata = data;
			this.allMoney = Math.floor(allMoney * 100) / 100;
			this.allchecked = allchecked;
		},
		methods: {
			goDetail(e) {
				uni.navigateTo({
					url: '/pages/goodDetail/goodDetail?good_id=' + e.currentTarget.id
				})
			},

			changecheck(e) {
				var checkdata = e.detail.value;
				var goodsdata = this.goodsdata;
				var allMoney = 0;
				var allchecked;
				// console.log(checkdata)
				if (checkdata.length === goodsdata.length) {
					allchecked = true;
				} else {
					allchecked = false;
				}
				for (var j = 0; j < goodsdata.length; j++) {
					goodsdata[j].checked = false;
				}
				for (var i = 0; i < checkdata.length; i++) {
					for (var j = 0; j < goodsdata.length; j++) {
						if (checkdata[i] == goodsdata[j].id) {
							// console.log(checkdata[i],goodsdata[j].id,goodsdata[j].price)
							allMoney += (goodsdata[j].price * goodsdata[j].num);
							goodsdata[j].checked = true;
						}
					}
				}
				this.goodsdata = goodsdata;
				this.allMoney = Math.floor(allMoney * 100) / 100;
				this.allchecked = allchecked;
				uni.setStorageSync('shopcarData', goodsdata);
			},

			changeallcheck(e) {
				var allcheck = e.detail.value.length;
				var goodsdata = this.goodsdata;
				var allMoney = 0;
				var allchecked;
				// console.log(allcheck)
				if (allcheck) {
					for (var j = 0; j < goodsdata.length; j++) {
						goodsdata[j].checked = true;
						allMoney += (goodsdata[j].price * goodsdata[j].num);
					}
				} else {
					for (var j = 0; j < goodsdata.length; j++) {
						goodsdata[j].checked = false;
					}
				}
				// console.log(goodsdata)
				// console.log(allcheck)
				if(allcheck>0){
					allcheck=true
				}else{
					allcheck=false
				}
				this.goodsdata = goodsdata;
				this.allMoney = Math.floor(allMoney * 100) / 100;
				this.allchecked = allcheck;
				uni.setStorageSync('shopcarData', goodsdata);
			},

			add(e) {
				var index = e.currentTarget.id;
				var goodsdata = this.goodsdata;
				var allMoney = this.allMoney;
				// console.log(index,goodsdata[index])
				goodsdata[index].num += 1;
				if (goodsdata[index].checked) {
					// console.log(typeof allMoney,typeof goodsdata[index].price)
					allMoney += goodsdata[index].price;
				}
				this.goodsdata = goodsdata;
				this.allMoney = Math.floor(allMoney * 100) / 100;
				uni.setStorageSync('shopcarData', goodsdata);
			},

			reduce(e) {
				var index = e.currentTarget.id;
				var goodsdata = this.goodsdata;
				var allMoney = this.allMoney;
				var that = this;
				// console.log('reduce',index,goodsdata[index])
				if (goodsdata[index].num > 1) {
					goodsdata[index].num = goodsdata[index].num - 1;
					if (goodsdata[index].checked) {
						allMoney = allMoney - goodsdata[index].price;
					}
					this.goodsdata = goodsdata;
					this.allMoney = Math.floor(allMoney * 100) / 100;
					uni.setStorageSync('shopcarData', goodsdata);
				} else {
					wx.showModal({
						title: '提示',
						content: '确定删除该水果吗？',
						success(res) {
							if (res.confirm) {
								if (goodsdata[index].checked) {
									allMoney = allMoney - goodsdata[index].price;
								}
								goodsdata.splice(index, 1);
								that.goodsdata = goodsdata;
								that.allMoney = Math.floor(allMoney * 100) / 100;
								uni.setStorageSync('shopcarData', goodsdata);
							} else if (res.cancel) {
								// console.log('用户点击取消')
							}
						}
					})
				}
			},

			deleteAll() {
				var that = this;
				wx.showModal({
					title: '提示',
					content: '确定清空购物车吗？',
					success(res) {
						if (res.confirm) {
							that.goodsdata = [];
							that.allMoney = 0;
							uni.setStorageSync('shopcarData', []);
						} else if (res.cancel) {
							// console.log('用户点击取消')
						}
					}
				})
			},

			goPayment() {
				var data = this.goodsdata;
				for (var i = 0; i < data.length; i++) {
					if (data[i].checked) {
						uni.navigateTo({
							url: '/pages/payment/payment'
						})
						return;
					}
				}
				wx.showToast({
					title: '请选择商品',
					icon: 'none',
					duration: 1000
				})
			}
		}
	}
</script>

<style>
	@import "/static/fonts/iconfont.css";

	.container {
		width: 100%;
		background: #f3f3f3;
		padding: 0;
		background: white;
	}

	.nogoods {
		text-align: center;
		width: 100%;
		font-size: 18px;
		padding-top: 30px;
	}

	.scrollbox {
		margin-bottom: 60px;
	}

	/* .shopcarnum{
	  position: absolute;
	  left: 550rpx;
	  bottom: -20rpx;
	  width: 20px;
	  height: 20px;
	  background: red;
	  color: white;
	  text-align: center;
	  line-height: 20px;
	  z-index: 999;
	  border-radius: 50%;
	} */

	.title {
		width: 100%;
		box-sizing: border-box;
		background: white;
		text-align: right;
		padding: 5rpx 20rpx;
	}

	.title .iconfont {
		font-size: 24px;
	}

	.goods {}

	.good {
		background: white;
		display: flex;
		width: 690rpx;
		padding: 30rpx 30rpx;
		margin-bottom: 10px;
	}

	.good>view:first-child {
		width: 300rpx;
		display: flex;
		line-height: 84px;
	}

	.comfirm {}

	checkbox .wx-checkbox-input {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
	}

	checkbox .wx-checkbox-input.wx-checkbox-input-checked {
		background: #01912f;
	}

	checkbox .wx-checkbox-input.wx-checkbox-input-checked::before {
		width: 32rpx;
		height: 32rpx;
		line-height: 32rpx;
		text-align: center;
		font-size: 26rpx;
		color: #fff;
		background: transparent;
		transform: translate(-50%, -50%) scale(1);
		-webkit-transform: translate(-50%, -50%) scale(1);
	}

	.photo {
		width: 180rpx;
		height: 180rpx;
		margin-top: 4px;
	}

	.good>view:last-child {
		width: 450rpx;
	}

	.name {
		font-size: 16px;
	}

	.text {
		font-size: 12px;
		color: #999;
		margin-bottom: 20px;
	}

	.operation {
		display: flex;
		font-size: 16px;
	}

	.price {
		flex: 1;
		display: flex;
		color: #ed9275;
	}

	.price>view:last-child {
		text-decoration: line-through;
		font-size: 12px;
		color: #999;
		padding-top: 4px;
	}

	.add {
		flex: 1;
		display: flex;
		flex-direction: row-reverse;
	}

	.add>view {
		width: 60rpx;
		height: 55rpx;
		text-align: center;
		line-height: 55rpx;
		background: white;
		border-top: 1px solid #f3f3f3;
		border-bottom: 1px solid #f3f3f3;
	}

	.add>view:last-child {
		background: #f3f3f3;
		font-size: 18px;
	}

	.add>view:first-child {
		background: #f3f3f3;
		color: #089330;
		font-size: 18px;
	}

	.payment {
		width: 710rpx;
		/* height: 50px; */
		padding: 30rpx;
		background: white;
		position: fixed;
		left: 0;
		/* bottom: 0px; */
		/* bottom: 46px; */
		bottom: var(--window-bottom);
		display: flex;
	}

	.payment>view:first-child {
		flex: 2;
		display: flex;
		font-size: 14px;
		/* height: 90rpx; */
		line-height: 80rpx;
	}

	.payment>view:first-child>view {
		font-size: 12px;
		padding-left: 5px;
	}

	.payment>view:first-child>view>view {
		display: inline-block;
		color: #ed9275;
		font-size: 14px;
	}

	.payment>view:last-child {
		/* flex: 1; */
		text-align: right;
	}

	.payment>view:last-child>view {
		display: inline-block;
		font-size: 16px;
		color: white;
		background: #039f58;
		width: 180rpx;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		border-radius: 4px;
	}
</style>
