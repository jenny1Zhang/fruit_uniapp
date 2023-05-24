<template>
	<view class="container">
		<view class="addressbox">
			<view class="scrollbox">
				<radio-group class="radio-group" @change="changeaddress">
					<view class="addbox" v-for="(item,index) in address" :key="index" :id="item.id">
						<view class="radiobox" v-if="isChoose && isHadChoose">
							<radio :value="item.id" :checked="item.isChecked" />
						</view>
						<view class="radiobox" v-if="isChoose && !isHadChoose">
							<radio :value="item.id" :checked="item.isdefault" />
						</view>
						<view class="add_left">
							<view class="add">{{item.detailadd}} <text v-if="item.isdefault">默认地址</text>
								<text class="label" v-if="item.label!=0">{{item.label}}</text></view>
							<view class="name">{{item.name}} {{item.tel}}</view>
						</view>
						<view class="add_right" :id="item.id" @tap="goEditAddress">
							<text class="iconfont icon-xiugai"></text>
						</view>
					</view>
				</radio-group>
			</view>
			<view class="addaddress">
				<view @tap="goAddAddress">新增收获地址</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				isChoose: false,
				isHadChoose: false,
				address: uni.getStorageSync('address')
			}
		},
		onLoad: function(options) {
			console.log('load')
			if (options && options.chooseAddress) {
				this.isChoose= true;
			}
		},
		onShow: function(){
			console.log('show')
			this.address= uni.getStorageSync('address');
			for(var i=0; i<this.address.length; i++){
				if(this.address[i].isChecked == true){
					this.isHadChoose = true;
				}
			}
		},
		methods: {
			goAddAddress() {
				uni.navigateTo({
					url: '/pages/addAddress/addAddress'
				})
			},

			goEditAddress(e) {
				uni.navigateTo({
					url: '/pages/editAddress/editAddress?id=' + e.currentTarget.id
				})
			},
			// 结算时选择地址
			changeaddress(e) {
				// console.log(e)
				var id = e.detail.value;
				var address = this.address;
				for (var i = 0; i < address.length; i++) {
					if (address[i].id == id) {
						address[i].isChecked = true;
					}else{
						address[i].isChecked = false;
					}
				}
				console.log(address)
				uni.setStorageSync('address', address);
				// var pages = getCurrentPages();
				// console.log('navigateBack:',pages)
				// var beforePage = pages[pages.length - 2];
				// console.log('navigateBack:',pages.pop())
				uni.navigateBack({
					// success: function() {
					// 	beforePage.onLoad();
					// }
				})
			}
		}
	}
</script>

<style>
	@import "/static/fonts/iconfont.css";

	.container {
		width: 100%;
		height: 100%;
		padding: 20rpx 0;
		/* background: #eee; */
	}

	.addressbox {
		width: 100%;
	}

	.scrollbox {
		background: white;
		padding: 0 40rpx;
		box-sizing: border-box;
		margin-bottom: 150rpx;
	}

	.addbox {
		border-bottom: 1px solid #eee;
		padding: 16px 0;
		display: flex;
		position: relative;
	}

	.radiobox {
		margin-right: 22px;
	}

	.addbox radio {
		position: absolute;
		top: 50%;
		left: -5px;
		margin-top: -20rpx;
	}

	radio .wx-radio-input {
		height: 40rpx;
		width: 40rpx;
		border-radius: 50%;
	}

	.add_left {
		flex: 1;
	}

	.add {
		font-size: 16px;
	}

	.add text {
		font-size: 12px;
		color: #ef4486;
		margin-right: 10rpx;
	}

	.add .label {
		border: 1px solid #ef4486;
		color: #ef4486;
		font-size: 10px;
		padding: 0 2px;
		opacity: .5;
	}

	.name {
		font-size: 13px;
		color: #999;
	}

	.add_right {
		width: 38px;
		position: relative;
	}

	.add_right text {
		position: absolute;
		right: 10px;
		top: 50%;
		margin-top: -8px;
	}

	.addaddress {
		width: 100%;
		background: white;
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 5%;
	}

	.addaddress view {
		background: #ef4486;
		color: white;
		text-align: center;
		width: 90%;
		padding: 20rpx 0;
		font-size: 16px;
		border-radius: 3px;
	}
</style>
