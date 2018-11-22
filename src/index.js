// colors console.log 文本添加字体颜色, 美观
// 接收命令行参数, 提供基础信息提示功能
const commander = require('commander');

// 内部模块
const {
  existsSync,
} = require('fs');
const {
  resolve,
} = require('path');
const {
  version,
} = require('../package.json');

require('colors');

commander.version(version, '-v,--version')
  .parse(process.argv);

const [todo = ''] = commander.args;

if (existsSync(resolve(__dirname, `command/${todo}.js`))) {
  require(`./command/${todo}.js`);
} else {
  console.log(
    `
      你输入了未知指令, 小哥哥我已经受不了挂了...
    `.red,
  );
  process.exit(-1);
}
