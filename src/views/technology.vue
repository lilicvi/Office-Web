<template>
	<div>
		<full-page :options="options" ref="page">
			<!--      第一屏-->
			<div class="section">
				<div class="box1">
					<div class="slide">
						<!-- <img
							width="100%"
							height="100%"
							src="~@/assets/product1.png"
							alt=""
						/> -->
						<div class="box1-text1">视频巡检</div>
						<div class="box1-text2">
							视频巡检可以实现对所有摄像头快速进行实况点播，以确认设备工作是否正常、监控对象是否有异常等，并辅助巡检人员对历史场景进行记录查询，可以极大程度提高工作效率。
						</div>
					</div>
				</div>
			</div>
			<!--      第二屏-->
			<div class="section">
				<div class="box2">
					<div class="slide">
						<div class="box1-text1">CCTV</div>
						<div class="box1-text2">
							IMC-39255亿像素阵列相机，超大视域、超远距离、超高清晰、多焦段融合，同时能实现100米人脸识别、200米车牌识别、1000米人形及车辆检测。
						</div>
					</div>
				</div>
			</div>
			<!-- 第三屏 -->
			<div class="section">
				<div class="box3">
					<div class="slide">
						<div class="box1-text1">报警管理</div>
						<div class="box1-text2">
							告警等级主要设置级别为：一级报警（重大风险）、二级报警（较大风险）、三级报警（一般风险）。支持设备自动上报或人工对报警信息进行审核（如查看视频监控），确定报警信息是否属实，是否产生误报，并根据审核结果进行相应的处理，反馈给相关工作人员根据权限进行相应事件的快速反应和处理。
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
			background-image: url('~@/assets/technology1.png');
			background-size: cover;
			display: block;
			margin: 0 auto;
		}
		.box1-text1 {
			font-size: 20px;
			font-weight: normal;
			color: #ffffff;
			line-height: 24px;
			margin-top: 200px;
			text-align: center;
			font-family: FZLTTHK--GBK1-0, FZLTTHK--GBK1;
		}
		.box1-text2 {
			/* width: 52%; */
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
			background-image: url('~@/assets/technology2.png');
			background-size: 100% 100%;
			display: block;
			margin: 0 auto;
		}
		.box3 {
			background-image: url('~@/assets/technology3.png');
			background-size: 100% 100%;
			display: block;
			margin: 0 auto;
		}
	}
	@media screen and (min-width: 820px) {
		.box1 {
			background-image: url('~@/assets/technology1.png');
			background-size: 100% 100%;
			display: block;
			margin: 0 auto;
		}
		.box1-text1 {
			font-size: 32px;
			font-weight: normal;
			color: #ffffff;
			line-height: 38px;
			margin-top: 300px;
			text-align: center;
			font-family: FZLTTHK--GBK1-0, FZLTTHK--GBK1;
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
			background-image: url('~@/assets/technology2.png');
			background-size: 100% 100%;
			display: block;
			margin: 0 auto;
		}
		.box3 {
			background-image: url('~@/assets/technology3.png');
			background-size: 100% 100%;
			display: block;
			margin: 0 auto;
		}
	}
	@media screen and (min-width: 1080px) {
		.box1 {
			background-image: url('~@/assets/technology1.png');
			background-size: 100% 100%;
			display: block;
			margin: 0 auto;
		}
		.box1-text1 {
			font-size: 48px;
			font-weight: normal;
			color: #ffffff;
			line-height: 66px;
			margin-top: 300px;
			text-align: center;
			font-family: FZLTTHK--GBK1-0, FZLTTHK--GBK1;
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
			background-image: url('~@/assets/technology2.png');
			background-size: 100% 100%;
			display: block;
			margin: 0 auto;
		}
		.box3 {
			background-image: url('~@/assets/technology3.png');
			background-size: 100% 100%;
			display: block;
			margin: 0 auto;
		}
	}
</style>