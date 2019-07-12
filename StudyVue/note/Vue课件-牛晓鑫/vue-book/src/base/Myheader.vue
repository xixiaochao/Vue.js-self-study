<template>
    <div class="header">
<slot></slot>
      <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
    </div>
</template>

<script>
    // 默认导出一个对象
    export default {
        data() {
            return {}
        },
      props:["back"],
        methods: {
          goBack(){
            this.$router.go(-1)
          }
        },
        components: {},
        computed: {}
    }
</script>

<style scoped>
  .header{
    position: fixed;
    width: 100%;
    background: #afd9ee;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .icon-fanhui{
    position: absolute;
    left: 10px;
  }
</style>
