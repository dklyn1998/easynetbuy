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
    <div class="discount">
      <div class="discount_title">
        <h3>秒杀专区</h3>
        <span>大牌精选 推荐单品</span>
      </div>
      <div class="discount_info">
        <div class="discount_info_goods">
          <div class="discount_info_goods_img">
            <img src="../components/tangbobaiqibao/tangbobaiqibao.jpg" alt="" /><span
              class="discount_info_goods_name"
              >TORY BURCH 汤丽柏琦</span
            >
          </div>

          <div class="money_miaosha">
            <span>￥2950.00</span><span>1天5秒</span>
          </div>
          <router-link to="/tangbobaiqibao">立刻秒杀</router-link>
        </div>
        <div class="discount_info_goods">
          <div class="discount_info_goods_img">
            <img src="../components/kouchi/kouchi.jpg" alt="" /><span
              class="discount_info_goods_name"
              >COACH蔻驰 TABBY</span
            >
          </div>

          <div class="money_miaosha">
            <span>￥4500.00</span><span>1天5秒</span>
          </div>
          <router-link to="/kouchi">立刻秒杀</router-link>
        </div>
        <div class="discount_info_goods">
          <div class="discount_info_goods_img">
            <img src="../components/yuganyou/yuganyou.jpg" alt="" /><span
              class="discount_info_goods_name"
              >bio island澳洲进口婴幼儿童鳕鱼肝油</span
            >
          </div>

          <div class="money_miaosha">
            <span>￥ 278.00</span><span>1天5秒</span>
          </div>
          <router-link to="/yuganyou">立刻秒杀</router-link>
        </div>
        <div class="discount_info_goods">
          <div class="discount_info_goods_img">
            <img src="../components/mantianxingshoubiao/mantianxingshoubiao.jpg" alt="" /><span
              class="discount_info_goods_name"
              >Armani阿玛尼满天星女表</span
            >
          </div>

          <div class="money_miaosha">
            <span>￥2999.00</span><span>1天5秒</span>
          </div>
          <router-link to="/mantianxingshoubiao">立刻秒杀</router-link>
        </div>
        <div class="discount_info_goods">
          <div class="discount_info_goods_img">
            <img src="../components/dwshoubiao/dwshoubiao.jpg" alt="" /><span
              class="discount_info_goods_name"
              >Daniel Wellington男女dw手表</span
            >
          </div>

          <div class="money_miaosha">
            <span>￥2799.00</span><span>1天5秒</span>
          </div>
          <router-link to="/dwshoubiao">立刻秒杀</router-link>
        </div>
        <div class="discount_info_goods">
          <div class="discount_info_goods_img">
            <img src="../components/dwshouzhuo/dwshouzhuo.jpg" alt="" /><span
              class="discount_info_goods_name"
              >丹尼尔惠灵顿dw情侣手镯</span
            >
          </div>

          <div class="money_miaosha">
            <span>￥ 589.00</span><span>1天5秒</span>
          </div>
          <router-link to="/dwshouzhuo">立刻秒杀</router-link>
        </div>
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
// 秒杀专区
.discount {
  width: 80%;
  padding: 30px 0;
  min-width: 1000px;
  margin: 30px auto;
  border: 1px solid #ccc;
  .discount_title {
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

  .discount_info {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .discount_info_goods {
      display: flex;
      justify-content: space-between;
      width: 30%;
      flex-direction: column;
      margin-bottom: 30px;
      .discount_info_goods_img {
        position: relative;
        img {
          width: 100%;
        }
        .discount_info_goods_name {
          display: block;
          background-color: rgba(255, 255, 255, 0.3);
          position: absolute;
          bottom: 5px;
          left: 0;
          right: 0;
          color: #0f91a0;
        }
      }
      .money_miaosha {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #efefef;
        height: 30px;
        padding: 10px;
        :first-child {
          font-size: 20px;
          color: #ff7800;
        }
        :last-child {
          font-size: 12px;
          color: #666;
        }
      }
    }
    a {
      color: #fff;
      font-size: 18px;
      background-color: #2ec6ce;
      height: 35px;
      text-align: center;
      line-height: 35px;
    }
  }
}
</style>
