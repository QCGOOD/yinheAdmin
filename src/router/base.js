const base = [
  // 图片管理
  {
    path: "attachment",
    component: () =>
      import ('@/components/page/attachment/list'),
  },
  // 物流
  {
    path: "logistCompany",
    component: () =>
      import ('@/components/page/logistCompany/list'),
  },
  // 投诉
  {
    path: "complaint",
    component: () =>
      import ('@/components/page/complaint/list'),
  },
  // 购买意向列表
  {
    path: "purchaseIntention",
    component: () =>
      import ('@/components/page/purchaseIntention/list'),
  },
];

export default base;
