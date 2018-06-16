1.npm install -g vue-cli
2.vue  init
3.vue init  wbepack weinihaigou
4.cd weinihaigou
5.npm run dev
npm i(安装nodemodules)
1.安装npm i axios -s
2.在main.js里面引入axios:import axios from 'axios';
    并且将axios注册成Vue的全局变量:
    Vue.prototype.$http=axios;
3.安装reset.css(npm i --save reset-css) 并在app.vue导(@import'reset-css/reset.css' ;)
4.安装sass (cnpm i  node-sass sass-loader -D)
(卸载sass:npm uninstall node-sass) 
5.安装路由cnpm i vue-router -S
6.安装swiper插件 npm install vue-awesome-swiper --save
7.安装rem插件 :
    1.下载lib-flexible
    npm i lib-flexible --save
    2.引入lib-flexible
    在main.js中引入lib-flexible
    import 'lib-flexible/flexible'






1.把主要的模块建立起来
建立模块 各个模块的跳转,把几个模块引入router里面的index.js
