<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row
          :gutter="20"
          type="flex"
          justify="center"
          align="middle"
          class="header_info"
        >
          <el-col :span="3.5" class="col_list">
            <el-link :underline="false" type="info">首页</el-link></el-col
          >
          <el-col :span="3.5" class="col_list">
            <el-link :underline="false" type="info">关于我们</el-link>
          </el-col>
          <el-col :span="3.5" class="col_list">
            <el-link :underline="false" type="info">我的订单</el-link>
          </el-col>
          <el-col :span="3.5" class="col_list">
            <el-link :underline="false" type="info">购物车</el-link>
          </el-col>
          <el-col :span="1.5" :offset="5" class="col_list">
            <el-link :underline="false" type="info">登录</el-link>
          </el-col>
          <el-col :span="1.5" class="col_list">
            <el-link :underline="false" type="info">注册</el-link>
          </el-col>
        </el-row>
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
            <el-button type="danger" round class="button_search"
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
        >
          <el-submenu index="1">
            <template slot="title">商城分类</template>
            <el-submenu index="1-1">
              <template slot="title">家居个护</template>
              <el-menu-item index="1-1-1">洗护用品</el-menu-item>
              <el-menu-item index="1-1-2">卧室</el-menu-item>
              <el-menu-item index="1-1-3">厨浴</el-menu-item>
              <el-menu-item index="1-1-4">家具</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">女装</template>
              <el-menu-item index="1-2-1">裤装</el-menu-item>
              <el-menu-item index="1-2-2">时尚套装</el-menu-item>
              <el-menu-item index="1-2-3">内衣</el-menu-item>
              <el-menu-item index="1-2-4">时尚裙子</el-menu-item>
              <el-menu-item index="1-2-5">上衣衬衫</el-menu-item>
            </el-submenu>
            <el-submenu index="1-3">
              <template slot="title">美食生鲜</template>
              <el-menu-item index="1-3-1">酒品饮料</el-menu-item>
              <el-menu-item index="1-3-2">休闲零食</el-menu-item>
              <el-menu-item index="1-3-3">生鲜</el-menu-item>
              <el-menu-item index="1-3-4">冲饮/乳品</el-menu-item>
            </el-submenu>
            <el-submenu index="1-4">
              <template slot="title">母婴</template>
              <el-menu-item index="1-4-1">童装童鞋</el-menu-item>
              <el-menu-item index="1-4-2">婴儿必备</el-menu-item>
              <el-menu-item index="1-4-3">玩具图书</el-menu-item>
              <el-menu-item index="1-4-4">营养辅食</el-menu-item>
            </el-submenu>
            <el-submenu index="1-5">
              <template slot="title">母婴</template>
              <el-menu-item index="1-4-1">童装童鞋</el-menu-item>
              <el-menu-item index="1-4-2">婴儿必备</el-menu-item>
              <el-menu-item index="1-4-3">玩具图书</el-menu-item>
              <el-menu-item index="1-4-4">营养辅食</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 查询表单 导航条
      activeIndex: "1",
      // input的内容双向绑定
      inputInfo: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.header_info {
  background-color: #ffd6d6;
  height: 35px;
  color: #333333;
  font-size: 14px;
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
</style>
