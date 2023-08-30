<template>
	<q-layout view="lHh Lpr lFf">
		<q-header class="page-header" elevated>
			<div class="row items-center menu q-gutter-x-lg">
				<!-- <q-img
					class="col-3 text-left"
					width="1.24rem"
					height=".36rem"
					src="../assets/home/xx_logo.png"
				/>
				<q-space /> -->
				<router-link
					class="link text"
					v-for="item in tabs"
					:key="item.name"
					:class="{ active: tab === item.name }"
					:to="{ name: item.name }"
				>
					{{ item.name }}
				</router-link>
				<!-- <el-dropdown trigger="click">
					<span class="link text cursor-pointer">
						{{ $t('nav.Language')
						}}<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item @click="langClick('zh-CN')"
								>中文</el-dropdown-item
							>
							<el-dropdown-item @click="langClick('en-US')"
								>English</el-dropdown-item
							>
						</el-dropdown-menu>
					</template>
				</el-dropdown> -->
			</div>
		</q-header>

		<!-- <q-footer
			class="row justify-between page-footer"
			:class="{ 'footer-last': footerLast }"
			elevated
		>
			<div>
				Copyright © 2020 Xin Xiang Global Technology Inc. All Rights
				Reserved
			</div>
			<div>{{ $t('foot.contactUs') }}</div>
			<div>沪ICP备2020035831号-3</div>
		</q-footer> -->

		<q-page-container class="page-container">
			<router-view v-model:footerLast="footerLast" />
		</q-page-container>
	</q-layout>
</template>

<script>
	import { defineComponent, ref } from 'vue'
	// import { i18n } from 'src/boot/i18n'

	export default defineComponent({
		name: 'MainLayout',

		data() {
			return {
				tab: 'about',
				//   $t: i18n.global.t,
				footerLast: false,
				tabs: [
					{
						name: 'about',
						label: 'About us'
					},
					{
						name: 'solutions',
						label: 'Solutions'
					},
					{
						name: 'join',
						label: 'Join us'
					}
				]
			}
		},

		watch: {
			$route: {
				handler(to, form) {
					this.tab = to.name
					this.footerLast = false
				},
				immediate: true
			}
		},

		methods: {
			langClick(lang) {
				// this.$i18n.locale = lang
			}
		}
	})
</script>

<style lang="scss" scoped>
	.page-header {
		height: 0.6rem;
		background-color: #eff5ff;
		box-shadow: 0 0.04rem 0.1em rgba(1, 85, 155, 0.1);
		.menu {
			height: 0.6rem;
			margin: 0 1rem;
			.text {
				font-family: Noto Sans;
				font-style: normal;
				font-weight: 600;
				font-size: 0.16rem;
				line-height: 0.22rem;
				color: #43536d;
			}
			// .active {
			//   color: #2a62ff;
			// }
		}
		.link {
			text-decoration: none;
		}
	}

	.page-footer {
		height: 0.24rem;
		line-height: 0.24rem;
		padding: 0 1.2rem;
		font-size: 0.12rem;
		color: #000000;
		background: rgba(255, 255, 255, 0.8);
		box-shadow: 0px 4px 20px rgba(14, 49, 73, 0.04);
	}

	.page-container::-webkit-scrollbar {
		display: none; /* Chrome Safari */
	}
	.page-container {
		height: calc(100vh);
		padding-top: 0.6rem;
		scrollbar-width: none; /* firefox */
		-ms-overflow-style: none; /* IE 10+ */
		overflow-x: hidden;
		overflow-y: auto;
	}

	.footer-last {
		background: black;
		color: white;
		border-top: 1px solid #ecd560;
	}
</style>
