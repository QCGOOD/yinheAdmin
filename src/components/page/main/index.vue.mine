<template>
  <div class="container">
    <div class="top">
      <div style="display: flex; align-items: inherit;">
        <img src="http://athena-1255600302.cosgz.myqcloud.com/attachments/qc-logo-text.png" alt="">
        <h2>{{base.title}}</h2>
      </div>
      <div>
      <!-- <el-button type="text" @click="digShow = true">修改密码</el-button> -->
      <el-button type="text" style="margin-right: 50px;" @click="logout">退出</el-button>
      </div>
    </div>
    <div class="main">
      <div class="sidebar" :style="{'height': `${sidebarHeight}px`}">
        <el-menu :unique-opened="true" v-if="menuList != null" class="new-el-menu list-bg-color"  :router="true" :default-active="$route.path">
          <el-submenu v-if="item.menuList" v-for='(item,index) in menuList' :index="index+'-'" :key="item.name">
            <template slot="title">{{item.name}}</template>
            <el-menu-item v-for="list in item.menuList" :key="list.name" :index="list.url">{{list.name}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <el-dialog title="修改密码" :visible.sync="digShow" width="380px" :append-to-body="true" :before-close="close">
        <el-form :model="model" ref="model" :rules="rules">
          <el-form-item label="旧密码" prop="oldPassword" :rules="[{ required: true, message: '密码不能为空'}]">
            <el-input size="small" v-model="model.oldPassword" type="password"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword" :rules="[{ required: true, message: '新密码不能为空'}]">
            <el-input size="small" v-model="model.newPassword" type="password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass" >
            <el-input size="small" v-model="model.checkPass" type="password"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button size="small" @click="close()">取 消</el-button>
          <el-button size="small" type="primary" @click="apiPassword()">确 定</el-button>
        </span>
      </el-dialog>
      <router-view :style="{'height': `${wrapHeight}px`}"></router-view>
    </div>
  </div>
</template>

<script>
import api from "api/common.js";
export default {
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.model.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      rules: {
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      },
      digShow: false,
      model: {
        oldPassword: "",
        newPassword: "",
        checkPass: ""
      },
      product: [
        // 商品管理
        {
          name: "商品管理",
          menuList: [
            {
              name: "商品管理",
              url: "/main/product/list"
            },
            {
              name: "商品分类",
              url: "/main/product/category"
            },
            {
              name: "订单管理",
              url: "/main/product/order"
            }
          ]
        }
      ],
      member: [
        {
          name: "会员管理",
          menuList: [
            {
              name: "会员管理",
              url: "/main/member"
            }
          ]
        }
      ],
      baseData: [
        {
          name: "基础数据",
          menuList: [
            {
              name: "广告位管理",
              url: "/main/attachment"
            },
            {
              name: "物流公司管理",
              url: "/main/logistCompany"
            },
            {
              name: "投诉",
              url: "/main/complaint"
            },
            {
              name: "购买意向",
              url: "/main/purchaseIntention"
            },
          ]
        }
      ],
      menuList: [],
      wrapHeight: 0,
      sidebarHeight: 0
    };
  },
  created() {
    this.menuList = [
      ...this.product,
      // ...this.member,
      ...this.baseData
    ];
  },
  mounted() {
    this.getHeight();
    window.onresize = () => {
      this.getHeight();
    };
  },
  methods: {
    getHeight() {
      this.wrapHeight = window.innerHeight - 120;
      this.sidebarHeight = window.innerHeight - 80;
    },
    apiPassword() {
      this.$refs.model.validate(valid => {
        if (valid) {
          api
            .password(this.model)
            .then(res => {
              this.$message({
                message: "修改成功",
                type: "success"
              });
              this.close();
              setTimeout(() => {
                this.$router.push("/");
              }, 1000);
            })
            .catch(err => {
              this.$message({
                message: err.data.errMsg,
                type: "error"
              });
            });
        } else {
          return false;
        }
      });
    },
    close() {
      this.digShow = false;
      this.$refs.model.resetFields();
    },
    // 退出
    logout() {
      api.logout().then(res => {
        console.log(res);
        this.$router.replace("/login");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/element-variables.scss";

.container {
  position: relative;
  height: 100%;
  .top {
    top: 0;
    position: absolute;
    // background: #2c3135;
    background: $--color-primary;
    height: 80px;
    width: 100%;
    line-height: 30px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 30px;
    justify-content: space-between;
    // background-image: linear-gradient(to right, #4facfe 0%, #4edee4 120%);
    img {
      width: 140px;
      margin: 0 52px 0 30px;
    }
    .username {
      margin-right: 20px;
      font-size: 14px;
    }
    .el-button--text {
      color: #fff !important;
    }
  }
  .main {
    display: flex;
    position: absolute;
    top: 80px;
    bottom: 0;
    width: 100%;
    height: 100%;
    // background: #f6f6f8;
    background: #f2f2f2;
    border: 1px solid #ddd;
    box-sizing: border-box;
    .sidebar {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      flex: 217px 0;
      flex-shrink: 0;
      // height: 100%;
      overflow-y: auto;
      background: #ffffff;
      .new-el-menu {
        background: #ffffff;
      }
    }
    .wrap {
      flex: 1;
      margin: 20px;
      background: #fff;
      overflow: auto;
      border: 1px solid #eee;
    }
  }
  .el-menu-item {
    font-size: 14px;
  }
  .el-menu {
    border: 0;
  }
}
</style>
