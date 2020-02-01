<template>
  <div>
    <!-- 首页bannner -->
    <div class="banner">
      <div class="banner_text">
        <span>INS 潮流前线</span>
        <span>积分优惠享不停</span>
        <el-button type="danger" round plain size="medium">查看详情</el-button>
      </div>
    </div>

    <!-- 秒杀专区 -->
    <div class="about">
      <div class="about_title">
        <h3>关于我们</h3>
        <span>精选好物  推荐单品</span>
      </div>
      <h2>
         此网站为段珂毕业设计所用，全部解释权归段珂所有
      </h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// banner
.banner {
  background-image: url("../assets/image/Recommend/banner.jpg");
  height: 474px;
  width: 100%;
  background-position: center center;
  .banner_text {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: 30%;
    padding-top: 50px;
    :nth-of-type(1) {
      font-size: 50px;
      color: rgb(1, 213, 213);
    }
    :nth-of-type(2) {
      font-size: 30px;
      color: #faba64;
    }
    .el-button {
      margin-top: 30px;
      font-size: 30px !important;
      color: red !important;
    }
  }
}
// 关于我们
.about {
  width: 80%;
  padding: 30px 0;
  min-width: 1000px;
  margin: 30px auto;
  border: 1px solid #ccc;
  .about_title {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    h3 {
      font-size: 30px;
      color: #56c1ff;
      margin: 0 0 10px 10px;
    }
    span {
      font-size: 12px;
      margin-left: 30px;
    }
  }
  h2{
      text-align: center
  }
}
</style>
