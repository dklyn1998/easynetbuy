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
    <!-- 下方图片信息 -->
    <div class="daily_recommend">
      <div class="daily_recommend_msg">
        <div><img src="../assets/image/Life/xifa.jpg" alt="" /></div>
        <div class="daily_recommend_info">
          <span style="color:#ff3366">洗发护发</span>
          <span style="color:#ff7f00">炫彩强韧</span>
          <a href="" style="backgroundColor:#ff7f00">立即查看</a>
        </div>
      </div>
      <div class="daily_recommend_msg">
        <div><img src="../assets/image/Life/meizhuang.jpg" alt="" /></div>
        <div class="daily_recommend_info">
          <span style="color:#ff3366">美妆护肤</span>
          <span style="color:#00bfbf">女神必备</span>
          <a href="" style="backgroundColor:#00bfbf">立即查看</a>
        </div>
      </div>
      <div class="daily_recommend_msg">
        <div><img src="../assets/image/Life/mingju.jpg" alt="" /></div>
        <div class="daily_recommend_info">
          <span style="color:#ff3366">名居家纺</span>
          <span style="color:#ff007f">换季时尚</span>
          <a href="" style="backgroundColor:#ff007f">立即查看</a>
        </div>
      </div>
      <div class="daily_recommend_msg">
        <div><img src="../assets/image/Life/chufang.jpg" alt="" /></div>
        <div class="daily_recommend_info">
          <span style="color:#ff3366">厨房生活</span>
          <span style="color:#5fbf00">厨具专场</span>
          <a href="" style="backgroundColor:#5fbf00">立即查看</a>
        </div>
      </div>
    </div>
    <!-- 生活专场 -->
    <div class="life">
      <div class="life_title">
        <h3 style="color:#0f91a0">生活专场</h3>
        <span>精选好物 推荐单品</span>
      </div>
      <div class="life_goods">
        <router-link class="life_goods_info" to="/xierdunzhentou">
          <div class="life_goods_info_img">
            <img src="..\components\xierdunzhentou\xierdunzhentou.png" alt="" />
          </div>
          <div class="life_goods_info_msg">
            <span>白鹅绒羽绒枕头家用全棉成人五星级酒店</span>
            <span>青城虎爷专卖店</span>
            <span>￥ 316.00</span>
            <span>枕头</span>
            <a href="">立即抢购</a>
          </div>
        </router-link>
        <router-link class="life_goods_info" to="/sijiantao">
          <div class="life_goods_info_img">
            <img src="../components/sijiantao/sijiantao.jpg" alt="" />
          </div>
          <div class="life_goods_info_msg">
            <span>罗莱家纺全棉纯棉加厚保暖火山磨毛1.8米床四件套冬</span>
            <span>青城虎爷专卖店</span>
            <span>￥ 999.00</span>
            <span>床上四件套</span>
            <a href="">立即抢购</a>
          </div>
        </router-link>
        <router-link class="life_goods_info" to="/shukoushui">
          <div class="life_goods_info_img">
            <img src="../components/shukoushui/shukoushui.jpg" alt="" />
          </div>
          <div class="life_goods_info_msg">
            <span>李施德林零度除口臭异味女漱</span>
            <span>青城虎爷专卖店</span>
            <span>￥ 88.00</span>
            <span>漱口水</span>
            <a href="">立即抢购</a>
          </div>
        </router-link>
        <router-link class="life_goods_info" to="/shuanglirendaoju">
          <div class="life_goods_info_img">
            <img src="../components/shuanglirendaoju/shuanglirendaoju.jpg" alt="" />
          </div>
          <div class="life_goods_info_msg">
            <span>德国双立人粉色刀具</span>
            <span>青城虎爷专卖店</span>
            <span>￥ 1288.00</span>
            <span>刀具</span>
            <a href="">立即抢购</a>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 推荐的数据
      daily_recommenddata: {
        src: [
          "../assets/image/Life/xifa.jpg",
          "../assets/image/Life/meizhuang.jpg",
          "../assets/image/Life/mingju.jpg",
          "../assets/image/Life/chufang.jpg"
        ],
        title: ["洗发护发", "美妆护肤", "名居家纺", "厨房生活"],
        info: ["炫彩强韧", "女神必备", "换季时尚", "厨具专场"],
        color: ["#ff7f00", "#00bfbf", "#ff007f", "#5fbf00"]
      }
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
/* banner区域设置 */
.banner {
  background-image: url("../assets/image/Home/banner.jpg");
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
      font-size: 24px;
      color: #faba64;
    }
    :nth-of-type(2) {
      font-size: 76px;
      color: #01d5d5;
    }
    :nth-of-type(3) {
      font-size: 36px;
      color: #faba64;
    }
    .el-button {
      margin-top: 30px;
    }
  }
}
// 下方图片信息
.daily_recommend {
  display: flex;
  width: 80%;
  min-width: 1000px;
  margin: 30px auto;
  justify-content: space-around;
  .daily_recommend_msg {
    position: relative;
    width: 23%;
  }
  img {
    width: 100%;
  }
  .daily_recommend_info {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 20px;
    top: 20px;
    :nth-child(1) {
      font-size: 24px;
    }
    :nth-child(2) {
      font-size: 18px;

      margin-top: 10px;
    }
    :nth-child(3) {
      font-size: 14px;
      color: #fff;
      width: 88px;
      height: 27px;
      line-height: 27px;
      text-align: center;
      margin-top: 10px;
    }
  }
}
// 生活专场
.life {
  width: 80%;
  padding: 30px 0;
  min-width: 1000px;
  margin: 30px auto;
  border: 1px solid #ccc;
  .life_title {
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
  .life_goods {
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 0;
    .life_goods_info {
      display: flex;
      width: 48%;
      border: 1px solid #ffd6e0;
      margin-bottom: 30px;
      padding: 5px;
      .life_goods_info_img {
        width: 30%;
        display: flex;
        justify-content: space-around;
      }
      img {
        width: 100%;
      }
      .life_goods_info_msg {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        justify-content: space-around;
        flex: 1;
        :nth-child(1) {
          font-size: 14px;
          color: #333;
        }
        :nth-child(2) {
          font-size: 14px;
          color: #666;
        }
        :nth-child(3) {
          font-size: 26px;
          color: #ff3366;
        }
        :nth-child(4) {
          font-size: 12px;
          color: #666;
        }
        a {
          color: #fff;
          background-color: #ff3366;
          width: 80%;
          height: 30px;
          font-size: 14px;
          text-align: center;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
