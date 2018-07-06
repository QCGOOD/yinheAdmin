<template>
  <div id="app" class="main_app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    document.title = this.base.title
  }
};
</script>

<style lang="scss">
@import "//at.alicdn.com/t/font_651752_aob2clfge23ayvi.css";
@import "@/assets/styles/element-variables.scss";

* {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
}
body {
  min-height: 100%;
}
span,div {
  font-weight: normal;
}
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
.required::before {
  content: "*";
  color: red;
  display: inline-block;
  margin-right: 5px;
}
.tongji {
  padding: 10px 30px;
  margin-top: 52px;
  font-size: 18px;
  .item {
    span {
      color: rgb(255, 31, 31);
    }
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}

.upload-img-box {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 6px;
  border: 1px dashed #d9d9d9;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    // border-color: #409eff;
    border-color: $--color-primary;
  }
  .upload-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
}
.img-upload {
  display: flex;
  justify-content: space-between;
  .img-item {
    width: 270px;
  }
}
.el-form-item__label {
  // color: #333;
  line-height: 1;
}

.new-form {
  .el-form-item {
    margin-bottom: 0;
    &:last-child {
      margin-bottom: 20px;
    }
    width: 100%;
    .el-form-item {
      margin-bottom: 6px;
      width: 260px;
      display: inline-block;
      margin-right: 20px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      .el-select, .el-input-number {
        width: 100%;
      }
    }
  }
}
.tabbar {
  display: flex;
  border-bottom: 1px solid #e7eaec;
  position: relative;
  .back {
    position: absolute;
    right: 10px;
    top: 13px;
  }
  .item {
    padding: 15px 30px;
    color: #bfbfbf;
    cursor: pointer;
    span {
      font-size: 22px;
    }
  }
  .active {
    // background-color: #3091f2;
    background-color: $--color-primary;
    color: #fff;
  }
}

.context-box {
  padding: 20px;
  overflow: auto;
  .setting {
    margin-bottom: 30px;
    .title {
      margin-bottom: 10px;
      padding-left: 10px;
      line-height: 1;
      font-size: 18px;
      position: relative;
      &:before {
        position: absolute;
        content: "";
        // border-left: 3px solid #3091f2;
        border-left: 3px solid $--color-primary;
        left: 0;
        top: 0;
        bottom: 0;
      }
    }
  }
}
</style>
