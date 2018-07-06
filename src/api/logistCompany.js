import fetch from './config';

const logistCompany = {
  // 物流公司列表
  listLogistCompany(params) {
    return fetch.get('api/admin/v1/logist_company/page', params)
  },
  //添加物流公司
  addLogistCompany(params) {
    return fetch.post('api/admin/v1/logist_company/insert', params)
  },
  //更新物流公司
  updateLogistCompany(params) {
    return fetch.post('api/admin/v1/logist_company/update', params)
  },
  //查询物流公司
  getLogistCompany(params) {
    return fetch.get('api/admin/v1/logist_company/get', params)
  },
  //删除物流公司
  deleteLogistCompany(params) {
    return fetch.post('api/admin/v1/logist_company/delete', params)
  },
};

export default logistCompany;