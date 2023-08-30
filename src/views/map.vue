<template>
	<div>
		<el-tabs
			ref="tabs"
			@tab-click="handleClick"
			class="tabs"
			v-model="activeName"
		>
			<el-tab-pane label="上海" name="first" class="leftTab">
				<div class="tab1">
					<el-row :gutter="20">
						<el-col :span="12"
							><div
								class="grid-content bg-purple"
								id="container1"
							>
								<div>
									<div class="text1">
										地址：上海市长宁区遵义南路88号26层
									</div>
									<div class="text2">
										邮箱：info&#64;linksoul.tech
									</div>
									<div class="text3">
										电话：+86&nbsp;21&nbsp;6115&nbsp;7003
									</div>
									<div class="text4">微信：</div>
								</div>
							</div>
						</el-col>
						<el-col :span="12"
							><div
								class="grid-content bg-purple"
								id="containerMap"
							>
								<div>
									<div id="map"></div>
								</div></div
						></el-col>
					</el-row>
				</div>
			</el-tab-pane>
			<el-tab-pane label="香港" name="second">
				<div class="tab1">
					<el-row :gutter="20">
						<el-col :span="12"
							><div
								class="grid-content bg-purple"
								id="container2"
							>
								<div>
									<div class="text1">
										地址：沙田火炭38-42号坳背湾街华卫工贸中心5楼11室
									</div>
									<div class="text2">
										邮箱：info&#64;reinf.com
									</div>
									<div class="text3">电话：+852 26031339</div>
									<div class="text4">微信：</div>
								</div>
							</div>
						</el-col>
						<el-col :span="12"
							><div class="grid-content bg-purple">
								<div id="containerMap">
									<div id="sencodMap"></div>
								</div></div
						></el-col>
					</el-row>
				</div>
			</el-tab-pane>
		</el-tabs>
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
				},
				tabPosition: 'top',
				tab: '上海',
				activeName: 'first',
				longitude: 31.204244,
				latitude: 121.406199
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.initMap()
				// this.sencondMap()
			})
			this.handleClick(tab, event)
		},
		methods: {
			click() {
				// vue调用fullpapge的方法
				this.$refs.page.api.moveSectionDown()
				// moveSectionDown();
			},

			handleClick(tab, event) {
				if (tab.index === '0') {
					//上海
					this.longitude = 31.204244
					this.latitude = 121.406199
					this.initMap()
				} else {
					//香港
					this.longitude = 22.397996
					this.latitude = 114.196254
					// this.sencondMap()
					this.$nextTick(() => {
						this.sencondMap()
						// this.sencondMap()
					})
				}
				// this.resetActivePosition(this.$refs.tabs.$el)
			},
			initMap() {
				// 定义地图中心点坐标
				// const center = new window.TMap.LatLng(31.204244, 121.406199)
				var center = new window.TMap.LatLng(this.longitude, this.latitude)
				// 定义map变量，调用 TMap.Map() 构造函数创建地图
				var map = new window.TMap.Map(document.getElementById('map'), {
					center: center, // 设置地图中心点坐标
					zoom: 15, // 设置地图缩放级别
					pitch: 20, // 设置俯仰角
					rotation: 0 // 设置地图旋转角度
				})
				var markerLayer = new window.TMap.MultiMarker({
					map: map,
					styles: {
						//创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
						myStyle: new TMap.MarkerStyle({
							width: 25, // 点标记样式宽度（像素）

							height: 35 // 点标记样式高度（像素）

							// "src": './images/R-C.png',  //图片路径

							//焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点

							// "anchor": { x: 16, y: 32 }  //marker点图片跟据焦点位置的偏移量
						})
					},
					//点标记数据数组
					geometries: [
						{
							id: '1', //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
							styleId: 'myStyle', //指定样式id
							position: new window.TMap.LatLng(31.204244, 121.406199), //点标记坐标位置
							properties: {
								//自定义属性
								title: '上海'
							}
						}
					]
				})
				var infoWindow = new TMap.InfoWindow({
					map: map,

					position: new TMap.LatLng(39.984104, 116.307503) //信息窗口默认位置
				})
				infoWindow.close()
				markerLayer.on('click', function (evt) {
					infoWindow.close() //先关闭已打开信息窗口

					infoWindow.open() //再打开 并赋给新的值

					infoWindow.setPosition(evt.geometry.position) //设置信息窗位置

					infoWindow.setContent(`<div><p>协泰中心</p></div>`) //设置信息窗内容

					console.log(evt)
				})
			},
			sencondMap() {
				// 定义地图中心点坐标
				var center = new window.TMap.LatLng(22.397996, 114.196254)
				// 定义map变量，调用 TMap.Map() 构造函数创建地图
				// this.map.clearOverLays()
				var map2 = new window.TMap.Map(
					document.getElementById('sencodMap'),
					{
						center: center, // 设置地图中心点坐标
						zoom: 15, // 设置地图缩放级别
						pitch: 20, // 设置俯仰角
						rotation: 0 // 设置地图旋转角度
					}
				)
				var markerLayer = new window.TMap.MultiMarker({
					map: map2,
					styles: {
						//创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
						myStyle: new TMap.MarkerStyle({
							width: 25, // 点标记样式宽度（像素）

							height: 35 // 点标记样式高度（像素）

							// "src": './images/R-C.png',  //图片路径

							//焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点

							// "anchor": { x: 16, y: 32 }  //marker点图片跟据焦点位置的偏移量
						})
					},
					//点标记数据数组
					geometries: [
						{
							id: '1', //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
							styleId: 'myStyle', //指定样式id
							position: new window.TMap.LatLng(22.397996, 114.196254), //点标记坐标位置
							properties: {
								//自定义属性
								title: '香港'
							}
						}
					]
				})
				var infoWindow = new TMap.InfoWindow({
					map: map2,

					position: new TMap.LatLng(22.397996, 114.196254) //信息窗口默认位置
				})
				infoWindow.close()
				markerLayer.on('click', function (evt) {
					infoWindow.close() //先关闭已打开信息窗口

					infoWindow.open() //再打开 并赋给新的值

					infoWindow.setPosition(evt.geometry.position) //设置信息窗位置

					infoWindow.setContent(`<div><p>华卫工贸中心</p></div>`) //设置信息窗内容

					console.log(evt)
				})
			},
			resetActivePosition($el) {
				// tabs的样式修改
				this.$nextTick(() => {
					const activeEl = $el.querySelector('.el-tabs__item.is-active')
					const lineEl = $el.querySelector('.el-tabs__active-bar')
					const style = getComputedStyle(activeEl)
					const pl = style.paddingLeft.match(/\d+/)[0] * 1
					const pr = style.paddingRight.match(/\d+/)[0] * 1
					const w = style.width.match(/\d+/)[0] * 1
					lineEl.style.transform =
						'translateX(' + (activeEl.offsetLeft + pl) + 'px)'
					lineEl.style.width = w - pl - pr + 'px'
				})
			}
		}
	}
</script>
<style>
	@media screen and (min-width: 390px) {
		.el-tabs__nav-wrap::after {
			position: static !important;
		}
		.el-col-12 {
		}
		#map {
			width: 312px;
			height: 231px;
			border: 1px solid #fff;
		}
		#sencodMap {
			width: 312px;
			height: 231px;
			border: 1px solid #fff;
		}
		#tab-first {
			font-size: 36px;
			font-family: FZLTTHK--GBK1-0, FZLTTHK--GBK1;
			font-weight: normal;
			color: #b5b5b5;
			line-height: 50px;
			margin-left: 10px;
			margin-top: 80px;
			margin-right: 10px;
		}
		#tab-second {
			font-size: 36px;
			font-family: FZLTTHK--GBK1-0, FZLTTHK--GBK1;
			font-weight: normal;
			color: #b5b5b5;
			line-height: 50px;
		}
		.leftTab {
		}
		.el-tabs__active-bar {
			background-color: transparent !important;
		}
		.el-tabs__item {
			color: #b5b5b5 !important;
		}
		.el-tabs__item.is-active {
			color: #2b78dc !important;
		}
		#container1 {
			margin-left: 56px;
			margin-top: 46px;
			font-size: 24px;
			font-weight: normal;
			color: #000000;
			line-height: 34px;
			width: 300px;
		}
		#containerMap {
			margin-top: 46px;
			font-size: 24px;
			font-weight: normal;
			color: #000000;
			line-height: 34px;
			width: 300px;
			display: block;
			margin-left: -150px;
			margin-top: 250px;
		}
		#container2 {
			margin-left: 56px;
			margin-top: 46px;
			font-size: 24px;
			font-weight: normal;
			color: #000000;
			line-height: 34px;
			width: 300px;
		}
		/*  */
		.el-row {
			margin-bottom: 20px;
			&:last-child {
				margin-bottom: 0;
			}
		}
		.el-col {
			border-radius: 4px;
		}
		.bg-purple-dark {
			background: #fff;
		}
		.bg-purple {
			background: #d3dce6;
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
		.bg-purple {
			background: #fff;
		}
	}
	@media screen and (min-width: 820px) {
		.el-tabs__nav-wrap::after {
			position: static !important;
		}
		.el-col-12 {
		}
		#map {
			width: 612px;
			height: 431px;
			border: 1px solid #fff;
		}
		#sencodMap {
			width: 612px;
			height: 431px;
			border: 1px solid #fff;
		}
		#tab-first {
			font-size: 36px;
			font-family: FZLTTHK--GBK1-0, FZLTTHK--GBK1;
			font-weight: normal;
			color: #b5b5b5;
			line-height: 50px;
			margin-left: 30px;
			margin-top: 80px;
			margin-right: 50px;
		}
		#tab-second {
			font-size: 36px;
			font-family: FZLTTHK--GBK1-0, FZLTTHK--GBK1;
			font-weight: normal;
			color: #b5b5b5;
			line-height: 50px;
		}
		.leftTab {
		}
		.el-tabs__active-bar {
			background-color: transparent !important;
		}
		.el-tabs__item {
			color: #b5b5b5 !important;
		}
		.el-tabs__item.is-active {
			color: #2b78dc !important;
		}
		#container1 {
			margin-left: 56px;
			margin-top: 46px;
			font-size: 24px;
			font-weight: normal;
			color: #000000;
			line-height: 52px;
			width: 500px;
		}
		#containerMap {
			margin-top: 46px;
			font-size: 24px;
			font-weight: normal;
			color: #000000;
			line-height: 34px;
			width: 500px;
			display: block;
			margin-left: -300px;
			margin-top: 350px;
		}
		#container2 {
			margin-left: 56px;
			margin-top: 46px;
			font-size: 24px;
			font-weight: normal;
			color: #000000;
			line-height: 52px;
			width: 500px;
		}
		/*  */
		.el-row {
			margin-bottom: 20px;
			&:last-child {
				margin-bottom: 0;
			}
		}
		.el-col {
			border-radius: 4px;
		}
		.bg-purple-dark {
			background: #fff;
		}
		.bg-purple {
			background: #d3dce6;
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
		.bg-purple {
			background: #fff;
		}
	}
	@media screen and (min-width: 1080px) {
		div {
			margin: 0;
			padding: 0;
		}
		.cc {
		}
		.box1 {
			background-color: #ffffff;
		}
		.box1-text1 {
			font-size: 48px;
			font-weight: normal;
			color: #ffffff;
			line-height: 66px;
			margin-top: 300px;
			text-align: center;
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
		}
		.box2 {
			background-image: url('~@/assets/product2.png');
			background-size: 100% 100%;
			/* background-repeat: no-repeat; */
			/* width: 100%; */
			display: block;
			margin: 0 auto;
			opacity: 0.6;
			background: #000000;
		}
		/*  */
		#map {
			width: 712px;
			height: 431px;
			border: 1px solid #fff;
			margin-top: 86px;
			margin-left: 412px;
		}
		#hongkongMap {
			width: 712px;
			height: 431px;
			border: 1px solid #fff;
			margin-top: 86px;
			margin-left: 412px;
		}

		.img {
			width: 150px;
		}
		.container {
			display: flex;
			flex-wrap: wrap;
		}
		.page {
			position: relative;
			width: 1920px;
			height: 1610px;
			overflow: hidden;
		}

		.text_1 {
			width: 36px;
			height: 25px;
			overflow-wrap: break-word;
			color: rgba(152, 152, 152, 1);
			font-size: 18px;
			font-family: PingFangSC-Regular;
			font-weight: NaN;
			text-align: left;
			white-space: nowrap;
			line-height: 25px;
			margin: 37px 0 0 425px;
		}

		.text_2 {
			width: 72px;
			height: 25px;
			overflow-wrap: break-word;
			color: rgba(152, 152, 152, 1);
			font-size: 18px;
			font-family: PingFangSC-Regular;
			font-weight: NaN;
			text-align: left;
			white-space: nowrap;
			line-height: 25px;
			margin: 37px 0 0 106px;
		}

		.text_3 {
			width: 72px;
			height: 25px;
			overflow-wrap: break-word;
			color: rgba(255, 255, 255, 1);
			font-size: 18px;
			font-family: PingFangSC-Regular;
			font-weight: NaN;
			text-align: left;
			white-space: nowrap;
			line-height: 25px;
			margin: 37px 0 0 88px;
		}

		.text_4 {
			width: 72px;
			height: 25px;
			overflow-wrap: break-word;
			color: rgba(152, 152, 152, 1);
			font-size: 18px;
			font-family: PingFangSC-Regular;
			font-weight: NaN;
			text-align: left;
			white-space: nowrap;
			line-height: 25px;
			margin: 37px 0 0 88px;
		}
		.tabClass {
			margin-top: 80px;
			margin-left: 90px;
		}
		.text1 {
			font-size: 24px;
			font-weight: normal;
			color: #000000;
			line-height: 34px;
			margin-top: 50px;
			margin-left: 84px;
		}
		.text2 {
			font-size: 24px;
			font-weight: normal;
			color: #000000;
			line-height: 34px;
			margin-left: 84px;
		}
		.text3 {
			font-size: 24px;
			font-weight: normal;
			color: #000000;
			line-height: 34px;
			margin-left: 84px;
		}
		.text4 {
			font-size: 24px;
			font-weight: normal;
			color: #000000;
			line-height: 34px;
			margin-left: 84px;
		}
		::v-deep .el-tabs__content {
			overflow: visible;
		}
		::v-deep .el-tabs__item {
			/* color: white; */
			padding: 0 20px;
			height: 40px;
			box-sizing: border-box;
			line-height: 40px;
			display: inline-block;
			list-style: none;
			font-size: 36px;
			font-weight: 500;
			color: #303133;
			position: relative;
			margin-left: 90px;
		}
		::v-deep .el-tabs__item.is-active {
			color: #15cbf3;
			font-size: 36px;
			margin-left: 90px;
		}
		::v-deep .el-icon-arrow-left {
			color: white;
		}
		::v-deep .el-icon-arrow-right {
			color: white;
		}
		::v-deep .el-tabs__active-bar {
			background-color: #15cbf3;
		}
		::v-deep .el-tabs__nav-wrap::after {
			content: '';
			position: static !important;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 2px;
			background-color: #fff;
			z-index: 1;
		}
	}
</style>

