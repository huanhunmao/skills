
// 配置文件，包含 umi 内置功能和插件的配置。
import { defineConfig } from 'umi';

export default defineConfig({
 
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // 新写的路由页面需要在这里注册
    { path: '/', component: '@/pages/index' },
    { path: '/let', component: '@/pages/let' },
  ],
  // 热更新
  fastRefresh: {},
  
});


