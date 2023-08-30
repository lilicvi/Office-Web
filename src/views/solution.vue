<template>
	<div class="page">
		<div>
			<img
				class="image_1"
				referrerpolicy="no-referrer"
				src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb767a50a98d8a9aa3784bab86b9446481adca8505682a00a5441d297dada538a"
			/>
		</div>
		<div>
			<el-row :gutter="20" class="wrapper">
				<el-col :span="6" class="leftContent">
					<div class="bigBox">
						<div class="grid-content bg-purple">
							<div
								@click="government(1)"
								:class="buttonIndex == 1 ? 'bigClass' : 'Color'"
							>
								<span
									:class="
										buttonIndex == 1 ? 'text1' : 'text_8'
									"
									>智慧政府</span
								>
							</div>
						</div>
						<div class="grid-content bg-purple">
							<div
								@click="airPort(1)"
								:class="
									buttonIndex1 == 1 ? 'bigClass' : 'Color'
								"
							>
								<span
									:class="
										buttonIndex1 == 1 ? 'text1' : 'text_8'
									"
									>智慧机场</span
								>
							</div>
						</div>
						<div class="grid-content bg-purple">
							<div
								@click="business(1)"
								:class="
									buttonIndex2 == 1 ? 'bigClass' : 'Color'
								"
							>
								<span
									:class="
										buttonIndex2 == 1 ? 'text1' : 'text_8'
									"
									>多功能综合商业体</span
								>
							</div>
						</div>
						<div class="grid-content bg-purple">
							<div
								@click="convention(1)"
								:class="
									buttonIndex3 == 1 ? 'bigClass' : 'Color'
								"
							>
								<span
									:class="
										buttonIndex3 == 1 ? 'text1' : 'text_8'
									"
									>会展中心</span
								>
							</div>
						</div>
						<div class="grid-content bg-purple">
							<div
								@click="smartCampus(1)"
								:class="
									buttonIndex4 == 1 ? 'bigClass' : 'Color'
								"
							>
								<span
									:class="
										buttonIndex4 == 1 ? 'text1' : 'text_8'
									"
									>智慧校园</span
								>
							</div>
						</div>
					</div>
				</el-col>
				<el-col :span="18" class="rightContent"
					><div class="grid-content bg-purple">
						<div class="rightBox" v-if="num == 0">
							<img
								class="image_2"
								referrerpolicy="no-referrer"
								src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/355a38ba4db44d6fa440485224afa417_mergeImage.png"
							/>
							<div>
								<span class="right-text1"
									>上海中心大厦建筑全生命周期，已获得国家级三星级绿色建筑设计评价标识、美国绿色建筑LEED-CS铂金级认证。通过BIM模型及静态属性信息、设施设备管理信息、设施设备实时状态信息、物业工作流程管理信息的融合，通过信息对比、分析、统计、数据挖掘等技术，为物业运营管理提供决策支持。构建运维BIM模型，根据运维需求定义各要素之间的专业逻辑关系，通过大数据分析，提供楼宇运行自适应解决方案等，提高运营管理效率。最终形成高效、绿色、节能、智慧、人文的超高层建筑管理模式。</span
								>
							</div>
						</div>
						<div class="rightBox" v-if="num == 1">
							<img
								class="image_2"
								referrerpolicy="no-referrer"
								src="~@/assets/government.png"
							/>
							<div>
								<span class="right-text1"
									>以公众需求为导向的治理模式，引入网络思维，加强信息技术在政府服务中的应用，通过大数据、云计算、物联网等信息技术的深度应用，对现有政府资源进行优化重组，不断完善政府组织架构和业务流程，整合部门、优化政务流程的基础上，建设统一集成的网上政务服务平台，推动政府公共信息互联共享、互帮互助，促进线上线下政务服务融合，为市民提供无缝化、智能化、个性化的公共服务。</span
								>
							</div>
						</div>
						<div class="rightBox" v-if="num == 2">
							<img
								class="image_2"
								referrerpolicy="no-referrer"
								src="~@/assets/airPort.jpg"
							/>
							<div>
								<span class="right-text1"
									>围界防入侵系统，围界覆盖面积60公里，涵盖5条跑道及3座航站楼，作为机场的第一道安全防线，有效地将技防、人防、物防融合在一起，形成三位一体的立体式防范，提升了飞行区的空防安全。</span
								>
							</div>
							<img
								class="image_2"
								referrerpolicy="no-referrer"
								src="~@/assets/airPort2.jpg"
							/>
							<img
								class="image_2"
								referrerpolicy="no-referrer"
								src="~@/assets/airPort3.jpg"
							/>
							<div>
								<span class="right-text1"
									>可监管机坪超过12000辆无动力车辆，定位及追踪车辆行驶路径等信息。其具有特点的功能在于，在应急救援期间，专用的应急救援车，能灵活的驾驶至事发现场，并将现场情况以实时画面传输至应急救援指挥车中，为应急救援提供准确，快捷的信息。</span
								>
							</div>
						</div>
						<div class="rightBox" v-if="num == 4">
							<img
								class="image_2"
								referrerpolicy="no-referrer"
								src="~@/assets/convention.jpg"
							/>
							<div>
								<span class="right-text1"
									>国家会展中心安防管理能够根据展场特点，制定各种自动、半自动的智能化模式，一方面可以通过人工设置相关的联动预案实现预案联动，另一方面平台还可以通过人、车、事件等业务要素分析结合电子地图引擎和智能化的业务建模库实现各种智能化联动和各种智能应用功能，来提升国展场馆的管理效率和对突发事件的应急决策能力，全方面提高安全等级。</span
								>
							</div>
						</div>
						<div class="rightBox" v-if="num == 5">
							<img
								class="image_2"
								referrerpolicy="no-referrer"
								src="~@/assets/smartCampus.jpg"
							/>
							<div>
								<span class="right-text1"
									>采用大数据、人工智能、物联网、传感技术、新能源、虚拟现实、软件信息化等技术和产品；实现人机物深度融合的智慧开放系统，群体智能、数据智能、校园创新、资源共享；打造可持续发展的智慧校园生态。</span
								>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				viewHeight: 0, // 整屏的高度
				activeFlag: 0, // 当前索引标志位 用来颜色定位
				indexFlag: 0, // 滚动标志位
				num: 1,
				index: 1,
				buttonIndex: 1,
				buttonIndex1: 1,
				buttonIndex2: 1,
				buttonIndex3: 1,
				buttonIndex4: 1
			}
		},
		mounted() {
			window.addEventListener('mousewheel', this.mousewheel)
		},
		unmounted() {
			window.removeEventListener('mousewheel', this.mousewheel)
		},
		methods: {
			mousewheel(e) {
				let startTime = new Date().getTime()
				// 如果当前滚动开始时间和上次滚动结束时间的差值小于1.5s，则不执行翻页动作，这样做是为了实现类似节流的效果
				if (startTime - this.endTime > 600) {
					e.deltaY > 0
						? this.$refs.carousel.next()
						: this.$refs.carousel.previous()
					this.endTime = new Date().getTime()
				}
			},
			government(buttonIndex) {
				this.num = 1
				this.buttonIndex = 2
				this.buttonIndex1 = 1
				this.buttonIndex2 = 1
				this.buttonIndex3 = 1
				this.buttonIndex4 = 1
			},
			airPort(buttonIndex) {
				this.num = 2
				this.buttonIndex1 = 2
				//
				this.buttonIndex = 1
				this.buttonIndex2 = 1
				this.buttonIndex3 = 1
				this.buttonIndex4 = 1
			},
			business(buttonIndex2) {
				this.num = 0
				this.buttonIndex2 = 2
				//
				this.buttonIndex = 1
				this.buttonIndex1 = 1
				this.buttonIndex3 = 1
				this.buttonIndex4 = 1
			},
			convention(buttonIndex3) {
				this.num = 4
				this.buttonIndex3 = 2
				//
				this.buttonIndex = 1
				this.buttonIndex1 = 1
				this.buttonIndex2 = 1
				this.buttonIndex4 = 1
			},
			smartCampus(buttonIndex4) {
				this.num = 5
				this.buttonIndex4 = 2
				//
				this.buttonIndex = 1
				this.buttonIndex1 = 1
				this.buttonIndex2 = 1
				this.buttonIndex3 = 1
			}
		}
	}
</script>

<style>
	@media screen and (min-width: 390px) {
		.el-row {
			margin-bottom: 20px;
		}
		.wrapper {
			position: relative;
			width: 100%;
		}
		.el-col {
			border-radius: 4px;
		}
		.bg-purple-dark {
			background: #99a9bf;
		}
		.bg-purple {
			background: #fff;
		}
		.bg-purple-light {
			background: #e5e9f2;
		}
		.grid-content {
			border-radius: 4px;
			min-height: 70px;
		}
		.row-bg {
			padding: 10px 0;
			background-color: #f9fafc;
		}
		.rightBox {
			margin-top: 380px;
		}
		.bigClass {
			box-shadow: 0px 5px 10px 0px rgba(4, 12, 23, 0.2);
			background-color: rgba(255, 255, 255, 1);
			border-radius: 10px;
			border: 1px solid;
			float: left;
			width: 300px;
			margin: 10px 10px 5px 50px;
		}
		.Color {
			box-shadow: 0px 5px 10px 0px rgba(4, 12, 23, 0.2);
			background-color: rgba(43, 120, 220, 1);
			border-radius: 10px;
			border: 1px solid;
			margin-top: 20px;
			width: 300px;
			margin: 10px 10px 5px 50px;
		}
		.text1 {
			font-size: 32px;
			overflow-wrap: break-word;
			display: table-cell;
			vertical-align: middle;
			font-family: FZLTTHK--GBK1-0, FZLTTHK--GBK1;
			font-weight: normal;
			color: #000000;
		}
		.text_8 {
			font-size: 32px;
			overflow-wrap: break-word;
			display: table-cell;
			vertical-align: middle;
			padding-left: 21px;
			font-family: FZLTTHK--GBK1-0, FZLTTHK--GBK1;
			font-weight: normal;
			color: #ffffff;
		}
		.image_2 {
			display: block;
			width: 250px;
			height: 200px;
			margin-left: -20px;
			margin-right: 10px;
		}
		.right-text1 {
			color: rgba(0, 0, 0, 1);
			font-size: 24px;
			font-family: FZLTXHK--GBK1-0;
			text-align: left;
			line-height: 34px;
			display: block;
			margin-top: 41px;
			width: 250px;
			margin-left: -20px;
		}
		.el-col-18 {
			width: 0px;
		}
	}
	@media screen and (min-width: 820px) {
		.el-row {
			margin-bottom: 20px;
		}
		.wrapper {
			position: relative;
			width: 100%;
		}
		.el-col {
			border-radius: 4px;
		}
		.bg-purple-dark {
			background: #99a9bf;
		}
		.bg-purple {
			background: #fff;
		}
		.bg-purple-light {
			background: #e5e9f2;
		}
		.grid-content {
			border-radius: 4px;
			min-height: 70px;
		}
		.row-bg {
			padding: 10px 0;
			background-color: #f9fafc;
		}
		.rightBox {
			margin-top: 380px;
		}
		.bigClass {
			box-shadow: 0px 5px 10px 0px rgba(4, 12, 23, 0.2);
			background-color: rgba(255, 255, 255, 1);
			border-radius: 10px;
			border: 1px solid;
			float: left;
			width: 400px;
			/* margin: 10px 10px 5px 50px; */
			/* margin: 0 200px; */
			margin-top: 20px;
			margin-left: 200px;
			margin-right: 200px;
		}
		.Color {
			box-shadow: 0px 5px 10px 0px rgba(4, 12, 23, 0.2);
			background-color: rgba(43, 120, 220, 1);
			border-radius: 10px;
			border: 1px solid;
			margin-top: 20px;
			width: 400px;
			/* margin: 10px 10px 5px 50px; */
			margin-left: 200px;
			margin-right: 200px;
		}
		.text1 {
			font-size: 32px;
			overflow-wrap: break-word;
			display: table-cell;
			vertical-align: middle;
			font-family: FZLTTHK--GBK1-0, FZLTTHK--GBK1;
			font-weight: normal;
			color: #000000;
		}
		.text_8 {
			font-size: 32px;
			overflow-wrap: break-word;
			display: table-cell;
			vertical-align: middle;
			padding-left: 21px;
			font-family: FZLTTHK--GBK1-0, FZLTTHK--GBK1;
			font-weight: normal;
			color: #ffffff;
		}
		.image_2 {
			display: block;
			width: 550px;
			height: 300px;
			margin-left: -50px;
			margin-right: 10px;
		}
		.right-text1 {
			color: rgba(0, 0, 0, 1);
			font-size: 24px;
			font-family: FZLTXHK--GBK1-0;
			text-align: left;
			line-height: 34px;
			display: block;
			margin-top: 41px;
			width: 550px;
			margin-left: -20px;
		}
		.el-col-18 {
			width: 0px;
		}
	}
	@media screen and (min-width: 1080px) {
		.el-row {
			margin-bottom: 20px;
			&:last-child {
				margin-bottom: 0;
			}
		}
		.wrapper {
			position: relative;
			width: 100%;
		}
		.leftContent {
			position: fixed;
			top: 54px;
			bottom: 0;
			left: 0;
			width: 26%;
		}
		.rightContent {
			position: fixed;
			top: 54px;
			right: 0;
			bottom: 0;
			/* left: 301px; */
			overflow-y: auto;
		}
		.el-col {
			border-radius: 4px;
		}
		.bg-purple-dark {
			background: #99a9bf;
		}
		.bg-purple {
			background: #fff;
		}
		.bg-purple-light {
			background: #e5e9f2;
		}
		.grid-content {
			border-radius: 4px;
			min-height: 36px;
		}
		.row-bg {
			padding: 10px 0;
			background-color: #f9fafc;
		}
		.bigBox {
			margin-top: 80px;
		}
		.rightBox {
			margin-top: 80px;
			margin-left: 57px;
			margin-right: 91px;
		}
		.bigClass {
			box-shadow: 0px 5px 10px 0px rgba(4, 12, 23, 0.2);
			background-color: rgba(255, 255, 255, 1);
			border-radius: 10px;
			height: 70px;
			border: 1px solid;
			margin-left: 72px;
			margin-top: 20px;
			margin-bottom: 20px;
		}
		.Color {
			box-shadow: 0px 5px 10px 0px rgba(4, 12, 23, 0.2);
			background-color: rgba(43, 120, 220, 1);
			border-radius: 10px;
			height: 70px;
			border: 1px solid;
			margin-left: 72px;
			margin-top: 20px;
			margin-bottom: 20px;
		}
		.Color {
			box-shadow: 0px 5px 10px 0px rgba(4, 12, 23, 0.2);
			background-color: rgba(43, 120, 220, 1);
			border-radius: 10px;
			margin-left: 72px;
			margin-top: 42px;
			display: block;
		}
		.text1 {
			height: 70px;
			font-size: 32px;
			overflow-wrap: break-word;
			display: table-cell;
			vertical-align: middle;
			padding-left: 21px;
			font-family: FZLTTHK--GBK1-0, FZLTTHK--GBK1;
			font-weight: normal;
			color: #000000;
		}
		.text_8 {
			height: 70px;
			font-size: 32px;
			overflow-wrap: break-word;
			display: table-cell;
			vertical-align: middle;
			padding-left: 21px;
			font-family: FZLTTHK--GBK1-0, FZLTTHK--GBK1;
			font-weight: normal;
			color: #ffffff;
		}
		.image_2 {
			display: block;
			width: 100%;
		}
		.right-text1 {
			color: rgba(0, 0, 0, 1);
			font-size: 24px;
			font-family: FZLTXHK--GBK1-0;
			text-align: left;
			line-height: 34px;
			display: block;
			margin-top: 41px;
		}
	}
</style>
