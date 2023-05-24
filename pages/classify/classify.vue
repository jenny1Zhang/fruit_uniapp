<template>
	<view class="container">
		<view class="searchbox">
			<view class="inputbox">
				<input type="text" placeholder="输入水果名称" @confirm="toSearch" />
				<text class="iconfont icon-sousu" @tap="toSearch"></text>
			</view>
		</view>
		<view class="content">
			<scroll-view class="con_left" scroll-y>
				<view v-for="(item,index) in classData" :key="index" :id="index" :class=" index==activeIndex1 ? 'active' : '' "
				 @tap="changetypes1">{{item.name}}</view>
			</scroll-view>
			<view class="con_right">
				<view class="box1">
					<scroll-view class="right_top" scroll-x>
						<view v-for="(item2,index2) in classData[activeIndex1].types" :key="index2" :id="item2.id" :class=" item2.id==activeIndex2 ? 'active' : '' "
						 @tap="changetypes2">{{item2.title}}</view>
					</scroll-view>
				</view>
				<view class="box2"><!-- scroll-into-view 实现锚点功能 -->
					<scroll-view class="right_content" scroll-y :scroll-into-view="activeIndex3" @scroll="contentscroll">
						<view class="right_box" v-for="(item3,index3) in classData[activeIndex1].types" :key="index3" :id="item3.id">
							<view class="title">{{item3.title}}</view>
							<goodBox :data="item3.data"></goodBox>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
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
				seckillData: store.state,
				activeIndex1: 0,
				activeIndex2: 'Id01',
				activeIndex3: 'Id01',
				tops: [],
				classData: store.state.classData
			}
		},
		onReady() {
			// console.log(this.classData)
			// 根据滚动的高度，设置对应type高亮效果
			var that = this;
			var query = uni.createSelectorQuery();
			var top = [];
			query.selectAll('.right_box').boundingClientRect(function(rec) {
				// console.log(rec,that.tops)
				for (var i = 0; i < rec.length; i++) {
					top.push(rec[i].top)
				}
				that.tops = top
				console.log(that.tops)
			}).exec()
		},
		methods: {
			// 切换左侧类型
			changetypes1(e) {
				var index = e.currentTarget.id;
				console.log("index1:", index)
				this.activeIndex1 = index;
				this.activeIndex2 = 'Id01';
				this.activeIndex3 = 'Id01';
				console.log(this.activeIndex2, this.activeIndex3)
			},
			//切换顶部类型
			changetypes2(e) {
				var index = e.currentTarget.id;
				console.log("index2:", index)
				this.activeIndex2 = index;
				this.activeIndex3 = index;
			},
			//右侧内容区滚动
			contentscroll(e) {
				var tops = this.tops;
				var top = e.detail.scrollTop;
				var activeIndex = 0;
				for (var i = 1; i < tops.length; i++) {
					if (top < tops[0]) {
						activeIndex = 0;
						this.activeIndex2 = 'Id01';
						this.activeIndex3 = '';
						return;
					}
					if (top > tops[i - 1] && top <= tops[i]) {
						if (activeIndex != i) {
							activeIndex = i;
							this.activeIndex2 = ('Id0' + (i + 1));
							this.activeIndex3 = '';
						}
						return;
					}
				}
			}
		}
	}
</script>

<style>
	@import "/static/fonts/iconfont.css";
	
	.container {
		height: 100%;
	}

	.searchbox {
		width: 100%;
		/* padding-left:37.5rpx; */
		box-sizing: border-box;
		margin-bottom: 10px;
		background: white;
		display: flex;
		justify-content: center;
		margin-bottom: 10px;
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
		width: 85%;
		height: 40px;
		float: left;
	}

	.inputbox .iconfont {
		line-height: 40px;
	}

	.inputbox .iconfont:before {
		font-size: 20px;
	}

	.content {
		display: flex;
		width: 100%;
		font-size: 14px;
	}

	.con_left {
		flex: 1;
		background: #f3f3f3;
		height: 80vh;
	}

	.con_left view {
		padding: 30rpx 0rpx;
		text-align: center;
		color: #999;
		border-bottom: 1px solid #eee;
	}

	.con_left .active {
		background: white;
		color: black;
	}

	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}


	.con_right {
		/* flex:3; */
		width: 590rpx;
		height: 100%;
		padding-left: 20rpx;
	}

	.box1 {
		width: 100%;
		overflow: hidden;
		padding: 10px 0;
	}

	.right_top {
		white-space: nowrap;
	}

	.right_top view {
		display: inline-block;
		padding: 15rpx 20rpx;
	}

	.right_top .active {
		color: red;
	}

	.box2 {
		height: 80vh;
		overflow: hidden;
	}

	.right_content {
		height: 100%;
	}

	.right_content view {
		/* height: 50px; */
	}
</style>
