import fetch from './config';

import product from './product'
import attachment from './attachment'
import category from './category'
import logistCompany from './logistCompany'

export default {
  // 加速  accelerator
  //用户登录
  login(data) {
    return fetch.post('system_user/login', data);
  },
  // 用户退出
  logout() {
    return fetch.post('system_user/logout')
  },
  // 修改密码
  password(model) {
    return fetch.put(`admin/users/password`, model);
  },
  // 所有表格数据 通过此接口 统一发放
  table(url, data) {
    return fetch.get(url, data);
  },

  // 图片上传
  upLoadImg(params) {
    return fetch.postImg('api/v1/attachments/images/tencent_cloud', params)
  },

  ...category,
  
  // 商城
  ...product,

  // 图片
  ...attachment,

  // 物流公司
  ...logistCompany,
}
