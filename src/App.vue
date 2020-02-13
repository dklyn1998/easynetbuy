<template>
  <div id="app">
    <el-container direction="vertical" >
      <el-header height="195px">
        <el-row
          :gutter="20"
          type="flex"
          justify="center"
          align="middle"
          class="header_info"
        >
          <el-col :span="3.5" class="col_list">
            <el-link :underline="false" type="info" href="/">首页</el-link>
          </el-col>
          <el-col :span="3.5" class="col_list">
            <router-link  to="about" class="routercolor"
              >关于我们</router-link
            >
          </el-col>
          <el-col :span="3.5" class="col_list">
            <el-link
              :underline="false"
              type="info"
              @click="dialogbookVisible = true"
              >我的订单</el-link
            >
          </el-col>
          <el-col :span="3.5" class="col_list">
            <el-link
              :underline="false"
              type="info"
              @click="dialogcartVisible = true"
              >购物车</el-link
            >
          </el-col>
          <el-col :span="1.5" :offset="5" class="col_list">
            <el-link
              :underline="false"
              type="info"
              @click="dialogLogVisible = true"
              >登录</el-link
            >
          </el-col>
          <el-col :span="1.5" class="col_list">
            <el-link
              :underline="false"
              type="info"
              @click="dialogRegVisible = true"
              >注册</el-link
            >
          </el-col>
        </el-row>
        <el-dialog title="登录" :visible.sync="dialogLogVisible" center>
          <el-form :model="log">
            <el-form-item label="账号" :label-width="formLabelWidth">
              <el-input v-model="log.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
              <el-input v-model="log.password" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogLogVisible = false">取 消</el-button>
            <el-button type="primary" @click="login"
              >登 录</el-button
            >
          </div>
        </el-dialog>
        <el-dialog title="注册" :visible.sync="dialogRegVisible" center>
          <el-form :model="reg">
            <el-form-item label="账号" :label-width="formLabelWidth">
              <el-input v-model="reg.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
              <el-input v-model="reg.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" :label-width="formLabelWidth">
              <el-input v-model="reg.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="爱好" :label-width="formLabelWidth">
              <el-input v-model="reg.hobbies" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogRegVisible = false">取 消</el-button>
            <el-button type="primary" @click="regclick"
              >注 册</el-button
            >
          </div>
        </el-dialog>
        <el-dialog
          title="查看购物车"
          :visible.sync="dialogcartVisible"
          width="750px"
          center
        >
          <div class="dialog_cart">
            <div><img src=".\assets\cart.png" alt="" /></div>
            <span>您的购物车空空如也</span>
            <span>赶紧行动吧</span>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogcartVisible = false">马上去购物</el-button>
          </div>
        </el-dialog>
        <el-dialog
          title="查看订单"
          :visible.sync="dialogbookVisible"
          width="750px"
          center
        >
          <div class="dialog_cart">
            <div><img src=".\assets\cart.png" alt="" /></div>
            <span>您的订单空空如也</span>
            <span>赶紧行动吧</span>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogbookVisible = false">马上去购物</el-button>
          </div>
        </el-dialog>
        <!-- 下方logo栏和搜索栏 -->
        <el-row
          class="logo_search"
          :gutter="20"
          type="flex"
          justify="space-between"
          align="middle"
        >
          <el-col><img src="./assets/logo.png" alt="好买网"/></el-col>
          <el-col :span="6" class="search_button">
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="inputInfo"
              clearable
            >
            </el-input>
            <el-button type="danger" round class="button_search" @click="serachItem"
              >搜索</el-button
            >
          </el-col>
        </el-row>
        <!-- 下方的导航条 -->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#FF3366"
          text-color="#fff"
          active-text-color="#fff"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <span class="iconfont icon-fenlei"> 商城分类</span></template
            >
            <el-submenu index="1-1">
              <template slot="title"
                ><span class="iconfont icon-shafa"> 家居个护</span></template
              >
              <el-menu-item index="1-1-1">洗护用品</el-menu-item>
              <el-menu-item index="1-1-2">卧室</el-menu-item>
              <el-menu-item index="1-1-3">厨浴</el-menu-item>
              <el-menu-item index="1-1-4">家具</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title"
                ><span class="iconfont icon-nvzhuangqunzi-">
                  女装</span
                ></template
              >
              <el-menu-item index="1-2-1">裤装</el-menu-item>
              <el-menu-item index="1-2-2">时尚套装</el-menu-item>
              <el-menu-item index="1-2-3">内衣</el-menu-item>
              <el-menu-item index="1-2-4">时尚裙子</el-menu-item>
              <el-menu-item index="1-2-5">上衣衬衫</el-menu-item>
            </el-submenu>
            <el-submenu index="1-3">
              <template slot="title"
                ><span class="iconfont icon-daocha"> 美食生鲜</span></template
              >
              <el-menu-item index="1-3-1">酒品饮料</el-menu-item>
              <el-menu-item index="1-3-2">休闲零食</el-menu-item>
              <el-menu-item index="1-3-3">生鲜</el-menu-item>
              <el-menu-item index="1-3-4">冲饮/乳品</el-menu-item>
            </el-submenu>
            <el-submenu index="1-4">
              <template slot="title"
                ><span class="iconfont icon-yingerche"> 母婴</span></template
              >
              <el-menu-item index="1-4-1">童装童鞋</el-menu-item>
              <el-menu-item index="1-4-2">婴儿必备</el-menu-item>
              <el-menu-item index="1-4-3">玩具图书</el-menu-item>
              <el-menu-item index="1-4-4">营养辅食</el-menu-item>
            </el-submenu>
            <el-submenu index="1-5">
              <template slot="title"
                ><span class="iconfont icon-nanzhuang"> 男装</span></template
              >
              <el-menu-item index="1-5-1">外套</el-menu-item>
              <el-menu-item index="1-5-2">上衣裤子</el-menu-item>
              <el-menu-item index="1-5-3">玩具图书</el-menu-item>
            </el-submenu>
            <el-submenu index="1-6">
              <template slot="title"
                ><span class="iconfont icon-xiexiangbao"> 箱包</span></template
              >
              <el-menu-item index="1-6-1">畅销热卖</el-menu-item>
              <el-menu-item index="1-6-2">迷你美包</el-menu-item>
              <el-menu-item index="1-6-3">人气精选</el-menu-item>
              <el-menu-item index="1-6-4">行李箱包</el-menu-item>
            </el-submenu>
            <el-submenu index="1-7">
              <template slot="title"
                ><span class="iconfont icon-kouhong"> 美妆</span></template
              >
              <el-menu-item index="1-7-1">日常护肤</el-menu-item>
              <el-menu-item index="1-7-2">时尚彩妆</el-menu-item>
              <el-menu-item index="1-7-3">防晒卸妆</el-menu-item>
              <el-menu-item index="1-7-4">迷迭香水</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/recommend">每日推荐</el-menu-item>
          <el-menu-item index="/life">品质生活</el-menu-item>
          <el-menu-item index="/hot">热卖好货</el-menu-item>
          <el-menu-item index="/discount">优惠专区</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height="200px">
        <el-row
          :gutter="20"
          type="flex"
          justify="center"
          align="middle"
          style="font-size: 20px"
          class="footer_margin"
        >
          <el-col :span="4">购物指南</el-col>
          <el-col :span="4">购物保障</el-col>
          <el-col :span="4">支付方式</el-col>
          <el-col :span="4">商家服务</el-col>
        </el-row>
        <el-row
          :gutter="20"
          type="flex"
          justify="center"
          align="middle"
          class="footer_margin"
        >
          <el-col :span="4">免费注册</el-col>
          <el-col :span="4">发票售后</el-col>
          <el-col :span="4">信用卡</el-col>
          <el-col :span="4">售后政策</el-col>
        </el-row>
        <el-row
          :gutter="20"
          type="flex"
          justify="center"
          align="middle"
          class="footer_margin"
        >
          <el-col :span="4">开通支付宝</el-col>
          <el-col :span="4">售后规则</el-col>
          <el-col :span="4">支付宝</el-col>
          <el-col :span="4">物流服务</el-col>
        </el-row>
        <el-row
          :gutter="20"
          type="flex"
          justify="center"
          align="middle"
          class="footer_margin"
        >
          <el-col :span="4">支付宝充值</el-col>
          <el-col :span="4">缺货理赔</el-col>
          <el-col :span="4">货到付款 </el-col>
          <el-col :span="4">正品保证 </el-col>
        </el-row>
        <el-row class="footer_right">
          <el-col>Copyright © Company 段珂毕业设计 All rights reserved</el-col>
        </el-row>
      </el-footer>
    </el-container>
    <!-- <div v-else>
      <h2>当前浏览器不兼容，请尝试更换浏览器</h2>
      <span>官方推荐--谷歌浏览器：https://www.google.cn/chrome/</span>
      <span>如果是360浏览器请关闭兼容模式，开启极速模式</span>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 查询表单 导航条
      activeIndex: "1",
      // input的内容双向绑定
      inputInfo: "",
      dialogLogVisible: false,
      log: {
        username: "",
        password: ""
      },
      formLabelWidth: "120px",
      dialogRegVisible: false,
      dialogRegVisible: false,
      reg: {
        username: "",
        password: "",
        email: "",
        hobbies: ""
      },
      dialogcartVisible: false,
      dialogbookVisible: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    login(){
      this.$message({
          message: '登录成功',
          type: 'success'
        });
        this.dialogLogVisible=false
    },
    regclick(){
      this.$message({
          message: '注册成功',
          type: 'success'
        });
        this.dialogRegVisible=false
    },
    serachItem(){
      this.$message({
          message: '搜索成功~！',
          type: 'success'
        });
    },
  }
}
</script>

<style scoped>
  .routercolor{
    color: gray;
  }
.el-header {
  padding: 0 10px;
}

.header_info {
  background-color: #ffd6d6;
  height: 35px;
  color: #333333;
  font-size: 14px;
  margin: 0;
}

.col_list {
  border-right: #333333 1px solid;
}

.col_list:last-child {
  border: none;
}

/* logo栏和查找栏 */
.logo_search {
  height: 100px;
  width: 100%;
}

.logo_search img {
  height: 80px;
  margin-left: 30px;
}

.search_button {
  display: flex;
  align-items: center;
}

/* 给input设置最大长度避免不美观 */
.el-input {
  max-width: 200px;
  min-width: 150px;
}

/* 搜索按钮 */
.button_search {
  background-color: #ff3366;
  margin-left: 10px;
}

/* 导航栏居中显示 */
.el-menu {
  display: flex;
  justify-content: center;
}

.el-menu-item {
  padding: 0 25px;
}

/* 底部footer设置 */
.el-footer {
  background-color: #fbefe3;
  font-size: 14px;
  color: #333333;
  padding: 0 10px;
  margin: 0;
}

.footer_margin {
  margin: 10px;
}

.footer_right {
  height: 50px;
  background-color: #e62a5c;
  margin-top: 30px;
  text-align: center;
  line-height: 50px;
  color: #000;
  font-size: 16px;
}

/* main的设计 */
.el-main {
  padding: 0;
}

/*dialog_cart*/
.dialog_cart {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.el-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -70px;
}
</style>
