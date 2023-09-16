<script setup>
import { ref, onMounted } from 'vue'
import Slider from '../../components/Slider.vue';
import Navbar from '../../components/Navbar.vue';
import LeftSideView from '../Home/LeftSideView.vue';
import RightSideView from '../Home/RightSideView.vue';
import Footer from '../../components/Footer.vue';
import axios from 'axios';

const allRoutine = ref([])
const loading = ref(true)
onMounted( async () => {
  try {
    let url = 'https://raw.githubusercontent.com/Shafikul-1/school-management-1/master/data/class-routine.json'
    let res = await axios.get(url)
    console.log(res.data)
    allRoutine.value = res.data.routine
    loading.value = false
  } catch (error) {
    console.log('Your Error => ' + error)
  }
})
// const EditAndDeletIcon = ref(false)

</script>

<template>
<!-- All pages will have it -->
<Slider/>
<Navbar/>
  <div class="container-fluid">
    <div class="row">
      <!-- Right Side Content -->
      <div class="col-md-3">
        <RightSideView/>
      </div>

<!-- Current Page Content -->
      <div class="col-md-6">
        <div class="">
          <h1 class="text-center">Class Routine Page</h1>
<!-- Design Component -->
          <div class="d-flex justify-content-center">
            <i class="designLine fa-solid fa-ellipsis"></i>
            <i class="designLine fa-brands fa-centos"></i>
            <i class="designLine fa-solid fa-ellipsis"></i>
         </div>
          <ul class="list-unstyled d-flex text-capitalize gap-2">
            <li>Home /</li>
            <li>Class Routine /</li>
          </ul>
        </div>
        <div class="d-flex justify-content-between">
          <h3>Daily Result Sheet</h3>
          <RouterLink to="/student/class-routine/create">
            <i class="fa-solid fa-plus plusIcon"></i>
          </RouterLink>
        </div>
<!-- All Work Start -->
        <!-- Create Component -->
        <div class="container-fluid position-relative">
          <div class="row">
            <div class="col-md-">
              <div class="createComponent">
                <div class="compontentPosition">
                  <RouterView/>
                </div>
              </div>
            </div>
          </div>

          <!-- Work -->
          <div class="row">
            <div class="col-md-12 "> 
              <div v-for="(allDetails, index) in allRoutine" :key="index" class="position-relative mb-4">
                <!-- Hover Edit And Delet Button -->
                <div class="position-absolute HoverDeletEditBtn" v-show="!allDetails.id">
                  <div class="d-flex justify-content-center gap-4">
                    <div class="iconDivColor edit">
                      <i class="edit fa-regular fa-pen-to-square"></i>
                    </div>
                    <div class="iconDivColor delete">
                      <i class="delete fa-solid fa-trash-can"></i>
                    </div>
                  </div>
                </div>
                <!-- End -->
                <!-- Toggole Pannel Start -->
                <div class="panel panel-default" >
                    <div class="panel-heading showIcon"  @click="allDetails.toggle = !allDetails.toggle" @mouseover="allDetails.id = !allDetails.id">
                      <h4 class="panel-title">
                        <a class="btn btn-primary toggleBtn btn-block w-100 text-capitalize">{{ allDetails.className }}</a>
                      </h4>
                    </div>
                    <div id="collapse3" class="panel-collapse" v-show=" allDetails.toggle == true">
                      <div class="panel-body">
                        <table class="table table-bordered my-2" v-for="(rotin, index) in allDetails.classRotine" :key="index">
                          <tbody> 
                            <tr class="gradeA">
                              <td width="100" class=" dayNameStyle ">{{ rotin.dayName }}</td>
                              <td>
                                <div class="btn-group">
                                  <span class="label ">
                                    <div class="row">
                                      <!-- OH Complete subjectAndtime Ata Mistake Hoycilo {{ console.log(rotin.subjectAndtime) }}  -->
                                        <div class="col-md-3 classRotineGap" v-for="(sobDeatils, index) in rotin.subjectAndtime" :key="index">  
                                          <button type="button" class="btn btn-warning rotuineDetalis" >{{ sobDeatils.name }} ({{ sobDeatils.time }})</button>
                                        </div>
                                    </div>
                                  </span>  
                                </div> 
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<!-- Left Side Content -->
      <div class="col-md-3">
        <LeftSideView/>
      </div>
    </div>
  </div> 
<!-- Footer Content -->
  <Footer/>
</template>

<style scoped>
.designLine{
  font-size: 3rem;
}

.toggleBtn{
  color: black;
}
.toggleBtn:hover{
  color: white;
}
.panel-default{
    background: #ffffff;
    border-radius: 13px;
    box-shadow: 0px 2px 2px 1px #cacaca78;
    padding: 4px;
    margin: 10px 0;
}
.panel-default > .panel-heading{
  background-color: #fff;
    border-color: #4ebd55;
}
.panel-default > .panel-heading .panel-title{
  margin: 0;
}
.btn.btn-primary{
  background: #45aed6;
    border-color: #2a95be;
}
.panel-default > .panel-heading + .panel-collapse > .panel-body{
  border-top-color: #eee;
}
.classRotineGap{
  margin: 2px 0;
}
.rotuineDetalis{
  font-size: 12px;
    text-transform: capitalize;
    font-weight: 600;
    padding: 2px 8px;
}
.dayNameStyle{
  display: flex;
  justify-content: center;
  align-items: center; 
  text-transform: capitalize;
  }
  .iconDivColor i{
    font-size: 20px;
    font-weight: 900;
  }
.iconDivColor{ 
    padding: 0px 2px;
    border-radius: 11px;
    cursor: pointer;
}
.iconDivColor.edit:hover{
 color: green;
}
.iconDivColor.delete:hover{
  color: red;
}
.HoverDeletEditBtn{
    top: -34px;
    left: 39%;
    background: #00000033;
    padding: 5px 11px;
    box-shadow: 0px 2px 7px 1px lightslategray;
    border-radius: 6px;
}
.plusIcon{
  font-size: 30px;
    color: #49a748;
    cursor: pointer;
    padding: 7px;
    box-shadow: inset 0px 0px 4px 2px #49a748;
    border-radius: 5px;
    transition: 0.5s;
}
.plusIcon:hover{
  background: green;
  color:white
}
.plusIcon:focus{
  border: 4px solid blue;
}
.compontentPosition{
  border-radius: 7px;
  position: absolute;
    z-index: 2;
    top: 11px;
    left: -20%;
    box-shadow: 1px 1px 10px 3px #363636;
}
</style>



<!--Admin Pannel Design

                    <div class="row ">
                      <div class="col-md-1 align-self-center d-flex justify-content-center">
                          <i class="iconClass fa-regular fa-pen-to-square"></i>
                      </div>
                      <div class="panel-heading col-md-10"  @click="allDetails.toggle = !allDetails.toggle">
                        <h4 class="panel-title">
                          <a class="btn btn-primary toggleBtn btn-block w-100 text-capitalize">{{ allDetails.className }}</a>
                        </h4>
                      </div>
                      <div class="col-md-1 d-flex align-self-center justify-content-center">
                            <i class="iconClass fa-solid fa-trash-can"></i>
                        </div>
                    </div> -->