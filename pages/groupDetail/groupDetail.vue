<template>
	<view class="container">
		<view>
			<view class="scrollbox">
				<view class="swiperbox">
					<swiper indicator-dots="true" autoplay="true" interval="3000" duration="500" indicator-color="#ccc">
						<block>
							<swiper-item>
								<image :src="gooddata.image" mode="aspectFit" />
							</swiper-item>
						</block>
						<block>
							<swiper-item>
								<image :src="gooddata.image" mode="aspectFit" />
							</swiper-item>
						</block>
						<block>
							<swiper-item>
								<image :src="gooddata.image" mode="aspectFit" />
							</swiper-item>
						</block>
					</swiper>
				</view>
				<view class="namebox">
					<view class="name">{{gooddata.name}}-{{gooddata.weight}}</view>
					<view class="text">{{gooddata.text}}</view>
					<view class="price">
						<view>¥{{gooddata.price}}</view>
						<view>¥{{gooddata.pre_price}}</view>
					</view>
					<view class="zhiliang">
						<view><text class="iconfont icon-zhiliang"></text> 品质保障</view>
						<view><text class="iconfont icon-zhiliang"></text> 坏果包退换</view>
						<view><text class="iconfont icon-zhiliang"></text> 新鲜水果</view>
					</view>
				</view>
				<view class="place">
					<view>
						<view>产地</view>
						<view>广西</view>
					</view>
					<view>
						<view>储存</view>
						<view>常温</view>
					</view>
				</view>
				<view class="photo">
					<view>图文详情</view>
					<image :src="gooddata.image" mode="aspectFit" />
					<image :src="gooddata.image" mode="aspectFit" />
					<image :src="gooddata.image" mode="aspectFit" />
				</view>
			</view>
		</view>
		<view class="addshopcar">
			<view @tap="goShopcar">
				<text class="iconfont icon-gouwuche"></text>
			</view>
			<view class="options">
				<view @tap="addShopcar">
					<view>¥{{gooddata.price}}</view>
					<view>加入购物车</view>
				</view>
				<view @tap="groupbook">
					<view>¥{{gooddata.price+10}}</view>
					<view>发起拼团</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import store from '@/store/index';

	export default {
		data() {
			return {
				seckillData: store.state,
				gooddata: {},
				goodId: ''
			}
		},
		onLoad: function(e) {
			// console.log(e)
			this.goodId = e.good_id;
			var data = this.seckillData.seckillList[0].concat(this.seckillData.seckillList[1])
			for (var i = 0; i < data.length; i++) {
				if (e.good_id == data[i].id) {
					this.gooddata = data[i]
					// console.log(this.data.gooddata)
					return;
				}
			}
		},
		methods: {
			goShopcar() {
				uni.switchTab({
					url: '/pages/shopcar/shopcar'
				})
			},

			onShareAppMessage(res) {
				return {
					title: '水果商城',
					path: '/pages/groupbookdetail/groupbookdetail?good_id=' + goodId
				}
			},

			addShopcar() {
				var id = this.goodId;
				var shopcardata = uni.getStorageSync('shopcarData');
				if (shopcardata) {
					var flag = false;
					for (var i = 0; i < shopcardata.length; i++) {
						if (id === shopcardata[i].id) {
							flag = true;
							shopcardata[i].num += 1;
						}
					}
					if (!flag) {
						var data = this.gooddata;
						data.num = 1;
						data.checked = true;
						shopcardata.push(data);
					}
					uni.setStorageSync('shopcarData', shopcardata);
				} else {
					var data = this.gooddata;
					data.num = 1;
					data.checked = true;
					uni.setStorageSync('shopcarData', [data])
				}
				uni.showToast({
					title: '添加购物车成功',
					icon: 'success',
					duration: 1000
				})
			},
			
			groupbook() {
				console.log('groupbook')
			}
		}
	}
</script>

<style>
	@import "/static/fonts/iconfont.css";
	.container {
		width: 100%;
		height: 100%;
		background: #f3f3f3;
		padding: 0;
		position: relative;
	}

	.container .scrollbox {
		margin-bottom: 50px;
	}

	.swiperbox {
		width: 100%;
		padding-top: 10px;
	}

	.swiperbox {
		/* margin-bottom: 20px; */
		box-sizing: border-box;
		background: white;
	}

	.swiperbox image {
		width: 100%;
		height: 150px;
	}

	.namebox {
		background: white;
		width: 690rpx;
		padding: 30rpx 30rpx;
		font-size: 14px;
		color: #777;
		margin-bottom: 10px;
	}

	.name {
		font-size: 18px;
		color: black;
		padding: 5px 0;
		font-weight: 600;
	}

	.price {
		display: flex;
		padding: 5px 0 18px;
		border-bottom: 1px solid #eee;
	}

	.price>view:first-child {
		font-size: 16px;
		color: #e3998e;
		margin-right: 20rpx;
	}

	.price>view:last-child {
		text-decoration: line-through;
		margin-top: 2px;
	}

	.zhiliang {
		padding-top: 7px;
		display: flex;
		font-size: 12px;
	}

	.zhiliang .iconfont {
		font-size: 12px;
		color: #e3998e;
	}

	.zhiliang>view {
		margin-right: 20rpx;
	}

	.place {
		width: 670rpx;
		display: flex;
		padding: 30rpx 40rpx;
		background: white;
		text-align: left;
		margin-bottom: 10px;
	}

	.place>view {
		margin-right: 20px;
	}

	.place>view>view:first-child {
		font-size: 12px;
		color: #777;
	}

	.place>view>view:last-child {
		font-size: 14px;
		color: #333;
	}

	.photo {
		background: white;
		width: 100%;
	}

	.photo>view {
		font-size: 16px;
		padding: 20rpx;
	}

	.photo>image {
		width: 600rpx;
		margin: 20rpx 75rpx;
		height: 500rpx;
	}

	.addshopcar {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 50px;
		background: white;
		box-sizing: border-box;
		display: flex;
		border-top: 2px solid #eee;
	}

	.addshopcar>view:first-child {
		width: 150rpx;
		height: 100%;
		text-align: center;
		line-height: 50px;
	}

	.addshopcar>view:first-child .iconfont {
		font-size: 22px;
		color: #888;
	}

	.options {
		flex: 1;
		padding: 2px 10px;
		box-sizing: border-box;
		display: flex;
	}

	.options>view {
		flex: 1;
		text-align: center;
	}

	.options>view:first-child {
		background: #fcedf2;
		color: #d74f8f;
		border-radius: 6px 0 0 6px;
	}

	.options>view:last-child {
		background: #ff384d;
		color: white;
		border-radius: 0 6px 6px 0;
	}

	.options>view>view:first-child {
		font-size: 16px;
		padding-top: 4px;
	}

	.options>view>view:last-child {
		font-size: 12px;
		margin-top: -4px;
	}
</style>
