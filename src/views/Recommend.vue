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
    <!-- 今日推荐 -->
    <div class="recommend">
      <div class="recommend_title">
        <h3>今日推荐</h3>
        <span>精选好物 推荐单品</span>
      </div>
      <div class="recommend_goods">
        <a class="recommend_goods_info" href="mantianxingshoubiao">
          <div><img src="../components/mantianxingshoubiao/mantianxingshoubiao.jpg" alt="" /></div>
          <span class="recommend_goods_info_title">Armani阿玛尼满天星女表</span>
          <span class="recommend_goods_info_into">青城虎爷专卖店</span>
          <span class="recommend_goods_info_money"
            >原价：
            <h3>￥ 2999.00</h3></span
          >
        </a>
        <a class="recommend_goods_info" href="jierouzhijin">
          <div><img src="../components/jierouzhijin/jierouzhijin.jpg" alt="" /></div>
          <span class="recommend_goods_info_title">洁柔抽纸 Face系列</span>
          <span class="recommend_goods_info_into">青城虎爷专卖店</span>
          <span class="recommend_goods_info_money"
            >原价：
            <h3>￥ 36</h3></span
          >
        </a>
        <a class="recommend_goods_info" href="xiangshuimuyulu">
          <div><img src="../components/xiangshuimuyulu/xiangshuimuyulu.jpg" alt="" /></div>
          <span class="recommend_goods_info_title">LG菲诗小铺浪漫邂逅香水沐浴露</span>
          <span class="recommend_goods_info_into">青城虎爷专卖店</span>
          <span class="recommend_goods_info_money"
            >原价：
            <h3>￥ 35</h3></span
          >
        </a>
        <a class="recommend_goods_info" href="fangtuofaxifashui">
          <div><img src="../components/fangtuofaxifashui/fangtuofaxifashui.jpg" alt="" /></div>
          <span class="recommend_goods_info_title">吕黄吕防脱乌发固发滋养洗发水</span>
          <span class="recommend_goods_info_into">青城虎爷专卖店</span>
          <span class="recommend_goods_info_money"
            >原价：
            <h3>￥ 185.00</h3></span
          >
        </a>
        <a class="recommend_goods_info" href="dwshoubiao">
          <div><img src="../components/dwshoubiao/dwshoubiao.jpg" alt="" /></div>
          <span class="recommend_goods_info_title">DW手表情侣对表</span>
          <span class="recommend_goods_info_into">青城虎爷专卖店</span>
          <span class="recommend_goods_info_money"
            >原价：
            <h3>￥ 2799.00</h3></span
          >
        </a>
        <a class="recommend_goods_info" href="dwshouzhuo">
          <div><img src="../components/dwshouzhuo/dwshouzhuo.jpg" alt="" /></div>
          <span class="recommend_goods_info_title">dw情侣手镯</span>
          <span class="recommend_goods_info_into">青城虎爷专卖店</span>
          <span class="recommend_goods_info_money"
            >原价：
            <h3>￥ 589.00</h3></span
          >
        </a>
        
      </div>
    </div>
    <!-- 明星同款 -->
    <div class="recommend">
      <div class="recommend_title">
        <h3 style="color:#0f91a0">明星同款</h3>
        <span>大牌服饰  推荐单品</span>
      </div>
      <div class="recommend_goods">
        <a class="recommend_goods_info" href="shentimoshagao">
          <div><img src="../components/shentimoshagao/shentimoshagao.jpg" alt="" /></div>
          <span class="recommend_goods_info_title">Oh Baby身体磨砂膏</span>
          <span class="recommend_goods_info_into">青城虎爷专卖店</span>
          <span class="recommend_goods_info_money"
            >原价：
            <h3>￥ 125.00</h3></span
          >
        </a>
        <a class="recommend_goods_info" href="maoyanjiao">
          <div><img src="../components/maoyanjiao/maoyanjiao.jpg" alt="" /></div>
          <span class="recommend_goods_info_title">猫眼胶指甲油</span>
          <span class="recommend_goods_info_into">青城虎爷专卖店</span>
          <span class="recommend_goods_info_money"
            >原价：
            <h3>￥ 19.80</h3></span
          >
        </a>
        <a class="recommend_goods_info" href="shuixingzhijiayou">
          <div><img src="../components/shuixingzhijiayou/shuixingzhijiayou.jpg" alt="" /></div>
          <span class="recommend_goods_info_title">可撕拉指甲油</span>
          <span class="recommend_goods_info_into">青城虎爷专卖店</span>
          <span class="recommend_goods_info_money"
            >原价：
            <h3>￥ 21.90-36.90 </h3></span
          >
        </a>
        
      </div>
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
// 今日推荐区域
.recommend {
  width: 80%;
  padding: 30px 0;
  min-width: 1000px;
  margin: 30px auto;
  border: 1px solid #ccc;
  .recommend_title {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    h3 {
      font-size: 30px;
      color: #fe9b1d;
      margin: 0 0 10px 10px;
    }
    span {
      font-size: 12px;
      margin-left: 30px;
    }
  }
  .recommend_goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .recommend_goods_info {
      display: flex;
      flex-direction: column;
      width: 30%;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
      .recommend_goods_info_title{
        color: #333;
        font-size: 16px;
      }
      .recommend_goods_info_into{
        color: #666;
        font-size: 12px;
      }
      .recommend_goods_info_money{
        color: #888;
        font-size: 14px;
        display: flex;
        align-items:center;
        h3{
          color: #ff3366;
          font-size: 22px;
          margin: 0;
        }
      }
    }
  }
}
</style>
