<template>
	<div>
		<full-page :options="options" ref="page">
			<!--      第一屏-->
			<div class="section">
				<div class="box1">
					<div class="slide">
						<div class="box1-text1">智慧能源</div>
						<div class="box1-text2">
							智慧能源实现对用能数据的统计、分析和预警等管理，查看各个区域、各能源分项、各时间范围的用能数据分析，可以对企业的综合用能情况一目了然，基于历史运行数据分析，结合用能预警方案的调整优化，实现节能降费的目的。
						</div>
					</div>
				</div>
			</div>
			<!--      第二屏-->
			<div class="section">
				<div class="box2">
					<div class="slide">
						<div class="box1-text1">智慧总务管理</div>
						<div class="box1-text2">
							实现各类在籍固定资产的管理功能，以及资产台账的查询导出功能；各类物品实现信息的实时同步和动态管理；实现物业事物的专项管理。
						</div>
					</div>
				</div>
			</div>
		</full-page>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				options: {
					licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
					afterLoad: this.afterLoad,
					scrollOverflow: true,
					navigation: false, //是否显示导航，默认为false
					navigationPosition: false, //导航小圆点的位置
					scrollBar: false,
					keyboardScrolling: false, //是否可以使用键盘方向键导航，默认为true
					continuousVertical: false, /// 是否循环滚动，默认为false。如果设置为true，则页面会循环滚动，而不像loopTop或loopBottom那样出现跳动，注意这个属性和loopTop、loopBottom不兼容和，不要同时设置
					menu: '#menu',
					// navigation: true,
					// anchors: ['page1', 'page2', 'page3'],
					sectionsColor: [
						'#41b883',
						'#ff5f45',
						'#0798ec',
						'#fec401',
						'#1bcee6',
						'#ee1a59',
						'#2c3e4f',
						'#ba5be9',
						'#b4b8ab'
					]
				}
			}
		},
		methods: {
			click() {
				// vue调用fullpapge的方法
				this.$refs.page.api.moveSectionDown()
				// moveSectionDown();
			}
		}
	}
</script>

<style scoped>
	div {
		margin: 0;
		padding: 0;
	}
	.cc {
	}
	@media screen and (min-width: 390px) {
		.box1 {
			background-image: url('~@/assets/product1.png');
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
		}
		.box1-text1 {
			font-size: 20px;
			font-weight: normal;
			color: #ffffff;
			line-height: 24px;
			margin-top: 300px;
			text-align: center;
			font-family: FZLTZHK--GBK1-0, FZLTZHK--GBK1;
		}
		.box1-text2 {
			width: 52%;
			font-size: 12px;
			font-weight: normal;
			color: #ffffff;
			line-height: 25px;
			text-align: center;
			margin-top: 30px;
			margin-left: 24%;
			margin-right: 24%;
			font-family: FZLTZHK--GBK1-0, FZLTZHK--GBK1;
		}
		.box2 {
			background-image: url('~@/assets/product2.png');
			background-size: 100% 100%;
			background-repeat: no-repeat;
		}
	}

	@media screen and (min-width: 820px) {
		.box1 {
			background-image: url('~@/assets/product1.png');
			background-size: cover;
			background-repeat: no-repeat;
		}
		.box1-text1 {
			font-size: 32px;
			font-weight: normal;
			color: #ffffff;
			line-height: 38px;
			margin-top: 300px;
			text-align: center;
			font-family: FZLTZHK--GBK1-0, FZLTZHK--GBK1;
		}
		.box1-text2 {
			width: 52%;
			font-size: 21px;
			font-weight: normal;
			color: #ffffff;
			line-height: 30;
			text-align: center;
			margin-top: 30px;
			margin-left: 24%;
			margin-right: 24%;
			font-family: FZLTZHK--GBK1-0, FZLTZHK--GBK1;
		}
		.box2 {
			background-image: url('~@/assets/product2.png');
			background-size: 100% 100%;
			background-repeat: no-repeat;
		}
	}

	@media screen and (min-width: 1080px) {
		.box1 {
			background-image: url('~@/assets/product1.png');
			background-size: cover;
			background-repeat: no-repeat;
		}
		.box1-text1 {
			font-size: 48px;
			font-weight: normal;
			color: #ffffff;
			line-height: 66px;
			margin-top: 300px;
			text-align: center;
			font-family: FZLTZHK--GBK1-0, FZLTZHK--GBK1;
		}
		.box1-text2 {
			width: 52%;
			font-size: 21px;
			font-weight: normal;
			color: #ffffff;
			line-height: 30px;
			text-align: center;
			margin-top: 30px;
			margin-left: 24%;
			margin-right: 24%;
			font-family: FZLTZHK--GBK1-0, FZLTZHK--GBK1;
		}
		.box2 {
			background-image: url('~@/assets/product2.png');
			background-size: 100% 100%;
			background-repeat: no-repeat;
		}
	}
</style>