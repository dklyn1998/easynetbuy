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
         好买网于2004年正式涉足电商领域，2018年，好买网集团市场交易额接近1.7万亿元*。2019年7月，好买网集团第四次入榜《财富》全球500强，位列第139位，是中国线上线下最大的零售集团。

2014年5月，好买网集团在美国纳斯达克证券交易所正式挂牌上市，是中国第一个成功赴美上市的大型综合型电商平台。2015年7月，好买网凭借高成长性入选纳斯达克100指数和纳斯达克100平均加权指数。

2019年前三个季度，好买网集团净收入达4062亿元，非美国通用会计准则下（Non-GAAP）归属于普通股股东的净利润近100亿元，创历史最高纪录；研发投入超过130亿元，跃升为中国企业中对技术投入最多的公司之一。

好买网集团定位于“以供应链为基础的技术与服务企业”，目前业务已涉及零售、数字科技、物流、技术服务、健康、保险、物流地产、云计算、AI和海外等领域，其中核心业务为零售、数字科技、物流、技术服务四大板块。

好买网集团奉行客户为先 、诚信、 协作、 感恩 、拼搏 、担当的价值观，目标是成为全球最值得信赖的企业。
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
