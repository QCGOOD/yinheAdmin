<template>
  <div id="login" class="container">
    <img class="login-bg" src="http://athena-1255600302.cosgz.myqcloud.com/attachments/login-bg.jpg" alt="">
    <div class="title-top">
      <p>Welcome Login</p>
      <p>企成互动管理后台</p>
    </div>
    <section class="content">
      <!-- <div class="content-box"> -->
        <div class="logo">
          <img src="http://athena-1255600302.cosgz.myqcloud.com/attachments/qc-logo.png" alt="">
        </div>
        <el-form :model="model" class="form" :rules="rules" ref="model" label-width="50px">
          <el-form-item label="账号" prop="username">
            <el-input type="text" v-model="model.username" placeholder="请输入账号" @keyup.enter.native="login"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="model.password" placeholder="请输入密码" @keyup.enter.native="login"></el-input>
          </el-form-item>
          <el-button type="primary" class="button" @click="login()" :loading="loading" style="width: 100%;">登录</el-button>
        </el-form>
      <!-- </div> -->
    </section>
    <footer class="footer">
      <p>Copyright 2013-2018 企成科技 版权所有</p>
    </footer>
  </div>
</template>
<script>
import api from "api/common.js";
export default {
  data() {
    return {
      loading: false,
      model: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
    };
  },
  methods: {
    apiLogin(data) {
      api
        .login(data)
        .then(res => {
          console.log(this.base.type)
          // this.$router.push("/main/activity/list");
          this.$router.push("/main/product/list");
        })
        .catch(err => {
          this.loading = false;
          console.log("登陆接口失败", err);
        });
    },
    login() {
      this.loading = true;
      this.$refs.model.validate(valid => {
        if (valid) {
          this.apiLogin(this.model);
        } else {
          this.loading = false;
        }
      });
    }
  }
};
</script>

<style lang="less" >
#login {
  position: absolute;
  width: 100%;
  min-height: 100%;
  background: #e2e2e2;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  overflow: hidden;
  .login-bg {
    position: absolute;
  }
  .title-top {
    position: relative;
    color: #fff;
    margin-bottom: 100px;
    line-height: 2;
    text-align: center;
    font-family: "Microsoft YaHei";
    p {
      &:first-child {
        font-size: 40px;
      }
      &:last-child {
        font-size: 20px;
        color: #eaeaea;
      }
    }
  }
  .content{
    position: relative;
    background: #fff;
    width: 450px;
    margin-bottom: 100px;
    border-radius: 10px;
    box-shadow: 0px 1px 10px 0px #444444;
    .logo {
      width: 110px;
      margin: -55px auto 0 auto;
      line-height: 1;
      background: #fff;
      border-radius: 50%;
      text-align: center;
      img {
        width: 100%;
      }
    }
    .form {
      padding: 30px 50px 50px 50px;
      .el-form-item .el-form-item__label {
        line-height: 40px;
      }
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 40px 0;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }
}
</style>