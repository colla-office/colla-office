/*************************************************
 ** preload为预加载模块，该文件将会在程序启动时加载 **
 *************************************************/
const Addon = require('ee-core/addon');

/**
* 预加载模块入口
*/
module.exports = async () => {

  // 示例功能模块，可选择性使用和修改
  setTimeout(()=>{
    console.log('.....load tray');
    Addon.get('tray').create();
  }, 3000)
  Addon.get('security').create();
}
