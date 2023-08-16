<template>
  <div id="app">
    <div class="container" ref="boxRef">
      <div class="section section1"><h1>第一屏</h1></div>
      <div class="section section2"><h1>第二屏</h1></div>
      <div class="section section3"><h1>第三屏</h1></div>
      <div class="section section4"><h1>第四屏</h1></div>
      <div class="section section5"><h1>第五屏</h1></div>
    </div>

    <ul class="controls">
      <li
        v-for="(item, index) in 5"
        :key="index"
        @click="activeFn(index)"
        :class="activeFlag === index ? 'active' : ''"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      viewHeight: 0, // 整屏的高度
      activeFlag: 0, // 当前索引标志位 用来颜色定位
      indexFlag: 0 // 滚动标志位
    }
  },
  mounted () {
    this.viewHeight = window.innerHeight
    // console.log(this.viewHeight)
    window.addEventListener('mousewheel', this.handleScroll)
  },
  methods: {
    /**
     * 鼠标滚动方法
     * @param {*} e 
     */
    handleScroll (e) {
      console.log(e.wheelDelta)

      // 鼠标往上滚
      if (e.wheelDelta === 120) {
        this.indexFlag--
        if (this.indexFlag < 0) {
          this.indexFlag = 0
        }
      }
      if (e.wheelDelta === -120) {
        this.indexFlag++
        console.log(this.indexFlag)
        if (this.indexFlag >= 5) {
          this.indexFlag = 4
        }
      }
      this.$refs.boxRef.style.top = -this.indexFlag * this.viewHeight + 'px'
      this.activeFn(this.indexFlag)
      // console.log(this.$refs.boxRef.style.top)
    },
    /**
     * 右侧小标记
     * @param {*} i 
     */
    activeFn (i) {
      this.activeFlag = i
      // console.log(this.$refs.boxRef.style.top)
      this.$refs.boxRef.style.top = -i * this.viewHeight + 'px'
    }
  }
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
  background-color: pink;
}

.section {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section1 {
  background-color: pink;
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
</style>
