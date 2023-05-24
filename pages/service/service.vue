<template>
	<view class="container">
		<view>
			<view>
				<view class="title">猜你想问</view>
				<view v-for="(item, index) in problems" :key="index" class="problembox">
					<view @tap="openanswer" :id="item.id">
						<view>{{item.id}}、{{item.problem}}</view>
						<view>
							<text v-if="!item.flag" class="iconfont icon-arrow-right-copy-copy"></text>
							<text v-if="item.flag" class="iconfont icon-arrow-to-bottom"></text>
						</view>
					</view>
					<view v-if="item.flag" class="ans">{{item.answer}}</view>
				</view>
			</view>
		</view>
		<view class="service">在线客服</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				problems: [{
					id: '1',
					problem: '如何催单',
					answer: '如何催单',
					flag: false
				}, {
					id: '2',
					problem: '商品不想要了怎么退款',
					answer: '商品不想要了怎么退款',
					flag: false
				}, {
					id: '3',
					problem: '修改收货信息',
					answer: '修改收货信息',
					flag: false
				}, {
					id: '4',
					problem: '优惠券不可用原因',
					answer: '优惠券不可用原因',
					flag: false
				}, {
					id: '5',
					problem: '没申请退款为什么收到退款短信',
					answer: '没申请退款为什么收到退款短信',
					flag: false
				}]
			}
		},
		methods: {
			openanswer(e) {
				var data = this.problems;
				for (var i = 0; i < data.length; i++) {
					if (data[i].id == e.currentTarget.id) {
						data[i].flag = !data[i].flag;
					}
				}
				this.problems = data;
			}
		}
	}
</script>

<style>
	@import "/static/fonts/iconfont.css";
	.container {
		width: 100%;
		position: relative;
		height: 100%;
	}

	.container>view {
		width: 100%;
	}

	.container>view>view {
		width: 100%;
		margin-bottom: 66px;
	}

	.title {
		font-size: 20px;
		padding: 10px 15px;
		box-sizing: border-box;
	}

	.problembox {
		border-bottom: 1px solid #ddd;
		padding: 5px;
		box-sizing: border-box;
	}

	.problembox>view:first-child {
		display: flex;
		font-size: 18px;
		padding: 10px 5px;
		color: #666;
	}

	.problembox>view:first-child>view:first-child {
		flex: 1;
	}

	.problembox>view:first-child>view:last-child {
		width: 20px;
	}

	.problembox .ans {
		border-top: 1px solid #eee;
		padding: 8px 5px;
		color: #999;
		font-size: 16px;
	}

	.container .service {
		position: fixed;
		left: 2%;
		bottom: 10px;
		width: 96%;
		height: 46px;
		line-height: 46px;
		color: white;
		background: #ef4486;
		text-align: center;
		font-size: 16px;
		border-radius: 5px;
	}
</style>
