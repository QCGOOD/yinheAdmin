<template>
  <el-dialog title="裁剪图片" :visible.sync="visible" width="840px" :append-to-body="true" :before-close="close" :close-on-click-modal="false" :close-on-press-escape="false">
    <div class="cropper-content">
      <!-- <div class="file-btn">
        添加图片
        <input type="file" id="file">
      </div> -->
      <div class="left">
        <el-upload
          style="margin-bottom: 5px;"
          ref="upload"
          action=""
          :on-change="handleChange"
          :on-remove="handleRemove"
          :before-upload="beforeUpload"
          :show-file-list="false"
          :auto-upload="false">
          <el-button slot="trigger" size="mini" type="primary">选取文件</el-button>
        </el-upload>
        <!-- <input type="file" id="file">上传</input>
        <input type="text"> -->
        
        <div class="cropper">
          <vueCropper
            ref="cropper"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
            :info="true"
            :full="option.full"
            :canMove="option.canMove"
            :canMoveBox="option.canMoveBox"
            :original="option.original"
            :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :fixed="option.fixed"
            :fixedNumber="option.fixedNumber"
            :fixedBox="option.fixedBox"
            @realTime="realTime"
            @imgLoad="imgLoad"
          ></vueCropper>
        </div>
          
      </div>
      <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px'}">
        <div :style="previews.div" class="preview">
          <img :src="previews.url" :style="previews.img">
        </div>
      </div>
    </div>
    <div class="bottom-btn">
      
      <el-button type="primary" size="mini" v-if="!crap" @click="startCrop()">裁剪</el-button>
      <el-button type="primary" size="mini" v-else @click="stopCrop()">停止</el-button>
      <el-button type="primary" size="mini" @click="down()">下载</el-button>
      <el-button type="primary" size="mini" @click="upload()">上传</el-button>
      
    </div>
    <!-- <div class="footer-btn">
      <div class="scope-btn">
        <label class="btn" for="uploads">更换图片</label>
        <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)">

        <button  @click="changeScale(1)">+</button>
        <button  @click="changeScale(-1)">-</button>
        <button  @click="rotateLeft">↺</button>
        <button  @click="rotateRight">↻</button>
      </div>
      <div class="upload-btn">
        <button  @click="down('blob')">下载</button>
      </div>
    </div> -->
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="close(false)">取 消</el-button>
      <el-button size="small" type="primary" @click="upload()">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import VueCropper from 'vue-cropper'
import api from "api/common";

export default {
  components: {
    VueCropper
  },
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    imageUrl: String,
    // option: {
    //   type: Object,
    //   default: () => {
    //     return {
    //     }
    //   }
    // }
  },
  data() {
    return {
      // visible: true,
      img: '',
      previews: {},
      option: {
        img: '',
        size: 1,
        full: false,
        outputType: 'png',
        canScale: false,
        canMove: true,
        original: false,
        canMoveBox: true,
        autoCrop: false,
        autoCropWidth: 300,
        autoCropHeight: 250,
        fixed: false,
				fixedNumber: [4, 3],
        fixedBox: false,
      },
      crap: false,
      file: {}
    }
  },
  created() {
    // this.option.img = this.imgHost + this.img
    // this.option.img = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png'
  },
  watch: {
    visible(val) {
      if (val) {
        this.img = this.imageUrl
        if (this.img) {
          // this.option.img = this.imgHost + this.img
           this.option.img = 'http://activity-1255600302.cosgz.myqcloud.com/attachment/activity/0000684539c44e30aceb051951136c06.png'
          // this.option.img = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png'
        }
      }
    }
  },
  methods: {
    close() {
      // this.visible = false
      this.$emit('close-Cropper')
    },
    realTime(data) {
      this.previews = data
      // console.log('realTime === ', data)
    },
    imgLoad(msg) { 
      console.log('imgLoad === ', msg) 
    },
    startCrop () {
			// start
			this.crap = true
      this.$refs.cropper.startCrop()
      console.log(this.crap)
		},
		stopCrop () {
			//  stop
			this.crap = false
			this.$refs.cropper.stopCrop()
    },
    down () {
      // this.$refs.cropper.getCropData((data) => {
      //   console.log('data', data)
      // })
      this.option.img = this.imgHost + this.img
    },
    dataURLtoFile(dataurl, filename) {//将base64转换为文件
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    },
    upload() {
      this.$refs.cropper.getCropData((data) => {
        console.log('data', data)
        let file = this.dataURLtoFile(data, this.file.name)
        console.log(file)
        let params = new FormData()
        params.append('imageType', 'activity')
        params.append('file', file)
        api.upLoadImg(params).then(res => {
          console.log(res.data)
        })
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleChange(file, fileList) {
      if (!this.beforeUpload(file)) {
        // fileList = []
        this.$refs.upload.clearFiles();
      } else {
        this.option.img = file.url
      }
      
    },
    beforeUpload(file) {
      console.log(file)
      this.file = file;
      const isJPG = file.raw.type === "image/jpeg" || file.type === "image/png";
      // const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      // if (!isLt2M) {
      //   this.$message.error("上传头像图片大小不能超过 2MB!");
      // }
      return isJPG;
    }
  }
}
</script>

<style lang="less" scoped>
.cropper-content {
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  .cropper{
    width: 400px;
    height: 400px;
  }
  .show-preview{
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    margin-top: 33px;
    .preview{
      overflow: hidden;
      border: 1px solid #b3b3b3;
      box-sizing: border-box;
      background: #cccccc;
      margin-left: 40px;
    }
  }
}
.bottom-btn {
  // margin-top: 10px;
  padding: 10px 50px;
}
</style>
