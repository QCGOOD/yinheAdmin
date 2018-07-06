import fetch from './config';

const product = {
  // 查看订单
  getOrder(params) {
    return fetch.get('api/v1/admin/order/get', params)
  },
  // 修改订单物流
  updateLogistics(params) {
    return fetch.postJson('api/v1/admin/order/updateLogistics', params)
  },

  // 添加商品
  addProduct(params) {
    return fetch.postJson('api/admin/v1/product/insert', params)
  },
  // 查看商品
  getProduct(params) {
    return fetch.get('api/admin/v1/product/get', params)
  },
  // 更新商品
  updateProduct(params) {
    return fetch.postJson('api/admin/v1/product/update', params)
  },
  // 删除商品
  deleteProduct(params) {
    return fetch.post('api/admin/v1/product/delete', params)
  },

  updateOnsale(params) {
    return fetch.post('api/admin/v1/product/update_onsale', params)
  }
}

export default product
