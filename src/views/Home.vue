<template>
  <div id="app">
    <!-- banner区域 -->
    <div class="banner">
      <div class="banner_text">
        <span>新春上新 · NEW</span>
        <span>SPRING</span>
        <span>新春满199减60</span>
        <el-button type="danger" round plain size="medium">查看详情</el-button>
      </div>
    </div>
    <!-- 下方商品部分 -->
    <div class="shop_info">
      <a href="" class="left_shop_info">
        <span>新品</span>
        <span>品牌精选新品 </span>
        <span>每日新品首发 </span>
        <img src="../assets/image/Home/erji.png" alt="" />
      </a>
      <div class="flex_text">
        <a href="" class="right_shop_info">
          <div>
            <span style="color:#30b985">大牌服装</span>
            <span>潮流服饰配搭 </span>
            <span>件件必抢 </span>
          </div>
          <img src="../assets/image/Home/kuzi.png" alt="" />
        </a>
        <a href="" class="right_shop_info">
          <div>
            <span style="color:#9d0da1">优惠洗护</span>
            <span>正品认购 </span>
            <span>精品精选 </span>
          </div>
          <img src="../assets/image/Home/muyulu.png" alt="" /> </a
        ><a href="" class="right_shop_info">
          <div>
            <span style="color:#18afae">开学特价</span>
            <span>正品潮牌 </span>
            <span>件件必抢 </span>
          </div>
          <img src="../assets/image/Home/shubao.png" alt="" /> </a
        ><a href="" class="right_shop_info">
          <div>
            <span style="color:#ff5400">首饰单品</span>
            <span>精美正品饰品 </span>
            <span>送礼首选 </span>
          </div>
          <img src="../assets/image/Home/xianglian.png" alt="" /> </a
        ><a href="" class="right_shop_info">
          <div>
            <span style="color:#0d669a">家具摆饰</span>
            <span>舒适家具人生 </span>
            <span>全程配送 </span>
          </div>
          <img src="../assets/image/Home/zhuozi.png" alt="" /> </a
        ><a href="" class="right_shop_info">
          <div>
            <span style="color:#ffa902">购镜配镜</span>
            <span>海量时尚镜框 </span>
            <span>件件精品 </span>
          </div>
          <img src="../assets/image/Home/yanjing.png" alt="" />
        </a>
      </div>
      <img src="../assets/image/Home/bbji.png" class="bbji" />
    </div>
    <!-- 标记生活 -->
    <div class="mark_life_title">
      <h2>标记生活</h2>
      <span>标记属于你的生活方式</span>
    </div>
    <div class="mark_life">
      <div class="mark_life_info">
        <img src="../assets/image/Home/meizhuang.jpg" alt="" />
        <div>
          <span>美妆小达人</span>
          <span class="iconfont icon-aixin">人气：8622</span>
        </div>
      </div>
      <div class="mark_life_info">
        <img src="../assets/image/Home/jingzhi.jpg" alt="" />
        <div>
          <span>精致生活</span>
          <span class="iconfont icon-aixin">人气：8622</span>
        </div>
      </div>
      <div class="mark_life_info">
        <img src="../assets/image/Home/meili.jpg" alt="" />
        <div>
          <span>气质魅力</span>
          <span class="iconfont icon-aixin">人气：8622</span>
        </div>
      </div>
      <div class="mark_life_info">
        <img src="../assets/image/Home/yangsheng.jpg" alt="" />
        <div>
          <span>美妆小达人</span>
          <span class="iconfont icon-aixin">人气：8622</span>
        </div>
      </div>
    </div>
    <!-- 专场区域 -->
    <div class="spacial_area">
      <div class="spacial_area_life">
        <div class="spacial_area_life_title">
          <h2 style="color:#dc19de">生活专场</h2>
          <span>与品质生活不期而遇</span>
          <a href="">更多 >></a>
        </div>
        <div class="spacial_area_life_info">
          <a class="spacial_area_life_info_goods" href="/xijiejing">
            <div><img src="../components/xijiejing/xijiejing.jpg" alt="" /></div>

            <span>超能洗洁精离子去油(柠檬护手)1.5kg/瓶不伤手新老包装随机发货</span>
            <span>青城虎爷专卖店</span>
            <span
              >原价：
              <h3>￥ 36</h3></span
            >
          </a>
          <a class="spacial_area_life_info_goods" href="/jierouzhijin">
            <div><img src="../components/jierouzhijin/jierouzhijin.jpg" alt="" /></div>
            <span>洁柔抽纸 Face系列Face系列餐巾纸卫生纸3层120抽整箱40包</span>
            <span>青城虎爷专卖店</span>
            <span
              >原价：
              <h3>￥ 119.8</h3></span
            >
          </a>
          <a class="spacial_area_life_info_goods" href="/qingyangxifashui">
            <div><img src="../components/qingyangxifashui/pic.jpg" alt="" /></div>
            <span>清扬洗发水露洗头膏水去屑止痒控油持久留香旗舰店官方旗舰</span>
            <span>青城虎爷专卖店</span>
            <span
              >原价：
              <h3>￥  27.90-79.90   </h3></span
            >
          </a>
          <a class="spacial_area_life_info_goods" href="/xiangshuimuyulu">
            <div><img src="../components/xiangshuimuyulu/xiangshuimuyulu.jpg" alt="" /></div>
            <span>LG菲诗小铺浪漫邂逅香水沐浴露500ml持久留香滋润保湿男女通用</span>
            <span>青城虎爷专卖店</span>
            <span
              >原价：
              <h3>￥ 35.00   </h3></span
            >
          </a>
          <a class="spacial_area_life_info_goods" href="/shentimoshagao">
            <div><img src="../components/shentimoshagao/shentimoshagao.jpg" alt="" /></div>
            <span>日本Oh Baby身体磨砂膏 去鸡皮死皮去角质蚕丝精华全身磨砂570g</span>
            <span>青城虎爷专卖店</span>
            <span
              >原价：
              <h3>￥ 125.00   </h3></span
            >
          </a>
          <a class="spacial_area_life_info_goods" href="/fangtuofaxifashui">
            <div><img src="../components/fangtuofaxifashui/fangtuofaxifashui.jpg" alt="" /></div>
            <span>【直营】韩国进口RYO/吕黄吕防脱乌发固发滋养洗发水 500毫升*3瓶</span>
            <span>青城虎爷专卖店</span>
            <span
              >原价：
              <h3>￥ 185.00   </h3></span
            >
          </a>
        </div>
      </div>
      <div class="spacial_area_modren">
        <div class="spacial_area_life_title">
          <h2 style="color:#fd9634">时尚专场</h2>
          <span>与品质生活不期而遇</span>
          <a href="">更多 >></a>
        </div>
        <div class="spacial_area_life_info">
          <a class="spacial_area_life_info_goods" href="/shuixingzhijiayou">
            <div><img src="../components/shuixingzhijiayou/shuixingzhijiayou.jpg" alt="" /></div>
            <span>可撕拉指甲油女持久免烤快干网红款纯色磨砂哑光无毒无味孕妇可用</span>
            <span>青城虎爷专卖店</span>
            <span
              >原价：
              <h3>￥ 21.90-36.90   </h3></span
            >
          </a>
          <a class="spacial_area_life_info_goods" href="/maoyanjiao">
            <div><img src="../components/maoyanjiao/maoyanjiao.jpg" alt="" /></div>
            <span>SATKI美甲银河猫眼胶宽猫眼新款光疗可卸指甲油胶星空陨石持久胶</span>
            <span>青城虎爷专卖店</span>
            <span
              >原价：
              <h3>￥ 19.80-119.00    </h3></span
            >
          </a>
          <a class="spacial_area_life_info_goods" href="/mantianxingshoubiao">
            <div><img src="../components/mantianxingshoubiao/mantianxingshoubiao.jpg" alt="" /></div>
            <span>Armani阿玛尼满天星女表官方正品时尚潮镶钻星空女士手表AR11091</span>
            <span>青城虎爷专卖店</span>
            <span
              >原价：
              <h3>￥ 2990.00 </h3></span
            >
          </a>
          <a class="spacial_area_life_info_goods" href="/huazhuangshua">
            <div><img src="../components/huazhuangshua/huazhuangshua.jpg" alt="" /></div>
            <span>【升级版】supredo尊美堂日常妆容化妆套刷6支装/专业套刷12支装</span>
            <span>青城虎爷专卖店</span>
            <span
              >原价：
              <h3>￥ 149.00-249.00 </h3></span
            >
          </a>
          <a class="spacial_area_life_info_goods" href="/dwshoubiao">
            <div><img src="../components/dwshoubiao/dwshoubiao.jpg" alt="" /></div>
            <span>Daniel Wellington男女dw手表黑色DW手表情侣对表</span>
            <span>青城虎爷专卖店</span>
            <span
              >原价：
              <h3>￥ 2799.00</h3></span
            >
          </a>
          <a class="spacial_area_life_info_goods" href="/dwshouzhuo">
            <div><img src="../components/dwshouzhuo/dwshouzhuo.jpg" alt="" /></div>
            <span>Danielwellington丹尼尔惠灵顿dw情侣手镯女 男士简约玫瑰金手环</span>
            <span>青城虎爷专卖店</span>
            <span
              >原价：
              <h3>￥ 589.00 </h3></span
            >
          </a>
        </div>
      </div>
    </div>
    <!-- 优惠专区 -->
    <div class="discount">
      <div class="discount_title">
        <h2>优惠专区</h2>
        <span>优惠活动 精彩不停</span>
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
          <a href="/tangbobaiqibao">立刻秒杀</a>
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
          <a href="/kouchi">立刻秒杀</a>
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
          <a href="/yuganyou">立刻秒杀</a>
        </div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="you_like_img">
      <div class="you_like">
        <div class="you_like_left">
          <div class="you_like_left_title">
            <h2>猜你喜欢</h2>
            <span>总有你喜欢的</span>
            <a href="">更多 >></a>
          </div>
          <div class="you_like_left_goods">
            <a class="you_like_left_goods_info" href="/feilekuzi">
              <div><img src="../components/feilekuzi/feilekuzi.jpg" alt="" /></div>
              <span class="you_like_left_goods_info_title"
                >FUSION斐乐运动裤男</span
              >
              <span class="you_like_left_goods_info_into"
                >青城虎爷专卖店</span
              >
              <span class="you_like_left_goods_info_money"
                >原价：
                <h3>￥ 569.00</h3></span
              >
            </a>
            <a class="you_like_left_goods_info" href="/theroxizhuang">
              <div><img src="../components/theroxizhuang/theroxizhuang.jpg" alt="" /></div>
              <span class="you_like_left_goods_info_title"
                >2019秋冬新品男装</span
              >
              <span class="you_like_left_goods_info_into"
                >青城虎爷专卖店</span
              >
              <span class="you_like_left_goods_info_money"
                >原价：
                <h3>￥  2950.00</h3></span
              >
            </a>
            <a class="you_like_left_goods_info" href="/guanjunduanxiu">
              <div><img src="../components/guanjunduanxiu/guanjunduanxiu.jpg" alt="" /></div>
              <span class="you_like_left_goods_info_title"
                >冠军短袖 </span
              >
              <span class="you_like_left_goods_info_into"
                >青城虎爷专卖店</span
              >
              <span class="you_like_left_goods_info_money"
                >原价：
                <h3>￥  382.00</h3></span
              >
            </a>
            <a class="you_like_left_goods_info" href="/liweisiniuzaiyi">
              <div><img src="../components/liweisiniuzaiyi/liweisiniuzaiyi.jpg" alt="" /></div>
              <span class="you_like_left_goods_info_title"
                >李维斯男士新款休闲牛仔长袖 </span
              >
              <span class="you_like_left_goods_info_into"
                >青城虎爷专卖店</span
              >
              <span class="you_like_left_goods_info_money"
                >原价：
                <h3>￥599.00</h3></span
              >
            </a>
          </div>
        </div>
      </div>
      <a class="you_like_right"
        ><img src="../assets/image/Home/cainixihuan.png" alt=""
      /></a>
    </div>
    <!-- 下方信息栏 -->
    <div class="promise">
      <div class="promise_info">
        <img src="../assets/image/Home/zhengpin.png" alt="" />
        <span>正品保障</span>
      </div>
      <div class="promise_info">
        <img src="../assets/image/Home/fahuo.png" alt="" />
        <span>极速发货</span>
      </div>
      <div class="promise_info">
        <img src="../assets/image/Home/rangli.png" alt="" />
        <span>低价让利</span>
      </div>
      <div class="promise_info">
        <img src="../assets/image/Home/shouhou.png" alt="" />
        <span>售后保障</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
// 下方的商品数据
.shop_info {
  width: 80%;
  margin: 50px auto;
  display: flex;
  align-items: center;
  min-width: 1000px;
  .left_shop_info {
    display: flex;
    flex-direction: column;
    width: 20%;
    border: 1px solid #cccccc;
    height: 340px;
    align-items: center;
    justify-content: space-around;
    :nth-of-type(1) {
      font-size: 18px;
      color: #ff0505;
    }
    :nth-of-type(2) {
      font-size: 16px;
      color: #333;
    }
    :nth-of-type(3) {
      font-size: 14px;
      color: #666666;
    }
    img {
      max-width: 95px;
    }
  }
  .flex_text {
    display: flex;
    flex-wrap: wrap;
    .right_shop_info {
      display: flex;
      width: 33%;
      border: 1px solid #cccccc;
      height: 169px;
      border-left: none;
      justify-content: space-around;
      div {
        display: flex;
        flex-direction: column;
        :nth-of-type(1) {
          font-size: 18px;
          margin-top: 10px;
        }
        :nth-of-type(2) {
          font-size: 16px;
          color: #333;
          margin-top: 10px;
        }
        :nth-of-type(3) {
          font-size: 14px;
          color: #666666;
          margin-top: 10px;
        }
      }
      img {
        max-width: 30%;
      }
    }
  }
  .bbji {
    height: 100%;
  }
}
// 标记生活区域
.mark_life_title {
  display: flex;
  align-items: center;
  width: 80%;
  min-width: 1000px;
  margin: 0 auto;
  h2 {
    color: #009966;
  }
  span {
    font-size: 16px;
    margin-left: 30px;
  }
}
.mark_life {
  display: flex;
  justify-content: space-between;
  width: 80%;
  min-width: 1000px;
  margin: 30px auto;
  .mark_life_info {
    display: flex;
    align-items: center;
    width: 24%;
    img {
      border-radius: 50%;
      border: 2px solid #97e3c6;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 30px;
      :nth-of-type(1) {
        font-size: 18px;
        color: #333;
      }
      :nth-of-type(2) {
        font-size: 16px;
        color: #97e3c6;
      }
    }
  }
}
// 专场区域
.spacial_area {
  width: 80%;
  margin: 30px auto;
  min-width: 1000px;
  display: flex;
  justify-content: space-between;
  .spacial_area_life {
    width: 49%;
    border: 1px solid #ccc;
    .spacial_area_life_title {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .spacial_area_life_info {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .spacial_area_life_info_goods {
        width: 33%;
        display: flex;
        flex-direction: column;
        text-align: center;
        img {
          width: 100%;
        }
        :nth-child(2) {
          font-size: 14px;
          color: #333;
        }
        :nth-child(3) {
          font-size: 12px;
          color: #666666;
        }
        :nth-child(4) {
          font-size: 12px;
          color: #888888;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          h3 {
            color: #dc19de;
          }
        }
      }
    }
  }
  .spacial_area_modren {
    width: 49%;
    border: 1px solid #ccc;
    .spacial_area_life_title {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .spacial_area_life_info {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .spacial_area_life_info_goods {
        width: 33%;
        display: flex;
        flex-direction: column;
        text-align: center;
        img {
          width: 100%;
        }
        :nth-child(2) {
          font-size: 14px;
          color: #333;
        }
        :nth-child(3) {
          font-size: 12px;
          color: #666666;
        }
        :nth-child(4) {
          font-size: 12px;
          color: #888888;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          h3 {
            color: #dc19de;
          }
        }
      }
    }
  }
}
// 优惠专区
.discount {
  width: 80%;
  margin: 0 auto;
  min-width: 1000px;
  border: 1px solid #ccc;
  padding-bottom: 30px;
  .discount_title {
    display: flex;
    align-items: center;
    margin-left: 30px;
    h2 {
      color: #0f91a0;
    }
    span {
      font-size: 16px;
      margin-left: 30px;
    }
  }
  .discount_info {
    display: flex;
    justify-content: space-around;
    .discount_info_goods {
      display: flex;
      justify-content: space-between;
      width: 30%;
      flex-direction: column;
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
// 猜你喜欢
.you_like_img {
  display: flex;
  width: 80%;
  min-width: 1000px;
  margin: 30px auto;
  // a {
  //   // img {
  //   //   height: 100%;
  //   // }
  // }
  .you_like {
  border: 1px solid #ccc;
  padding-bottom: 30px;
  margin-right: 20px;
  .you_like_left {
    position: relative;
    .you_like_left_title {
      display: flex;
      align-items: center;
      margin-left: 30px;
      h2 {
        color: #ff3366;
      }
      span {
        margin-left: 30px;
      }
      a {
        position: absolute;
        right: 20px;
      }
    }
    .you_like_left_goods {
      display: flex;
      justify-content: space-around;
      .you_like_left_goods_info {
        display: flex;
        flex: 0.8;
        flex-direction: column;
        justify-content: space-around;
        margin: 0 10px;
        img {
          width: 100%;
        }
        .you_like_left_goods_info_title {
          font-size: 16px;
          color: #000;
        }
        .you_like_left_goods_info_into {
          font-size: 12px;
          color: #666;
        }
        .you_like_left_goods_info_money {
          font-size: 14px;
          color: #888;
          display: flex;
          align-items: center;
          h3 {
            color: #ff3366;
            font-size: 22px;
            margin: 0;
          }
        }
      }
    }
  }
}
.you_like_right{
  // flex: 1;
  // width: 80%;
  // img{
  //   width: 100%;
  // }
}
}

// 下方信息栏
.promise {
  display: flex;
  justify-content: space-around;
  width: 80%;
  min-width: 1000px;
  margin: 30px auto;
  .promise_info {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      margin-top: 15px;
    }
  }
}
</style>
