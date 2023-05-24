<template>
	<view class="container">
		<form @submit="formSubmit">
			<view class="formview name">
				<view>收货人</view>
				<view>
					<view><input name="name" type="text" :value="address.name" /></view>
					<view>
						<radio-group name="sex" class="ragroup">
							<label>
								<radio value="女士" :checked=" address.sex=='女士' ? true : false " />女士</label>
							<label>
								<radio value="先生" :checked=" address.sex=='先生' ? true : false " />先生</label>
						</radio-group>
					</view>
				</view>
			</view>
			<view class="formview">
				<view>手机号</view>
				<view><input name="tel" type="number" :value="address.tel" /></view>
			</view>
			<view class="formview">
				<view>收货地址</view>
				<view><input name="add" type="text" :value="address.add" /></view>
			</view>
			<view class="formview">
				<view>门牌号</view>
				<view><input name="detailadd" type="text" :value="address.detailadd" /></view>
			</view>
			<view class="formview">
				<view>标签</view>
				<view class="labelbox" @tap="changeLabel">
					<view id="家" :class=" address.label=='家' ? 'active' : '' ">家</view>
					<view id="父母家" :class=" address.label=='父母家' ? 'active' : '' ">父母家</view>
					<view id="公司" :class=" address.label=='公司' ? 'active' : '' ">公司</view>
					<view id="学校" :class=" address.label=='学校' ? 'active' : '' ">学校</view>
				</view>
			</view>
			<view class="switchbox">
				<view>
					<view>设为默认地址</view>
					<view>每次购物时都会优先定位至该地址，方便您轻松购物</view>
				</view>
				<view>
					<switch name="isdefault" :checked="address.isdefault" />
				</view>
			</view>
			<view class="savebutton">
				<button form-type="submit">保存并使用</button>
				<button class="delete" @tap="deleteadd">删除地址</button>
			</view>
		</form>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				address: {}
			}
		},
		onLoad: function(options) {
			// console.log(options.id)
			var data = uni.getStorageSync('address');
			for (var i = 0; i < data.length; i++) {
				if (data[i].id == options.id) {
					this.address= data[i];
				}
			}
		},
		methods: {
			changeLabel(e) {
				// console.log(e.target)
				if (this.address.activeLabel != e.target.id) {
					this.address.label= e.target.id;
				} else {
					this.address.label= '0';
				}
			},

			formSubmit(e) {
				var data = e.detail.value;
				// console.log(data)
				if (data.name && data.tel && data.add && data.detailadd) {
					var newAddress = uni.getStorageSync('address');
					for (var i = 0; i < newAddress.length; i++) {
						if (data.isdefault) {
							newAddress[i].isdefault = false;
						}
						if (newAddress[i].id == this.address.id) {
							newAddress[i].name = data.name;
							newAddress[i].tel = data.tel;
							newAddress[i].add = data.add;
							newAddress[i].detailadd = data.detailadd;
							newAddress[i].label = this.address.label;
							newAddress[i].isdefault = data.isdefault;
							newAddress[i].sex = data.sex;
						}
					}
					// console.log(newAddress)
					uni.setStorageSync('address', newAddress);
					// var pages = getCurrentPages();
					// var beforePage = pages[pages.length - 2];
					uni.navigateBack({
						// success: function() {
						// 	beforePage.onLoad(); // 执行前一个页面的onLoad方法
						// }
					})
				}
			},

			deleteadd() {
				var id = this.address.id;
				wx.showModal({
					title: '提示',
					content: '确定删除地址吗？',
					success(res) {
						if (res.confirm) {
							var newAddress = wx.getStorageSync('address');
							for (var i = 0; i < newAddress.length; i++) {
								if (newAddress[i].id == id) {
									newAddress.splice(i, 1);
								}
							}
							uni.setStorageSync('address', newAddress);
							// var pages = getCurrentPages();
							// var beforePage = pages[pages.length - 2];
							uni.navigateBack({
								// success: function() {
								// 	beforePage.onLoad();
								// }
							})
						}
					}
				})

			}
		}
	}
</script>

<style>
	.container {
		width: 100%;
		height: 100%;
		/* background: #eee; */
		padding-top: 10px;
	}

	.container>form {
		width: 100%;
		background: white;
		font-size: 15px;
		color: #666;
	}

	.formview {
		display: flex;
		padding: 15px 10px;
		border-bottom: 1px solid #eee;
	}

	.formview>view:first-child {
		width: 180rpx;
	}

	.formview>view:last-child {
		width: 570rpx;
	}

	.name>view:last-child>view:first-child {
		border-bottom: 1px solid #eee;
		padding-bottom: 10px;
	}

	.name>view:last-child>view:last-child {
		padding-top: 10px;
	}

	.ragroup {
		display: flex;
	}

	.ragroup>label {
		flex: 1;
	}

	radio .wx-radio-input {
		height: 34rpx;
		width: 34rpx;
		margin-top: -8rpx;
		border-radius: 50%;
		border: 2rpx solid #999;
	}

	/* 选中后的 背景样式 （红色背景 无边框 可根据UI需求自己修改） */
	radio .wx-radio-input.wx-radio-input-checked {
		border-color: #999 !important;
		background-color: #fff !important;
	}

	/* 选中后的 对勾样式 （白色对勾 可根据UI需求自己修改） */
	radio .wx-radio-input.wx-radio-input-checked::before {
		/* 去除对号 */
		content: '';
		width: 26rpx;
		height: 26rpx;
		text-align: center;
		line-height: 26rpx;
		border-radius: 50%;
		background-color: #ef4486;
	}

	.labelbox {
		display: flex;
	}

	.labelbox view {
		border: 1px solid #ccc;
		margin-right: 20rpx;
		padding: 6rpx 22rpx;
		font-size: 10px;
		color: #999;
	}

	.labelbox .active {
		color: #ef4486;
		border: 1px solid #ef4486;
	}

	.switchbox {
		display: flex;
		padding: 10px;
	}

	.switchbox>view:first-child {
		width: 600rpx;
		box-sizing: border-box;
	}

	.switchbox>view:first-child>view:last-child {
		padding-top: 10rpx;
		font-size: 10px;
		color: #999;
	}

	.switchbox>view:last-child {
		width: 150rpx;
		text-align: right;
	}

	.wx-switch-input {
		width: 46px !important;
		height: 24px !important;
	}

	.wx-switch-input::before {
		width: 46px !important;
		height: 22px !important;
		border: 1px solid #eee;
	}

	.wx-switch-input::after {
		width: 22px !important;
		height: 22px !important;
	}

	.savebutton {
		padding-top: 50rpx;
		/* background: #eee; */
	}

	.savebutton>button {
		width: 90%;
		height: 100rpx;
		line-height: 100rpx;
		margin-left: 5%;
		font-size: 16px;
		color: white;
		background: #ef4486;
		border-radius: 4px;
		text-align: center;
	}

	.savebutton .delete {
		width: 90%;
		height: 100rpx;
		line-height: 100rpx;
		margin-left: 5%;
		font-size: 16px;
		background: #ccc;
		color: white;
		margin-top: 30rpx;
	}
</style>
