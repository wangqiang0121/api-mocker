module.exports = config => ({
  // mongo 配置
  mongoose: {
    url: 'mongodb://127.0.0.1/api-mock'
  },
  // 密码加密的key
  md5Key: '52851cb05258c8d98da1672d95729e53',
  // 发送邮件配置
  transporter: {
    appName: 'Api Mocker',
    host: 'smtp.exmail.qq.com',
    secure: true,
    port: 465,
    auth: {
      user: 'dxyf2e@dxy.cn',
      pass: 'Dxyf2e222'
    }
  }
})