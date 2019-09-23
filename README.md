# xq-ui-frame
##
[项目搭建教程](www.rxshc.com/180.html). 
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
### bundle lib 打包组件库
```
npm run lib
```
### npm 发布
```
npm config set registry http://registry.npmjs.org 
npm login
npm publish
```
### 使用组件库
```
npm install vcolorpicker -S
// 全部引入
import Frame from 'xq-ui-frame'
Vue.use(Frame)
// 按需引入
import { test } from 'xq-ui-frame'
Vue.use(test)
```