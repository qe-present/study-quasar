import fileBaseRoutes from '~pages'
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: fileBaseRoutes,
    redirect: '/tabs'
  }
]
export default routes
