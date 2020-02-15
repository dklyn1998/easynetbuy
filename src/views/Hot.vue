<template>
  <div>
    <!-- 首页bannner -->
    <div class="banner">
      <div class="banner_text">
        <span>INS 潮流前线</span>
        <span>积分优惠享不停</span>
        <el-button type="danger" round plain size="medium"><router-link to='life'> 查看详情</router-link> </el-button>
      </div>
    </div>
    <!-- 精选品牌 -->
    <div class="choose">
      <div class="choose_title">
        <h3>精选品牌</h3>
        <span>为你精选最值得买的品牌</span>
      </div>
      <div class="choose_info">
        <div><img src="../assets/image/Hot/shuiguo.jpg" alt="" /></div>
        <div><img src="../assets/image/Hot/muji.jpg" alt="" /></div>
        <div><img src="../assets/image/Hot/adi.jpg" alt="" /></div>
        <div><img src="../assets/image/Hot/chanel.jpg" alt="" /></div>
        <div><img src="../assets/image/Hot/hm.jpg" alt="" /></div>
        <div><img src="../assets/image/Hot/anta.jpg" alt="" /></div>
        <div><img src="../assets/image/Hot/huawei.jpg" alt="" /></div>
        <div><img src="../assets/image/Hot/songshu.jpg" alt="" /></div>
        <div><img src="../assets/image/Hot/hasee.jpg" alt=""></div>
        <div><img src="../assets/image/Hot/lv.jpg" alt=""></div>
      </div>
    </div>
    <!-- 热卖单品 -->
    <div class="recommend">
      <div class="recommend_title">
        <h3>热卖单品</h3>
        <span>大牌精选  推荐单品</span>
      </div>
      <div class="recommend_goods">
        <router-link class="recommend_goods_info" to="niuzaiwaitaonv">
          <div><img src="../components/niuzaiwaitaonv/niuzaiwaitaonv.jpg" alt="" /></div>
          <span class="recommend_goods_info_title">百搭牛仔拼接短外套</span>
          <span class="recommend_goods_info_into">青城虎爷专卖店</span>
          <span class="recommend_goods_info_money"
            >原价：
            <h3>￥ 149.00</h3></span
          >
        </router-link>
        <router-link class="recommend_goods_info" to="liweisiniuzaiyi">
          <div><img src="../components/liweisiniuzaiyi/liweisiniuzaiyi.jpg" alt="" /></div>
          <span class="recommend_goods_info_title">Levi's李维斯翻领纯色牛仔</span>
          <span class="recommend_goods_info_into">青城虎爷专卖店</span>
          <span class="recommend_goods_info_money"
            >原价：
            <h3>￥ 599.00</h3></span
          >
        </router-link>
        <router-link class="recommend_goods_info" to="lianyiqun">
          <div><img src="../components/lianyiqun/lianyiqun.jpg" alt="" /></div>
          <span class="recommend_goods_info_title">ins网红风仙女蕾丝连衣裙</span>
          <span class="recommend_goods_info_into">青城虎爷专卖店</span>
          <span class="recommend_goods_info_money"
            >原价：
            <h3>￥ 749.00</h3></span
          >
        </router-link>
        <router-link class="recommend_goods_info" to="fengyi">
          <div><img src="../components/fengyi/fengyi.jpg" alt="" /></div>
          <span class="recommend_goods_info_title">新款女装格纹系带长款风衣</span>
          <span class="recommend_goods_info_into">青城虎爷专卖店</span>
          <span class="recommend_goods_info_money"
            >原价：
            <h3>￥ 2710.00 </h3></span
          >
        </router-link>
        <router-link class="recommend_goods_info" to="chenshannv">
          <div><img src="../components/chenshannv/chenshannv.jpg" alt="" /></div>
          <span class="recommend_goods_info_title">拼接假两件衬衫上衣</span>
          <span class="recommend_goods_info_into">青城虎爷专卖店</span>
          <span class="recommend_goods_info_money"
            >原价：
            <h3>￥ 852.00 </h3></span
          >
        </router-link>
        <router-link class="recommend_goods_info" to="pikunv">
          <div><img src="../components/pikunv/pikunv.jpg" alt="" /></div>
          <span class="recommend_goods_info_title">edition高腰绵羊皮皮裤</span>
          <span class="recommend_goods_info_into">青城虎爷专卖店</span>
          <span class="recommend_goods_info_money"
            >原价：
            <h3>￥ 3599.00 </h3></span
          >
        </router-link>
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
//   精选品牌
.choose {
  width: 80%;
  padding: 30px 0;
  min-width: 1000px;
  margin: 30px auto;
  border: 1px solid #ccc;

  .choose_title {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    h3 {
      font-size: 30px;
      color: #aa56ff;
      margin: 0 0 10px 10px;
    }
    span {
      font-size: 12px;
      margin-left: 30px;
    }
  }
  .choose_info{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        div{
            width: 19%;
            display: flex;
            img{
                width: 100%;
            }
        }
    }
}
// 热卖单品
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
      color: #56c1ff;
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
