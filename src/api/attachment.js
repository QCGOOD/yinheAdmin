import fetch from './config';

const attachment = {
  // 图片列表
  listAttachment(params) {
    return fetch.get('api/admin/v1/picture/page', params)
  },
  //添加图片
  addAttachment(params) {
    return fetch.post('api/admin/v1/picture/insert', params)
  },
  //更新图片
  updateAttachment(params) {
    return fetch.post('api/admin/v1/picture/update', params)
  },
  //查询图片
  getAttachment(params) {
    return fetch.get('api/admin/v1/picture/get', params)
  },
  //删除图片
  deleteAttachment(params) {
    return fetch.post('api/admin/v1/picture/delete', params)
  },
};

export default attachment;