import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Home Page
    {
      path: '/',
      name: 'home',
      component: ()=> import('../views/HomeView.vue')
    },
    
    // About All Page Call
    {
      path: '/about/principal',
      name: 'principal', 
      component: () => import('../views/About/Principal.vue')
    },
    {
      path: '/about/govorning',
      name: 'govorning', 
      component: () => import('../views/About/Governing.vue')
    },
    {
      path: '/about/institure',
      name: 'institure', 
      component: () => import('../views/About/Institute.vue')
    },

    // Student All Page Call
    {
      path: '/student/class-result',
      name: 'class-result', 
      component: () => import('../views/Student/ClassResults.vue')
    },
    {
      path: '/student/class-routine',
      name: 'class-routine', 
      component: () => import('../views/Student/ClassRoutine.vue')
    },
    {
      path: '/student/entertainment',
      name: 'entertainment', 
      component: () => import('../views/Student/Entertainment.vue')
    },
    {
      path: '/student/lesson-outline',
      name: 'lesson-outline', 
      component: () => import('../views/Student/LessonOutline.vue')
    },
    {
      path: '/student/mandatory',
      name: 'mandatory', 
      component: () => import('../views/Student/Mandatory.vue')
    },
    {
      path: '/student/scholarship',
      name: 'scholarship', 
      component: () => import('../views/Student/Scholarship.vue')
    },
    {
      path: '/student/school-dress',
      name: 'school-dress', 
      component: () => import('../views/Student/SchoolDress.vue')
    },

    // Admission All Page Call
    {
      path: '/admission/admission-information',
      name: 'admission-information', 
      component: () => import('../views/Admission/Admission Information.vue')
    },
    {
      path: '/admission/online-admission',
      name: 'online-admission', 
      component: () => import('../views/Admission/Online Admission.vue')
    },
    {
      path: '/admission/rules-regulation',
      name: 'rules-regulation', 
      component: () => import('../views/Admission/Rules Regulation.vue')
    },
    {
      path: '/admission/subjects',
      name: 'subjects', 
      component: () => import('../views/Admission/Subjects.vue')
    },

    // Result All Page Call
    {
      path: '/results/best-of-board',
      name: 'best-of-board', 
      component: () => import('../views/Results/Best of Board.vue')
    },
    {
      path: '/results/best-of-institute',
      name: 'best-of-institute', 
      component: () => import('../views/Results/Best of Institute.vue')
    },
    {
      path: '/results/board-results',
      name: 'board-results', 
      component: () => import('../views/Results/Board Results.vue')
    },
    {
      path: '/results/institute-results',
      name: 'institute-results', 
      component: () => import('../views/Results/Institute Results.vue')
    },
    {
      path: '/results/previous/jsc-results',
      name: 'jsc-results', 
      component: () => import('../views/Results/Previous Result/JSC.vue')
    },
    {
      path: '/results/previous/ssc-results',
      name: 'ssc-results', 
      component: () => import('../views/Results/Previous Result/SSC.vue')
    },

// All List Call
    {
      path: '/lists/employee',
      name: 'employee', 
      component: () => import('../views/Lists/Employee.vue')
    },
    {
      path: '/lists/retired-principals',
      name: 'retired-principals', 
      component: () => import('../views/Lists/Retired Principals.vue')
    },
    {
      path: '/lists/teachers',
      name: 'teachers', 
      component: () => import('../views/Lists/Teachers.vue')
    },

    // Contact All Page Call
    {
      path: '/contact/contact-us',
      name: 'contact-us', 
      component: () => import('../views/Contact Us/Contact Us.vue')
    },

    // MPO All Page Call
    {
      path: '/mpo/inventory-management',
      name: 'inventory-management', 
      component: () => import('../views/Mpo/Inventory Management.vue')
    },
    {
      path: '/mpo/mpo-search',
      name: 'mpo-search', 
      component: () => import('../views/Mpo/MPO Search.vue')
    },
    {
      path: '/mpo/online-application',
      name: 'online-application', 
      component: () => import('../views/Mpo/Online Application.vue')
    },

    // Gallery All Page Call
    {
      path: '/gallery/photo-gallery',
      name: 'photo-gallery', 
      component: () => import('../views/Gallery/Photo Gallary.vue')
    },
    {
      path: '/gallery/video-gallery',
      name: 'video-gallery', 
      component: () => import('../views/Gallery/Video Gallery.vue')
    },

    // Login All Page Call
    {
      path: '/login/administrator',
      name: 'administrator', 
      component: () => import('../views/Login/Administrator.vue')
    },
    {
      path: '/login/parents',
      name: 'parents', 
      component: () => import('../views/Login/Parents.vue')
    },
    {
      path: '/login/students',
      name: 'students', 
      component: () => import('../views/Login/Students.vue')
    },
    {
      path: '/login/teachers',
      name: 'teachers', 
      component: () => import('../views/Login/Teachers.vue')
    },
    // Sign UP Page Call
    {
      path: '/signup',
      name: 'signup',
      component: ()=> import('../views/SignUpView.vue')
    },

    // Latest Post View page
    {
      path: '/all-news',
      name: 'all-news',
      component: ()=> import('../components/NewsBlog.vue')
    },


    
    // Test Page
    {
      path: '/testing',
      name: 'testing',
      component: ()=> import('../views/TestView.vue')
    },

    // 404 Not Found Page
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: () => import('../views/NotFoundview.vue') 
    }
  ]
})

export default router
