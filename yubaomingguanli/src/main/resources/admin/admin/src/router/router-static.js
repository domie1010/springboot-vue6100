import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import huodong from '@/views/modules/huodong/list'
    import huodongCollection from '@/views/modules/huodongCollection/list'
    import huodongLiuyan from '@/views/modules/huodongLiuyan/list'
    import huodongYuyue from '@/views/modules/huodongYuyue/list'
    import news from '@/views/modules/news/list'
    import yonghu from '@/views/modules/yonghu/list'
    import ziliao from '@/views/modules/ziliao/list'
    import ziliaoCollection from '@/views/modules/ziliaoCollection/list'
    import ziliaoLiuyan from '@/views/modules/ziliaoLiuyan/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryHuodong from '@/views/modules/dictionaryHuodong/list'
    import dictionaryHuodongCollection from '@/views/modules/dictionaryHuodongCollection/list'
    import dictionaryHuodongYuyueYesno from '@/views/modules/dictionaryHuodongYuyueYesno/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryZiliao from '@/views/modules/dictionaryZiliao/list'
    import dictionaryZiliaoCollection from '@/views/modules/dictionaryZiliaoCollection/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryHuodong',
        name: '报考活动类型',
        component: dictionaryHuodong
    }
    ,{
        path: '/dictionaryHuodongCollection',
        name: '收藏表类型',
        component: dictionaryHuodongCollection
    }
    ,{
        path: '/dictionaryHuodongYuyueYesno',
        name: '报名状态',
        component: dictionaryHuodongYuyueYesno
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryZiliao',
        name: '公共资料类型',
        component: dictionaryZiliao
    }
    ,{
        path: '/dictionaryZiliaoCollection',
        name: '收藏表类型',
        component: dictionaryZiliaoCollection
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/huodong',
        name: '报考活动',
        component: huodong
      }
    ,{
        path: '/huodongCollection',
        name: '报考活动收藏',
        component: huodongCollection
      }
    ,{
        path: '/huodongLiuyan',
        name: '报考活动留言',
        component: huodongLiuyan
      }
    ,{
        path: '/huodongYuyue',
        name: '活动报名',
        component: huodongYuyue
      }
    ,{
        path: '/news',
        name: '公告资讯',
        component: news
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/ziliao',
        name: '公共资料',
        component: ziliao
      }
    ,{
        path: '/ziliaoCollection',
        name: '公共资料收藏',
        component: ziliaoCollection
      }
    ,{
        path: '/ziliaoLiuyan',
        name: '公共资料留言',
        component: ziliaoLiuyan
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
