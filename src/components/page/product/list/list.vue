<template>
 <div class="wrap" ref="wrap">
    <div ref="search">
      <search-wrap>
        <el-form :inline="true" class="demo-form-inline" size="small">
          <el-form-item label="名称">
            <el-input v-model="searchData.name"></el-input>
          </el-form-item>
          <el-form-item label="分类">
            <el-select v-model="searchData.categoryId">
              <el-option label="全部" value=""></el-option>
              <el-option :label="item.name" :value="item.id" v-for="(item, i) in category" :key="i"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上架">
            <el-select v-model="searchData.isSell">
              <el-option label="全部" value=""></el-option>
              <el-option label="上架" :value="true"></el-option>
              <el-option label="下架" :value="false"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="small" @click="search()">查询</el-button>
          </el-form-item>
        </el-form>
      </search-wrap>
      <button-wrap>
        <el-button type="primary" size="mini" @click="insert()">添加</el-button>
        <el-button type="primary" size="mini" :disabled="tableList.id == null" @click="update(1)">修改</el-button>
        <el-button type="primary" size="mini" :disabled="tableList.id == null" @click="update(2)">复制</el-button>
        <el-button type="primary" size="mini" :disabled="tableList.id == null || tableList.isSell == true"  @click="updateOnsale(true)">上架</el-button>
        <el-button type="primary" size="mini" :disabled="tableList.id == null || tableList.isSell == false"  @click="updateOnsale(false)">下架</el-button>
      </button-wrap>
    </div>
    <qc-table ref="table" :height="domHeight" :table-list="showData" :search="searchData" url="api/admin/v1/product/page">
    </qc-table>
    <dig-form v-if="digFromWrap" :visible="digFromWrap" :id="updateId" @close="close" ></dig-form>
  </div>
</template>

<script>
import { tableMixin } from "@/assets/js/tableMixin.js";
import SearchWrap from "common/SearchWrap";
import ButtonWrap from "common/ButtonWrap";
import api from "api/common.js";
export default {
  mixins: [tableMixin],
  components: { SearchWrap, ButtonWrap },
  data() {
    return {
      digFromWrap: false,
      updateId: "",
      searchData: {
        isSell: true,
        name: "",
        categoryId: ""
      },
      showData: [
        { prop: "sortNumber", label: "排序号" },
        { prop: "icon", label: "图标", template: 'img', isPrefix: true },
        { prop: "name", label: "商品名称" },
        { prop: "categoryName", label: "分类" },
        { prop: "price", label: "价格", template: 'price' },
        { prop: "isSell", label: "上架", template: 'Boolean' },
        { prop: "isHot", label: "热销", template: 'Boolean' },
        { prop: "createTime", label: "创建时间" },
      ],
      category: []
    };
  },
  created() {
    this.listCategory();
  },
  methods: {
    listCategory() {
      api.listCategory().then(res => {
        this.category = res.data.data.list
      })
    },
    insert () {
      this.$router.push('list/detail')
    },
    update (count) {
      this.updateId = this.tableList.id;
      if (count === 1) {
        this.$router.push(`list/detail?id=${this.tableList.id}`);
      } else {
        this.$router.push(`list/detail?id=${this.tableList.id}&copy=true`);
      }
    },
    deleteConfirm () {
      this.$confirm("是否删除该数据?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.delete()
      })
      .catch(() => {
        return
      })
    },
    delete () {
      api.deleteProduct({id: this.tableList.id}).then(res => {
        this.searchKeep()
        this.$message({
          message: "删除成功",
          type: "success"
        })
      })
    },
    updateOnsale(state) {
      api.updateOnsale({id: this.tableList.id, isSell: state}).then(res => {
        this.searchKeep()
        this.$message({
          message: state ? "上架成功" : "下架成功",
          type: "success"
        })
      })
    },
    close(flag) {
      this.updateId = "";
      this.digFromWrap = false;
      if(typeof flag == 'boolean' && flag){
        this.searchKeep();
      }
    }
  }
};
</script>
