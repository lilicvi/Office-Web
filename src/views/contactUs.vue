<template>
	<div id="app">
		<div class="container" ref="boxRef">
			<img
				class="image_2"
				referrerpolicy="no-referrer"
				src="~@/assets/aboutUs1.png"
			/>
			<div class="aboutUs-text">
				上海灵宙智能科技有限公司——“LINKSOUL”，是一家人工智能科技公司，专注于人工智能技术产品与应用。公司涉及SI集成领域，参与了上海浦东机场、上海中心、国家会展中心、中法航空大学等各个智能化项目。并开发人工智能AI+融合平台，达到技术与应用结合，为客户提供智能升级解决方案，让人工智能重新定义物业管理新模式。
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				viewHeight: 0, // 整屏的高度
				activeFlag: 0, // 当前索引标志位 用来颜色定位
				indexFlag: 0 // 滚动标志位
			}
		},
		mounted() {},
		methods: {}
	}
</script>

<style>
	html,
	body {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.container {
		width: 100%;
		height: 500%;
		position: absolute;
		top: 0;
		transition: all 0.3s;
		background-color: #fff;
	}

	.section {
		width: 100%;
		height: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.section1 {
		background-color: #fff;
	}
	.section2 {
		background-color: yellow;
	}
	.section3 {
		background-color: skyblue;
	}
	.section4 {
		background-color: green;
	}
	.section5 {
		background-color: red;
	}

	.controls {
		position: absolute;
		top: 50%;
		right: 20px;
		transform: translateY(-50%);
		list-style: none;
	}
	.controls li {
		width: 50px;
		height: 50px;
		font: bold 22px/50px '宋体';
		text-align: center;
		background: #000;
		color: #fff;
		cursor: pointer;
	}
	.controls li + li {
		margin-top: 5px;
	}

	.controls li.active {
		background: #fff;
		color: red;
	}
	.image_2 {
		width: 628px;
		height: 98px;
		margin: 80px 0 0 86px;
	}
	.aboutUs-text {
		width: 1744px;
		height: 177px;
		font-size: 24px;
		font-weight: normal;
		color: #000000;
		line-height: 34px;
		margin: 40px 0 0 86px;
	}
</style>
