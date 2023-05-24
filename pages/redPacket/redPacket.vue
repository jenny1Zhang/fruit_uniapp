<template>
	<view class="container">
		<radio-group class="radio-group" @change="packetChange">
			<view class="topbox1" v-if="!choosePacket">
				<input type="text" placeholder="请输入兑换码" />
				<view>兑换</view>
			</view>
			<view class="topbox2" v-if="choosePacket">
				<view>不使用红包</view>
				<view>
					<radio value="0" checked="chooseId==0" />
				</view>
			</view>
			<view class="bottombox">
				<view v-if="!choosePacket">您有<text>{{num}}</text>个红包即将过期</view>
				<view v-if="choosePacket">红包不能使用多个</view>
				<view class="packetbox" v-for="(item,index) in redpackets" :key="index">
					<view class="packettop">
						<view>¥<text>{{item.num}}</text></view>
						<view>
							<view>{{item.num}}元红包</view>
							<view>满{{item.sum}}可用</view>
							<view>全品类红包</view>
							<view>会员、非会员通用</view>
							<view>有效期:{{item.date[0]}}-{{item.date[1]}}</view>
							<view class="due" v-if="item.isdeadline">即将过期</view>
							<view class="choose" v-if="choosePacket">
								<radio :value="item.id" :checked="chooseId == item.id" />
							</view>
						</view>
					</view>
					<view class="packetbottom">
						<view @tap="showdetail" :id="item.id">
							详细信息
							<text v-if="!item.showdetail" class="iconfont icon-arrow-right-copy-copy"></text>
							<text v-if="item.showdetail" class="iconfont icon-arrow-to-bottom"></text>
						</view>
						<view v-if="item.showdetail" class="detailbox">
							<view>劲爆商品不可用</view>
							<view>限{{item.area}}使用</view>
						</view>
					</view>
				</view>
				<view class="unable packetbox" v-for="(item2,index2) in unablepackets" :key="index2">
					<view class="packettop">
						<view>¥<text>{{item2.num}}</text></view>
						<view>
							<view>{{item2.num}}元红包</view>
							<view>满{{item2.sum}}可用</view>
							<view>全品类红包</view>
							<view>会员、非会员通用</view>
							<view>有效期:{{item2.date[0]}}-{{item2.date[1]}}</view>
							<view class="due" v-if="item2.isdeadline">即将过期</view>
							<view class="choose" v-if="choosePacket">
								<radio :value="item2.id" :checked="chooseId == item2.id" />
							</view>
						</view>
					</view>
					<view class="packetbottom">
						<view @tap="showdetail" :id="item2.id">
							详细信息
							<text v-if="!item2.showdetail" class="iconfont icon-arrow-right-copy-copy"></text>
							<text v-if="item2.showdetail" class="iconfont icon-arrow-to-bottom"></text>
						</view>
						<view v-if="item2.showdetail" class="detailbox">
							<view>劲爆商品不可用</view>
							<view>限{{item2.area}}使用</view>
						</view>
					</view>
				</view>
			</view>
		</radio-group>
	</view>
</template>

<script>
	import store from '@/store/index';
	
	export default {
		data() {
			return {
				choosePacket: false,
				chooseId: 0,
				redpackets: store.state.redpackets,
				unablepackets: []
			}
		},
		onLoad(options) {
			// console.log(options)
			var data = this.redpackets;
			if (options.choosePacket) {
				var packets1 = [],
					packets2 = [],
					allMoney = options.allMoney;
				for (var i = 0; i < data.length; i++) {
					if (allMoney >= data[i].sum) {
						packets1.push(data[i]);
					} else {
						packets2.push(data[i]);
					}
				}
				this.choosePacket = true;
				this.chooseId = options.packetId;
				this.redpackets = packets1;
				this.unablepackets = packets2;
			} else {
				var num = 0;
				for (var i = 0; i < data.length; i++) {
					if (data[i].isdeadline) {
						num++;
					}
				}
				this.num = num;
			}
		},
		methods: {
			showdetail(e) {
				// console.log(e);
				var data = this.redpackets;
				for (var i = 0; i < data.length; i++) {
					if (data[i].id == e.currentTarget.id) {
						data[i].showdetail = !data[i].showdetail;
					}
				}
				this.redpackets = data;
			},

			packetChange(e) {
				// console.log(e)
				var id = e.detail.value;
				var redpackets = this.redpackets;
				var data = {};
				for (var i = 0; i < redpackets.length; i++) {
					if (redpackets[i].id == id) {
						data = redpackets[i];
					}
				}
				
				uni.$emit("handClickPacket",{choosePacket: data});
				uni.navigateBack({
					// success: function() {
					// 	beforePage.setData({
					// 		choosePacket: data
					// 	});
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
		background: #eee;
		padding: 6px 0;
	}

	.container radio-group {
		width: 100%;
	}

	.topbox1 {
		padding: 8px 10px;
		background: white;
		display: flex;
		box-sizing: border-box;
		width: 100%;
	}

	.topbox1 input {
		flex: 1;
		font-size: 14px;
		background: #eee;
		padding: 3px 0;
		text-indent: 10px;
	}

	.topbox1 view {
		width: 50px;
		text-align: center;
		font-size: 16px;
		color: #666;
	}

	.topbox2 {
		padding: 8px 10px;
		background: white;
		display: flex;
		box-sizing: border-box;
		width: 100%;
	}

	.topbox2>view {
		flex: 1;
		font-size: 14px;
		color: #999;
	}

	.topbox2>view:last-child {
		text-align: right;
	}

	radio .wx-radio-input {
		height: 40rpx;
		width: 40rpx;
		border-radius: 50%;
	}

	/* 选中后的 背景样式 （红色背景 无边框 可根据UI需求自己修改） */
	radio .wx-radio-input.wx-radio-input-checked {
		border-color: #ef4486 !important;
		background-color: #ef4486 !important;
	}

	.bottombox {
		padding: 5px 12px;
		width: 100%;
		box-sizing: border-box;
	}

	.bottombox>view:first-child {
		padding: 10px 0;
		color: #999;
	}

	.bottombox>view:first-child text {
		color: #ef4486;
	}

	.bottombox .packetbox {
		margin-bottom: 10px;
		padding: 15px;
		background: white;
	}

	.bottombox .unable {
		opacity: .5;
	}

	.packettop {
		border-bottom: 1px dotted #ddd;
		padding: 10px 0;
		display: flex;
	}

	.packettop>view:first-child {
		flex: 1;
		color: #ef4486;
		line-height: 85px;
	}

	.unable .packettop>view:first-child {
		color: #666;
	}

	.packettop>view:first-child text {
		font-size: 40px;
		font-weight: 600;
	}

	.packettop>view:last-child {
		flex: 3;
		font-size: 12px;
		color: #999;
		position: relative;
	}

	.packettop>view:last-child>view:first-child {
		color: #333;
	}

	.packettop>view:last-child>.due {
		position: absolute;
		right: 0;
		top: 0;
		color: #ef4486;
		opacity: .5;
	}

	.unable .packettop>view:last-child>.due {
		color: #666;
	}

	.packettop>view:last-child>.choose {
		position: absolute;
		right: 0;
		top: 50%;
		margin-top: -20rpx;
	}

	.packetbottom {
		font-size: 12px;
		color: #666;
	}

	.packetbottom>view:first-child {
		padding: 10px 0 3px;
	}

	.packetbottom>view:first-child .iconfont {
		font-size: 12px;
	}

	.packetbottom .detailbox {
		background: #fff5f6;
		color: #aaa;
		padding: 5px 10px;
	}
</style>
