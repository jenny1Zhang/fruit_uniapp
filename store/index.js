import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	seckillList: [
		[{
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
			}
		],
		[{
				id: '0009',
				name: '泰国小菠萝',
				weight: '3粒/每粒约160g',
				price: 16.9,
				pre_price: 19.9,
				image: '/static/fruit/small_ pineapple.png',
				text: '果味清香、香甜'
			},
			{
				id: '0010',
				name: '猕猴桃',
				weight: '约500g',
				price: 12.9,
				pre_price: 15.9,
				image: '/static/fruit/kiwi.png',
				text: '果味清香、香甜'
			},
			{
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
		]
	],
	group_book_list: [{
			id: '0010',
			name: '黄金猕猴桃5只',
			price: '20.9',
			people_num: 3,
			image: '/static/fruit/kiwi.png',
			text: '数量有限，先到先得',
			end_time: '3小时'
		},
		{
			id: '0002',
			name: '红颜草莓600g',
			price: '18.9',
			people_num: 2,
			image: '/static/fruit/strawberry.png',
			text: '数量有限，先到先得',
			end_time: '3小时'
		},
		{
			id: '0005',
			name: '智利车厘子/1000g',
			price: '20.9',
			people_num: 2,
			image: '/static/fruit/cherry.png',
			text: '数量有限，先到先得',
			end_time: '1天'
		},
		{
			id: '0001',
			name: '栖霞苹果900g',
			price: '15.9',
			people_num: 3,
			image: '/static/fruit/apple.png',
			text: '数量有限，先到先得',
			end_time: '1天'
		},
		{
			id: '0004',
			name: '赣南脐橙6粒/120g一粒',
			price: '19.9',
			people_num: 2,
			image: '/static/fruit/tangerine.png',
			text: '数量有限，先到先得',
			end_time: '2天'
		},
		{
			id: '0009',
			name: '泰国小菠萝4粒/80g一粒',
			price: '19.8',
			people_num: 2,
			image: '/static/fruit/small_ pineapple.png',
			text: '数量有限，先到先得',
			end_time: '2天'
		}
	],
	classData: [{
			id: '01',
			name: '类型一',
			types: [{
					title: '类型1',
					id: 'Id01',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型2',
					id: 'Id02',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型3',
					id: 'Id03',
					data: [{
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型4',
					id: 'Id04',
					data: [{
						id: '0015',
						name: '西梅',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/prune.png',
						text: '果味清香、香甜'
					}, {
						id: '0015',
						name: '西梅',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/prune.png',
						text: '果味清香、香甜'
					}, {
						id: '0015',
						name: '西梅',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/prune.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型5',
					id: 'Id05',
					data: [{
						id: '0004',
						name: '冰糖橙',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/tangerine.png',
						text: '果味清香、香甜'
					}, {
						id: '0004',
						name: '冰糖橙',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/tangerine.png',
						text: '果味清香、香甜'
					}, {
						id: '0004',
						name: '冰糖橙',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/tangerine.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型6',
					id: 'Id06',
					data: [{
						id: '0006',
						name: '大青枣',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/jujube.png',
						text: '果味清香、香甜'
					}, {
						id: '0006',
						name: '大青枣',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/jujube.png',
						text: '果味清香、香甜'
					}, {
						id: '0006',
						name: '大青枣',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/jujube.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型7',
					id: 'Id07',
					data: [{
						id: '0009',
						name: '泰国小菠萝',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/small_ pineapple.png',
						text: '果味清香、香甜'
					}, {
						id: '0009',
						name: '泰国小菠萝',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/small_ pineapple.png',
						text: '果味清香、香甜'
					}, {
						id: '0009',
						name: '泰国小菠萝',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/small_ pineapple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型8',
					id: 'Id08',
					data: [{
						id: '0016',
						name: '石榴',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/guava.png',
						text: '果味清香、香甜'
					}, {
						id: '0016',
						name: '石榴',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/guava.png',
						text: '果味清香、香甜'
					}, {
						id: '0016',
						name: '石榴',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/guava.png',
						text: '果味清香、香甜'
					}]
				}
			]
		},
		{
			id: '02',
			name: '类型二',
			types: [{
					title: '类型1',
					id: 'Id01',
					data: [{
						id: '0005',
						name: '车厘子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}, {
						id: '0005',
						name: '车厘子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}, {
						id: '0005',
						name: '车厘子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型2',
					id: 'Id02',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型3',
					id: 'Id03',
					data: [{
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型4',
					id: 'Id04',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型5',
					id: 'Id05',
					data: [{
						id: '0013',
						name: '荔枝',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/lichee.png',
						text: '果味清香、香甜'
					}, {
						id: '0013',
						name: '荔枝',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/lichee.png',
						text: '果味清香、香甜'
					}, {
						id: '0013',
						name: '荔枝',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/lichee.png',
						text: '果味清香、香甜'
					}]
				}
			]
		},
		{
			id: '03',
			name: '类型三',
			types: [{
					title: '类型1',
					id: 'Id01',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型2',
					id: 'Id02',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型3',
					id: 'Id03',
					data: [{
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型4',
					id: 'Id04',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型5',
					id: 'Id05',
					data: [{
						id: '0010',
						name: '猕猴桃',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/kiwi.png',
						text: '果味清香、香甜'
					}, {
						id: '0010',
						name: '猕猴桃',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/kiwi.png',
						text: '果味清香、香甜'
					}, {
						id: '0010',
						name: '猕猴桃',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/kiwi.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型6',
					id: 'Id06',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				}
			]
		},
		{
			id: '04',
			name: '类型四',
			types: [{
					title: '类型1',
					id: 'Id01',
					data: [{
						id: '0008',
						name: '杨梅',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/waxberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0008',
						name: '杨梅',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/waxberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0008',
						name: '杨梅',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/waxberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型2',
					id: 'Id02',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型3',
					id: 'Id03',
					data: [{
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型4',
					id: 'Id04',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型5',
					id: 'Id05',
					data: [{
						id: '0006',
						name: '大青枣',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/jujube.png',
						text: '果味清香、香甜'
					}, {
						id: '0006',
						name: '大青枣',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/jujube.png',
						text: '果味清香、香甜'
					}, {
						id: '0006',
						name: '大青枣',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/jujube.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型6',
					id: 'Id06',
					data: [{
						id: '0003',
						name: '蓝莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/blueberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0003',
						name: '蓝莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/blueberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0003',
						name: '蓝莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/blueberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型7',
					id: 'Id07',
					data: [{
						id: '0004',
						name: '冰糖橙',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/tangerine.png',
						text: '果味清香、香甜'
					}, {
						id: '0004',
						name: '冰糖橙',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/tangerine.png',
						text: '果味清香、香甜'
					}, {
						id: '0004',
						name: '冰糖橙',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/tangerine.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型8',
					id: 'Id08',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				}
			]
		},
		{
			id: '05',
			name: '类型五',
			types: [{
					title: '类型1',
					id: 'Id01',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型2',
					id: 'Id02',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型3',
					id: 'Id03',
					data: [{
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型4',
					id: 'Id04',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型5',
					id: 'Id05',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型6',
					id: 'Id06',
					data: [{
						id: '0010',
						name: '猕猴桃',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/kiwi.png',
						text: '果味清香、香甜'
					}, {
						id: '0010',
						name: '猕猴桃',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/kiwi.png',
						text: '果味清香、香甜'
					}, {
						id: '0010',
						name: '猕猴桃',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/kiwi.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型7',
					id: 'Id07',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型8',
					id: 'Id08',
					data: [{
						id: '0005',
						name: '车厘子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}, {
						id: '0005',
						name: '车厘子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}, {
						id: '0005',
						name: '车厘子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}]
				}
			]
		},
		{
			id: '06',
			name: '类型六',
			types: [{
					title: '类型1',
					id: 'Id01',
					data: [{
						id: '0005',
						name: '车厘子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}, {
						id: '0005',
						name: '车厘子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}, {
						id: '0005',
						name: '车厘子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型2',
					id: 'Id02',
					data: [{
						id: '0005',
						name: '车厘子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}, {
						id: '0005',
						name: '车厘子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '0005',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型3',
					id: 'Id03',
					data: [{
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型4',
					id: 'Id04',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型5',
					id: 'Id05',
					data: [{
						id: '0012',
						name: '梨子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/pear.png',
						text: '果味清香、香甜'
					}, {
						id: '0012',
						name: '梨子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/pear.png',
						text: '果味清香、香甜'
					}, {
						id: '0012',
						name: '梨子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/pear.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型6',
					id: 'Id06',
					data: [{
						id: '0014',
						name: '菠萝蜜',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/jackfruit.png',
						text: '果味清香、香甜'
					}, {
						id: '0014',
						name: '菠萝蜜',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/jackfruit.png',
						text: '果味清香、香甜'
					}, {
						id: '0014',
						name: '菠萝蜜',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/jackfruit.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型7',
					id: 'Id07',
					data: [{
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型8',
					id: 'Id08',
					data: [{
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}]
				}
			]
		},
		{
			id: '07',
			name: '类型七',
			types: [{
					title: '类型1',
					id: 'Id01',
					data: [{
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型2',
					id: 'Id02',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型3',
					id: 'Id03',
					data: [{
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型4',
					id: 'Id04',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型5',
					id: 'Id05',
					data: [{
						id: '0008',
						name: '杨梅',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/waxberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0008',
						name: '杨梅',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/waxberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0008',
						name: '杨梅',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/waxberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型6',
					id: 'Id06',
					data: [{
						id: '0007',
						name: '葡萄',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/grape.png',
						text: '果味清香、香甜'
					}, {
						id: '0007',
						name: '葡萄',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/grape.png',
						text: '果味清香、香甜'
					}, {
						id: '0007',
						name: '葡萄',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/grape.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型7',
					id: 'Id07',
					data: [{
						id: '0003',
						name: '蓝莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/blueberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0003',
						name: '蓝莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/blueberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0003',
						name: '蓝莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/blueberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型8',
					id: 'Id08',
					data: [{
						id: '0013',
						name: '荔枝',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/lichee.png',
						text: '果味清香、香甜'
					}, {
						id: '0013',
						name: '荔枝',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/lichee.png',
						text: '果味清香、香甜'
					}, {
						id: '0013',
						name: '荔枝',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/lichee.png',
						text: '果味清香、香甜'
					}]
				}
			]
		},
		{
			id: '08',
			name: '类型八',
			types: [{
					title: '类型1',
					id: 'Id01',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型2',
					id: 'Id02',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型3',
					id: 'Id03',
					data: [{
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型4',
					id: 'Id04',
					data: [{
						id: '0005',
						name: '车厘子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}, {
						id: '0005',
						name: '车厘子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}, {
						id: '0005',
						name: '车厘子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型5',
					id: 'Id05',
					data: [{
						id: '0005',
						name: '车厘子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}, {
						id: '0005',
						name: '车厘子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}, {
						id: '0005',
						name: '车厘子',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/cherry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型6',
					id: 'Id06',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型7',
					id: 'Id07',
					data: [{
						id: '0009',
						name: '泰国小菠萝',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/small_ pineapple.png',
						text: '果味清香、香甜'
					}, {
						id: '0009',
						name: '泰国小菠萝',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/small_ pineapple.png',
						text: '果味清香、香甜'
					}, {
						id: '0009',
						name: '泰国小菠萝',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/small_ pineapple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型8',
					id: 'Id08',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				}
			]
		},
		{
			id: '09',
			name: '类型九',
			types: [{
					title: '类型1',
					id: 'Id01',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型2',
					id: 'Id02',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型3',
					id: 'Id03',
					data: [{
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型4',
					id: 'Id04',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型5',
					id: 'Id05',
					data: [{
						id: '0015',
						name: '西梅',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/prune.png',
						text: '果味清香、香甜'
					}, {
						id: '0015',
						name: '西梅',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/prune.png',
						text: '果味清香、香甜'
					}, {
						id: '0015',
						name: '西梅',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/prune.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型6',
					id: 'Id06',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型7',
					id: 'Id07',
					data: [{
						id: '0016',
						name: '石榴',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/guava.png',
						text: '果味清香、香甜'
					}, {
						id: '0016',
						name: '石榴',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/guava.png',
						text: '果味清香、香甜'
					}, {
						id: '0016',
						name: '石榴',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/guava.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型8',
					id: 'Id08',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				}
			]
		},
		{
			id: '10',
			name: '类型十',
			types: [{
					title: '类型1',
					id: 'Id01',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型2',
					id: 'Id02',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型3',
					id: 'Id03',
					data: [{
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型4',
					id: 'Id04',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型5',
					id: 'Id05',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型6',
					id: 'Id06',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型7',
					id: 'Id07',
					data: [{
						id: '0006',
						name: '大青枣',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/jujube.png',
						text: '果味清香、香甜'
					}, {
						id: '0006',
						name: '大青枣',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/jujube.png',
						text: '果味清香、香甜'
					}, {
						id: '0006',
						name: '大青枣',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/jujube.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型8',
					id: 'Id08',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				}
			]
		},
		{
			id: '11',
			name: '类型十一',
			types: [{
					title: '类型1',
					id: 'Id01',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型2',
					id: '02',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型3',
					id: '03',
					data: [{
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型4',
					id: '04',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型5',
					id: '05',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型6',
					id: '06',
					data: [{
						id: '0004',
						name: '冰糖橙',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/tangerine.png',
						text: '果味清香、香甜'
					}, {
						id: '0004',
						name: '冰糖橙',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/tangerine.png',
						text: '果味清香、香甜'
					}, {
						id: '0004',
						name: '冰糖橙',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/tangerine.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型7',
					id: '07',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型8',
					id: '08',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				}
			]
		},
		{
			id: '12',
			name: '类型十二',
			types: [{
					title: '类型1',
					id: 'Id01',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型2',
					id: 'Id02',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型3',
					id: 'Id03',
					data: [{
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}, {
						id: '0011',
						name: '海南芒果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/mango.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型4',
					id: 'Id04',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型5',
					id: 'Id05',
					data: [{
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}, {
						id: '0001',
						name: '栖霞苹果',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/apple.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型6',
					id: 'Id06',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型7',
					id: 'Id07',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				},
				{
					title: '类型8',
					id: 'Id08',
					data: [{
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}, {
						id: '0002',
						name: '红颜草莓',
						weight: '约1200g',
						price: 22.9,
						pre_price: 24.9,
						image: '/static/fruit/strawberry.png',
						text: '果味清香、香甜'
					}]
				}
			]
		}
	],
	redpackets: [{
		id: '1',
		num: 30,
		sum: 119,
		date: ['2019-08-12', '2019-09-01'],
		area: '华北地区',
		isdeadline: true,
		showdetail: false
	}, {
		id: '2',
		num: 20,
		sum: 99,
		date: ['2019-08-12', '2019-09-01'],
		area: '华中地区',
		isdeadline: true,
		showdetail: false
	}, {
		id: '3',
		num: 15,
		sum: 79,
		date: ['2019-08-12', '2019-10-01'],
		area: '华北地区',
		isdeadline: false,
		showdetail: false
	}]
}

export default new Vuex.Store({
	state
})
