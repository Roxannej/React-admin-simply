/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      target: 'http://192.168.50.168:8888',
      //  target: 'http://47.92.144.224:9000',
      //  target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  test: {
    '/api/': {
      //  target: 'https://preview.pro.ant.design',
      target: 'http://192.168.50.168:8888',
      //  target: 'http://47.92.144.224:9000',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      //  target: 'https://preview.pro.ant.design',
      target: 'http://192.168.50.168:8888',
      // target: 'http://47.92.144.224:9000',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
