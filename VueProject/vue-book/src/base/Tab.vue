<template>
    <div class="footer">
      <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-liebiao"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-webicon308"></i>
        <span>添加</span>
      </router-link>
    </div>
</template>

<script>
    // 默认导出一个对象
    export default {
        data(){
            return {}
        },
        methods: {},
        components: {},
        computed: {}
        //.vue文件会默认将template中结构插入到导出的这个对象中；
    }
</script>

<style scoped lang="less">
  .footer{
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
    border-top: 1px solid #ccc;
    z-index: 99;
    background: #fff;
    a{
      display: flex;
      /* 每个a标签占相同的比例； */
      flex: 1;
      flex-direction: column; /* 上下布局 */
      font-size: 18px;
      align-items: center; /* 水平居中 */
      color: yellowgreen;
    }
    /* 点击的路由对应的会有class ：router-link-active； */
    .router-link-active{
      color: red;
    }
  }
  .iconfont{
    font-size: 25px;
  }
</style>
