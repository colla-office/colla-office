/**
 * 基础路由
 * @type { *[] }
 */

const constantRouterMap = [
  {
    path: '/',
    name: 'Example',
    redirect: { name: 'ExampleHelloIndex' },
    children: [
      {
        path: '/example',
        name: 'ExampleHelloIndex',
        component: () => import('@/views/example/hello/Index.vue')
      },
      {
        path: '/example2',
        name: 'ExampleHelloIndex2',
        component: () => import('@/views/example/hello/Index2.vue')
      },
    ]
  },
]

export default constantRouterMap
