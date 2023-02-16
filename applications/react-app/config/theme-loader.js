
const path = require('path');

const ROOTPATH = path.join(process.cwd());
const APP_PATH = path.join(ROOTPATH, '/src');


function themeLoader(source) {
  const callback = this.async();
  const theme = `;@import '${APP_PATH}/styles/theme.less';`
  console.log(`${theme}\n${source}`);
  callback(null,`${source}\n${theme}`);
  
}

themeLoader.raw = false;


module.exports = themeLoader;
// export default themeLoader;