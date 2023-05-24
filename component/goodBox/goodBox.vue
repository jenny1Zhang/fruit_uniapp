<template>
	<view>
		<view class="goodbox">
			<view class="seckill" v-for="(item,index) in data" :key="index">
				<view :id="item.id" @tap="goDetail" class="photo">
					<image class="img" :src="item.image" mode="aspectFit" />
				</view>
				<view class="text">
					<view :id="item.id" @tap="goDetail">{{item.name}}-{{item.weight}}</view>
					<view>{{item.text}}</view>
					<view class="price">
						<view>
							<view>¥ {{item.price}}</view>
							<view>¥ {{item.pre_price}}</view>
						</view>
						<view :id="item.id" @tap="addGood"><text class="iconfont icon-zengjia"></text></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'GoodBox',
		props: {
			data: Array
		},
		data() {
			return {

			};
		},
		watch: {

		},
		mounted() {

		},
		methods: {
			goDetail(e) {
				// console.log(1111,e)
				// console.log(1111,e.currentTarget.id)
				uni.navigateTo({
					url: '/pages/goodDetail/goodDetail?good_id=' + e.currentTarget.id
				})
			},
			// 加购物车
			addGood(e) {
				var id = e.currentTarget.id;
				var shopcardata = uni.getStorageSync('shopcarData');
				console.log(uni.getStorageSync('shopcarData'))
				if (shopcardata) {
					console.log(1)
					var flag = false;
					for (var i = 0; i < shopcardata.length; i++) {
						if (id === shopcardata[i].id) {
							flag = true;
							shopcardata[i].num += 1;
						}
					}
					if (!flag) {
						var data;
						for (var i = 0; i < this.data.length; i++) {
							if (id === this.data[i].id) {
								data = this.data[i];
								break;
							}
						}
						data.num = 1;
						data.checked = true;
						shopcardata.push(data);
					}
					uni.setStorageSync('shopcarData', shopcardata);
				} else {
					console.log(2)
					var data;
					for (var i = 0; i < this.data.length; i++) {
						if (id === this.data[i].id) {
							data = this.data[i];
							break;
						}
					}
					data.num = 1;
					data.checked = true;
					uni.setStorageSync('shopcarData', [data])
				}
				wx.showToast({
					title: '添加购物车成功',
					icon: 'success',
					duration: 1000
				})
			}
		}
	}
</script>

<style>
	@import "/static/fonts/iconfont.css";

	.seckill {
		display: flex;
		border-bottom: 1px solid #eee;
	}

	.seckill .photo {
		flex: 1;
		text-align: center;
	}

	.seckill .photo .img {
		width: 200rpx;
		height: 200rpx;
	}

	.seckill .text {
		flex: 2;
		box-sizing: border-box;
		font-size: 14px;
		color: #777;
		padding: 3px 0px 10px 20px;
	}

	.text>view:first-child {
		font-size: 16px;
		font-weight: 500;
		color: black;
		padding: 5px 0;
	}

	.price {
		display: flex;
		margin-top: 5px;
	}

	.price>view:first-child {
		flex: 6;
		display: flex;
		padding-top: 5px;
	}

	.price>view:first-child>view:first-child {
		font-size: 16px;
		color: #dc9f82;
		flex: 1;
	}

	.price>view:first-child>view:last-child {
		padding-top: 2px;
		text-decoration: line-through;
		font-weight: 300;
		flex: 1;
	}

	.price>view:last-child {
		flex: 1;
		text-align: right;
		font-size: 20px;
		font-weight: 700;
		padding-right: 40rpx;
		box-sizing: border-box;
	}

	.price>view:last-child text {
		width: 42rpx;
		height: 42rpx;
		text-align: center;
		line-height: 42rpx;
		background: #00a155;
		color: white;
		border-radius: 50%;
	}
</style>
