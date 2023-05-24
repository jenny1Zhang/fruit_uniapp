<template>
	<view class="container">
		<view class="userinfo">
			<button v-if="!username" class='login-button' @tap="goLogin">登录</button>
			<button v-if="!username" class='login-button' @tap="goRegister">注册</button>
			<view v-if="username">
				<image class="photo" src="/static/user.jpg" />
				<view>
					<view class="name"><text class="iconfont icon-yonghu1"></text>{{username}}</view>
					<view class="name"><text class="iconfont icon-shouji"></text>{{phone}}</view>
				</view>
			</view>
		</view>
		<view class="orders">
			<view class="title">
				<view><text class="iconfont icon-quanbudingdan"></text> 我的订单</view>
				<view id="1" @tap="goOrders">全部订单 <text class="iconfont icon-jiantou"></text></view>
			</view>
			<view class="order">
				<view id="2" @tap="goOrders">
					<text class="iconfont icon-daifukuan"></text>
					<view>待付款</view>
				</view>
				<view id="3" @tap="goOrders">
					<text class="iconfont icon-daifahuo"></text>
					<view>待发货</view>
				</view>
				<view id="4" @tap="goOrders">
					<text class="iconfont icon-peisongzhong"></text>
					<view>配送中</view>
				</view>
				<view id="5" @tap="goOrders">
					<text class="iconfont icon-daipingjia"></text>
					<view>待评价</view>
				</view>
			</view>
		</view>
		<view class="operations">
			<view @tap="goAddress">
				<view>收货地址</view>
				<view><text class="iconfont icon-jiantou"></text></view>
			</view>
			<view @tap="goRedPacket">
				<view>我的红包</view>
				<view><text @tap="bindViewTap" class="iconfont icon-jiantou"></text></view>
			</view>
			<view>
				<view>邀请好友</view>
				<view><text class="iconfont icon-jiantou"></text></view>
			</view>
			<view @tap="goService">
				<view>客服与帮助</view>
				<view><text @tap="bindViewTap" class="iconfont icon-jiantou"></text></view>
			</view>
			<view @tap="clear">
				<view>清除缓存</view>
				<view><text @tap="bindViewTap" class="iconfont icon-jiantou"></text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: uni.getStorageSync('username'),
				phone: uni.getStorageSync('phone')
			}
		},
		onShow: function(){
			this.username = uni.getStorageSync('username');
			this.phone = uni.getStorageSync('phone');
			// console.log('show: ',this.username)
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			goRegister() {
				uni.navigateTo({
					url: '/pages/register/register'
				})
			},

			goOrders(e) {
				uni.navigateTo({
					url: '/pages/orders/orders?order_type=' + e.currentTarget.id
				})
			},

			goAddress() {
				uni.navigateTo({
					url: '/pages/address/address'
				})
			},

			goService() {
				uni.navigateTo({
					url: '/pages/service/service'
				})
			},

			goRedPacket() {
				uni.navigateTo({
					url: '/pages/redPacket/redPacket'
				})
			},
			
			// 清除缓存
			clear() {
				uni.clearStorage({
					key: 'userInfo',
					success: function(res) {
						console.log(res.errMsg)
						if (res.errMsg == 'clearStorage:ok') {
							wx.showToast({
								title: '清除成功',
								icon: 'success',
								duration: 1000
							})
						}
					}
				})
				// 获取用户名
				this.username = uni.getStorageSync('username');
				this.phone = uni.getStorageSync('phone');
				
				uni.setStorageSync('orders', [{
					id: '006',
					time: '2019-01-18 11:06:48',
					type: '2',
					status: '待支付',
					goods: [{
							id: '0011',
							name: '海南芒果',
							weight: '约1000g',
							price: 18.9,
							pre_price: 19.9,
							image: '/static/fruit/mango.png',
							text: '果味清香、香甜'
						},
						{
							id: '0012',
							name: '梨子',
							weight: '约900g',
							price: 14.9,
							pre_price: 17.9,
							image: '/static/fruit/pear.png',
							text: '果味清香、香甜'
						},
						{
							id: '0013',
							name: '荔枝',
							weight: '约1000g',
							price: 31.9,
							pre_price: 36.9,
							image: '/static/fruit/lichee.png',
							text: '果味清香、香甜'
						},
						{
							id: '0014',
							name: '菠萝蜜',
							weight: '约400g',
							price: 14.9,
							pre_price: 15.9,
							image: '/static/fruit/jackfruit.png',
							text: '果味清香、香甜'
						},
						{
							id: '0015',
							name: '西梅',
							weight: '约800g',
							price: 21.9,
							pre_price: 24.9,
							image: '/static/fruit/prune.png',
							text: '果味清香、香甜'
						},
						{
							id: '0016',
							name: '石榴',
							weight: '4粒/每粒约250g',
							price: 25.9,
							pre_price: 27.9,
							image: '/static/fruit/guava.png',
							text: '果味清香、香甜'
						}
					],
					goods_nums: 6,
					goods_price: 70.8,
					pre_price: 99.8,
					discounts: 10,
					redPacket: 10,
					ordernum: 'AA113942429',
					address: '太平路33号院三单元502',
					username: 'ZHZ',
					tellphone: '18600987018',
					deliveryTime: '2019-01-18 12:00-14:00',
					arrivedTime: '2019-01-18 13:45'
				}, {
					id: '005',
					time: '2019-01-18 11:06:48',
					type: '3',
					status: '待配送',
					goods: [{
							id: '0012',
							name: '梨子',
							weight: '约900g',
							price: 14.9,
							pre_price: 17.9,
							image: '/static/fruit/pear.png',
							text: '果味清香、香甜'
						},
						{
							id: '0013',
							name: '荔枝',
							weight: '约1000g',
							price: 31.9,
							pre_price: 36.9,
							image: '/static/fruit/lichee.png',
							text: '果味清香、香甜'
						},
						{
							id: '0014',
							name: '菠萝蜜',
							weight: '约400g',
							price: 14.9,
							pre_price: 15.9,
							image: '/static/fruit/jackfruit.png',
							text: '果味清香、香甜'
						}
					],
					goods_nums: 3,
					goods_price: 39.8,
					pre_price: 99.8,
					discounts: 10,
					redPacket: 10,
					ordernum: 'AA113942429',
					address: '太平路33号院三单元502',
					username: 'ZHZ',
					tellphone: '18600987018',
					deliveryTime: '2019-01-18 12:00-14:00',
					arrivedTime: '2019-01-18 13:45'
				}, {
					id: '004',
					time: '2019-01-18 11:06:48',
					type: '4',
					status: '配送中',
					goods: [{
							id: '0001',
							name: '栖霞苹果',
							weight: '约1200g',
							price: 22.9,
							pre_price: 24.9,
							image: '/static/fruit/apple.png',
							text: '果味清香、香甜'
						},
						{
							id: '0003',
							name: '蓝莓',
							weight: '约400g',
							price: 11.9,
							pre_price: 14.9,
							image: '/static/fruit/blueberry.png',
							text: '果味清香、香甜'
						},
						{
							id: '0004',
							name: '冰糖橙',
							weight: '6粒/每粒约120g',
							price: 21.9,
							pre_price: 23.9,
							image: '/static/fruit/tangerine.png',
							text: '果味清香、香甜'
						},
						{
							id: '0005',
							name: '车厘子',
							weight: '约400g',
							price: 39.9,
							pre_price: 45.9,
							image: '/static/fruit/cherry.png',
							text: '果味清香、香甜'
						},
						{
							id: '0006',
							name: '大青枣',
							weight: '约1000g',
							price: 18.9,
							pre_price: 21.9,
							image: '/static/fruit/jujube.png',
							text: '果味清香、香甜'
						},
						{
							id: '0007',
							name: '葡萄',
							weight: '约1500g',
							price: 30.9,
							pre_price: 35.9,
							image: '/static/fruit/grape.png',
							text: '果味清香、香甜'
						},
						{
							id: '0008',
							name: '杨梅',
							weight: '约500g',
							price: 18.9,
							pre_price: 21.9,
							image: '/static/fruit/waxberry.png',
							text: '果味清香、香甜'
						}, {
							id: '0009',
							name: '泰国小菠萝',
							weight: '3粒/每粒约160g',
							price: 16.9,
							pre_price: 19.9,
							image: '/static/fruit/small_ pineapple.png',
							text: '果味清香、香甜'
						}
					],
					goods_nums: 8,
					goods_price: 89.8,
					pre_price: 99.8,
					discounts: 10,
					redPacket: 10,
					ordernum: 'AA113942429',
					address: '太平路33号院三单元502',
					username: 'ZHZ',
					tellphone: '18600987018',
					deliveryTime: '2019-01-18 12:00-14:00',
					arrivedTime: '2019-01-18 13:45'
				}, {
					id: '003',
					time: '2019-01-18 11:06:48',
					type: '5',
					status: '已签收',
					goods: [{
							id: '0002',
							name: '红颜草莓',
							weight: '约800g',
							price: 25.9,
							pre_price: 28.9,
							image: '/static/fruit/strawberry.png',
							text: '果味清香、香甜'
						},
						{
							id: '0006',
							name: '大青枣',
							weight: '约1000g',
							price: 18.9,
							pre_price: 21.9,
							image: '/static/fruit/jujube.png',
							text: '果味清香、香甜'
						}
					],
					goods_nums: 2,
					goods_price: 39.8,
					pre_price: 99.8,
					discounts: 10,
					redPacket: 10,
					ordernum: 'AA113942429',
					address: '太平路33号院三单元502',
					username: 'ZHZ',
					tellphone: '18600987018',
					deliveryTime: '2019-01-18 12:00-14:00',
					arrivedTime: '2019-01-18 13:45'
				}, {
					id: '002',
					time: '2016-09-08 11:06:48',
					type: '5',
					status: '已签收',
					goods: [{
							id: '0001',
							name: '栖霞苹果',
							weight: '约1200g',
							price: 22.9,
							pre_price: 24.9,
							image: '/static/fruit/apple.png',
							text: '果味清香、香甜'
						},
						{
							id: '0002',
							name: '红颜草莓',
							weight: '约800g',
							price: 25.9,
							pre_price: 28.9,
							image: '/static/fruit/strawberry.png',
							text: '果味清香、香甜'
						},
						{
							id: '0003',
							name: '蓝莓',
							weight: '约400g',
							price: 11.9,
							pre_price: 14.9,
							image: '/static/fruit/blueberry.png',
							text: '果味清香、香甜'
						},
						{
							id: '0004',
							name: '冰糖橙',
							weight: '6粒/每粒约120g',
							price: 21.9,
							pre_price: 23.9,
							image: '/static/fruit/tangerine.png',
							text: '果味清香、香甜'
						},
						{
							id: '0005',
							name: '车厘子',
							weight: '约400g',
							price: 39.9,
							pre_price: 45.9,
							image: '/static/fruit/cherry.png',
							text: '果味清香、香甜'
						},
						{
							id: '0006',
							name: '大青枣',
							weight: '约1000g',
							price: 18.9,
							pre_price: 21.9,
							image: '/static/fruit/jujube.png',
							text: '果味清香、香甜'
						},
						{
							id: '0007',
							name: '葡萄',
							weight: '约1500g',
							price: 30.9,
							pre_price: 35.9,
							image: '/static/fruit/grape.png',
							text: '果味清香、香甜'
						},
						{
							id: '0008',
							name: '杨梅',
							weight: '约500g',
							price: 18.9,
							pre_price: 21.9,
							image: '/static/fruit/waxberry.png',
							text: '果味清香、香甜'
						}, {
							id: '0009',
							name: '泰国小菠萝',
							weight: '3粒/每粒约160g',
							price: 16.9,
							pre_price: 19.9,
							image: '/static/fruit/small_ pineapple.png',
							text: '果味清香、香甜'
						}
					],
					goods_nums: 9,
					goods_price: 99.8,
					pre_price: 99.8,
					discounts: 10,
					redPacket: 10,
					ordernum: 'AA113942429',
					address: '太平路33号院三单元502',
					username: 'ZHZ',
					tellphone: '18600987018',
					deliveryTime: '2019-01-18 12:00-14:00',
					arrivedTime: '2019-01-18 13:45'
				}, {
					id: '001',
					time: '2016-07-10 11:06:48',
					type: '5',
					status: '已签收',
					goods: [{
							id: '0011',
							name: '海南芒果',
							weight: '约1000g',
							price: 18.9,
							pre_price: 19.9,
							image: '/static/fruit/mango.png',
							text: '果味清香、香甜'
						},
						{
							id: '0013',
							name: '荔枝',
							weight: '约1000g',
							price: 31.9,
							pre_price: 36.9,
							image: '/static/fruit/lichee.png',
							text: '果味清香、香甜'
						},
						{
							id: '0014',
							name: '菠萝蜜',
							weight: '约400g',
							price: 14.9,
							pre_price: 15.9,
							image: '/static/fruit/jackfruit.png',
							text: '果味清香、香甜'
						},
						{
							id: '0015',
							name: '西梅',
							weight: '约800g',
							price: 21.9,
							pre_price: 24.9,
							image: '/static/fruit/prune.png',
							text: '果味清香、香甜'
						},
						{
							id: '0016',
							name: '石榴',
							weight: '4粒/每粒约250g',
							price: 25.9,
							pre_price: 27.9,
							image: '/static/fruit/guava.png',
							text: '果味清香、香甜'
						}
					],
					goods_nums: 5,
					goods_price: 39.5,
					pre_price: 99.8,
					discounts: 10,
					redPacket: 10,
					ordernum: 'AA113942429',
					address: '太平路33号院三单元502',
					username: 'ZHZ',
					tellphone: '18600987018',
					deliveryTime: '2019-01-18 12:00-14:00',
					arrivedTime: '2019-01-18 13:45'
				}]);
				uni.setStorageSync('address', [{
					id: '01',
					add: '北京市海淀区太平路',
					detailadd: '太平路48号院一单元601太平路48号院一单元601',
					name: 'ZHZ1',
					sex: '女士',
					tel: '18900890568',
					label: '家',
					isdefault: true
				}, {
					id: '02',
					add: '北京市海淀区太平路',
					detailadd: '太平路33号院三单元502',
					name: 'ZHZ2',
					sex: '女士',
					tel: '18933440568',
					label: '公司',
					isdefault: false
				}, {
					id: '03',
					add: '北京市海淀区太平路',
					detailadd: '太平路18号院四单元601',
					name: 'ZHZ3',
					sex: '女士',
					tel: '18900108968',
					label: '父母家',
					isdefault: false
				}, {
					id: '04',
					add: '北京市海淀区太平路',
					detailadd: '太平路13号院五单元601',
					name: 'ZHZ4',
					sex: '先生',
					tel: '18600790568',
					label: '学校',
					isdefault: false
				}]);
			}
		}
	}
</script>

<style>
	@import "/static/fonts/iconfont.css";

	.container {
		width: 100%;
		/* height: 100%; */
		padding: 10px 0;
		background: #f3f3f3;
	}

	.userinfo {
		width: 100%;
		padding: 50rpx 0;
		background: white;
		margin-bottom: 20px;
	}

	.userinfo>button {
		width: 28%;
		display: inline-block;
		margin-left: 14%;
	}

	.userinfo>view {
		display: flex;
	}

	.userinfo .photo {
		margin-left: 10%;
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
	}

	.userinfo .name {
		margin-left: 30px;
		height: 40px;
		line-height: 40px;
		font-size: 18px;
		color: #666;
	}
	.userinfo .name .iconfont{
		font-size: 20px;
		margin-right: 8px;
	}

	.orders {
		width: 100%;
		padding: 26rpx 30rpx;
		box-sizing: border-box;
		background: white;
		margin-bottom: 20px;
	}

	.orders>.title {
		display: flex;
		width: 100%;
		padding: 20rpx 0;
		border-bottom: 2px solid #f3f3f3;
	}

	.orders>.title>view {
		flex: 1;
		font-size: 16px;
	}

	.orders>.title>view:first-child .iconfont {
		color: #1e905f;
		padding-right: 5px;
	}

	.orders>.title>view:last-child {
		text-align: right;
		font-size: 14px;
		color: #aaa;
	}

	.orders>.title>view:last-child .iconfont {
		font-size: 12px;
		padding-left: 3px;
	}

	.orders>.order {
		display: flex;
		font-size: 16px;
	}

	.orders>.order>view {
		flex: 1;
		text-align: center;
		color: #1e905f;
		padding: 20rpx 0 10rpx;
	}

	.orders>.order>view>view {
		padding-top: 5rpx;
	}

	.orders>.order>view .iconfont {
		font-size: 22px;
		color: #1e905f;
	}

	.operations {
		background: white;
		width: 100%;
		font-size: 16px;
		color: #666;
	}

	.operations>view {
		display: flex;
		padding: 30rpx;
		border-bottom: 1px solid #eee;
	}

	.operations>view>view {
		flex: 1;
	}

	.operations>view>view:last-child {
		text-align: right;
	}
</style>
