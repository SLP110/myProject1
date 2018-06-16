import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import home from '@/components/home';
import fenlei from '@/components/fenlei';
import gouwuche from '@/components/gouwuche';
import my from '@/components/my';
import myLoading from '@/components/myLoading';
export default new Router({
  routes: [
    {path:'',redirect:'/home'},
    {path:'/home',name:'home',component:home},
    {path:'/fenlei',name:'fenlei',component:fenlei},
    {path:'/gouwuche',name:'gouwuche',component:gouwuche,
         //设置路由守卫,判断是否已经登录
         beforeEnter:(to,from,next)=>{
          var isLogin=localStorage.getItem('isLogin');
          // console.log(isLogin);//true
          if(isLogin=='true'){
            console.log('登陆成功');
            next();
          }else{
            localStorage.setItem('toPath',to.name);
            next({path:'/myLoading',name:'myLoading',component:myLoading});          
          }
        }
   },
    {path:'/myLoading',name:'myLoading',component:myLoading},
    {path:'/my',name:'my',component:my,
        //设置路由守卫,判断是否已经登录
      beforeEnter:(to,from,next)=>{
        var isLogin=localStorage.getItem('isLogin');
        // console.log(isLogin);//true
        if(isLogin=='true'){
          console.log('登陆成功');
          next();
        }else{
          //把to的信息赋值给toPath,并用localSrtorage保存
          localStorage.setItem('toPath',to.name);
          next({path:'/myLoading',name:'myLoading',component:myLoading}); 
        }
      }
        
    },
  ]
})
