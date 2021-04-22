const { override, fixBabelImports,addLessLoader } = require('customize-cra');
// 配置具体的修改规则   config 原有的配置
// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
//   return config;
// };
module.exports = override(

  fixBabelImports('import', {  // import 按需引入
    libraryName: 'antd',       // antd   antd
    libraryDirectory: 'es',    // es模块
    // style: 'css',              // 对css模块进行按需按需引入
    style:true,
  }),
  addLessLoader({
    javascriptEnabled: true,  // 允许修改主题颜色
    modifyVars: { '@primary-color': 'orange' }, //modify修改 var变量
  }),
);