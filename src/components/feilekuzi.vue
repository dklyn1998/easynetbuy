<template>
  <div>
    <div class="top_info">
      <div class="image_info">
        <el-image :src="url" :preview-src-list="srcList"> </el-image>
      </div>
      <div class="top_info_shop">
        <span class="top_info_shop_title">FILA FUSION斐乐运动裤男2020春季新款休闲裤针织长裤男卫裤裤子</span>
        <span class="top_info_shop_msg">青城虎爷专卖店</span>
        <span class="top_info_shop_prise"
          >价格
          <h3>￥ 569.00 </h3>
        </span>
        <span class="top_info_shop_method"
          >配送方式：
          <el-select v-model="value" placeholder="请选择" size="mini">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            
            </el-option> </el-select
        ></span>
        <div class="top_info_shop_total">
          <span>总销量 998</span> <span>累计评论 100</span>
        </div>
        <div class="top_info_shop_number">
          <span>数量</span>
          <el-input-number
            v-model="num"
            @change="handleChange"
            :min="1"
            :max="10"
            label="数量"
            size="mini"
          ></el-input-number>
          <span>剩余库存 5000</span>
        </div>
        <div class="button_box">
           <div  @click="open2" class="left_btn">立即购买</div>
          <div  @click="open1" class="right_btn">加入购物车</div>
        </div>
        <span class="top_info_shop_promise"
          >服务承诺：正品保证 极速退款 赠运费险 七天无理由退换</span
        >
      </div>
      <div class="recommend">
        <span>——— 看了还看 ———</span>
        <div class="recommend_goods">
          <img src="./dwshoubiao/dwshoubiao.jpg" alt="" />
          <div><span>DW手表</span> <span>价格：￥2799.00</span></div>
        </div>
        <div class="recommend_goods">
          <img src="./dwshouzhuo/dwshouzhuo.jpg" alt="" />
          <div><span>dw手镯</span> <span>价格：￥589.00</span></div>
        </div>
      </div>
    </div>
    <div class="next_info">
      <div class="next_info_left">
        <div class="next_info_left_header">
          <img src="../assets/hot.png" alt="" />
          <span>热销榜</span>
        </div>
        <div class="next_info_left_goods">
          <div><img src="./jierouzhijin/jierouzhijin.jpg" alt="" /></div>
          <div class="next_info_left_goods_msg">
            <span>洁柔纸巾</span> <span>￥ 158 </span>
          </div>
        </div>
        <div class="next_info_left_goods">
          <div><img src="./sijiantao/sijiantao.jpg" alt="" /></div>
          <div class="next_info_left_goods_msg">
            <span>窗扇四件套</span> <span>￥ 88 </span>
          </div>
        </div>
        <div class="next_info_left_goods">
          <div><img src="./fengyi/fengyi.jpg" alt="" /></div>
          <div class="next_info_left_goods_msg">
            <span>女风衣</span> <span>￥ 998 </span>
          </div>
        </div>
        <div class="next_info_left_goods">
          <div><img src="./pikunv/pikunv.jpg" alt="" /></div>
          <div class="next_info_left_goods_msg">
            <span>皮裤</span> <span>￥ 2799 </span>
          </div>
        </div>
      </div>
      <div class="next_info_right">
        <el-tabs type="border-card">
          <el-tab-pane label="商品详情" class="remark"
            ><img src="./feilekuzi/xiangqing1.jpg" alt=""
          /><img src="./feilekuzi/xiangqing2.jpg" alt=""
          /><img src="./feilekuzi/xiangqing3.jpg" alt=""
          /><img src="./feilekuzi/xiangqing4.jpg" alt=""
          /></el-tab-pane>
          <el-tab-pane label="评论" class="common">
            <div class="common_box">
              <div class="common_left">
                <div><img src="../assets/logo.png" alt="" /></div>
                <span>好买网用户</span>
              </div>
              <div class="common_right">
                <span>评价方未及时做出评价,系统默认好评!</span>
                <span>2020年01月13日 16:10</span>
              </div>
            </div>
            <div class="common_box">
              <div class="common_left">
                <div><img src="../assets/logo.png" alt="" /></div>
                <span>好买网用户</span>
              </div>
              <div class="common_right">
                <span>评价方未及时做出评价,系统默认好评!</span>
                <span>2020年01月13日 16:10</span>
              </div>
            </div>
            <div class="common_box">
              <div class="common_left">
                <div><img src="../assets/logo.png" alt="" /></div>
                <span>好买网用户</span>
              </div>
              <div class="common_right">
                <span>评价方未及时做出评价,系统默认好评!</span>
                <span>2020年01月13日 16:10</span>
              </div>
            </div>
            <div class="common_box">
              <div class="common_left">
                <div><img src="../assets/logo.png" alt="" /></div>
                <span>好买网用户</span>
              </div>
              <div class="common_right">
                <span>评价方未及时做出评价,系统默认好评!</span>
                <span>2020年01月13日 16:10</span>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import jpg from "@/components/feilekuzi/feilekuzi.jpg";
export default {
  data() {
    return {
      url: jpg,
      srcList: [jpg],
      options: [
        {
          value: "申通快递",
          label: "申通快递"
        },
        {
          value: "圆通快递",
          label: "圆通快递"
        },
        {
          value: "韵达快递",
          label: "韵达快递"
        },
        {
          value: "顺丰快递",
          label: "顺丰快递"
        }
      ],
      value: "",
      num: 1
    };
  },
  methods: {
        open1() {
        this.$message({
          message: '加入购物车成功',
          type: 'success'
        });
      },
    open2() {
        this.$message({
          message: '购买成功',
          type: 'success'
        });
      },
    handleChange: function() {
      console.log("123");
    }
  }
};
</script>

<style lang="less" scoped>
.top_info {
  display: flex;
  width: 80%;
  min-width: 1000px;
  justify-content: space-around;
  margin: 50px auto;
  .image_info {
    width: 30%;
    min-width: 300px;
    .el-image {
      width: 100%;
    }
  }
  .top_info_shop {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    margin-left: 20px;
    .top_info_shop_title {
      font-size: 16px;
      color: #3c3c3c;
    }
    .top_info_shop_msg {
      font-size: 12px;
      color: #666;
    }
    .top_info_shop_prise {
      display: flex;
      font-size: 12px;
      color: #5c5c5c;
      align-items: center;
      h3 {
        font-size: 26px;
        color: #c40000;
        margin: 0;
      }
    }
    .top_info_shop_method {
      font-size: 12px;
      color: #6c6c6c;
    }
    .top_info_shop_total {
      font-size: 12px;
      color: #999;
      display: flex;
      justify-content: space-between;
      border-top: 1px dotted #ccc;
      border-bottom: 1px dotted #ccc;
      padding: 10px;
      text-align: center;
      width: 60%;
      span {
        display: block;
        width: 50%;
      }
      :first-child {
        border-right: 1px dotted #ccc;
      }
    }
    .top_info_shop_number {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #333;
      align-items: center;
      width: 60%;
    }
    .button_box {
      display: flex;
      justify-content: space-between;
      width: 60%;
      div {
        width: 45%;
        padding: 5px;
        text-align: center;
      }
      .left_btn {
        border: 1px solid #ff3366;
        color: #ff3366;
        background-color: #ffeded;
      }
      .right_btn {
        border: 1px solid #ff3366;
        color: #fff;
        background-color: #ff3366;
      }
    }
    .top_info_shop_promise {
      font-size: 12px;
      color: #666;
    }
  }
  .recommend {
    border: 1px solid #ccc;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 60%;
    }
    .recommend_goods {
      margin-top: 20px;
      text-align: center;
      position: relative;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.8);
      }
    }
  }
}
.next_info {
  display: flex;
  width: 80%;
  min-width: 1000px;
  justify-content: space-around;
  margin: 20px auto;

  .next_info_left {
    width: 25%;
    border: 1px solid #ccc;
    height: 600px;
  }
  .next_info_left_header {
    display: flex;
    padding: 10px;
    background-color: #f8f8f8;
    span {
      color: #565656;
      font-size: 14px;
    }
    img {
      width: 21px;
      height: 21px;
      margin-right: 15px;
    }
  }
  .next_info_left_goods {
    margin-top: 20px;
    display: flex;
    div {
      width: 40%;
      margin-left: 20px;
      img {
        width: 100%;
      }
    }
    .next_info_left_goods_msg {
      display: flex;
      flex-direction: column;
      :nth-child(1) {
        color: #333;
        font-size: 12px;
      }
      :nth-child(2) {
        color: #ff002a;
        font-size: 12px;
        h5 {
          font-size: 14px;
        }
      }
    }
  }
  .next_info_right {
    width: 100%;
    margin-left: 30px;
    .el-tabs {
      width: 100%;
      .remark {
        img {
          width: 100%;
        }
      }
      .common {
        .common_box {
          display: flex;
          border-bottom: 1px solid #ccc;
          margin-bottom: 20px;
          .common_left {
            width: 100px;
            padding: 20px;
            text-align: center;
            img {
              width: 100%;
            }
          }
          .common_right {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-left: 30px;
            :last-child {
              font-size: 12px;
              color: #666;
            }
          }
        }
      }
    }
  }
}
</style>
