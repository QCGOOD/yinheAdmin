let yinhe = {
  title: "银禾后台管理",
  type: 1,
  baseHost: 'http://x.wego168.com/',

  projectName: function () {
    let pathname = window.location.pathname.split('/')[1];
    console.log()
    let name = process.env.NODE_ENV === "production" ? pathname : "yinhe_test"
    return name
  },
}

export default yinhe