<script setup>
 import { RouterLink } from 'vue-router'

 const navBar = [
  {
    heading: 'Home',
    icon : 'fa fa-home',
    link: '/'
  },
  {
    heading: 'About',
    icon: 'fa fa-user',
    link: '/',
    dropDown: [
      {
        name: `Principal's Message`,
        link: `/about/principal`
      },
      {
        name: `Governing Body`,
        link: `/about/govorning`
      },
      {
        name: `Institute Information`,
        link: `/about/institure`
      },

    ]
  },
  {
    heading: 'Students',
    icon: 'fa fa-users',
    link: '/',
    dropDown: [
      {
        name: `Class Results`,
        link: `/student/class-result`
      },
      {
        name: `Class Routine`,
        link: `/student/class-routine`
      },
      {
        name: `Entertainment`,
        link: `/student/entertainment`
      },
      {
        name: `Lesson Outline`,
        link: `/student/lesson-outline`
      },
      {
        name: `Mandatory`,
        link: `/student/mandatory`
      },
      {
        name: `Scholarship`,
        link: `/student/scholarship`
      },
      {
        name: `School Dress`,
        link: `/student/school-dress`
      },
      
    ]
  },
  {
    heading: 'Admission',
    icon: 'fa fa-file-text-o',
    link: '/',
    dropDown: [
      {
        name: `Admission Information`,
        link: `/admission/admission-information`
      },
      {
        name: `Online Admission`,
        link: `/admission/online-admission`
      },
      {
        name: `Rules Regulation`,
        link: `/admission/rules-regulation`
      },
      {
        name: `Subjects`,
        link: `/admission/subjects`
      },
      
    ]
  },
  {
    heading: 'Results',
    icon: 'fa fa-graduation-cap',
    link: '/',
    dropDown: [
      {
        name: `Best of Board`,
        link: `/results/best-of-board`
      },
      {
        name: `Best of Institute`,
        link: `/results/best-of-institute`
      },
      {
        name: `Board Results`,
        link: `/results/board-results`
      },
      {
        name: `Institute Results`,
        link: `/results/institute-results`
      },
      {
        name: `JSC Results`,
        link: `/results/previous/jsc-results`
      },
      {
        name: `SSC Results`,
        link: `/results/previous/ssc-results`
      },
      
    ]
  },
  {
    heading: 'Lists',
    icon: 'fa fa-list',
    link: '/',
    dropDown: [
      {
        name: `Teachers`,
        link: `/lists/teachers`
      }, 
      {
        name: `Retired Principals`,
        link: `/lists/retired-principals`
      },
      {
        name: `Employee`,
        link: `/lists/employee`
      },
    ]
  },
  {
    heading: 'Contact Us',
    icon: 'fa fa-map-marker',
    link: '/',
    dropDown: [
      {
        name: `contact`,
        link: `/contact/contact-us`
      },
    ]
  },
  {
    heading: 'Mpo',
    icon: 'fa fa-external-link',
    link: '/',
    dropDown: [
      {
        name: `Inventory Management`,
        link: `/mpo/inventory-management`
      },
      {
        name: `MPO Search`,
        link: `/mpo/mpo-search`
      },
      {
        name: `Online Application`,
        link: `/mpo/online-application`
      },
      
    ]
  },
  {
    heading: 'gallery',
    icon: 'fa-brands fa-galactic-republic',
    link: '/',
    dropDown: [
      {
        name: `Photo Gallary`,
        link: `/gallery/photo-gallery`
      },
      {
        name: `Video Gallery`,
        link: `/gallery/video-gallery`
      },  
    ]
  },
  {
    heading: 'Login',
    icon: 'fa fa-sign-in',
    link: '/',
    dropDown: [
      {
        name: `Administrator`,
        link: `/login/administrator`
      },
      {
        name: `Teachers`,
        link: `/login/teachers`
      },
      {
        name: `Parents`,
        link: `/login/parents`
      },
      {
        name: `Students`,
        link: `/login/students`
      },
      
      
    ]
  },
  
 ]
</script>

<template>
  <div class="w-100">
    <nav class="sticky-top navbar navbar-expand-lg navbarStyle">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <!-- <RouterLink to="/" class="navbar-brand">Bokapur</RouterLink> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown navAllItem" v-for="(navAll, index) in navBar" :key="index">
                    <RouterLink 
                      :to="navAll.link" 
                      data-toggle="dropdown" 
                      :class="navAll.heading.toLocaleLowerCase() == 'home' ? '' : 'dropdown-toggle'" 
                      class="nav-link text-capitalize" 
                      role="button" 
                      :data-bs-toggle="navAll.heading.toLocaleLowerCase() == 'home' ? '' : 'dropdown'"
                      data-bs-toggle="" 
                      aria-expanded="false"
                      >
                        <i :class="navAll.icon" class="iconAndText"></i>{{ navAll.heading }}
                    </RouterLink>
                    <ul class="dropdown-menu">
                      <li v-for="(dropDownitem, index) in navAll.dropDown" :key="index"  class="dropdown-item">
                        <RouterLink :to="dropDownitem.link"  class="nav-link">
                          <i class="fa fa-angle-right iconAndText"></i>{{ dropDownitem.name }}
                        </RouterLink>
                      </li>
                    </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>

</template>
<style scoped>
.navAllItem{
  margin-left: 10px;
}
.iconAndText{
  margin: 0 7px 0 0px;
}
.navbarStyle{
  background: #45AED6;
  box-shadow: 0px 2px 12px 0px black;
}
</style>