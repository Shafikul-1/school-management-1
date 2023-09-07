import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/communication',
      name: 'communication', 
      component: () => import('../views/CommunicationView.vue')
    },
    {
      path: '/result',
      name: 'result', 
      component: () => import('../views/ResultView.vue')
    },
    {
      path: '/exam',
      name: 'exam', 
      component: () => import('../views/ExamView.vue')
    },
    {
      path: '/image-gallery',
      name: 'image-gallery', 
      component: () => import('../views/Gallery/ImageView.vue')
    },
    {
      path: '/video-gallery',
      name: 'video-gallery', 
      component: () => import('../views/Gallery/VideoView.vue')
    },
    {
      path: '/jsc-result',
      name: 'jsc-result', 
      component: () => import('../views/PreviousResult/JSCView.vue')
    },
    {
      path: '/ssc-result',
      name: 'ssc-result', 
      component: () => import('../views/PreviousResult/SSCView.vue')
    },
    {
      path: '/contact',
      name: 'contact', 
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery', 
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/teaher-details',
      name: 'teaher-details', 
      component: () => import('../views/TeacherDetails/teacherDeatailsView.vue')
    },



    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: () => import('../views/NotFoundview.vue') 
    }
  ]
})

export default router
