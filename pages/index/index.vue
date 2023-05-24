<template>
	<view class="container">
		<view class="topbox">
			<view class="address" @tap="chooseAdd">{{address}}</view>
			<view class="scan">
				<text class="iconfont icon-saoma" @tap="getScan"></text>
			</view>
		</view>
		<view class="searchbox">
			<view class="inputbox">
				<input type="text" placeholder="输入水果名称" @confirm="toSearch" />
				<text class="iconfont icon-sousu" @tap="toSearch"></text>
			</view>
		</view>
		<view class="swiperbox">
			<swiper indicator-dots="true" autoplay="true" interval="3000" duration="500" indicator-color="#ccc">
				<!-- <block wx:for="{{swiperList}}" wx:key="{{index}}"> -->
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item" class="slide-image" mode="aspectFill" />
				</swiper-item>
				<!-- </block> -->
			</swiper>
		</view>
		<view class="seckillbox">
			<view class="title">
				<view>精选水果</view>
				<view @tap="goMore">查看更多<text class="iconfont icon-jiantou"></text></view>
			</view>
			<!-- <goodBox></goodBox> -->
			<goodBox :data="seckillList" @myevent="addGood"></goodBox>
		</view>


		<!-- <text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link> -->
	</view>
</template>

<script>
	import store from '@/store/index';
	import GoodBox from '@/component/goodBox/goodBox';

	export default {
		components: {
			GoodBox
		},
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				address: "请选择地区",
				canIUse: wx.canIUse('button.open-type.getUserInfo'),
				// swiperList: [
				// 	'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
				// 	'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
				// 	'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
				// ],
				swiperList: [
					'/static/fruit/cherry.png',
					'/static/fruit/jujube.png',
					'/static/fruit/prune.png',
				],
				pageindex: 0,
				seckillData: store.state,
				seckillList: store.state.seckillList[0]
			}
		},
		onShow() {
			console.log('show')
			uni.pageScrollTo({
			    scrollTop: 0,  //距离页面顶部的距离
			    duration: 0
			});
		},
		// onPageScroll(res){
		// 	console.log(res)
		// },
		methods: {
			//选择地址
			chooseAdd() {
				// console.log(store.state.seckillList[0])
				var that = this;
				// wx.chooseLocation({
				// 	success: function(res) {
				// 		// console.log(res)
				// 		that.address = res.name
				// 	}
				// })
				uni.chooseLocation({
					success: function(res) {
						console.log(res);
						that.address = res.name
					}
				});
			},
			//扫码
			getScan() {
				// uni.scanCode({
				//     success: function (res) {
				//         console.log('条码类型：' + res.scanType);
				//         console.log('条码内容：' + res.result);
				//     }
				// });
				wx.scanCode({
					success(res) {
						console.log(res)
					}
				})
			},
			//打开搜索页
			toSearch() {
				this.$router.push({
					path: `search/search`
				})
				// this.$router.push({ path: `/ShopDetails/${id}` })
				// await this.$emit('search', {
				// 	searchValue: this.searchValue
				// });
			},
			//下拉刷新
			async onPullDownRefresh() {
				// console.log('pulldown')
				setTimeout(function() {
					wx.stopPullDownRefresh();
				}, 1000)
			},
			//上拉加载
			async onReachBottom() {
				console.log('reachbottom');
				if (this.pageindex < 1) {
					var that = this;
					wx.showLoading({
						title: '正在加载',
					});
					// console.log(that.pageindex,that.seckillData.seckillList.length)
					var index = that.pageindex + 1;
					if (that.seckillData.seckillList.length > index) {
						var data = that.seckillList.concat(that.seckillData.seckillList[index]);
						setTimeout(function() {
							that.pageindex = index;
							that.seckillList = data;
							wx.hideLoading();
						}, 1000);
					} else {
						setTimeout(function() {
							wx.hideLoading()
						}, 1000);
					}
				}
			},
			//查看更多
			goMore(){
			    uni.switchTab({
			      url: '/pages/classify/classify'
			    })
			}
		}
	}
</script>

<style>
	@import "/static/fonts/iconfont.css";

	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		box-sizing: border-box;
	}

	view {
		width: 100%;
	}

	.topbox {
		width: 660rpx;
		display: flex;
		padding: 0 0 10px;
		background: white;
	}

	.topbox .address {
		flex: 3;
		color: aqua;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.topbox .scan {
		flex: 1;
		text-align: right;
	}

	.searchbox {
		width: 100%;
		/* padding-left:37.5rpx; */
		box-sizing: border-box;
		margin-bottom: 13px;
		background: white;
	}

	.inputbox {
		width: 675rpx;
		height: 40px;
		box-sizing: border-box;
		background: #eee;
		padding-left: 50rpx;
		border-radius: 20rpx;
	}

	.inputbox input {
		height: 40px;
		width: 85%;
		float: left;
	}

	.inputbox .iconfont {
		line-height: 40px;
	}

	.inputbox .iconfont:before {
		font-size: 20px;
	}

	.swiperbox {
		/* box-sizing: border-box; */
		background: white;
	}

	.swiperbox swiper {
		width: 100%;
		height: 40vw;
	}

	.swiperbox image {
		width: 100%;
		height: 40vw;
	}

	.seckillbox {
		background: #f3f3f3;
		padding-top: 10px;
		background: white;
	}

	.seckillbox .title {
		box-sizing: border-box;
		display: flex;
		padding: 5px;
		font-size: 16px;
		color: black;
		font-weight: 600;

	}

	.seckillbox .title view:last-child {
		color: #777;
		font-size: 13px;
		font-weight: 400;
		text-align: right;
	}

	.seckill {
		display: flex;
		border-bottom: 1px solid #eee;
	}

	.seckill .photo {
		flex: 1;
		text-align: center;
	}

	.seckill .photo image {
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
		flex: 3;
		display: flex;
		padding-top: 5px;
	}

	.price>view:first-child>view:first-child {
		font-size: 16px;
		color: #dc9f82;
	}

	.price>view:first-child>view:last-child {
		padding-top: 2px;
		text-decoration: line-through;
		font-weight: 300;
	}

	.price>view:last-child {
		flex: 1;
		text-align: right;
		font-size: 20px;
		font-weight: 700;
		padding-right: 30px;
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
