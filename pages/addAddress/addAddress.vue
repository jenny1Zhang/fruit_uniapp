<template>
	<view class="container">
		<form @submit="formSubmit">
			<view class="formview name">
				<view>收货人</view>
				<view>
					<view><input name="name" type="text" placeholder="请填写收货人姓名" /></view>
					<view>
						<radio-group name="sex" class="ragroup">
							<label>
								<radio value="女士" checked />女士</label>
							<label>
								<radio value="先生" />先生</label>
						</radio-group>
					</view>
				</view>
			</view>
			<view class="formview">
				<view>手机号</view>
				<view><input name="tel" type="number" placeholder="请填写收货人手机号" /></view>
			</view>
			<view class="formview">
				<view>收货地址</view>
				<view><input name="add" type="text" placeholder="如：北京市海淀区太平路" /></view>
			</view>
			<view class="formview">
				<view>门牌号</view>
				<view><input name="detailadd" type="text" placeholder="如：33号院2号楼3单元101" /></view>
			</view>
			<view class="formview">
				<view>标签</view>
				<view class="labelbox" @tap="changeLabel">
					<view id="家" :class=" activeLabel=='家' ? 'active' : '' ">家</view>
					<view id="父母家" :class=" activeLabel=='父母家' ? 'active' : '' ">父母家</view>
					<view id="公司" :class=" activeLabel=='公司' ? 'active' : '' ">公司</view>
					<view id="学校" :class=" activeLabel=='学校' ? 'active' : '' ">学校</view>
				</view>
			</view>
			<view class="switchbox">
				<view>
					<view>设为默认地址</view>
					<view>每次购物时都会优先定位至该地址，方便您轻松购物</view>
				</view>
				<view>
					<switch name="isdefault" />
				</view>
			</view>
			<view class="savebutton">
				<button form-type="submit">保存并使用</button>
			</view>
		</form>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				activeLabel: '0'
			}
		},
		methods: {
			changeLabel(e) {
				// console.log(e.target)
				if (this.activeLabel != e.target.id) {
					this.activeLabel = e.target.id;
				} else {
					this.activeLabel = '0';
				}
			},

			formSubmit(e) {
				// console.log(e)
				var data = e.detail.value;
				data.label = this.activeLabel;
				// console.log(data)
				if (data.name && data.tel && data.add && data.detailadd) {
					var newAddress = uni.getStorageSync('address') ? uni.getStorageSync('address') : [];
					var id = '0' + (newAddress.length + 1);
					if (data.isdefault) {
						for (var i = 0; i < newAddress.length; i++) {
							newAddress[i].isdefault = false;
						}
					}
					data.id = id;
					newAddress.push(data);
					uni.setStorageSync('address', newAddress);
					// var pages = getCurrentPages();
					// var beforePage = pages[pages.length - 2];
					// console.log(pages,beforePage)
					uni.navigateBack({
						// success: function() {
						// 	beforePage.onLoad();
						// }
					})
				}

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
		padding: 40px 0;
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
</style>
